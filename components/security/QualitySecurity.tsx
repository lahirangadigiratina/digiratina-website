import { securityContent } from "@/content/security";

export function QualitySecurity() {
  const { title, description, items, cta } = securityContent;

  return (
    <section id="security" className="bg-white py-20 sm:py-24 scroll-mt-24">
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
          {items.map((item) => (
            <li
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-navy/8 bg-brand-mist/50 p-6 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-orange/30 hover:bg-white hover:shadow-[0_22px_50px_rgb(40_44_104/0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-orange transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <img
                src={item.badge}
                alt={item.badgeAlt}
                className="h-[100px] w-auto self-start object-contain transition duration-300 ease-out group-hover:scale-[1.04]"
              />
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                {item.body}
              </p>
              <img
                src={item.statusSrc}
                alt={item.status}
                width={116}
                height={30}
                className="mt-auto h-12 w-[186px] shrink-0 self-start pt-5 object-contain object-left"
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href={cta.href}
            className="group inline-flex items-center gap-3 rounded-full bg-brand-orange py-1 pl-6 pr-1 text-sm font-semibold tracking-tight text-white shadow-[0_12px_32px_-10px_rgb(238_92_49/0.75)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-orange/95 hover:shadow-[0_20px_46px_-12px_rgb(238_92_49/0.9)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-orange sm:pl-7 sm:text-base"
          >
            {cta.label}
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
        </div>
      </div>
    </section>
  );
}
