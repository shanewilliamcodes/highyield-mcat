"use client";

import { useRef, useState } from "react";
import { PASSAGES, type Passage } from "@/data/passages";
import { recordAttempt } from "@/lib/progress";
import { BookmarkButton } from "@/components/BookmarkButton";

export default function PassagesPage() {
  const [passage, setPassage] = useState<Passage | null>(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const shownAt = useRef(0);

  const choose = (next: Passage) => {
    setPassage(next);
    setIndex(0);
    setPicked(null);
    setScore(0);
    shownAt.current = window.performance.now();
  };
  if (!passage)
    return (
      <div className="container-page" style={{ paddingBlock: "40px 72px" }}>
        <span className="badge">Application mode</span>
        <h1 style={{ fontSize: 36, margin: "12px 0 8px" }}>Science passages</h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 660, lineHeight: 1.6 }}>
          Short experiments, clinical setups, and data interpretation. Read
          once, then answer linked true/false questions.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 14,
            marginTop: 26,
          }}
        >
          {PASSAGES.map((item) => (
            <button
              key={item.id}
              onClick={() => choose(item)}
              className="card"
              style={{
                padding: 20,
                textAlign: "left",
                cursor: "pointer",
                font: "inherit",
              }}
            >
              <span
                style={{ color: "var(--brand)", fontSize: 12, fontWeight: 700 }}
              >
                {item.section}
              </span>
              <strong
                style={{ display: "block", fontSize: 18, marginBlock: 7 }}
              >
                {item.title}
              </strong>
              <span style={{ color: "var(--ink-faint)", fontSize: 13 }}>
                {item.questions.length} linked questions
              </span>
            </button>
          ))}
        </div>
      </div>
    );

  const question = passage.questions[index];
  if (!question)
    return (
      <div
        className="container-page"
        style={{ paddingBlock: 64, maxWidth: 760 }}
      >
        <span className="badge">Passage complete</span>
        <h1>{passage.title}</h1>
        <p style={{ fontSize: 28, fontWeight: 800 }}>
          {score}/{passage.questions.length}
        </p>
        <button className="btn btn-primary" onClick={() => setPassage(null)}>
          Choose another passage
        </button>
      </div>
    );
  const correct = picked === question.answer;
  const answer = (choice: boolean) => {
    if (picked !== null) return;
    setPicked(choice);
    if (choice === question.answer) setScore((s) => s + 1);
    void recordAttempt(
      {
        id: question.id,
        subject: question.subject,
        topicId: question.topicId,
        subtopicId: question.subtopicId,
      },
      choice === question.answer,
      window.performance.now() - shownAt.current,
      "passage",
      passage.id,
    );
  };
  const next = () => {
    setIndex((i) => i + 1);
    setPicked(null);
    shownAt.current = window.performance.now();
  };

  return (
    <div
      className="container-page"
      style={{ paddingBlock: "32px 72px", maxWidth: 900 }}
    >
      <button
        onClick={() => setPassage(null)}
        style={{
          border: 0,
          background: "transparent",
          color: "var(--ink-soft)",
          cursor: "pointer",
        }}
      >
        ← All passages
      </button>
      <div className="passage-layout">
        <article style={{ paddingRight: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="badge">{passage.section}</span>
            <BookmarkButton kind="passage" itemId={passage.id} />
          </div>
          <h1 style={{ fontSize: 30 }}>{passage.title}</h1>
          {passage.context.map((text) => (
            <p
              key={text}
              style={{ lineHeight: 1.75, color: "var(--ink-soft)" }}
            >
              {text}
            </p>
          ))}
          {passage.headers && (
            <div style={{ overflowX: "auto", marginTop: 20 }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr>
                    {passage.headers.map((cell) => (
                      <th key={cell} style={cellStyle}>
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {passage.rows?.map((row) => (
                    <tr key={row.join()}>
                      {row.map((cell) => (
                        <td key={cell} style={cellStyle}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </article>
        <section className="card" style={{ padding: 22, alignSelf: "start" }}>
          <div
            style={{
              color: "var(--ink-faint)",
              fontSize: 12,
              marginBottom: 14,
            }}
          >
            Question {index + 1} of {passage.questions.length}
          </div>
          <p style={{ fontWeight: 700, fontSize: 19, lineHeight: 1.5 }}>
            {question.statement}
          </p>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          >
            <button
              className="btn btn-ghost"
              disabled={picked !== null}
              onClick={() => answer(true)}
            >
              True
            </button>
            <button
              className="btn btn-ghost"
              disabled={picked !== null}
              onClick={() => answer(false)}
            >
              False
            </button>
          </div>
          {picked !== null && (
            <div
              style={{
                marginTop: 16,
                padding: 14,
                borderRadius: 10,
                background: correct ? "var(--green-soft)" : "var(--red-soft)",
              }}
            >
              <strong
                style={{ color: correct ? "var(--green)" : "var(--red)" }}
              >
                {correct
                  ? "Correct"
                  : `Incorrect · ${question.answer ? "True" : "False"}`}
              </strong>
              <p style={{ lineHeight: 1.55, fontSize: 14 }}>
                {question.explanation}
              </p>
              <button className="btn btn-primary" onClick={next}>
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

const cellStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  padding: "9px 10px",
  textAlign: "left",
};
