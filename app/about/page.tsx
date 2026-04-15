import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About | Engineering Horizons",
  description:
    "Mission and club activities at Engineering Horizons, University of Washington.",
};

export default function AboutPage() {
  return <AboutSection />;
}
