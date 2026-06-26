import "server-only";
import type { LeaderboardEntry } from "@/lib/types";
import { put, head } from "@vercel/blob";
import fs from "node:fs/promises";
import path from "node:path";

const KEY = "highyield:leaderboard:v1";
const BLOB_PATH = "leaderboard/highyield-v1.json";
const MAX_ENTRIES = 100;

/**
 * Storage is pluggable, picked in priority order:
 *  1. Vercel Blob — set BLOB_READ_WRITE_TOKEN (auto-injected when a Blob store
 *     is connected to the project). Used in production. First-party, no extra
 *     account needed.
 *  2. Vercel KV / Upstash Redis — set KV_REST_API_URL + KV_REST_API_TOKEN.
 *  3. Local JSON file under .data/ — zero-setup fallback for dev.
 */
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const useBlob = Boolean(BLOB_TOKEN);

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

async function readBlobStore(): Promise<LeaderboardEntry[]> {
  try {
    const meta = await head(BLOB_PATH, { token: BLOB_TOKEN });
    // Cache-bust the public CDN URL so a read right after a write never serves
    // stale content.
    const fresh = `${meta.url}?t=${Date.now()}`;
    const res = await fetch(fresh, { cache: "no-store" });
    if (!res.ok) return [];
    return (await res.json()) as LeaderboardEntry[];
  } catch {
    // head() throws BlobNotFoundError before the first write — treat as empty.
    return [];
  }
}

async function writeBlobStore(entries: LeaderboardEntry[]): Promise<void> {
  await put(BLOB_PATH, JSON.stringify(entries), {
    access: "public",
    token: BLOB_TOKEN,
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  });
}

async function readAll(): Promise<LeaderboardEntry[]> {
  if (useBlob) return readBlobStore();
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
  if (useBlob) {
    await writeBlobStore(entries);
    return;
  }
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

export const STORAGE_MODE = useBlob ? "blob" : useRedis ? "redis" : "file";
