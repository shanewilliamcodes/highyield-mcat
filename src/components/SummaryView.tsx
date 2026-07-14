import type { ContentSummary } from "@/lib/types";

export function SummaryView({ summary, accent }: { summary: ContentSummary; accent: string }) {
  return (
    <div className="study-prose" style={{ "--study-accent": accent } as React.CSSProperties}>
      {summary.highYield && (
        <div className="study-high-yield">
          <span>High yield</span>
          <p>{summary.highYield}</p>
        </div>
      )}

      {summary.body.map((block, index) => {
        switch (block.type) {
          case "h":
            return <h3 key={index}>{block.text}</h3>;
          case "p":
            return <p key={index}>{block.text}</p>;
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
              </ul>
            );
          case "key":
            return (
              <dl key={index} className="study-definition">
                <dt>{block.term}</dt><dd>{block.def}</dd>
              </dl>
            );
          case "tip":
            return (
              <div key={index} className="study-test-day">
                <span>Test-day distinction</span><p>{block.text}</p>
              </div>
            );
        }
      })}
    </div>
  );
}
