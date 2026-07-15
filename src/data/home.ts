/**
 * Homepage content. Each export maps to one section under
 * src/components/sections/home/. Edit copy and lists here without
 * touching the section markup.
 *
 * Work and journal entries live in their content collections (src/content/);
 * the homepage references them by slug to keep a single source of truth.
 */

// ─── (Hero) ────────────────────────────────────────────────────────────────
export const hero = {
  eyebrows: ["Art Direction", "Branding", "Motion", "Web"],
  sectionTag: { num: "00", label: "Index" },
  // Three-line title with an italicised second line.
  title: {
    line1: "We design",
    accent: "brands",
    line3: "digital experiences.",
    connector: "and",
  },
  cta: { href: "/contact", label: "Start a brief" },
  status: "Selective by design",
  portrait: {
    label: "black-and-white close-up portrait, soft natural light, editorial mood",
    caption: "FIG. 01 — Studio principal, Copenhagen, March 2026",
  },
  footnote: "Based in Copenhagen — Est. 2018",
};

// ─── (01) Selected work ────────────────────────────────────────────────────
/** Slugs of work entries shown on the home asymmetric spread, in order. */
export const featuredWorkSlugs = ["kjeld", "meridian", "hjem", "aalto"] as const;
export const featuredWork = {
  sectionTag: { num: "01", label: "Selected work" },
  title: { lead: "Recent", accent: "chapters" },
  allWorkLabel: "All work (12)",
};

// ─── (02) Studio statement ─────────────────────────────────────────────────
export const studioStatement = {
  sectionTag: { num: "02", label: "Studio" },
  body:
    "We are a small studio of three, working on a handful of projects each year. Our practice sits at the seam between design discipline and development precision — where a typesetting decision and a build pipeline are treated with the same care.",
  values: [
    { n: "01", name: "Clarity", desc: "The brief survives every meeting." },
    { n: "02", name: "Craft", desc: "The kerning is the concept." },
    { n: "03", name: "Pace", desc: "Slow enough to be considered. Fast enough to ship." },
  ],
};

// ─── (03) Services preview ─────────────────────────────────────────────────
export const servicesPreview = {
  sectionTag: { num: "03", label: "What we do" },
  allServicesLabel: "All services →",
  items: [
    { n: "01", name: "Art Direction", desc: "Setting the visual register for a brand, campaign, or product." },
    { n: "02", name: "Brand Identity", desc: "Systems that hold up across every surface — print, screen, motion." },
    { n: "03", name: "Motion Direction", desc: "Short-form motion for launch films, social, and interface." },
    { n: "04", name: "Editorial websites", desc: "Hand-built websites with editorial typography and considered transitions." },
  ],
};

// ─── (04) Clients band (marquee) ───────────────────────────────────────────
export const clientsBand = {
  sectionTag: { num: "04", label: "Trusted by" },
  names: [
    "ATELIER NORD", "KJELD & CO", "MERIDIAN", "AALTO", "HJEM", "FELTLAND",
    "BJÖRK STUDIOS", "NORDLYS", "GRÅSTEN", "SØLV+CO", "HELLAS", "TYPE/A",
  ],
};

// ─── (05) Awards ───────────────────────────────────────────────────────────
export const awards = {
  sectionTag: { num: "05", label: "Recognition" },
  title: { lead: "Selected", accent: "honors" },
  intro:
    "We don't enter many awards. The ones we keep are the ones whose juries we'd want to share a coffee with.",
  items: [
    { name: "Awwwards SOTD", count: 9, year: "2021–2026" },
    { name: "CSS Design Awards", count: 7, year: "2020–2026" },
    { name: "FWA of the Day", count: 5, year: "2022–2026" },
    { name: "Type Directors Club", count: 2, year: "2024–2025" },
  ],
};

// ─── (06) Featured journal ─────────────────────────────────────────────────
/** Slugs of journal entries shown on the home page, featured first. */
export const featuredJournalSlugs = [
  "long-form-short-form",
  "specifying-type-editorial",
  "wireframes-by-hand",
] as const;
export const featuredJournal = {
  sectionTag: { num: "06", label: "Journal" },
  title: { lead: "Notes from the", accent: "studio" },
  allEntriesLabel: "All entries",
};

// ─── (07) Testimonials ─────────────────────────────────────────────────────
export const testimonials = {
  sectionTag: { num: "07", label: "Testimonials" },
  items: [
    {
      quote:
        "Studio Nord rebuilt our identity from the inside out. Three months in, our team still references their type system every week — and our customers can feel it.",
      name: "Astrid Lange",
      role: "Founder, Kjeld & Co. Coffee Roasters",
    },
    {
      quote:
        "They held the line on craft when our deadline tried to negotiate. The launch site reads like a magazine and converts like a landing page.",
      name: "Theodor Wexø",
      role: "Head of Brand, Meridian Foundry",
    },
    {
      quote:
        "Quiet, exact, and unusually generous with their process. The rare studio that makes you a better client.",
      name: "Helena Brask",
      role: "Editor-in-Chief, Hjem Magazine",
    },
  ],
};

// ─── (08) Contact CTA (dark block) ─────────────────────────────────────────
export const contactCta = {
  sectionTag: { num: "08", label: "Contact" },
  title: { line1: "Let's make something", accent: "worth", line3: "remembering." },
  ctas: {
    primary: { href: "/contact", label: "Start a project" },
    secondary: { href: "mailto:hello@studionord.dk", label: "hello@studionord.dk" },
  },
  stats: [
    { label: "Response time", value: "~24 hours", italicSuffix: "weekdays" },
    { label: "Availability", value: "Q3 2026", dot: true },
    { label: "Slots remaining", value: "02", suffix: "of 04" },
  ],
};
