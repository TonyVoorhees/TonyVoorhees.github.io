/**
 * Contact page content. Form field config + studio sidebar info.
 *
 * The form has no backend wired up — it lives entirely in Alpine state.
 * Buyers replace the submit handler with their own endpoint (Formspree,
 * a serverless function, Mailchannels, etc.).
 */

export const meta = {
  title: "Contact — Studio Nord",
  description:
    "Start a brief with Studio Nord. We read every message ourselves and reply within a working day. Currently booking Q3 2026.",
};

export const hero = {
  sectionTag: { num: "01", label: "Hello" },
  title: { lead: "Let's", accent: "talk" },
  body:
    "A short note is enough. We read every message ourselves and reply within a working day. Currently booking Q3 2026 — two slots remaining.",
};

export const form = {
  sectionTag: { num: "02", label: "A short brief" },
  projectTypes: ["Brand Identity", "Art Direction", "Motion", "Web Build", "Other"] as const,
  budgets: ["€6–12k", "€12–20k", "€20–40k", "€40–80k", "€80k+"] as const,
  /** Default selections — the design starts the form with these picked. */
  defaultProjectType: "Brand Identity",
  defaultBudget: "€20–40k",
  consent: "By sending, you agree to a short discovery call within ~24h",
  submitLabel: "Send brief",
  thanks: {
    eyebrow: "Received — thank you",
    body:
      "Sofie or Magnus will follow up from hello@studionord.dk. If it's urgent, you can call the studio on +45 32 11 22 33 between 09:00 – 17:00 CET.",
  },
};

export const studio = {
  sectionTag: { num: "03", label: "Studio" },
  info: [
    { k: "Email", v: "hello@studionord.dk", link: true },
    { k: "Telephone", v: "+45 32 11 22 33" },
    { k: "Studio", v: "Sankt Peders Stræde 28\n1453 Copenhagen K\nDenmark" },
    { k: "Hours", v: "Mon — Fri, 09:00 – 17:00 CET" },
    { k: "Press & speaking", v: "press@studionord.dk", link: true },
  ],
  availabilityLabel: "Availability",
  availabilityValue: "Booking Q3 2026 · 2 slots",
  /**
   * Studio map — disabled by default. The contact Aside no longer renders it
   * (see the commented-out map block in
   * components/sections/contact/Aside.astro). `label` is the alt/caption for
   * the placeholder map; kept here so re-enabling the block just works. If you
   * want a real map, drop a Google Maps embed (<iframe>) into that block — you
   * can reuse this copy as the iframe's title.
   */
  map: {
    label: "minimalist B&W map of Copenhagen city center — pin at Sankt Peders Stræde 28",
  },
};
