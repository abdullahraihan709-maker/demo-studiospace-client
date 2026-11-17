export type NavLink = {
  label: string;
  href: string;
  /** Anchors on the marketing page never show an active underline. */
  external?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Explore studios", href: "/studios" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "For hosts", href: "/#for-hosts" },
];

export const FOOTER_LINKS = {
  marketplace: [
    { label: "Explore studios", href: "/studios" },
    { label: "Photography studios", href: "/studios?category=photography" },
    { label: "Podcast rooms", href: "/studios?category=podcast" },
    { label: "Music & rehearsal", href: "/studios?category=music" },
  ],
  hosts: [
    { label: "List your space", href: "/add-studio" },
    { label: "My listings", href: "/my-listings" },
    { label: "My bookings", href: "/my-bookings" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  company: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Trust & safety", href: "/#trust" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

/**
 * True when `href` is the current route (or a parent of it).
 * `/studios/abc` lights up `/studios` but not `/` .
 */
export function isActivePath(pathname: string, href: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
