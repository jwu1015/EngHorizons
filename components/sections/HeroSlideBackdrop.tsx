"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BACKGROUND_SLIDE_COUNT,
  BACKGROUND_SLIDES,
} from "@/lib/backgroundSlides";

const AUTO_ADVANCE_MS = 5500;

type HeroSlideBackdropProps = {
  children: React.ReactNode;
};

export default function HeroSlideBackdrop({ children }: HeroSlideBackdropProps) {
  const [active, setActive] = useState(0);
  const regionRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setActive(
      ((index % BACKGROUND_SLIDE_COUNT) + BACKGROUND_SLIDE_COUNT) %
        BACKGROUND_SLIDE_COUNT
    );
  }, []);

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % BACKGROUND_SLIDE_COUNT);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      if (e.key === "ArrowLeft") goPrev();
      else goNext();
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  return (
    <div
      ref={regionRef}
      tabIndex={0}
      className="relative min-h-[min(92vh,52rem)] w-full overflow-hidden rounded-none border-0 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent focus-visible:ring-offset-0 sm:min-h-[min(90vh,56rem)] lg:min-h-[min(88vh,60rem)]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero background images"
    >
      <div aria-hidden className="absolute inset-0">
        {BACKGROUND_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
              i === active ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 z-[2] bg-gradient-to-br from-black/88 via-zinc-950/85 to-violet-950/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgb(124_58_237/0.14),transparent_55%)]"
      />

      <div className="hero-slide-inner relative z-[3] flex min-h-[inherit] w-full flex-col justify-end pb-10 pt-10 sm:pb-14 sm:pt-12 md:pb-16 md:pt-14 lg:pb-20 lg:pt-16">
        {children}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-[4] flex items-center justify-between px-2 sm:px-3 md:px-4">
        <button
          type="button"
          onClick={goPrev}
          className="pointer-events-auto flex size-10 items-center justify-center border border-white/25 bg-black/35 text-zinc-100 backdrop-blur-sm transition-colors [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:border-accent hover:text-accent md:size-11"
          aria-label="Previous slide"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="pointer-events-auto flex size-10 items-center justify-center border border-white/25 bg-black/35 text-zinc-100 backdrop-blur-sm transition-colors [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:border-accent hover:text-accent md:size-11"
          aria-label="Next slide"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <p className="pointer-events-none absolute bottom-4 left-0 right-0 z-[4] flex justify-center px-4">
        <span className="inline-flex items-center rounded-sm border border-white/15 bg-black/65 px-2.5 py-1 font-mono text-[0.78rem] font-medium tabular-nums text-zinc-100 shadow-md shadow-black/40 backdrop-blur-md">
          {active + 1} / {BACKGROUND_SLIDE_COUNT}
        </span>
      </p>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="size-5 md:size-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}
