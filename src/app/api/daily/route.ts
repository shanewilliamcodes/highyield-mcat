import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { getDailyChallenge, utcDate } from "@/lib/daily";
import { createRequestClient } from "@/lib/supabase/server";

const secret = () => process.env.DAILY_CHALLENGE_SECRET!;
const encode = (value: string) => Buffer.from(value).toString("base64url");
const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

function makeToken(date: string) { const payload = encode(JSON.stringify({ date, issuedAt: Date.now() })); return `${payload}.${sign(payload)}`; }
function verifyToken(token: string) {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  const expected = sign(payload);
  if (signature.length !== expected.length || !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try { return JSON.parse(Buffer.from(payload, "base64url").toString()) as { date: string; issuedAt: number }; } catch { return null; }
}

async function leaderboard(date: string) {
  const supabase = createRequestClient();
  const { data } = await supabase.from("daily_challenge_results").select("user_id,correct,total,duration_ms,completed_at").eq("challenge_date", date).order("correct", { ascending: false }).order("duration_ms", { ascending: true }).limit(25);
  const rows = (data ?? []) as Array<{ user_id: string; correct: number; total: number; duration_ms: number; completed_at: string }>;
  const ids = rows.map((row) => row.user_id);
  const profiles = ids.length ? await supabase.from("profiles").select("user_id,display_name").in("user_id", ids) : { data: [] };
  const names = new Map(((profiles.data ?? []) as Array<{ user_id: string; display_name: string }>).map((row) => [row.user_id, row.display_name]));
  return rows.map((row, index) => ({ rank: index + 1, name: names.get(row.user_id) ?? "Student", correct: row.correct, total: row.total, durationMs: row.duration_ms }));
}

export async function GET() {
  const date = utcDate();
  const questions = getDailyChallenge(date).map(({ id, statement, subject, topicId }) => ({ id, statement, subject, topicId }));
  return NextResponse.json({ date, token: makeToken(date), questions, leaderboard: await leaderboard(date) }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest) {
  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!bearer) return NextResponse.json({ error: "Sign in to submit the daily challenge." }, { status: 401 });
  const supabase = createRequestClient(bearer);
  const { data: auth, error: authError } = await supabase.auth.getUser(bearer);
  if (authError || !auth.user) return NextResponse.json({ error: "Your session has expired." }, { status: 401 });

  const body = await request.json() as { token?: string; answers?: Record<string, boolean> };
  const verified = body.token ? verifyToken(body.token) : null;
  if (!verified || verified.date !== utcDate()) return NextResponse.json({ error: "This challenge token is invalid or expired." }, { status: 400 });
  const durationMs = Date.now() - verified.issuedAt;
  if (durationMs < 5000 || durationMs > 7_200_000) return NextResponse.json({ error: "Challenge timing was invalid." }, { status: 400 });

  const questions = getDailyChallenge(verified.date);
  if (!body.answers || questions.some((q) => typeof body.answers?.[q.id] !== "boolean")) return NextResponse.json({ error: "Answer every question before submitting." }, { status: 400 });
  const correct = questions.filter((q) => body.answers?.[q.id] === q.answer).length;
  const score = correct * 10_000_000 + Math.max(0, 7_200_000 - durationMs);
  const { error } = await supabase.from("daily_challenge_results").insert({ user_id: auth.user.id, challenge_date: verified.date, score, correct, total: questions.length, duration_ms: durationMs });
  if (error?.code === "23505") return NextResponse.json({ error: "You already submitted today's challenge." }, { status: 409 });
  if (error) return NextResponse.json({ error: "The score could not be saved." }, { status: 500 });

  await Promise.all(questions.map((q) => supabase.rpc("record_attempt", { p_question_id: q.id, p_subject: q.subject, p_topic_id: q.topicId, p_subtopic_id: q.subtopicId ?? q.topicId, p_correct: body.answers![q.id] === q.answer, p_response_ms: Math.round(durationMs / questions.length), p_mode: "daily", p_run_id: `daily-${verified.date}` })));
  return NextResponse.json({ correct, total: questions.length, durationMs, review: questions.map((q) => ({ id: q.id, answer: q.answer, explanation: q.explanation })), leaderboard: await leaderboard(verified.date) });
}
