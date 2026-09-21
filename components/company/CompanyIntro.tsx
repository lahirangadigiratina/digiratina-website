import { companyContent } from "@/content/company";
import { CompanyIntroAbstract } from "./CompanyIntroAbstract";

export function CompanyIntro() {
  const { eyebrow, title, body } = companyContent;

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden bg-brand-navy pb-20 pt-16 sm:pb-24 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(148_160_200/0.16)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_100%,rgb(238_92_49/0.12)_0%,transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgb(148_160_200/0.1)_0%,transparent_32%)]" />
      </div>

      <CompanyIntroAbstract />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[820px] rounded-[1.75rem] border border-brand-navy/8 bg-white px-8 py-12 shadow-[0_16px_48px_rgb(40_44_104/0.08)] sm:px-12 sm:py-14">
          <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-brand-orange">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-center text-[1.75rem] font-semibold tracking-[-0.035em] text-brand-navy sm:text-4xl sm:leading-[1.15]">
            {title.lead}{" "}
            <span className="text-brand-orange">{title.highlight}</span>{" "}
            {title.trail}
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] text-center text-base leading-relaxed text-brand-ink/70 sm:text-lg sm:leading-8">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
