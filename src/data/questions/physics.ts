import type { Question } from "@/lib/types";

export const physicsQuestions: Question[] = [
  {
    id: "ph-q1",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-kinematics",
    statement: "Newton's third law states that for every action there is an equal and opposite reaction acting on the same object.",
    answer: false,
    explanation:
      "The action and reaction forces act on DIFFERENT objects, not the same one. That's why they don't cancel out and the system can accelerate.",
    difficulty: 1,
  },
  {
    id: "ph-q2",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-kinematics",
    statement: "On a frictionless incline, the component of gravity directed along the slope is mg·sinθ.",
    answer: true,
    explanation:
      "True. Gravity splits into mg·sinθ along the incline (drives sliding) and mg·cosθ perpendicular to it (sets the normal force).",
    difficulty: 2,
  },
  {
    id: "ph-q3",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-energy",
    statement: "The work done by a force perpendicular to an object's displacement is zero.",
    answer: true,
    explanation:
      "True. Work = F·d·cosθ; when the force is perpendicular (θ = 90°), cosθ = 0, so no work is done. This is why centripetal force does no work on an orbiting body.",
    difficulty: 2,
  },
  {
    id: "ph-q4",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-energy",
    statement: "Kinetic energy is directly proportional to the square of an object's velocity.",
    answer: true,
    explanation:
      "True. KE = ½mv². Doubling the speed quadruples the kinetic energy — a key reason stopping distance grows so quickly with speed.",
    difficulty: 1,
  },
  {
    id: "ph-q5",
    subject: "physics",
    topicId: "ph-mechanics",
    subtopicId: "ph-mech-energy",
    statement: "Power is the amount of work done, independent of the time it takes.",
    answer: false,
    explanation:
      "Power is the RATE of doing work: P = W/t = Fv. The same work done in less time means more power.",
    difficulty: 1,
  },
  {
    id: "ph-q6",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-statics",
    statement: "Hydrostatic pressure at a given depth depends on the shape of the container.",
    answer: false,
    explanation:
      "Hydrostatic pressure P = ρgh depends only on fluid density and depth, not container shape or width (the hydrostatic paradox).",
    difficulty: 2,
  },
  {
    id: "ph-q7",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-statics",
    statement: "The buoyant force on a submerged object equals the weight of the fluid it displaces.",
    answer: true,
    explanation:
      "True — Archimedes' principle. Buoyant force = ρ_fluid · V_displaced · g. An object floats when its average density is less than the fluid's.",
    difficulty: 1,
  },
  {
    id: "ph-q8",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-dynamics",
    statement: "By the continuity equation, fluid speeds up as it flows into a narrower section of pipe.",
    answer: true,
    explanation:
      "True. A₁v₁ = A₂v₂, so a smaller cross-sectional area requires a higher velocity to conserve volume flow rate.",
    difficulty: 1,
  },
  {
    id: "ph-q9",
    subject: "physics",
    topicId: "ph-fluids",
    subtopicId: "ph-fluid-dynamics",
    statement: "According to Bernoulli's principle, regions of faster fluid flow have higher pressure.",
    answer: false,
    explanation:
      "Bernoulli's principle says faster flow corresponds to LOWER pressure (energy is conserved across pressure, kinetic, and potential terms).",
    difficulty: 2,
  },
  {
    id: "ph-q10",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "Adding resistors in series increases the total resistance of the circuit.",
    answer: true,
    explanation:
      "True. In series, resistances simply add (R_total = R₁ + R₂ + …), so total resistance rises. In parallel, total resistance drops below the smallest resistor.",
    difficulty: 1,
  },
  {
    id: "ph-q11",
    subject: "physics",
    topicId: "ph-electricity",
    subtopicId: "ph-elec-circuits",
    statement: "Components wired in parallel all experience the same voltage across them.",
    answer: true,
    explanation:
      "True. Parallel branches share the same two nodes, so the voltage across each is identical. Current divides among the branches.",
    difficulty: 1,
  },
  {
    id: "ph-q12",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-sound",
    statement: "Sound travels faster through a vacuum than through a solid.",
    answer: false,
    explanation:
      "Sound is a mechanical (longitudinal) wave and cannot travel through a vacuum at all. It travels fastest in solids, slower in liquids, and slowest in gases.",
    difficulty: 1,
  },
  {
    id: "ph-q13",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-sound",
    statement: "As a sound source moves toward a stationary observer, the observer perceives a higher frequency.",
    answer: true,
    explanation:
      "True — the Doppler effect. Approaching source compresses the wavefronts, raising the perceived frequency (pitch). Receding lowers it.",
    difficulty: 1,
  },
  {
    id: "ph-q14",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-optics",
    statement: "A converging (convex) lens has a positive focal length.",
    answer: true,
    explanation:
      "True. By convention, converging lenses and concave mirrors have positive focal lengths; diverging lenses and convex mirrors have negative ones.",
    difficulty: 2,
  },
  {
    id: "ph-q15",
    subject: "physics",
    topicId: "ph-waves",
    subtopicId: "ph-wave-optics",
    statement: "A negative image distance in the thin-lens equation indicates a real image.",
    answer: false,
    explanation:
      "A negative image distance indicates a VIRTUAL image (same side as the object). A positive image distance indicates a real image on the opposite side.",
    difficulty: 2,
  },
];
