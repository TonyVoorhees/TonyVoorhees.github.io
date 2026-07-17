/**
 * Work index page metadata + filter list. Individual work entries live in
 * src/content/work/*.mdx — this file only owns the static copy of the index
 * page and the filter vocabulary.
 */

export const meta = {
  title: "Work — Tony Voorhees Studio",
  description:
    "An archive of selected work from Tony Voorhees Studio, 2020 to 2026 — brand identity, motion direction, editorial sites, and print.",
};

export const indexCopy = {
  sectionTag: { num: "01", label: "Archive" },
  title: { lead: "Selected work", accent: "2020→2026" },
};

/** Filter tab vocabulary. "All" is implicit and always first. */
export const FILTERS = ["All", "Product", "Branding", "Motion", "Web", "Print"] as const;
export type Filter = (typeof FILTERS)[number];
