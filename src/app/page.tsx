import { BrandMark } from "@/components/layout/brand-mark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/**
 * TEMPORARY page — a live proof of the design tokens, typography and brand
 * mark produced in Block 2. It is replaced by the real marketing home page
 * in Block 6 (commit C16).
 */

const swatches = [
  { name: "paper", token: "--bg", className: "bg-paper" },
  { name: "surface", token: "--surface", className: "bg-surface" },
  { name: "ink", token: "--ink", className: "bg-ink" },
  { name: "muted", token: "--muted-foreground", className: "bg-muted-foreground" },
  { name: "line", token: "--line", className: "bg-line" },
  { name: "brand", token: "--brand", className: "bg-brand" },
];

export default function DesignSystemPreview() {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* atmosphere */}
      <div className="spotlight pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="section-shell relative py-20 md:py-28">
        <Badge variant="secondary" className="mb-8 font-mono text-[0.7rem] tracking-widest uppercase">
          Day 1 · Block 2 · design system
        </Badge>

        <BrandMark size="lg" className="mb-10" />

        <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold md:text-6xl">
          Rent the room where
          <span className="text-brand"> the work happens.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Daylight-flooded studios, sound-treated booths and production spaces
          from independent hosts — booked by the hour, without the agency
          markup.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button size="lg" className="px-5">
            Explore studios
          </Button>
          <Button size="lg" variant="outline" className="px-5">
            List your space
          </Button>
          <span className="price-label text-muted-foreground">
            from $32<span className="text-xs"> / hour</span>
          </span>
        </div>

        <Separator className="my-14" />

        <section aria-labelledby="tokens">
          <h2 id="tokens" className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Palette
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
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
          <Card>
            <CardHeader>
              <CardTitle id="type">Typography</CardTitle>
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
              <p className="price-label">$48.00 / hour · 4 hr minimum</p>
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
            <CardContent className="flex flex-wrap items-center gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Delete</Button>
              <Badge>New</Badge>
              <Badge variant="secondary">Photography</Badge>
              <Badge variant="outline">Podcast</Badge>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
