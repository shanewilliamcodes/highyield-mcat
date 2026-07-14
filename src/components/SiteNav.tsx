"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

const links = [
  { href: "/quiz", label: "Quiz" },
  { href: "/learn", label: "Learn" },
  { href: "/progress", label: "Progress" },
  { href: "/daily", label: "Daily", optional: true },
  { href: "/leaderboard", label: "Leaders", optional: true },
];

export function SiteNav() {
  const pathname = usePathname();
  const { user, profile } = useAuth();
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
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            fontSize: 19,
          }}
        >
          <span
            aria-hidden
            style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background:
                "linear-gradient(135deg, var(--brand), var(--brand-2))",
              display: "grid",
              placeItems: "center",
              color: "white",
              fontSize: 16,
              boxShadow: "0 6px 16px rgba(91,75,255,0.4)",
            }}
          >
            ⚡
          </span>
          <span className="site-brand-word">
            High<span style={{ color: "var(--brand)" }}>Yield</span>
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={l.optional ? "nav-optional" : undefined}
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
          <Link
            href="/account"
            aria-label={user ? "Account" : "Sign in"}
            title={user ? (profile?.display_name ?? "Account") : "Sign in"}
            style={{
              width: 36,
              height: 36,
              display: "grid",
              placeItems: "center",
              borderRadius: 999,
              marginLeft: 4,
              fontWeight: 800,
              background:
                pathname === "/account" ? "var(--brand)" : "var(--bg-soft)",
              color: pathname === "/account" ? "white" : "var(--ink-soft)",
              border: "1px solid var(--border)",
            }}
          >
            {user
              ? (
                  profile?.display_name?.[0] ??
                  user.email?.[0] ??
                  "A"
                ).toUpperCase()
              : "↪"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
