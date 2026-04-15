import Image from "next/image";
import Link from "next/link";
import FooterSocialButtons from "@/components/layout/FooterSocialButtons";
import { FOOTER_LOGO_SRC } from "@/lib/footerLogo";
import { FOOTER_NAV } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-6 md:py-7">
        <div className="grid gap-4 md:grid-cols-3 md:gap-3 lg:gap-4">
          <div className="flex justify-center md:justify-start">
            <div className="relative aspect-[4/3] w-full max-w-[7rem] overflow-hidden rounded-sm border border-border bg-surface sm:max-w-[7.75rem] md:max-w-[8.5rem]">
              <Image
                src={FOOTER_LOGO_SRC}
                alt="Engineering Horizons"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 112px, 136px"
              />
            </div>
          </div>

          <div className="min-w-0 md:text-center">
            <p className="font-heading font-bold leading-tight tracking-tight text-foreground whitespace-nowrap text-[clamp(0.9rem,2.45vw,1.55rem)]">
              Engineering Horizons
            </p>
            <ul className="mt-2.5 space-y-1 md:mx-auto md:inline-block md:text-left">
              {FOOTER_NAV.map(({ label, href }) => {
                const isExternal = href.startsWith("http");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div id="contact" className="scroll-mt-8 md:text-right lg:text-right">
            <h3 className="font-heading text-[0.82rem] font-semibold tracking-tight text-foreground">
              Connect
            </h3>
            <FooterSocialButtons />
          </div>
        </div>

        <div className="mt-5 border-t border-border pt-3">
          <p className="text-center font-mono text-[0.7rem] tracking-[0.05em] text-muted">
            meetings @ MEB 246, fridays 4–6
          </p>
        </div>
      </div>
    </footer>
  );
}
