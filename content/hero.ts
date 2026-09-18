/**
 * Home page Hero copy.
 *
 * Headline uses the provided home-page wording; line breaks match the
 * intended wrap. `highlight` receives the orange treatment.
 */
export const heroContent = {
  headline: {
    line1: "We work with Corporates",
    line2: "to build award winning",
    highlight: "Technology Solutions",
    trail: "ground up",
  },
  presence: {
    label: "8 countries served",
    countries: [
      { name: "USA", code: "us" },
      { name: "UK", code: "gb" },
      { name: "Saudi Arabia", code: "sa" },
      { name: "UAE", code: "ae" },
      { name: "Maldives", code: "mv" },
      { name: "Sri Lanka", code: "lk" },
      { name: "Singapore", code: "sg" },
      { name: "Australia", code: "au" },
    ],
  },
  primaryCta: {
    label: "Find your solution",
    href: "#",
  },
  secondaryCta: {
    label: "Get free consultation",
    href: "#",
  },
} as const;
