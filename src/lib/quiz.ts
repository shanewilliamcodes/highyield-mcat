import type { Question } from "@/lib/types";

/** Standard in-place Fisher–Yates shuffle (returns a new array). */
export function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Build a shuffled deck that spreads subjects out so you don't get long runs
 * of the same discipline. We shuffle within each subject, then repeatedly emit
 * from the subject with the most remaining cards that isn't the one we just
 * played — a simple, effective anti-clustering interleave.
 */
export function buildDeck(questions: Question[]): Question[] {
  if (questions.length <= 2) return shuffle(questions);

  const buckets = new Map<string, Question[]>();
  for (const q of shuffle(questions)) {
    const list = buckets.get(q.subject) ?? [];
    list.push(q);
    buckets.set(q.subject, list);
  }

  const deck: Question[] = [];
  let last: string | null = null;

  while (deck.length < questions.length) {
    // Candidate subjects sorted by remaining count, excluding the last-played
    // subject when an alternative exists.
    const entries = [...buckets.entries()].filter(([, list]) => list.length > 0);
    entries.sort((a, b) => b[1].length - a[1].length);

    const pick = entries.find(([subject]) => subject !== last) ?? entries[0];
    if (!pick) break;

    const [subject, list] = pick;
    deck.push(list.shift()!);
    last = subject;
  }

  return deck;
}

/**
 * Endless deck cursor. When the deck is exhausted it reshuffles, making sure
 * the first card of the new deck isn't the same question that just ended the
 * previous one. Keeps play feeling fresh without repeating the same item back
 * to back.
 */
export class QuizDeck {
  private pool: Question[];
  private deck: Question[] = [];
  private idx = 0;
  private lastId: string | null = null;

  constructor(pool: Question[]) {
    this.pool = pool;
    this.reshuffle();
  }

  private reshuffle() {
    let next = buildDeck(this.pool);
    if (next.length > 1 && next[0].id === this.lastId) {
      // rotate so we don't immediately repeat
      next = [...next.slice(1), next[0]];
    }
    this.deck = next;
    this.idx = 0;
  }

  next(): Question {
    if (this.idx >= this.deck.length) this.reshuffle();
    const q = this.deck[this.idx];
    this.idx += 1;
    this.lastId = q.id;
    return q;
  }

  get size() {
    return this.pool.length;
  }
}
