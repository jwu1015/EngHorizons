"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FOOTER_LOGO_SRC } from "@/lib/footerLogo";
import { HEADER_NAV } from "@/lib/nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 min-h-[5rem] overflow-hidden border-b border-zinc-800 bg-zinc-950/95 text-zinc-100 backdrop-blur-md md:min-h-[5.5rem]"
    >
      <div className="relative z-[2] section-container flex h-[5rem] items-center justify-between md:h-[5.5rem]">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 font-heading text-[1.35rem] font-bold uppercase tracking-[-0.03em] md:gap-4 md:text-[1.5rem]"
          onClick={() => setMenuOpen(false)}
        >
          <span className="inline-flex shrink-0 text-accent" aria-hidden>
            <svg
              className="size-[1.5rem] md:size-[1.65rem]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.217.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          <span className="relative h-11 w-[3.25rem] shrink-0 overflow-hidden rounded-sm border border-zinc-700 bg-zinc-900 md:h-12 md:w-[3.8rem]">
            <Image
              src={FOOTER_LOGO_SRC}
              alt=""
              fill
              className="object-cover object-center"
              sizes="60px"
            />
          </span>
          <span className="truncate">
            <span className="text-white">Engineering </span>
            <span className="text-accent">Horizons</span>
          </span>
        </Link>

        <button
          type="button"
          id="header-menu-button"
          className="flex size-12 shrink-0 items-center justify-center border border-zinc-600 bg-zinc-900 text-zinc-200 transition-colors [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:border-accent hover:text-accent md:size-[3.25rem]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="header-nav-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="size-[1.5rem] md:size-[1.65rem]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="header-nav-panel"
        className={`relative z-[2] border-zinc-800 bg-zinc-950 px-4 transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none md:px-6 ${
          menuOpen
            ? "max-h-80 translate-y-0 border-t py-4 opacity-100 md:py-5"
            : "pointer-events-none max-h-0 -translate-y-2 border-t-0 py-0 opacity-0"
        }`}
        aria-label="Main"
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-1 sm:gap-0 sm:py-1 md:flex-row md:flex-wrap md:justify-end md:gap-x-10 md:gap-y-2">
          {HEADER_NAV.map(({ label, href }) => {
            const isExternal = href.startsWith("http");
            return (
              <li key={href}>
                <Link
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="block rounded-sm py-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-400 transition-colors [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:bg-zinc-900 hover:text-accent md:inline-block md:py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
