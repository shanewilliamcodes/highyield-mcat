"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { ALL_QUESTIONS } from "@/data/questions";
import { PASSAGES } from "@/data/passages";

interface Report {
  id: number;
  question_id: string;
  reason: string;
  detail: string;
  status: string;
  created_at: string;
}
const ADMIN = "shanewillb@gmail.com";

export default function ReportsPage() {
  const { user, loading } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const questionText = useMemo(
    () =>
      new Map([
        ...ALL_QUESTIONS.map((q) => [q.id, q.statement] as const),
        ...PASSAGES.flatMap((p) =>
          p.questions.map((q) => [q.id, q.statement] as const),
        ),
      ]),
    [],
  );

  const loadReports = async () => {
    const { data } = await createClient()
      .from("question_reports")
      .select("id,question_id,reason,detail,status,created_at")
      .order("created_at", { ascending: false });
    setReports((data as Report[] | null) ?? []);
  };
  useEffect(() => {
    if (user?.email !== ADMIN) return;
    const timer = window.setTimeout(() => void loadReports(), 0);
    return () => window.clearTimeout(timer);
  }, [user]);
  const update = async (id: number, status: string) => {
    await createClient()
      .from("question_reports")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id);
    await loadReports();
  };

  if (loading)
    return (
      <div className="container-page" style={{ paddingBlock: 64 }}>
        Checking access…
      </div>
    );
  if (user?.email !== ADMIN)
    return (
      <div className="container-page" style={{ paddingBlock: 64 }}>
        <h1>Not available</h1>
        <p style={{ color: "var(--ink-soft)" }}>
          This review queue is limited to the site administrator.
        </p>
      </div>
    );
  return (
    <div
      className="container-page"
      style={{ paddingBlock: "40px 72px", maxWidth: 900 }}
    >
      <span className="badge">Editorial workflow</span>
      <h1 style={{ fontSize: 36, margin: "12px 0 8px" }}>Question reports</h1>
      <p style={{ color: "var(--ink-soft)" }}>
        Review disputed cards and track each report to resolution.
      </p>
      <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
        {reports.length === 0 ? (
          <p style={{ color: "var(--ink-faint)" }}>No reports are waiting.</p>
        ) : (
          reports.map((report) => (
            <article key={report.id} className="card" style={{ padding: 20 }}>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span className="badge">{report.reason}</span>
                <span className="badge">{report.status}</span>
                <span
                  style={{
                    marginLeft: "auto",
                    color: "var(--ink-faint)",
                    fontSize: 12,
                  }}
                >
                  {new Date(report.created_at).toLocaleDateString()}
                </span>
              </div>
              <p style={{ fontWeight: 700, lineHeight: 1.5 }}>
                {questionText.get(report.question_id) ?? report.question_id}
              </p>
              {report.detail && (
                <p style={{ color: "var(--ink-soft)", lineHeight: 1.55 }}>
                  {report.detail}
                </p>
              )}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["reviewing", "resolved", "dismissed"].map((status) => (
                  <button
                    key={status}
                    className="btn btn-ghost"
                    onClick={() => void update(report.id, status)}
                  >
                    {status[0].toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
