import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { INTEREST_FORM_URL } from "@/lib/interestForm";
import {
  PROJECT_YEAR,
  PROJECTS,
  type Project,
  type ProjectStatus,
} from "@/lib/projects";

const STATUS_CLASS: Record<ProjectStatus, string> = {
  Flagship: "border-accent bg-accent text-on-accent",
  New: "border-accent/50 text-accent",
  Continued: "border-border text-muted",
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex rounded-sm border px-2 py-0.5 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] ${STATUS_CLASS[status]}`}
    >
      {status}
    </span>
  );
}

function Leads({ leads, dark }: { leads: string[]; dark?: boolean }) {
  return (
    <div>
      <p
        className={`font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] ${
          dark ? "text-zinc-400" : "text-muted"
        }`}
      >
        {leads.length > 1 ? "Project leads" : "Project lead"}
      </p>
      <p
        className={`mt-1.5 text-sm font-semibold ${
          dark ? "text-zinc-50" : "text-foreground"
        }`}
      >
        {leads.join(" · ")}
      </p>
    </div>
  );
}

function Areas({ areas, dark }: { areas: string[]; dark?: boolean }) {
  return (
    <div>
      <p
        className={`font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] ${
          dark ? "text-zinc-400" : "text-muted"
        }`}
      >
        What you can learn
      </p>
      <ul className="mt-2.5 flex flex-wrap gap-1.5">
        {areas.map((area) => (
          <li
            key={area}
            className={`rounded-sm border px-2 py-1 font-mono text-[0.72rem] ${
              dark
                ? "border-zinc-700 bg-zinc-900 text-zinc-200"
                : "border-border bg-surface text-foreground"
            }`}
          >
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlagshipCard({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden border border-zinc-800 border-l-[3px] border-l-accent bg-zinc-950 text-zinc-100">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_100%_0%,rgb(124_58_237/0.22),transparent_60%)]"
      />
      <div className="relative grid gap-8 p-6 md:grid-cols-[1.1fr_1fr] md:gap-12 md:p-10">
        <div>
          <StatusBadge status={project.status} />
          <h3 className="mt-4 font-heading text-[clamp(2rem,3.6vw+0.6rem,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-white">
            {project.name}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
            New for {PROJECT_YEAR}: the club&apos;s flagship build.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:border-l md:border-zinc-800 md:pl-10">
          <Leads leads={project.leads} dark />
          <Areas areas={project.areas} dark />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="flex flex-col border border-border bg-background">
      <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-5 md:px-6">
        <div className="min-w-0">
          <span className="font-mono text-[0.72rem] font-semibold tabular-nums text-accent">
            {String(index).padStart(2, "0")}
          </span>
          <h3 className="mt-1 font-heading text-[clamp(1.3rem,1.4vw+0.6rem,1.65rem)] font-bold uppercase leading-tight tracking-tight text-foreground">
            {project.name}
          </h3>
        </div>
        <div className="shrink-0 pt-0.5">
          <StatusBadge status={project.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 px-5 py-5 md:px-6">
        <Leads leads={project.leads} />
        <Areas areas={project.areas} />
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const flagship = PROJECTS.find((p) => p.flagship);
  const others = PROJECTS.filter((p) => !p.flagship);

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
            lede="Each project below shows where it's at, who's leading it, and the skills you can pick up along the way. Pick the one you want to spend your quarter on."
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

        {flagship ? (
          <div className="mt-12 md:mt-14">
            <FlagshipCard project={flagship} />
          </div>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i + 1} />
          ))}
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
