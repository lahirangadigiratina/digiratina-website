/**
 * Primary site navigation.
 * Destinations are hash placeholders — no additional routes yet.
 */
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Engagement Models", href: "#engagement-models" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Careers", href: "#careers" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const hireCta = {
  label: "Hire Developers",
  href: "#hire-developers",
} as const;
