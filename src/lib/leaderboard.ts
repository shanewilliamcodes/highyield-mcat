import "server-only";
import type { LeaderboardEntry } from "@/lib/types";
import { put, list, del } from "@vercel/blob";
import fs from "node:fs/promises";
import path from "node:path";

const KEY = "highyield:leaderboard:v1";
const MAX_ENTRIES = 100;
const PRUNE_AT = 130;

/**
 * Storage is pluggable, picked in priority order:
 *  1. Vercel Blob — set BLOB_READ_WRITE_TOKEN (auto-injected when a Blob store
 *     is connected). Each score is written as its own IMMUTABLE blob with the
 *     score encoded in the filename, and the board is read via list() — a fresh
 *     metadata call, not the CDN. This avoids the stale-cache / lost-write
 *     problems of overwriting a single JSON object in object storage.
 *  2. Vercel KV / Upstash Redis — set KV_REST_API_URL + KV_REST_API_TOKEN.
 *  3. Local JSON file under .data/ — zero-setup fallback for dev.
 */
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const useBlob = Boolean(BLOB_TOKEN);

const REST_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const useRedis = Boolean(REST_URL && REST_TOKEN);

/* ----------------------------- Blob backend ----------------------------- */

const SCORE_PREFIX = "scores/";

function encodeEntry(e: LeaderboardEntry, rand: string): string {
  // scores/<streak padded>_<at>_<rand>_<name base64url>.json
  const streak = String(e.streak).padStart(7, "0");
  const nameB64 = Buffer.from(e.name, "utf8").toString("base64url");
  return `${SCORE_PREFIX}${streak}_${e.at}_${rand}_${nameB64}.json`;
}

function decodeEntry(pathname: string): LeaderboardEntry | null {
  try {
    const core = pathname.slice(SCORE_PREFIX.length, -".json".length);
    const i1 = core.indexOf("_");
    const i2 = core.indexOf("_", i1 + 1);
    const i3 = core.indexOf("_", i2 + 1);
    if (i1 < 0 || i2 < 0 || i3 < 0) return null;
    const streak = Number(core.slice(0, i1));
    const at = Number(core.slice(i1 + 1, i2));
    const nameB64 = core.slice(i3 + 1);
    const name = Buffer.from(nameB64, "base64url").toString("utf8");
    if (!Number.isFinite(streak) || !Number.isFinite(at)) return null;
    return { name, streak, at };
  } catch {
    return null;
  }
}

async function readBlobEntries(): Promise<LeaderboardEntry[]> {
  const { blobs } = await list({
    prefix: SCORE_PREFIX,
    limit: 1000,
    token: BLOB_TOKEN,
  });
  return blobs
    .map((b) => decodeEntry(b.pathname))
    .filter((e): e is LeaderboardEntry => e !== null);
}

async function appendBlobEntry(e: LeaderboardEntry): Promise<void> {
  const rand = Math.random().toString(36).slice(2, 8);
  await put(encodeEntry(e, rand), "1", {
    access: "public",
    token: BLOB_TOKEN,
    addRandomSuffix: false,
    allowOverwrite: false,
    contentType: "text/plain",
  });
}

/** Keep the store from growing without bound: drop everything below the top N. */
async function pruneBlob(): Promise<void> {
  const { blobs } = await list({ prefix: SCORE_PREFIX, limit: 1000, token: BLOB_TOKEN });
  if (blobs.length <= PRUNE_AT) return;
  const ranked = blobs
    .map((b) => ({ url: b.url, e: decodeEntry(b.pathname) }))
    .filter((x) => x.e)
    .sort((a, b) => b.e!.streak - a.e!.streak || a.e!.at - b.e!.at);
  const losers = ranked.slice(MAX_ENTRIES).map((x) => x.url);
  if (losers.length) await del(losers, { token: BLOB_TOKEN });
}

/* ------------------------- Redis / file backends ------------------------- */

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
    return JSON.parse(await fs.readFile(FILE, "utf8")) as LeaderboardEntry[];
  } catch {
    return [];
  }
}

async function writeFileStore(entries: LeaderboardEntry[]): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(entries, null, 2), "utf8");
}

/* ------------------------------ Shared API ------------------------------ */

function sortTrim(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  const seen = new Set<string>();
  return entries
    .filter((e) => {
      const k = `${e.name}|${e.streak}|${e.at}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .sort((a, b) => b.streak - a.streak || a.at - b.at)
    .slice(0, MAX_ENTRIES);
}

async function readAll(): Promise<LeaderboardEntry[]> {
  if (useBlob) return readBlobEntries();
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

  if (useBlob) {
    await appendBlobEntry(entry);
    // Merge our just-written entry in case list() hasn't caught it yet.
    const all = sortTrim([entry, ...(await readBlobEntries())]);
    void pruneBlob();
    const idx = all.findIndex(
      (e) => e.name === entry.name && e.streak === entry.streak && e.at === entry.at,
    );
    return { rank: idx >= 0 ? idx + 1 : null, top: all.slice(0, 25) };
  }

  const all = sortTrim([...(await readAll()), entry]);
  if (useRedis) await redisCommand(["SET", KEY, JSON.stringify(all)]);
  else await writeFileStore(all);

  const idx = all.findIndex(
    (e) => e.name === entry.name && e.streak === entry.streak && e.at === entry.at,
  );
  return { rank: idx >= 0 ? idx + 1 : null, top: all.slice(0, 25) };
}

export const STORAGE_MODE = useBlob ? "blob" : useRedis ? "redis" : "file";
