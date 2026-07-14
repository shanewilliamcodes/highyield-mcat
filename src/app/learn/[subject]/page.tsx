import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBJECTS, getSubject, subjectMark } from "@/data/subjects";
import { ALL_QUESTIONS } from "@/data/questions";

export function generateStaticParams() {
  return SUBJECTS.map((subject) => ({ subject: subject.id }));
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) notFound();

  const subjectIndex = SUBJECTS.findIndex((item) => item.id === subject.id);
  const previous = SUBJECTS[subjectIndex - 1];
  const next = SUBJECTS[subjectIndex + 1];
  const noteCount = subject.topics.reduce((sum, topic) => sum + topic.subtopics.length, 0);
  const questionCount = ALL_QUESTIONS.filter((question) => question.subject === subject.id).length;

  return (
    <main className="subject-roadmap" style={{ "--subject-accent": subject.accent } as React.CSSProperties}>
      <div className="subject-roadmap-topbar">
        <Link href="/learn">← Curriculum</Link>
        <nav aria-label="Subject navigation">
          {previous && <Link href={`/learn/${previous.id}`}>Previous</Link>}
          {next && <Link href={`/learn/${next.id}`}>Next subject →</Link>}
        </nav>
      </div>

      <header className="subject-roadmap-header">
        <span className="learn-subject-mark" style={{ color: subject.accent, background: `${subject.accent}12` }}>
          {subjectMark(subject.id)}
        </span>
        <div>
          <p className="learn-eyebrow">{subject.sections.join(" · ")}</p>
          <h1>{subject.name}</h1>
          <p>{subject.blurb}</p>
        </div>
        <dl>
          <div><dt>Topics</dt><dd>{subject.topics.length}</dd></div>
          <div><dt>Study notes</dt><dd>{noteCount}</dd></div>
          <div><dt>Practice questions</dt><dd>{questionCount}</dd></div>
        </dl>
      </header>

      <div className="subject-roadmap-layout">
        <aside className="subject-roadmap-index">
          <p className="learn-eyebrow">Roadmap</p>
          <ol>
            {subject.topics.map((topic, index) => (
              <li key={topic.id}>
                <a href={`#${topic.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{topic.name}</a>
              </li>
            ))}
          </ol>
          <Link href="/reference">Open reference sheets →</Link>
        </aside>

        <section className="subject-roadmap-content">
          {subject.topics.map((topic, index) => {
            const topicQuestions = ALL_QUESTIONS.filter((question) => question.topicId === topic.id).length;
            return (
              <article key={topic.id} id={topic.id} className="subject-topic-section">
                <div className="subject-topic-heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h2>{topic.name}</h2><p>{topic.blurb}</p></div>
                </div>
                <div className="subject-subtopic-list">
                  {topic.subtopics.map((subtopic, subtopicIndex) => (
                    <Link key={subtopic.id} href={`/learn/${subject.id}/${topic.id}#${subtopic.id}`}>
                      <span>{index + 1}.{subtopicIndex + 1}</span>
                      <strong>{subtopic.name}</strong>
                      <small>{subtopic.summary?.highYield ?? "Concise concept review"}</small>
                      <b aria-hidden="true">→</b>
                    </Link>
                  ))}
                </div>
                <footer>
                  <span>{topic.subtopics.length} notes · {topicQuestions} questions</span>
                  <Link href={`/learn/${subject.id}/${topic.id}`}>Study {topic.name} →</Link>
                </footer>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
