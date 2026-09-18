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
  const { title, description, items } = servicesContent;

  return (
    <section id="services" className="bg-white py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink/70 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl border border-brand-navy/8 bg-brand-mist/50 p-6 sm:p-7"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <ServiceIcon name={item.icon} />
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/70">
                {item.body}
              </p>
              <a
                href={item.cta.href}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-navy"
              >
                {item.cta.label}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M4 10h11M11 6l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
