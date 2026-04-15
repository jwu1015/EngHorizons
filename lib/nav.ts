/** Main site navigation paths (App Router). */
import { DONATE_URL } from "@/lib/donateUrl";

export const HEADER_NAV = [
  { label: "About", href: "/about" },
  { label: "Teams", href: "/teams" },
  { label: "Donate", href: DONATE_URL },
  { label: "Contact us", href: "/contact" },
] as const;

export const FOOTER_NAV = [
  { label: "About", href: "/about" },
  { label: "Teams", href: "/teams" },
  { label: "Donate", href: DONATE_URL },
  { label: "Contact us", href: "/contact" },
] as const;
