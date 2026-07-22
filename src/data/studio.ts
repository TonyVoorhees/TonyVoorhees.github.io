/**
 * Studio (about) page content. Six sections in source order.
 */

export const meta = {
  title: "Studio — Tony Voorhees",
  description:
  "Product design and brand strategy don't have to live in separate departments. At Tony Voorhees Studio, they never do. I work with founders and product teams to build identities and digital products that speak the same language — and bring in the right specialists to make it happen.",  
};

// ─── (01) Hero ─────────────────────────────────────────────────────────────
export const hero = {
  sectionTag: { num: "01", label: "On Craft" },
  title: { line1: "On range,", accent: "craft", line3: "and making it happen." },
  body:
  "Built at the intersection of product design and brand identity. Twenty-plus years across agencies, startups, and enterprise teams — now channeled into work that actually holds together.",
};

// ─── Studio image ──────────────────────────────────────────────────────────
export const studioImage = {
  label: "View from the my office window",
  caption: "Mount Tamalpais - Marin County, CA",
};

// ─── (02) Philosophy ───────────────────────────────────────────────────────
export const philosophy = {
  sectionTag: { num: "02", label: "Philosophy" },
  intro:
    "Tony Voorhees Studio runs lean and connects deep. I lead every project as senior creative director and bring in trusted specialists when the brief calls for it. You get one point of contact, one creative vision, and exactly the team your project needs.",
  // The intro's first letter is enlarged as a drop cap by the
  // `.dropcap::first-letter` rule in global.css — no manual markup needed,
  // the full sentence lives here as plain text.
  marginalia: [
    {
      text: "On Range",
      body:
        "Twenty-plus years across agencies, startups, and enterprise teams have taught me one thing: the best work happens when product and brand speak the same language. I've shipped design systems for EV charging networks, built brand identities for indie founders, and designed everything in between. The scale changes. The standard doesn't.",
    },
    {
      text: "On Craft",
      body:
      "Detail-oriented doesn't mean slow. It means knowing which details matter and moving decisively on the ones that don't. Whether it's a kerning pair or a CMS architecture decision, the level of care stays constant. What you describe is what gets built — no loose ends, no departments that don't apply to your problem.",
    },
    {
      text: "On Collaboration",
      body:
        "The best work we've done happened when designer, developer, and client were all in the same conversation from the start. We build that in by default. A flexible network means you're never paying for specialists you don't need — and never going without the ones you do.",
    },
    {
      text: "On Clients",
      body:
        "We work with founders building something real, product teams who need a brand brain in the room, and small businesses that deserve the same craft as the big ones. Cape Atlantis Shells, EVgo, Seek AI, Wes Moore BMX, Super Evil Megacorp — the budgets vary. The commitment doesn't.",
    },
  ],
};

// ─── (03) Team ─────────────────────────────────────────────────────────────
export const team = {
  sectionTag: { num: "03", label: "Team" },
  est: "EST. 2023",
  members: [
    {
      name: "Tony Voorhees",
      role: "Founder & Designer",
      bio: "I work across product and brand — and the overlap between them is where I do my best work.",
      img: "",
      links: ["@tonyvoorhees"],
    },
    {
      name: "Hudson Voorhees",
      role: "Junior Designer & Creative Consultant",
      bio: "Designer in training, learning the ropes of design and development.",
      img: "",
      links: ["@hudsonvoorhees"],
    },
    {
      name: "JoJo & Wabi",
      role: "Emotional Support",
      bio: "Two years ago, they joined the studio as emotional support animals.",
      img: "",
      links: ["@jojowabi"],
    },
  ],
};

// ─── (04) Press ────────────────────────────────────────────────────────────
export const press = {
  sectionTag: { num: "04", label: "Awards & Press" },
  items: [
    { year: "2026", title: "It's Nice That — Studio Visit", kind: "Feature" },
    { year: "2026", title: "Type Directors Club Annual", kind: "Award" },
    { year: "2025", title: "Eye Magazine, Issue 109", kind: "Print interview" },
    { year: "2025", title: "Awwwards SOTY Nominee", kind: "Nomination" },
    { year: "2025", title: "Klassekampen — Design column", kind: "Quote" },
    { year: "2024", title: "AIGA Eye on Design", kind: "Feature" },
    { year: "2024", title: "Brand New — Noted", kind: "Review" },
    { year: "2023", title: "Codrops Collective", kind: "Inclusion" },
  ],
};

// ─── Availability strip ────────────────────────────────────────────────────
export const availability = {
  label: "Currently booking",
  title: { lead: "Available Now —", accent: "Ready when you are" },
  cta: { href: "/contact", label: "Let's Talk →" },
};
