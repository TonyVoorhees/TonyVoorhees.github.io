/**
 * Services page content. Five sections in source order.
 */

export const meta = {
  title: "Services — Tony Voorhees Studio",
  description:
    "Three ways to work together — from a single project to an ongoing design partnership. Product design, brand identity, and everything that connects them.",
};

// ─── (01) Hero ─────────────────────────────────────────────────────────────
export const hero = {
  sectionTag: { num: "01", label: "What I do" },
  title: { lead: "Design", accent: "Connected." }, 
  body:
    "I help founders and growing teams turn ideas into products and brands — and bring them into the world.",
};

// ─── Service blocks ────────────────────────────────────────────────────────
export const blocks = [
  {
    n: "01",
    name: "Product",
    desc: "From early ideas to shipped experiences, I help teams figure out what to build, how it should work, and how it should feel.",
    deliverables: [
      "Product strategy & direction",
      "UX/UI, prototyping, design systems",
      "Research & design thinking",
    ],
    idealFor:
      "Startups moving beyond founder-led design · Products becoming harder to use · Teams repositioning or evolving the product.",
    price: "",
    example: "Seek AI",
  },
  {
    n: "02",
    name: "Brand",
    desc: "Identity built to do more than look good. I build the systems — logo, voice, visuals — that stay consistent across your site, product, and every place your audience meets you",
    deliverables: [
      "Brand strategy & positioning",
      "Identity systems (logo, color, type, voice)",
      "Art direction & visual language",
    ],
    idealFor:
      "Startups defining their position · Growing companies evolving their identity · Businesses ready for a more complete brand system.",
    price: "",
    example: "Cape Atlantis Shells",
  },
  {
    n: "03",
    name: "Launch",
    desc: "A great product still needs a way into the world. I connect product, brand, web, and go-to-market so the launch feels like one thing.",
    deliverables: [
      "Web design & development",
      "Content direction & messaging",
      "Go-to-market strategy & launch planning",
    ],
    idealFor:
      "Founders launching a new product or brand from the ground up · Teams that need strategy, design, and a live site in one engagement.",
    price: "",
    example: "Wes Moore BMX",
  },
  /*{
    n: "04",
    name: "Print Production",
    desc: "From books to apparel, I work with reliable vendors and partners to turn ideas into tangible goods.",
    deliverables: [
      "Books + editorial print",
      "Apparel & merch",
      "Packaging & tangible goods",
      "Vendor sourcing + production management",
    ],
    idealFor:
      "Authors, creators, influencers, startups, and SMBs looking to engage IRL.",
    price: "Starter · Timeline Varies",
    example: "Peggy the Panda — book",
  },*/
];

// ─── (02) Pricing tiers ────────────────────────────────────────────────────
export const tiers = {
  sectionTag: { num: "02", label: "Engagement" },
  title: { lead: "Ways to work ", accent: "together" },
  body:
    "Not every problem needs the same kind of engagement. Choose the level of support that fits the work — or start with a conversation and we'll figure it out together.",
  note: "All prices in USD",
  items: [
    {
      name: "Focus",
      duration: "Typically 1–2 weeks",
      price: "$3,000+",
      desc: "A focused engagement for when you need experienced design thinking without a long-term commitment. Good for a specific challenge or getting unstuck.",
      features: [
        "UX and product audits",
        "Design and brand direction",
        "Focused, UX/UI • prototypes",
        "Workshops and design sprints",
      ],
      recommended: false,
      ctaLabel: "Let's Talk →",
    },
    {
      name: "Project",
      duration: "Typically 4-6 weeks",
      price: "$14,000+",
      desc: "Take something from idea to launch. Product, brand, web, and launch support can all be part of the engagement. The outcome determines scope.",
      features: [
        "New products",
        "Product redesigns",
        "Websites and product launches",
        "Brand identity – marks, voice, visuals",
      ],
      recommended: true,
      ctaLabel: "Start a project →",
    },
    {
      name: "Partner",
      duration: "3+ Months",
      price: "$20K+ /mo",
      desc: "For companies that need more than a project-based designer. I provide ongoing creative and product direction and work alongside your team.",
      features: [
        "Growing products",
        "Complex initiatives",
        "Product amd brand systems",
        "Ongoing product and brand work",
      ],
      recommended: false,
      ctaLabel: "Let's Talk →",
    },
  ],
};

// ─── (03) Process ──────────────────────────────────────────────────────────
export const process = {
  sectionTag: { num: "03", label: "Process" },
  title: { lead: "How it", accent: "works." },
  stages: [
    { n: "I", name: "Talk", desc: "Tell me what you're building, what's changing, or where you're stuck." },
    { n: "II", name: "Shape", desc: "We'll figure out the right scope, team, timeline, and engagement for the work." },
    { n: "III", name: "Make", desc: "I lead the work personally and bring in trusted specialists when they're useful." },
    { n: "IV", name: "Move", desc: "The goal isn't more design. It's getting you somewhere." },
  ],
};

// ─── (04) FAQ ──────────────────────────────────────────────────────────────
export const faq = {
  sectionTag: { num: "04", label: "Questions, answered" },
  items: [
    {
      q: "Not sure where to start?",
      a: "You don't need to know which engagement you need. Tell me what you're building, where you're stuck, or what you're trying to change. We'll figure out the right shape for the work.",
    },
    {
      q: "How do you scope a project?",
      a: "A first call (free, 30 min) to understand the brief. I follow up with a one-page proposal — scope, timeline, fee. If it fits, I send a contract and a deposit invoice.",
    },
    {
      q: "What type of companies do you work with?",
      a: "Mostly founders, startups, and growing companies. I also work with agencies when they need senior design direction or additional capacity.",
    },
    {
      q: "What if my project doesn't fit your tiers?",
      a: "The tiers are a guide, not a menu. Tell me what you're working on, and I will write a custom proposal.",
    },
    {
      q: "When can you start?",
      a: "I'm currently available for select projects. Start dates depend on scope, timing, and existing commitments.",
    },
    {
      q: "Do you work remotely or on-site?",
      a: "Most work is remote. On-site workshops or visits can be arranged when the project calls for them.",
    },
  ],
};
