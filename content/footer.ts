/**
 * Site footer copy from digiratina.com.
 * Internal destinations stay hashes until those routes exist.
 */
export const footerContent = {
  logo: {
    src: "/digiratina-logo.png",
    alt: "Digiratina Technology Solutions Pvt. Ltd.",
    href: "/",
  },
  tagline:
    "Empowering enterprises with agile engineering and cutting-edge software solutions.",
  primaryCta: {
    label: "Hire Developers",
    href: "#hire-developers",
  },
  secondaryCta: {
    label: "Contact Us",
    href: "#contact",
  },
  columns: [
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "#about" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "Blog", href: "#blogs" },
        { label: "Careers", href: "#careers" },
        { label: "Referral Partner Program", href: "#referral" },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { label: "Services", href: "#services" },
        { label: "Engagement Models", href: "#engagement-models" },
        { label: "Security Compliance", href: "#security" },
        { label: "Privacy Policy", href: "#privacy" },
      ],
    },
  ],
  contact: {
    title: "CONTACT US",
    offices: [
      {
        label: "Sri Lanka",
        address: "399/2/1, Colombo Road, Pepiliyana, Sri Lanka",
      },
      {
        label: "Singapore",
        address: "3 Shenton Way, # 19-02, Shenton House, Singapore 068805",
      },
    ],
    email: "info@digiratina.com",
  },
  social: [
    {
      label: "facebook",
      href: "https://web.facebook.com/digiratina",
      icon: "/footer/facebook.svg",
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/company/digiratina/",
      icon: "/footer/linkedin.svg",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/digiratina_tech",
      icon: "/footer/instagram.svg",
    },
    {
      label: "Good Firm",
      href: "https://www.goodfirms.co/company/digiratina-technology-solutions",
      icon: "/footer/goodfirms.svg",
    },
    {
      label: "Clutch",
      href: "https://clutch.co/profile/digiratina-technology-solutions",
      icon: "/footer/clutch.svg",
    },
    {
      label: "Design Rush",
      href: "https://techreviewer.co/companies/digiratina-technology-solutions",
      icon: "/footer/design-rush.svg",
    },
  ],
  copyright: "© 2026 Digiratina Technology Solutions. All Rights Reserved.",
  legal: [
    { label: "Security Compliance", href: "#security" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Cookie Settings", href: "#cookies" },
  ],
} as const;
