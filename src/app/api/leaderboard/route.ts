import { NextResponse } from "next/server";
import { getTop, submitScore } from "@/lib/leaderboard";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const top = await getTop(25);
    return NextResponse.json({ top });
  } catch (err) {
    console.error("leaderboard GET failed", err);
    return NextResponse.json({ top: [], error: "unavailable" }, { status: 200 });
  }
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { name, streak, allTopics } = (body ?? {}) as {
    name?: unknown;
    streak?: unknown;
    allTopics?: unknown;
  };

  // Only full-pool runs (all topics included) are eligible for the leaderboard.
  if (allTopics !== true) {
    return NextResponse.json(
      { error: "custom runs are not eligible for the leaderboard" },
      { status: 422 },
    );
  }

  const streakNum = typeof streak === "number" ? Math.floor(streak) : NaN;
  if (!Number.isFinite(streakNum) || streakNum < 1 || streakNum > 100000) {
    return NextResponse.json({ error: "invalid streak" }, { status: 400 });
  }

  const nameStr = typeof name === "string" ? name : "Anonymous";

  try {
    const result = await submitScore(nameStr, streakNum);
    return NextResponse.json(result);
  } catch (err) {
    console.error("leaderboard POST failed", err);
    return NextResponse.json({ error: "unavailable" }, { status: 500 });
  }
}
