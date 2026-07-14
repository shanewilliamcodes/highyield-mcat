"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Question } from "@/lib/types";
import { ALL_QUESTIONS } from "@/data/questions";
import { buildDeck } from "@/lib/quiz";
import { recordAttempt } from "@/lib/progress";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import { SUBJECT_SHORT } from "@/data/outline";

interface MasteryRow {
  subtopic_id: string;
  correct_count: number;
  incorrect_count: number;
  due_at: string;
}

export default function ReviewPage() {
  const { user, loading: authLoading } = useAuth();
  const [deck, setDeck] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const shownAt = useRef(0);

  const load = useCallback(async () => {
    let selected = ALL_QUESTIONS;
    if (user) {
      const { data } = await createClient()
        .from("mastery")
        .select("subtopic_id,correct_count,incorrect_count,due_at");
      const rows = (data as MasteryRow[] | null) ?? [];
      const now = Date.now();
      const due = new Set(
        rows
          .filter(
            (r) =>
              new Date(r.due_at).getTime() <= now ||
              r.correct_count /
                Math.max(1, r.correct_count + r.incorrect_count) <
                0.7,
          )
          .map((r) => r.subtopic_id),
      );
      if (due.size)
        selected = ALL_QUESTIONS.filter(
          (q) => q.subtopicId && due.has(q.subtopicId),
        );
    }
    setDeck(buildDeck(selected).slice(0, 40));
    setLoading(false);
    shownAt.current = window.performance.now();
  }, [user]);

  useEffect(() => {
    if (authLoading) return;
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [authLoading, load]);
  const current = deck[index];
  const correct = picked !== null && picked === current?.answer;
  const progress = useMemo(
    () => (deck.length ? `${index + 1} / ${deck.length}` : ""),
    [deck.length, index],
  );

  const answer = (choice: boolean) => {
    if (!current || picked !== null) return;
    setPicked(choice);
    void recordAttempt(
      current,
      choice === current.answer,
      window.performance.now() - shownAt.current,
      "review",
      `review-${Date.now()}`,
    );
  };
  const next = () => {
    setIndex((i) => i + 1);
    setPicked(null);
    shownAt.current = window.performance.now();
  };

  if (authLoading || loading)
    return (
      <div className="container-page" style={{ paddingBlock: 64 }}>
        Building your review queue…
      </div>
    );
  if (!current)
    return (
      <div className="container-page" style={{ paddingBlock: 64 }}>
        <h1>Review complete</h1>
        <p style={{ color: "var(--ink-soft)" }}>
          Your scheduled set is finished.
        </p>
        <Link href="/progress" className="btn btn-primary">
          Back to progress
        </Link>
      </div>
    );

  return (
    <div
      className="container-page"
      style={{ paddingBlock: "32px 72px", maxWidth: 760 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 22,
        }}
      >
        <span className="badge">Adaptive review</span>
        <span style={{ color: "var(--ink-faint)", fontWeight: 700 }}>
          {progress}
        </span>
      </div>
      <div className="card" style={{ padding: "28px 24px" }}>
        <div
          style={{
            color: "var(--ink-soft)",
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          {SUBJECT_SHORT[current.subject]} · weak-area review
        </div>
        <p
          style={{
            fontSize: 24,
            lineHeight: 1.45,
            fontWeight: 700,
            margin: "0 0 26px",
          }}
        >
          {current.statement}
        </p>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          <button
            className="btn btn-ghost"
            disabled={picked !== null}
            onClick={() => answer(true)}
            style={{ paddingBlock: 18, fontSize: 18 }}
          >
            True
          </button>
          <button
            className="btn btn-ghost"
            disabled={picked !== null}
            onClick={() => answer(false)}
            style={{ paddingBlock: 18, fontSize: 18 }}
          >
            False
          </button>
        </div>
        {picked !== null && (
          <div
            style={{
              marginTop: 20,
              padding: 18,
              borderRadius: 12,
              background: correct ? "var(--green-soft)" : "var(--red-soft)",
            }}
          >
            <strong style={{ color: correct ? "var(--green)" : "var(--red)" }}>
              {correct
                ? "Correct"
                : `Incorrect · ${current.answer ? "True" : "False"}`}
            </strong>
            <p style={{ lineHeight: 1.65, marginBottom: 0 }}>
              {current.explanation}
            </p>
          </div>
        )}
      </div>
      {picked !== null && (
        <button
          className="btn btn-primary"
          onClick={next}
          style={{ marginTop: 16, width: "100%" }}
        >
          Next review card
        </button>
      )}
    </div>
  );
}
