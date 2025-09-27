// components/site-footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

export function SiteFooter() {
  return (
    <footer
      className="mt-12 w-full"
      style={{ backgroundColor: "rgba(74, 0, 224, 0.68)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="grid gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Club Organization Home"
            >
              <Image
                src="/images/club-logo.png"
                alt="ClubOrg logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-sm font-semibold text-black">ClubHub</span>
            </Link>
            <p className="text-sm text-white">
              Connect, engage, and belong to thriving communities.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-black">Quick Links</p>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cards" className="hover:underline">
                  Browse Clubs
                </Link>
              </li>
              <li>
                <Link href="/my-clubs" className="hover:underline">
                  My Clubs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-black">
              Contact & Support
            </p>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="tel:+1234567890" className="hover:underline">
                  Phone: (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@clubhub.com"
                  className="hover:underline"
                >
                  Email: support@clubhub.com
                </a>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-black">
              Social Links
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="text-white hover:text-black transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/50 pt-4 text-xs text-white">
          © {new Date().getFullYear()} ClubHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
