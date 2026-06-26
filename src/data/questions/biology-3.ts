import type { Question } from "@/lib/types";

// Biology — batch 3. Adds evolution & population genetics, plus more cell,
// molecular, and physiology coverage.
export const biologyQuestions3: Question[] = [
  {
    id: "bio-q51",
    subject: "biology",
    topicId: "bio-evolution",
    subtopicId: "bio-evo-selection",
    statement: "In evolutionary biology, fitness refers to an organism's reproductive success.",
    answer: true,
    explanation:
      "True. Fitness measures how many viable, fertile offspring an organism contributes to the next generation — not its strength or lifespan.",
    difficulty: 1,
  },
  {
    id: "bio-q52",
    subject: "biology",
    topicId: "bio-evolution",
    subtopicId: "bio-evo-selection",
    statement: "Genetic drift has a larger effect on small populations than on large ones.",
    answer: true,
    explanation:
      "True. Random changes in allele frequency (drift) have a proportionally bigger impact in small populations, where chance events can rapidly fix or eliminate alleles.",
    difficulty: 2,
  },
  {
    id: "bio-q53",
    subject: "biology",
    topicId: "bio-evolution",
    subtopicId: "bio-evo-selection",
    statement: "Stabilizing selection favors extreme phenotypes over the average.",
    answer: false,
    explanation:
      "Stabilizing selection favors the AVERAGE phenotype and selects against extremes (e.g., average human birth weight). Disruptive selection is what favors the extremes.",
    difficulty: 2,
  },
  {
    id: "bio-q54",
    subject: "biology",
    topicId: "bio-evolution",
    subtopicId: "bio-evo-selection",
    statement: "Convergent evolution produces similar traits in unrelated species facing similar environments.",
    answer: true,
    explanation:
      "True. Convergent evolution yields analogous structures (e.g., wings of birds and bats) in distantly related species due to similar selective pressures.",
    difficulty: 2,
  },
  {
    id: "bio-q55",
    subject: "biology",
    topicId: "bio-evolution",
    subtopicId: "bio-evo-hardyweinberg",
    statement: "In Hardy-Weinberg equilibrium, the frequency of homozygous recessive individuals equals q².",
    answer: true,
    explanation:
      "True. With allele frequencies p + q = 1, genotype frequencies are p² + 2pq + q² = 1, so the homozygous recessive genotype frequency is q².",
    difficulty: 2,
  },
  {
    id: "bio-q56",
    subject: "biology",
    topicId: "bio-evolution",
    subtopicId: "bio-evo-hardyweinberg",
    statement: "A population experiencing significant natural selection is in Hardy-Weinberg equilibrium.",
    answer: false,
    explanation:
      "Natural selection violates a Hardy-Weinberg condition, so the population is NOT in equilibrium and its allele frequencies will change (it is evolving).",
    difficulty: 2,
  },
  {
    id: "bio-q57",
    subject: "biology",
    topicId: "bio-evolution",
    subtopicId: "bio-evo-hardyweinberg",
    statement: "The term 2pq represents the frequency of heterozygous individuals in a population at equilibrium.",
    answer: true,
    explanation:
      "True. In p² + 2pq + q², the 2pq term gives the proportion of heterozygotes (carriers) — useful for estimating carrier frequency of recessive diseases.",
    difficulty: 2,
  },
  {
    id: "bio-q58",
    subject: "biology",
    topicId: "bio-cell",
    subtopicId: "bio-cell-membrane",
    statement: "In a hypotonic environment, an animal cell may swell and burst (lyse).",
    answer: true,
    explanation:
      "True. A hypotonic solution has lower solute concentration outside, so water flows in; without a cell wall, an animal cell can swell and lyse.",
    difficulty: 1,
  },
  {
    id: "bio-q59",
    subject: "biology",
    topicId: "bio-cell",
    subtopicId: "bio-cell-organelles",
    statement: "Ribosomes are membrane-bound organelles found only in eukaryotes.",
    answer: false,
    explanation:
      "Ribosomes are NOT membrane-bound and are found in BOTH prokaryotes and eukaryotes. They are made of rRNA and protein and carry out translation.",
    difficulty: 1,
  },
  {
    id: "bio-q60",
    subject: "biology",
    topicId: "bio-molecular",
    subtopicId: "bio-mol-regulation",
    statement: "A silent mutation changes the DNA sequence but not the resulting amino acid.",
    answer: true,
    explanation:
      "True. Because the genetic code is degenerate, a base change can yield a codon for the same amino acid — a silent mutation with no effect on the protein.",
    difficulty: 1,
  },
  {
    id: "bio-q61",
    subject: "biology",
    topicId: "bio-genetics",
    subtopicId: "bio-gen-mendel",
    statement: "A test cross is used to determine whether an organism with a dominant phenotype is homozygous or heterozygous.",
    answer: true,
    explanation:
      "True. Crossing the unknown with a homozygous recessive reveals the genotype: any recessive offspring means the dominant parent was heterozygous.",
    difficulty: 2,
  },
  {
    id: "bio-q62",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-nervous",
    statement: "The myelin sheath in the central nervous system is produced by Schwann cells.",
    answer: false,
    explanation:
      "In the CNS, OLIGODENDROCYTES myelinate axons. SCHWANN CELLS myelinate axons in the peripheral nervous system.",
    difficulty: 2,
  },
  {
    id: "bio-q63",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-endocrine",
    statement: "The thyroid hormones T3 and T4 increase the body's basal metabolic rate.",
    answer: true,
    explanation:
      "True. Thyroid hormones raise basal metabolic rate and heat production. They are regulated by TSH from the anterior pituitary via negative feedback.",
    difficulty: 2,
  },
  {
    id: "bio-q64",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-circulatory",
    statement: "Capillaries are the site of gas and nutrient exchange because of their thin walls.",
    answer: true,
    explanation:
      "True. Capillaries have walls one cell thick, allowing efficient diffusion of gases, nutrients, and wastes between blood and tissues.",
    difficulty: 1,
  },
  {
    id: "bio-q65",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-renal",
    statement: "Glucose normally appears in large amounts in the urine of a healthy person.",
    answer: false,
    explanation:
      "Healthy kidneys reabsorb essentially all filtered glucose in the proximal tubule, so urine is normally glucose-free. Glucose in urine (glucosuria) suggests the threshold was exceeded, as in diabetes.",
    difficulty: 2,
  },
  {
    id: "bio-q66",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-immune",
    statement: "Antibodies are produced by plasma cells, which are differentiated B cells.",
    answer: true,
    explanation:
      "True. Activated B cells differentiate into plasma cells that secrete large amounts of antigen-specific antibodies (immunoglobulins).",
    difficulty: 1,
  },
  {
    id: "bio-q67",
    subject: "biology",
    topicId: "bio-physiology",
    subtopicId: "bio-phys-digestive",
    statement: "Carbohydrate digestion begins in the stomach with the enzyme amylase.",
    answer: false,
    explanation:
      "Carbohydrate digestion begins in the MOUTH with salivary amylase. The stomach's acidic environment inactivates amylase; carb digestion resumes in the small intestine with pancreatic amylase.",
    difficulty: 2,
  },
  {
    id: "bio-q68",
    subject: "biology",
    topicId: "bio-molecular",
    subtopicId: "bio-mol-transcription",
    statement: "Alternative splicing allows a single gene to code for multiple different proteins.",
    answer: true,
    explanation:
      "True. By including or excluding different exons, alternative splicing lets one gene produce several protein isoforms — a major source of proteomic diversity.",
    difficulty: 2,
  },
  {
    id: "bio-q69",
    subject: "biology",
    topicId: "bio-genetics",
    subtopicId: "bio-gen-meiosis",
    statement: "Genes located close together on the same chromosome are more likely to be inherited together.",
    answer: true,
    explanation:
      "True. Linked genes are less likely to be separated by crossing over the closer they sit; recombination frequency increases with distance (the basis of genetic mapping).",
    difficulty: 2,
  },
  {
    id: "bio-q70",
    subject: "biology",
    topicId: "bio-evolution",
    subtopicId: "bio-evo-selection",
    statement: "Gene flow tends to increase genetic differences between two populations.",
    answer: false,
    explanation:
      "Gene flow (migration and interbreeding) tends to make populations MORE genetically similar by mixing alleles. Isolation, not gene flow, increases divergence.",
    difficulty: 2,
  },
];
