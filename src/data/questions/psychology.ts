import type { Question } from "@/lib/types";

export const psychologyQuestions: Question[] = [
  {
    id: "psy-q1",
    subject: "psychology",
    topicId: "psy-sensation",
    subtopicId: "psy-sens-thresholds",
    statement: "The absolute threshold is the minimum difference needed to detect a change between two stimuli.",
    answer: false,
    explanation:
      "That describes the DIFFERENCE threshold (just-noticeable difference). The ABSOLUTE threshold is the minimum stimulus intensity detectable 50% of the time.",
    difficulty: 1,
  },
  {
    id: "psy-q2",
    subject: "psychology",
    topicId: "psy-sensation",
    subtopicId: "psy-sens-thresholds",
    statement: "Weber's law states that the just-noticeable difference is a constant proportion of the original stimulus.",
    answer: true,
    explanation:
      "True. The JND scales with stimulus magnitude — you need a bigger absolute change to notice a difference when the baseline stimulus is already large.",
    difficulty: 2,
  },
  {
    id: "psy-q3",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-conditioning",
    statement: "Negative reinforcement decreases the likelihood of a behavior.",
    answer: false,
    explanation:
      "All REINFORCEMENT increases behavior. Negative reinforcement increases behavior by REMOVING an aversive stimulus (e.g., taking aspirin to remove a headache). Punishment is what decreases behavior.",
    difficulty: 2,
  },
  {
    id: "psy-q4",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-conditioning",
    statement: "In classical conditioning, a neutral stimulus becomes a conditioned stimulus after repeated pairing with an unconditioned stimulus.",
    answer: true,
    explanation:
      "True. Pavlov's dogs: the bell (neutral) paired with food (UCS) eventually elicited salivation on its own, becoming a conditioned stimulus producing a conditioned response.",
    difficulty: 1,
  },
  {
    id: "psy-q5",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-conditioning",
    statement: "Positive punishment involves removing a pleasant stimulus to decrease a behavior.",
    answer: false,
    explanation:
      "Positive punishment ADDS an aversive stimulus to decrease behavior. REMOVING a pleasant stimulus to decrease behavior is NEGATIVE punishment. 'Positive/negative' means add/remove.",
    difficulty: 2,
  },
  {
    id: "psy-q6",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-memory",
    statement: "Procedural memory is a form of implicit (non-declarative) long-term memory.",
    answer: true,
    explanation:
      "True. Procedural memory (skills like riding a bike) is implicit. Explicit/declarative memory covers episodic (events) and semantic (facts) memory.",
    difficulty: 2,
  },
  {
    id: "psy-q7",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-memory",
    statement: "Retroactive interference occurs when newly learned information disrupts the recall of older information.",
    answer: true,
    explanation:
      "True. Retroactive = new interferes with old. Proactive interference is the reverse: old information disrupts learning or recalling new information.",
    difficulty: 2,
  },
  {
    id: "psy-q8",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-biases",
    statement: "The availability heuristic involves judging the likelihood of an event by how easily examples come to mind.",
    answer: true,
    explanation:
      "True. People overestimate the probability of vivid or recent events (e.g., plane crashes) because such examples are mentally 'available.'",
    difficulty: 1,
  },
  {
    id: "psy-q9",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-sleep",
    statement: "Delta waves on an EEG are characteristic of REM sleep.",
    answer: false,
    explanation:
      "Delta waves dominate deep N3 (slow-wave) sleep. REM sleep shows low-amplitude, fast, beta-like activity ('paradoxical sleep') along with vivid dreaming and muscle atonia.",
    difficulty: 2,
  },
  {
    id: "psy-q10",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-sleep",
    statement: "During REM sleep, the body's voluntary muscles are largely paralyzed despite high brain activity.",
    answer: true,
    explanation:
      "True. REM is called paradoxical sleep because the brain is highly active (dreaming) while skeletal muscles are atonic, preventing us from acting out dreams.",
    difficulty: 1,
  },
];
