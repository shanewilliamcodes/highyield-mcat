import type { Subject } from "@/lib/types";

export const biochemistry: Subject = {
  id: "biochemistry",
  name: "Biochemistry",
  short: "Biochem",
  accent: "#0ea5e9",
  blurb:
    "Amino acids, enzymes, and metabolism. The most heavily tested discipline on the whole exam — bio and chem/phys both lean on it.",
  sections: ["Bio/Biochem", "Chem/Phys"],
  topics: [
    {
      id: "bc-aa",
      name: "Amino Acids & Proteins",
      blurb: "The 20 building blocks and how they fold into function.",
      subtopics: [
        {
          id: "bc-aa-structure",
          name: "Amino acid structure & classification",
          summary: {
            highYield: "You will be tested on which side chains are hydrophobic, polar, acidic, or basic.",
            body: [
              { type: "p", text: "Every amino acid has a central α-carbon bonded to an amino group, a carboxyl group, a hydrogen, and a variable R group. The R group determines everything about its chemistry." },
              { type: "list", items: [
                "Nonpolar/hydrophobic — Gly, Ala, Val, Leu, Ile, Pro, Phe, Met, Trp; bury in the protein core.",
                "Polar uncharged — Ser, Thr, Cys, Tyr, Asn, Gln; sit on the surface, H-bond.",
                "Acidic (negative at pH 7) — Asp, Glu.",
                "Basic (positive at pH 7) — Lys, Arg, His.",
              ] },
              { type: "key", term: "Special cases", def: "Glycine is the smallest/most flexible (R = H). Proline kinks the backbone (rigid ring). Cysteine forms disulfide bonds." },
            ],
          },
        },
        {
          id: "bc-aa-titration",
          name: "Titration & pI",
          summary: {
            body: [
              { type: "p", text: "Amino acids are zwitterions. At low pH everything is protonated (net +); raise the pH and groups deprotonate. The isoelectric point (pI) is the pH where net charge = 0." },
              { type: "tip", text: "For a simple amino acid, pI = average of the two pKa values flanking the zwitterion. For acidic/basic side chains, average the two pKa values around the neutral species." },
            ],
          },
        },
        {
          id: "bc-aa-structure-levels",
          name: "Levels of protein structure",
          summary: {
            body: [
              { type: "list", items: [
                "Primary — amino acid sequence (peptide bonds).",
                "Secondary — local H-bonding: α-helices and β-pleated sheets.",
                "Tertiary — overall 3D fold from side-chain interactions (hydrophobic core, disulfides, salt bridges).",
                "Quaternary — multiple subunits assembled (e.g., hemoglobin's 4 chains).",
              ] },
              { type: "key", term: "Denaturation", def: "Loss of 3D structure (heat, pH, urea) without breaking peptide bonds. Primary structure stays intact." },
            ],
          },
        },
      ],
    },
    {
      id: "bc-enzymes",
      name: "Enzymes",
      blurb: "Biological catalysts and how their activity is controlled.",
      subtopics: [
        {
          id: "bc-enz-kinetics",
          name: "Enzyme kinetics",
          summary: {
            highYield: "Michaelis–Menten and the inhibition table are among the most tested concepts on the MCAT.",
            body: [
              { type: "p", text: "Enzymes lower the activation energy; they do not change the equilibrium or ΔG of a reaction. Vmax is the max rate; Km is the substrate concentration at ½ Vmax and is an inverse measure of affinity (low Km = high affinity)." },
              { type: "h", text: "Inhibition (know cold)" },
              { type: "list", items: [
                "Competitive — binds active site; raises Km, Vmax unchanged (outcompeted by more substrate).",
                "Noncompetitive — binds allosteric site equally to E and ES; Vmax falls, Km unchanged.",
                "Uncompetitive — binds only ES complex; both Vmax and Km fall.",
                "Mixed — binds either, with unequal preference.",
              ] },
              { type: "tip", text: "Lineweaver–Burk (double reciprocal): x-intercept = −1/Km, y-intercept = 1/Vmax. Competitive lines meet on the y-axis; noncompetitive meet on the x-axis." },
            ],
          },
        },
        {
          id: "bc-enz-regulation",
          name: "Enzyme regulation",
          summary: {
            highYield: "Regulation changes pathway flux; identify whether control is allosteric, covalent, proteolytic, or transcriptional.",
            body: [
              { type: "list", items: [
                "Allosteric regulation — effectors bind a non-active site to shift activity (cooperativity → sigmoidal curve).",
                "Feedback inhibition — end product shuts off an upstream enzyme.",
                "Covalent modification — phosphorylation (kinases add, phosphatases remove) toggles activity.",
                "Zymogens — inactive precursors activated by cleavage (e.g., pepsinogen → pepsin).",
              ] },
              { type: "tip", text: "Allosteric enzymes often show sigmoidal kinetics and do not follow simple Michaelis-Menten behavior." },
            ],
          },
        },
      ],
    },
    {
      id: "bc-metabolism",
      name: "Metabolism",
      blurb: "How cells extract and store energy from fuel.",
      subtopics: [
        {
          id: "bc-met-glycolysis",
          name: "Glycolysis",
          summary: {
            highYield: "Net ATP yield and the regulated steps (PFK-1!) are classic question targets.",
            body: [
              { type: "p", text: "Glycolysis splits glucose (6C) into 2 pyruvate (3C) in the cytoplasm, with no oxygen required. Net yield: 2 ATP and 2 NADH per glucose (4 ATP made − 2 invested)." },
              { type: "key", term: "Rate-limiting step", def: "Phosphofructokinase-1 (PFK-1) is the key control point. It's inhibited by ATP/citrate and activated by AMP and fructose-2,6-bisphosphate." },
            ],
          },
        },
        {
          id: "bc-met-krebs",
          name: "Citric acid cycle",
          summary: {
            highYield: "Memorize the yield per acetyl-CoA and where the cycle connects carbohydrate, fat, and amino-acid metabolism.",
            body: [
              { type: "p", text: "Pyruvate is decarboxylated to acetyl-CoA, which enters the mitochondrial matrix and the Krebs cycle. Per acetyl-CoA: 3 NADH, 1 FADH₂, 1 GTP, and 2 CO₂. Double everything per glucose." },
              { type: "tip", text: "The cycle is amphibolic: it oxidizes fuel while also supplying intermediates for biosynthesis. Its rate falls when ATP and NADH are abundant." },
            ],
          },
        },
        {
          id: "bc-met-etc",
          name: "Oxidative phosphorylation",
          summary: {
            highYield: "The chemiosmotic theory and the final electron acceptor are guaranteed content.",
            body: [
              { type: "p", text: "NADH and FADH₂ drop electrons into the electron transport chain (inner mitochondrial membrane). The energy pumps H⁺ into the intermembrane space, building a gradient that drives ATP synthase (chemiosmosis)." },
              { type: "tip", text: "O₂ is the FINAL electron acceptor → forms water. No O₂ = chain backs up = NADH can't be reoxidized = cell falls back on fermentation. ~30–32 ATP per glucose total (aerobic)." },
            ],
          },
        },
        {
          id: "bc-met-glycogen",
          name: "Glycogen & gluconeogenesis",
          summary: {
            highYield: "Liver vs muscle glycogen, and why gluconeogenesis is NOT just reverse glycolysis.",
            body: [
              { type: "p", text: "Glycogen is the body's short-term glucose store. Glycogenesis builds it; glycogenolysis breaks it down. Gluconeogenesis makes new glucose from non-carbohydrate precursors (lactate, glycerol, amino acids) when stores run low." },
              { type: "list", items: [
                "Liver glycogen → maintains blood glucose for the whole body.",
                "Muscle glycogen → fuels the muscle only (muscle lacks glucose-6-phosphatase, so it can't release free glucose into the blood).",
                "Glycogen phosphorylase = breakdown (activated by glucagon/epinephrine via cAMP/PKA).",
                "Glycogen synthase = synthesis (activated by insulin).",
              ] },
              { type: "key", term: "Gluconeogenesis bypasses", def: "It reverses glycolysis except at the 3 irreversible steps, using unique enzymes: pyruvate carboxylase + PEP carboxykinase, fructose-1,6-bisphosphatase, and glucose-6-phosphatase. Occurs mainly in the liver." },
              { type: "tip", text: "Hormonal logic: insulin (fed state) stores fuel; glucagon (fasting) mobilizes it. They have reciprocal effects on these pathways." },
            ],
          },
        },
        {
          id: "bc-met-lipid",
          name: "Fatty acid metabolism",
          summary: {
            highYield: "Beta-oxidation (breakdown) vs fatty acid synthesis — opposite compartments, opposite carriers.",
            body: [
              { type: "p", text: "Fatty acids are the most energy-dense fuel (~9 kcal/g vs ~4 for carbs). Breakdown and synthesis are deliberately separated to avoid a futile cycle." },
              { type: "list", items: [
                "Beta-oxidation — in the MITOCHONDRIA; removes 2 carbons at a time, yielding acetyl-CoA + NADH + FADH₂. Long-chain fatty acids need the carnitine shuttle to enter.",
                "Fatty acid synthesis — in the CYTOPLASM; builds chains from acetyl-CoA via malonyl-CoA, using NADPH as the reducing power.",
              ] },
              { type: "key", term: "Ketone bodies", def: "During prolonged fasting, excess acetyl-CoA in the liver is converted to ketone bodies, which the brain can use as an alternative fuel to spare glucose and limit muscle breakdown." },
              { type: "tip", text: "Lipids travel in lipoproteins: chylomicrons (dietary fat), VLDL (liver→tissues), LDL ('bad' — delivers cholesterol), HDL ('good' — returns cholesterol to the liver)." },
            ],
          },
        },
      ],
    },
    {
      id: "bc-biomol",
      name: "Biomolecules",
      blurb: "Carbohydrates, lipids, and nucleic acids — structure and function.",
      subtopics: [
        {
          id: "bc-biomol-carb",
          name: "Carbohydrates",
          summary: {
            highYield: "Know the glycosidic linkages and how monosaccharides cyclize.",
            body: [
              { type: "p", text: "Carbohydrates are polyhydroxy aldehydes (aldoses) or ketones (ketoses). Monosaccharides (glucose, fructose) join via glycosidic bonds into di- and polysaccharides." },
              { type: "list", items: [
                "Storage polysaccharides — starch (plants) and glycogen (animals), both α-linked and digestible.",
                "Structural polysaccharides — cellulose (β-linked, indigestible to humans) and chitin.",
                "Cyclization creates a new stereocenter (anomeric carbon) → α and β anomers.",
              ] },
              { type: "key", term: "Reducing sugars", def: "Sugars with a free anomeric carbon (an open-chain aldehyde/ketone) can reduce other compounds — detected by Tollens' or Benedict's tests." },
            ],
          },
        },
        {
          id: "bc-biomol-lipid",
          name: "Lipids & membranes",
          summary: {
            highYield: "Phospholipid amphipathicity is why membranes form bilayers — tie it to transport.",
            body: [
              { type: "p", text: "Lipids are hydrophobic/amphipathic biomolecules. Triacylglycerols store energy; phospholipids build membranes; steroids (like cholesterol) modulate fluidity and serve as hormone precursors." },
              { type: "key", term: "Amphipathic phospholipids", def: "A hydrophilic phosphate head and two hydrophobic fatty-acid tails drive self-assembly into the bilayer, with tails inward away from water." },
              { type: "tip", text: "Saturated fats (no C=C) pack tightly and are solid at room temp; unsaturated fats (cis double bonds) kink and stay liquid — the same logic governs membrane fluidity." },
            ],
          },
        },
        {
          id: "bc-biomol-nucleic",
          name: "Nucleic acids",
          summary: {
            highYield: "Base pairing rules and the antiparallel, 5'→3' convention are foundational.",
            body: [
              { type: "p", text: "Nucleotides (sugar + phosphate + nitrogenous base) polymerize into DNA and RNA via phosphodiester bonds. DNA is a double helix of two antiparallel strands." },
              { type: "list", items: [
                "Purines (two rings) — adenine, guanine. Pyrimidines (one ring) — cytosine, thymine (DNA), uracil (RNA).",
                "Base pairing — A–T (A–U in RNA) with 2 H-bonds; G–C with 3 H-bonds (so G–C-rich DNA is more stable).",
                "DNA uses deoxyribose and is double-stranded; RNA uses ribose and is usually single-stranded.",
              ] },
              { type: "tip", text: "Strands run antiparallel: one 5'→3', the complement 3'→5'. Synthesis always adds to the 3' end." },
            ],
          },
        },
      ],
    },
  ],
};
