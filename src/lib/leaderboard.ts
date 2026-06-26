import "server-only";
import type { LeaderboardEntry } from "@/lib/types";
import fs from "node:fs/promises";
import path from "node:path";

const KEY = "highyield:leaderboard:v1";
const MAX_ENTRIES = 100;

/**
 * Storage is pluggable:
 *  - In production, set KV_REST_API_URL + KV_REST_API_TOKEN (Vercel KV /
 *    Upstash Redis). We talk to the REST command endpoint — no SDK needed.
 *  - Locally (or if those env vars are missing) we fall back to a JSON file
 *    under .data/ so the leaderboard works with zero setup during dev.
 */
const REST_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const useRedis = Boolean(REST_URL && REST_TOKEN);

async function redisCommand(command: (string | number)[]): Promise<unknown> {
  const res = await fetch(REST_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV command failed: ${res.status}`);
  const json = (await res.json()) as { result: unknown };
  return json.result;
}

const FILE = path.join(process.cwd(), ".data", "leaderboard.json");

async function readFileStore(): Promise<LeaderboardEntry[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    return JSON.parse(raw) as LeaderboardEntry[];
  } catch {
    return [];
  }
}

async function writeFileStore(entries: LeaderboardEntry[]): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(entries, null, 2), "utf8");
}

async function readAll(): Promise<LeaderboardEntry[]> {
  if (useRedis) {
    const raw = (await redisCommand(["GET", KEY])) as string | null;
    if (!raw) return [];
    try {
      return JSON.parse(raw) as LeaderboardEntry[];
    } catch {
      return [];
    }
  }
  return readFileStore();
}

async function writeAll(entries: LeaderboardEntry[]): Promise<void> {
  if (useRedis) {
    await redisCommand(["SET", KEY, JSON.stringify(entries)]);
    return;
  }
  await writeFileStore(entries);
}

function sortTrim(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  return entries
    .sort((a, b) => b.streak - a.streak || a.at - b.at)
    .slice(0, MAX_ENTRIES);
}

export async function getTop(limit = 25): Promise<LeaderboardEntry[]> {
  const all = sortTrim(await readAll());
  return all.slice(0, limit);
}

export async function submitScore(
  nameRaw: string,
  streak: number,
): Promise<{ rank: number | null; top: LeaderboardEntry[] }> {
  const name = nameRaw.trim().slice(0, 24) || "Anonymous";
  const entry: LeaderboardEntry = { name, streak, at: Date.now() };

  const all = sortTrim([...(await readAll()), entry]);
  await writeAll(all);

  const rankIdx = all.findIndex(
    (e) => e.name === entry.name && e.streak === entry.streak && e.at === entry.at,
  );
  return {
    rank: rankIdx >= 0 ? rankIdx + 1 : null,
    top: all.slice(0, 25),
  };
}

export const STORAGE_MODE = useRedis ? "redis" : "file";
