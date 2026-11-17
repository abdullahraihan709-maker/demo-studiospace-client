"use client";

import Link from "next/link";
import { UserMenu } from "@/components/layout/user-menu";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSessionUser } from "@/hooks/use-session-user";
import { cn } from "@/lib/utils";

type NavAuthActionsProps = {
  orientation?: "inline" | "stacked";
  className?: string;
};

/**
 * Session-aware account slot in the header.
 *
 * Three states, and the first one is the whole reason private routes
 * survive a reload: while the session is still resolving we render a
 * skeleton and never the signed-out links, so a refresh on /my-bookings
 * cannot flash "Log in" or bounce the user to /login.
 */
export function NavAuthActions({
  orientation = "inline",
  className,
}: NavAuthActionsProps) {
  const { user, isPending } = useSessionUser();

  const wrapper = cn(
    orientation === "inline" ? "flex items-center gap-2" : "grid gap-2",
    className,
  );

  if (isPending) {
    return (
      <div className={wrapper}>
        <Skeleton className="h-8 w-16 rounded-full" />
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>
    );
  }

  if (user) {
    return (
      <div className={wrapper}>
        <UserMenu user={user} />
      </div>
    );
  }

  return (
    <div className={wrapper}>
      <Button asChild variant="ghost" size="lg">
        <Link href="/login">Log in</Link>
      </Button>
      <Button asChild size="lg">
        <Link href="/register">Get started</Link>
      </Button>
    </div>
  );
}
