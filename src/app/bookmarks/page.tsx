"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { allSubtopics } from "@/data/subjects";

interface Saved { kind: string; item_id: string; created_at: string; }

export default function BookmarksPage() {
  const { user, loading } = useAuth();
  const [saved, setSaved] = useState<Saved[]>([]);
  useEffect(() => { if (user) createClient().from("bookmarks").select("kind,item_id,created_at").order("created_at", { ascending: false }).then(({ data }) => setSaved((data as Saved[] | null) ?? [])); }, [user]);
  const lookup = useMemo(() => new Map(allSubtopics().map((row) => [row.subtopic.id, row])), []);

  if (loading) return <div className="container-page" style={{ paddingBlock: 64 }}>Loading bookmarks…</div>;
  if (!user) return <div className="container-page" style={{ paddingBlock: 64, maxWidth: 680 }}><h1>Bookmarks</h1><p style={{ color: "var(--ink-soft)" }}>Sign in to save summaries, questions, and passages across devices.</p><Link href="/account" className="btn btn-primary">Sign in</Link></div>;

  return <div className="container-page" style={{ paddingBlock: "40px 72px", maxWidth: 820 }}><span className="badge">Saved for later</span><h1 style={{ fontSize: 36, margin: "12px 0 8px" }}>Bookmarks</h1><p style={{ color: "var(--ink-soft)" }}>Your personal review shelf.</p>{saved.length === 0 ? <p style={{ paddingBlock: 30, color: "var(--ink-faint)" }}>Use the star beside any summary to save it here.</p> : <div style={{ display: "grid", gap: 10, marginTop: 26 }}>{saved.map((item) => { const row = lookup.get(item.item_id); return row ? <Link key={`${item.kind}-${item.item_id}`} href={`/learn/${row.subject.id}/${row.topic.id}`} className="card" style={{ padding: 18, display: "block" }}><span style={{ color: row.subject.accent, fontSize: 12, fontWeight: 700 }}>{row.subject.name} · {row.topic.name}</span><strong style={{ display: "block", marginTop: 5 }}>{row.subtopic.name}</strong></Link> : <div key={`${item.kind}-${item.item_id}`} className="card" style={{ padding: 18 }}><strong>{item.item_id}</strong><div style={{ color: "var(--ink-faint)", fontSize: 12 }}>{item.kind}</div></div>; })}</div>}</div>;
}
