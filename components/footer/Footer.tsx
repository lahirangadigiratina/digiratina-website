import { footerContent } from "@/content/footer";

export function Footer() {
  const {
    logo,
    tagline,
    primaryCta,
    secondaryCta,
    columns,
    contact,
    social,
    copyright,
    legal,
  } = footerContent;

  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1.15fr] lg:gap-8">
          <div>
            <a href={logo.href} className="inline-flex">
              <img
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={42}
                className="h-8 w-auto sm:h-9"
              />
            </a>
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-brand-ink/70">
              {tagline}
            </p>
            <div className="mt-6 grid max-w-[320px] grid-cols-2 gap-3">
              <a
                href={primaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand-navy px-4 text-center text-sm font-semibold text-white transition hover:bg-[#1f2358]"
              >
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-full border border-brand-navy/20 px-4 text-center text-sm font-semibold text-brand-navy transition hover:border-brand-navy hover:bg-brand-mist"
              >
                {secondaryCta.label}
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-navy">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-ink/70 transition hover:text-brand-navy"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div id="contact" className="scroll-mt-24">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-navy">
              {contact.title}
            </p>
            <ul className="mt-4 space-y-5">
              {contact.offices.map((office) => (
                <li key={office.label} className="flex gap-3">
                  <img
                    src="/footer/map.svg"
                    alt=""
                    width={16}
                    height={19}
                    className="mt-0.5 h-[18px] w-4 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">
                      {office.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-ink/70">
                      {office.address}
                    </p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <img
                  src="/footer/mail.svg"
                  alt=""
                  width={19}
                  height={15}
                  className="h-4 w-[19px] shrink-0"
                />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-semibold text-brand-navy transition hover:text-brand-orange"
                >
                  {contact.email}
                </a>
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block rounded-full ring-1 ring-brand-navy/10 transition hover:ring-brand-navy/30"
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-navy/8">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p className="text-xs text-brand-ink/60">{copyright}</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-brand-ink/60">
            {legal.map((item, index) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                {index > 0 && <span className="text-brand-orange">|</span>}
                <a href={item.href} className="transition hover:text-brand-navy">
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
