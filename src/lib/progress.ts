"use client";

import type { Question } from "@/lib/types";
import { createClient } from "@/lib/supabase/client";

export type StudyMode = "quiz" | "review" | "passage" | "daily";

export interface LocalAttempt {
  question_id: string;
  subject: string;
  topic_id: string;
  subtopic_id?: string;
  correct: boolean;
  response_ms: number;
  mode: StudyMode;
  answered_at: string;
}

export async function recordAttempt(
  question: Pick<Question, "id" | "subject" | "topicId" | "subtopicId">,
  correct: boolean,
  responseMs: number,
  mode: StudyMode,
  runId?: string,
) {
  const local: LocalAttempt = {
    question_id: question.id,
    subject: question.subject,
    topic_id: question.topicId,
    subtopic_id: question.subtopicId,
    correct,
    response_ms: responseMs,
    mode,
    answered_at: new Date().toISOString(),
  };
  try {
    const history = JSON.parse(localStorage.getItem("hy_attempts") ?? "[]") as LocalAttempt[];
    localStorage.setItem("hy_attempts", JSON.stringify([local, ...history].slice(0, 500)));
  } catch { /* local history is best effort */ }

  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  if (!data.session) return;
  await supabase.rpc("record_attempt", {
    p_question_id: question.id,
    p_subject: question.subject,
    p_topic_id: question.topicId,
    p_subtopic_id: question.subtopicId ?? question.topicId,
    p_correct: correct,
    p_response_ms: Math.max(0, Math.min(responseMs, 3_600_000)),
    p_mode: mode,
    p_run_id: runId,
  });
}

export function getLocalAttempts(): LocalAttempt[] {
  try { return JSON.parse(localStorage.getItem("hy_attempts") ?? "[]") as LocalAttempt[]; }
  catch { return []; }
}
