import type { Subject } from "@/lib/types";

export const biology: Subject = {
  id: "biology",
  name: "Biology",
  short: "Bio",
  accent: "#16a34a",
  blurb:
    "Cells, molecular biology, physiology, and the systems that keep an organism alive. The backbone of the Bio/Biochem section.",
  sections: ["Bio/Biochem", "Psych/Soc"],
  topics: [
    {
      id: "bio-cell",
      name: "The Cell",
      blurb: "Membranes, organelles, and how eukaryotic cells are organized.",
      subtopics: [
        {
          id: "bio-cell-membrane",
          name: "Plasma membrane & transport",
          summary: {
            highYield:
              "Know the difference between passive and active transport cold — it shows up everywhere.",
            body: [
              { type: "p", text: "The plasma membrane is a fluid mosaic of phospholipids with embedded proteins. The hydrophilic phosphate heads face the aqueous interior and exterior; the hydrophobic fatty-acid tails face inward, away from water." },
              { type: "h", text: "Moving things across" },
              { type: "list", items: [
                "Simple diffusion — small nonpolar molecules (O₂, CO₂) cross directly, down their gradient, no energy.",
                "Facilitated diffusion — polar/charged molecules cross through channel or carrier proteins, still down-gradient, still no ATP.",
                "Primary active transport — pumps use ATP directly to move things against the gradient (e.g., Na⁺/K⁺-ATPase: 3 Na⁺ out, 2 K⁺ in).",
                "Secondary active transport — uses the gradient set up by a pump, not ATP directly (symport vs antiport).",
              ] },
              { type: "key", term: "Tonicity", def: "Hypertonic solution → water leaves the cell (shrinks). Hypotonic → water enters (swells/lyses). Isotonic → no net movement." },
              { type: "tip", text: "Cholesterol is a fluidity buffer: it stiffens membranes at high temp and keeps them fluid at low temp." },
            ],
          },
        },
        {
          id: "bio-cell-organelles",
          name: "Organelles",
          summary: {
            highYield: "Match each organelle to its one-line job; expect 'which organelle does X' questions.",
            body: [
              { type: "list", items: [
                "Nucleus — houses DNA, site of transcription.",
                "Rough ER — ribosomes on surface, makes secreted/membrane proteins.",
                "Smooth ER — lipid synthesis, detox, Ca²⁺ storage.",
                "Golgi — modifies, sorts, and ships proteins (think post office).",
                "Mitochondria — oxidative phosphorylation; has its own DNA (maternally inherited).",
                "Lysosome — acidic, hydrolytic enzymes for degradation (autophagy).",
                "Peroxisome — breaks down very-long-chain fatty acids, makes/breaks H₂O₂.",
              ] },
              { type: "tip", text: "Secretory pathway order: Nucleus → Rough ER → Golgi → vesicle → membrane/secretion." },
            ],
          },
        },
        {
          id: "bio-cell-cytoskeleton",
          name: "Cytoskeleton",
          summary: {
            body: [
              { type: "list", items: [
                "Microfilaments (actin) — thinnest; muscle contraction, cytokinesis cleavage furrow.",
                "Intermediate filaments — structural support, anchor organelles (e.g., keratin).",
                "Microtubules (tubulin) — thickest; tracks for motor proteins, spindle fibers, cilia/flagella (9+2 arrangement).",
              ] },
              { type: "key", term: "Motor proteins", def: "Kinesin walks toward the (+) end (outward); dynein walks toward the (−) end (inward, toward nucleus)." },
            ],
          },
        },
      ],
    },
    {
      id: "bio-molecular",
      name: "Molecular Biology",
      blurb: "The central dogma: DNA → RNA → protein, and how it's controlled.",
      subtopics: [
        {
          id: "bio-mol-replication",
          name: "DNA replication",
          summary: {
            highYield: "Leading vs lagging strand and the key enzymes are perennial test fodder.",
            body: [
              { type: "p", text: "Replication is semiconservative — each daughter helix keeps one parental strand. It proceeds 5'→3', so the leading strand is synthesized continuously toward the fork and the lagging strand in Okazaki fragments away from it." },
              { type: "list", items: [
                "Helicase — unwinds the helix.",
                "Topoisomerase — relieves supercoiling ahead of the fork.",
                "Primase — lays down RNA primers.",
                "DNA polymerase III — main synthesis (prokaryotes); has 3'→5' proofreading.",
                "DNA polymerase I — removes primers, fills gaps.",
                "Ligase — seals nicks between fragments.",
              ] },
            ],
          },
        },
        {
          id: "bio-mol-transcription",
          name: "Transcription & translation",
          summary: {
            body: [
              { type: "p", text: "Transcription (nucleus): RNA polymerase II reads the template strand to build mRNA. Eukaryotic pre-mRNA is processed: 5' cap, poly-A tail, and splicing out introns (keep exons)." },
              { type: "p", text: "Translation (ribosome): mRNA codons are read 5'→3'; tRNA anticodons deliver amino acids. Start codon AUG (Met); stop codons UAA, UAG, UGA." },
              { type: "key", term: "Codon degeneracy", def: "64 codons for 20 amino acids → multiple codons per amino acid. Wobble in the 3rd position tolerates mismatch." },
            ],
          },
        },
        {
          id: "bio-mol-regulation",
          name: "Gene regulation",
          summary: {
            body: [
              { type: "p", text: "Prokaryotes use operons. The lac operon (inducible) is OFF by default and turns ON when lactose is present and glucose is low. The trp operon (repressible) is ON by default and shuts OFF when tryptophan is abundant." },
              { type: "tip", text: "High glucose → low cAMP → CAP can't bind → low transcription even with lactose. 'Glucose is in charge.'" },
            ],
          },
        },
      ],
    },
    {
      id: "bio-genetics",
      name: "Genetics",
      blurb: "Inheritance patterns, meiosis, and how variation arises.",
      subtopics: [
        {
          id: "bio-gen-mendel",
          name: "Mendelian inheritance",
          summary: {
            body: [
              { type: "list", items: [
                "Law of segregation — alleles separate into gametes.",
                "Law of independent assortment — genes on different chromosomes sort independently.",
                "Monohybrid cross of two heterozygotes → 3:1 phenotype, 1:2:1 genotype.",
                "Dihybrid cross of two heterozygotes → 9:3:3:1.",
              ] },
              { type: "key", term: "Recessive X-linked", def: "Affects males far more often (they have one X). Sons can't inherit it from an affected father; daughters can be carriers." },
            ],
          },
        },
        {
          id: "bio-gen-meiosis",
          name: "Meiosis",
          summary: {
            highYield: "Crossing over and nondisjunction are heavily tested sources of variation/error.",
            body: [
              { type: "p", text: "Meiosis makes 4 haploid gametes from one diploid cell. Meiosis I separates homologous chromosomes (reductional); meiosis II separates sister chromatids (equational, like mitosis)." },
              { type: "list", items: [
                "Crossing over happens in prophase I (synapsis, chiasmata) → recombination.",
                "Independent assortment in metaphase I → 2²³ combinations in humans.",
                "Nondisjunction → aneuploidy (e.g., trisomy 21).",
              ] },
            ],
          },
        },
      ],
    },
    {
      id: "bio-physiology",
      name: "Physiology & Systems",
      blurb: "How organ systems work and talk to each other.",
      subtopics: [
        {
          id: "bio-phys-nervous",
          name: "Nervous system",
          summary: {
            highYield: "The action potential sequence and saltatory conduction are must-knows.",
            body: [
              { type: "p", text: "Resting potential ≈ −70 mV, maintained by the Na⁺/K⁺ pump and K⁺ leak channels. A stimulus to threshold (≈ −55 mV) triggers an all-or-none action potential." },
              { type: "list", items: [
                "Depolarization — voltage-gated Na⁺ channels open, Na⁺ rushes in.",
                "Repolarization — Na⁺ channels inactivate, K⁺ channels open, K⁺ leaves.",
                "Hyperpolarization — K⁺ channels close slowly, brief overshoot below rest.",
              ] },
              { type: "tip", text: "Myelin speeds conduction by saltatory conduction — the signal 'jumps' between nodes of Ranvier." },
            ],
          },
        },
        {
          id: "bio-phys-endocrine",
          name: "Endocrine system",
          summary: {
            body: [
              { type: "p", text: "Hormones are peptide (water-soluble, bind surface receptors, fast, second messengers) or steroid (lipid-soluble, cross the membrane, bind intracellular receptors, slow, alter transcription)." },
              { type: "key", term: "Negative feedback", def: "The dominant control loop — a rising product inhibits its own production (e.g., high thyroid hormone suppresses TSH/TRH)." },
            ],
          },
        },
        {
          id: "bio-phys-circulatory",
          name: "Circulatory & respiratory",
          summary: {
            body: [
              { type: "p", text: "Blood path: body → vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body. Arteries carry blood away from the heart (usually oxygenated; pulmonary artery is the exception)." },
              { type: "tip", text: "Oxygen–hemoglobin curve shifts RIGHT (unloads O₂) with more CO₂, more H⁺ (lower pH), higher temp, more 2,3-BPG — the Bohr effect. 'Active tissue wants O₂.'" },
            ],
          },
        },
        { id: "bio-phys-renal", name: "Renal system" },
        { id: "bio-phys-immune", name: "Immune system" },
        { id: "bio-phys-digestive", name: "Digestive system" },
      ],
    },
  ],
};
