"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/quiz", label: "Quiz" },
  { href: "/learn", label: "Learn" },
  { href: "/leaderboard", label: "Leaderboard" },
];

export function SiteNav() {
  const pathname = usePathname();
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(180%) blur(12px)",
        background: "rgba(247,248,252,0.78)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container-page"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, letterSpacing: "-0.02em", fontSize: 19 }}>
          <span
            aria-hidden
            style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background: "linear-gradient(135deg, var(--brand), var(--brand-2))",
              display: "grid",
              placeItems: "center",
              color: "white",
              fontSize: 16,
              boxShadow: "0 6px 16px rgba(91,75,255,0.4)",
            }}
          >
            ⚡
          </span>
          High<span style={{ color: "var(--brand)" }}>Yield</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 15,
                  color: active ? "var(--brand)" : "var(--ink-soft)",
                  background: active ? "rgba(91,75,255,0.10)" : "transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
