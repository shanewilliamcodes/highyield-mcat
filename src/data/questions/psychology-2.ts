import type { Question } from "@/lib/types";

// Psychology — batch 2. Sensation, learning/memory, cognition, plus
// development, motivation/emotion, and disorders.
export const psychologyQuestions2: Question[] = [
  {
    id: "psy-q11",
    subject: "psychology",
    topicId: "psy-sensation",
    subtopicId: "psy-sens-thresholds",
    statement: "Transduction is the process of converting physical stimulus energy into neural signals.",
    answer: true,
    explanation:
      "True. Sensory receptors transduce light, sound, pressure, or chemicals into action potentials the nervous system can interpret.",
    difficulty: 1,
  },
  {
    id: "psy-q12",
    subject: "psychology",
    topicId: "psy-sensation",
    subtopicId: "psy-sens-thresholds",
    statement: "Bottom-up processing starts with the whole concept and works down to the sensory details.",
    answer: false,
    explanation:
      "Bottom-up processing builds perception UP from raw sensory input. TOP-DOWN processing uses prior knowledge and expectations to interpret incoming data.",
    difficulty: 2,
  },
  {
    id: "psy-q13",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-conditioning",
    statement: "A variable-ratio reinforcement schedule produces high, steady response rates and is highly resistant to extinction.",
    answer: true,
    explanation:
      "True. Variable-ratio schedules (e.g., slot machines) reinforce after an unpredictable number of responses, generating fast, persistent responding that resists extinction.",
    difficulty: 2,
  },
  {
    id: "psy-q14",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-conditioning",
    statement: "Shaping reinforces successive approximations of a desired behavior.",
    answer: true,
    explanation:
      "True. Shaping gradually reinforces closer and closer approximations to a target behavior, a key operant technique for teaching complex actions.",
    difficulty: 1,
  },
  {
    id: "psy-q15",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-memory",
    statement: "The serial position effect describes better recall of items at the beginning and end of a list.",
    answer: true,
    explanation:
      "True. The primacy effect (beginning, into long-term memory) and recency effect (end, still in short-term memory) together produce the U-shaped serial position curve.",
    difficulty: 2,
  },
  {
    id: "psy-q16",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-memory",
    statement: "Long-term potentiation strengthens synaptic connections and is thought to underlie learning and memory.",
    answer: true,
    explanation:
      "True. Long-term potentiation (LTP) is a lasting increase in synaptic strength after repeated stimulation — a leading cellular mechanism for memory formation.",
    difficulty: 2,
  },
  {
    id: "psy-q17",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-biases",
    statement: "Functional fixedness is the tendency to see an object only in terms of its usual function.",
    answer: true,
    explanation:
      "True. Functional fixedness is a cognitive bias that blocks creative problem-solving by limiting how we think an object can be used.",
    difficulty: 2,
  },
  {
    id: "psy-q18",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-sleep",
    statement: "Most sleepwalking and night terrors occur during REM sleep.",
    answer: false,
    explanation:
      "Sleepwalking and night terrors occur during deep N3 (slow-wave, delta) sleep, not REM. REM is associated with vivid dreaming and muscle atonia, which prevents acting out.",
    difficulty: 2,
  },
  {
    id: "psy-q19",
    subject: "psychology",
    topicId: "psy-development",
    subtopicId: "psy-dev-theories",
    statement: "In Piaget's theory, object permanence develops during the sensorimotor stage.",
    answer: true,
    explanation:
      "True. Object permanence — knowing objects exist when out of sight — emerges in the sensorimotor stage (birth to ~2 years), Piaget's first stage.",
    difficulty: 2,
  },
  {
    id: "psy-q20",
    subject: "psychology",
    topicId: "psy-development",
    subtopicId: "psy-dev-theories",
    statement: "Vygotsky emphasized the role of social interaction and the zone of proximal development in learning.",
    answer: true,
    explanation:
      "True. Vygotsky's sociocultural theory stresses that cognitive development is driven by social interaction; the zone of proximal development is what a learner can do with guidance.",
    difficulty: 2,
  },
  {
    id: "psy-q21",
    subject: "psychology",
    topicId: "psy-development",
    subtopicId: "psy-dev-emotion",
    statement: "The James–Lange theory proposes that physiological arousal precedes and causes the experience of emotion.",
    answer: true,
    explanation:
      "True. James–Lange: a stimulus triggers bodily arousal, and our interpretation of that arousal IS the emotion ('I tremble, therefore I am afraid'). Cannon–Bard says arousal and emotion occur simultaneously.",
    difficulty: 2,
  },
  {
    id: "psy-q22",
    subject: "psychology",
    topicId: "psy-development",
    subtopicId: "psy-dev-emotion",
    statement: "According to Maslow's hierarchy, self-actualization needs must be met before physiological needs.",
    answer: false,
    explanation:
      "It's the opposite order: physiological needs form the BASE and must be met first; self-actualization sits at the TOP and is pursued only after lower needs are satisfied.",
    difficulty: 1,
  },
  {
    id: "psy-q23",
    subject: "psychology",
    topicId: "psy-development",
    subtopicId: "psy-dev-emotion",
    statement: "The Yerkes–Dodson law states that performance is best at a moderate level of arousal.",
    answer: true,
    explanation:
      "True. The Yerkes–Dodson law describes an inverted-U: too little or too much arousal impairs performance, while a moderate level is optimal.",
    difficulty: 2,
  },
  {
    id: "psy-q24",
    subject: "psychology",
    topicId: "psy-disorders",
    subtopicId: "psy-dis-categories",
    statement: "Positive symptoms of schizophrenia include hallucinations and delusions.",
    answer: true,
    explanation:
      "True. 'Positive' symptoms are additions to normal experience (hallucinations, delusions, disorganized speech). 'Negative' symptoms are losses (flat affect, avolition, social withdrawal).",
    difficulty: 2,
  },
  {
    id: "psy-q25",
    subject: "psychology",
    topicId: "psy-disorders",
    subtopicId: "psy-dis-categories",
    statement: "Major depressive disorder is classified as an anxiety disorder.",
    answer: false,
    explanation:
      "Major depressive disorder is a MOOD (depressive) disorder, not an anxiety disorder. Anxiety disorders include generalized anxiety, panic disorder, and phobias.",
    difficulty: 1,
  },
  {
    id: "psy-q26",
    subject: "psychology",
    topicId: "psy-disorders",
    subtopicId: "psy-dis-categories",
    statement: "The biomedical approach attributes psychological disorders primarily to biological factors like genetics and neurochemistry.",
    answer: true,
    explanation:
      "True. The biomedical model focuses on biological causes. The biopsychosocial model is broader, integrating biological, psychological, and social/cultural factors.",
    difficulty: 1,
  },
  {
    id: "psy-q27",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-biases",
    statement: "An algorithm guarantees a correct solution, while a heuristic is a faster mental shortcut that may not.",
    answer: true,
    explanation:
      "True. Algorithms are systematic procedures that ensure a solution; heuristics trade guaranteed accuracy for speed and can lead to errors or biases.",
    difficulty: 1,
  },
  {
    id: "psy-q28",
    subject: "psychology",
    topicId: "psy-sensation",
    subtopicId: "psy-sens-thresholds",
    statement: "Gestalt principles such as proximity and similarity describe how we organize sensory elements into wholes.",
    answer: true,
    explanation:
      "True. Gestalt psychology holds that we perceive organized wholes; principles like proximity, similarity, closure, and continuity govern how parts are grouped.",
    difficulty: 2,
  },
  {
    id: "psy-q29",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-conditioning",
    statement: "Observational learning involves acquiring behaviors by watching and imitating others.",
    answer: true,
    explanation:
      "True. Observational learning (Bandura) — illustrated by the Bobo doll study — shows that behaviors can be learned through modeling, without direct reinforcement.",
    difficulty: 1,
  },
  {
    id: "psy-q30",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-sleep",
    statement: "Dopamine is the primary neurotransmitter implicated in the reward and pleasure pathways.",
    answer: true,
    explanation:
      "True. Dopamine is central to reward, motivation, and reinforcement (the mesolimbic pathway), and is heavily involved in addiction.",
    difficulty: 1,
  },
];
