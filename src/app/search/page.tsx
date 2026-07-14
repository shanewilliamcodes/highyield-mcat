"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { allSubtopics } from "@/data/subjects";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => allSubtopics().map((row) => ({ ...row, searchable: `${row.subject.name} ${row.topic.name} ${row.subtopic.name} ${JSON.stringify(row.subtopic.summary ?? {})}`.toLowerCase() })), []);
  const results = useMemo(() => { const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean); if (!words.length) return []; return rows.filter((row) => words.every((word) => row.searchable.includes(word))).slice(0, 40); }, [query, rows]);
  return <div className="container-page" style={{ paddingBlock: "40px 72px", maxWidth: 880 }}><span className="badge">111 summarized subtopics</span><h1 style={{ fontSize: 36, margin: "12px 0 8px" }}>Search the curriculum</h1><p style={{ color: "var(--ink-soft)" }}>Find a formula, pathway, definition, organ system, or theory.</p><input type="search" autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try: competitive inhibitor, renal, social capital…" style={{ width: "100%", marginBlock: 20, padding: "15px 17px", borderRadius: 10, border: "1px solid var(--border)", font: "inherit", fontSize: 17 }} />{query && <p style={{ color: "var(--ink-faint)", fontSize: 13 }}>{results.length} matching subtopics</p>}<div style={{ display: "grid", gap: 10 }}>{results.map((row) => <Link key={row.subtopic.id} href={`/learn/${row.subject.id}/${row.topic.id}`} className="card" style={{ padding: 18, display: "block" }}><span style={{ color: row.subject.accent, fontSize: 12, fontWeight: 700 }}>{row.subject.name} · {row.topic.name}</span><strong style={{ display: "block", marginTop: 4 }}>{row.subtopic.name}</strong><p style={{ color: "var(--ink-soft)", margin: "7px 0 0", lineHeight: 1.5, fontSize: 14 }}>{row.subtopic.summary?.highYield ?? "Open summary"}</p></Link>)}</div></div>;
}
