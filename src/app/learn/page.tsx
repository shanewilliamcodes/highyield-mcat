import Link from "next/link";
import { SUBJECTS } from "@/data/subjects";

export const metadata = {
  title: "Learn — HighYield",
  description: "Clear, digestible summaries of every high-yield MCAT topic.",
};

export default function LearnIndex() {
  return (
    <div className="container-page" style={{ paddingBlock: "40px 64px" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <span className="badge" style={{ marginBottom: 12 }}>📚 The whole MCAT, minus the bloat</span>
        <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em", margin: "6px 0 10px" }}>
          Learn
        </h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
          Dense resources, condensed. Each topic is broken into subtopics with the
          high-yield ideas, key terms, and the mnemonics that actually stick — so
          you can review fast and get back to drilling.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        {SUBJECTS.map((s) => {
          const subtopicCount = s.topics.reduce((n, t) => n + t.subtopics.length, 0);
          return (
            <Link
              key={s.id}
              href={`/learn/${s.id}`}
              className="card"
              style={{ padding: 22, display: "block", transition: "transform 0.15s, box-shadow 0.15s" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: `${s.accent}1a`, display: "grid", placeItems: "center", color: s.accent, fontWeight: 800, fontSize: 15 }}>
                  {s.short.slice(0, 2)}
                </span>
                <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>{s.name}</h2>
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6, margin: "0 0 14px" }}>
                {s.blurb}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="badge">{s.topics.length} topics</span>
                <span className="badge">{subtopicCount} subtopics</span>
                {s.sections.map((sec) => (
                  <span key={sec} className="badge" style={{ background: `${s.accent}14`, color: s.accent, border: "none" }}>
                    {sec}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
