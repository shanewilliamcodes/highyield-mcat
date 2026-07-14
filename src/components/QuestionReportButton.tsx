"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";

export function QuestionReportButton({ questionId }: { questionId: string }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("ambiguous");
  const [detail, setDetail] = useState("");
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");

  const submit = async () => {
    if (!user) return;
    setState("saving");
    const { error } = await createClient().from("question_reports").insert({ user_id: user.id, question_id: questionId, reason, detail });
    setState(error ? "error" : "done");
  };

  if (!open) return <button type="button" onClick={() => setOpen(true)} style={{ border: 0, background: "transparent", color: "var(--ink-faint)", cursor: "pointer", fontSize: 13 }}>Report question</button>;
  if (!user) return <span style={{ fontSize: 13, color: "var(--ink-soft)" }}><Link href="/account" style={{ color: "var(--brand)" }}>Sign in</Link> to report this question.</span>;
  if (state === "done") return <span style={{ fontSize: 13, color: "var(--green)" }}>Report submitted for review.</span>;

  return (
    <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
      <select value={reason} onChange={(e) => setReason(e.target.value)} style={{ padding: 9, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)" }}>
        <option value="ambiguous">Ambiguous wording</option><option value="incorrect">Incorrect answer</option><option value="typo">Typo or formatting</option><option value="duplicate">Duplicate concept</option><option value="other">Other</option>
      </select>
      <textarea value={detail} onChange={(e) => setDetail(e.target.value)} maxLength={1000} placeholder="Optional details" style={{ minHeight: 70, padding: 9, borderRadius: 8, border: "1px solid var(--border)", resize: "vertical" }} />
      <div style={{ display: "flex", gap: 8 }}><button className="btn btn-primary" onClick={() => void submit()} disabled={state === "saving"}>{state === "saving" ? "Sending…" : "Submit"}</button><button className="btn btn-ghost" onClick={() => setOpen(false)}>Cancel</button></div>
      {state === "error" && <span style={{ color: "var(--red)", fontSize: 13 }}>Could not submit the report.</span>}
    </div>
  );
}
