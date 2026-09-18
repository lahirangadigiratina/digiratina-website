import { insightsContent } from "@/content/insights";

export function StayUpdated() {
  const { title, description, primaryCta, secondaryCta } = insightsContent;

  return (
    <section
      id="blogs"
      className="relative isolate overflow-hidden bg-brand-navy py-20 scroll-mt-24 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(148_160_200/0.16)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_100%,rgb(238_92_49/0.14)_0%,transparent_36%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-mist/80 sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={primaryCta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-brand-orange py-1 pl-6 pr-1 text-sm font-semibold tracking-tight text-white shadow-[0_12px_32px_-10px_rgb(238_92_49/0.75)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-orange/95 hover:shadow-[0_20px_46px_-12px_rgb(238_92_49/0.9)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-orange sm:pl-7 sm:text-base"
            >
              {primaryCta.label}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-navy transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-12 sm:w-12">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
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

            <a
              href={secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-medium tracking-wide text-brand-mist backdrop-blur-sm transition duration-300 ease-out hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-mist/70 sm:h-14 sm:text-base"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
