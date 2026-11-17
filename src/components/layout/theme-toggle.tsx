"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Check, Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

/**
 * Theme switcher.
 *
 * The button renders a fixed placeholder until the component has mounted:
 * the server cannot know the stored preference, so guessing the icon in
 * SSR would guarantee a hydration mismatch.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className={className}
          aria-label={
            mounted
              ? `Theme: ${theme === "system" ? `system (${isDark ? "dark" : "light"})` : theme}. Change theme`
              : "Change theme"
          }
        >
          {mounted ? (
            isDark ? (
              <Moon className="size-[1.15rem]" />
            ) : (
              <Sun className="size-[1.15rem]" />
            )
          ) : (
            <Sun className="size-[1.15rem] opacity-60" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        {OPTIONS.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onSelect={() => setTheme(value)}
            className="gap-2"
          >
            <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
            <span className="flex-1">{label}</span>
            <Check
              className={cn(
                "size-4 text-brand",
                theme === value ? "opacity-100" : "opacity-0",
              )}
              aria-hidden="true"
            />
            {theme === value ? <span className="sr-only"> (current)</span> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
