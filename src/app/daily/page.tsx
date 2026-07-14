"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";

interface DailyQuestion { id: string; statement: string; subject: string; topicId: string; }
interface Leader { rank: number; name: string; correct: number; total: number; durationMs: number; }
interface Challenge { date: string; token: string; questions: DailyQuestion[]; leaderboard: Leader[]; }
interface Result { correct: number; total: number; durationMs: number; review: Array<{ id: string; answer: boolean; explanation: string }>; leaderboard: Leader[]; }

export default function DailyPage() {
  const { user } = useAuth();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { fetch("/api/daily", { cache: "no-store" }).then((r) => r.json()).then(setChallenge).catch(() => setError("Could not load today's challenge.")); }, []);
  if (!challenge) return <div className="container-page" style={{ paddingBlock: 64 }}>{error || "Loading today's challenge…"}</div>;
  const question = challenge.questions[index];

  const choose = (value: boolean) => { setAnswers((current) => ({ ...current, [question.id]: value })); if (index < challenge.questions.length - 1) setIndex((i) => i + 1); };
  const submit = async () => {
    if (!user) { setError("Sign in before submitting your score."); return; }
    setSubmitting(true); setError("");
    const { data } = await createClient().auth.getSession();
    const response = await fetch("/api/daily", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session?.access_token ?? ""}` }, body: JSON.stringify({ token: challenge.token, answers }) });
    const body = await response.json(); setSubmitting(false);
    if (!response.ok) setError(body.error ?? "Could not submit."); else setResult(body as Result);
  };
  const board = result?.leaderboard ?? challenge.leaderboard;

  return <div className="container-page" style={{ paddingBlock: "36px 72px", maxWidth: 900 }}><div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}><div><span className="badge">Same 20 questions for everyone</span><h1 style={{ fontSize: 36, margin: "12px 0 6px" }}>Daily challenge</h1><p style={{ color: "var(--ink-soft)" }}>{challenge.date} · accuracy first, server-measured time breaks ties</p></div><Link href="/passages" className="btn btn-ghost" style={{ alignSelf: "center" }}>Science passages</Link></div>
    {!result && <section className="card" style={{ padding: 24, marginBlock: 24 }}><div style={{ display: "flex", justifyContent: "space-between", color: "var(--ink-faint)", fontSize: 13 }}><span>Question {index + 1} of {challenge.questions.length}</span><span>{Object.keys(answers).length} answered</span></div><p style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.5, minHeight: 100 }}>{question.statement}</p><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}><button className="btn btn-ghost" onClick={() => choose(true)} style={{ paddingBlock: 17, background: answers[question.id] === true ? "var(--green-soft)" : undefined }}>True</button><button className="btn btn-ghost" onClick={() => choose(false)} style={{ paddingBlock: 17, background: answers[question.id] === false ? "var(--red-soft)" : undefined }}>False</button></div><div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 18 }}><button className="btn btn-ghost" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>Previous</button>{index < challenge.questions.length - 1 ? <button className="btn btn-ghost" onClick={() => setIndex((i) => i + 1)}>Next</button> : <button className="btn btn-primary" disabled={Object.keys(answers).length !== challenge.questions.length || submitting} onClick={() => void submit()}>{submitting ? "Scoring…" : "Submit score"}</button>}</div>{!user && <p style={{ textAlign: "center", color: "var(--ink-faint)", fontSize: 13, marginBottom: 0 }}><Link href="/account" style={{ color: "var(--brand)" }}>Sign in</Link> to place your score.</p>}{error && <p style={{ color: "var(--red)" }}>{error}</p>}</section>}
    {result && <section style={{ marginBlock: 24 }}><div className="card" style={{ padding: 24 }}><span className="badge">Score saved</span><h2 style={{ fontSize: 34, margin: "10px 0" }}>{result.correct}/{result.total}</h2><p style={{ color: "var(--ink-soft)" }}>Completed in {formatTime(result.durationMs)}</p></div><h2 style={{ marginTop: 28 }}>Answer review</h2><div style={{ display: "grid", gap: 9 }}>{challenge.questions.map((q) => { const review = result.review.find((r) => r.id === q.id)!; const right = answers[q.id] === review.answer; return <div key={q.id} style={{ padding: "14px 0", borderBottom: "1px solid var(--border)" }}><strong style={{ color: right ? "var(--green)" : "var(--red)" }}>{right ? "Correct" : `Incorrect · ${review.answer ? "True" : "False"}`}</strong><div style={{ marginBlock: 5 }}>{q.statement}</div><span style={{ color: "var(--ink-soft)", fontSize: 14 }}>{review.explanation}</span></div>; })}</div></section>}
    <section><h2>Today&apos;s leaderboard</h2>{board.length ? <div style={{ display: "grid", gap: 7 }}>{board.map((row) => <div key={`${row.rank}-${row.name}`} style={{ display: "grid", gridTemplateColumns: "40px 1fr 70px 80px", padding: "11px 4px", borderBottom: "1px solid var(--border)" }}><strong>#{row.rank}</strong><span>{row.name}</span><strong>{row.correct}/{row.total}</strong><span style={{ color: "var(--ink-faint)" }}>{formatTime(row.durationMs)}</span></div>)}</div> : <p style={{ color: "var(--ink-faint)" }}>No scores yet today.</p>}</section>
  </div>;
}

function formatTime(ms: number) { const seconds = Math.round(ms / 1000); return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`; }
