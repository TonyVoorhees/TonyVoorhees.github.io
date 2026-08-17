/**
 * Journal page metadata + tag vocabulary. Individual entries live in
 * src/content/journal/*.mdx.
 */

export const meta = {
  title: "Journal — Tony Voorhees Studio",
  description:
    "My work and thoughts on design, branding, and the creative process.",
};

export const indexCopy = {
  sectionTag: { num: "01", label: "Reading" },
  title: { lead: "Notes from", accent: "the studio." }, 
  body:
    "Writing and artifacts from past, current, and future projects. ",
};

export const TAGS = ["All", "Print", "Studio"] as const;
export type JournalTag = (typeof TAGS)[number];
