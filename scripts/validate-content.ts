import { ALL_QUESTIONS } from "../src/data/questions";
import { PASSAGES } from "../src/data/passages";
import { SUBJECTS } from "../src/data/subjects";
import { getDailyChallenge } from "../src/lib/daily";

const failures: string[] = [];
const fail = (message: string) => failures.push(message);

const topicMap = new Map(
  SUBJECTS.flatMap((subject) =>
    subject.topics.map((topic) => [topic.id, { subject, topic }] as const),
  ),
);
const subtopicMap = new Map(
  SUBJECTS.flatMap((subject) =>
    subject.topics.flatMap((topic) =>
      topic.subtopics.map((subtopic) => [subtopic.id, { subject, topic, subtopic }] as const),
    ),
  ),
);

const duplicateValues = (values: string[]) => {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates];
};

if (ALL_QUESTIONS.length < 1000) fail(`Expected at least 1000 questions; found ${ALL_QUESTIONS.length}.`);

for (const id of duplicateValues(ALL_QUESTIONS.map((q) => q.id))) fail(`Duplicate question id: ${id}`);
for (const statement of duplicateValues(ALL_QUESTIONS.map((q) => q.statement.trim().toLowerCase()))) {
  fail(`Duplicate question statement: ${statement}`);
}

for (const question of ALL_QUESTIONS) {
  const topic = topicMap.get(question.topicId);
  if (!topic) {
    fail(`${question.id}: unknown topic ${question.topicId}`);
    continue;
  }
  if (topic.subject.id !== question.subject) fail(`${question.id}: topic belongs to ${topic.subject.id}, not ${question.subject}`);
  if (question.subtopicId) {
    const subtopic = subtopicMap.get(question.subtopicId);
    if (!subtopic) fail(`${question.id}: unknown subtopic ${question.subtopicId}`);
    else if (subtopic.topic.id !== question.topicId) fail(`${question.id}: subtopic does not belong to topic ${question.topicId}`);
  }
  if (question.statement.length < 20) fail(`${question.id}: statement is too short`);
  if (question.explanation.length < 35) fail(`${question.id}: explanation is too short`);
}

const passageQuestions = PASSAGES.flatMap((passage) => passage.questions);
for (const id of duplicateValues(PASSAGES.map((passage) => passage.id))) fail(`Duplicate passage id: ${id}`);
for (const id of duplicateValues([...ALL_QUESTIONS, ...passageQuestions].map((question) => question.id))) {
  fail(`Duplicate question id across quiz and passage banks: ${id}`);
}
for (const passage of PASSAGES) {
  if (passage.context.join(" ").length < 80) fail(`${passage.id}: passage context is too short`);
  if (passage.questions.length < 4) fail(`${passage.id}: expected at least 4 linked questions`);
  if (!passage.questions.some((question) => question.answer) || !passage.questions.some((question) => !question.answer)) {
    fail(`${passage.id}: answers are not balanced across true and false`);
  }
  for (const question of passage.questions) {
    const topic = topicMap.get(question.topicId);
    const subtopic = subtopicMap.get(question.subtopicId);
    if (!topic) fail(`${question.id}: unknown passage topic ${question.topicId}`);
    else if (topic.subject.id !== question.subject) fail(`${question.id}: passage topic belongs to ${topic.subject.id}, not ${question.subject}`);
    if (!subtopic) fail(`${question.id}: unknown passage subtopic ${question.subtopicId}`);
    else if (subtopic.topic.id !== question.topicId) fail(`${question.id}: passage subtopic does not belong to topic ${question.topicId}`);
    if (question.explanation.length < 35) fail(`${question.id}: passage explanation is too short`);
  }
}

const daily = getDailyChallenge("2026-07-14");
if (daily.length !== 20) fail(`Expected 20 daily challenge questions; found ${daily.length}.`);
if (new Set(daily.map((question) => question.id)).size !== daily.length) fail("Daily challenge contains duplicate questions.");
if (new Set(daily.map((question) => question.subject)).size !== SUBJECTS.length) fail("Daily challenge does not cover every subject.");

for (const subject of SUBJECTS) {
  const subjectQuestions = ALL_QUESTIONS.filter((q) => q.subject === subject.id);
  if (subjectQuestions.length < 100) fail(`${subject.name}: only ${subjectQuestions.length} questions`);
  for (const topic of subject.topics) {
    const questions = subjectQuestions.filter((q) => q.topicId === topic.id);
    if (questions.length < 4) fail(`${subject.name} / ${topic.name}: only ${questions.length} questions`);
    if (!questions.some((q) => q.answer) || !questions.some((q) => !q.answer)) {
      fail(`${subject.name} / ${topic.name}: answers are not balanced across true and false`);
    }
    for (const subtopic of topic.subtopics) {
      if (!subtopic.summary || subtopic.summary.body.length < 2) {
        fail(`${subject.name} / ${topic.name} / ${subtopic.name}: incomplete summary`);
      }
    }
  }
}

const trueCount = ALL_QUESTIONS.filter((q) => q.answer).length;
const trueShare = trueCount / ALL_QUESTIONS.length;
if (trueShare < 0.4 || trueShare > 0.6) fail(`Overall true-answer share is ${(trueShare * 100).toFixed(1)}%.`);

if (failures.length) {
  console.error(`Content validation failed (${failures.length}):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(
  `Validated ${ALL_QUESTIONS.length} quiz questions and ${passageQuestions.length} passage questions across ${SUBJECTS.length} subjects, ` +
    `${topicMap.size} topics, and ${subtopicMap.size} summarized subtopics. ` +
    `True/false split: ${trueCount}/${ALL_QUESTIONS.length - trueCount}.`,
);
