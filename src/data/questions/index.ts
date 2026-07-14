import type { Question, SubjectId } from "@/lib/types";
import { biologyQuestions } from "./biology";
import { biologyQuestions2 } from "./biology-2";
import { biologyQuestions3 } from "./biology-3";
import { biochemistryQuestions } from "./biochemistry";
import { biochemistryQuestions2 } from "./biochemistry-2";
import { biochemistryQuestions3 } from "./biochemistry-3";
import { generalChemistryQuestions } from "./general-chemistry";
import { generalChemistryQuestions2 } from "./general-chemistry-2";
import { generalChemistryQuestions3 } from "./general-chemistry-3";
import { organicChemistryQuestions } from "./organic-chemistry";
import { organicChemistryQuestions2 } from "./organic-chemistry-2";
import { organicChemistryQuestions3 } from "./organic-chemistry-3";
import { physicsQuestions } from "./physics";
import { physicsQuestions2 } from "./physics-2";
import { physicsQuestions3 } from "./physics-3";
import { psychologyQuestions } from "./psychology";
import { psychologyQuestions2 } from "./psychology-2";
import { psychologyQuestions3 } from "./psychology-3";
import { sociologyQuestions } from "./sociology";
import { sociologyQuestions2 } from "./sociology-2";
import { sociologyQuestions3 } from "./sociology-3";
import { rapidRecallQuestions } from "./rapid-recall";

export const ALL_QUESTIONS: Question[] = [
  ...biologyQuestions,
  ...biologyQuestions2,
  ...biologyQuestions3,
  ...biochemistryQuestions,
  ...biochemistryQuestions2,
  ...biochemistryQuestions3,
  ...generalChemistryQuestions,
  ...generalChemistryQuestions2,
  ...generalChemistryQuestions3,
  ...organicChemistryQuestions,
  ...organicChemistryQuestions2,
  ...organicChemistryQuestions3,
  ...physicsQuestions,
  ...physicsQuestions2,
  ...physicsQuestions3,
  ...psychologyQuestions,
  ...psychologyQuestions2,
  ...psychologyQuestions3,
  ...sociologyQuestions,
  ...sociologyQuestions2,
  ...sociologyQuestions3,
  ...rapidRecallQuestions,
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
