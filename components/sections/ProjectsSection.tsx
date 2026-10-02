import Link from "next/link";
import ProjectsAccordion from "@/components/sections/ProjectsAccordion";
import SectionIntro from "@/components/ui/SectionIntro";
import { INTEREST_FORM_URL } from "@/lib/interestForm";
import { PROJECT_YEAR, PROJECTS } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding border-t border-border bg-surface"
    >
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-12">
          <SectionIntro
            kicker={`Current projects · ${PROJECT_YEAR}`}
            title="Find what you want to build"
            lede="Each project below shows what the team is building, where it's at, and the skills you can pick up along the way. Open a project to see the full details."
          />
          <aside className="tech-panel !p-5">
            <p className="font-heading text-base font-semibold text-foreground">
              No experience required.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              The skills listed are what you can learn on each project, not
              what you need before joining. Project leads will help you find a
              first task that fits your experience.
            </p>
          </aside>
        </div>

        <div className="mt-12 md:mt-14">
          <ProjectsAccordion projects={PROJECTS} />
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body text-muted">
            Found a project you like? Let us know on the interest form.
          </p>
          <Link
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Member interest form
          </Link>
        </div>
      </div>
    </section>
  );
}
