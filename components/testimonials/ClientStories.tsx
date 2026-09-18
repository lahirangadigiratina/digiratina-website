"use client";

import { useState } from "react";
import { testimonialsContent } from "@/content/testimonials";

export function ClientStories() {
  const { title, description, items } = testimonialsContent;
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink/70 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-[980px] items-center gap-3 sm:mt-14 sm:gap-5">
          <button
            type="button"
            onClick={() => setActive((i) => (i - 1 + items.length) % items.length)}
            aria-label="Previous story"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-navy/15 bg-white text-brand-navy transition hover:border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            <ArrowLeft />
          </button>

          <div className="min-w-0 flex-1 rounded-[2rem] bg-white px-6 py-10 shadow-[0_20px_50px_rgb(40_44_104/0.08)] sm:px-12 sm:py-14">
            <span
              aria-hidden="true"
              className="block font-serif text-6xl leading-none text-brand-orange sm:text-7xl"
            >
              “
            </span>

            <blockquote
              key={item.project}
              className="mt-4 text-xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[1.65rem] sm:leading-[1.35]"
            >
              {item.quote}
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={item.photo}
                alt={item.person || item.client}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full bg-brand-mist object-cover"
              />
              <div>
                <p className="font-semibold text-brand-navy">
                  {item.person || item.client}
                </p>
                <p className="text-sm text-brand-ink/65">
                  {item.role}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-brand-navy/8 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
                {item.project}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                {item.solution}
              </p>
              {item.tech.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <li
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-mist px-2.5 py-1 text-[0.6875rem] font-medium text-brand-navy"
                    >
                      <TechIcon name={tech} />
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActive((i) => (i + 1) % items.length)}
            aria-label="Next story"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-navy/15 bg-white text-brand-navy transition hover:border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function TechIcon({ name }: { name: string }) {
  const className = "h-3.5 w-3.5 shrink-0";

  if (name === "Angular") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M12 2.2 3.6 5.2l1.3 14.1L12 21.8l7.1-2.5 1.3-14.1L12 2.2Z" fill="#EE5C31" />
        <path d="M12 4.4 18.4 18h-2.2l-1.3-3.2H9.1L7.8 18H5.6L12 4.4Zm0 4.1-1.9 4.7h3.8L12 8.5Z" fill="white" />
      </svg>
    );
  }

  if (name === "Kotlin") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M3 3h9.2L3 12.4V3Z" fill="#7F52FF" />
        <path d="M12.2 3 21 12.1 12.1 21 3.2 12.2 12.2 3Z" fill="#EE5C31" />
        <path d="M3 12.4 12.1 21H3v-8.6Z" fill="#1C3569" />
      </svg>
    );
  }

  return null;
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10.5 3.5 6 8l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M5.5 3.5 10 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
