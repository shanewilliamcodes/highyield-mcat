import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBJECTS, getSubject, getTopic } from "@/data/subjects";
import { SummaryView } from "@/components/SummaryView";
import { BookmarkButton } from "@/components/BookmarkButton";

export function generateStaticParams() {
  return SUBJECTS.flatMap((s) =>
    s.topics.map((t) => ({ subject: s.id, topic: t.id })),
  );
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}) {
  const { subject: subjectId, topic: topicId } = await params;
  const subject = getSubject(subjectId);
  const topic = getTopic(subjectId, topicId);
  if (!subject || !topic) notFound();

  return (
    <div className="container-page" style={{ paddingBlock: "32px 64px", maxWidth: 760 }}>
      <div style={{ fontSize: 14, color: "var(--ink-faint)", fontWeight: 600, marginBottom: 16 }}>
        <Link href="/learn">Learn</Link>
        <span style={{ margin: "0 6px" }}>/</span>
        <Link href={`/learn/${subject.id}`}>{subject.name}</Link>
      </div>

      <span className="badge" style={{ background: `${subject.accent}14`, color: subject.accent, border: "none", marginBottom: 10 }}>
        {subject.name}
      </span>
      <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", margin: "6px 0 6px" }}>{topic.name}</h1>
      <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, margin: "0 0 28px" }}>{topic.blurb}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {topic.subtopics.map((st) => (
          <section key={st.id} className="card" style={{ padding: "22px 24px" }}>
            <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: subject.accent, display: "inline-block" }} />
              {st.name}
              <BookmarkButton kind="subtopic" itemId={st.id} />
            </h3>
            {st.summary ? (
              <SummaryView summary={st.summary} accent={subject.accent} />
            ) : (
              <p style={{ color: "var(--ink-faint)", fontSize: 14, margin: 0 }}>
                Summary in progress — this subtopic is on the roadmap. In the
                meantime, drill it in the{" "}
                <Link href="/quiz" style={{ color: subject.accent, fontWeight: 600 }}>quiz</Link>.
              </p>
            )}
          </section>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
        <Link href="/quiz" className="btn btn-primary">Drill this in the quiz →</Link>
        <Link href={`/learn/${subject.id}`} className="btn btn-ghost">More {subject.name} topics</Link>
      </div>
    </div>
  );
}
