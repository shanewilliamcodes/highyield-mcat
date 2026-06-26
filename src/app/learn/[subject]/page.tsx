import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBJECTS, getSubject } from "@/data/subjects";

export function generateStaticParams() {
  return SUBJECTS.map((s) => ({ subject: s.id }));
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) notFound();

  return (
    <div className="container-page" style={{ paddingBlock: "32px 64px", maxWidth: 880 }}>
      <Link href="/learn" style={{ color: "var(--ink-faint)", fontSize: 14, fontWeight: 600 }}>
        ← All subjects
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "16px 0 6px" }}>
        <span style={{ width: 44, height: 44, borderRadius: 12, background: `${subject.accent}1a`, display: "grid", placeItems: "center", color: subject.accent, fontWeight: 800 }}>
          {subject.short.slice(0, 2)}
        </span>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.03em", margin: 0 }}>{subject.name}</h1>
      </div>
      <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 620, margin: "0 0 28px" }}>
        {subject.blurb}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {subject.topics.map((t) => {
          const withSummaries = t.subtopics.filter((st) => st.summary).length;
          return (
            <Link
              key={t.id}
              href={`/learn/${subject.id}/${t.id}`}
              className="card"
              style={{ padding: 20, display: "block" }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                <h2 style={{ fontSize: 19, fontWeight: 700, margin: 0, letterSpacing: "-0.01em", flex: 1 }}>{t.name}</h2>
                <span style={{ color: subject.accent, fontWeight: 700, fontSize: 18 }}>→</span>
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.55, margin: "0 0 12px" }}>{t.blurb}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {t.subtopics.map((st) => (
                  <span
                    key={st.id}
                    className="badge"
                    style={st.summary ? { background: `${subject.accent}14`, color: subject.accent, border: "none" } : undefined}
                  >
                    {st.summary ? "" : "○ "}{st.name}
                  </span>
                ))}
              </div>
              {withSummaries > 0 && (
                <p style={{ fontSize: 12, color: "var(--ink-faint)", margin: "12px 0 0" }}>
                  {withSummaries} summar{withSummaries === 1 ? "y" : "ies"} ready
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
