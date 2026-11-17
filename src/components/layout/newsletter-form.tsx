"use client";

import { useId, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Newsletter capture in the footer. Front-end only for now — it validates,
 * confirms, and stores nothing. Wiring it to a real list is out of scope for
 * the brief, and pretending otherwise would be worse than being explicit.
 */
export function NewsletterForm({ className }: { className?: string }) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      setError("Enter a valid email address, e.g. you@studio.com");
      return;
    }

    setError(null);
    setSubscribed(true);
    setEmail("");
  }

  if (subscribed) {
    return (
      <p
        className={cn(
          "flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-2.5 text-sm text-emerald-700 dark:text-emerald-400",
          className,
        )}
        role="status"
      >
        <Check className="size-4 shrink-0" aria-hidden="true" />
        You&apos;re on the list — new studios land in your inbox twice a month.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)} noValidate>
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@studio.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError(null);
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className="h-10 bg-background"
        />
        <Button type="submit" className="h-10 shrink-0 px-4">
          Subscribe
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>

      {error ? (
        <p id={`${inputId}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : (
        <p className="mt-2 text-xs text-muted-foreground">
          No spam, no agency markup. Unsubscribe in one click.
        </p>
      )}
    </form>
  );
}
