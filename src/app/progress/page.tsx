"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { OUTLINE } from "@/data/outline";
import { getLocalAttempts, type LocalAttempt } from "@/lib/progress";

interface Attempt extends LocalAttempt {
  id: number;
}
interface Mastery {
  subtopic_id: string;
  topic_id: string;
  subject: string;
  correct_count: number;
  incorrect_count: number;
  due_at: string;
}

const TOPIC_NAMES = Object.fromEntries(
  OUTLINE.flatMap((s) => s.topics.map((t) => [t.id, t.name])),
);

export default function ProgressPage() {
  const { user, profile, loading: authLoading } = useAuth();
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [mastery, setMastery] = useState<Mastery[]>([]);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [now] = useState(() => Date.now());

  const load = useCallback(async () => {
    if (!user) {
      setAttempts(getLocalAttempts().map((a, id) => ({ ...a, id })));
      setMastery([]);
      setLoading(false);
      return;
    }
    const supabase = createClient();
    const [attemptResult, masteryResult, bookmarkResult] = await Promise.all([
      supabase
        .from("attempts")
        .select(
          "id,question_id,subject,topic_id,subtopic_id,correct,response_ms,mode,answered_at",
        )
        .order("answered_at", { ascending: false })
        .limit(2000),
      supabase
        .from("mastery")
        .select(
          "subtopic_id,topic_id,subject,correct_count,incorrect_count,due_at",
        ),
      supabase
        .from("bookmarks")
        .select("item_id", { count: "exact", head: true }),
    ]);
    setAttempts((attemptResult.data as Attempt[] | null) ?? []);
    setMastery((masteryResult.data as Mastery[] | null) ?? []);
    setBookmarkCount(bookmarkResult.count ?? 0);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (authLoading) return;
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [authLoading, load]);

  const stats = useMemo(() => {
    const total = attempts.length;
    const correct = attempts.filter((a) => a.correct).length;
    const dayStart = new Date(now);
    dayStart.setHours(0, 0, 0, 0);
    const today = attempts.filter(
      (a) => new Date(a.answered_at).getTime() >= dayStart.getTime(),
    ).length;
    const due = mastery.filter(
      (m) => new Date(m.due_at).getTime() <= now,
    ).length;
    const byTopic = new Map<
      string,
      {
        correct: number;
        total: number;
        recent: number;
        previous: number;
        recentCorrect: number;
        previousCorrect: number;
      }
    >();
    for (const attempt of attempts) {
      const row = byTopic.get(attempt.topic_id) ?? {
        correct: 0,
        total: 0,
        recent: 0,
        previous: 0,
        recentCorrect: 0,
        previousCorrect: 0,
      };
      row.total += 1;
      if (attempt.correct) row.correct += 1;
      const age = now - new Date(attempt.answered_at).getTime();
      if (age <= 7 * 864e5) {
        row.recent += 1;
        if (attempt.correct) row.recentCorrect += 1;
      } else if (age <= 14 * 864e5) {
        row.previous += 1;
        if (attempt.correct) row.previousCorrect += 1;
      }
      byTopic.set(attempt.topic_id, row);
    }
    const topics = [...byTopic.entries()]
      .map(([id, row]) => ({
        id,
        name: TOPIC_NAMES[id] ?? id,
        accuracy: row.total ? row.correct / row.total : 0,
        total: row.total,
        change:
          row.recent && row.previous
            ? row.recentCorrect / row.recent -
              row.previousCorrect / row.previous
            : 0,
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
    return { total, accuracy: total ? correct / total : 0, today, due, topics };
  }, [attempts, mastery, now]);

  if (authLoading || loading)
    return (
      <div className="container-page" style={{ paddingBlock: 64 }}>
        Loading progress…
      </div>
    );

  return (
    <div className="container-page" style={{ paddingBlock: "40px 72px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <span className="badge">
            {user
              ? `${profile?.display_name ?? "Your"} · synced`
              : "Guest progress · this device"}
          </span>
          <h1 style={{ fontSize: 36, margin: "12px 0 6px" }}>Study progress</h1>
          <p style={{ color: "var(--ink-soft)", margin: 0 }}>
            What is improving, what is due, and where your next points are.
          </p>
        </div>
        {!user && (
          <Link href="/account" className="btn btn-primary">
            Sign in to sync
          </Link>
        )}
      </div>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
          gap: 12,
          marginBlock: 26,
        }}
      >
        <Metric label="Questions answered" value={String(stats.total)} />
        <Metric
          label="Overall accuracy"
          value={`${Math.round(stats.accuracy * 100)}%`}
        />
        <Metric
          label="Today"
          value={`${stats.today}/${profile?.daily_goal ?? 20}`}
        />
        <Metric label="Due for review" value={String(stats.due)} />
        <Metric label="Bookmarks" value={String(bookmarkCount)} />
      </section>

      <div
        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}
      >
        <Link href="/review" className="btn btn-primary">
          Review weak areas
        </Link>
        <Link href="/daily" className="btn btn-ghost">
          Daily challenge
        </Link>
        <Link href="/bookmarks" className="btn btn-ghost">
          Open bookmarks
        </Link>
      </div>

      <section>
        <h2 style={{ fontSize: 22, marginBottom: 6 }}>Topic mastery</h2>
        <p style={{ color: "var(--ink-soft)", marginTop: 0 }}>
          Lowest accuracy appears first. Trend compares the last 7 days with the
          7 before that.
        </p>
        {stats.topics.length === 0 ? (
          <EmptyState />
        ) : (
          <div style={{ display: "grid", gap: 10 }}>
            {stats.topics.map((topic) => (
              <div key={topic.id} className="mastery-row">
                <div>
                  <strong>{topic.name}</strong>
                  <div style={{ color: "var(--ink-faint)", fontSize: 12 }}>
                    {topic.total} answers
                  </div>
                </div>
                <div
                  style={{
                    height: 9,
                    background: "var(--bg-soft)",
                    borderRadius: 99,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${topic.accuracy * 100}%`,
                      height: "100%",
                      background:
                        topic.accuracy >= 0.8
                          ? "var(--green)"
                          : topic.accuracy >= 0.6
                            ? "var(--accent)"
                            : "var(--red)",
                    }}
                  />
                </div>
                <strong>{Math.round(topic.accuracy * 100)}%</strong>
                <span
                  style={{
                    color:
                      topic.change > 0
                        ? "var(--green)"
                        : topic.change < 0
                          ? "var(--red)"
                          : "var(--ink-faint)",
                    fontSize: 13,
                  }}
                >
                  {topic.change
                    ? `${topic.change > 0 ? "+" : ""}${Math.round(topic.change * 100)} pts`
                    : "—"}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="card" style={{ padding: 18 }}>
      <div style={{ color: "var(--ink-faint)", fontSize: 12, marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 800 }}>{value}</div>
    </div>
  );
}
function EmptyState() {
  return (
    <div style={{ padding: "34px 0", color: "var(--ink-soft)" }}>
      Answer a few questions and your topic map will appear here.
    </div>
  );
}
