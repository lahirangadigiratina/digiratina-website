/**
 * Home page quality & security copy from digiratina.com.
 * CTA stays a hash until a security-compliance route exists.
 */
export const securityContent = {
  title: "Commitment to Quality & Security",
  description:
    "We are committed to upholding the highest standards of quality and security. Our certifications and compliances demonstrate our dedication to protecting your data and delivering reliable services.",
  items: [
    {
      badge: "/security/iso-27001-2022.svg",
      badgeAlt: "ISO 27701-2022",
      title: "ISMS (ISO/IEC 27001:2022)",
      status: "Certified",
      statusSrc: "/security/certified.svg",
      body: "Information Security Management System",
    },
    {
      badge: "/security/iso-27701-2019.svg",
      badgeAlt: "ISO 27701-2019",
      title: "PIMS (ISO/IEC 27701:2019)",
      status: "Certified",
      statusSrc: "/security/certified.svg",
      body: "Privacy Information Management System",
    },
    {
      badge: "/security/gdpr.svg",
      badgeAlt: "GDPR",
      title: "EU GDPR",
      status: "Compliant",
      statusSrc: "/security/compliant.svg",
      body: "General Data Protection Regulation",
    },
    {
      badge: "/security/pdpa.svg",
      badgeAlt: "PDPA Sri Lanka",
      title: "PDPA Sri Lanka",
      status: "Compliant",
      statusSrc: "/security/compliant.svg",
      body: "Personal Data Protection Act",
    },
  ],
  cta: {
    label: "Explore Our Security and Compliance",
    href: "#",
  },
} as const;
