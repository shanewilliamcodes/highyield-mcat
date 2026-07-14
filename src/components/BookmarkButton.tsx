"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";

export function BookmarkButton({ kind, itemId }: { kind: "subtopic" | "question" | "passage"; itemId: string }) {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!user) return;
    createClient().from("bookmarks").select("item_id").eq("user_id", user.id).eq("kind", kind).eq("item_id", itemId).maybeSingle()
      .then(({ data }) => setSaved(Boolean(data)));
  }, [itemId, kind, user]);

  const toggle = async () => {
    if (!user) { window.location.href = "/account"; return; }
    const supabase = createClient();
    if (saved) await supabase.from("bookmarks").delete().eq("user_id", user.id).eq("kind", kind).eq("item_id", itemId);
    else await supabase.from("bookmarks").insert({ user_id: user.id, kind, item_id: itemId });
    setSaved(!saved);
  };

  return <button type="button" onClick={() => void toggle()} title={saved ? "Remove bookmark" : "Bookmark"} aria-label={saved ? "Remove bookmark" : "Bookmark"} style={{ marginLeft: "auto", border: "1px solid var(--border)", background: saved ? "var(--brand)" : "var(--surface)", color: saved ? "white" : "var(--ink-soft)", width: 34, height: 34, borderRadius: 8, cursor: "pointer", fontSize: 17 }}>{saved ? "★" : "☆"}</button>;
}
