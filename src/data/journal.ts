/**
 * Journal page metadata + tag vocabulary. Individual entries live in
 * src/content/journal/*.mdx.
 */

export const meta = {
  title: "Journal — Studio Nord",
  description:
    "Slow writing on craft, process, tools, and the curious business of running a small studio. Two or three pieces a month, written by us.",
};

export const indexCopy = {
  sectionTag: { num: "01", label: "Reading" },
  title: { lead: "Journal —", accent: "notes", line3: "from the studio." },
  body:
    "Slow writing on craft, process, tools, and the curious business of running a small studio. Two or three pieces a month, written by us.",
};

export const TAGS = ["All", "Process", "Craft", "Tools", "Industry", "Studio"] as const;
export type JournalTag = (typeof TAGS)[number];
