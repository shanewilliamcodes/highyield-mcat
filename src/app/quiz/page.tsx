"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Question, SubjectId } from "@/lib/types";
import { ALL_QUESTIONS } from "@/data/questions";
import { QuizDeck } from "@/lib/quiz";
import {
  OUTLINE,
  ALL_TOPIC_IDS,
  SUBJECT_ACCENT,
} from "@/data/outline";

const TOPIC_NAME: Record<string, string> = Object.fromEntries(
  OUTLINE.flatMap((s) => s.topics.map((t) => [t.id, t.name] as const)),
);
const SUBJECT_NAME: Record<SubjectId, string> = Object.fromEntries(
  OUTLINE.map((s) => [s.id, s.name] as const),
) as Record<SubjectId, string>;

type Phase = "setup" | "playing" | "over";

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(ALL_TOPIC_IDS),
  );

  const [deck, setDeck] = useState<QuizDeck | null>(null);
  const [current, setCurrent] = useState<Question | null>(null);
  const [answered, setAnswered] = useState(false);
  const [picked, setPicked] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [runFullPool, setRunFullPool] = useState(true);

  const isFullPool = selected.size === ALL_TOPIC_IDS.length;

  // load best from localStorage
  useEffect(() => {
    const b = Number(localStorage.getItem("hy_best") ?? "0");
    if (!Number.isFinite(b)) return;
    const timer = window.setTimeout(() => setBest(b), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const pool = useMemo(
    () => ALL_QUESTIONS.filter((q) => selected.has(q.topicId)),
    [selected],
  );

  const start = useCallback(() => {
    if (pool.length === 0) return;
    const d = new QuizDeck(pool);
    setDeck(d);
    setCurrent(d.next());
    setStreak(0);
    setAnswered(false);
    setPicked(null);
    setRunFullPool(isFullPool);
    setPhase("playing");
  }, [pool, isFullPool]);

  const answer = useCallback(
    (choice: boolean) => {
      if (!current || answered) return;
      setPicked(choice);
      setAnswered(true);
      if (choice === current.answer) {
        setStreak((s) => {
          const ns = s + 1;
          setBest((b) => {
            const nb = Math.max(b, ns);
            localStorage.setItem("hy_best", String(nb));
            return nb;
          });
          return ns;
        });
      }
    },
    [current, answered],
  );

  const next = useCallback(() => {
    if (!current || !deck) return;
    const wasCorrect = picked === current.answer;
    if (!wasCorrect) {
      setPhase("over");
      return;
    }
    setCurrent(deck.next());
    setAnswered(false);
    setPicked(null);
  }, [current, deck, picked]);

  // keyboard controls
  useEffect(() => {
    if (phase !== "playing") return;
    const onKey = (e: KeyboardEvent) => {
      if (!answered) {
        if (e.key === "t" || e.key === "T" || e.key === "1") answer(true);
        if (e.key === "f" || e.key === "F" || e.key === "2") answer(false);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, answered, answer, next]);

  if (phase === "setup") {
    return (
      <SetupScreen
        selected={selected}
        setSelected={setSelected}
        isFullPool={isFullPool}
        poolSize={pool.length}
        best={best}
        onStart={start}
      />
    );
  }

  if (phase === "over") {
    return (
      <GameOver
        streak={streak}
        best={best}
        eligible={runFullPool}
        onReplay={start}
        onNewTopics={() => setPhase("setup")}
      />
    );
  }

  // playing
  return (
    <PlayScreen
      q={current!}
      answered={answered}
      picked={picked}
      streak={streak}
      best={best}
      eligible={runFullPool}
      onAnswer={answer}
      onNext={next}
      onQuit={() => setPhase("setup")}
    />
  );
}

/* ----------------------------- Setup ----------------------------- */

function SetupScreen({
  selected,
  setSelected,
  isFullPool,
  poolSize,
  best,
  onStart,
}: {
  selected: Set<string>;
  setSelected: (s: Set<string>) => void;
  isFullPool: boolean;
  poolSize: number;
  best: number;
  onStart: () => void;
}) {
  const toggleTopic = (id: string) => {
    const ns = new Set(selected);
    if (ns.has(id)) ns.delete(id);
    else ns.add(id);
    setSelected(ns);
  };
  const toggleSubject = (subjectId: string) => {
    const subj = OUTLINE.find((s) => s.id === subjectId)!;
    const ids = subj.topics.map((t) => t.id);
    const allOn = ids.every((id) => selected.has(id));
    const ns = new Set(selected);
    ids.forEach((id) => (allOn ? ns.delete(id) : ns.add(id)));
    setSelected(ns);
  };

  return (
    <div className="container-page" style={{ paddingBlock: "36px 64px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 8px" }}>
          Build your run
        </h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
          Keep every topic on for a leaderboard-eligible run, or narrow the focus
          to drill your weak spots. Get as many true/false calls right in a row as
          you can.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        <button className="btn btn-ghost" onClick={() => setSelected(new Set(ALL_TOPIC_IDS))}>
          Select all
        </button>
        <button className="btn btn-ghost" onClick={() => setSelected(new Set())}>
          Clear all
        </button>
        {best > 0 && (
          <span className="badge" style={{ alignSelf: "center" }}>
            🔥 Your best: {best}
          </span>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 14,
        }}
      >
        {OUTLINE.map((s) => {
          const allOn = s.topics.every((t) => selected.has(t.id));
          const someOn = s.topics.some((t) => selected.has(t.id));
          return (
            <div key={s.id} className="card" style={{ padding: 16 }}>
              <button
                onClick={() => toggleSubject(s.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 4,
                    background: s.accent,
                    boxShadow: someOn ? `0 0 0 3px ${s.accent}33` : "none",
                    opacity: someOn ? 1 : 0.35,
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: 16, flex: 1, textAlign: "left" }}>
                  {s.name}
                </span>
                <span
                  className="badge"
                  style={{
                    background: allOn ? s.accent : "var(--bg-soft)",
                    color: allOn ? "white" : "var(--ink-faint)",
                    border: "none",
                  }}
                >
                  {allOn ? "All on" : someOn ? "Some" : "Off"}
                </span>
              </button>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s.topics.map((t) => {
                  const on = selected.has(t.id);
                  return (
                    <button
                      key={t.id}
                      onClick={() => toggleTopic(t.id)}
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        padding: "6px 12px",
                        borderRadius: 999,
                        cursor: "pointer",
                        border: `1px solid ${on ? s.accent : "var(--border)"}`,
                        background: on ? `${s.accent}14` : "var(--surface)",
                        color: on ? "var(--ink)" : "var(--ink-faint)",
                      }}
                    >
                      {on ? "✓ " : ""}
                      {t.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "sticky",
          bottom: 16,
          marginTop: 28,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "12px 12px 12px 20px",
            boxShadow: "var(--shadow-lg)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 14 }}>
            <strong>{poolSize}</strong> questions ·{" "}
            {isFullPool ? (
              <span style={{ color: "var(--green)", fontWeight: 600 }}>
                🏆 Leaderboard eligible
              </span>
            ) : (
              <span style={{ color: "var(--ink-faint)" }}>practice only</span>
            )}
          </div>
          <button
            className="btn btn-primary"
            disabled={poolSize === 0}
            onClick={onStart}
            style={{ opacity: poolSize === 0 ? 0.5 : 1 }}
          >
            Start run →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Play ----------------------------- */

function PlayScreen({
  q,
  answered,
  picked,
  streak,
  best,
  eligible,
  onAnswer,
  onNext,
  onQuit,
}: {
  q: Question;
  answered: boolean;
  picked: boolean | null;
  streak: number;
  best: number;
  eligible: boolean;
  onAnswer: (b: boolean) => void;
  onNext: () => void;
  onQuit: () => void;
}) {
  const accent = SUBJECT_ACCENT[q.subject];
  const correct = picked === q.answer;

  const btnStyle = (forValue: boolean): React.CSSProperties => {
    const base: React.CSSProperties = {
      flex: 1,
      padding: "22px 16px",
      borderRadius: 18,
      fontSize: 22,
      fontWeight: 800,
      cursor: answered ? "default" : "pointer",
      border: "2px solid var(--border)",
      background: "var(--surface)",
      transition: "all 0.15s ease",
    };
    if (!answered) {
      base.borderColor = forValue ? "rgba(22,163,74,0.4)" : "rgba(225,29,72,0.4)";
      base.color = forValue ? "var(--green)" : "var(--red)";
      return base;
    }
    const isCorrectAnswer = forValue === q.answer;
    const isPicked = forValue === picked;
    if (isCorrectAnswer) {
      base.background = "var(--green-soft)";
      base.borderColor = "var(--green)";
      base.color = "var(--green)";
    } else if (isPicked) {
      base.background = "var(--red-soft)";
      base.borderColor = "var(--red)";
      base.color = "var(--red)";
    } else {
      base.opacity = 0.5;
    }
    return base;
  };

  return (
    <div className="container-page" style={{ paddingBlock: "24px 64px", maxWidth: 760 }}>
      {/* HUD */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          gap: 12,
        }}
      >
        <button className="btn btn-ghost" onClick={onQuit} style={{ padding: "8px 14px", fontSize: 14 }}>
          ← Quit
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "var(--ink-faint)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Streak
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>
              {streak > 0 && <span className="flame" style={{ marginRight: 4 }}>🔥</span>}
              {streak}
            </div>
          </div>
          <div style={{ textAlign: "center", opacity: 0.7 }}>
            <div style={{ fontSize: 11, color: "var(--ink-faint)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Best
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>{best}</div>
          </div>
        </div>
      </div>

      {!eligible && (
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <span className="badge">Practice mode · not counted on leaderboard</span>
        </div>
      )}

      {/* Question card */}
      <div className="card animate-pop" key={q.id} style={{ padding: "28px 28px 24px" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
          <span
            className="badge"
            style={{ background: `${accent}18`, color: accent, border: "none" }}
          >
            ● {SUBJECT_NAME[q.subject]}
          </span>
          <span className="badge">{TOPIC_NAME[q.topicId] ?? "MCAT"}</span>
        </div>

        <p style={{ fontSize: 23, fontWeight: 600, lineHeight: 1.45, letterSpacing: "-0.01em", margin: "0 0 8px", color: "var(--ink)" }}>
          {q.statement}
        </p>
        <p style={{ fontSize: 13, color: "var(--ink-faint)", margin: "0 0 22px" }}>
          True or false?
        </p>

        <div style={{ display: "flex", gap: 14 }}>
          <button style={btnStyle(true)} onClick={() => onAnswer(true)} disabled={answered}>
            ✓ True
          </button>
          <button style={btnStyle(false)} onClick={() => onAnswer(false)} disabled={answered}>
            ✗ False
          </button>
        </div>

        {answered && (
          <div
            className="animate-pop"
            style={{
              marginTop: 22,
              padding: "18px 20px",
              borderRadius: 16,
              background: correct ? "var(--green-soft)" : "var(--red-soft)",
              border: `1px solid ${correct ? "var(--green)" : "var(--red)"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 18 }}>{correct ? "✅" : "❌"}</span>
              <strong style={{ color: correct ? "var(--green)" : "var(--red)", fontSize: 16 }}>
                {correct ? "Correct!" : "Not quite."}
              </strong>
              <span style={{ marginLeft: "auto", fontSize: 13, color: "var(--ink-soft)" }}>
                Answer: <strong>{q.answer ? "True" : "False"}</strong>
              </span>
            </div>
            <p style={{ margin: 0, lineHeight: 1.6, color: "var(--ink-soft)", fontSize: 15 }}>
              {q.explanation}
            </p>
          </div>
        )}
      </div>

      {answered && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <button className="btn btn-primary" onClick={onNext} style={{ minWidth: 180, fontSize: 16, padding: "13px 28px" }}>
            {correct ? "Next question →" : "See results"}
          </button>
        </div>
      )}

      <p style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "var(--ink-faint)" }}>
        Tip: press <kbd>T</kbd>/<kbd>F</kbd> to answer, <kbd>Enter</kbd> to continue.
      </p>
    </div>
  );
}

/* ----------------------------- Game over ----------------------------- */

function GameOver({
  streak,
  best,
  eligible,
  onReplay,
  onNewTopics,
}: {
  streak: number;
  best: number;
  eligible: boolean;
  onReplay: () => void;
  onNewTopics: () => void;
}) {
  const [name, setName] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [rank, setRank] = useState<number | null>(null);
  const isRecord = streak > 0 && streak >= best;
  const submittedRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setName(localStorage.getItem("hy_name") ?? ""),
      0,
    );
    return () => window.clearTimeout(timer);
  }, []);

  const submit = async () => {
    if (submittedRef.current || streak < 1) return;
    submittedRef.current = true;
    setSubmitState("saving");
    localStorage.setItem("hy_name", name);
    try {
      const res = await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, streak, allTopics: true }),
      });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as { rank: number | null };
      setRank(data.rank);
      setSubmitState("done");
    } catch {
      submittedRef.current = false;
      setSubmitState("error");
    }
  };

  return (
    <div className="container-page" style={{ paddingBlock: "48px 64px", maxWidth: 520, textAlign: "center" }}>
      <div style={{ fontSize: 54, marginBottom: 4 }}>{streak === 0 ? "🧠" : isRecord ? "🏆" : "🔥"}</div>
      <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 6px" }}>
        {streak === 0 ? "Run over" : isRecord ? "New personal best!" : "Run over"}
      </h1>
      <p style={{ color: "var(--ink-soft)", margin: "0 0 24px" }}>
        You answered <strong style={{ color: "var(--gold)" }}>{streak}</strong> in a row.
        {streak > 0 && best > streak && ` Your best is ${best}.`}
      </p>

      <div className="card" style={{ padding: 24 }}>
        {!eligible ? (
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>
            This was a <strong>custom run</strong>, so it doesn&apos;t count on the
            leaderboard. Run with <em>all topics</em> on to compete for the top streak.
          </p>
        ) : streak < 1 ? (
          <p style={{ color: "var(--ink-soft)", margin: 0 }}>
            No streak this time — get at least one right to make the board. You&apos;ve got this.
          </p>
        ) : submitState === "done" ? (
          <div>
            <div style={{ fontSize: 32, marginBottom: 6 }}>🎉</div>
            <p style={{ fontWeight: 700, fontSize: 18, margin: "0 0 4px" }}>
              {rank ? `You're #${rank} on the leaderboard!` : "Saved to the leaderboard!"}
            </p>
            <Link href="/leaderboard" className="btn btn-ghost" style={{ marginTop: 12 }}>
              View leaderboard →
            </Link>
          </div>
        ) : (
          <div>
            <p style={{ fontWeight: 600, margin: "0 0 12px" }}>
              Save your streak of {streak} to the leaderboard
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={24}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                style={{
                  padding: "11px 16px",
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  fontSize: 15,
                  outline: "none",
                  minWidth: 200,
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              />
              <button
                className="btn btn-primary"
                onClick={submit}
                disabled={submitState === "saving" || name.trim().length === 0}
                style={{ opacity: name.trim().length === 0 ? 0.5 : 1 }}
              >
                {submitState === "saving" ? "Saving…" : "Submit"}
              </button>
            </div>
            {submitState === "error" && (
              <p style={{ color: "var(--red)", fontSize: 13, marginTop: 10 }}>
                Couldn&apos;t save — try again.
              </p>
            )}
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 22, flexWrap: "wrap" }}>
        <button className="btn btn-primary" onClick={onReplay}>Play again</button>
        <button className="btn btn-ghost" onClick={onNewTopics}>Change topics</button>
      </div>
    </div>
  );
}
