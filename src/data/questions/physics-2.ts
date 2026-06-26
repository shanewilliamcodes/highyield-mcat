import type { Question } from "@/lib/types";

// Physics — batch 2. Mechanics, fluids, electricity, waves/optics, plus
// thermodynamics and modern-physics crossovers common in Chem/Phys passages.
export const physicsQuestions2: Question[] = [
  {
    id: "ph-q16",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-kinematics",
    statement: "An object in uniform circular motion has zero acceleration because its speed is constant.",
    answer: false,
    explanation:
      "Even at constant speed, the direction of velocity constantly changes, so there is a centripetal acceleration (a = v²/r) directed toward the center.",
    difficulty: 2,
  },
  {
    id: "ph-q17",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-kinematics",
    statement: "At the highest point of a projectile's path, its vertical velocity is zero but its horizontal velocity is unchanged.",
    answer: true,
    explanation:
      "True. Gravity acts only vertically, so horizontal velocity stays constant while vertical velocity is momentarily zero at the apex before reversing direction.",
    difficulty: 1,
  },
  {
    id: "ph-q18",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-energy",
    statement: "In a perfectly elastic collision, both momentum and kinetic energy are conserved.",
    answer: true,
    explanation:
      "True. Elastic collisions conserve both momentum and kinetic energy. Inelastic collisions conserve momentum but lose kinetic energy (to heat, deformation, sound).",
    difficulty: 1,
  },
  {
    id: "ph-q19",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-energy",
    statement: "Impulse equals the change in an object's momentum.",
    answer: true,
    explanation:
      "True. Impulse (J = F·Δt) equals the change in momentum (Δp). A longer contact time reduces the force for the same momentum change — the principle behind airbags.",
    difficulty: 1,
  },
  {
    id: "ph-q20",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-kinematics",
    statement: "A heavier object falls faster than a lighter one in the absence of air resistance.",
    answer: false,
    explanation:
      "In a vacuum all objects fall with the same acceleration g, independent of mass. Air resistance, not gravity, is what makes a feather fall slower than a coin in air.",
    difficulty: 1,
  },
  {
    id: "ph-q21",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-statics",
    statement: "An object floats when the buoyant force equals its weight.",
    answer: true,
    explanation:
      "True. At floating equilibrium the upward buoyant force balances the object's weight; the object displaces exactly enough fluid for those forces to be equal.",
    difficulty: 1,
  },
  {
    id: "ph-q22",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-statics",
    statement: "Gauge pressure includes atmospheric pressure, while absolute pressure does not.",
    answer: false,
    explanation:
      "It's the reverse: ABSOLUTE pressure = gauge + atmospheric. Gauge pressure is measured relative to atmosphere (so it excludes it).",
    difficulty: 2,
  },
  {
    id: "ph-q23",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-dynamics",
    statement: "An ideal fluid is treated as incompressible and nonviscous.",
    answer: true,
    explanation:
      "True. The ideal-fluid model (used with the continuity equation and Bernoulli's principle) assumes incompressible, nonviscous, steady, laminar flow.",
    difficulty: 1,
  },
  {
    id: "ph-q24",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-dynamics",
    statement: "A higher Reynolds number indicates a greater tendency toward turbulent flow.",
    answer: true,
    explanation:
      "True. The Reynolds number compares inertial to viscous forces; high values favor turbulence, low values favor smooth laminar flow.",
    difficulty: 2,
  },
  {
    id: "ph-q25",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "Doubling the voltage across a fixed resistor doubles the current through it.",
    answer: true,
    explanation:
      "True. By Ohm's law (V = IR), at fixed R the current is directly proportional to voltage, so doubling V doubles I.",
    difficulty: 1,
  },
  {
    id: "ph-q26",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "The electric field points from regions of low potential toward regions of high potential.",
    answer: false,
    explanation:
      "The electric field points from HIGH to LOW potential — in the direction a positive test charge would accelerate (downhill in potential).",
    difficulty: 2,
  },
  {
    id: "ph-q27",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "The electric force between two point charges follows an inverse-square relationship with distance.",
    answer: true,
    explanation:
      "True. Coulomb's law: F = kq₁q₂/r². Doubling the separation cuts the force to one-quarter, just like gravity.",
    difficulty: 1,
  },
  {
    id: "ph-q28",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-sound",
    statement: "In a standing wave, nodes are points of zero displacement and antinodes are points of maximum displacement.",
    answer: true,
    explanation:
      "True. Standing waves form from interference; nodes never move (destructive) and antinodes oscillate with maximum amplitude (constructive).",
    difficulty: 2,
  },
  {
    id: "ph-q29",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-sound",
    statement: "Increasing the tension in a string decreases the speed of waves traveling along it.",
    answer: false,
    explanation:
      "Higher tension INCREASES wave speed (v = √(T/μ)). That's why tightening a guitar string raises its pitch.",
    difficulty: 2,
  },
  {
    id: "ph-q30",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-optics",
    statement: "When light passes from air into a denser medium like glass, it bends toward the normal.",
    answer: true,
    explanation:
      "True. Going into a higher-index (slower) medium, light bends toward the normal (Snell's law). Going into a less dense medium, it bends away from the normal.",
    difficulty: 2,
  },
  {
    id: "ph-q31",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-optics",
    statement: "Total internal reflection can occur when light travels from a higher-index medium to a lower-index one beyond the critical angle.",
    answer: true,
    explanation:
      "True. Past the critical angle, light from a denser medium is completely reflected rather than refracted — the principle behind fiber optics.",
    difficulty: 2,
  },
  {
    id: "ph-q32",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-optics",
    statement: "A real image can be projected onto a screen, whereas a virtual image cannot.",
    answer: true,
    explanation:
      "True. Real images form where light rays actually converge (projectable). Virtual images only appear to come from a point where rays diverge, so they can't be projected.",
    difficulty: 2,
  },
  {
    id: "ph-q33",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-energy",
    statement: "Mechanical energy is conserved in the presence of friction.",
    answer: false,
    explanation:
      "Friction is a nonconservative force that converts mechanical energy into heat, so total mechanical energy (KE + PE) is NOT conserved when friction acts.",
    difficulty: 1,
  },
  {
    id: "ph-q34",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "Capacitors in parallel add directly, like resistors in series.",
    answer: true,
    explanation:
      "True. Parallel capacitances add (C_total = C₁ + C₂ + …), the mirror image of resistors, which add in series. In series, capacitances combine reciprocally.",
    difficulty: 2,
  },
  {
    id: "ph-q35",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-statics",
    statement: "Pressure in a static fluid increases linearly with depth.",
    answer: true,
    explanation:
      "True. P = P₀ + ρgh, so for a fluid of constant density, pressure rises linearly as depth h increases.",
    difficulty: 1,
  },
];
