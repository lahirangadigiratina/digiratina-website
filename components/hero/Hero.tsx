import { heroContent } from "@/content/hero";
import { HeroClients } from "./HeroClients";
import { HeroPresence } from "./HeroPresence";

export function Hero() {
  const { headline, primaryCta, secondaryCta } = heroContent;

  return (
    <section className="relative isolate w-full overflow-hidden bg-brand-navy">
      {/* Background composition: navy base, cool light from the upper right,
          a restrained orange accent, a faint grid and a soft bottom vignette. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(40_44_104/0)_0%,rgb(28_53_105/0.8)_48%,rgb(28_53_105/0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_86%_6%,rgb(148_160_200/0.2)_0%,transparent_56%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgb(238_92_49/0.13)_0%,transparent_38%)]" />
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_80%_at_50%_120%,rgb(0_0_0/0.38)_0%,transparent_62%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-16">
        <div className="flex items-center lg:min-h-[min(86svh,860px)]">
          <div className="w-full">
            <HeroPresence />

            <h1 className="mx-auto mt-6 max-w-[620px] text-center text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-5xl md:text-[3.5rem] lg:mt-7 lg:max-w-[720px] lg:text-[3.625rem] lg:leading-[1.05] xl:text-[4rem]">
              {headline.line1}
              <br />
              {headline.line2}
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-orange from-25% to-brand-mist bg-clip-text text-transparent">
                  {headline.highlight}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-brand-orange via-brand-orange/50 to-transparent"
                />
              </span>
              <br />
              {headline.trail}
            </h1>

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
      </div>

      <HeroClients />
    </section>
  );
}
