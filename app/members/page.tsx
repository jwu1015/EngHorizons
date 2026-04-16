import type { Metadata } from "next";
import MembersSection from "@/components/sections/MembersSection";

export const metadata: Metadata = {
  title: "Members | Engineering Horizons",
  description:
    "Officers and project leads for Engineering Horizons at the University of Washington.",
};

export default function MembersPage() {
  return <MembersSection />;
}
