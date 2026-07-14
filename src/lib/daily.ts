import { ALL_QUESTIONS } from "@/data/questions";

function hash(input: string) {
  let value = 2166136261;
  for (let i = 0; i < input.length; i++) { value ^= input.charCodeAt(i); value = Math.imul(value, 16777619); }
  return value >>> 0;
}

function random(seed: number) {
  let state = seed || 1;
  return () => { state = Math.imul(1664525, state) + 1013904223; return (state >>> 0) / 4294967296; };
}

export function getDailyChallenge(date: string) {
  const rand = random(hash(`highyield-${date}`));
  const bySubject = new Map<string, typeof ALL_QUESTIONS>();
  for (const question of ALL_QUESTIONS) {
    const list = bySubject.get(question.subject) ?? [];
    list.push(question);
    bySubject.set(question.subject, list);
  }
  const chosen = [...bySubject.values()].flatMap((pool) => {
    const copy = [...pool];
    for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
    return copy.slice(0, 3);
  });
  for (let i = chosen.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [chosen[i], chosen[j]] = [chosen[j], chosen[i]]; }
  return chosen.slice(0, 20);
}

export function utcDate() { return new Date().toISOString().slice(0, 10); }
