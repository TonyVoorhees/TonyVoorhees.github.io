/**
 * Services page content. Five sections in source order.
 */

export const meta = {
  title: "Services — Tony Voorhees Studio",
  description:
    "Solo studio, multiple disciplines. Useful, memorable, built to last.",
};

// ─── (01) Hero ─────────────────────────────────────────────────────────────
export const hero = {
  sectionTag: { num: "01", label: "Approach" },
  title: { lead: "How", accent: "I work" },
  body:
    "Whether I'm shredding down the mountain or climbing up, I'm always looking for that perfect line. I work across product, brand, and visual systems the same way — reading the terrain, then finding the path nobody else noticed.",
};

// ─── Service blocks ────────────────────────────────────────────────────────
export const blocks = [
  {
    n: "01",
    name: "Product Design",
    desc: "As a systems thinker, I love building products that hold together as they scale: researching, prototyping, and testing until it's solid.",
    deliverables: [
      "Design system",
      "Component library",
      "CMS setup + handoff",
      "Production + Source files",
    ],
    idealFor:
      "Founders launching a new venture; companies hiring a founding designer; teams that need product support without a full-time hire.",
    price: "",
    example: "Seek AI",
  },
  {
    n: "02",
    name: "Brand Identity",
    desc: "Every surface and touchpoint — print, screen, motion — gets considered, down to the ones you didn't know mattered.",
    deliverables: [
      "Logo package (icon, typeface, hero mark)",
      "Typography + color palette",
      "Guidelines + templates",
      "Rroduction + source files",
    ],
    idealFor:
      "Startups finding their voice; SMBs looking to level up.",
    price: "",
    example: "Cape Atlantis Shells — full identity",
  },
  {
    n: "03",
    name: "Build & Launch",
    desc: "A starter package (0-1) for people who need something up yesterday.",
    deliverables: [
      "Logo essentials",
      "15s / 30s / 60s edits",
      "Lottie / GIF / MP4 deliverables",
      "Sound design partner",
    ],
    idealFor:
      "Launches, campaigns, and product moments that deserve more than a Premiere preset.",
    price: "",
    example: "Wes Moore BMX — release film",
  },
  {
    n: "04",
    name: "Print Production",
    desc: "Hand-built websites with editorial typography, considered transitions, and a CMS the team will actually use.",
    deliverables: [
      "Sitemap + wireframes",
      "Design system",
      "Custom build",
      "CMS setup + handoff",
    ],
    idealFor:
      "Studios, journals, B2B SaaS, and founders who care that the site reads as well as it scrolls.",
    price: "",
    example: "Peggy the Panda — full build",
  },
];

// ─── (02) Process ──────────────────────────────────────────────────────────
export const process = {
  sectionTag: { num: "02", label: "Process" },
  title: { lead: "Five stages,", accent: "one rhythm" },
  stages: [
    { n: "I", name: "Discovery", desc: "A week of listening, sketching, and asking better questions than the brief did." },
    { n: "II", name: "Direction", desc: "Two or three visual territories — defended in prose, not in mood boards." },
    { n: "III", name: "Design", desc: "We design the whole system from one decision outward. No deck of \"options to pick from.\"" },
    { n: "IV", name: "Build", desc: "Hand-coded, accessible by default. The CMS is part of the design." },
    { n: "V", name: "Launch", desc: "A quiet handoff, with a Loom, a Notion, and a six-month aftercare window." },
  ],
};

// ─── (03) Pricing tiers ────────────────────────────────────────────────────
export const tiers = {
  sectionTag: { num: "03", label: "Engagement" },
  title: { lead: "Three ways", accent: "in" },
  note: "All prices in USD",
  items: [
    {
      name: "Starter 0-1",
      duration: "2 weeks",
      price: "$1,000+",
      desc: "One designer, one week of direction, one week of execution. Best for a focused deliverable.",
      features: [
        "One scope (e.g. logo, landing page)",
        "Weekly working sessions, half or full days",
        "Source files + handoff deliverables",
        "Additional cost for revisions after week 2",
      ],
      recommended: false,
      ctaLabel: "Enquire →",
    },
    {
      name: "Build & Launch",
      duration: "4-6 weeks",
      price: "$5,000+",
      desc: "The full studio, end-to-end. Where most of our work lives. Brand strategy, design, and development all in one.",
      features: [
        "Full strategy + design + build",
        "Brand package - logo, viuals, & voice.",
        "Website build",
        "Six-month aftercare",
      ],
      recommended: true,
      ctaLabel: "Start a project →",
    },
    {
      name: "Contract",
      duration: "Quarterly",
      price: "$12,000+ /mo",
      desc: "A retained relationship for studios with an ongoing design cadence. Two slots per year.",
      features: [
        "Dedicated team time, four days / wk",
        "Quarterly direction reviews",
        "Priority on new work",
        "Studio Slack channel",
      ],
      recommended: false,
      ctaLabel: "Enquire →",
    },
  ],
};

// ─── (04) FAQ ──────────────────────────────────────────────────────────────
export const faq = {
  sectionTag: { num: "04", label: "Questions, answered" },
  items: [
    {
      q: "How do you scope a project?",
      a: "A first call (free, 30 min) to understand the brief. We follow up with a one-page proposal — scope, timeline, fee — within 48 hours. If it fits, we send a contract and a deposit invoice. No agency dance.",
    },
    {
      q: "Do you work with companies outside Denmark?",
      a: "Yes — most of our work is remote, with two or three on-site weeks per year for kick-offs and shoots. We work in CET but overlap comfortably with EST and PST.",
    },
    {
      q: "What if my project doesn't fit your tiers?",
      a: "The tiers are a guide, not a menu. Tell us what you're working on and we'll write a custom proposal. We turn down more projects than we take — clarity is kinder for both sides.",
    },
    {
      q: "Do you offer equity-for-design arrangements?",
      a: "Occasionally, for founders we already know and for projects we already believe in. Not as a general policy.",
    },
    {
      q: "Can we hire you for a single deliverable, like a logo?",
      a: "Rarely. Logos are downstream of a brand, and brands are downstream of a business. We can usually help most by widening the scope, not narrowing it.",
    },
    {
      q: "When can you start?",
      a: "Currently booking Q3 2026 — two slots remaining as of this week. Q4 is open and Q1 2027 has early-bird placeholder time for repeat clients.",
    },
  ],
};
