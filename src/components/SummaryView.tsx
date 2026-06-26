import type { ContentSummary } from "@/lib/types";

export function SummaryView({ summary, accent }: { summary: ContentSummary; accent: string }) {
  return (
    <div className="prose-block">
      {summary.highYield && (
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
            padding: "12px 14px",
            borderRadius: 12,
            background: `${accent}12`,
            border: `1px solid ${accent}33`,
            marginBottom: 18,
          }}
        >
          <span style={{ fontSize: 16 }}>⭐</span>
          <p style={{ margin: 0, color: "var(--ink)", fontWeight: 600, fontSize: 14, lineHeight: 1.55 }}>
            <span style={{ color: accent, fontWeight: 700 }}>High yield: </span>
            {summary.highYield}
          </p>
        </div>
      )}

      {summary.body.map((block, i) => {
        switch (block.type) {
          case "h":
            return <h4 key={i}>{block.text}</h4>;
          case "p":
            return <p key={i}>{block.text}</p>;
          case "list":
            return (
              <ul key={i} style={{ margin: "0 0 14px", paddingLeft: 18, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                {block.items.map((it, j) => (
                  <li key={j} style={{ marginBottom: 6 }}>{it}</li>
                ))}
              </ul>
            );
          case "key":
            return (
              <div
                key={i}
                style={{
                  padding: "12px 14px",
                  borderLeft: `3px solid ${accent}`,
                  background: "var(--surface-2)",
                  borderRadius: "0 10px 10px 0",
                  margin: "0 0 14px",
                }}
              >
                <strong style={{ color: "var(--ink)", fontSize: 14 }}>{block.term}: </strong>
                <span style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>{block.def}</span>
              </div>
            );
          case "tip":
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 8,
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "rgba(245,165,36,0.10)",
                  margin: "0 0 14px",
                }}
              >
                <span>💡</span>
                <span style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>{block.text}</span>
              </div>
            );
        }
      })}
    </div>
  );
}
