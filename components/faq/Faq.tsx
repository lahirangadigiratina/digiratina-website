"use client";

import { useId, useState } from "react";
import { faqContent } from "@/content/faq";

export function Faq() {
  const { title, items } = faqContent;
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();
  const left = items.slice(0, 3);
  const right = items.slice(3);

  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-2 lg:gap-6">
          <FaqColumn
            items={left}
            start={0}
            open={open}
            setOpen={setOpen}
            baseId={baseId}
          />
          <FaqColumn
            items={right}
            start={3}
            open={open}
            setOpen={setOpen}
            baseId={baseId}
          />
        </div>
      </div>
    </section>
  );
}

function FaqColumn({
  items,
  start,
  open,
  setOpen,
  baseId,
}: {
  items: readonly (typeof faqContent.items)[number][];
  start: number;
  open: number | null;
  setOpen: (index: number | null) => void;
  baseId: string;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, offset) => {
        const index = start + offset;
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li
            key={item.question}
            className="rounded-2xl border border-brand-navy/8 bg-white"
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="text-base font-semibold tracking-[-0.02em] text-brand-navy sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-orange/10 text-brand-orange"
                >
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-sm leading-relaxed text-brand-ink/70 sm:text-base sm:leading-7">
                {item.answer}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1.5v11M1.5 7h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1.5 7h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
