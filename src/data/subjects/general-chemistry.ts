import type { Subject } from "@/lib/types";

export const generalChemistry: Subject = {
  id: "general-chemistry",
  name: "General Chemistry",
  short: "Gen Chem",
  accent: "#f97316",
  blurb:
    "Atomic structure, bonding, thermodynamics, kinetics, equilibrium, acids/bases, and electrochemistry — the quantitative core of Chem/Phys.",
  sections: ["Chem/Phys"],
  topics: [
    {
      id: "gc-atomic",
      name: "Atomic Structure & Periodic Trends",
      blurb: "Electrons, quantum numbers, and how properties change across the table.",
      subtopics: [
        {
          id: "gc-atom-trends",
          name: "Periodic trends",
          summary: {
            highYield: "Trends questions are fast points if you memorize the directions.",
            body: [
              { type: "list", items: [
                "Atomic radius — increases down a group, decreases across a period (more nuclear pull).",
                "Ionization energy — opposite of radius: increases up and to the right.",
                "Electronegativity — increases up and to the right (fluorine is the king).",
                "Electron affinity — generally increases up and to the right.",
              ] },
              { type: "tip", text: "Everything 'desirable' (IE, EN, EA) points toward fluorine (top-right). Size points the opposite way." },
            ],
          },
        },
        {
          id: "gc-atom-quantum",
          name: "Quantum numbers & configuration",
          summary: {
            body: [
              { type: "list", items: [
                "n — principal (shell, energy level).",
                "ℓ — azimuthal (subshell shape: 0=s,1=p,2=d,3=f).",
                "mℓ — magnetic (orbital orientation, −ℓ to +ℓ).",
                "ms — spin (+½ or −½).",
              ] },
              { type: "key", term: "Three rules", def: "Aufbau (fill low energy first), Hund's (singly fill degenerate orbitals before pairing), Pauli exclusion (no two electrons share all four numbers)." },
            ],
          },
        },
      ],
    },
    {
      id: "gc-bonding",
      name: "Bonding & Intermolecular Forces",
      blurb: "How atoms connect and how molecules attract each other.",
      subtopics: [
        {
          id: "gc-bond-imf",
          name: "Intermolecular forces",
          summary: {
            highYield: "IMF strength predicts boiling point, viscosity, and solubility — extremely testable.",
            body: [
              { type: "p", text: "Strength order (weak → strong): London dispersion < dipole–dipole < hydrogen bonding < ion–dipole. Stronger IMFs → higher boiling point." },
              { type: "key", term: "Hydrogen bonding", def: "Requires H bonded directly to N, O, or F. Explains water's anomalously high boiling point." },
            ],
          },
        },
        {
          id: "gc-bond-vsepr",
          name: "VSEPR & molecular geometry",
          summary: {
            highYield: "Predict shape and polarity from electron domains — a fast, reliable point source.",
            body: [
              { type: "p", text: "VSEPR theory says electron domains (bonds + lone pairs) arrange to minimize repulsion. Count the domains around the central atom to get the geometry." },
              { type: "list", items: [
                "2 domains → linear (180°).",
                "3 domains → trigonal planar (120°).",
                "4 domains → tetrahedral (109.5°).",
                "5 domains → trigonal bipyramidal (90°/120°).",
                "6 domains → octahedral (90°).",
              ] },
              { type: "key", term: "Lone pairs matter", def: "Lone pairs repel more than bonding pairs, compressing angles and changing the shape (e.g., 4 domains with 1 lone pair → trigonal pyramidal like NH₃; 2 lone pairs → bent like H₂O)." },
              { type: "tip", text: "Polarity = geometry + bond dipoles. Symmetric shapes (linear CO₂, tetrahedral CCl₄) cancel dipoles → nonpolar; asymmetry (bent H₂O) → polar." },
            ],
          },
        },
      ],
    },
    {
      id: "gc-thermo",
      name: "Thermodynamics",
      blurb: "Energy, spontaneity, and the direction of change.",
      subtopics: [
        {
          id: "gc-thermo-gibbs",
          name: "Gibbs free energy",
          summary: {
            highYield: "ΔG = ΔH − TΔS and its sign table are guaranteed exam content.",
            body: [
              { type: "p", text: "ΔG < 0 → spontaneous (exergonic); ΔG > 0 → nonspontaneous; ΔG = 0 → equilibrium. ΔG = ΔH − TΔS." },
              { type: "list", items: [
                "ΔH < 0, ΔS > 0 → spontaneous at all temperatures.",
                "ΔH > 0, ΔS < 0 → never spontaneous.",
                "ΔH < 0, ΔS < 0 → spontaneous at low T.",
                "ΔH > 0, ΔS > 0 → spontaneous at high T.",
              ] },
              { type: "tip", text: "ΔG° = −RT ln K. Spontaneous forward (ΔG° < 0) ⟺ K > 1." },
            ],
          },
        },
      ],
    },
    {
      id: "gc-kinetics-eq",
      name: "Kinetics & Equilibrium",
      blurb: "How fast reactions go and where they settle.",
      subtopics: [
        {
          id: "gc-kin-rate",
          name: "Reaction rates",
          summary: {
            body: [
              { type: "p", text: "Rate laws are determined experimentally, not from stoichiometry. Order = sum of exponents. Catalysts speed reactions by lowering activation energy without being consumed and without changing ΔG or K." },
            ],
          },
        },
        {
          id: "gc-eq-lechatelier",
          name: "Le Châtelier's principle",
          summary: {
            highYield: "Predicting shift direction is one of the easiest point sources on the exam.",
            body: [
              { type: "p", text: "A system at equilibrium shifts to counteract a stress." },
              { type: "list", items: [
                "Add reactant → shifts right; add product → shifts left.",
                "Increase pressure (decrease volume) → shifts toward fewer gas moles.",
                "Increase temperature → favors the endothermic direction (treat heat as a reactant/product).",
              ] },
              { type: "tip", text: "A catalyst does NOT shift equilibrium — it only gets you there faster." },
            ],
          },
        },
      ],
    },
    {
      id: "gc-acidbase",
      name: "Acids & Bases",
      blurb: "pH, buffers, and titrations.",
      subtopics: [
        {
          id: "gc-ab-ph",
          name: "pH, pKa & buffers",
          summary: {
            highYield: "Henderson–Hasselbalch and buffer behavior recur constantly (and tie into biochem).",
            body: [
              { type: "p", text: "pH = −log[H⁺]; pH + pOH = 14 at 25 °C. A strong acid dissociates completely; a weak acid only partially (described by Ka)." },
              { type: "key", term: "Henderson–Hasselbalch", def: "pH = pKa + log([A⁻]/[HA]). When [A⁻] = [HA], pH = pKa — the point of maximum buffering capacity." },
              { type: "tip", text: "A buffer resists pH change and works best within ±1 pH unit of its pKa. At the half-equivalence point of a titration, pH = pKa." },
            ],
          },
        },
      ],
    },
    {
      id: "gc-electro",
      name: "Electrochemistry",
      blurb: "Redox reactions that move electrons and generate (or use) current.",
      subtopics: [
        {
          id: "gc-electro-cells",
          name: "Galvanic vs electrolytic cells",
          summary: {
            body: [
              { type: "list", items: [
                "Oxidation always happens at the Anode; Reduction at the Cathode ('An Ox, Red Cat').",
                "Galvanic (voltaic) — spontaneous (ΔG < 0, E°cell > 0), generates current. Anode is negative.",
                "Electrolytic — nonspontaneous, driven by external power. Anode is positive.",
              ] },
              { type: "tip", text: "Electrons always flow from anode to cathode. Use ΔG = −nFE°cell to connect thermodynamics and electrochemistry." },
            ],
          },
        },
      ],
    },
  ],
};
