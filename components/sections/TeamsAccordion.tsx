"use client";

import Image from "next/image";
import { useState } from "react";
import type { Team } from "@/lib/teams";

type Props = {
  teams: readonly Team[];
};

export default function TeamsAccordion({ teams }: Props) {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="mt-12 grid items-start gap-6 sm:grid-cols-2">
      {teams.map((team) => {
        const isOpen = open[team.name] ?? false;
        return (
          <article
            key={team.name}
            className="flex w-full flex-col border border-border bg-background/80"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() =>
                setOpen((prev) => ({
                  ...prev,
                  [team.name]: !prev[team.name],
                }))
              }
              className="w-full cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="relative aspect-[16/6] w-full overflow-hidden bg-foreground">
                <Image
                  src={team.logoSrc}
                  alt={`${team.name} logo`}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
                <h3 className="font-heading text-[clamp(1.3rem,1.6vw+0.45rem,1.8rem)] font-medium leading-tight tracking-tight text-foreground">
                  {team.name}
                </h3>
                <span className="font-mono text-sm text-muted" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </div>
            </button>
            <div
              className="grid min-h-0 transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:duration-0"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div
                className="min-h-0 overflow-hidden"
                aria-hidden={!isOpen}
              >
                <div
                  className={
                    isOpen
                      ? "border-t border-border px-5 pb-5 pt-4"
                      : "px-5 pb-0 pt-0"
                  }
                >
                  <p className="text-[0.8125rem] leading-[1.62] text-muted [text-wrap:pretty] sm:text-sm sm:leading-relaxed">
                    {team.description}
                  </p>
                  {isOpen ? (
                    <div className="relative mt-5 aspect-[16/9] w-full min-h-[12rem] overflow-hidden border border-border bg-surface sm:min-h-[14rem] md:min-h-[16rem]">
                      
                      <img
                        src={team.photoSrc}
                        alt={`${team.name} team photo`}
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
