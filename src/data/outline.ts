import type { SubjectId } from "@/lib/types";
import { SUBJECTS } from "@/data/subjects";

/**
 * Lightweight subject → topic outline for the quiz topic picker. Kept separate
 * from the full subject data (which carries heavy summary content) so the quiz
 * client bundle stays small.
 */
export interface OutlineTopic {
  id: string;
  name: string;
}
export interface OutlineSubject {
  id: SubjectId;
  name: string;
  short: string;
  accent: string;
  topics: OutlineTopic[];
}

const SHORT: Record<SubjectId, string> = {
  biology: "Bio",
  biochemistry: "Biochem",
  "general-chemistry": "Gen Chem",
  "organic-chemistry": "Orgo",
  physics: "Physics",
  psychology: "Psych",
  sociology: "Soc",
};

export const OUTLINE: OutlineSubject[] = SUBJECTS.map((subject) => ({
  id: subject.id,
  name: subject.name,
  short: SHORT[subject.id],
  accent: subject.accent,
  topics: subject.topics.map(({ id, name }) => ({ id, name })),
}));

export const ALL_TOPIC_IDS: string[] = OUTLINE.flatMap((s) =>
  s.topics.map((t) => t.id),
);

export const SUBJECT_ACCENT: Record<SubjectId, string> = OUTLINE.reduce(
  (acc, s) => {
    acc[s.id] = s.accent;
    return acc;
  },
  {} as Record<SubjectId, string>,
);

export const SUBJECT_SHORT: Record<SubjectId, string> = OUTLINE.reduce(
  (acc, s) => {
    acc[s.id] = s.short;
    return acc;
  },
  {} as Record<SubjectId, string>,
);
