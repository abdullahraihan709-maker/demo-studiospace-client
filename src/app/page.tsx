import { CalendarRange, SearchX } from "lucide-react";
import { BrandMark } from "@/components/layout/brand-mark";
import { EmptyState } from "@/components/shared/empty-state";
import { PriceTag } from "@/components/shared/price-tag";
import { StatusBadge, type BookingStatus } from "@/components/shared/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";

/**
 * TEMPORARY page — a live proof of the design tokens, typography, brand
 * mark and primitives produced in Block 2. It is replaced by the real
 * marketing home page in Block 6 (commit C16).
 */

const swatches = [
  { name: "paper", token: "--bg", className: "bg-paper" },
  { name: "surface", token: "--surface", className: "bg-surface" },
  { name: "ink", token: "--ink", className: "bg-ink" },
  { name: "muted", token: "--muted-foreground", className: "bg-muted-foreground" },
  { name: "line", token: "--line", className: "bg-line" },
  { name: "brand", token: "--brand", className: "bg-brand" },
];

const statuses: BookingStatus[] = ["pending", "confirmed", "completed", "cancelled"];

export default function DesignSystemPreview() {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* atmosphere */}
      <div className="spotlight pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="blueprint-grid [mask-image:linear-gradient(to_bottom,black,transparent_70%)] pointer-events-none absolute inset-0 opacity-60" />

      <div className="section-shell relative py-20 md:py-28">
        <Badge variant="soft" className="mb-8 font-mono text-[0.7rem] tracking-widest uppercase">
          Day 1 · Block 2 · design system
        </Badge>

        <BrandMark size="lg" className="mb-10" />

        <SectionHeading
          as="h1"
          size="hero"
          eyebrow="Peer-to-peer studio marketplace"
          title={
            <>
              Rent the room where
              <span className="text-brand"> the work happens.</span>
            </>
          }
          description="Daylight-flooded studios, sound-treated booths and production spaces from independent hosts — booked by the hour, without the agency markup."
        />

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button size="xl">Explore studios</Button>
          <Button size="xl" variant="outline">
            List your space
          </Button>
          <Button size="xl" variant="soft">
            How it works
          </Button>
        </div>

        <Separator className="my-14" />

        <section aria-labelledby="tokens">
          <SectionHeading id="tokens" eyebrow="Foundations" title="Palette" />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {swatches.map((s) => (
              <div key={s.name} className="rounded-xl border bg-card p-3">
                <div className={`h-12 w-full rounded-md border ${s.className}`} />
                <p className="mt-3 text-sm font-medium capitalize">{s.name}</p>
                <p className="font-mono text-[0.68rem] text-muted-foreground">{s.token}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="type" className="mt-14 grid gap-6 md:grid-cols-2">
          <Card interactive>
            <CardHeader>
              <CardTitle id="type">Typography & price label</CardTitle>
              <CardDescription>
                Bricolage Grotesque for display, Geist for body, JetBrains Mono
                for prices and labels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-display text-3xl leading-tight font-semibold tracking-tight">
                Aperture No. 4
              </p>
              <p className="text-muted-foreground">
                Body copy sits on a warm paper background so long paragraphs
                stay readable in both themes.
              </p>
              <PriceTag amount="48.00" unit="hour" size="lg" className="text-brand" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Primitives</CardTitle>
              <CardDescription>
                shadcn components restyled by the token layer — no local
                overrides needed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="destructive">Delete</Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>New</Badge>
                <Badge variant="soft">Photography</Badge>
                <Badge variant="secondary">Podcast</Badge>
                <Badge variant="outline">Podcast</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {statuses.map((s) => (
                  <StatusBadge key={s} status={s} />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="empty" className="mt-14">
          <SectionHeading
            id="empty"
            eyebrow="States"
            title="Empty state"
            description="One shared panel keeps every empty screen on-brand and gives the user exactly one next step."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <EmptyState
              icon={<SearchX />}
              title="No studios match those filters"
              description="Try widening the price range or clearing the category filter."
              action={
                <Button variant="outline" size="sm">
                  Clear filters
                </Button>
              }
            />
            <EmptyState
              icon={<CalendarRange />}
              title="No bookings yet"
              description="Once you book a space it will appear here with its status and invoice."
              action={<Button size="sm">Explore studios</Button>}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
