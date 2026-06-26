import type { Question, SubjectId } from "@/lib/types";
import { biologyQuestions } from "./biology";
import { biochemistryQuestions } from "./biochemistry";
import { generalChemistryQuestions } from "./general-chemistry";
import { organicChemistryQuestions } from "./organic-chemistry";
import { physicsQuestions } from "./physics";
import { psychologyQuestions } from "./psychology";
import { sociologyQuestions } from "./sociology";

export const ALL_QUESTIONS: Question[] = [
  ...biologyQuestions,
  ...biochemistryQuestions,
  ...generalChemistryQuestions,
  ...organicChemistryQuestions,
  ...physicsQuestions,
  ...psychologyQuestions,
  ...sociologyQuestions,
];

export const QUESTION_COUNT = ALL_QUESTIONS.length;

export function countBySubject(): Record<SubjectId, number> {
  return ALL_QUESTIONS.reduce(
    (acc, q) => {
      acc[q.subject] = (acc[q.subject] ?? 0) + 1;
      return acc;
    },
    {} as Record<SubjectId, number>,
  );
}
