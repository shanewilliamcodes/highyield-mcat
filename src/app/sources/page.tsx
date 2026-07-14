import Link from "next/link";

const sources = [
  {
    name: "AAMC: What's on the MCAT Exam?",
    href: "https://students-residents.aamc.org/prepare-mcat-exam/whats-mcat-exam-pdf-outline",
    detail: "The official content framework, foundational concepts, content categories, and scientific inquiry skills.",
  },
  {
    name: "Khan Academy MCAT course",
    href: "https://www.khanacademy.org/test-preparation/mcat",
    detail: "Free AAMC-aligned lessons and practice used to cross-check scope and teaching emphasis.",
  },
];

export default function SourcesPage() {
  return (
    <div className="container-page" style={{ paddingBlock: "44px 72px", maxWidth: 860 }}>
      <p className="badge" style={{ marginBottom: 14 }}>Curriculum notes</p>
      <h1 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 12px" }}>Sources & methodology</h1>
      <p style={{ color: "var(--ink-soft)", fontSize: 17, lineHeight: 1.7, maxWidth: 720 }}>
        HighYield follows the official non-CARS MCAT content scope. The summaries and questions are original study material, organized around the sources below rather than copied from them.
      </p>

      <div style={{ display: "grid", gap: 12, marginBlock: 28 }}>
        {sources.map((source) => (
          <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="card" style={{ padding: 20 }}>
            <strong style={{ display: "block", marginBottom: 6 }}>{source.name}</strong>
            <span style={{ color: "var(--ink-soft)", lineHeight: 1.55 }}>{source.detail}</span>
          </a>
        ))}
      </div>

      <div className="card" style={{ padding: 22 }}>
        <h2 style={{ fontSize: 19, margin: "0 0 12px" }}>Quality rules</h2>
        <ul style={{ color: "var(--ink-soft)", lineHeight: 1.75, margin: 0, paddingLeft: 20 }}>
          <li>CARS is intentionally excluded.</li>
          <li>Every quiz statement has an explicit answer, explanation, subject, topic, and validated content link.</li>
          <li>Every topic includes both true and false cards and every subtopic has a study summary.</li>
          <li>Automated checks reject duplicate cards, broken taxonomy links, incomplete summaries, and thin subject coverage.</li>
        </ul>
      </div>

      <Link href="/learn" className="btn btn-primary" style={{ marginTop: 24 }}>Browse the curriculum</Link>
    </div>
  );
}
