"use client";

import Image from "next/image";
import { useState } from "react";
import type {
  Project,
  ProjectImage,
  ProjectLead,
  ProjectStatus,
} from "@/lib/projects";

type Props = {
  projects: readonly Project[];
};

const EASE = "[transition-timing-function:cubic-bezier(0.4,0,0.2,1)]";

const STATUS_CLASS: Record<ProjectStatus, string> = {
  Flagship: "border-accent bg-accent text-on-accent",
  New: "border-accent/50 text-accent",
  Continued: "border-border text-muted",
};

const LABEL = "font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em]";

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex rounded-sm border px-2 py-0.5 ${LABEL} ${STATUS_CLASS[status]}`}
    >
      {status}
    </span>
  );
}

function Leads({ leads, dark }: { leads: ProjectLead[]; dark: boolean }) {
  const labelClass = `${LABEL} ${dark ? "text-zinc-400" : "text-muted"}`;
  const nameClass = `mt-1 text-sm font-semibold ${dark ? "text-zinc-50" : "text-foreground"}`;
  const hasRoles = leads.some((l) => l.role);

  if (!hasRoles) {
    return (
      <div>
        <p className={labelClass}>
          {leads.length > 1 ? "Project leads" : "Project lead"}
        </p>
        <p className={nameClass}>{leads.map((l) => l.name).join(" · ")}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {leads.map((lead) => (
        <div key={lead.name}>
          <p className={labelClass}>{lead.role ?? "Lead"}</p>
          <p className={nameClass}>{lead.name}</p>
        </div>
      ))}
    </div>
  );
}

function AreaTags({ areas, dark }: { areas: string[]; dark: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
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
  );
}

function ImagePlaceholder({ className }: { className: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-dashed border-border bg-surface text-muted ${className}`}
    >
      <svg
        className="size-6 opacity-60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0021.75 19.5V4.5A1.5 1.5 0 0020.25 3H3.75A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21zM14.25 8.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      <span className={`${LABEL} opacity-70`}>Photo coming soon</span>
    </div>
  );
}

function ImageGallery({
  images,
  caption,
}: {
  images: ProjectImage[];
  caption?: string;
}) {
  return (
    <figure>
      <div className="grid grid-cols-2 gap-3">
        {images.length > 0 ? (
          images.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden border border-border bg-surface ${
                i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          ))
        ) : (
          <>
            <ImagePlaceholder className="col-span-2 aspect-[16/9]" />
            <ImagePlaceholder className="aspect-[4/3]" />
            <ImagePlaceholder className="aspect-[4/3]" />
          </>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-mono text-[0.72rem] leading-relaxed text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="space-y-10 px-5 py-8 md:space-y-12 md:px-8 md:py-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <p className={`${LABEL} text-accent`}>Overview</p>
          {project.overview ? (
            <div className="mt-4 space-y-4">
              {project.overview.map((p) => (
                <p
                  key={p}
                  className="text-[0.95rem] leading-7 text-foreground/90 [text-wrap:pretty]"
                >
                  {p}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-[0.95rem] leading-7 text-muted">
              Full project write-up coming soon. Ask a project lead at a Friday
              meeting for details.
            </p>
          )}
        </div>
        <ImageGallery
          images={project.images ?? []}
          caption={project.imageCaption}
        />
      </div>

      {project.skills ? (
        <div>
          <p className={`${LABEL} text-accent`}>
            Relevant skills &amp; engineering concepts
          </p>
          <dl className="mt-4 border-b border-border">
            {project.skills.map((row) => (
              <div
                key={row.area}
                className="grid gap-1 border-t border-border py-3.5 sm:grid-cols-[14rem_1fr] sm:gap-6"
              >
                <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  {row.area}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {row.concepts}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}

      {project.sections && project.sections.length > 0 ? (
        <div className="grid items-start gap-6 md:grid-cols-2">
          {project.sections.map((section) => (
            <div
              key={section.title}
              className={`border border-border bg-surface p-5 md:p-6 ${
                project.sections!.length === 1 ? "md:col-span-2" : ""
              }`}
            >
              <h4 className="font-heading text-base font-bold uppercase tracking-wide text-foreground">
                {section.title}
              </h4>
              {section.paragraphs?.map((p) => (
                <p
                  key={p}
                  className="mt-3 text-sm leading-relaxed text-muted [text-wrap:pretty]"
                >
                  {p}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-3 space-y-2.5">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="text-accent" aria-hidden>
                        /
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ProjectItem({
  project,
  number,
  isOpen,
  onToggle,
}: {
  project: Project;
  number: number | null;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const dark = Boolean(project.flagship);
  const panelId = `project-${project.slug}-details`;

  return (
    <article
      id={project.slug}
      className={`scroll-mt-28 overflow-hidden border ${
        dark
          ? "border-zinc-800 border-l-[3px] border-l-accent"
          : "border-border bg-background"
      }`}
    >
      <div
        className={`relative ${dark ? "bg-zinc-950 text-zinc-100" : "bg-background"}`}
      >
        {dark ? (
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_100%_0%,rgb(124_58_237/0.22),transparent_60%)]"
          />
        ) : null}

        <div className="relative grid gap-6 px-5 py-6 md:grid-cols-[1fr_15rem] md:gap-10 md:px-8 md:py-8 lg:grid-cols-[1fr_17rem]">
          <div className="min-w-0">
            <p
              className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${LABEL} ${
                dark ? "text-zinc-400" : "text-muted"
              }`}
            >
              {number !== null ? (
                <span className="tabular-nums text-accent">
                  {String(number).padStart(2, "0")}
                </span>
              ) : null}
              {project.category ? <span>{project.category}</span> : null}
            </p>
            <h3
              className={`mt-2 font-heading font-extrabold uppercase leading-[0.95] tracking-[-0.03em] ${
                dark
                  ? "text-[clamp(2rem,3.6vw+0.6rem,3.25rem)] text-white"
                  : "text-[clamp(1.5rem,1.8vw+0.7rem,2.1rem)] text-foreground"
              }`}
            >
              {project.name}
            </h3>
            {project.tagline ? (
              <p
                className={`mt-3 max-w-2xl text-[0.95rem] leading-relaxed ${
                  dark ? "text-zinc-300" : "text-muted"
                }`}
              >
                {project.tagline}
              </p>
            ) : null}
            <div className="mt-5">
              <AreaTags areas={project.areas} dark={dark} />
            </div>
          </div>

          <div
            className={`flex flex-col gap-4 md:border-l md:pl-8 ${
              dark ? "md:border-zinc-800" : "md:border-border"
            }`}
          >
            <div>
              <StatusBadge status={project.status} />
            </div>
            <Leads leads={project.leads} dark={dark} />
          </div>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={`relative flex w-full items-center justify-between gap-4 border-t px-5 py-3.5 text-left outline-none transition-colors ${EASE} focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent md:px-8 ${LABEL} ${
            dark
              ? "border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white"
              : "border-border text-foreground hover:bg-surface hover:text-accent"
          }`}
        >
          <span>{isOpen ? "Hide details" : "Project details"}</span>
          <svg
            className={`size-4 transition-transform duration-300 ${EASE} motion-reduce:transition-none ${
              isOpen ? "rotate-45" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>

      <div
        className={`grid min-h-0 transition-[grid-template-rows] duration-300 ${EASE} motion-reduce:transition-none`}
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div
          id={panelId}
          className="min-h-0 overflow-hidden"
          aria-hidden={!isOpen}
        >
          <div className="border-t border-border bg-background">
            <ProjectDetails project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsAccordion({ projects }: Props) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  let count = 0;

  return (
    <div className="space-y-6">
      {projects.map((project) => {
        const number = project.flagship ? null : ++count;
        return (
          <ProjectItem
            key={project.slug}
            project={project}
            number={number}
            isOpen={open[project.slug] ?? false}
            onToggle={() =>
              setOpen((prev) => ({
                ...prev,
                [project.slug]: !prev[project.slug],
              }))
            }
          />
        );
      })}
    </div>
  );
}
