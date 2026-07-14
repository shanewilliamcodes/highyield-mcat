import type { Subject } from "@/lib/types";

export const organicChemistry: Subject = {
  id: "organic-chemistry",
  name: "Organic Chemistry",
  short: "Orgo",
  accent: "#e11d48",
  blurb:
    "Functional groups, stereochemistry, key reaction mechanisms, and lab/spectroscopy. Tested for reasoning, not memorizing every reaction.",
  sections: ["Chem/Phys", "Bio/Biochem"],
  topics: [
    {
      id: "oc-fundamentals",
      name: "Structure & Stereochemistry",
      blurb: "How to read molecules in 3D.",
      subtopics: [
        {
          id: "oc-stereo-chirality",
          name: "Chirality & isomers",
          summary: {
            highYield: "Distinguishing enantiomers, diastereomers, and meso compounds is a frequent question type.",
            body: [
              { type: "p", text: "A chiral (stereo)center has four different groups. n stereocenters → up to 2ⁿ stereoisomers." },
              { type: "list", items: [
                "Enantiomers — non-superimposable mirror images; identical physical properties except optical rotation and reactions with chiral things.",
                "Diastereomers — stereoisomers that are NOT mirror images (differ at some but not all centers); different physical properties.",
                "Meso compound — has stereocenters but an internal mirror plane → achiral overall.",
              ] },
              { type: "tip", text: "R/S: rank by priority (atomic number), put lowest away, trace 1→2→3. Clockwise = R, counterclockwise = S. If lowest priority points toward you, reverse your answer." },
            ],
          },
        },
        {
          id: "oc-nomenclature",
          name: "Nomenclature & functional group priority",
          summary: {
            highYield: "The functional-group priority order tells you the suffix and lowest-locant numbering.",
            body: [
              { type: "p", text: "IUPAC names = (substituents) + (longest chain root) + (suffix for the highest-priority group). Number the chain to give the principal group the lowest locant." },
              { type: "key", term: "Priority order (high → low)", def: "Carboxylic acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine > alkene/alkyne > alkane. The top group present becomes the suffix; lower ones become prefixes." },
              { type: "tip", text: "Roots: meth(1), eth(2), prop(3), but(4), pent(5), hex(6). An -ol suffix means alcohol, -al aldehyde, -one ketone, -oic acid a carboxylic acid." },
            ],
          },
        },
      ],
    },
    {
      id: "oc-groups",
      name: "Functional Groups & Reactions",
      blurb: "The reactive handles and what they do.",
      subtopics: [
        {
          id: "oc-grp-carbonyl",
          name: "Carbonyl chemistry",
          summary: {
            highYield: "Nucleophilic addition vs substitution and relative reactivity are core.",
            body: [
              { type: "p", text: "Aldehydes and ketones undergo nucleophilic addition. Carboxylic acid derivatives undergo nucleophilic acyl substitution because they have a leaving group." },
              { type: "key", term: "Reactivity of acid derivatives", def: "Acyl chloride > anhydride > ester ≈ acid > amide. More stable leaving group = more reactive." },
              { type: "tip", text: "Aldehydes are more reactive than ketones (less steric hindrance, less electron donation to the carbonyl carbon)." },
            ],
          },
        },
        {
          id: "oc-grp-substitution",
          name: "SN1 / SN2 / E1 / E2",
          summary: {
            highYield: "Mechanism selection from substrate + conditions is classic MCAT reasoning.",
            body: [
              { type: "list", items: [
                "SN2 — one step, backside attack, inversion; favored by strong nucleophile, aprotic solvent, primary carbon.",
                "SN1 — two steps via carbocation, racemization; favored by stable (3°) carbocation, weak nucleophile, protic solvent.",
                "E2 — strong bulky base, anti-periplanar, one step; gives more substituted (Zaitsev) alkene.",
                "E1 — carbocation then base removes a proton; competes with SN1.",
              ] },
              { type: "tip", text: "Carbocation stability: 3° > 2° > 1°. Tertiary substrate + weak nucleophile/protic solvent → think SN1/E1." },
            ],
          },
        },
      ],
    },
    {
      id: "oc-lab",
      name: "Separations & Spectroscopy",
      blurb: "Identifying and purifying compounds in the lab.",
      subtopics: [
        {
          id: "oc-lab-spectroscopy",
          name: "IR & NMR",
          summary: {
            highYield: "Know the diagnostic IR peaks and basic ¹H NMR splitting.",
            body: [
              { type: "list", items: [
                "IR ~3300 cm⁻¹ broad — O–H (alcohol/acid).",
                "IR ~1700 cm⁻¹ strong — C=O carbonyl.",
                "IR ~2200 cm⁻¹ — triple bond (C≡N, C≡C).",
              ] },
              { type: "key", term: "NMR n+1 rule", def: "A proton with n neighboring (nonequivalent) protons splits into n+1 peaks. Chemical shift reflects electron environment (downfield = deshielded)." },
            ],
          },
        },
        {
          id: "oc-lab-separation",
          name: "Separation techniques",
          summary: {
            highYield: "Choose a method by the physical property that differs: solubility, boiling point, size, charge, or stationary-phase affinity.",
            body: [
              { type: "list", items: [
                "Extraction — separates by solubility/polarity (and acid–base properties in aqueous vs organic layers).",
                "Distillation — separates by boiling point.",
                "Chromatography — separates by affinity for stationary vs mobile phase (TLC: more polar = lower Rf).",
              ] },
              { type: "tip", text: "In acid-base extraction, convert the desired compound into an ionic form to move it into water, then neutralize it to recover the compound." },
            ],
          },
        },
      ],
    },
  ],
};
