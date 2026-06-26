import type { Question } from "@/lib/types";

// General Chemistry — batch 3. Adds gases, solutions/colligative properties,
// VSEPR, plus more thermo/kinetics/acid-base.
export const generalChemistryQuestions3: Question[] = [
  {
    id: "gc-q41",
    subject: "general-chemistry",
    topicId: "gc-gases",
    subtopicId: "gc-gas-ideal",
    statement: "At constant temperature, doubling the pressure on an ideal gas halves its volume.",
    answer: true,
    explanation:
      "True — Boyle's law. At constant T and n, P and V are inversely proportional (PV = constant), so doubling pressure halves volume.",
    difficulty: 1,
  },
  {
    id: "gc-q42",
    subject: "general-chemistry",
    topicId: "gc-gases",
    subtopicId: "gc-gas-ideal",
    statement: "One mole of any ideal gas occupies 22.4 liters at STP.",
    answer: true,
    explanation:
      "True. At standard temperature and pressure (0 °C, 1 atm), the molar volume of an ideal gas is 22.4 L — a useful conversion factor.",
    difficulty: 1,
  },
  {
    id: "gc-q43",
    subject: "general-chemistry",
    topicId: "gc-gases",
    subtopicId: "gc-gas-ideal",
    statement: "In the ideal gas law, temperature can be expressed in degrees Celsius.",
    answer: false,
    explanation:
      "Temperature in PV = nRT must be in KELVIN (absolute). Using Celsius would give wrong (even negative) results.",
    difficulty: 1,
  },
  {
    id: "gc-q44",
    subject: "general-chemistry",
    topicId: "gc-gases",
    subtopicId: "gc-gas-kmt",
    statement: "Real gases behave most ideally at high pressure and low temperature.",
    answer: false,
    explanation:
      "Real gases behave most ideally at LOW pressure and HIGH temperature, where molecular volume and intermolecular forces are negligible. They deviate most at high pressure and low temperature.",
    difficulty: 2,
  },
  {
    id: "gc-q45",
    subject: "general-chemistry",
    topicId: "gc-gases",
    subtopicId: "gc-gas-kmt",
    statement: "According to Graham's law, a gas with a lower molar mass effuses faster than a heavier gas.",
    answer: true,
    explanation:
      "True. Rate of effusion is inversely proportional to the square root of molar mass, so lighter gases (e.g., helium) escape faster than heavier ones.",
    difficulty: 2,
  },
  {
    id: "gc-q46",
    subject: "general-chemistry",
    topicId: "gc-gases",
    subtopicId: "gc-gas-kmt",
    statement: "Dalton's law states that the total pressure of a gas mixture equals the sum of the partial pressures.",
    answer: true,
    explanation:
      "True. Each gas exerts pressure independently, so P_total = P₁ + P₂ + … This underlies partial-pressure calculations using mole fractions.",
    difficulty: 1,
  },
  {
    id: "gc-q47",
    subject: "general-chemistry",
    topicId: "gc-solutions",
    subtopicId: "gc-sol-solubility",
    statement: "Adding a common ion to a saturated solution decreases the solubility of the salt.",
    answer: true,
    explanation:
      "True — the common-ion effect. Adding an ion already in the equilibrium shifts it toward the solid (Le Châtelier), reducing solubility.",
    difficulty: 2,
  },
  {
    id: "gc-q48",
    subject: "general-chemistry",
    topicId: "gc-solutions",
    subtopicId: "gc-sol-solubility",
    statement: "If the ion product Q exceeds Ksp, a precipitate will form.",
    answer: true,
    explanation:
      "True. When Q > Ksp the solution is supersaturated and ions combine to precipitate until Q falls back to Ksp. If Q < Ksp, more solid can dissolve.",
    difficulty: 2,
  },
  {
    id: "gc-q49",
    subject: "general-chemistry",
    topicId: "gc-solutions",
    subtopicId: "gc-sol-solubility",
    statement: "The solubility of most gases in a liquid increases as temperature increases.",
    answer: false,
    explanation:
      "Gas solubility DECREASES with rising temperature (warm soda goes flat). Most solid solutes, by contrast, become more soluble as temperature rises.",
    difficulty: 2,
  },
  {
    id: "gc-q50",
    subject: "general-chemistry",
    topicId: "gc-solutions",
    subtopicId: "gc-sol-colligative",
    statement: "Dissolving salt in water lowers its freezing point.",
    answer: true,
    explanation:
      "True — freezing point depression, a colligative property. Solute particles interfere with crystal formation, lowering the freezing point (the basis of road salt).",
    difficulty: 1,
  },
  {
    id: "gc-q51",
    subject: "general-chemistry",
    topicId: "gc-solutions",
    subtopicId: "gc-sol-colligative",
    statement: "Colligative properties depend on the chemical identity of the solute, not the number of particles.",
    answer: false,
    explanation:
      "Reversed: colligative properties depend on the NUMBER of dissolved particles, not their identity. That's why the van't Hoff factor (how many ions a solute yields) matters.",
    difficulty: 2,
  },
  {
    id: "gc-q52",
    subject: "general-chemistry",
    topicId: "gc-solutions",
    subtopicId: "gc-sol-colligative",
    statement: "One mole of CaCl₂ produces a larger freezing-point depression than one mole of glucose in the same amount of water.",
    answer: true,
    explanation:
      "True. CaCl₂ dissociates into 3 ions (van't Hoff factor i = 3) while glucose stays as 1 particle (i = 1), so CaCl₂ has roughly triple the colligative effect.",
    difficulty: 2,
  },
  {
    id: "gc-q53",
    subject: "general-chemistry",
    topicId: "gc-bonding",
    subtopicId: "gc-bond-vsepr",
    statement: "A molecule with four bonding pairs and no lone pairs on the central atom is tetrahedral.",
    answer: true,
    explanation:
      "True. Four electron domains with no lone pairs gives a tetrahedral geometry with ~109.5° bond angles (e.g., CH₄).",
    difficulty: 1,
  },
  {
    id: "gc-q54",
    subject: "general-chemistry",
    topicId: "gc-bonding",
    subtopicId: "gc-bond-vsepr",
    statement: "Water is linear because its central oxygen has two bonding pairs.",
    answer: false,
    explanation:
      "Water is BENT (~104.5°), not linear. Oxygen has two bonding pairs AND two lone pairs; the lone pairs push the bonds together into a bent shape.",
    difficulty: 2,
  },
  {
    id: "gc-q55",
    subject: "general-chemistry",
    topicId: "gc-thermo",
    subtopicId: "gc-thermo-gibbs",
    statement: "A reaction with positive ΔH and negative ΔS is nonspontaneous at all temperatures.",
    answer: true,
    explanation:
      "True. With ΔH > 0 and ΔS < 0, ΔG = ΔH − TΔS is positive at every temperature, so the reaction is never spontaneous.",
    difficulty: 2,
  },
  {
    id: "gc-q56",
    subject: "general-chemistry",
    topicId: "gc-acidbase",
    subtopicId: "gc-ab-ph",
    statement: "A buffer is typically made from a weak acid and its conjugate base.",
    answer: true,
    explanation:
      "True. A buffer pairs a weak acid with its conjugate base (or a weak base with its conjugate acid), letting it neutralize added acid or base and resist pH change.",
    difficulty: 1,
  },
  {
    id: "gc-q57",
    subject: "general-chemistry",
    topicId: "gc-kinetics-eq",
    subtopicId: "gc-eq-lechatelier",
    statement: "Raising the temperature of an exothermic reaction at equilibrium shifts it toward the reactants.",
    answer: true,
    explanation:
      "True. For an exothermic reaction, heat is a product; adding heat shifts equilibrium toward reactants (Le Châtelier) and lowers K.",
    difficulty: 2,
  },
  {
    id: "gc-q58",
    subject: "general-chemistry",
    topicId: "gc-atomic",
    subtopicId: "gc-atom-trends",
    statement: "Noble gases have very high ionization energies.",
    answer: true,
    explanation:
      "True. Noble gases have full valence shells (very stable), so removing an electron takes a great deal of energy — among the highest ionization energies in their periods.",
    difficulty: 1,
  },
  {
    id: "gc-q59",
    subject: "general-chemistry",
    topicId: "gc-gases",
    subtopicId: "gc-gas-ideal",
    statement: "At constant pressure, heating a gas causes its volume to increase.",
    answer: true,
    explanation:
      "True — Charles's law. At constant pressure, volume is directly proportional to absolute temperature, so heating expands the gas.",
    difficulty: 1,
  },
  {
    id: "gc-q60",
    subject: "general-chemistry",
    topicId: "gc-solutions",
    subtopicId: "gc-sol-solubility",
    statement: "'Like dissolves like' means polar solvents tend to dissolve polar and ionic solutes.",
    answer: true,
    explanation:
      "True. Polar solvents (like water) dissolve polar/ionic solutes; nonpolar solvents dissolve nonpolar solutes. Mismatched polarity gives poor solubility.",
    difficulty: 1,
  },
];
