// components/site-header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Linkedin,
  LucideIcon,
  MessageSquare,
} from "lucide-react";


const socialLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://wa.me/", label: "WhatsApp", Icon: MessageSquare },
];

export function SiteHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const nav = useMemo(
    () => [
      { href: "/cards", label: "Browse Clubs" },
      { href: "/my-clubs", label: "My Clubs" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="mx-auto grid h-14 w-full max-w-6xl grid-cols-3 items-center px-4">
        <div className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2"
            aria-label="Club Organization Home"
          >
            <Image
              src="/images/club-logo.png"
              alt="ClubOrg logo"
              width={40}
              height={40}
              className="h-15 w-15"
            />
            <span className="text-md font-semibold tracking-wide">ClubHub</span>
          </Link>
        </div>

        <nav
          className="hidden md:flex items-center justify-center gap-6"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-md transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        
        <div className="flex items-center justify-end gap-4">

          {!user ? (
            <div className="flex items-center gap-2">
              {/* Register Button */}
              <Button asChild variant="default" size="sm">
                <Link href="/register" aria-label="Register">
                  Register
                </Link>
              </Button>
              {/* Login Button */}
              <Button asChild variant="default" size="sm">
                <Link href="/login" aria-label="Login">
                  Login
                </Link>
              </Button>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger aria-label="Open profile menu">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    {user.name?.[0]?.toUpperCase() || "S"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push("/")}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/my-clubs")}>
                  My Clubs
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/cards")}>
                  Browse
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    logout();
                    router.push("/");
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
