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
        {
          id: "psy-dev-theories",
          name: "Developmental theories",
          summary: {
            highYield: "Match the theorist to the stages — Piaget, Erikson, Kohlberg, Vygotsky are the big four.",
            body: [
              { type: "list", items: [
                "Piaget (cognitive) — sensorimotor (object permanence), preoperational (egocentrism), concrete operational (conservation), formal operational (abstract logic).",
                "Erikson (psychosocial) — 8 stages, each a conflict (e.g., trust vs mistrust; identity vs role confusion in adolescence).",
                "Kohlberg (moral) — preconventional (punishment/reward), conventional (social approval/law), postconventional (abstract principles).",
                "Vygotsky (sociocultural) — learning is social; the zone of proximal development is what a child can do with guidance.",
              ] },
              { type: "tip", text: "Piaget = stages you reach on your own; Vygotsky = development driven by social interaction and scaffolding." },
            ],
          },
        },
        {
          id: "psy-dev-emotion",
          name: "Emotion & motivation theories",
          summary: {
            highYield: "The three emotion theories differ on the ORDER of stimulus, arousal, and feeling.",
            body: [
              { type: "h", text: "Theories of emotion" },
              { type: "list", items: [
                "James–Lange — arousal first, then emotion ('I tremble, so I'm afraid').",
                "Cannon–Bard — arousal and emotion occur simultaneously and independently.",
                "Schachter–Singer (two-factor) — arousal + cognitive LABEL of that arousal = emotion.",
              ] },
              { type: "key", term: "Motivation", def: "Drive-reduction theory (reduce internal tension to reach homeostasis), arousal theory (seek an optimal level — Yerkes–Dodson inverted U), and Maslow's hierarchy (physiological → safety → love → esteem → self-actualization)." },
              { type: "tip", text: "Yerkes–Dodson: moderate arousal is best; hard tasks favor lower arousal, easy tasks tolerate higher arousal." },
            ],
          },
        },
      ],
    },
    {
      id: "psy-disorders",
      name: "Psychological Disorders",
      blurb: "Major categories and the biomedical vs biopsychosocial view.",
      subtopics: [
        {
          id: "psy-dis-categories",
          name: "Categories of disorders",
          summary: {
            highYield: "Know the major DSM categories and the positive/negative symptom split for schizophrenia.",
            body: [
              { type: "list", items: [
                "Depressive & bipolar — major depressive disorder, persistent depressive disorder, bipolar I/II (manic and depressive episodes).",
                "Anxiety — generalized anxiety, panic disorder, phobias; excessive fear/worry.",
                "Obsessive-compulsive & related — intrusive obsessions and compulsive rituals.",
                "Trauma — PTSD after a traumatic event.",
                "Schizophrenia spectrum — psychosis with positive and negative symptoms.",
                "Personality disorders — enduring maladaptive patterns (e.g., borderline, antisocial).",
              ] },
              { type: "key", term: "Positive vs negative symptoms", def: "Positive = ADD to normal experience (hallucinations, delusions, disorganized speech). Negative = SUBTRACT from it (flat affect, avolition, social withdrawal)." },
              { type: "tip", text: "Biomedical model = disorders are biological (genes, neurotransmitters). Biopsychosocial model = biology + psychology + social/cultural context together." },
            ],
          },
        },
      ],
    },
    {
      id: "psy-biological",
      name: "Biological Bases of Behavior",
      blurb: "Neurons, neurotransmitters, and the brain regions behind behavior.",
      subtopics: [
        {
          id: "psy-bio-neurotransmitters",
          name: "Neurotransmitters",
          summary: {
            highYield: "Match each neurotransmitter to its main role — heavily tested on Psych/Soc.",
            body: [
              { type: "list", items: [
                "Dopamine — reward, motivation, movement (↓ in Parkinson's, dysregulated in schizophrenia/addiction).",
                "Serotonin — mood, sleep, appetite (targeted by SSRIs for depression).",
                "Acetylcholine — muscle activation and memory (↓ in Alzheimer's).",
                "Norepinephrine — alertness and the fight-or-flight response.",
                "GABA — the main inhibitory neurotransmitter (calming).",
                "Glutamate — the main excitatory neurotransmitter (learning, LTP).",
              ] },
              { type: "tip", text: "Endorphins are natural painkillers ('endogenous morphine') tied to pain relief and pleasure." },
            ],
          },
        },
        {
          id: "psy-bio-brain",
          name: "Brain regions",
          summary: {
            highYield: "Localize function — 'which structure does X' is a frequent question.",
            body: [
              { type: "list", items: [
                "Frontal lobe — executive function, planning, voluntary movement, personality.",
                "Amygdala — fear and emotional processing.",
                "Hippocampus — formation of new long-term memories.",
                "Hypothalamus — homeostasis: hunger, thirst, temperature, hormones (the 'four F's').",
                "Cerebellum — coordination, balance, motor learning.",
                "Medulla — vital autonomic functions (breathing, heart rate).",
              ] },
              { type: "key", term: "Cortex lobes", def: "Occipital = vision; temporal = hearing and language (Wernicke's); parietal = touch/spatial; frontal = movement and Broca's (speech production)." },
            ],
          },
        },
      ],
    },
  ],
};
