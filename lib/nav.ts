
import { DONATE_URL } from "@/lib/donateUrl";
import { INTEREST_FORM_URL } from "@/lib/interestForm";

export const HEADER_NAV = [
  { label: "About", href: "/about" },
  { label: "Info", href: "/info" },
  { label: "Teams", href: "/teams" },
  { label: "Projects", href: "/projects" },
  { label: "Members", href: "/members" },
  { label: "Partners", href: "/partners" },
  { label: "Donate", href: DONATE_URL },
  { label: "Join", href: INTEREST_FORM_URL },
  { label: "Contact us", href: "/contact" },
] as const;

export const FOOTER_NAV = HEADER_NAV;
