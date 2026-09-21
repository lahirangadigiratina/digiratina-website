const sparks = [
  { left: "12%", delay: "0s", duration: "4.5s", size: "h-1 w-1" },
  { left: "22%", delay: "-1.2s", duration: "5.2s", size: "h-1.5 w-1.5" },
  { left: "34%", delay: "-2.4s", duration: "4.1s", size: "h-1 w-1" },
  { left: "48%", delay: "-0.6s", duration: "5.8s", size: "h-0.5 w-0.5" },
  { left: "62%", delay: "-3.1s", duration: "4.8s", size: "h-1 w-1" },
  { left: "74%", delay: "-1.8s", duration: "5.4s", size: "h-1.5 w-1.5" },
  { left: "86%", delay: "-2.7s", duration: "4.3s", size: "h-1 w-1" },
] as const;

export function CompanyIntroAbstract() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="about-aurora about-aurora-a absolute -left-[10%] top-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgb(148_160_200/0.28)_0%,transparent_68%)] blur-3xl sm:h-96 sm:w-96" />
      <div className="about-aurora about-aurora-b absolute -right-[8%] bottom-[6%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgb(238_92_49/0.22)_0%,transparent_70%)] blur-3xl sm:h-[26rem] sm:w-[26rem]" />

      <div className="absolute left-1/2 top-1/2 h-[min(92vw,36rem)] w-[min(92vw,36rem)] -translate-x-1/2 -translate-y-1/2">
        <div className="about-orbit-ring absolute inset-0 rounded-full border border-brand-mist/10" />
        <div className="about-orbit-ring about-orbit-ring-delay absolute inset-[12%] rounded-full border border-brand-steel/15" />
        <div className="about-orbit-ring about-orbit-ring-slow absolute inset-[24%] rounded-full border border-brand-orange/15" />
      </div>

      <svg
        viewBox="0 0 1320 560"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-70"
        fill="none"
      >
        <path
          className="about-beam"
          d="M-40 120 C320 80, 520 180, 900 140 S 1380 90, 1360 40"
          stroke="url(#about-beam-steel)"
          strokeWidth="1.5"
        />
        <path
          className="about-beam about-beam-delay"
          d="M-20 430 C280 470, 540 360, 860 410 S 1340 480, 1360 520"
          stroke="url(#about-beam-orange)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="about-beam-steel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(148 160 200 / 0)" />
            <stop offset="45%" stopColor="rgb(148 160 200 / 0.35)" />
            <stop offset="100%" stopColor="rgb(148 160 200 / 0)" />
          </linearGradient>
          <linearGradient id="about-beam-orange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(238 92 49 / 0)" />
            <stop offset="50%" stopColor="rgb(238 92 49 / 0.28)" />
            <stop offset="100%" stopColor="rgb(238 92 49 / 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-40 overflow-hidden">
        {sparks.map((spark, index) => (
          <span
            key={index}
            className={`about-spark absolute bottom-0 rounded-full bg-brand-mist/80 ${spark.size}`}
            style={{
              left: spark.left,
              animationDelay: spark.delay,
              animationDuration: spark.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
