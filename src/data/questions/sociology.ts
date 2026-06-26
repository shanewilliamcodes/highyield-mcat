import type { Question } from "@/lib/types";

export const sociologyQuestions: Question[] = [
  {
    id: "soc-q1",
    subject: "sociology",
    topicId: "soc-theory",
    subtopicId: "soc-theory-frameworks",
    statement: "Conflict theory views society as a system of interrelated parts working together to maintain stability.",
    answer: false,
    explanation:
      "That is FUNCTIONALISM. Conflict theory frames society as competition among groups over scarce resources, emphasizing power and inequality.",
    difficulty: 1,
  },
  {
    id: "soc-q2",
    subject: "sociology",
    topicId: "soc-theory",
    subtopicId: "soc-theory-frameworks",
    statement: "Symbolic interactionism is a micro-level theory focused on everyday interactions and shared meanings.",
    answer: true,
    explanation:
      "True. Symbolic interactionism examines how individuals create and interpret symbols and meanings in face-to-face interaction — a micro-level lens, unlike macro theories such as functionalism and conflict theory.",
    difficulty: 2,
  },
  {
    id: "soc-q3",
    subject: "sociology",
    topicId: "soc-theory",
    subtopicId: "soc-theory-frameworks",
    statement: "A latent function is an unintended, often unrecognized consequence of a social structure.",
    answer: true,
    explanation:
      "True. Manifest functions are intended and recognized; latent functions are unintended side effects (e.g., schools providing childcare while teaching).",
    difficulty: 2,
  },
  {
    id: "soc-q4",
    subject: "sociology",
    topicId: "soc-institutions",
    subtopicId: "soc-inst-medicine",
    statement: "According to the sick role concept, an ill person is obligated to try to get well and seek competent help.",
    answer: true,
    explanation:
      "True. Parsons' sick role exempts the person from normal duties and absolves blame, but in exchange they must want to recover and cooperate with medical care.",
    difficulty: 2,
  },
  {
    id: "soc-q5",
    subject: "sociology",
    topicId: "soc-institutions",
    subtopicId: "soc-inst-medicine",
    statement: "Medicalization refers to the process of defining and treating non-medical problems as medical conditions.",
    answer: true,
    explanation:
      "True. Medicalization brings behaviors or conditions (e.g., shyness, aging) under medical authority and treatment, expanding the reach of the medical institution.",
    difficulty: 2,
  },
  {
    id: "soc-q6",
    subject: "sociology",
    topicId: "soc-stratification",
    subtopicId: "soc-strat-concepts",
    statement: "A caste system is an example of an open stratification system with high social mobility.",
    answer: false,
    explanation:
      "A caste system is a CLOSED system with very low mobility — status is ascribed at birth. Class systems are comparatively open, allowing movement based partly on achievement.",
    difficulty: 2,
  },
  {
    id: "soc-q7",
    subject: "sociology",
    topicId: "soc-stratification",
    subtopicId: "soc-strat-concepts",
    statement: "The social determinants of health include factors like income, education, and access to care.",
    answer: true,
    explanation:
      "True. Social determinants are the non-medical, structural conditions — socioeconomic status, education, environment, and healthcare access — that shape health outcomes and disparities.",
    difficulty: 1,
  },
  {
    id: "soc-q8",
    subject: "sociology",
    topicId: "soc-demography",
    subtopicId: "soc-demo-concepts",
    statement: "Demographic transition describes a society's shift from high birth and death rates to low birth and death rates as it industrializes.",
    answer: true,
    explanation:
      "True. As societies industrialize, death rates fall first (better sanitation/medicine), then birth rates decline, eventually stabilizing population growth at low rates.",
    difficulty: 2,
  },
  {
    id: "soc-q9",
    subject: "sociology",
    topicId: "soc-demography",
    subtopicId: "soc-demo-concepts",
    statement: "Cultural capital refers to non-financial social assets such as education, style of speech, and credentials.",
    answer: true,
    explanation:
      "True. Bourdieu's cultural capital includes knowledge, skills, and credentials that confer social advantage and help reproduce inequality across generations.",
    difficulty: 2,
  },
];
