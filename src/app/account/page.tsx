"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";

export default function AccountPage() {
  const { user, profile, loading, refreshProfile } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const authenticate = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    const supabase = createClient();
    const result = mode === "signup"
      ? await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName.trim() } } })
      : await supabase.auth.signInWithPassword({ email, password });
    setSaving(false);
    if (result.error) setMessage(result.error.message);
    else if (mode === "signup" && !result.data.session) setMessage("Check your email to confirm your account, then sign in.");
    else setMessage("Signed in.");
  };

  const updateProfile = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;
    const form = new FormData(event.currentTarget);
    const nextName = String(form.get("name") ?? "").trim();
    const dailyGoal = Number(form.get("goal"));
    const { error } = await createClient().from("profiles").update({
      display_name: nextName.slice(0, 24),
      daily_goal: dailyGoal,
      updated_at: new Date().toISOString(),
    }).eq("user_id", user.id);
    setMessage(error?.message ?? "Profile updated.");
    if (!error) await refreshProfile();
  };

  if (loading) return <div className="container-page" style={{ paddingBlock: 64 }}>Loading account…</div>;

  if (user) {
    return (
      <div className="container-page" style={{ paddingBlock: "44px 72px", maxWidth: 760 }}>
        <span className="badge">Study account</span>
        <h1 style={{ fontSize: 36, margin: "14px 0 8px" }}>{profile?.display_name ?? "Your account"}</h1>
        <p style={{ color: "var(--ink-soft)", marginTop: 0 }}>{user.email}</p>
        <form onSubmit={updateProfile} className="card" style={{ padding: 22, display: "grid", gap: 16, marginTop: 26 }}>
          <label style={{ display: "grid", gap: 7, fontWeight: 650 }}>
            Display name
            <input name="name" required minLength={2} maxLength={24} defaultValue={profile?.display_name} style={inputStyle} />
          </label>
          <label style={{ display: "grid", gap: 7, fontWeight: 650 }}>
            Daily question goal
            <input name="goal" type="number" min={1} max={200} defaultValue={profile?.daily_goal ?? 20} style={inputStyle} />
          </label>
          <button className="btn btn-primary" type="submit">Save profile</button>
        </form>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <Link href="/progress" className="btn btn-ghost">View progress</Link>
          <Link href="/bookmarks" className="btn btn-ghost">Bookmarks</Link>
          <button className="btn btn-ghost" onClick={() => void createClient().auth.signOut()}>Sign out</button>
        </div>
        {message && <p role="status" style={{ color: "var(--ink-soft)" }}>{message}</p>}
      </div>
    );
  }

  return (
    <div className="container-page" style={{ paddingBlock: "44px 72px", maxWidth: 560 }}>
      <span className="badge">Sync your studying</span>
      <h1 style={{ fontSize: 36, margin: "14px 0 8px" }}>{mode === "signin" ? "Sign in" : "Create an account"}</h1>
      <p style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>Save mastery, review schedules, bookmarks, challenge scores, and study goals across devices.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, background: "var(--bg-soft)", padding: 5, borderRadius: 12, marginBlock: 22 }}>
        {(["signin", "signup"] as const).map((item) => (
          <button key={item} type="button" onClick={() => setMode(item)} style={{ padding: 10, border: 0, borderRadius: 9, background: mode === item ? "var(--surface)" : "transparent", fontWeight: 700, cursor: "pointer" }}>
            {item === "signin" ? "Sign in" : "Create account"}
          </button>
        ))}
      </div>
      <form onSubmit={authenticate} className="card" style={{ padding: 22, display: "grid", gap: 16 }}>
        {mode === "signup" && <label style={labelStyle}>Display name<input required minLength={2} maxLength={24} value={displayName} onChange={(e) => setDisplayName(e.target.value)} style={inputStyle} /></label>}
        <label style={labelStyle}>Email<input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} /></label>
        <label style={labelStyle}>Password<input required type="password" minLength={8} autoComplete={mode === "signin" ? "current-password" : "new-password"} value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} /></label>
        <button className="btn btn-primary" disabled={saving}>{saving ? "Working…" : mode === "signin" ? "Sign in" : "Create account"}</button>
      </form>
      {message && <p role="status" style={{ color: message.includes("Signed") || message.includes("Check") ? "var(--green)" : "var(--red)", lineHeight: 1.5 }}>{message}</p>}
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "grid", gap: 7, fontWeight: 650 };
const inputStyle: React.CSSProperties = { width: "100%", padding: "12px 13px", borderRadius: 9, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--ink)", font: "inherit" };
