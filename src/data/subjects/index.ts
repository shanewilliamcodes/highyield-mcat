import type { Subject, SubjectId, Topic, Subtopic } from "@/lib/types";
import { biology } from "./biology";
import { biochemistry } from "./biochemistry";
import { generalChemistry } from "./general-chemistry";
import { organicChemistry } from "./organic-chemistry";
import { physics } from "./physics";
import { psychology } from "./psychology";
import { sociology } from "./sociology";
import { SUPPLEMENTAL_TOPICS } from "./supplemental";

/** All disciplines, in a sensible study order. CARS is intentionally excluded. */
export const SUBJECTS: Subject[] = [
  biology,
  biochemistry,
  generalChemistry,
  organicChemistry,
  physics,
  psychology,
  sociology,
].map((subject) => ({
  ...subject,
  topics: [...subject.topics, ...SUPPLEMENTAL_TOPICS[subject.id]],
}));

export const SUBJECT_BY_ID: Record<SubjectId, Subject> = SUBJECTS.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<SubjectId, Subject>,
);

export function getSubject(id: string): Subject | undefined {
  return SUBJECTS.find((s) => s.id === id);
}

export function subjectMark(id: string): string {
  return ({
    biology: "BI",
    biochemistry: "BC",
    "general-chemistry": "GC",
    "organic-chemistry": "OC",
    physics: "PH",
    psychology: "PS",
    sociology: "SO",
  } as Record<string, string>)[id] ?? id.slice(0, 2).toUpperCase();
}

export function getTopic(subjectId: string, topicId: string): Topic | undefined {
  return getSubject(subjectId)?.topics.find((t) => t.id === topicId);
}

export function findTopicName(topicId?: string): string | undefined {
  if (!topicId) return undefined;
  for (const s of SUBJECTS) {
    const t = s.topics.find((t) => t.id === topicId);
    if (t) return t.name;
  }
  return undefined;
}

export function findSubtopicName(subtopicId?: string): string | undefined {
  if (!subtopicId) return undefined;
  for (const s of SUBJECTS) {
    for (const t of s.topics) {
      const st = t.subtopics.find((st) => st.id === subtopicId);
      if (st) return st.name;
    }
  }
  return undefined;
}

export function allSubtopics(): { subject: Subject; topic: Topic; subtopic: Subtopic }[] {
  const out: { subject: Subject; topic: Topic; subtopic: Subtopic }[] = [];
  for (const subject of SUBJECTS) {
    for (const topic of subject.topics) {
      for (const subtopic of topic.subtopics) {
        out.push({ subject, topic, subtopic });
      }
    }
  }
  return out;
}
