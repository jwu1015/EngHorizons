
import { DONATE_URL } from "@/lib/donateUrl";

export const HEADER_NAV = [
  { label: "About", href: "/about" },
  { label: "Teams", href: "/teams" },
  { label: "Members", href: "/members" },
  { label: "Donate", href: DONATE_URL },
  { label: "Contact us", href: "/contact" },
] as const;

export const FOOTER_NAV = [
  { label: "About", href: "/about" },
  { label: "Teams", href: "/teams" },
  { label: "Members", href: "/members" },
  { label: "Donate", href: DONATE_URL },
  { label: "Contact us", href: "/contact" },
] as const;
