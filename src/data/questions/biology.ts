import type { Question } from "@/lib/types";

export const biologyQuestions: Question[] = [
  {
    id: "bio-q1",
    subject: "biology",
    topicId: "bio-cell",
    subtopicId: "bio-cell-membrane",
    statement: "Facilitated diffusion requires the cell to expend ATP.",
    answer: false,
    explanation:
      "Facilitated diffusion moves substances DOWN their concentration gradient through channel or carrier proteins — it is passive and uses no ATP. Active transport is what requires energy.",
    difficulty: 1,
  },
  {
    id: "bio-q2",
    subject: "biology",
    topicId: "bio-cell",
    subtopicId: "bio-cell-membrane",
    statement: "The Na⁺/K⁺-ATPase pumps 3 Na⁺ out of the cell for every 2 K⁺ it brings in.",
    answer: true,
    explanation:
      "Correct. The pump exports 3 Na⁺ and imports 2 K⁺ per ATP hydrolyzed, making it electrogenic and helping maintain the resting membrane potential.",
    difficulty: 1,
  },
  {
    id: "bio-q3",
    subject: "biology",
    topicId: "bio-cell",
    subtopicId: "bio-cell-membrane",
    statement: "A cell placed in a hypertonic solution will swell as water moves in.",
    answer: false,
    explanation:
      "In a hypertonic solution the surroundings have higher solute concentration, so water leaves the cell and it SHRINKS (crenates). Swelling happens in a hypotonic solution.",
    difficulty: 1,
  },
  {
    id: "bio-q4",
    subject: "biology",
    topicId: "bio-cell",
    subtopicId: "bio-cell-organelles",
    statement: "Rough endoplasmic reticulum is the primary site of lipid synthesis.",
    answer: false,
    explanation:
      "The SMOOTH ER handles lipid synthesis, detoxification, and Ca²⁺ storage. The rough ER, studded with ribosomes, synthesizes secreted and membrane-bound proteins.",
    difficulty: 1,
  },
  {
    id: "bio-q5",
    subject: "biology",
    topicId: "bio-cell",
    subtopicId: "bio-cell-organelles",
    statement: "Mitochondria contain their own DNA and are inherited maternally.",
    answer: true,
    explanation:
      "True. Mitochondria have a small circular genome and are passed down through the egg (maternal inheritance), consistent with their proposed endosymbiotic origin.",
    difficulty: 1,
  },
  {
    id: "bio-q6",
    subject: "biology",
    topicId: "bio-cell",
    subtopicId: "bio-cell-cytoskeleton",
    statement: "Microtubules are the thickest cytoskeletal element and serve as tracks for motor proteins.",
    answer: true,
    explanation:
      "Correct. Microtubules (made of tubulin) are the largest-diameter filaments and form tracks for kinesin and dynein, as well as spindle fibers and the 9+2 core of cilia and flagella.",
    difficulty: 2,
  },
  {
    id: "bio-q7",
    subject: "biology",
    topicId: "bio-molecular",
    subtopicId: "bio-mol-replication",
    statement: "DNA polymerase synthesizes new strands in the 3'→5' direction.",
    answer: false,
    explanation:
      "DNA polymerase synthesizes only in the 5'→3' direction (reading the template 3'→5'). This is exactly why the lagging strand must be made discontinuously in Okazaki fragments.",
    difficulty: 1,
  },
  {
    id: "bio-q8",
    subject: "biology",
    topicId: "bio-molecular",
    subtopicId: "bio-mol-replication",
    statement: "DNA replication is semiconservative, so each daughter molecule has one parental strand.",
    answer: true,
    explanation:
      "True — demonstrated by the Meselson–Stahl experiment. Each new double helix retains one original (parental) strand and one newly synthesized strand.",
    difficulty: 1,
  },
  {
    id: "bio-q9",
    subject: "biology",
    topicId: "bio-molecular",
    subtopicId: "bio-mol-transcription",
    statement: "In eukaryotes, introns are retained in the mature mRNA while exons are spliced out.",
    answer: false,
    explanation:
      "It is the reverse: introns are spliced OUT and exons are retained ('exons are expressed'). The mature mRNA also gets a 5' cap and a poly-A tail before leaving the nucleus.",
    difficulty: 1,
  },
  {
    id: "bio-q10",
    subject: "biology",
    topicId: "bio-molecular",
    subtopicId: "bio-mol-transcription",
    statement: "AUG is the start codon and also codes for methionine.",
    answer: true,
    explanation:
      "Correct. AUG signals the start of translation and encodes methionine. The three stop codons (UAA, UAG, UGA) encode no amino acid.",
    difficulty: 1,
  },
  {
    id: "bio-q11",
    subject: "biology",
    topicId: "bio-molecular",
    subtopicId: "bio-mol-regulation",
    statement: "The lac operon is transcribed at high levels when both lactose and glucose are abundant.",
    answer: false,
    explanation:
      "High glucose lowers cAMP, so CAP cannot bind and transcription stays low even if lactose is present. The lac operon is maximally active when lactose is high AND glucose is low.",
    difficulty: 2,
  },
  {
    id: "bio-q12",
    subject: "biology",
    topicId: "bio-genetics",
    subtopicId: "bio-gen-mendel",
    statement: "A cross between two heterozygotes (Aa × Aa) yields a 3:1 phenotypic ratio for a simple dominant trait.",
    answer: true,
    explanation:
      "True. Aa × Aa gives genotypes 1 AA : 2 Aa : 1 aa, which is a 3:1 dominant-to-recessive phenotype ratio.",
    difficulty: 1,
  },
  {
    id: "bio-q13",
    subject: "biology",
    topicId: "bio-genetics",
    subtopicId: "bio-gen-mendel",
    statement: "X-linked recessive disorders are expressed more frequently in males than in females.",
    answer: true,
    explanation:
      "Correct. Males are hemizygous (one X), so a single recessive allele is expressed. Females need two copies to show the phenotype, making them more often unaffected carriers.",
    difficulty: 2,
  },
  {
    id: "bio-q14",
    subject: "biology",
    topicId: "bio-genetics",
    subtopicId: "bio-gen-meiosis",
    statement: "Homologous chromosomes separate during meiosis II.",
    answer: false,
    explanation:
      "Homologous chromosomes separate in meiosis I (the reductional division). Meiosis II separates sister chromatids, like mitosis.",
    difficulty: 2,
  },
  {
    id: "bio-q15",
    subject: "biology",
    topicId: "bio-genetics",
    subtopicId: "bio-gen-meiosis",
    statement: "Crossing over occurs during prophase I and increases genetic variation.",
    answer: true,
    explanation:
      "True. During prophase I, homologs pair (synapsis) and exchange segments at chiasmata, producing recombinant chromosomes and increasing variation.",
    difficulty: 1,
  },
  {
    id: "bio-q16",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-nervous",
    statement: "During the depolarization phase of an action potential, voltage-gated Na⁺ channels open and Na⁺ flows into the neuron.",
    answer: true,
    explanation:
      "Correct. Reaching threshold opens voltage-gated Na⁺ channels; Na⁺ rushes in, driving the membrane potential sharply positive.",
    difficulty: 1,
  },
  {
    id: "bio-q17",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-nervous",
    statement: "Myelination slows down the conduction of action potentials along an axon.",
    answer: false,
    explanation:
      "Myelin SPEEDS conduction via saltatory conduction — the impulse jumps between nodes of Ranvier, where the voltage-gated channels are concentrated.",
    difficulty: 1,
  },
  {
    id: "bio-q18",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-endocrine",
    statement: "Steroid hormones bind receptors on the cell surface because they cannot cross the plasma membrane.",
    answer: false,
    explanation:
      "Steroid hormones are lipid-soluble and cross the membrane to bind intracellular (cytoplasmic or nuclear) receptors, altering transcription. PEPTIDE hormones are the ones that bind surface receptors.",
    difficulty: 2,
  },
  {
    id: "bio-q19",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-circulatory",
    statement: "Increased CO₂ and decreased pH shift the oxygen–hemoglobin dissociation curve to the right.",
    answer: true,
    explanation:
      "True — this is the Bohr effect. Higher CO₂, lower pH, higher temperature, and more 2,3-BPG decrease hemoglobin's affinity for O₂, promoting unloading at active tissues.",
    difficulty: 2,
  },
  {
    id: "bio-q20",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-circulatory",
    statement: "The pulmonary artery carries oxygenated blood from the lungs to the heart.",
    answer: false,
    explanation:
      "The pulmonary ARTERY carries deoxygenated blood FROM the heart TO the lungs. The pulmonary VEIN returns oxygenated blood to the heart — the classic exception to 'veins carry deoxygenated blood.'",
    difficulty: 1,
  },
];
