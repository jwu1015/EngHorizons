import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import { SPONSOR_ASSET_VERSION, SPONSOR_LOGOS } from "@/lib/sponsorLogos";

export default function SponsorsSection() {
  const visibleSponsors = SPONSOR_LOGOS.slice(1);

  return (
    <section
      id="sponsors"
      className="w-full border-t border-border bg-surface py-20 md:py-24"
    >
      <div className="section-container">
        <SectionIntro kicker="Partners" title="Partners & sponsors" />
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {visibleSponsors.map((src) => (
            <div
              key={`${src}-${SPONSOR_ASSET_VERSION}`}
              className="relative flex aspect-[2.2/1] w-full items-center justify-center border border-border bg-background/70 p-7 md:p-8"
            >
              <Image
                src={`${src}?v=${SPONSOR_ASSET_VERSION}`}
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
