import type { Question } from "@/lib/types";

// Organic Chemistry — batch 3. Adds nomenclature/priority, plus more
// stereochemistry, mechanisms, and spectroscopy.
export const organicChemistryQuestions3: Question[] = [
  {
    id: "oc-q31",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-nomenclature",
    statement: "When both an alcohol and a carboxylic acid are present, the carboxylic acid is the higher-priority group for naming.",
    answer: true,
    explanation:
      "True. Carboxylic acids outrank alcohols in IUPAC priority, so the acid becomes the suffix (-oic acid) and the alcohol is named as a hydroxy substituent.",
    difficulty: 2,
  },
  {
    id: "oc-q32",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-nomenclature",
    statement: "The suffix '-one' in an IUPAC name indicates a ketone.",
    answer: true,
    explanation:
      "True. '-one' = ketone, '-al' = aldehyde, '-ol' = alcohol, '-oic acid' = carboxylic acid. These suffixes mark the principal functional group.",
    difficulty: 1,
  },
  {
    id: "oc-q33",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-nomenclature",
    statement: "A carbon chain is numbered to give the highest-priority functional group the highest possible locant.",
    answer: false,
    explanation:
      "It's the opposite: number to give the principal group the LOWEST possible locant, so the functional group is identified by the smallest number.",
    difficulty: 2,
  },
  {
    id: "oc-q34",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "A better leaving group increases the rate of both SN1 and SN2 reactions.",
    answer: true,
    explanation:
      "True. A stable (weak-base) leaving group like a halide or tosylate departs more easily, speeding substitution by either mechanism.",
    difficulty: 2,
  },
  {
    id: "oc-q35",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "Tertiary substrates strongly favor SN2 reactions because of their stable carbocations.",
    answer: false,
    explanation:
      "Tertiary substrates are too sterically hindered for SN2 (backside attack is blocked). Their stable carbocations favor SN1/E1 instead.",
    difficulty: 2,
  },
  {
    id: "oc-q36",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "A Grignard reagent acts as a strong nucleophile that adds to carbonyl carbons.",
    answer: true,
    explanation:
      "True. Grignard reagents (R–MgX) are carbon nucleophiles that attack the electrophilic carbonyl carbon, forming new C–C bonds (and alcohols after workup).",
    difficulty: 2,
  },
  {
    id: "oc-q37",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "Oxidation of a primary alcohol can yield an aldehyde and then a carboxylic acid.",
    answer: true,
    explanation:
      "True. Primary alcohols oxidize to aldehydes and further to carboxylic acids (with strong oxidants). Secondary alcohols oxidize to ketones; tertiary alcohols resist oxidation.",
    difficulty: 2,
  },
  {
    id: "oc-q38",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "An optically active compound rotates the plane of polarized light.",
    answer: true,
    explanation:
      "True. Chiral (optically active) substances rotate plane-polarized light; the direction (+/dextrorotatory or −/levorotatory) is measured with a polarimeter.",
    difficulty: 1,
  },
  {
    id: "oc-q39",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-stereo-chirality",
    statement: "Epimers are diastereomers that differ in configuration at only one stereocenter.",
    answer: true,
    explanation:
      "True. Epimers (e.g., glucose vs galactose) are a special case of diastereomers differing at exactly one of several stereocenters.",
    difficulty: 3,
  },
  {
    id: "oc-q40",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-spectroscopy",
    statement: "A singlet in ¹H NMR indicates a proton with no neighboring (nonequivalent) protons.",
    answer: true,
    explanation:
      "True. By the n+1 rule, zero neighbors give n+1 = 1 peak (a singlet), meaning the proton has no adjacent nonequivalent hydrogens.",
    difficulty: 2,
  },
  {
    id: "oc-q41",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-spectroscopy",
    statement: "Mass spectrometry determines a compound's molecular mass and fragmentation pattern.",
    answer: true,
    explanation:
      "True. Mass spec ionizes and fragments molecules; the molecular ion peak gives the molecular mass and the fragments help deduce structure.",
    difficulty: 2,
  },
  {
    id: "oc-q42",
    subject: "organic-chemistry",
    topicId: "oc-lab",
    subtopicId: "oc-lab-separation",
    statement: "In column chromatography with a polar stationary phase, nonpolar compounds elute first.",
    answer: true,
    explanation:
      "True. Nonpolar compounds interact least with the polar stationary phase, so they move fastest and elute first; polar compounds are retained longer.",
    difficulty: 2,
  },
  {
    id: "oc-q43",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-carbonyl",
    statement: "Amino acids can form amide (peptide) bonds between a carboxyl group and an amino group.",
    answer: true,
    explanation:
      "True. The carboxyl of one amino acid condenses with the amino group of another to form a peptide (amide) bond, releasing water.",
    difficulty: 1,
  },
  {
    id: "oc-q44",
    subject: "organic-chemistry",
    topicId: "oc-fundamentals",
    subtopicId: "oc-nomenclature",
    statement: "The root 'prop-' refers to a chain of three carbons.",
    answer: true,
    explanation:
      "True. The roots run meth(1), eth(2), prop(3), but(4), pent(5), hex(6) — counting the carbons in the principal chain.",
    difficulty: 1,
  },
  {
    id: "oc-q45",
    subject: "organic-chemistry",
    topicId: "oc-groups",
    subtopicId: "oc-grp-substitution",
    statement: "Increasing the concentration of nucleophile speeds up an SN2 reaction but not an SN1 reaction.",
    answer: true,
    explanation:
      "True. SN2 rate depends on both substrate and nucleophile (bimolecular). SN1 rate depends only on substrate (the slow step is carbocation formation), so nucleophile concentration doesn't affect it.",
    difficulty: 3,
  },
];
