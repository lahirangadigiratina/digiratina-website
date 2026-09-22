import { apartContent } from "@/content/apart";
import { ApartRow } from "./ApartRow";

export function WhatSetsApart() {
  const { title, description, elements } = apartContent;

  return (
    <section className="bg-brand-mist pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pt-14">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink/70 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-[960px] flex-col gap-4 sm:mt-14 lg:mt-16 lg:gap-5">
          <ApartRow elements={[elements[0], elements[1]]} startIndex={0} />
          <ApartRow elements={[elements[2], elements[3]]} startIndex={2} />
        </div>
      </div>
    </section>
  );
}
