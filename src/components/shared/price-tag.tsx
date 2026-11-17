import { cn } from "@/lib/utils";

/**
 * Monospaced price label — the editorial detail from §8.1 of the plan.
 * Always renders the currency separately from the unit so the eye lands on
 * the number first.
 */
export function PriceTag({
  amount,
  unit = "hour",
  currency = "$",
  className,
  size = "md",
}: {
  amount: number | string;
  unit?: string | null;
  currency?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <p
      className={cn(
        "flex items-baseline gap-1 font-mono tracking-tight tabular-nums",
        className,
      )}
    >
      <span
        className={cn(
          "font-semibold",
          size === "sm" && "text-sm",
          size === "md" && "text-lg",
          size === "lg" && "text-2xl",
        )}
      >
        {currency}
        {amount}
      </span>
      {unit ? (
        <span className="text-xs font-normal text-muted-foreground">/ {unit}</span>
      ) : null}
    </p>
  );
}
