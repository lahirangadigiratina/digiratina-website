import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { heroContent } from "@/content/hero";
import { HeroClients } from "./HeroClients";
import { HeroPresence } from "./HeroPresence";

export function Hero() {
  const { headline, primaryCta, secondaryCta } = heroContent;

  return (
    <section className="relative isolate flex w-full flex-col overflow-hidden bg-brand-navy">
      {/* Background composition: navy base, cool light from the upper right,
          a restrained orange accent, a faint grid and a soft bottom vignette. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(40_44_104/0)_0%,rgb(28_53_105/0.8)_48%,rgb(28_53_105/0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_86%_6%,rgb(148_160_200/0.2)_0%,transparent_56%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgb(238_92_49/0.13)_0%,transparent_38%)]" />
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_80%_at_50%_120%,rgb(0_0_0/0.38)_0%,transparent_62%)]" />
      </div>

      <div className="hero-shell mx-auto w-full max-w-[1320px] px-4 min-[480px]:px-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[760px] flex-col items-center">
          <HeroPresence />

          <h1 className="hero-headline mt-5 w-full text-balance text-center font-semibold tracking-[-0.025em] text-white min-[480px]:mt-6 sm:mt-7">
            {headline.line1}
            <br />
            {headline.line2}
            <br />
            <span className="relative inline-block whitespace-normal sm:whitespace-nowrap">
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

          <div className="mt-7 flex w-full max-w-[min(100%,28rem)] flex-col items-stretch gap-3 min-[480px]:mt-8 md:mx-auto md:mt-10 md:max-w-none md:w-auto md:flex-row md:items-center md:justify-center md:gap-4">
            <a
              href={primaryCta.href}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-orange py-1 pl-5 pr-1 text-sm font-semibold tracking-tight text-white shadow-[0_12px_32px_-10px_rgb(238_92_49/0.75)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-orange/95 hover:shadow-[0_20px_46px_-12px_rgb(238_92_49/0.9)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-orange min-[480px]:gap-3 min-[480px]:pl-6 md:w-auto md:justify-start md:pl-7 md:text-base"
            >
              {primaryCta.label}
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-navy min-[480px]:h-10 min-[480px]:w-10 sm:h-12 sm:w-12">
                <ArrowIcon
                  className="h-3.5 w-3.5 min-[480px]:h-4 min-[480px]:w-4"
                  durationClassName="duration-300 ease-out"
                />
              </span>
            </a>

            <a
              href={secondaryCta.href}
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-medium tracking-wide text-brand-mist backdrop-blur-sm transition duration-300 ease-out hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-mist/70 min-[480px]:h-12 min-[480px]:px-7 md:h-14 md:w-auto md:text-base"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <HeroClients />
    </section>
  );
}
