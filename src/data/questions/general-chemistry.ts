import type { Question } from "@/lib/types";

export const generalChemistryQuestions: Question[] = [
  {
    id: "gc-q1",
    subject: "general-chemistry",
    topicId: "gc-atomic",
    subtopicId: "gc-atom-trends",
    statement: "Atomic radius increases as you move from left to right across a period.",
    answer: false,
    explanation:
      "Atomic radius DECREASES across a period. Added protons pull the electrons (in the same shell) closer, shrinking the atom. Radius increases down a group.",
    difficulty: 1,
  },
  {
    id: "gc-q2",
    subject: "general-chemistry",
    topicId: "gc-atomic",
    subtopicId: "gc-atom-trends",
    statement: "Electronegativity generally increases moving up and to the right on the periodic table.",
    answer: true,
    explanation:
      "True. Fluorine (top-right, excluding noble gases) is the most electronegative element. Ionization energy and electron affinity follow the same general direction.",
    difficulty: 1,
  },
  {
    id: "gc-q3",
    subject: "general-chemistry",
    topicId: "gc-atomic",
    subtopicId: "gc-atom-quantum",
    statement: "Hund's rule states that electrons pair up in an orbital before occupying empty degenerate orbitals.",
    answer: false,
    explanation:
      "Hund's rule is the opposite: electrons singly occupy each degenerate orbital (with parallel spins) BEFORE pairing, minimizing electron–electron repulsion.",
    difficulty: 2,
  },
  {
    id: "gc-q4",
    subject: "general-chemistry",
    topicId: "gc-bonding",
    subtopicId: "gc-bond-imf",
    statement: "Hydrogen bonding can occur only when hydrogen is bonded directly to nitrogen, oxygen, or fluorine.",
    answer: true,
    explanation:
      "True. Hydrogen bonds form when H is attached to the small, highly electronegative atoms N, O, or F — accounting for water's unusually high boiling point.",
    difficulty: 1,
  },
  {
    id: "gc-q5",
    subject: "general-chemistry",
    topicId: "gc-bonding",
    subtopicId: "gc-bond-imf",
    statement: "London dispersion forces are the strongest type of intermolecular force.",
    answer: false,
    explanation:
      "London dispersion forces are the WEAKEST. The general order is London < dipole–dipole < hydrogen bonding < ion–dipole.",
    difficulty: 1,
  },
  {
    id: "gc-q6",
    subject: "general-chemistry",
    topicId: "gc-thermo",
    subtopicId: "gc-thermo-gibbs",
    statement: "A reaction with negative ΔH and positive ΔS is spontaneous at all temperatures.",
    answer: true,
    explanation:
      "True. With ΔH < 0 and ΔS > 0, ΔG = ΔH − TΔS is negative at every temperature, so the reaction is always spontaneous.",
    difficulty: 2,
  },
  {
    id: "gc-q7",
    subject: "general-chemistry",
    topicId: "gc-thermo",
    subtopicId: "gc-thermo-gibbs",
    statement: "If the equilibrium constant K is greater than 1, the standard free energy change ΔG° is positive.",
    answer: false,
    explanation:
      "ΔG° = −RT ln K. If K > 1, ln K is positive, so ΔG° is NEGATIVE (product-favored). A positive ΔG° corresponds to K < 1.",
    difficulty: 2,
  },
  {
    id: "gc-q8",
    subject: "general-chemistry",
    topicId: "gc-kinetics-eq",
    subtopicId: "gc-kin-rate",
    statement: "The order of a reaction can always be determined directly from its balanced equation's coefficients.",
    answer: false,
    explanation:
      "Reaction order must be determined experimentally (e.g., from initial-rate data). Only for an elementary step do the coefficients give the order directly.",
    difficulty: 2,
  },
  {
    id: "gc-q9",
    subject: "general-chemistry",
    topicId: "gc-kinetics-eq",
    subtopicId: "gc-kin-rate",
    statement: "A catalyst increases the rate of a reaction without changing its equilibrium constant.",
    answer: true,
    explanation:
      "True. A catalyst lowers activation energy for both forward and reverse reactions equally, so it speeds attainment of equilibrium without shifting its position (K is unchanged).",
    difficulty: 1,
  },
  {
    id: "gc-q10",
    subject: "general-chemistry",
    topicId: "gc-kinetics-eq",
    subtopicId: "gc-eq-lechatelier",
    statement: "Increasing the pressure on a gaseous equilibrium shifts it toward the side with fewer moles of gas.",
    answer: true,
    explanation:
      "True. Per Le Châtelier's principle, raising pressure (by decreasing volume) favors the side with fewer gas molecules to relieve the stress.",
    difficulty: 1,
  },
  {
    id: "gc-q11",
    subject: "general-chemistry",
    topicId: "gc-kinetics-eq",
    subtopicId: "gc-eq-lechatelier",
    statement: "Adding a catalyst shifts the equilibrium toward the products.",
    answer: false,
    explanation:
      "A catalyst does not shift equilibrium at all — it speeds up forward and reverse reactions equally, so the system reaches the same equilibrium faster.",
    difficulty: 1,
  },
  {
    id: "gc-q12",
    subject: "general-chemistry",
    topicId: "gc-acidbase",
    subtopicId: "gc-ab-ph",
    statement: "At the half-equivalence point of a weak acid titration, pH equals the pKa.",
    answer: true,
    explanation:
      "True. At half-equivalence, [HA] = [A⁻], so the Henderson–Hasselbalch equation gives pH = pKa. This is also the point of maximum buffering capacity.",
    difficulty: 2,
  },
  {
    id: "gc-q13",
    subject: "general-chemistry",
    topicId: "gc-acidbase",
    subtopicId: "gc-ab-ph",
    statement: "A buffer is most effective when the desired pH is more than 2 units away from the pKa.",
    answer: false,
    explanation:
      "A buffer works best within about ±1 pH unit of its pKa, where the weak acid and conjugate base concentrations are comparable. Far from pKa, capacity drops sharply.",
    difficulty: 2,
  },
  {
    id: "gc-q14",
    subject: "general-chemistry",
    topicId: "gc-electro",
    subtopicId: "gc-electro-cells",
    statement: "In any electrochemical cell, oxidation occurs at the anode and reduction at the cathode.",
    answer: true,
    explanation:
      "True for both galvanic and electrolytic cells ('An Ox, Red Cat'). What changes is the sign: the anode is negative in a galvanic cell but positive in an electrolytic one.",
    difficulty: 1,
  },
  {
    id: "gc-q15",
    subject: "general-chemistry",
    topicId: "gc-electro",
    subtopicId: "gc-electro-cells",
    statement: "A galvanic (voltaic) cell has a positive cell potential and a negative ΔG.",
    answer: true,
    explanation:
      "True. Galvanic cells run spontaneously: E°cell > 0 and ΔG = −nFE°cell < 0. Electrolytic cells are the nonspontaneous opposite.",
    difficulty: 2,
  },
];
