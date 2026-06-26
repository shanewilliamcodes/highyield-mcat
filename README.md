# HighYield — Gamified MCAT studying

Fast true/false drills with streaks and a leaderboard, plus clear, digestible
summaries of every high-yield MCAT topic (CARS excluded). Built to make content
review fast, competitive, and low-burnout.

## Features

- **Streak quiz** — rapid-fire true/false questions; build the longest correct
  streak you can. Every answer (right or wrong) shows a short explanation so
  you're actually learning.
- **Smart shuffle** — questions are shuffled and subjects are spread out so you
  never get the same item twice in a row or five of one discipline back to back.
- **Topic customization** — drill specific weak spots by toggling subjects and
  topics. Full-pool runs are leaderboard-eligible; custom runs are practice only.
- **Leaderboard** — longest all-topics streaks, backed by a pluggable store.
- **Learn** — condensed summaries organized as subject → topic → subtopic, with
  high-yield callouts, key terms, and mnemonics.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript · Tailwind 4
- Leaderboard storage adapter: local JSON file in dev; Vercel KV / Upstash Redis
  in production (set `KV_REST_API_URL` + `KV_REST_API_TOKEN`).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Content model

- `src/data/subjects/*` — subject → topic → subtopic hierarchy + summaries
- `src/data/questions/*` — the true/false question bank (one file per subject)
- `src/data/outline.ts` — lightweight topic outline for the quiz picker
- `src/lib/quiz.ts` — shuffle + anti-clustering deck logic
- `src/lib/leaderboard.ts` — storage adapter (file ⇄ KV)

The question pool and summaries are designed to grow — add entries to the data
files and they flow into the quiz and Learn pages automatically.

## Disclaimer

A free study aid. Summaries are condensed from openly available concepts (Khan
Academy, the AAMC content outline, standard textbooks) and reinforce — not
replace — full study resources. Not affiliated with the AAMC.
