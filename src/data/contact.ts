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
    "Start a project with Tony. I read every message and respond promptly. Currently available for new projects.",
};

export const hero = {
  sectionTag: { num: "01", label: "Hello" },
  title: { lead: "Let's Ride", accent: "Together" },
  body:
    "The honest way to understand a project is to ride along — see where it's heading, who's coming along, and why. From there, we figure out what we need, what we don’t need, and how we get there. Ready? Let's go!",
};

export const form = {
  sectionTag: { num: "02", label: "Note" },
  projectTypes: ["Brand", "Product", "Print", "Web", "Other"] as const,
  budgets: ["$1–10k", "$10–20k", "$20–30k", "$40–50k", "$50k+"] as const,
  /** Default selections — the design starts the form with these picked. */
  defaultProjectType: "Brand",
  defaultBudget: "$20–30k",
  consent: "By sending, you agree to a short discovery call within ~72h",
  submitLabel: "Send Note",
  thanks: {
    eyebrow: "Received — thank you",
    body:
      "Tony Voorhees will follow up from hello@tonyvoorhees.com.",
  },
};

export const studio = {
  sectionTag: { num: "02", label: "Studio" },
  info: [
    { k: "Email", v: "hello@tonyvoorhees.com", link: true },
    { k: "Location", v: "The Bay Area, CA" },
    /**
     * { k: "Telephone", v: "" },
    { k: "Hours", v: "" },
    { k: "Press & speaking", v: "hello@tonyvoorhees.com", link: true },
     **/
  ],
  availabilityLabel: "Availability",
  availabilityValue: "Currently Available",
  /**
   * Studio map — disabled by default. The contact Aside no longer renders it
   * (see the commented-out map block in
   * components/sections/contact/Aside.astro). `label` is the alt/caption for
   * the placeholder map; kept here so re-enabling the block just works. If you
   * want a real map, drop a Google Maps embed (<iframe>) into that block — you
   * can reuse this copy as the iframe's title.
   */
  map: {
    label: "map",
  },
};
