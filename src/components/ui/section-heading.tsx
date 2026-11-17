import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small mono label above the title, e.g. "How it works". */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** `section` is the house style — every H2 on the site uses it. */
  size?: "section" | "hero";
  align?: "left" | "center";
  as?: ElementType;
  id?: string;
  /** Optional right-aligned control, e.g. a "View all" link. */
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
};

/**
 * The single heading primitive for the whole app. Keeping every H2 on the
 * same type scale is what makes the pages look designed rather than
 * assembled.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  size = "section",
  align = "left",
  as: Heading = "h2",
  id,
  action,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        centered && "sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow ? (
          <p className="mb-3 font-mono text-[0.7rem] font-medium tracking-[0.18em] text-brand-strong uppercase">
            {eyebrow}
          </p>
        ) : null}

        <Heading
          id={id}
          className={cn(
            "font-display font-semibold tracking-tight text-balance",
            size === "hero"
              ? "text-4xl leading-[1.05] md:text-6xl"
              : "text-3xl leading-[1.15] md:text-5xl",
            titleClassName,
          )}
        >
          {title}
        </Heading>

        {description ? (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
