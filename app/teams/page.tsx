import type { Metadata } from "next";
import TeamsSection from "@/components/sections/TeamsSection";

export const metadata: Metadata = {
  title: "Teams | Engineering Horizons",
  description:
    "Project team structure and technical responsibilities at Engineering Horizons.",
};

export default function TeamsPage() {
  return <TeamsSection />;
}
