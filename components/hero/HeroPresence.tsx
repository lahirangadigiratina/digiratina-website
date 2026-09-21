import { heroContent } from "@/content/hero";

type CountryCode = (typeof heroContent.presence.countries)[number]["code"];

function FlagArt({ code }: { code: CountryCode }) {
  switch (code) {
    case "us":
      return (
        <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden="true">
          <rect width="60" height="40" fill="#B22234" />
          <rect y="3.08" width="60" height="3.08" fill="#fff" />
          <rect y="9.23" width="60" height="3.08" fill="#fff" />
          <rect y="15.38" width="60" height="3.08" fill="#fff" />
          <rect y="21.54" width="60" height="3.08" fill="#fff" />
          <rect y="27.69" width="60" height="3.08" fill="#fff" />
          <rect y="33.85" width="60" height="3.08" fill="#fff" />
          <rect width="24" height="21.54" fill="#3C3B6E" />
        </svg>
      );
    case "gb":
      return (
        <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden="true">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0 60 40M60 0 0 40" stroke="#fff" strokeWidth="8" />
          <path d="M0 0 60 40M60 0 0 40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="13" />
          <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="8" />
        </svg>
      );
    case "sa":
      return (
        <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden="true">
          <rect width="60" height="40" fill="#006C35" />
          <path
            d="M12 22h36"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M44 22c2 0 4 1.2 4 3s-2 3-4 3"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 14c4-4 24-4 28 0 0 4-8 6-14 6s-14-2-14-6Z"
            fill="#fff"
          />
        </svg>
      );
    case "ae":
      return (
        <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden="true">
          <rect width="60" height="13.34" fill="#00732F" />
          <rect y="13.33" width="60" height="13.34" fill="#fff" />
          <rect y="26.66" width="60" height="13.34" fill="#000" />
          <rect width="15" height="40" fill="#FF0000" />
        </svg>
      );
    case "mv":
      return (
        <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden="true">
          <rect width="60" height="40" fill="#D21034" />
          <rect x="12" y="10" width="36" height="20" fill="#007E3A" />
          <circle cx="32" cy="20" r="6" fill="#fff" />
          <circle cx="34.5" cy="20" r="5" fill="#007E3A" />
        </svg>
      );
    case "lk":
      return (
        <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden="true">
          <rect width="60" height="40" fill="#FFB700" />
          <rect x="3" y="3" width="10" height="34" fill="#00534E" />
          <rect x="13" y="3" width="10" height="34" fill="#EB7400" />
          <rect x="23" y="3" width="34" height="34" fill="#8D1B3D" />
          <circle cx="40" cy="20" r="7" fill="#FFB700" />
        </svg>
      );
    case "sg":
      return (
        <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden="true">
          <rect width="60" height="20" fill="#EF3340" />
          <rect y="20" width="60" height="20" fill="#fff" />
          <circle cx="16" cy="10" r="6" fill="#fff" />
          <circle cx="18.8" cy="10" r="5" fill="#EF3340" />
          <circle cx="27" cy="6.2" r="1.2" fill="#fff" />
          <circle cx="30.4" cy="8.6" r="1.2" fill="#fff" />
          <circle cx="29.2" cy="12.6" r="1.2" fill="#fff" />
          <circle cx="24.8" cy="12.6" r="1.2" fill="#fff" />
          <circle cx="23.6" cy="8.6" r="1.2" fill="#fff" />
        </svg>
      );
    case "au":
      return (
        <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden="true">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
          <path d="M0 0 30 20M30 0 0 20" stroke="#C8102E" strokeWidth="2" />
          <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6.5" />
          <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="4" />
          <circle cx="45" cy="12" r="1.6" fill="#fff" />
          <circle cx="50" cy="18" r="1.3" fill="#fff" />
          <circle cx="42" cy="22" r="1.3" fill="#fff" />
          <circle cx="48" cy="28" r="1.3" fill="#fff" />
          <circle cx="38" cy="16" r="1.1" fill="#fff" />
          <circle cx="22" cy="30" r="2.2" fill="#fff" />
        </svg>
      );
  }
}

const risingDots = [
  { left: "6%", delay: "0s", duration: "4.2s", size: "h-1 w-1", color: "bg-brand-steel" },
  { left: "14%", delay: "-0.8s", duration: "5.1s", size: "h-1.5 w-1.5", color: "bg-brand-orange/80" },
  { left: "22%", delay: "-2.1s", duration: "3.8s", size: "h-1 w-1", color: "bg-brand-mist" },
  { left: "31%", delay: "-1.4s", duration: "4.7s", size: "h-0.5 w-0.5", color: "bg-white" },
  { left: "39%", delay: "-3.2s", duration: "5.4s", size: "h-1 w-1", color: "bg-brand-steel/80" },
  { left: "47%", delay: "-0.4s", duration: "4s", size: "h-1.5 w-1.5", color: "bg-brand-orange/70" },
  { left: "55%", delay: "-2.6s", duration: "3.6s", size: "h-1 w-1", color: "bg-white/80" },
  { left: "63%", delay: "-1.1s", duration: "5s", size: "h-0.5 w-0.5", color: "bg-brand-mist" },
  { left: "71%", delay: "-3.5s", duration: "4.4s", size: "h-1 w-1", color: "bg-brand-steel" },
  { left: "79%", delay: "-0.6s", duration: "3.9s", size: "h-1.5 w-1.5", color: "bg-brand-orange/75" },
  { left: "87%", delay: "-2s", duration: "5.2s", size: "h-1 w-1", color: "bg-brand-mist/80" },
  { left: "94%", delay: "-1.7s", duration: "4.6s", size: "h-0.5 w-0.5", color: "bg-white" },
  { left: "10%", delay: "-4s", duration: "6s", size: "h-1 w-1", color: "bg-brand-steel/70" },
  { left: "50%", delay: "-2.9s", duration: "3.4s", size: "h-1 w-1", color: "bg-brand-orange/60" },
  { left: "84%", delay: "-3.8s", duration: "4.8s", size: "h-1 w-1", color: "bg-white/70" },
] as const;

export function HeroPresence() {
  const { label, countries } = heroContent.presence;

  return (
    <div className="relative isolate flex w-full justify-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-[min(100%,18rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden min-[480px]:h-36 min-[480px]:w-[22rem] sm:w-[26rem]"
      >
        {risingDots.map((dot, index) => (
          <span
            key={index}
            className={`presence-rise absolute bottom-0 rounded-full ${dot.size} ${dot.color}`}
            style={{
              left: dot.left,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      <div className="hero-presence-scroll max-w-full overflow-x-auto px-1">
        <div
          className="relative mx-auto inline-flex w-max max-w-none items-center gap-1.5 rounded-full border border-brand-orange/50 bg-[#0b0d16] py-1 pl-1 pr-2.5 shadow-[0_10px_30px_rgb(0_0_0/0.28)] min-[480px]:gap-2 min-[480px]:pr-3 sm:gap-3 sm:py-1.5 sm:pl-1.5 sm:pr-4"
          aria-label={`${label}: ${countries.map((country) => country.name).join(", ")}`}
        >
          <ul className="flex shrink-0 items-center pl-0.5">
            {countries.map((country) => (
              <li
                key={country.code}
                className="-ml-[0.3rem] first:ml-0 min-[480px]:-ml-1 sm:-ml-1.5"
                title={country.name}
              >
                <span className="relative block h-[1.125rem] w-[1.125rem] overflow-hidden rounded-full ring-2 ring-[#0b0d16] min-[480px]:h-5 min-[480px]:w-5 sm:h-7 sm:w-7">
                  <FlagArt code={country.code} />
                </span>
                <span className="sr-only">{country.name}</span>
              </li>
            ))}
          </ul>
          <p className="shrink-0 text-[0.625rem] font-semibold tracking-tight text-white min-[480px]:text-[0.6875rem] sm:whitespace-nowrap sm:text-sm">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
