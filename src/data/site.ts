/**
 * Global site config: brand, nav, footer, social.
 * Edit here and it propagates to <Header />, <Footer /> and the document <title>.
 */

export const site = {
  name: "Studio Nord",
  legalName: "Studio Nord ApS",
  title: "Studio Nord — A small studio building brands and digital experiences",
  description:
    "A three-person studio in Copenhagen working with founders, editors, and product leads on a handful of projects each year. Branding, motion direction, and editorial websites.",
  url: "https://lambda-minimal.netlify.app",
  locale: "en",
  copyright: "© 2026 Studio Nord — All work confidential until shipped.",
  address: "Sankt Peders Stræde 28, 1453 Copenhagen K — Denmark",
  availability: "Available Q3 2026",
  tagline:
    "A small studio building brands and digital experiences with discipline and quiet ambition.",
  /** Used in the dark theme-color meta tag and as a fallback background. */
  themeColor: "#F8F8F6",
  themeColorDark: "#1A1A18",
  social: {
    instagram: "#",
    x: "#",
    dribbble: "#",
    arena: "#",
    vimeo: "#",
  },
} as const;

export type NavId = "home" | "studio" | "work" | "services" | "journal" | "contact";

export const nav: { href: string; label: string; id: NavId }[] = [
  { href: "/", label: "Index", id: "home" },
  { href: "/studio", label: "Studio", id: "studio" },
  { href: "/work", label: "Work", id: "work" },
  { href: "/services", label: "Services", id: "services" },
  { href: "/journal", label: "Journal", id: "journal" },
  { href: "/contact", label: "Contact", id: "contact" },
];

export type FooterGroup = {
  title: string;
  links: {
    href: string;
    label: string;
    /** Opens in a new tab and appends a "↗" affordance. */
    external?: boolean;
    /**
     * Internal / lower-priority link. Renders muted so it sits a tier below
     * the primary navigation in the visual hierarchy. (Style guide, colophon,
     * and legal links now live in `utilityLinks` below, as a dedicated meta
     * row; keep `secondary` for any column link you want present but
     * de-emphasized.)
     */
    secondary?: boolean;
  }[];
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Navigate",
    links: nav.map((n) => ({ href: n.href, label: n.label })),
  },
  {
    title: "Elsewhere",
    links: [
      { href: "#", label: "Instagram", external: true },
      { href: "#", label: "X (Twitter)", external: true },
      { href: "#", label: "Dribbble", external: true },
      { href: "#", label: "Are.na", external: true },
      { href: "#", label: "Vimeo", external: true },
    ],
  },
];

/**
 * Back-of-book links — style guide, colophon, and the legal/utility pages.
 * Rendered as a thin meta row at the foot of the footer (next to the
 * copyright), kept out of the primary "Navigate" column so it stays focused.
 * Add a prose page (see src/content/pages/) and list it here to surface it.
 */
export const utilityLinks: { href: string; label: string }[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/colophon", label: "Colophon" },
  { href: "/styleguide", label: "Style Guide" },
];
