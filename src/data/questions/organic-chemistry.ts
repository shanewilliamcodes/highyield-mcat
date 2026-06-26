import type { Question } from "@/lib/types";

export const organicChemistryQuestions: Question[] = [
  {
    id: "oc-q1",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "Enantiomers are stereoisomers that are non-superimposable mirror images of each other.",
    answer: true,
    explanation:
      "True. Enantiomers are mirror-image stereoisomers. They share identical physical properties except for the direction they rotate plane-polarized light and their behavior toward other chiral molecules.",
    difficulty: 1,
  },
  {
    id: "oc-q2",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "A meso compound contains stereocenters but is achiral overall.",
    answer: true,
    explanation:
      "True. A meso compound has stereocenters but possesses an internal plane of symmetry, making it superimposable on its mirror image — so it is achiral and optically inactive.",
    difficulty: 2,
  },
  {
    id: "oc-q3",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "A molecule with n stereocenters can have at most n possible stereoisomers.",
    answer: false,
    explanation:
      "The maximum number of stereoisomers is 2ⁿ, not n. For example, 2 stereocenters allow up to 4 stereoisomers (fewer if meso forms exist).",
    difficulty: 2,
  },
  {
    id: "oc-q4",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "Aldehydes are generally more reactive toward nucleophilic addition than ketones.",
    answer: true,
    explanation:
      "True. Aldehydes have less steric hindrance and less electron donation to the carbonyl carbon than ketones, leaving the carbonyl carbon more electrophilic and more reactive.",
    difficulty: 2,
  },
  {
    id: "oc-q5",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "Amides are more reactive toward nucleophilic acyl substitution than acyl chlorides.",
    answer: false,
    explanation:
      "The reactivity order is acyl chloride > anhydride > ester ≈ acid > amide. Amides are the LEAST reactive because the nitrogen donates electron density and the amide is a poor leaving group.",
    difficulty: 2,
  },
  {
    id: "oc-q6",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "An SN2 reaction proceeds through a carbocation intermediate.",
    answer: false,
    explanation:
      "SN2 is concerted (one step) with backside attack and inversion of configuration — no intermediate. It is SN1 that proceeds through a carbocation intermediate.",
    difficulty: 1,
  },
  {
    id: "oc-q7",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "SN2 reactions are favored by primary substrates and strong nucleophiles in aprotic solvents.",
    answer: true,
    explanation:
      "True. Less steric hindrance (primary), a strong nucleophile, and a polar aprotic solvent (which leaves the nucleophile 'naked' and reactive) all favor the SN2 pathway.",
    difficulty: 2,
  },
  {
    id: "oc-q8",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "Tertiary carbocations are more stable than primary carbocations.",
    answer: true,
    explanation:
      "True. Alkyl groups donate electron density (hyperconjugation and induction), stabilizing the positive charge. Stability order: 3° > 2° > 1° > methyl.",
    difficulty: 1,
  },
  {
    id: "oc-q9",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-spectroscopy",
    statement: "A strong IR absorption near 1700 cm⁻¹ is characteristic of a carbonyl (C=O) group.",
    answer: true,
    explanation:
      "True. The C=O stretch produces a strong, sharp absorption around 1700 cm⁻¹ — one of the most diagnostic peaks in IR spectroscopy.",
    difficulty: 1,
  },
  {
    id: "oc-q10",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-spectroscopy",
    statement: "By the n+1 rule in ¹H NMR, a proton with two equivalent neighboring protons appears as a triplet.",
    answer: true,
    explanation:
      "True. With n = 2 neighbors, the signal splits into n+1 = 3 peaks (a triplet). The rule reflects coupling to nonequivalent adjacent protons.",
    difficulty: 2,
  },
  {
    id: "oc-q11",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-separation",
    statement: "In normal-phase TLC, more polar compounds travel farther and have a higher Rf.",
    answer: false,
    explanation:
      "In normal-phase TLC the stationary phase is polar, so polar compounds stick and move LESS, giving a LOWER Rf. Nonpolar compounds travel farther.",
    difficulty: 2,
  },
  {
    id: "oc-q12",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-separation",
    statement: "Distillation separates compounds based on differences in their boiling points.",
    answer: true,
    explanation:
      "True. Distillation exploits boiling-point differences: the more volatile (lower-boiling) component vaporizes first and is collected separately.",
    difficulty: 1,
  },
];
