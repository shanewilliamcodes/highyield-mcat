import type { Question } from "@/lib/types";

export const biochemistryQuestions: Question[] = [
  {
    id: "bc-q1",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure",
    statement: "Glycine is the only standard amino acid that is achiral.",
    answer: true,
    explanation:
      "True. Glycine's R group is just a hydrogen, so its α-carbon has two identical substituents (two H's) and is not a stereocenter — making glycine achiral.",
    difficulty: 2,
  },
  {
    id: "bc-q2",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure",
    statement: "Lysine and arginine carry a net negative charge at physiological pH.",
    answer: false,
    explanation:
      "Lysine, arginine, and histidine are the BASIC amino acids — positively charged at physiological pH. Aspartate and glutamate are the acidic (negatively charged) ones.",
    difficulty: 1,
  },
  {
    id: "bc-q3",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure-levels",
    statement: "Denaturation of a protein breaks the peptide bonds of its primary structure.",
    answer: false,
    explanation:
      "Denaturation disrupts secondary, tertiary, and quaternary structure but leaves the primary sequence (peptide bonds) intact. Heat, extreme pH, and urea denature without cleaving the backbone.",
    difficulty: 1,
  },
  {
    id: "bc-q4",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure-levels",
    statement: "Alpha-helices and beta-pleated sheets are examples of secondary structure stabilized by hydrogen bonds.",
    answer: true,
    explanation:
      "Correct. Secondary structure arises from hydrogen bonding along the polypeptide backbone, producing α-helices and β-pleated sheets.",
    difficulty: 1,
  },
  {
    id: "bc-q5",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-titration",
    statement: "At a pH equal to its isoelectric point, an amino acid carries no net charge.",
    answer: true,
    explanation:
      "True. The pI is defined as the pH at which the molecule exists predominantly as a zwitterion with zero net charge and will not migrate in an electric field.",
    difficulty: 2,
  },
  {
    id: "bc-q6",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-kinetics",
    statement: "Enzymes increase the rate of a reaction by lowering its activation energy.",
    answer: true,
    explanation:
      "Correct. Enzymes stabilize the transition state, lowering activation energy. They do not change ΔG, the equilibrium position, or the reaction's thermodynamic favorability.",
    difficulty: 1,
  },
  {
    id: "bc-q7",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-kinetics",
    statement: "A competitive inhibitor increases the apparent Km while leaving Vmax unchanged.",
    answer: true,
    explanation:
      "True. A competitive inhibitor competes for the active site, so more substrate is needed to reach half-max (higher Km), but Vmax is still reachable at saturating substrate.",
    difficulty: 2,
  },
  {
    id: "bc-q8",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-kinetics",
    statement: "A low Km value indicates that an enzyme has a low affinity for its substrate.",
    answer: false,
    explanation:
      "Km is inversely related to affinity. A LOW Km means the enzyme reaches half-max velocity at low substrate concentration — i.e., HIGH affinity.",
    difficulty: 2,
  },
  {
    id: "bc-q9",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-regulation",
    statement: "Zymogens are enzymes that are secreted in an active form and later inactivated by cleavage.",
    answer: false,
    explanation:
      "Zymogens are INACTIVE precursors that become active upon cleavage (e.g., pepsinogen → pepsin, trypsinogen → trypsin). This prevents enzymes from digesting the tissues that make them.",
    difficulty: 2,
  },
  {
    id: "bc-q10",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycolysis",
    statement: "Glycolysis produces a net of 2 ATP and 2 NADH per glucose molecule.",
    answer: true,
    explanation:
      "Correct. Glycolysis invests 2 ATP and produces 4 (net 2 ATP), plus 2 NADH and 2 pyruvate, all in the cytoplasm without requiring oxygen.",
    difficulty: 1,
  },
  {
    id: "bc-q11",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycolysis",
    statement: "Phosphofructokinase-1 (PFK-1) catalyzes the rate-limiting step of glycolysis and is activated by ATP.",
    answer: false,
    explanation:
      "PFK-1 is the rate-limiting enzyme, but it is INHIBITED by high ATP (and citrate) and activated by AMP and fructose-2,6-bisphosphate — the cell slows glycolysis when energy is plentiful.",
    difficulty: 2,
  },
  {
    id: "bc-q12",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-krebs",
    statement: "The citric acid cycle occurs in the mitochondrial matrix.",
    answer: true,
    explanation:
      "True. After pyruvate is converted to acetyl-CoA, the citric acid (Krebs) cycle runs in the mitochondrial matrix, generating NADH, FADH₂, GTP, and CO₂.",
    difficulty: 1,
  },
  {
    id: "bc-q13",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-etc",
    statement: "Oxygen is the final electron acceptor of the electron transport chain.",
    answer: true,
    explanation:
      "Correct. O₂ accepts electrons at complex IV and is reduced to water. Without O₂, the chain backs up, NADH cannot be reoxidized, and the cell relies on fermentation.",
    difficulty: 1,
  },
  {
    id: "bc-q14",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-etc",
    statement: "ATP synthase is powered directly by ATP hydrolysis rather than by a proton gradient.",
    answer: false,
    explanation:
      "ATP synthase is driven by the proton-motive force — H⁺ flowing down the gradient built across the inner mitochondrial membrane (chemiosmosis). It uses that gradient to MAKE ATP, not hydrolyze it.",
    difficulty: 2,
  },
  {
    id: "bc-q15",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-etc",
    statement: "Complete aerobic oxidation of one glucose molecule yields roughly 30–32 ATP.",
    answer: true,
    explanation:
      "True. Modern estimates put the net yield around 30–32 ATP per glucose when accounting for the cost of shuttling electrons and transporting ATP — lower than the older textbook figure of 36–38.",
    difficulty: 2,
  },
];
