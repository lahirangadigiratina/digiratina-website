import { companyContent } from "@/content/company";

export function CompanyIntro() {
  const { eyebrow, title, body } = companyContent;

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden bg-brand-navy py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgb(148_160_200/0.2)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgb(238_92_49/0.1)_0%,transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[780px]">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-brand-orange backdrop-blur-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              {eyebrow}
            </span>

            <h2 className="mt-6 text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:mt-7 sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem]">
              {title.lead}{" "}
              <span className="bg-gradient-to-r from-brand-orange to-brand-mist bg-clip-text text-transparent">
                {title.highlight}
              </span>{" "}
              {title.trail}
            </h2>

            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-brand-mist/80 sm:mt-7 sm:text-lg sm:leading-8">
              {body}
            </p>

            <div
              aria-hidden="true"
              className="mt-8 h-px w-16 bg-gradient-to-r from-brand-orange to-transparent sm:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
