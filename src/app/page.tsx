import Link from "next/link";
import { SUBJECTS } from "@/data/subjects";
import { QUESTION_COUNT } from "@/data/questions";

export default function Home() {
  const topicCount = SUBJECTS.reduce((n, s) => n + s.topics.length, 0);

  return (
    <div>
      {/* Hero */}
      <section className="container-page" style={{ paddingBlock: "64px 40px", textAlign: "center" }}>
        <span className="badge animate-pop" style={{ marginBottom: 18 }}>
          🔥 Streak-based MCAT drilling
        </span>
        <h1 style={{ fontSize: "clamp(38px, 6vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 auto 18px", maxWidth: 820 }}>
          Study the MCAT like a{" "}
          <span style={{ background: "linear-gradient(120deg, var(--brand), var(--brand-2) 60%, var(--accent))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            game.
          </span>
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-soft)", maxWidth: 600, margin: "0 auto 30px", lineHeight: 1.6 }}>
          Fast true/false questions, one after another. Build a streak, learn the
          why behind every answer, and climb the leaderboard — without the burnout
          of passively re-reading dense notes.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/quiz" className="btn btn-primary" style={{ fontSize: 16, padding: "14px 30px" }}>
            ⚡ Start drilling
          </Link>
          <Link href="/learn" className="btn btn-ghost" style={{ fontSize: 16, padding: "14px 30px" }}>
            Browse the summaries
          </Link>
        </div>

        <div style={{ display: "flex", gap: 28, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
          {[
            { n: `${QUESTION_COUNT}+`, l: "questions & growing" },
            { n: `${SUBJECTS.length}`, l: "subjects" },
            { n: `${topicCount}`, l: "topics" },
            { n: "CARS-free", l: "pure content" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "var(--brand)" }}>{s.n}</div>
              <div style={{ fontSize: 13, color: "var(--ink-faint)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page" style={{ paddingBlock: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, textAlign: "center", margin: "0 0 18px" }}>Choose your study mode</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 12 }}>
          {[
            { href: "/daily", title: "Daily challenge", detail: "20 balanced questions" },
            { href: "/review", title: "Adaptive review", detail: "Due and weak topics" },
            { href: "/passages", title: "Science passages", detail: "Apply concepts to data" },
            { href: "/progress", title: "Progress dashboard", detail: "Mastery and trends" },
            { href: "/reference", title: "Quick reference", detail: "Equations and contrasts" },
          ].map((mode) => (
            <Link key={mode.href} href={mode.href} className="card" style={{ padding: 18 }}>
              <strong style={{ display: "block", marginBottom: 5 }}>{mode.title}</strong>
              <span style={{ color: "var(--ink-faint)", fontSize: 13 }}>{mode.detail}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="container-page" style={{ paddingBlock: 32 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {[
            { icon: "🔥", title: "Streaks keep you sharp", body: "How many can you get right in a row? The streak format turns review into a fast, competitive game instead of a slog." },
            { icon: "🧠", title: "Learn from every answer", body: "Right or wrong, you get a tight explanation of why — so you're actually building memory, not just guessing." },
            { icon: "🔀", title: "True shuffle, no repeats", body: "Questions and topics are spread out so you're never stuck doing five biochem cards in a row or seeing the same one twice." },
            { icon: "🎯", title: "Drill your weak spots", body: "Customize which topics appear. Full-pool runs feed the leaderboard; focused runs help you grind what you're weak on." },
            { icon: "📚", title: "Dense made digestible", body: "Khan Academy and AAMC concepts, condensed into clear summaries with key terms and mnemonics that stick." },
            { icon: "🏆", title: "Climb the leaderboard", body: "Every all-topics run is eligible. Put your name on the board and chase the longest streak." },
          ].map((f) => (
            <div key={f.title} className="card" style={{ padding: 22 }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="container-page" style={{ paddingBlock: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 6px" }}>
          Every discipline covered
        </h2>
        <p style={{ textAlign: "center", color: "var(--ink-soft)", margin: "0 0 24px" }}>
          (CARS excluded — it&apos;s a different beast.)
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {SUBJECTS.map((s) => (
            <Link
              key={s.id}
              href={`/learn/${s.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                background: "var(--surface)",
                border: `1px solid var(--border)`,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: 999, background: s.accent }} />
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page" style={{ paddingBlock: "32px 56px" }}>
        <div
          style={{
            borderRadius: 24,
            padding: "48px 28px",
            textAlign: "center",
            background: "linear-gradient(135deg, var(--brand), var(--brand-2))",
            color: "white",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
            Ready to start a streak?
          </h2>
          <p style={{ opacity: 0.92, margin: "0 0 22px", fontSize: 16 }}>
            One question at a time. See how far you can go.
          </p>
          <Link
            href="/quiz"
            className="btn"
            style={{ background: "white", color: "var(--brand)", fontSize: 16, padding: "14px 32px", fontWeight: 700 }}
          >
            Launch the quiz →
          </Link>
        </div>
      </section>
    </div>
  );
}
