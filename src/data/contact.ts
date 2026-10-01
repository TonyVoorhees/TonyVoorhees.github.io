/**
 * Contact page content. Form field config + studio sidebar info.
 *
 * The form submissions post to Web3Forms.
 */

export const meta = {
  title: "Contact — Tony Voorhees Studio",
  description:
    "Tell me what you're working on. I reply within three business days.",
};

export const hero = {
  sectionTag: { num: "01", label: "Hello" },
  title: { lead: "Let's", accent: "Talk" },
  body:
    "Tell me what you're working on. I'll tell you what I think it needs.",
};

export const form = {
  web3formsKey: "1221707e-761b-4cfa-8cc4-eeab6452ffbb",
  sectionTag: { num: "02", label: "Note" },
  projectTypes: ["Product", "Brand", "Product + Brand", "Print", "Web", "Other"] as const,
  budgets: ["$1–10k", "$10–20k", "$20–30k", "$30–40k", "$40k+"] as const,
  defaultProjectType: "",
  defaultBudget: "",
  consent: "I use your details only to reply.",
  submitLabel: "Send Note",
  thanks: {
    eyebrow: "Received",
    body:
      "I'll write from hello@tonyvoorhees.com. If it's not in your inbox by then, check spam.",
  },
};

export const studio = {
  sectionTag: { num: "03", label: "Studio" },
  info: [
    { k: "Email", v: "hello@tonyvoorhees.com", link: true },
    { k: "Location", v: "The Bay Area, CA" },
  ],
  availabilityLabel: "Availability",
  availabilityValue: "Available for select projects.",
  map: {
    label: "map",
  },
};
