import type { Metadata } from "next";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import SponsorsSection from "@/components/sections/SponsorsSection";

export const metadata: Metadata = {
  title: "Partners | Engineering Horizons",
  description:
    "Sponsor or partner with Engineering Horizons at the University of Washington.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnershipsSection />
      <SponsorsSection showPartnerLink={false} />
    </>
  );
}
