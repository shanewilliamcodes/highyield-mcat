import type { Question } from "@/lib/types";

// Psychology — batch 3. Adds biological bases (neurotransmitters, brain),
// plus more learning, cognition, development, and disorders.
export const psychologyQuestions3: Question[] = [
  {
    id: "psy-q31",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-neurotransmitters",
    statement: "Dopamine is associated with reward, motivation, and motor control.",
    answer: true,
    explanation:
      "True. Dopamine drives reward and motivation and is essential for movement; its loss in the substantia nigra causes Parkinson's, and its dysregulation is linked to schizophrenia and addiction.",
    difficulty: 1,
  },
  {
    id: "psy-q32",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-neurotransmitters",
    statement: "GABA is the primary excitatory neurotransmitter in the brain.",
    answer: false,
    explanation:
      "GABA is the main INHIBITORY neurotransmitter (it calms neural activity). GLUTAMATE is the primary excitatory neurotransmitter.",
    difficulty: 2,
  },
  {
    id: "psy-q33",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-neurotransmitters",
    statement: "Low serotonin levels are associated with depression, and many antidepressants target serotonin.",
    answer: true,
    explanation:
      "True. Serotonin regulates mood, sleep, and appetite; SSRIs increase serotonin availability and are first-line treatments for depression.",
    difficulty: 1,
  },
  {
    id: "psy-q34",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-neurotransmitters",
    statement: "Acetylcholine plays an important role in muscle contraction and memory.",
    answer: true,
    explanation:
      "True. Acetylcholine activates skeletal muscle at the neuromuscular junction and is important for learning and memory; its loss is associated with Alzheimer's disease.",
    difficulty: 1,
  },
  {
    id: "psy-q35",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-brain",
    statement: "The hippocampus is critical for forming new long-term memories.",
    answer: true,
    explanation:
      "True. The hippocampus consolidates new explicit memories; damage to it (as in patient H.M.) impairs forming new long-term memories while sparing old ones.",
    difficulty: 1,
  },
  {
    id: "psy-q36",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-brain",
    statement: "The amygdala is primarily responsible for processing fear and emotional responses.",
    answer: true,
    explanation:
      "True. The amygdala is central to fear conditioning and emotional processing, part of the limbic system.",
    difficulty: 1,
  },
  {
    id: "psy-q37",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-brain",
    statement: "The cerebellum is mainly responsible for higher-order reasoning and decision-making.",
    answer: false,
    explanation:
      "The CEREBELLUM handles coordination, balance, and motor learning. Higher-order reasoning and decision-making are functions of the FRONTAL LOBE.",
    difficulty: 2,
  },
  {
    id: "psy-q38",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-brain",
    statement: "The hypothalamus helps regulate hunger, thirst, body temperature, and hormone release.",
    answer: true,
    explanation:
      "True. The hypothalamus maintains homeostasis (the 'four F's') and links the nervous and endocrine systems by controlling the pituitary gland.",
    difficulty: 1,
  },
  {
    id: "psy-q39",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-biases",
    statement: "Confirmation bias is the tendency to seek out information that supports one's existing beliefs.",
    answer: true,
    explanation:
      "True. Confirmation bias leads people to favor evidence that confirms their views and discount contradicting evidence.",
    difficulty: 1,
  },
  {
    id: "psy-q40",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-memory",
    statement: "Working memory has unlimited capacity and duration.",
    answer: false,
    explanation:
      "Working (short-term) memory is limited — roughly 7 ± 2 items for about 15–30 seconds without rehearsal. Long-term memory is the effectively unlimited store.",
    difficulty: 1,
  },
  {
    id: "psy-q41",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-conditioning",
    statement: "In classical conditioning, extinction occurs when the conditioned stimulus is repeatedly presented without the unconditioned stimulus.",
    answer: true,
    explanation:
      "True. Without continued pairing, the conditioned response weakens and disappears (extinction). It can briefly return later (spontaneous recovery).",
    difficulty: 2,
  },
  {
    id: "psy-q42",
    subject: "psychology",
    topicId: "psy-development",
    subtopicId: "psy-dev-theories",
    statement: "In Kohlberg's theory, the preconventional level bases morality on avoiding punishment and gaining rewards.",
    answer: true,
    explanation:
      "True. Preconventional morality centers on self-interest — avoiding punishment and seeking rewards — before progressing to conventional and postconventional reasoning.",
    difficulty: 2,
  },
  {
    id: "psy-q43",
    subject: "psychology",
    topicId: "psy-development",
    subtopicId: "psy-dev-emotion",
    statement: "The Cannon–Bard theory holds that physiological arousal and emotional experience occur simultaneously.",
    answer: true,
    explanation:
      "True. Cannon–Bard says a stimulus triggers arousal and the conscious emotion at the same time, independently — unlike James–Lange, where arousal comes first.",
    difficulty: 2,
  },
  {
    id: "psy-q44",
    subject: "psychology",
    topicId: "psy-disorders",
    subtopicId: "psy-dis-categories",
    statement: "Negative symptoms of schizophrenia include flat affect and social withdrawal.",
    answer: true,
    explanation:
      "True. Negative symptoms are deficits — flat affect, avolition, alogia, and social withdrawal — distinct from positive symptoms like hallucinations and delusions.",
    difficulty: 2,
  },
  {
    id: "psy-q45",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-sleep",
    statement: "Circadian rhythms are roughly 24-hour biological cycles influenced by light.",
    answer: true,
    explanation:
      "True. Circadian rhythms cycle about every 24 hours and are regulated by the suprachiasmatic nucleus, with melatonin release cued by darkness.",
    difficulty: 1,
  },
  {
    id: "psy-q46",
    subject: "psychology",
    topicId: "psy-sensation",
    subtopicId: "psy-sens-thresholds",
    statement: "Sensory adaptation is the increased sensitivity to a stimulus after prolonged exposure.",
    answer: false,
    explanation:
      "Sensory adaptation is a DECREASE in sensitivity (responsiveness) to a constant, unchanging stimulus — like no longer noticing a steady smell.",
    difficulty: 1,
  },
  {
    id: "psy-q47",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-neurotransmitters",
    statement: "Endorphins act as the body's natural pain relievers.",
    answer: true,
    explanation:
      "True. Endorphins ('endogenous morphine') reduce pain perception and produce feelings of pleasure, released during exercise and stress.",
    difficulty: 1,
  },
  {
    id: "psy-q48",
    subject: "psychology",
    topicId: "psy-biological",
    subtopicId: "psy-bio-brain",
    statement: "Broca's area is associated with speech production, and damage to it impairs the ability to speak fluently.",
    answer: true,
    explanation:
      "True. Broca's area (frontal lobe) controls speech production; damage causes Broca's (expressive) aphasia. Wernicke's area governs language comprehension.",
    difficulty: 2,
  },
  {
    id: "psy-q49",
    subject: "psychology",
    topicId: "psy-learning",
    subtopicId: "psy-learn-conditioning",
    statement: "A primary reinforcer is one that satisfies a basic biological need, like food or water.",
    answer: true,
    explanation:
      "True. Primary reinforcers are innately satisfying (food, water, warmth). Secondary (conditioned) reinforcers, like money, gain value through association.",
    difficulty: 1,
  },
  {
    id: "psy-q50",
    subject: "psychology",
    topicId: "psy-cognition",
    subtopicId: "psy-cog-biases",
    statement: "The representativeness heuristic can cause people to ignore base rates when judging probability.",
    answer: true,
    explanation:
      "True. Judging likelihood by how much something resembles a prototype can override actual statistical base rates, leading to systematic errors.",
    difficulty: 2,
  },
];
