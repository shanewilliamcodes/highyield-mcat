"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { subjectMark } from "@/data/subjects";

export interface LearnHubSubject {
  id: string;
  name: string;
  short: string;
  accent: string;
  blurb: string;
  sections: string[];
  topics: Array<{
    id: string;
    name: string;
    blurb: string;
    subtopics: Array<{ id: string; name: string; searchable: string }>;
  }>;
}

export function LearnHub({ subjects }: { subjects: LearnHubSubject[] }) {
  const [query, setQuery] = useState("");
  const [activeSubject, setActiveSubject] = useState(subjects[0]?.id ?? "");
  const normalized = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalized) return [];
    const words = normalized.split(/\s+/).filter(Boolean);
    return subjects.flatMap((subject) =>
      subject.topics.flatMap((topic) =>
        topic.subtopics
          .filter((subtopic) =>
            words.every((word) =>
              `${subject.name} ${topic.name} ${topic.blurb} ${subtopic.name} ${subtopic.searchable}`
                .toLowerCase()
                .includes(word),
            ),
          )
          .map((subtopic) => ({ subject, topic, subtopic })),
      ),
    ).slice(0, 36);
  }, [normalized, subjects]);

  const selected = subjects.find((subject) => subject.id === activeSubject) ?? subjects[0];
  const topicCount = subjects.reduce((total, subject) => total + subject.topics.length, 0);
  const subtopicCount = subjects.reduce(
    (total, subject) => total + subject.topics.reduce((sum, topic) => sum + topic.subtopics.length, 0),
    0,
  );

  return (
    <main className="learn-shell">
      <header className="learn-header">
        <div>
          <p className="learn-eyebrow">MCAT content library</p>
          <h1>Learn</h1>
          <p className="learn-intro">
            Move from the full exam map to a single concept without losing your place.
            Every section is written for rapid review, then reinforced with active recall.
          </p>
        </div>
        <div className="learn-header-stats" aria-label="Curriculum coverage">
          <div><strong>{subjects.length}</strong><span>disciplines</span></div>
          <div><strong>{topicCount}</strong><span>topics</span></div>
          <div><strong>{subtopicCount}</strong><span>study notes</span></div>
        </div>
      </header>

      <div className="learn-tools">
        <label className="learn-search">
          <span className="sr-only">Search the MCAT curriculum</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pathways, equations, systems, theories..."
          />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
        </label>
        <nav className="learn-utility" aria-label="Study resources">
          <Link href="/reference">Reference sheets</Link>
          <Link href="/bookmarks">Bookmarks</Link>
          <Link href="/review">Review queue</Link>
        </nav>
      </div>

      {normalized ? (
        <section className="learn-results" aria-live="polite">
          <div className="learn-section-heading">
            <div>
              <p className="learn-eyebrow">Search results</p>
              <h2>{results.length ? `${results.length} matching concepts` : "No matching concepts"}</h2>
            </div>
            <button type="button" className="learn-text-button" onClick={() => setQuery("")}>Return to syllabus</button>
          </div>
          <div className="learn-result-list">
            {results.map(({ subject, topic, subtopic }) => (
              <Link
                key={subtopic.id}
                href={`/learn/${subject.id}/${topic.id}#${subtopic.id}`}
                className="learn-result-row"
              >
                <span className="learn-subject-mark" style={{ color: subject.accent, background: `${subject.accent}12` }}>
                  {subjectMark(subject.id)}
                </span>
                <span>
                  <small>{subject.name} / {topic.name}</small>
                  <strong>{subtopic.name}</strong>
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="learn-browser">
          <aside className="learn-subject-nav" aria-label="MCAT disciplines">
            {subjects.map((subject) => {
              const count = subject.topics.reduce((sum, topic) => sum + topic.subtopics.length, 0);
              return (
                <button
                  key={subject.id}
                  type="button"
                  className={subject.id === selected.id ? "is-active" : ""}
                  onClick={() => setActiveSubject(subject.id)}
                  style={{ "--subject-accent": subject.accent } as React.CSSProperties}
                >
                  <span className="learn-subject-mark" style={{ color: subject.accent, background: `${subject.accent}12` }}>
                    {subjectMark(subject.id)}
                  </span>
                  <span><strong>{subject.name}</strong><small>{subject.topics.length} topics · {count} notes</small></span>
                </button>
              );
            })}
          </aside>

          <section className="learn-curriculum" style={{ "--subject-accent": selected.accent } as React.CSSProperties}>
            <div className="learn-subject-summary">
              <div>
                <p className="learn-eyebrow">{selected.sections.join(" · ")}</p>
                <h2>{selected.name}</h2>
                <p>{selected.blurb}</p>
              </div>
              <Link href={`/learn/${selected.id}`} className="btn btn-primary">Open roadmap</Link>
            </div>
            <div className="learn-topic-table">
              {selected.topics.map((topic, index) => (
                <article key={topic.id} className="learn-topic-row">
                  <div className="learn-topic-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <Link href={`/learn/${selected.id}/${topic.id}`} className="learn-topic-title">
                      <h3>{topic.name}</h3><span aria-hidden="true">→</span>
                    </Link>
                    <p>{topic.blurb}</p>
                    <div className="learn-subtopic-links">
                      {topic.subtopics.map((subtopic) => (
                        <Link key={subtopic.id} href={`/learn/${selected.id}/${topic.id}#${subtopic.id}`}>
                          {subtopic.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
