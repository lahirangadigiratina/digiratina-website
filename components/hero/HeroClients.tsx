import Image from "next/image";

const partnersAlt =
  "Hayleys, ObexMetrics, Axiata Digital Labs, Miotiv, Hubbed, Advantis, Ooredoo, and Traveasy";

function PartnerStrip({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="flex shrink-0 items-center px-4 min-[480px]:px-8 sm:px-12">
      <Image
        src="/clients/partners.png"
        alt={decorative ? "" : partnersAlt}
        width={1024}
        height={79}
        className="h-9 w-auto max-w-none min-[480px]:h-11 sm:h-12 md:h-14"
        aria-hidden={decorative}
      />
    </div>
  );
}

export function HeroClients() {
  return (
    <div className="mt-auto w-full shrink-0">
      <div className="flex w-full flex-col items-stretch gap-3 bg-white/95 px-4 py-4 shadow-[0_16px_50px_rgb(0_0_0/0.18)] backdrop-blur-sm min-[480px]:gap-4 min-[480px]:px-6 min-[480px]:py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-7 lg:px-12">
        <p className="shrink-0 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand-navy min-[480px]:text-xs min-[480px]:tracking-[0.22em] sm:text-left">
          Trusted by
        </p>
        <span
          aria-hidden="true"
          className="hidden h-10 w-px shrink-0 bg-brand-navy/10 sm:block"
        />
        <div
          className="logo-marquee relative min-w-0 flex-1 overflow-hidden"
          tabIndex={0}
          aria-label="Partner logos. Scrolls automatically. Hover or focus to pause."
        >
          <div className="logo-marquee-track">
            <PartnerStrip />
            <div className="logo-marquee-clone">
              <PartnerStrip decorative />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
