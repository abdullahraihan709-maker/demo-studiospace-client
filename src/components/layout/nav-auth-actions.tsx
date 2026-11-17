"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavAuthActionsProps = {
  orientation?: "inline" | "stacked";
  className?: string;
};

/**
 * Signed-out navigation actions.
 *
 * Block 5 (C14) replaces this body with the session-aware switch:
 * `isPending` → skeleton, `session` → <UserMenu />, otherwise → these links.
 */
export function NavAuthActions({
  orientation = "inline",
  className,
}: NavAuthActionsProps) {
  return (
    <div
      className={cn(
        orientation === "inline" ? "flex items-center gap-2" : "grid gap-2",
        className,
      )}
    >
      <Button asChild variant="ghost" size="lg">
        <Link href="/login">Log in</Link>
      </Button>
      <Button asChild size="lg">
        <Link href="/register">Get started</Link>
      </Button>
    </div>
  );
}
