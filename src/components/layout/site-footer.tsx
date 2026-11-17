import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import {
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";
import { Separator } from "@/components/ui/separator";
import { FOOTER_LINKS } from "@/lib/nav";

const SOCIALS = [
  { label: "StudioSpace on X", href: "https://x.com/", icon: XIcon },
  { label: "StudioSpace on Instagram", href: "https://instagram.com/", icon: InstagramIcon },
  { label: "StudioSpace on YouTube", href: "https://youtube.com/", icon: YoutubeIcon },
  { label: "StudioSpace on LinkedIn", href: "https://linkedin.com/", icon: LinkedinIcon },
] as const;

const COLUMNS = [
  { title: "Marketplace", links: FOOTER_LINKS.marketplace },
  { title: "For hosts", links: FOOTER_LINKS.hosts },
  { title: "Company", links: FOOTER_LINKS.company },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-auto border-t bg-surface/50">
      <div className="section-shell py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* brand + newsletter */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="StudioSpace — home"
              className="inline-block rounded-lg transition-opacity hover:opacity-80"
            >
              <BrandMark size="md" />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A peer-to-peer marketplace for hourly creative space. Hosts list
              the room, creators book the hours, nobody pays an agency.
            </p>

            <div className="mt-6">
              <p className="mb-2.5 text-sm font-medium">New studios, twice a month</p>
              <NewsletterForm />
            </div>
          </div>

          {/* link columns */}
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-mono text-[0.7rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} StudioSpace. A peer-to-peer studio
              marketplace.
            </p>
            <p className="mt-1 text-xs text-muted-foreground/80">
              Hosts set their own hourly rate. Prices shown in USD.
            </p>
          </div>

          <ul className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-brand hover:bg-brand-soft hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
