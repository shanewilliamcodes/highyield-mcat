import type { Question } from "@/lib/types";

// Biochemistry — batch 2. Amino acids, protein structure, enzyme kinetics &
// regulation, and all of metabolism (incl. glycogen, gluconeogenesis, lipids).
export const biochemistryQuestions2: Question[] = [
  {
    id: "bc-q16",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure",
    statement: "Proline introduces kinks into a polypeptide because its side chain forms a rigid ring with the backbone nitrogen.",
    answer: true,
    explanation:
      "True. Proline's cyclic side chain locks the backbone, disrupting regular secondary structure (it's a known α-helix breaker) and creating kinks.",
    difficulty: 2,
  },
  {
    id: "bc-q17",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure",
    statement: "Cysteine residues can form disulfide bonds that stabilize tertiary and quaternary protein structure.",
    answer: true,
    explanation:
      "True. Two cysteine thiol (–SH) groups oxidize to form a covalent disulfide bond, an important stabilizer of folded protein structure, especially in extracellular proteins.",
    difficulty: 1,
  },
  {
    id: "bc-q18",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure",
    statement: "Hydrophobic amino acid residues tend to cluster on the exterior surface of a water-soluble globular protein.",
    answer: false,
    explanation:
      "Hydrophobic residues bury in the protein's INTERIOR core (away from water); polar and charged residues face the aqueous exterior. This drives folding of soluble proteins.",
    difficulty: 2,
  },
  {
    id: "bc-q19",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-titration",
    statement: "At a pH below its pI, an amino acid carries a net positive charge.",
    answer: true,
    explanation:
      "True. Below the pI there are more protons around, so acidic groups stay protonated and the molecule is net positive. Above the pI it is net negative.",
    difficulty: 2,
  },
  {
    id: "bc-q20",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure-levels",
    statement: "Hemoglobin's four-subunit structure is an example of quaternary protein structure.",
    answer: true,
    explanation:
      "True. Quaternary structure refers to the assembly of multiple polypeptide subunits; hemoglobin's two α and two β chains are the classic example.",
    difficulty: 1,
  },
  {
    id: "bc-q21",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-kinetics",
    statement: "An uncompetitive inhibitor decreases both Vmax and Km.",
    answer: true,
    explanation:
      "True. An uncompetitive inhibitor binds only the enzyme–substrate complex, lowering Vmax and Km together (their ratio stays roughly constant), so Lineweaver–Burk lines appear parallel.",
    difficulty: 3,
  },
  {
    id: "bc-q22",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-kinetics",
    statement: "On a Lineweaver–Burk plot, the y-intercept equals 1/Vmax.",
    answer: true,
    explanation:
      "True. The double-reciprocal plot has y-intercept = 1/Vmax and x-intercept = −1/Km, which is why it's used to read off kinetic constants.",
    difficulty: 2,
  },
  {
    id: "bc-q23",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-kinetics",
    statement: "A cofactor that is an organic molecule is called a coenzyme.",
    answer: true,
    explanation:
      "True. Coenzymes are organic cofactors (often vitamin-derived, like NAD⁺ or coenzyme A). Inorganic cofactors are typically metal ions (e.g., Zn²⁺, Mg²⁺).",
    difficulty: 1,
  },
  {
    id: "bc-q24",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-regulation",
    statement: "Allosteric enzymes typically show a hyperbolic (Michaelis–Menten) curve rather than a sigmoidal one.",
    answer: false,
    explanation:
      "Allosteric enzymes usually show a SIGMOIDAL curve due to cooperativity between subunits. A hyperbolic curve is characteristic of simple Michaelis–Menten enzymes.",
    difficulty: 2,
  },
  {
    id: "bc-q25",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-regulation",
    statement: "Phosphorylation by a kinase always activates the target enzyme.",
    answer: false,
    explanation:
      "Phosphorylation can activate OR inhibit, depending on the enzyme. For example, it activates glycogen phosphorylase but inactivates glycogen synthase — reciprocal control.",
    difficulty: 2,
  },
  {
    id: "bc-q26",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycolysis",
    statement: "Under anaerobic conditions in humans, pyruvate is reduced to lactate to regenerate NAD⁺.",
    answer: true,
    explanation:
      "True. Lactate dehydrogenase converts pyruvate to lactate, oxidizing NADH back to NAD⁺ so glycolysis can continue producing ATP without oxygen.",
    difficulty: 2,
  },
  {
    id: "bc-q27",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycolysis",
    statement: "Hexokinase is inhibited by its own product, glucose-6-phosphate.",
    answer: true,
    explanation:
      "True. Glucose-6-phosphate feedback-inhibits hexokinase, preventing the cell from trapping more glucose than it can process. (Liver glucokinase is not inhibited this way.)",
    difficulty: 3,
  },
  {
    id: "bc-q28",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-krebs",
    statement: "Each turn of the citric acid cycle produces 3 NADH, 1 FADH₂, and 1 GTP.",
    answer: true,
    explanation:
      "True. Per acetyl-CoA, the cycle yields 3 NADH, 1 FADH₂, 1 GTP (or ATP), and releases 2 CO₂. Double these values per glucose (which makes two acetyl-CoA).",
    difficulty: 2,
  },
  {
    id: "bc-q29",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-etc",
    statement: "NADH delivers electrons to complex I, while FADH₂ delivers them to complex II.",
    answer: true,
    explanation:
      "True. NADH enters at complex I and FADH₂ at complex II. Because FADH₂ skips complex I's proton pumping, it yields slightly less ATP than NADH.",
    difficulty: 2,
  },
  {
    id: "bc-q30",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-etc",
    statement: "An uncoupler like 2,4-dinitrophenol increases ATP synthesis by strengthening the proton gradient.",
    answer: false,
    explanation:
      "Uncouplers DISSIPATE the proton gradient by letting H⁺ leak back across the membrane, so the energy is released as heat and ATP synthesis DROPS even as the electron transport chain races.",
    difficulty: 3,
  },
  {
    id: "bc-q31",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycogen",
    statement: "Glycogen is stored primarily in the liver and skeletal muscle.",
    answer: true,
    explanation:
      "True. Liver glycogen buffers blood glucose for the whole body; muscle glycogen fuels the muscle itself (muscle lacks glucose-6-phosphatase, so it can't export glucose).",
    difficulty: 1,
  },
  {
    id: "bc-q32",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycogen",
    statement: "Gluconeogenesis is simply glycolysis run in reverse using all the same enzymes.",
    answer: false,
    explanation:
      "Gluconeogenesis bypasses the three irreversible glycolytic steps with distinct enzymes (e.g., PEP carboxykinase, fructose-1,6-bisphosphatase, glucose-6-phosphatase). It is not a simple reversal.",
    difficulty: 2,
  },
  {
    id: "bc-q33",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycogen",
    statement: "Glucagon and epinephrine stimulate glycogen breakdown via a cAMP signaling cascade.",
    answer: true,
    explanation:
      "True. These hormones raise cAMP, activating protein kinase A, which activates glycogen phosphorylase (breakdown) and inhibits glycogen synthase — mobilizing glucose.",
    difficulty: 2,
  },
  {
    id: "bc-q34",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-lipid",
    statement: "Beta-oxidation of fatty acids occurs in the mitochondrial matrix and generates acetyl-CoA.",
    answer: true,
    explanation:
      "True. Beta-oxidation in the matrix cleaves two carbons at a time from fatty acyl-CoA, producing acetyl-CoA (which enters the Krebs cycle) plus NADH and FADH₂.",
    difficulty: 2,
  },
  {
    id: "bc-q35",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-lipid",
    statement: "Gram for gram, fatty acids store more energy than carbohydrates.",
    answer: true,
    explanation:
      "True. Fatty acids are highly reduced and store ~9 kcal/g versus ~4 kcal/g for carbohydrates, making fat the body's most energy-dense fuel.",
    difficulty: 1,
  },
  {
    id: "bc-q36",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-lipid",
    statement: "Ketone bodies are produced by the liver during prolonged fasting and can fuel the brain.",
    answer: true,
    explanation:
      "True. During prolonged fasting, the liver makes ketone bodies from acetyl-CoA; the brain adapts to use them, sparing glucose and reducing the need for muscle breakdown.",
    difficulty: 2,
  },
  {
    id: "bc-q37",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-lipid",
    statement: "Fatty acid synthesis occurs in the cytoplasm, the opposite compartment from beta-oxidation.",
    answer: true,
    explanation:
      "True. Synthesis is cytoplasmic (using malonyl-CoA and NADPH); breakdown (beta-oxidation) is mitochondrial. Separating them prevents a futile cycle.",
    difficulty: 3,
  },
  {
    id: "bc-q38",
    subject: "biochemistry",
    topicId: "bc-aa",
    subtopicId: "bc-aa-structure-levels",
    statement: "The peptide bond has partial double-bond character that restricts rotation and keeps it planar.",
    answer: true,
    explanation:
      "True. Resonance gives the peptide (amide) bond partial double-bond character, so it is planar and rigid; rotation occurs around the adjacent phi and psi bonds instead.",
    difficulty: 2,
  },
  {
    id: "bc-q39",
    subject: "biochemistry",
    topicId: "bc-enzymes",
    subtopicId: "bc-enz-kinetics",
    statement: "The induced-fit model proposes that the active site changes shape to better bind the substrate.",
    answer: true,
    explanation:
      "True. The induced-fit model (vs the older 'lock-and-key') says substrate binding induces a conformational change in the enzyme that optimizes catalysis.",
    difficulty: 1,
  },
  {
    id: "bc-q40",
    subject: "biochemistry",
    topicId: "bc-metabolism",
    subtopicId: "bc-met-glycolysis",
    statement: "Glycolysis can only occur in cells that contain mitochondria.",
    answer: false,
    explanation:
      "Glycolysis happens in the cytoplasm and needs no mitochondria or oxygen — which is why mature red blood cells (lacking mitochondria) rely on it entirely.",
    difficulty: 2,
  },
];
