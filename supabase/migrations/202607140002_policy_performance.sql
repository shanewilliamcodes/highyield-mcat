create index if not exists question_reports_user_id_idx
  on public.question_reports(user_id);

create index if not exists study_sessions_user_id_idx
  on public.study_sessions(user_id);

drop policy if exists "users read their own sessions" on public.study_sessions;
create policy "users read their own sessions"
  on public.study_sessions for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "users and admin read reports" on public.question_reports;
create policy "users and admin read reports"
  on public.question_reports for select to authenticated
  using (
    (select auth.uid()) = user_id
    or coalesce((select auth.jwt())->>'email', '') = 'shanewillb@gmail.com'
  );

drop policy if exists "admin updates reports" on public.question_reports;
create policy "admin updates reports"
  on public.question_reports for update to authenticated
  using (coalesce((select auth.jwt())->>'email', '') = 'shanewillb@gmail.com')
  with check (coalesce((select auth.jwt())->>'email', '') = 'shanewillb@gmail.com');
