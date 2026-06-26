import type { Question, SubjectId } from "@/lib/types";
import { biologyQuestions } from "./biology";
import { biologyQuestions2 } from "./biology-2";
import { biochemistryQuestions } from "./biochemistry";
import { biochemistryQuestions2 } from "./biochemistry-2";
import { generalChemistryQuestions } from "./general-chemistry";
import { generalChemistryQuestions2 } from "./general-chemistry-2";
import { organicChemistryQuestions } from "./organic-chemistry";
import { organicChemistryQuestions2 } from "./organic-chemistry-2";
import { physicsQuestions } from "./physics";
import { physicsQuestions2 } from "./physics-2";
import { psychologyQuestions } from "./psychology";
import { psychologyQuestions2 } from "./psychology-2";
import { sociologyQuestions } from "./sociology";
import { sociologyQuestions2 } from "./sociology-2";

export const ALL_QUESTIONS: Question[] = [
  ...biologyQuestions,
  ...biologyQuestions2,
  ...biochemistryQuestions,
  ...biochemistryQuestions2,
  ...generalChemistryQuestions,
  ...generalChemistryQuestions2,
  ...organicChemistryQuestions,
  ...organicChemistryQuestions2,
  ...physicsQuestions,
  ...physicsQuestions2,
  ...psychologyQuestions,
  ...psychologyQuestions2,
  ...sociologyQuestions,
  ...sociologyQuestions2,
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
