import type { Metadata } from "next";
import InfoSection from "@/components/sections/InfoSection";

export const metadata: Metadata = {
  title: "Info | Engineering Horizons",
  description:
    "How Engineering Horizons at the University of Washington is organized, when we meet, and how to join.",
};

export default function InfoPage() {
  return <InfoSection />;
}
