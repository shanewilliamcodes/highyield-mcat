// Core data model for HighYield — MCAT content + quiz engine.

export type SubjectId =
  | "biology"
  | "biochemistry"
  | "general-chemistry"
  | "organic-chemistry"
  | "physics"
  | "psychology"
  | "sociology";

/** A digestible block of summary content. */
export type SummaryBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "key"; term: string; def: string }
  | { type: "tip"; text: string };

export interface ContentSummary {
  /** One-line reason this matters on test day. */
  highYield?: string;
  body: SummaryBlock[];
}

export interface Subtopic {
  id: string;
  name: string;
  summary?: ContentSummary;
}

export interface Topic {
  id: string;
  name: string;
  blurb: string;
  subtopics: Subtopic[];
}

export interface Subject {
  id: SubjectId;
  name: string;
  short: string;
  /** Tailwind-friendly accent hue used across cards/badges. */
  accent: string;
  blurb: string;
  /** AAMC sections this discipline shows up in. */
  sections: string[];
  topics: Topic[];
}

export interface Question {
  id: string;
  subject: SubjectId;
  topicId: string;
  subtopicId?: string;
  /** The statement the user judges true or false. */
  statement: string;
  /** true = the statement is correct. */
  answer: boolean;
  /** Why — shown after every answer so you actually learn. */
  explanation: string;
  difficulty?: 1 | 2 | 3;
}

export interface LeaderboardEntry {
  name: string;
  streak: number;
  /** epoch ms */
  at: number;
}
