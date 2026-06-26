import type { Question } from "@/lib/types";

// Biochemistry — batch 3. Adds biomolecules (carbs, lipids, nucleic acids),
// plus more amino acid, enzyme, and metabolism coverage.
export const biochemistryQuestions3: Question[] = [
  {
    id: "bc-q41",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-carb",
    statement: "Cellulose contains beta-1,4 glycosidic bonds that humans cannot digest.",
    answer: true,
    explanation:
      "True. Humans lack the enzyme to hydrolyze the β-1,4 linkages of cellulose, so it passes through as fiber. Starch and glycogen use α linkages, which we can digest.",
    difficulty: 2,
  },
  {
    id: "bc-q42",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-carb",
    statement: "Glucose and fructose are structural isomers with the same molecular formula.",
    answer: true,
    explanation:
      "True. Both are C₆H₁₂O₆ but differ in structure — glucose is an aldose and fructose is a ketose, making them constitutional (structural) isomers.",
    difficulty: 2,
  },
  {
    id: "bc-q43",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-carb",
    statement: "A reducing sugar has a free anomeric carbon that can be oxidized.",
    answer: true,
    explanation:
      "True. Reducing sugars (like glucose) have a free anomeric carbon (open-chain aldehyde/ketone form) that reduces reagents in Benedict's or Tollens' tests.",
    difficulty: 3,
  },
  {
    id: "bc-q44",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-lipid",
    statement: "Phospholipids are amphipathic, having both hydrophilic and hydrophobic regions.",
    answer: true,
    explanation:
      "True. A phospholipid's polar phosphate head is hydrophilic and its fatty-acid tails are hydrophobic — the amphipathic property that drives bilayer formation.",
    difficulty: 1,
  },
  {
    id: "bc-q45",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-lipid",
    statement: "Saturated fatty acids contain one or more carbon-carbon double bonds.",
    answer: false,
    explanation:
      "SATURATED fatty acids have NO C=C double bonds (saturated with hydrogen) and pack tightly (solid at room temp). UNSATURATED fatty acids contain double bonds.",
    difficulty: 1,
  },
  {
    id: "bc-q46",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-lipid",
    statement: "Cholesterol is a steroid that serves as a precursor for steroid hormones.",
    answer: true,
    explanation:
      "True. Cholesterol's four fused rings define steroids; it is the precursor to hormones like cortisol, aldosterone, testosterone, and estrogen, and to bile acids and vitamin D.",
    difficulty: 2,
  },
  {
    id: "bc-q47",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-nucleic",
    statement: "Guanine and cytosine pair via three hydrogen bonds, making G-C pairs more stable than A-T pairs.",
    answer: true,
    explanation:
      "True. G-C pairs have three hydrogen bonds versus two for A-T, so GC-rich DNA requires more energy (higher temperature) to denature.",
    difficulty: 2,
  },
  {
    id: "bc-q48",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-nucleic",
    statement: "Adenine and guanine are pyrimidines with a single-ring structure.",
    answer: false,
    explanation:
      "Adenine and guanine are PURINES with a double-ring structure. The single-ring PYRIMIDINES are cytosine, thymine, and uracil.",
    difficulty: 2,
  },
  {
    id: "bc-q49",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-nucleic",
    statement: "RNA contains the sugar ribose, while DNA contains deoxyribose.",
    answer: true,
    explanation:
      "True. Ribose has a 2'-OH; deoxyribose lacks it (2'-H). DNA also uses thymine where RNA uses uracil.",
    difficulty: 1,
  },
  {
    id: "bc-q50",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure",
    statement: "The R group (side chain) is what distinguishes one amino acid from another.",
    answer: true,
    explanation:
      "True. All amino acids share the same backbone (amino group, carboxyl group, α-hydrogen); the variable R group determines each amino acid's chemistry.",
    difficulty: 1,
  },
  {
    id: "bc-q51",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-titration",
    statement: "At a very high pH, the carboxyl and amino groups of a simple amino acid are both deprotonated.",
    answer: true,
    explanation:
      "True. At high pH the carboxyl is deprotonated (–COO⁻) and the amino group loses its proton (–NH₂), giving a net negative charge.",
    difficulty: 2,
  },
  {
    id: "bc-q52",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-kinetics",
    statement: "Each enzyme has an optimal pH and temperature at which its activity is highest.",
    answer: true,
    explanation:
      "True. Activity peaks at an enzyme's optimal conditions; beyond them, denaturation or altered ionization reduces catalysis (e.g., pepsin ~pH 2, most body enzymes ~pH 7.4).",
    difficulty: 1,
  },
  {
    id: "bc-q53",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-regulation",
    statement: "In feedback inhibition, the product of a pathway inhibits an enzyme earlier in that pathway.",
    answer: true,
    explanation:
      "True. Feedback (end-product) inhibition lets the final product shut down an upstream enzyme, preventing wasteful overproduction.",
    difficulty: 1,
  },
  {
    id: "bc-q54",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycolysis",
    statement: "The net ATP yield of glycolysis would be 4 if no ATP were invested in the early steps.",
    answer: true,
    explanation:
      "True. Glycolysis produces 4 ATP but invests 2 in the priming steps, for a net of 2. Without the investment, the gross yield of 4 would be the net.",
    difficulty: 2,
  },
  {
    id: "bc-q55",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-etc",
    statement: "The proton gradient that powers ATP synthase is established across the inner mitochondrial membrane.",
    answer: true,
    explanation:
      "True. Electron transport pumps protons into the intermembrane space; they flow back through ATP synthase in the inner membrane to drive ATP synthesis (chemiosmosis).",
    difficulty: 2,
  },
  {
    id: "bc-q56",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-krebs",
    statement: "The citric acid cycle directly produces large amounts of ATP through substrate-level phosphorylation.",
    answer: false,
    explanation:
      "The cycle makes only 1 GTP/ATP per turn directly; its main payoff is the NADH and FADH₂ that feed the electron transport chain, where most ATP is actually made.",
    difficulty: 2,
  },
  {
    id: "bc-q57",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-lipid",
    statement: "Beta-oxidation produces NADH and FADH₂ that can enter the electron transport chain.",
    answer: true,
    explanation:
      "True. Each round of beta-oxidation yields acetyl-CoA plus one NADH and one FADH₂, contributing electrons to oxidative phosphorylation.",
    difficulty: 2,
  },
  {
    id: "bc-q58",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure-levels",
    statement: "Chaperone proteins assist other proteins in folding correctly.",
    answer: true,
    explanation:
      "True. Molecular chaperones (e.g., heat-shock proteins) help nascent or stressed proteins fold properly and prevent aggregation.",
    difficulty: 2,
  },
  {
    id: "bc-q59",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-nucleic",
    statement: "ATP stores energy in the bonds between its phosphate groups.",
    answer: true,
    explanation:
      "True. ATP's high-energy phosphoanhydride bonds release energy when hydrolyzed to ADP + Pi, powering cellular work.",
    difficulty: 1,
  },
  {
    id: "bc-q60",
    subject: "biochemistry",
    topicId: "bc-biomol",
    subtopicId: "bc-biomol-carb",
    statement: "A glycosidic bond forms between two monosaccharides through a dehydration (condensation) reaction.",
    answer: true,
    explanation:
      "True. Linking monosaccharides releases a water molecule (dehydration synthesis). Breaking the bond requires hydrolysis (adding water).",
    difficulty: 1,
  },
];
