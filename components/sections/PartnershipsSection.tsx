import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { DONATE_URL } from "@/lib/donateUrl";

const SUPPORT_USES = [
  "Parts, materials, and electronics for team builds",
  "Tools and equipment for fabrication and testing",
  "Workshops and travel for club members",
] as const;

export default function PartnershipsSection() {
  return (
    <section id="partnerships" className="section-padding bg-background">
      <div className="section-container">
        <SectionIntro
          kicker="Partnerships"
          title="Partner with us"
          lede="Sponsors and partners keep our project teams building. Support goes directly into hands-on engineering work by UW students."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="tech-panel">
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Where support goes
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SUPPORT_USES.map((item) => (
                <li key={item} className="flex gap-3 text-body text-muted">
                  <span className="text-accent" aria-hidden>
                    /
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col border border-border bg-surface p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Ways to get involved
            </h3>
            <p className="mt-4 text-body text-muted">
              Companies and organizations can reach our business team about
              sponsorship. Individuals can give through our fundraiser.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-auto md:pt-6">
              <Link href="/contact" className="btn-primary">
                Become a sponsor
              </Link>
              <Link
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
