import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

/**
 * Shared "nothing here yet" panel. Used by explore results, my-listings,
 * my-bookings and the reviews list so every empty screen has the same
 * shape: icon → reason → one clear next action.
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed bg-card/60 px-6 py-16 text-center",
        className,
      )}
    >
      {icon ? (
        <div
          className="mb-5 flex size-14 items-center justify-center rounded-full bg-brand-soft text-brand-strong [&_svg]:size-6"
          aria-hidden="true"
        >
          {icon}
        </div>
      ) : null}

      <h3 className="font-display text-xl font-semibold tracking-tight text-balance">
        {title}
      </h3>

      {description ? (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}

      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
