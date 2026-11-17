"use client";

import type { SessionUser } from "@/lib/auth-types";

/**
 * Session seam for the layout shell.
 *
 * Block 2 ships the signed-out branch only — BetterAuth is not installed
 * yet. In Block 5 (C14) this body is replaced with:
 *
 *   const { data, isPending } = useSession();
 *   return { user: data?.user ?? null, isPending };
 *
 * Keeping the shape stable means <NavAuthActions /> and every consumer of
 * this hook stay untouched when real auth lands.
 */
export function useSessionUser(): {
  user: SessionUser | null;
  isPending: boolean;
} {
  return { user: null, isPending: false };
}
