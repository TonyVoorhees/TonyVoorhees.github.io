/**
 * Contact page content. Form field config + studio sidebar info.
 *
 * The form has no backend wired up — it lives entirely in Alpine state.
 * Buyers replace the submit handler with their own endpoint (Formspree,
 * a serverless function, Mailchannels, etc.).
 */

export const meta = {
  title: "Contact — Tony Voorhees Studio",
  description:
    "Start a brief with Tony. We read every message ourselves and respond promptly. Currently booking Q4 2026.",
};

export const hero = {
  sectionTag: { num: "01", label: "Hello" },
  title: { lead: "Let's", accent: "Ride" },
  body:
    "Drop us a note. We read every message ourselves and respond promplty. Currently booking Q4 2026 — two slots remaining.",
};

export const form = {
  sectionTag: { num: "02", label: "Note" },
  projectTypes: ["Brand Identity", "Product Design", "Web Build", "Print", "Other"] as const,
  budgets: ["$6–12k", "$12–20k", "$20–40k", "$40–80k", "$80k+"] as const,
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
    { k: "Email", v: "hello@tonyvoorhees.com", link: true },
    { k: "Location", v: "Marin County, CA" },
    /**
     * { k: "Telephone", v: "" },
    { k: "Hours", v: "" },
    { k: "Press & speaking", v: "press@studionord.dk", link: true },
     **/
  ],
  availabilityLabel: "Availability",
  availabilityValue: "Booking Q4 2026 · 2 slots",
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
