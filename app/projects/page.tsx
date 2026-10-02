import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects | Engineering Horizons",
  description:
    "Robotics projects built by Engineering Horizons teams at the University of Washington.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
