import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBJECTS, getSubject, getTopic, subjectMark } from "@/data/subjects";
import { ALL_QUESTIONS } from "@/data/questions";
import { SummaryView } from "@/components/SummaryView";
import { BookmarkButton } from "@/components/BookmarkButton";
import { KnowledgeCheck } from "@/components/KnowledgeCheck";

export function generateStaticParams() {
  return SUBJECTS.flatMap((subject) =>
    subject.topics.map((topic) => ({ subject: subject.id, topic: topic.id })),
  );
}

export default async function TopicPage({ params }: { params: Promise<{ subject: string; topic: string }> }) {
  const { subject: subjectId, topic: topicId } = await params;
  const subject = getSubject(subjectId);
  const topic = getTopic(subjectId, topicId);
  if (!subject || !topic) notFound();

  const topicIndex = subject.topics.findIndex((item) => item.id === topic.id);
  const previous = subject.topics[topicIndex - 1];
  const next = subject.topics[topicIndex + 1];
  const topicQuestions = ALL_QUESTIONS.filter((question) => question.topicId === topic.id);
  const checks = topic.subtopics.map((subtopic, index) =>
    topicQuestions.find((question) => question.subtopicId === subtopic.id) ?? topicQuestions[index % Math.max(topicQuestions.length, 1)],
  );

  return (
    <main className="study-workspace" style={{ "--subject-accent": subject.accent } as React.CSSProperties}>
      <header className="study-topbar">
        <div>
          <Link href="/learn">Learn</Link><span>/</span>
          <Link href={`/learn/${subject.id}`}>{subject.name}</Link><span>/</span>
          <strong>{topic.name}</strong>
        </div>
        <nav aria-label="Topic navigation">
          {previous && <Link href={`/learn/${subject.id}/${previous.id}`}>← {previous.name}</Link>}
          {next && <Link href={`/learn/${subject.id}/${next.id}`}>{next.name} →</Link>}
        </nav>
      </header>

      <div className="study-layout">
        <aside className="study-outline">
          <Link href={`/learn/${subject.id}`} className="study-outline-subject">
            <span className="learn-subject-mark" style={{ color: subject.accent, background: `${subject.accent}12` }}>
              {subjectMark(subject.id)}
            </span>
            <span><small>{subject.name}</small><strong>{topic.name}</strong></span>
          </Link>
          <nav aria-label="On this page">
            <p className="learn-eyebrow">In this topic</p>
            {topic.subtopics.map((subtopic, index) => (
              <a key={subtopic.id} href={`#${subtopic.id}`}><span>{index + 1}</span>{subtopic.name}</a>
            ))}
          </nav>
          <div className="study-outline-actions">
            <Link href={`/quiz?topic=${topic.id}`}>Practice this topic</Link>
            <Link href="/bookmarks">View bookmarks</Link>
          </div>
        </aside>

        <article className="study-document">
          <header className="study-document-header">
            <p className="learn-eyebrow">{subject.name} · Topic {topicIndex + 1} of {subject.topics.length}</p>
            <h1>{topic.name}</h1>
            <p>{topic.blurb}</p>
            <div>
              <span>{topic.subtopics.length} sections</span>
              <span>{topicQuestions.length} related questions</span>
              <Link href="/sources">Sources and methodology</Link>
            </div>
          </header>

          {topic.subtopics.map((subtopic, index) => (
            <section key={subtopic.id} id={subtopic.id} className="study-section">
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><p>Concept {index + 1}</p><h2>{subtopic.name}</h2></div>
                <BookmarkButton kind="subtopic" itemId={subtopic.id} />
              </header>
              {subtopic.summary ? (
                <SummaryView summary={subtopic.summary} accent={subject.accent} />
              ) : (
                <p className="study-empty">This section is being expanded.</p>
              )}
              {checks[index] && <KnowledgeCheck question={checks[index]} />}
              <a className="study-back-top" href="#">Back to top ↑</a>
            </section>
          ))}

          <footer className="study-next">
            <div><p className="learn-eyebrow">Topic complete</p><h2>Keep the sequence moving</h2></div>
            {next ? (
              <Link href={`/learn/${subject.id}/${next.id}`}><small>Next topic</small><strong>{next.name} →</strong></Link>
            ) : (
              <Link href={`/learn/${subject.id}`}><small>Subject roadmap</small><strong>Review {subject.name} →</strong></Link>
            )}
          </footer>
        </article>
      </div>
    </main>
  );
}
