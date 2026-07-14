"use client";

import { useEffect, useRef, useState } from "react";
import type { Question } from "@/lib/types";
import { recordAttempt } from "@/lib/progress";
import { QuestionReportButton } from "@/components/QuestionReportButton";

export function KnowledgeCheck({ question }: { question: Question }) {
  const [choice, setChoice] = useState<boolean | null>(null);
  const shownAt = useRef(0);
  const answered = choice !== null;
  const correct = choice === question.answer;

  useEffect(() => {
    shownAt.current = performance.now();
  }, []);

  const answer = (value: boolean) => {
    if (answered) return;
    setChoice(value);
    void recordAttempt(question, value === question.answer, performance.now() - shownAt.current, "review", `learn-${question.topicId}`);
  };

  return (
    <aside className="knowledge-check" aria-label="Check your understanding">
      <div className="knowledge-check-label"><span>Quick check</span><small>True or false</small></div>
      <p>{question.statement}</p>
      {!answered ? (
        <div className="knowledge-check-actions">
          <button type="button" onClick={() => answer(true)}>True</button>
          <button type="button" onClick={() => answer(false)}>False</button>
        </div>
      ) : (
        <div className={`knowledge-feedback ${correct ? "is-correct" : "is-incorrect"}`}>
          <strong>{correct ? "Correct" : "Not quite"}</strong>
          <p>{question.explanation}</p>
          <div>
            <button type="button" onClick={() => { setChoice(null); shownAt.current = performance.now(); }}>Try again</button>
            <QuestionReportButton questionId={question.id} />
          </div>
        </div>
      )}
    </aside>
  );
}
