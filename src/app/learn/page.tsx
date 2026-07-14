import { SUBJECTS } from "@/data/subjects";
import { LearnHub } from "@/components/LearnHub";

export const metadata = {
  title: "Learn — HighYield",
  description: "Clear, digestible summaries of every high-yield MCAT topic.",
};

export default function LearnIndex() {
  const subjects = SUBJECTS.map((subject) => ({
    ...subject,
    topics: subject.topics.map((topic) => ({
      ...topic,
      subtopics: topic.subtopics.map((subtopic) => ({
        id: subtopic.id,
        name: subtopic.name,
        searchable: JSON.stringify(subtopic.summary ?? {}),
      })),
    })),
  }));
  return <LearnHub subjects={subjects} />;
}
