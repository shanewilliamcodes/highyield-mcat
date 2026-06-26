import Link from "next/link";
import { getTop } from "@/lib/leaderboard";

export const dynamic = "force-dynamic";

function medal(rank: number): string {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `${rank}`;
}

function timeAgo(ms: number): string {
  const s = Math.floor((Date.now() - ms) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export default async function LeaderboardPage() {
  const top = await getTop(25);

  return (
    <div className="container-page" style={{ paddingBlock: "40px 64px" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <span className="badge" style={{ marginBottom: 12 }}>🔥 All-topics streaks only</span>
        <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em", margin: "6px 0 8px" }}>
          Leaderboard
        </h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          The longest correct streaks on the full question pool. Custom-topic runs
          are great practice — but only all-topics games make the board.
        </p>
      </div>

      <div className="card" style={{ maxWidth: 640, margin: "0 auto", overflow: "hidden" }}>
        {top.length === 0 ? (
          <div style={{ padding: "48px 24px", textAlign: "center", color: "var(--ink-soft)" }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🏁</div>
            <p style={{ fontWeight: 600, color: "var(--ink)" }}>No streaks yet.</p>
            <p style={{ marginTop: 4 }}>Be the first to set a record.</p>
            <Link href="/quiz" className="btn btn-primary" style={{ marginTop: 18 }}>
              Start a run
            </Link>
          </div>
        ) : (
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {top.map((e, i) => {
              const rank = i + 1;
              const top3 = rank <= 3;
              return (
                <li
                  key={`${e.name}-${e.at}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 20px",
                    borderTop: i === 0 ? "none" : "1px solid var(--border)",
                    background: top3 ? "rgba(245,165,36,0.06)" : "transparent",
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      textAlign: "center",
                      fontSize: top3 ? 22 : 15,
                      fontWeight: 700,
                      color: "var(--ink-soft)",
                    }}
                  >
                    {medal(rank)}
                  </span>
                  <span style={{ flex: 1, fontWeight: 600, fontSize: 16 }}>{e.name}</span>
                  <span style={{ color: "var(--ink-faint)", fontSize: 12 }}>{timeAgo(e.at)}</span>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: 18,
                      color: "var(--gold)",
                      minWidth: 56,
                      textAlign: "right",
                    }}
                  >
                    {e.streak} 🔥
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: 28 }}>
        <Link href="/quiz" className="btn btn-primary">Beat the top streak →</Link>
      </div>
    </div>
  );
}
