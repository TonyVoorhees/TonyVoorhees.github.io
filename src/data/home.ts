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
  eyebrows: ["Product Design", "Brand Identity", "Creative Direction"],
  sectionTag: { num: "00", label: "index" },
  // Three-line title with an italicised second line.
  title: {
    line1: "Most designers",
    accent: "pick a trail.",
    connector: "I ride",
    line3: "the whole mountain.",
  },
  cta: { href: "/contact", label: "Let's Ride" },
  status: "Read Designed Default ↗",
  portrait: {
    label: "black-and-white landscape, soft natural light, mountain terrain, early morning mist",
    caption: "Mount Tamalpais, CA",
  },
  footnote: "Based in the Bay Area",
};

// ─── (01) SelecPted work ────────────────────────────────────────────────────
/** Slugs of work entries shown on the home asymmetric spread, in order. */
export const featuredWorkSlugs = ["seek", "peggythepanda", "wmbmx", "evgo"] as const;
export const featuredWork = {
  sectionTag: { num: "01", label: "Work" },
  title: { lead: "Recent", accent: "Projects" },
  allWorkLabel: "All work",
};

// ─── (02) Studio statement ─────────────────────────────────────────────────
export const studioStatement = {
  sectionTag: { num: "02", label: "Studio" },
  body:
  "Most studios hand off between brand and product and hope for the best. We skip that part. One vision, end to end — because your app and your brand should feel like they came from the same place. They will.",
  values: [
    { n: "01", name: "Clarity", desc: "If it needs explaining, it needs redesigning." },
    { n: "02", name: "Craft", desc: "The details nobody notices are the ones everybody feels." },
    { n: "03", name: "Pace", desc: "Fast when it matters. Slow when it counts." },
  ],
};

// ─── (03) Services preview ─────────────────────────────────────────────────
export const servicesPreview = {
  sectionTag: { num: "03", label: "Capabilities" },
  allServicesLabel: "All services →",
  items: [
    { n: "01", name: "Product Design", desc: "0-1 jumpstart, redesign, or fine-tune." },
    { n: "02", name: "Brand Identity", desc: "Systems that hold up across every touchpoint." },
    { n: "03", name: "Build & Launch", desc: "Simple brand and website packages available." },
    { n: "04", name: "Print Production", desc: "Hand-crafted books, merch, and art." },
  ],
};

// ─── (04) Clients band (marquee) ───────────────────────────────────────────
export const clientsBand = {
  sectionTag: { num: "04", label: "Brands" },
  names: [
    "CHASE", "DRAFTKINGS", "SEEK AI", "CAPE ATLANTIS SHELLS", "EVgo", "SUPER EVIL MEGACORP", "CHAMPION", "AOL",
    "DEWARS", "ACTIVE NATIVE", "WES MOORE BMX", "DAHLIA CAKE SHOP", "PEGGY THE PANDA", "TIDY OWL CO.", "WOJO PHOTO",
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
  sectionTag: { num: "05", label: "Testimonials" },
  items: [
    {
      quote:
        "He thinks like a product person, designs like a brand strategist, and still cares about the tiny visual details most people miss. Working with Tony feels less like hiring a designer and more like bringing on a creative co-pilot who actually gets where you’re trying to go.",
      name: "Wes Moore",
      role: "Founder, Wes Moore BMX",
    },
    {
      quote:
        "Tony took the chaos in my head and translated it into a brand that actually makes sense to other humans. From early sketches to the site for capeshells.com, he kept everything aligned—product, visuals, messaging—so it feels like one clear, recognizable voice instead of a patchwork of half-finished ideas.",
      name: "Chamyang Unkow",
      role: "Founder, Cape Atlantis shells",
    },
  ],
};

// ─── (08) Contact CTA (dark block) ─────────────────────────────────────────
export const contactCta = {
  sectionTag: { num: "06", label: "Contact" },
  title: { line1: "Let's ride", accent: "together!", line3: "" },
  ctas: {
    primary: { href: "/contact", label: "Send It!" },
    secondary: { href: "mailto:hello@tonyvoorhees.com", label: "hello@tonyvoorhees.com" },
  },
  stats: [
    { label: "Response time", value: "~24 hours", italicSuffix: "weekdays" },
    { label: "Availability", value: "Available Now", dot: true },
    //{ label: "Slots remaining", value: "02", suffix: "of 04" },
  ],
};
