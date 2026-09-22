import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { careersContent } from "@/content/careers";

export function CareerAdventure() {
  const { title, description, cta, video } = careersContent;

  return (
    <section
      id="careers"
      className="relative isolate overflow-hidden bg-brand-navy scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(148_160_200/0.16)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_100%,rgb(238_92_49/0.14)_0%,transparent_36%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-mist/80 sm:text-lg sm:leading-8">
            {description}
          </p>

          <a
            href={cta.href}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-brand-orange py-1 pl-6 pr-1 text-sm font-semibold tracking-tight text-white shadow-[0_12px_32px_-10px_rgb(238_92_49/0.75)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-orange/95 hover:shadow-[0_20px_46px_-12px_rgb(238_92_49/0.9)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-orange sm:mt-10 sm:pl-7 sm:text-base"
          >
            {cta.label}
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-navy sm:h-12 sm:w-12">
              <ArrowIcon
                className="h-4 w-4"
                durationClassName="duration-300 ease-out"
              />
            </span>
          </a>
        </div>

        <div className="relative mx-auto mt-12 aspect-video w-full max-w-[960px] overflow-hidden rounded-[1.5rem] bg-black shadow-[0_24px_60px_rgb(0_0_0/0.35)] sm:mt-14">
          <iframe
            src={video.src}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
