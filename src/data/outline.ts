import type { SubjectId } from "@/lib/types";

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

export const OUTLINE: OutlineSubject[] = [
  {
    id: "biology",
    name: "Biology",
    short: "Bio",
    accent: "#16a34a",
    topics: [
      { id: "bio-cell", name: "The Cell" },
      { id: "bio-molecular", name: "Molecular Biology" },
      { id: "bio-genetics", name: "Genetics" },
      { id: "bio-physiology", name: "Physiology & Systems" },
    ],
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    short: "Biochem",
    accent: "#0ea5e9",
    topics: [
      { id: "bc-aa", name: "Amino Acids & Proteins" },
      { id: "bc-enzymes", name: "Enzymes" },
      { id: "bc-metabolism", name: "Metabolism" },
    ],
  },
  {
    id: "general-chemistry",
    name: "General Chemistry",
    short: "Gen Chem",
    accent: "#f97316",
    topics: [
      { id: "gc-atomic", name: "Atomic Structure & Trends" },
      { id: "gc-bonding", name: "Bonding & IMFs" },
      { id: "gc-thermo", name: "Thermodynamics" },
      { id: "gc-kinetics-eq", name: "Kinetics & Equilibrium" },
      { id: "gc-acidbase", name: "Acids & Bases" },
      { id: "gc-electro", name: "Electrochemistry" },
    ],
  },
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    short: "Orgo",
    accent: "#e11d48",
    topics: [
      { id: "oc-fundamentals", name: "Structure & Stereochemistry" },
      { id: "oc-groups", name: "Functional Groups & Reactions" },
      { id: "oc-lab", name: "Separations & Spectroscopy" },
    ],
  },
  {
    id: "physics",
    name: "Physics",
    short: "Physics",
    accent: "#6366f1",
    topics: [
      { id: "ph-mechanics", name: "Mechanics" },
      { id: "ph-fluids", name: "Fluids" },
      { id: "ph-electricity", name: "Electricity & Magnetism" },
      { id: "ph-waves", name: "Waves, Sound & Optics" },
    ],
  },
  {
    id: "psychology",
    name: "Psychology",
    short: "Psych",
    accent: "#a855f7",
    topics: [
      { id: "psy-sensation", name: "Sensation & Perception" },
      { id: "psy-learning", name: "Learning & Memory" },
      { id: "psy-cognition", name: "Cognition & Consciousness" },
      { id: "psy-development", name: "Development & Motivation" },
      { id: "psy-disorders", name: "Psychological Disorders" },
    ],
  },
  {
    id: "sociology",
    name: "Sociology",
    short: "Soc",
    accent: "#0d9488",
    topics: [
      { id: "soc-theory", name: "Theoretical Frameworks" },
      { id: "soc-institutions", name: "Social Institutions" },
      { id: "soc-stratification", name: "Social Inequality" },
      { id: "soc-demography", name: "Demographics & Change" },
    ],
  },
];

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
