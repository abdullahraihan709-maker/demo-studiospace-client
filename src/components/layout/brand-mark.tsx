import { cn } from "@/lib/utils";

/**
 * StudioSpace brand mark — a hand-built camera aperture with a spotlight
 * rim, drawn as inline SVG so it scales, inherits `currentColor` and
 * needs no image request.
 *
 * Geometry (viewBox 0 0 48 48):
 *  - iris   → hexagon of radius 11 centred at 24,24
 *  - blades → six arms from each hexagon vertex out to the ring (r 19.5)
 *  - ring   → the lens barrel
 *  - rim    → brand-coloured arc that reads as a light glare
 *  - beam   → faint spotlight cone falling through the iris
 */
function ApertureMark({ className }: { className?: string }) {
  // hexagon vertices (r = 11) and blade endpoints (r = 19.5), same angles
  const angles = [30, 90, 150, 210, 270, 330];

  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className={cn("size-8 shrink-0", className)}
    >
      <defs>
        <linearGradient id="ss-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* spotlight cone */}
      <path d="M24 5 L15.5 41 H32.5 Z" fill="url(#ss-beam)" />

      {/* lens barrel */}
      <circle
        cx="24"
        cy="24"
        r="19.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* iris */}
      <polygon
        points="33.53,29.5 24,35 14.47,29.5 14.47,18.5 24,13 33.53,18.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* aperture blades */}
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        {angles.map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const inner = { x: 24 + 11 * Math.cos(rad), y: 24 + 11 * Math.sin(rad) };
          const outer = { x: 24 + 19.5 * Math.cos(rad), y: 24 + 19.5 * Math.sin(rad) };
          return (
            <line
              key={deg}
              x1={inner.x.toFixed(2)}
              y1={inner.y.toFixed(2)}
              x2={outer.x.toFixed(2)}
              y2={outer.y.toFixed(2)}
            />
          );
        })}
      </g>

      {/* light glare on the barrel */}
      <path
        d="M10.5 12.2 A19.5 19.5 0 0 1 37.5 12.2"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICON_SIZE = {
  sm: "size-6",
  md: "size-8",
  lg: "size-11",
} as const;

const WORD_SIZE = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-2xl",
} as const;

type BrandMarkProps = {
  size?: keyof typeof ICON_SIZE;
  withWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
};

/**
 * Brand mark + optional wordmark. The wordmark splits into an ink half and
 * a brand-coloured half — the editorial detail that stops the logo reading
 * like stock text next to an icon.
 */
export function BrandMark({
  size = "md",
  withWordmark = true,
  className,
  wordmarkClassName,
}: BrandMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 align-middle", className)}>
      <ApertureMark className={ICON_SIZE[size]} />
      {withWordmark ? (
        <span
          className={cn(
            "font-display leading-none font-semibold tracking-[-0.03em]",
            WORD_SIZE[size],
            wordmarkClassName,
          )}
        >
          Studio<span className="text-brand">Space</span>
        </span>
      ) : (
        <span className="sr-only">StudioSpace</span>
      )}
    </span>
  );
}

export { ApertureMark };
