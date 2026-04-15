import SectionIntro from "@/components/ui/SectionIntro";
import TeamsAccordion from "@/components/sections/TeamsAccordion";
import { TEAMS } from "@/lib/teams";

export default function TeamsSection() {
  return (
    <section id="teams" className="section-padding border-t border-border bg-surface">
      <div className="section-container">
        <SectionIntro
          kicker="Teams"
          title="Project teams"
          lede="Open each team to view details and photos."
        />
        <TeamsAccordion teams={TEAMS} />
      </div>
    </section>
  );
}
