import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Booking lifecycle, as enforced by the server in Block 9.
 * `pending`  → guest requested the slot, host has not answered
 * `confirmed`→ slot is locked, double-booking is rejected from here on
 * `completed`→ slot is in the past
 * `cancelled`→ guest or host released the slot
 */
export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

const STATUS_STYLES: Record<
  BookingStatus,
  { label: string; className: string; dot: string }
> = {
  pending: {
    label: "Pending",
    className: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
    dot: "bg-amber-500",
  },
  confirmed: {
    label: "Confirmed",
    className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  completed: {
    label: "Completed",
    className: "border-border bg-muted text-muted-foreground",
    dot: "bg-muted-foreground",
  },
  cancelled: {
    label: "Cancelled",
    className: "border-destructive/30 bg-destructive/10 text-destructive",
    dot: "bg-destructive",
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: BookingStatus;
  className?: string;
}) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.pending;

  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5 px-2.5 py-1 font-medium", style.className, className)}
    >
      <span className={cn("size-1.5 rounded-full", style.dot)} aria-hidden="true" />
      {style.label}
    </Badge>
  );
}
