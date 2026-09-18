import { apartContent } from "@/content/apart";

export function WhatSetsApart() {
  const { title, description, elements, closing } = apartContent;

  return (
    <section className="bg-brand-mist pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pt-14">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink/70 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {elements.map((element, index) => (
            <li
              key={element.title}
              className="group relative overflow-hidden rounded-2xl border border-brand-navy/8 bg-white p-6 shadow-[0_12px_40px_rgb(40_44_104/0.06)] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-orange/30 hover:shadow-[0_22px_50px_rgb(40_44_104/0.14)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-orange transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <span className="text-xs font-semibold tracking-[0.18em] text-brand-orange transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-brand-navy">
                {element.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                {element.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="relative mx-auto mt-16 max-w-[820px] px-8 py-12 sm:mt-20 sm:px-12 sm:py-14">
          <span
            aria-hidden="true"
            className="closing-frame absolute left-0 top-0 h-8 w-8 origin-top-left border-l-2 border-t-2 border-brand-orange"
          />
          <span
            aria-hidden="true"
            className="closing-frame closing-frame-delay absolute right-0 top-0 h-8 w-8 origin-top-right border-r-2 border-t-2 border-brand-orange"
          />
          <span
            aria-hidden="true"
            className="closing-frame closing-frame-delay absolute bottom-0 left-0 h-8 w-8 origin-bottom-left border-b-2 border-l-2 border-brand-orange"
          />
          <span
            aria-hidden="true"
            className="closing-frame absolute bottom-0 right-0 h-8 w-8 origin-bottom-right border-b-2 border-r-2 border-brand-orange"
          />

          <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-brand-orange">
            Founded in 2018
          </p>
          <h2 className="mt-5 text-center text-[1.75rem] font-semibold tracking-[-0.035em] text-brand-navy sm:text-4xl sm:leading-[1.15]">
            {closing.title.lead}{" "}
            <span className="text-brand-orange">{closing.title.highlight}</span>{" "}
            {closing.title.trail}
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] text-center text-base leading-relaxed text-brand-ink/70 sm:text-lg sm:leading-8">
            {closing.body}
          </p>
        </div>
      </div>
    </section>
  );
}
