"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * next-themes wrapper.
 *
 * `attribute="class"` is what the `@custom-variant dark (&:is(.dark *))`
 * rule in globals.css expects. `disableTransitionOnChange` prevents the
 * whole page from cross-fading every colour on theme switch, which looks
 * like a rendering glitch rather than a transition.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
