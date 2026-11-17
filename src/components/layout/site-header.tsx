"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";

import { BrandMark } from "@/components/layout/brand-mark";
import { NavAuthActions } from "@/components/layout/nav-auth-actions";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, isActivePath } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile sheet whenever the route changes — otherwise it stays
  // open over the page you just navigated to.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Only add the heavy blur/shrink treatment once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled || undefined}
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-paper/70 backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-line bg-paper/90 shadow-[0_10px_30px_-24px_rgb(0_0_0/0.6)]"
          : "border-transparent",
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="StudioSpace — home"
          className="rounded-lg transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BrandMark size="md" />
        </Link>

        {/* desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <NavAuthActions />
            <ThemeToggle />
          </div>

          {/* mobile trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[86vw] max-w-sm gap-0 p-0">
              <SheetHeader className="border-b px-6 py-5">
                <SheetTitle asChild>
                  <Link href="/" onClick={() => setOpen(false)}>
                    <BrandMark size="sm" />
                  </Link>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation and account actions
                </SheetDescription>
              </SheetHeader>

              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
                {NAV_LINKS.map((link) => {
                  const active = isActivePath(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-brand-soft text-brand"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      {link.label}
                      <ArrowUpRight className="size-4 opacity-40" aria-hidden="true" />
                    </Link>
                  );
                })}
              </nav>

              <SheetFooter className="mt-auto gap-3 border-t px-4 py-5">
                <div className="grid w-full gap-2">
                  <NavAuthActions orientation="stacked" />
                </div>
                <div className="flex items-center justify-between rounded-xl border px-3 py-2">
                  <span className="text-sm font-medium">Appearance</span>
                  <ThemeToggle />
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
