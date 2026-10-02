import Image from "next/image";
import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { INTEREST_FORM_URL } from "@/lib/interestForm";
import { PROJECTS, type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col border border-border bg-background/90">
      {project.imageSrc ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
          <Image
            src={project.imageSrc}
            alt=""
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col border-t border-border px-5 py-5 first:border-t-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-sm border border-accent/40 px-2 py-0.5 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-accent">
            {project.status}
          </span>
          {project.teams.map((team) => (
            <span
              key={team}
              className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-muted"
            >
              {team}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-heading text-[clamp(1.3rem,1.6vw+0.45rem,1.8rem)] font-semibold leading-tight tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted [text-wrap:pretty]">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding border-t border-border bg-surface"
    >
      <div className="section-container">
        <SectionIntro
          kicker="Projects"
          title="What we're building"
          lede="Robotics projects built across the mechanical, electrical, software, and business teams."
        />

        {PROJECTS.length > 0 ? (
          <div className="mt-12 grid items-start gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        ) : (
          <div className="tech-panel mt-12 max-w-2xl">
            <p className="font-heading text-lg font-semibold text-foreground">
              Project write-ups are on the way.
            </p>
            <p className="mt-2 text-body text-muted">
              Want to help build them? Join a team this quarter.
            </p>
            <Link
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              Member interest form
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
