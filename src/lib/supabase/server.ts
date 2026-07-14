import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";

export function createRequestClient(accessToken?: string) {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    accessToken
      ? { global: { headers: { Authorization: `Bearer ${accessToken}` } }, auth: { persistSession: false } }
      : { auth: { persistSession: false } },
  );
}
