/**
 * Journal page metadata + tag vocabulary. Individual entries live in
 * src/content/journal/*.mdx.
 */

export const meta = {
  title: "Journal — Tony Voorhees Studio",
  description:
    "My work and thoughts on design, branding, and creative processes.",
};

export const indexCopy = {
  sectionTag: { num: "01", label: "Reading" },
  title: { lead: "Field", accent: "notes." }, 
  body:
    "Writing and artifacts from past, current, and future projects. ",
};

export const TAGS = ["All", "Process", "Craft", "Tools", "Industry", "Studio"] as const;
export type JournalTag = (typeof TAGS)[number];
