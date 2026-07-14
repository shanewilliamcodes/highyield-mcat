do $$
begin
  if exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'profiles' and column_name = 'id')
     and not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'profiles' and column_name = 'user_id') then
    alter table public.profiles rename column id to user_id;
  end if;
end $$;

alter table if exists public.profiles add column if not exists daily_goal integer not null default 20 check (daily_goal between 1 and 200);
drop policy if exists "profiles are publicly readable" on public.profiles;
drop policy if exists "users update their own profile" on public.profiles;
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();
revoke all on function public.submit_study_session(text, integer, integer, integer, integer, integer) from public, anon, authenticated;

create schema if not exists private;

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 32),
  daily_goal integer not null default 20 check (daily_goal between 1 and 200),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  question_id text not null,
  subject text not null,
  topic_id text not null,
  subtopic_id text,
  correct boolean not null,
  response_ms integer check (response_ms is null or response_ms between 0 and 3600000),
  mode text not null check (mode in ('quiz', 'review', 'passage', 'daily')),
  run_id text,
  answered_at timestamptz not null default now()
);

create table if not exists public.mastery (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  subtopic_id text not null,
  subject text not null,
  topic_id text not null,
  correct_count integer not null default 0 check (correct_count >= 0),
  incorrect_count integer not null default 0 check (incorrect_count >= 0),
  current_streak integer not null default 0 check (current_streak >= 0),
  interval_days integer not null default 1 check (interval_days between 1 and 60),
  due_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, subtopic_id)
);

create table if not exists public.bookmarks (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  kind text not null check (kind in ('subtopic', 'question', 'passage')),
  item_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, kind, item_id)
);

create table if not exists public.question_reports (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  question_id text not null,
  reason text not null check (reason in ('ambiguous', 'incorrect', 'typo', 'duplicate', 'other')),
  detail text not null default '' check (char_length(detail) <= 1000),
  status text not null default 'open' check (status in ('open', 'reviewing', 'resolved', 'dismissed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.daily_challenge_results (
  user_id uuid not null references auth.users(id) on delete cascade,
  challenge_date date not null,
  score integer not null check (score >= 0),
  correct integer not null check (correct >= 0),
  total integer not null check (total between 1 and 50),
  duration_ms integer not null check (duration_ms between 1000 and 7200000),
  completed_at timestamptz not null default now(),
  primary key (user_id, challenge_date)
);

create index if not exists attempts_user_answered_idx on public.attempts(user_id, answered_at desc);
create index if not exists attempts_user_topic_idx on public.attempts(user_id, topic_id, answered_at desc);
create index if not exists mastery_user_due_idx on public.mastery(user_id, due_at);
create index if not exists reports_status_idx on public.question_reports(status, created_at desc);
create index if not exists daily_results_date_score_idx on public.daily_challenge_results(challenge_date, score desc, duration_ms asc);

alter table public.profiles enable row level security;
alter table public.attempts enable row level security;
alter table public.mastery enable row level security;
alter table public.bookmarks enable row level security;
alter table public.question_reports enable row level security;
alter table public.daily_challenge_results enable row level security;

create policy "profiles are publicly readable" on public.profiles for select to anon, authenticated using (true);
create policy "users insert own profile" on public.profiles for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users update own profile" on public.profiles for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy "users read own attempts" on public.attempts for select to authenticated using ((select auth.uid()) = user_id);
create policy "users insert own attempts" on public.attempts for insert to authenticated with check ((select auth.uid()) = user_id);

create policy "users read own mastery" on public.mastery for select to authenticated using ((select auth.uid()) = user_id);
create policy "users insert own mastery" on public.mastery for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users update own mastery" on public.mastery for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy "users read own bookmarks" on public.bookmarks for select to authenticated using ((select auth.uid()) = user_id);
create policy "users insert own bookmarks" on public.bookmarks for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users delete own bookmarks" on public.bookmarks for delete to authenticated using ((select auth.uid()) = user_id);

create policy "users insert own reports" on public.question_reports for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users and admin read reports" on public.question_reports for select to authenticated
  using ((select auth.uid()) = user_id or coalesce(auth.jwt()->>'email', '') = 'shanewillb@gmail.com');
create policy "admin updates reports" on public.question_reports for update to authenticated
  using (coalesce(auth.jwt()->>'email', '') = 'shanewillb@gmail.com')
  with check (coalesce(auth.jwt()->>'email', '') = 'shanewillb@gmail.com');

create policy "daily results are publicly readable" on public.daily_challenge_results for select to anon, authenticated using (true);
create policy "users insert own daily result" on public.daily_challenge_results for insert to authenticated with check ((select auth.uid()) = user_id);

grant usage on schema public to anon, authenticated;
grant select on public.profiles, public.daily_challenge_results to anon, authenticated;
grant insert, update on public.profiles to authenticated;
grant select, insert on public.attempts to authenticated;
grant select, insert, update on public.mastery to authenticated;
grant select, insert, delete on public.bookmarks to authenticated;
grant select, insert, update on public.question_reports to authenticated;
grant insert on public.daily_challenge_results to authenticated;
grant usage, select on all sequences in schema public to authenticated;

create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (user_id, display_name)
  values (
    new.id,
    left(coalesce(nullif(new.raw_user_meta_data->>'display_name', ''), split_part(new.email, '@', 1), 'Student'), 32)
  )
  on conflict (user_id) do nothing;
  return new;
end;
$$;

revoke all on function private.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function private.handle_new_user();

create or replace function public.record_attempt(
  p_question_id text,
  p_subject text,
  p_topic_id text,
  p_subtopic_id text,
  p_correct boolean,
  p_response_ms integer,
  p_mode text,
  p_run_id text default null
)
returns void
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  v_user uuid := auth.uid();
begin
  if v_user is null then raise exception 'authentication required'; end if;
  if p_mode not in ('quiz', 'review', 'passage', 'daily') then raise exception 'invalid mode'; end if;

  insert into attempts (user_id, question_id, subject, topic_id, subtopic_id, correct, response_ms, mode, run_id)
  values (v_user, p_question_id, p_subject, p_topic_id, p_subtopic_id, p_correct, p_response_ms, p_mode, p_run_id);

  if p_subtopic_id is not null then
    insert into mastery (user_id, subtopic_id, subject, topic_id, correct_count, incorrect_count, current_streak, interval_days, due_at)
    values (
      v_user, p_subtopic_id, p_subject, p_topic_id,
      case when p_correct then 1 else 0 end,
      case when p_correct then 0 else 1 end,
      case when p_correct then 1 else 0 end,
      1,
      now() + case when p_correct then interval '1 day' else interval '4 hours' end
    )
    on conflict (user_id, subtopic_id) do update set
      correct_count = mastery.correct_count + case when p_correct then 1 else 0 end,
      incorrect_count = mastery.incorrect_count + case when p_correct then 0 else 1 end,
      current_streak = case when p_correct then mastery.current_streak + 1 else 0 end,
      interval_days = case when p_correct then least(60, greatest(1, mastery.interval_days * 2)) else 1 end,
      due_at = now() + case
        when p_correct then make_interval(days => least(60, greatest(1, mastery.interval_days * 2)))
        else interval '4 hours'
      end,
      updated_at = now();
  end if;
end;
$$;

revoke all on function public.record_attempt(text, text, text, text, boolean, integer, text, text) from public, anon;
grant execute on function public.record_attempt(text, text, text, text, boolean, integer, text, text) to authenticated;
