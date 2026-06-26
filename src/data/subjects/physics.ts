import type { Subject } from "@/lib/types";

export const physics: Subject = {
  id: "physics",
  name: "Physics",
  short: "Physics",
  accent: "#6366f1",
  blurb:
    "Mechanics, fluids, thermodynamics, electricity, waves, and optics — applied to biological systems in the Chem/Phys section.",
  sections: ["Chem/Phys"],
  topics: [
    {
      id: "ph-mechanics",
      name: "Mechanics",
      blurb: "Forces, energy, and motion.",
      subtopics: [
        {
          id: "ph-mech-kinematics",
          name: "Kinematics & forces",
          summary: {
            highYield: "Newton's laws and free-body reasoning underpin a huge fraction of physics passages.",
            body: [
              { type: "list", items: [
                "Newton's 1st — inertia: no net force, no change in motion.",
                "Newton's 2nd — F = ma; net force causes acceleration.",
                "Newton's 3rd — equal and opposite reaction forces (on different objects).",
              ] },
              { type: "tip", text: "On an incline: the component of gravity along the slope is mg·sinθ; perpendicular (sets normal force) is mg·cosθ." },
            ],
          },
        },
        {
          id: "ph-mech-energy",
          name: "Work & energy",
          summary: {
            highYield: "Conservation of energy is a recurring shortcut — use it instead of kinematics when possible.",
            body: [
              { type: "p", text: "Work = F·d·cosθ. The work–energy theorem: net work = ΔKE. KE = ½mv²; gravitational PE = mgh." },
              { type: "key", term: "Conservation of energy", def: "Without friction, mechanical energy (KE + PE) is constant. Friction/air resistance convert it to heat (nonconservative)." },
              { type: "tip", text: "Power = work/time = Fv. A 'how fast can it deliver energy' question is a power question." },
            ],
          },
        },
      ],
    },
    {
      id: "ph-fluids",
      name: "Fluids",
      blurb: "Pressure, buoyancy, and flow — heavily tested for physiology.",
      subtopics: [
        {
          id: "ph-fluid-statics",
          name: "Fluid statics",
          summary: {
            highYield: "Buoyancy and hydrostatic pressure are MCAT favorites.",
            body: [
              { type: "p", text: "Hydrostatic pressure P = ρgh depends only on depth, not container shape. Pascal's principle: pressure applied to an enclosed fluid transmits undiminished (hydraulic lift)." },
              { type: "key", term: "Archimedes' principle", def: "Buoyant force = weight of displaced fluid = ρ_fluid·V_displaced·g. Object floats if its average density < fluid density." },
            ],
          },
        },
        {
          id: "ph-fluid-dynamics",
          name: "Fluid dynamics",
          summary: {
            body: [
              { type: "list", items: [
                "Continuity — A₁v₁ = A₂v₂: narrower pipe → faster flow.",
                "Bernoulli — faster flow → lower pressure (energy conservation for fluids).",
              ] },
              { type: "tip", text: "Bernoulli explains why a clogged/narrowed artery has faster, lower-pressure flow at the constriction." },
            ],
          },
        },
      ],
    },
    {
      id: "ph-electricity",
      name: "Electricity & Magnetism",
      blurb: "Charges, circuits, and fields.",
      subtopics: [
        {
          id: "ph-elec-circuits",
          name: "Circuits",
          summary: {
            highYield: "Series vs parallel rules are quick, reliable points.",
            body: [
              { type: "p", text: "Ohm's law: V = IR. Power: P = IV = I²R = V²/R." },
              { type: "list", items: [
                "Series — same current; resistances add; voltage divides.",
                "Parallel — same voltage; reciprocals of resistance add (total R drops); current divides.",
              ] },
            ],
          },
        },
      ],
    },
    {
      id: "ph-waves",
      name: "Waves, Sound & Optics",
      blurb: "Periodic motion, sound, and light.",
      subtopics: [
        {
          id: "ph-wave-sound",
          name: "Sound & Doppler",
          summary: {
            body: [
              { type: "p", text: "Sound is a longitudinal pressure wave; it needs a medium and travels fastest in solids. Intensity in decibels is logarithmic." },
              { type: "key", term: "Doppler effect", def: "Source and observer approaching → higher perceived frequency; receding → lower. Think of the pitch drop as an ambulance passes." },
            ],
          },
        },
        {
          id: "ph-wave-optics",
          name: "Optics",
          summary: {
            highYield: "Lens/mirror sign conventions trip people up — drill them.",
            body: [
              { type: "p", text: "Thin lens / mirror equation: 1/f = 1/o + 1/i. Magnification m = −i/o." },
              { type: "tip", text: "Converging lens & concave mirror: f positive. Diverging lens & convex mirror: f negative. Positive image distance = real image; negative = virtual." },
            ],
          },
        },
      ],
    },
  ],
};
