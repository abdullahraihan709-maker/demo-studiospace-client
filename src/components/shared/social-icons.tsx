import type { SVGProps } from "react";

/**
 * Social glyphs drawn in-house.
 *
 * Why not `lucide-react`? v1 removed every brand icon (Instagram, YouTube,
 * LinkedIn, X). Rather than pin the whole icon library down a major version
 * for four logos, they are drawn here on a shared 24×24 grid with a 1.9px
 * stroke, so the row reads as one set instead of four borrowed marks.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** The new X wordmark — two crossed quads, not the old Twitter bird. */
export function XIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M2.6 2.9h5.3L21.4 21.1h-5.3L2.6 2.9Z" />
      <path d="M16.2 2.9h5.2L7.9 21.1H2.6L16.2 2.9Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.1" y="3.1" width="17.8" height="17.8" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.9" r="1.15" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2.4" y="5.6" width="19.2" height="12.8" rx="4.2" />
      <path d="M10.3 9.4 15.6 12l-5.3 2.6V9.4Z" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.1" y="3.1" width="17.8" height="17.8" rx="4.2" />
      <circle cx="8.1" cy="8.2" r="1.35" fill="currentColor" stroke="none" />
      <path d="M8.1 11.3v5.6" />
      <path d="M12.2 16.9v-5.6" />
      <path d="M12.2 13.4c0-1.7 1.05-2.5 2.3-2.5 1.35 0 2.35.95 2.35 2.75v3.25" />
    </Base>
  );
}
