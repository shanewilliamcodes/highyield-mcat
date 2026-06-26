import type { Subject } from "@/lib/types";

export const psychology: Subject = {
  id: "psychology",
  name: "Psychology",
  short: "Psych",
  accent: "#a855f7",
  blurb:
    "Sensation, cognition, learning, memory, emotion, and development. The Psych/Soc section rewards vocabulary precision more than any other.",
  sections: ["Psych/Soc"],
  topics: [
    {
      id: "psy-sensation",
      name: "Sensation & Perception",
      blurb: "How raw stimuli become experience.",
      subtopics: [
        {
          id: "psy-sens-thresholds",
          name: "Thresholds & signal detection",
          summary: {
            highYield: "Absolute vs difference threshold and Weber's law are quick definitional points.",
            body: [
              { type: "list", items: [
                "Absolute threshold — minimum stimulus detectable 50% of the time.",
                "Difference threshold (JND) — smallest detectable change.",
                "Weber's law — the JND is a constant proportion of the original stimulus.",
                "Signal detection theory — detection depends on both sensitivity and response bias (hits, misses, false alarms).",
              ] },
              { type: "tip", text: "Sensory adaptation = decreased response to a constant stimulus (you stop noticing your socks)." },
            ],
          },
        },
      ],
    },
    {
      id: "psy-learning",
      name: "Learning & Memory",
      blurb: "Conditioning, reinforcement, and how memory is encoded.",
      subtopics: [
        {
          id: "psy-learn-conditioning",
          name: "Classical vs operant conditioning",
          summary: {
            highYield: "Reinforcement vs punishment (and positive vs negative) is a guaranteed, easily-confused question.",
            body: [
              { type: "p", text: "Classical (Pavlovian) — an automatic response gets paired with a new stimulus (NS+UCS→CR). Operant (Skinner) — behavior is shaped by consequences." },
              { type: "list", items: [
                "Positive reinforcement — ADD something good → behavior increases.",
                "Negative reinforcement — REMOVE something bad → behavior increases.",
                "Positive punishment — ADD something bad → behavior decreases.",
                "Negative punishment — REMOVE something good → behavior decreases.",
              ] },
              { type: "tip", text: "'Positive/negative' = add/remove, NOT good/bad. 'Reinforcement' always increases behavior; 'punishment' always decreases it." },
            ],
          },
        },
        {
          id: "psy-learn-memory",
          name: "Memory",
          summary: {
            body: [
              { type: "p", text: "Stages: encoding → storage → retrieval. The modal model: sensory → short-term/working (≈7 items, ~30 s) → long-term." },
              { type: "key", term: "LTM types", def: "Explicit/declarative (episodic events, semantic facts) vs implicit/non-declarative (procedural skills, conditioning)." },
              { type: "tip", text: "Decay, interference (proactive vs retroactive), and retrieval failure cause forgetting." },
            ],
          },
        },
      ],
    },
    {
      id: "psy-cognition",
      name: "Cognition & Consciousness",
      blurb: "Thinking, problem-solving, and states of awareness.",
      subtopics: [
        {
          id: "psy-cog-biases",
          name: "Heuristics & biases",
          summary: {
            body: [
              { type: "list", items: [
                "Availability heuristic — judge likelihood by how easily examples come to mind.",
                "Representativeness heuristic — judge by similarity to a prototype (ignores base rates).",
                "Confirmation bias — seek info that confirms existing beliefs.",
              ] },
            ],
          },
        },
        {
          id: "psy-cog-sleep",
          name: "Sleep & consciousness",
          summary: {
            highYield: "EEG waves by stage and REM features are commonly tested.",
            body: [
              { type: "p", text: "Sleep cycles through stages ~every 90 min. EEG progression: awake (beta) → relaxed (alpha) → N1 (theta) → N2 (sleep spindles, K-complexes) → N3 (delta, deep) → REM." },
              { type: "tip", text: "REM = vivid dreaming, paradoxical (brain active, body paralyzed). Beta = alert; delta = deepest sleep." },
            ],
          },
        },
      ],
    },
    {
      id: "psy-development",
      name: "Development & Motivation",
      blurb: "How people change over the lifespan and what drives behavior.",
      subtopics: [
        { id: "psy-dev-theories", name: "Developmental theories" },
        { id: "psy-dev-emotion", name: "Emotion & motivation theories" },
      ],
    },
    {
      id: "psy-disorders",
      name: "Psychological Disorders",
      blurb: "Major categories and the biomedical vs biopsychosocial view.",
      subtopics: [
        { id: "psy-dis-categories", name: "Categories of disorders" },
      ],
    },
  ],
};
