import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { INTEREST_FORM_URL } from "@/lib/interestForm";
import { EXECUTIVE_BOARD, PROJECT_LEAD_SUBSECTIONS } from "@/lib/members";
import { TEAMS } from "@/lib/teams";

const FACTS = [
  { label: "Meetings", value: "Fridays, 4–6 pm" },
  { label: "Location", value: "MEB 246" },
  { label: "Who can join", value: "All majors" },
] as const;

const JOIN_STEPS = [
  "Fill out the member interest form.",
  "Come to a Friday meeting in MEB 246.",
  "Pick a project team and start building with its leads.",
] as const;

function leadsFor(teamName: string) {
  return (
    PROJECT_LEAD_SUBSECTIONS.find((s) => s.title === `${teamName} leads`)
      ?.members ?? []
  );
}

export default function InfoSection() {
  return (
    <section id="info" className="section-padding bg-background">
      <div className="section-container">
        <SectionIntro
          kicker="Info"
          title="How the club is organized"
          lede="Engineering Horizons is a student club at the University of Washington. Members join one of four project teams, each run by project leads and coordinated by the executive board."
        />

        <dl className="mt-12 grid border border-border sm:grid-cols-3">
          {FACTS.map((fact, i) => (
            <div
              key={fact.label}
              className={`px-5 py-4 ${
                i > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""
              }`}
            >
              <dt className="section-kicker">{fact.label}</dt>
              <dd className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 md:mt-20">
          <h3 className="section-kicker">Structure</h3>

          <div className="tech-panel mx-auto mt-6 max-w-xl">
            <p className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              {EXECUTIVE_BOARD.title}
            </p>
            <ul className="mt-3 space-y-1.5">
              {EXECUTIVE_BOARD.members.map((m) => (
                <li key={m.name} className="text-sm leading-snug text-muted">
                  <span className="font-semibold text-foreground">{m.name}</span>
                  {m.role ? ` · ${m.role}` : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto h-10 w-px bg-accent/60" aria-hidden />

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pt-8">
            <div
              className="absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-accent/60 lg:block"
              aria-hidden
            />
            {TEAMS.map((team) => {
              const leads = leadsFor(team.name);
              return (
                <article
                  key={team.name}
                  className="relative flex flex-col border border-border bg-surface"
                >
                  <div
                    className="absolute -top-8 left-1/2 hidden h-8 w-px bg-accent/60 lg:block"
                    aria-hidden
                  />
                  <div className="border-b border-border px-5 py-4">
                    <h4 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                      {team.name}
                    </h4>
                    <p className="mt-1 text-sm leading-snug text-muted">
                      {team.focus}
                    </p>
                  </div>
                  <div className="flex-1 px-5 py-4">
                    <p className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Project leads
                    </p>
                    <ul className="mt-2 space-y-1">
                      {leads.map((m) => (
                        <li key={m.name} className="text-sm text-foreground">
                          {m.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-muted">
            General members join a team and build alongside its leads.{" "}
            <Link href="/teams" className="text-accent hover:text-accent-hover">
              See what each team does
            </Link>
            .
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 md:mt-20 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="section-kicker">How to join</h3>
            <ol className="mt-5 space-y-3">
              {JOIN_STEPS.map((step, i) => (
                <li key={step} className="flex gap-4 text-body text-foreground">
                  <span className="font-mono font-semibold tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <Link
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Member interest form
          </Link>
        </div>
      </div>
    </section>
  );
}
