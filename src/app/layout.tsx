import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import Link from "next/link";
import { AuthProvider } from "@/components/AuthProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HighYield — Gamified MCAT studying",
  description:
    "Fast true/false drills with streaks and a leaderboard, plus clear, digestible summaries of every high-yield MCAT topic. Study without the burnout.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        <AuthProvider>
          <SiteNav />
          <main>{children}</main>
          <footer className="container-page" style={{ padding: "48px 20px", color: "var(--ink-faint)", fontSize: 13 }}>
          <p style={{ maxWidth: 620, lineHeight: 1.6 }}>
            HighYield is a free study aid. Summaries are condensed from openly
            available concepts (Khan Academy, AAMC content outline, and standard
            textbooks) and are meant to reinforce — not replace — full study
            resources. Not affiliated with the AAMC.
          </p>
          <Link href="/sources" style={{ color: "var(--brand)", fontWeight: 600 }}>
            Sources & methodology
          </Link>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
