/**
 * Global site config: brand, nav, footer, social.
 * Edit here and it propagates to <Header />, <Footer /> and the document <title>.
 */

export const site = {
  name: "Tony Voorhees",
  legalName: "Tony Voorhees Studio",
  title: "Tony Voorhees — Senior Product Designer & Brand Specialist",
  description:
    "Product and brand designer with 20+ years experience building digital products and identity systems that work together. Founder, Tony Voorhees Studio.",
  url: "https://tonyvoorhees.github.io/",
  locale: "en",
  copyright: "© Tony Voorhees Studio",
  address: "Bay Area, CA",
  availability: "Available Now",
  tagline:
    "Most designers pick a trail. I ride the whole mountain.",
  /** Used in the dark theme-color meta tag and as a fallback background. */
  themeColor: "#F8F8F6",
  themeColorDark: "#1A1A18",
  social: {
    instagram: "https://www.instagram.com/tonyvoorhees/",
    bsky: "https://bsky.app/profile/tonyvoorhees.bsky.social",
    dribbble: "https://dribbble.com/tonyvoorhees",
    linkedin: "https://www.linkedin.com/in/tonyvoorhees/",
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
      { href: "https://www.instagram.com/tonyvoorhees/", label: "Instagram", external: true },
      { href: "https://bsky.app/profile/tonyvoorhees.bsky.social", label: "BlueSky", external: true },
      { href: "https://dribbble.com/tonyvoorhees", label: "Dribbble", external: true },
      { href: "https://www.linkedin.com/in/tonyvoorhees/", label: "LinkedIn", external: true },
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
