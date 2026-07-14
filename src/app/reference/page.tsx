const sheets = [
  { title: "Physics essentials", groups: [
    ["Motion & energy", ["v = v₀ + at", "Δx = v₀t + ½at²", "F = ma", "W = Fd cosθ", "KE = ½mv²", "PEgravity = mgh", "P = W/t = Fv"]],
    ["Fluids & waves", ["P = F/A", "P = P₀ + ρgh", "Fᵦ = ρVg", "A₁v₁ = A₂v₂", "Q ∝ ΔPr⁴/(ηL)", "v = fλ", "β = 10 log(I/I₀)"]],
    ["Electricity & optics", ["F = kq₁q₂/r²", "V = kQ/r", "V = IR", "P = IV = I²R", "C = Q/V", "1/f = 1/o + 1/i", "n₁ sinθ₁ = n₂ sinθ₂"]],
  ]},
  { title: "Amino acids", groups: [
    ["Nonpolar", ["Gly G · Ala A · Val V · Leu L · Ile I · Met M · Pro P"]],
    ["Aromatic", ["Phe F · Tyr Y · Trp W"]],
    ["Polar", ["Ser S · Thr T · Cys C · Asn N · Gln Q"]],
    ["Charged at pH 7", ["Acidic: Asp D, Glu E", "Basic: Lys K, Arg R; His H is weakly basic"]],
  ]},
  { title: "Metabolism map", groups: [
    ["Fed state", ["Insulin ↑", "Glycolysis, glycogenesis, fatty-acid synthesis", "Liver exports lipids; muscle and adipose take up glucose"]],
    ["Fasting", ["Glucagon/epinephrine ↑", "Glycogenolysis → gluconeogenesis", "Lipolysis → beta-oxidation → ketogenesis"]],
    ["Yield checkpoints", ["Glycolysis: 2 ATP + 2 NADH", "Per acetyl-CoA: 3 NADH + 1 FADH₂ + 1 GTP", "ETC: O₂ is final electron acceptor"]],
  ]},
  { title: "Psych/Soc contrasts", groups: [
    ["Learning", ["Positive/negative = add/remove", "Reinforcement/punishment = increase/decrease behavior", "Classical pairs stimuli; operant pairs behavior and consequence"]],
    ["Biases", ["Availability: ease of recall", "Representativeness: prototype", "Confirmation: supports existing belief", "Fundamental attribution error: disposition over situation"]],
    ["Research", ["Random sampling → generalizability", "Random assignment → causal inference", "Reliability → consistency", "Validity → measuring the intended construct", "Type I → false positive; Type II → false negative"]],
  ]},
];

export default function ReferencePage() { return <div className="container-page" style={{ paddingBlock: "40px 72px" }}><span className="badge">Rapid reference</span><h1 style={{ fontSize: 36, margin: "12px 0 8px" }}>High-yield sheets</h1><p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>The equations, classifications, and contrasts worth keeping close.</p><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>{sheets.map((sheet) => <section key={sheet.title} className="card" style={{ padding: 22 }}><h2 style={{ fontSize: 21, margin: "0 0 16px" }}>{sheet.title}</h2>{sheet.groups.map(([name, items]) => <div key={name as string} style={{ marginBottom: 18 }}><h3 style={{ fontSize: 13, color: "var(--brand)", textTransform: "uppercase", margin: "0 0 7px" }}>{name}</h3><ul style={{ paddingLeft: 18, margin: 0, color: "var(--ink-soft)", lineHeight: 1.65 }}>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></div>)}</section>)}</div></div>; }
