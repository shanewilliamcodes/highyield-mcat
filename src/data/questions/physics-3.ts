import type { Question } from "@/lib/types";

// Physics — batch 3. Adds thermodynamics and torque, plus more mechanics,
// electricity, and waves.
export const physicsQuestions3: Question[] = [
  {
    id: "ph-q36",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-heat",
    statement: "Temperature is a measure of the average kinetic energy of the particles in a substance.",
    answer: true,
    explanation:
      "True. Temperature reflects average particle kinetic energy. Heat, by contrast, is energy transferred between objects because of a temperature difference.",
    difficulty: 1,
  },
  {
    id: "ph-q37",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-heat",
    statement: "A substance with a high specific heat requires more energy to change its temperature.",
    answer: true,
    explanation:
      "True. From Q = mcΔT, a larger specific heat c means more heat is needed for a given temperature change — which is why water resists temperature swings.",
    difficulty: 1,
  },
  {
    id: "ph-q38",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-heat",
    statement: "During a phase change, the temperature of a substance remains constant even as heat is added.",
    answer: true,
    explanation:
      "True. Latent heat during melting or boiling goes into breaking intermolecular bonds, not raising temperature, so temperature is flat throughout the phase change.",
    difficulty: 2,
  },
  {
    id: "ph-q39",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-heat",
    statement: "Heat transfer by convection requires direct physical contact between two solids.",
    answer: false,
    explanation:
      "That describes CONDUCTION. Convection transfers heat through the bulk movement of a fluid (liquid or gas), and radiation transfers it via electromagnetic waves with no medium at all.",
    difficulty: 1,
  },
  {
    id: "ph-q40",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-laws",
    statement: "The first law of thermodynamics is a statement of conservation of energy.",
    answer: true,
    explanation:
      "True. ΔU = Q − W says the change in internal energy equals heat added minus work done by the system — energy is conserved, only transformed.",
    difficulty: 1,
  },
  {
    id: "ph-q41",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-laws",
    statement: "The second law of thermodynamics says the entropy of an isolated system tends to decrease over time.",
    answer: false,
    explanation:
      "The second law says total entropy of an isolated system tends to INCREASE (or stay the same) — disorder grows, and heat flows spontaneously from hot to cold.",
    difficulty: 2,
  },
  {
    id: "ph-q42",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-laws",
    statement: "In an adiabatic process, no heat is exchanged between the system and its surroundings.",
    answer: true,
    explanation:
      "True. Adiabatic means Q = 0; any change in internal energy comes entirely from work. (Isothermal, by contrast, holds temperature constant.)",
    difficulty: 2,
  },
  {
    id: "ph-q43",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-torque",
    statement: "Torque is maximized when a force is applied perpendicular to the lever arm.",
    answer: true,
    explanation:
      "True. τ = rF·sinθ is greatest at θ = 90° (sin 90° = 1). A force directed along the lever arm produces zero torque.",
    difficulty: 2,
  },
  {
    id: "ph-q44",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-torque",
    statement: "For an object in rotational equilibrium, the net torque about any pivot is zero.",
    answer: true,
    explanation:
      "True. Rotational equilibrium requires net torque = 0 (and net force = 0). Clockwise and counterclockwise torques must balance.",
    difficulty: 2,
  },
  {
    id: "ph-q45",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-kinematics",
    statement: "The acceleration due to gravity near Earth's surface is approximately 9.8 m/s².",
    answer: true,
    explanation:
      "True. g ≈ 9.8 m/s² downward near Earth's surface, independent of the object's mass in the absence of air resistance.",
    difficulty: 1,
  },
  {
    id: "ph-q46",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-energy",
    statement: "Momentum is conserved in all collisions, whether elastic or inelastic.",
    answer: true,
    explanation:
      "True. Total momentum is conserved in any collision with no external forces. Kinetic energy is conserved only in elastic collisions.",
    difficulty: 1,
  },
  {
    id: "ph-q47",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "Power dissipated by a resistor can be calculated as P = I²R.",
    answer: true,
    explanation:
      "True. Power equals P = IV = I²R = V²/R. These forms are interchangeable via Ohm's law (V = IR).",
    difficulty: 1,
  },
  {
    id: "ph-q48",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "Total resistance in a parallel circuit is always less than the smallest individual resistance.",
    answer: true,
    explanation:
      "True. Adding parallel paths provides more routes for current, so the equivalent resistance drops below even the smallest branch resistor.",
    difficulty: 2,
  },
  {
    id: "ph-q49",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-sound",
    statement: "The frequency of a wave equals its speed divided by its wavelength.",
    answer: true,
    explanation:
      "True. v = fλ, so f = v/λ. For a fixed wave speed, frequency and wavelength are inversely related.",
    difficulty: 1,
  },
  {
    id: "ph-q50",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-optics",
    statement: "The index of refraction of a medium is always less than 1.",
    answer: false,
    explanation:
      "The index of refraction n = c/v is always ≥ 1 for ordinary media, since light travels slower in a medium than in a vacuum (where n = 1).",
    difficulty: 2,
  },
  {
    id: "ph-q51",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-dynamics",
    statement: "Bernoulli's principle helps explain how an airplane wing generates lift.",
    answer: true,
    explanation:
      "True. Faster airflow over the curved top of a wing lowers the pressure there (Bernoulli), and the higher pressure underneath produces net upward lift.",
    difficulty: 2,
  },
  {
    id: "ph-q52",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-laws",
    statement: "In the first law, work done BY a gas on its surroundings is taken as positive W.",
    answer: true,
    explanation:
      "True (common physics convention). ΔU = Q − W, so when the gas expands and does work on the surroundings, W is positive and internal energy decreases (if Q = 0).",
    difficulty: 3,
  },
  {
    id: "ph-q53",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-kinematics",
    statement: "An object moving at constant velocity has a net force of zero acting on it.",
    answer: true,
    explanation:
      "True. Constant velocity means zero acceleration, so by Newton's second law (F = ma) the net force must be zero (Newton's first law).",
    difficulty: 1,
  },
  {
    id: "ph-q54",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "A higher resistance, for a fixed voltage, results in a smaller current.",
    answer: true,
    explanation:
      "True. By Ohm's law I = V/R, current is inversely proportional to resistance at constant voltage.",
    difficulty: 1,
  },
  {
    id: "ph-q55",
    subject: "physics",
    topicId: "ph-thermo",
    subtopicId: "ph-thermo-heat",
    statement: "Two objects in thermal equilibrium are at the same temperature.",
    answer: true,
    explanation:
      "True — the zeroth law of thermodynamics. Objects in thermal equilibrium exchange no net heat and share the same temperature.",
    difficulty: 1,
  },
];
