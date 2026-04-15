import Image from "next/image";
import { MISSION_IMAGES } from "@/lib/missionImage";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 flex w-full flex-col gap-6 lg:order-1 lg:gap-8">
            {MISSION_IMAGES.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[5/4]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          <div className="order-1 max-w-prose lg:order-2 lg:pt-2">
            <div className="relative">
              <p className="section-kicker">
                <span aria-hidden>/// </span>
                About
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2rem,4.8vw+0.5rem,3.35rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em]">
                <span className="block text-foreground">Build beyond</span>
                <span className="block text-transparent [-webkit-text-stroke:1.5px_rgb(10_10_10)]">
                  the syllabus
                </span>
              </h2>
              <div
                className="mt-6 h-px w-full max-w-[12rem] bg-accent/60"
                aria-hidden
              />
            </div>
            <div className="tech-panel mt-10 md:mt-12">
              <p className="max-w-[60ch] text-[1.05rem] leading-8 text-foreground/90 [text-wrap:pretty] md:text-[1.12rem]">
                The University of Washington Engineering Horizons club runs{" "}
                <span className="font-semibold text-foreground">
                  robotics team projects
                </span>{" "}
                with workshops and help from{" "}
                <span className="font-semibold text-foreground">
                  officers and project leads
                </span>
                . Develop skills through{" "}
                <span className="font-semibold text-accent">
                  hands-on experience
                </span>
                —working on real projects,{" "}
                <span className="font-semibold text-accent">
                  receiving guidance from experienced team leads
                </span>
                , and refining practice through continuous feedback and
                iteration.{" "}
                <span className="font-semibold text-foreground">
                  All majors are encouraged to apply.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
