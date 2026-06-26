import type { Question } from "@/lib/types";

// Organic Chemistry — batch 2. Stereochemistry, functional groups, mechanisms,
// and lab/spectroscopy reasoning.
export const organicChemistryQuestions2: Question[] = [
  {
    id: "oc-q13",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "Diastereomers can have different physical properties such as boiling point and solubility.",
    answer: true,
    explanation:
      "True. Unlike enantiomers, diastereomers are not mirror images and differ in physical properties, so they can be separated by ordinary techniques like distillation or chromatography.",
    difficulty: 2,
  },
  {
    id: "oc-q14",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "A racemic mixture contains equal amounts of two enantiomers and is optically inactive.",
    answer: true,
    explanation:
      "True. Equal amounts of each enantiomer rotate plane-polarized light in opposite directions by equal magnitudes, so the net rotation is zero (optically inactive).",
    difficulty: 2,
  },
  {
    id: "oc-q15",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "Constitutional (structural) isomers have the same molecular formula but different connectivity of atoms.",
    answer: true,
    explanation:
      "True. Constitutional isomers share a molecular formula but differ in how atoms are connected (e.g., butane vs isobutane), unlike stereoisomers, which differ only in spatial arrangement.",
    difficulty: 1,
  },
  {
    id: "oc-q16",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "A hemiacetal forms when an alcohol adds to an aldehyde, and a full acetal forms with a second alcohol equivalent.",
    answer: true,
    explanation:
      "True. One alcohol adds to the carbonyl to give a hemiacetal; under acid with a second alcohol (and loss of water) it becomes an acetal — a common carbohydrate chemistry motif.",
    difficulty: 3,
  },
  {
    id: "oc-q17",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "Carboxylic acids are more acidic than alcohols because the carboxylate anion is resonance-stabilized.",
    answer: true,
    explanation:
      "True. The conjugate base of a carboxylic acid spreads its negative charge over two oxygens by resonance, stabilizing it and making the acid far stronger than an alcohol.",
    difficulty: 2,
  },
  {
    id: "oc-q18",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "An SN1 reaction at a stereocenter typically gives a racemic mixture of products.",
    answer: true,
    explanation:
      "True. The planar carbocation intermediate can be attacked from either face with roughly equal probability, producing both enantiomers — racemization.",
    difficulty: 2,
  },
  {
    id: "oc-q19",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "E2 elimination requires the leaving group and the beta-hydrogen to be anti-periplanar.",
    answer: true,
    explanation:
      "True. E2 is concerted and needs the C–H and C–LG bonds anti-periplanar (180°) so the developing π bond's orbitals align, which also controls the alkene stereochemistry.",
    difficulty: 3,
  },
  {
    id: "oc-q20",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "A strong, bulky base such as tert-butoxide favors the less substituted (Hofmann) alkene in elimination.",
    answer: true,
    explanation:
      "True. Bulky bases are sterically blocked from the more hindered position, so they remove the more accessible proton, giving the less substituted Hofmann product instead of Zaitsev.",
    difficulty: 3,
  },
  {
    id: "oc-q21",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "Reduction of a ketone with NaBH₄ yields a primary alcohol.",
    answer: false,
    explanation:
      "Reducing a KETONE gives a SECONDARY alcohol. Reducing an ALDEHYDE gives a primary alcohol. NaBH₄ is a mild hydride reducing agent for aldehydes and ketones.",
    difficulty: 2,
  },
  {
    id: "oc-q22",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-spectroscopy",
    statement: "A broad IR absorption from about 2500–3300 cm⁻¹ is characteristic of a carboxylic acid O–H.",
    answer: true,
    explanation:
      "True. Carboxylic acids show a very broad O–H stretch (~2500–3300 cm⁻¹) overlapping the C–H region, alongside the strong C=O peak near 1710 cm⁻¹.",
    difficulty: 2,
  },
  {
    id: "oc-q23",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-spectroscopy",
    statement: "In ¹H NMR, the area under a peak (integration) is proportional to the number of protons giving that signal.",
    answer: true,
    explanation:
      "True. Integration reflects relative proton counts, while chemical shift reflects electronic environment and splitting (n+1) reflects neighboring protons.",
    difficulty: 1,
  },
  {
    id: "oc-q24",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-spectroscopy",
    statement: "Protons attached to electronegative atoms or near electron-withdrawing groups appear downfield (higher ppm).",
    answer: true,
    explanation:
      "True. Electron-withdrawing groups deshield nearby protons, shifting them downfield (higher chemical shift). Shielded protons (e.g., alkyl) appear upfield.",
    difficulty: 2,
  },
  {
    id: "oc-q25",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-separation",
    statement: "In an acid–base extraction, a carboxylic acid can be moved into the aqueous layer by adding NaOH.",
    answer: true,
    explanation:
      "True. NaOH deprotonates the carboxylic acid to its charged carboxylate salt, which is water-soluble and partitions into the aqueous layer — a standard separation trick.",
    difficulty: 2,
  },
  {
    id: "oc-q26",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-separation",
    statement: "In gas chromatography, compounds with lower boiling points generally elute later.",
    answer: false,
    explanation:
      "Lower-boiling (more volatile) compounds spend more time in the gas phase and elute EARLIER. Higher-boiling compounds interact more with the column and elute later.",
    difficulty: 2,
  },
  {
    id: "oc-q27",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "Cis and trans alkene isomers are a type of diastereomer.",
    answer: true,
    explanation:
      "True. Cis/trans (E/Z) isomers are stereoisomers that are not mirror images, so they are diastereomers and have different physical properties.",
    difficulty: 2,
  },
  {
    id: "oc-q28",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "A polar protic solvent stabilizes carbocations and therefore favors SN1 reactions.",
    answer: true,
    explanation:
      "True. Polar protic solvents (water, alcohols) solvate and stabilize the carbocation and leaving group, favoring the ionizing SN1/E1 pathways.",
    difficulty: 2,
  },
  {
    id: "oc-q29",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "Esters can be hydrolyzed under basic conditions in a reaction called saponification.",
    answer: true,
    explanation:
      "True. Base-promoted ester hydrolysis (saponification) yields a carboxylate salt and an alcohol — the reaction used to make soap from fats.",
    difficulty: 2,
  },
  {
    id: "oc-q30",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "Two enantiomers always have identical melting points and boiling points.",
    answer: true,
    explanation:
      "True. Enantiomers have identical physical properties in an achiral environment, including melting and boiling points; they differ only in the direction of optical rotation and in chiral environments.",
    difficulty: 2,
  },
];
