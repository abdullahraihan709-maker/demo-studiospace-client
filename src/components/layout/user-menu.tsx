"use client";

import Link from "next/link";
import {
  Building2,
  CalendarCheck,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getInitials, type SessionUser } from "@/lib/auth-types";
import { cn } from "@/lib/utils";

const MENU_LINKS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-listings", label: "My listings", icon: Building2 },
  { href: "/my-bookings", label: "My bookings", icon: CalendarCheck },
  { href: "/wishlist", label: "Wishlist", icon: Heart },
] as const;

type UserMenuProps = {
  user: SessionUser;
  onSignOut?: () => void | Promise<void>;
  className?: string;
};

/**
 * Account dropdown for signed-in users. Purely presentational — it never
 * fetches anything, so it works identically in the navbar and the mobile
 * sheet.
 */
export function UserMenu({ user, onSignOut, className }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-2 rounded-full p-0.5 pr-2 transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 data-[state=open]:bg-muted",
          className,
        )}
        aria-label={`Account menu for ${user.name}`}
      >
        <Avatar size="sm" className="size-8">
          {user.image ? <AvatarImage src={user.image} alt="" /> : null}
          <AvatarFallback className="bg-brand-soft text-xs font-semibold text-brand-strong">
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>
        <span className="hidden max-w-[9rem] truncate text-sm font-medium lg:block">
          {user.name.split(" ")[0]}
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel className="flex items-start gap-3 py-1.5">
          <Avatar size="sm">
            {user.image ? <AvatarImage src={user.image} alt="" /> : null}
            <AvatarFallback className="bg-brand-soft text-[0.7rem] font-semibold text-brand-strong">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-1.5">
              <span className="truncate text-sm font-semibold text-foreground">
                {user.name}
              </span>
              {user.isHost ? (
                <Badge variant="soft" className="h-4 px-1.5 text-[0.6rem]">
                  Host
                </Badge>
              ) : null}
            </span>
            <span className="mt-0.5 block truncate text-xs font-normal text-muted-foreground">
              {user.email}
            </span>
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {MENU_LINKS.map(({ href, label, icon: Icon }) => (
            <DropdownMenuItem key={href} asChild>
              <Link href={href}>
                <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                {label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">
            <Settings className="size-4 text-muted-foreground" aria-hidden="true" />
            Account settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          variant="destructive"
          onSelect={(event) => {
            event.preventDefault();
            void onSignOut?.();
          }}
        >
          <LogOut className="size-4" aria-hidden="true" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
