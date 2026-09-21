"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { hireCta, navLinks } from "@/content/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto mt-4 w-[calc(100%-1.5rem)] max-w-[1180px] sm:mt-5 sm:w-[calc(100%-2rem)]">
        <div
          className={`flex items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out sm:pl-5 ${
            scrolled
              ? "border border-white/50 bg-white/65 shadow-[0_8px_32px_rgb(40_44_104/0.14)] backdrop-blur-xl backdrop-saturate-150"
              : "border border-transparent bg-white shadow-[0_10px_40px_rgb(40_44_104/0.16)]"
          }`}
        >
          <a href="/" className="flex shrink-0 items-center pl-1 pr-2 sm:pr-3">
            <Image
              src="/digiratina-logo.png"
              alt="Digiratina Technology Solutions"
              width={300}
              height={70}
              className="h-6 w-auto sm:h-7"
              priority
            />
          </a>

          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-[0.875rem] font-medium text-brand-ink/70 transition-colors duration-200 hover:text-brand-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={hireCta.href}
              className="group hidden h-11 items-center gap-2.5 rounded-full bg-brand-navy pl-5 pr-1.5 text-[0.875rem] font-semibold text-white transition duration-200 hover:bg-[#1f2358] sm:inline-flex"
            >
              {hireCta.label}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="M6 14 14 6M8 6h6v6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-mist xl:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition duration-200 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-4 bg-current transition duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition duration-200 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id={panelId}
          hidden={!open}
          className={`mt-3 overflow-hidden rounded-[1.75rem] p-3 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out xl:hidden ${
            scrolled
              ? "border border-white/50 bg-white/70 shadow-[0_12px_40px_rgb(40_44_104/0.14)] backdrop-blur-xl backdrop-saturate-150"
              : "border border-transparent bg-white shadow-[0_16px_50px_rgb(40_44_104/0.18)]"
          }`}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-brand-ink/80 transition-colors hover:bg-brand-mist hover:text-brand-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={hireCta.href}
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy text-sm font-semibold text-white sm:hidden"
              onClick={() => setOpen(false)}
            >
              {hireCta.label}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-3.5 w-3.5"
              >
                <path
                  d="M6 14 14 6M8 6h6v6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
