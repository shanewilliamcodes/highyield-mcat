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
    {
      id: "gc-gases",
      name: "Gases",
      blurb: "The ideal gas law, partial pressures, and kinetic molecular theory.",
      subtopics: [
        {
          id: "gc-gas-ideal",
          name: "Ideal gas law & gas laws",
          summary: {
            highYield: "PV = nRT and its shortcuts (Boyle, Charles, Avogadro) are near-guaranteed points.",
            body: [
              { type: "p", text: "An ideal gas obeys PV = nRT. Hold two variables constant and you recover the simple gas laws." },
              { type: "list", items: [
                "Boyle's law — P ∝ 1/V at constant T (squeeze it, pressure rises).",
                "Charles's law — V ∝ T at constant P (heat it, it expands).",
                "Gay-Lussac's law — P ∝ T at constant V.",
                "Avogadro's law — V ∝ n (more moles, more volume).",
              ] },
              { type: "key", term: "STP", def: "At standard temperature and pressure (0 °C, 1 atm), one mole of an ideal gas occupies 22.4 L." },
              { type: "tip", text: "Always use ABSOLUTE temperature (kelvin) in gas-law math. Combined gas law: P₁V₁/T₁ = P₂V₂/T₂." },
            ],
          },
        },
        {
          id: "gc-gas-kmt",
          name: "Kinetic theory & real gases",
          summary: {
            highYield: "Know when real gases deviate from ideal — high pressure and low temperature.",
            body: [
              { type: "p", text: "Kinetic molecular theory models gas particles as tiny, fast, randomly moving points with negligible volume and no intermolecular forces, whose average kinetic energy is proportional to temperature." },
              { type: "key", term: "Dalton's law", def: "Total pressure of a gas mixture = sum of the partial pressures of each component (P_total = ΣP_i)." },
              { type: "key", term: "Graham's law", def: "Lighter gases effuse/diffuse faster: rate ∝ 1/√(molar mass)." },
              { type: "tip", text: "Real gases deviate from ideal at HIGH pressure and LOW temperature, where molecular volume and intermolecular attractions can no longer be ignored." },
            ],
          },
        },
      ],
    },
    {
      id: "gc-solutions",
      name: "Solutions & Solubility",
      blurb: "Concentration, solubility equilibria, and colligative properties.",
      subtopics: [
        {
          id: "gc-sol-solubility",
          name: "Solubility & Ksp",
          summary: {
            highYield: "Ksp and the common-ion effect are classic equilibrium questions.",
            body: [
              { type: "p", text: "Solubility is how much solute dissolves; the solubility product Ksp is the equilibrium constant for a slightly soluble salt dissolving into its ions." },
              { type: "key", term: "Common-ion effect", def: "Adding an ion already present in the equilibrium shifts it (Le Châtelier) toward the solid, DECREASING solubility." },
              { type: "list", items: [
                "'Like dissolves like' — polar solvents dissolve polar/ionic solutes; nonpolar dissolves nonpolar.",
                "Gas solubility increases at lower temperature and higher pressure (Henry's law).",
                "Compare Q to Ksp: Q > Ksp → precipitate forms; Q < Ksp → more can dissolve.",
              ] },
            ],
          },
        },
        {
          id: "gc-sol-colligative",
          name: "Colligative properties",
          summary: {
            highYield: "Colligative properties depend on the NUMBER of particles, not their identity.",
            body: [
              { type: "p", text: "Colligative properties change with solute particle concentration regardless of what the solute is. Dissolving a solute in a solvent:" },
              { type: "list", items: [
                "Boiling point elevation — solute raises the boiling point (ΔT = i·Kb·m).",
                "Freezing point depression — solute lowers the freezing point (why salt melts ice).",
                "Vapor pressure lowering — fewer solvent molecules escape (Raoult's law).",
                "Osmotic pressure — Π = iMRT drives water across a membrane toward higher solute.",
              ] },
              { type: "key", term: "Van't Hoff factor (i)", def: "The number of particles a solute dissociates into: glucose i = 1, NaCl i = 2, CaCl₂ i = 3. More particles → bigger colligative effect." },
            ],
          },
        },
      ],
    },
  ],
};
