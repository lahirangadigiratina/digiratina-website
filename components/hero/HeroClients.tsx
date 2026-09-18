import Image from "next/image";

const partnersAlt =
  "Hayleys, ObexMetrics, Axiata Digital Labs, Miotiv, Hubbed, Advantis, Ooredoo, and Traveasy";

function PartnerStrip({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="flex shrink-0 items-center px-8 sm:px-12">
      <Image
        src="/clients/partners.png"
        alt={decorative ? "" : partnersAlt}
        width={1024}
        height={79}
        className="h-12 w-auto max-w-none sm:h-14"
        aria-hidden={decorative}
      />
    </div>
  );
}

export function HeroClients() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-stretch gap-4 bg-white/95 px-6 py-6 shadow-[0_16px_50px_rgb(0_0_0/0.18)] backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-7 lg:px-12">
        <p className="shrink-0 text-center text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy sm:text-left">
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
