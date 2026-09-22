import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { servicesContent } from "@/content/services";

type IconName = (typeof servicesContent.items)[number]["icon"];

function ServiceIcon({ name }: { name: IconName }) {
  const className = "h-6 w-6";

  switch (name) {
    case "all":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.7" />
          <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.7" />
          <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.7" />
          <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "startups":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M14.5 4.5c2.8 1.2 5 3.8 5.5 6.7-2.4.2-5.1-.7-7.2-2.4C10.8 7.1 9.5 5.2 9.2 3.8c1.9.2 3.7.5 5.3.7Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M12.2 10.2 7 16.8M10.8 8.6 5.8 9.8 8 14.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.2 17.6c.8 1.4 2 2.3 3.6 2.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "enterprises":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M4 20V8.5L12 4l8 4.5V20"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 20v-6h6v6M10 10h.01M14 10h.01M10 13h.01M14 13h.01"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function DiscoverServices() {
  const { eyebrow, title, description, items } = servicesContent;

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0 opacity-[0.35]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgb(238_92_49/0.04)_0%,transparent_50%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-x-16 lg:gap-y-0">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-brand-orange backdrop-blur-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              {eyebrow}
            </span>

            <h2 className="mt-6 text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.035em] text-brand-navy sm:mt-7 sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem]">
              {title.lead}{" "}
              <span className="bg-gradient-to-r from-brand-orange to-brand-navy bg-clip-text text-transparent">
                {title.highlight}
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-6 h-px w-16 bg-gradient-to-r from-brand-orange to-transparent sm:mt-7"
            />
          </div>

          <p className="max-w-[48ch] text-base leading-relaxed text-brand-ink/70 sm:text-lg sm:leading-8 lg:pb-1">
            {description}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border border-brand-navy/8 bg-brand-mist/40 p-6 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-orange/25 hover:bg-white hover:shadow-[0_24px_56px_rgb(40_44_104/0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-orange transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-3 select-none font-serif text-[5.5rem] leading-none text-brand-navy/[0.04] transition duration-300 group-hover:text-brand-orange/[0.07]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-orange/10 text-brand-orange transition duration-300 ease-out group-hover:scale-105 group-hover:bg-brand-orange group-hover:text-white">
                <ServiceIcon name={item.icon} />
              </span>

              <h3 className="relative mt-5 text-xl font-semibold tracking-[-0.02em] text-brand-navy">
                {item.title}
              </h3>

              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-brand-ink/70">
                {item.body}
              </p>

              <a
                href={item.cta.href}
                className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-navy"
              >
                {item.cta.label}
                <ArrowIcon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
