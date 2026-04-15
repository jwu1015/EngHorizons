import Link from "next/link";
import HeroSlideBackdrop from "@/components/sections/HeroSlideBackdrop";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-0 w-full bg-background -mt-16 pt-0 md:-mt-[4.5rem]"
    >
      <HeroSlideBackdrop>
        <div className="section-container w-full overflow-visible">
          <div className="relative flex w-full flex-col gap-10 lg:block lg:min-h-[min(17rem,26vw)] lg:pt-3 xl:pt-5">
            <div className="min-w-0 max-w-full lg:absolute lg:left-0 lg:top-0 lg:z-[2] lg:max-w-[min(92%,28rem)] lg:-translate-x-1 lg:-translate-y-0 xl:-translate-x-3 xl:-translate-y-1 xl:max-w-[min(92%,32rem)]">
              <p className="hero-kicker">Engineering & outreach</p>
              <h1 className="hero-title mt-1 w-full max-w-none text-balance lg:pr-1">
                Engineering Horizons
              </h1>
            </div>
            <div className="flex min-w-0 w-full flex-1 flex-col gap-7 lg:ml-auto lg:max-w-[min(100%,44rem)] lg:items-end lg:pt-[clamp(4.5rem,12vw,9rem)] lg:text-right">
              <div className="w-full lg:max-w-[min(100%,40rem)] lg:items-end">
                <div className="hero-title-sm-panel hero-strap-minimal w-full text-balance lg:text-right">
                  <div className="hero-strap-spine">
                    <p className="hero-title-sm m-0">Build projects</p>
                    <p className="hero-title-sm hero-strap-subline m-0">
                      Gain hands-on experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap gap-3 sm:gap-4 lg:justify-end">
                <Link
                  href="/#contact"
                  className="inline-flex min-h-[2.75rem] items-center justify-center rounded-sm bg-accent px-7 py-2.5 font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-on-accent shadow-lg shadow-black/40 ring-1 ring-black/20 transition-colors [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:bg-accent-hover sm:px-8 md:min-h-[3rem] md:px-9 md:text-[0.9rem]"
                >
                  Get involved
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-h-[2.75rem] items-center justify-center rounded-sm border border-white/45 bg-black/55 px-7 py-2.5 font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-zinc-50 shadow-lg shadow-black/35 backdrop-blur-md transition-colors [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:border-accent hover:bg-black/70 hover:text-accent sm:px-8 md:min-h-[3rem] md:px-9 md:text-[0.9rem]"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HeroSlideBackdrop>
    </section>
  );
}
