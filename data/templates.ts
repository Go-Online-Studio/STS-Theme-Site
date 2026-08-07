/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  InviteStash — Template Registry
 *  ─────────────────────────────────────────────────────────────────────────────
 *
 *  HOW TO ADD A NEW TEMPLATE
 *  ─────────────────────────
 *  1. Drop your image file into the correct category folder inside:
 *        public/templates/<category>/your-image.png
 *
 *     Category folders:
 *        public/templates/weddings/
 *        public/templates/birthdays/
 *        public/templates/baby-showers/
 *        public/templates/corporate/
 *        public/templates/parties/
 *
 *  2. Add a new entry to the `templates` array below, following the same shape:
 *
 *        {
 *          id:        <unique number>,
 *          name:      "Template Display Name",
 *          category:  "Weddings" | "Birthdays" | "Baby Showers" | "Corporate" | "Parties",
 *          style:     "Short style description",
 *          price:     "₹999",
 *          tag:       "💍 Wedding",        <- emoji + label shown in the hero slider
 *          accentColor: "#f9a8d4",         <- glow colour on the hero card (any CSS hex)
 *          imageSrc:  "/templates/weddings/your-image.png",  <- preview image shown in cards
 *          imageAlt:  "Descriptive alt text for accessibility",
 *          liveUrl:   "/templates/weddings/E-invitesForWeddings/index.html", <- optional: opens live invite on click
 *          featured:  true,                <- set true to show it in the hero slider
 *        },
 *
 *  3. Save the file — the gallery and hero slider update automatically.
 *  ─────────────────────────────────────────────────────────────────────────────
 */

export type Category =
  | "All"
  | "Weddings"
  | "Birthdays"
  | "Baby Showers"
  | "Corporate"
  | "Parties";

export interface Template {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  style: string;
  price: string;
  tag: string;
  accentColor: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional: URL to the live interactive invite (HTML file or external link) */
  liveUrl?: string;
  /** Show in the hero marquee slider */
  featured?: boolean;
}

/* ─── Add your templates below ────────────────────────────────────────────── */
export const templates: Template[] = [
  // ── Weddings ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Minimalist Vow",
    category: "Weddings",
    style: "Elegant & Clean",
    price: "₹1499",
    tag: "💍 Wedding",
    accentColor: "#f9a8d4",
    imageSrc: "/templates/weddings/minimalist-vow.png",
    imageAlt: "Minimalist Vow wedding invitation template",
    featured: true,
  },

  // ── E-invites for Weddings — index (Full Interactive Invite) ──────────────
  {
    id: 5,
    name: "Royal Grand Invite",
    category: "Weddings",
    style: "Interactive & Animated",
    price: "₹2499",
    tag: "💍 Wedding",
    accentColor: "#fcd34d",
    imageSrc: "/templates/weddings/E-invitesForWeddings/images/welcomImage.webp",
    imageAlt: "Royal Grand interactive wedding e-invite",
    liveUrl: "/templates/weddings/E-invitesForWeddings/index.html",
    featured: true,
  },

  // ── E-invites for Weddings — Curtain Design ───────────────────────────────
  {
    id: 6,
    name: "Curtain Reveal",
    category: "Weddings",
    style: "Dramatic Curtain Animation",
    price: "₹1999",
    tag: "💍 Wedding",
    accentColor: "#fb7185",
    imageSrc: "/templates/weddings/E-invitesForWeddings/images/Back_invitation1.avif",
    imageAlt: "Curtain Reveal animated wedding e-invite",
    liveUrl: "/templates/weddings/E-invitesForWeddings/curtainDesign.html",
    featured: true,
  },

  // ── E-invites for Weddings — Door Design ─────────────────────────────────
  {
    id: 7,
    name: "Golden Door",
    category: "Weddings",
    style: "Luxurious Door Opening",
    price: "₹2199",
    tag: "💍 Wedding",
    accentColor: "#f59e0b",
    imageSrc: "/templates/weddings/E-invitesForWeddings/images/Back_invitation2.avif",
    imageAlt: "Golden Door wedding e-invite design",
    liveUrl: "/templates/weddings/E-invitesForWeddings/DoorDesign.html",
    featured: true,
  },

  // ── E-invites for Weddings — New Invitation One ───────────────────────────
  {
    id: 8,
    name: "Floral Bloom",
    category: "Weddings",
    style: "Floral & Romantic",
    price: "₹1799",
    tag: "💍 Wedding",
    accentColor: "#e879f9",
    imageSrc: "/templates/weddings/E-invitesForWeddings/images/Back_invitation3.avif",
    imageAlt: "Floral Bloom romantic wedding e-invite",
    liveUrl: "/templates/weddings/E-invitesForWeddings/NewInvitaionOne.html",
    featured: false,
  },

  // ── E-invites for Weddings — Curtain Design 2 ────────────────────────────
  {
    id: 9,
    name: "Silk Drape",
    category: "Weddings",
    style: "Soft Curtain Reveal",
    price: "₹1899",
    tag: "💍 Wedding",
    accentColor: "#c084fc",
    imageSrc: "/templates/weddings/E-invitesForWeddings/images/Back_invitation4.avif",
    imageAlt: "Silk Drape wedding curtain e-invite",
    liveUrl: "/templates/weddings/E-invitesForWeddings/curtainDesign2.html",
    featured: false,
  },

  // ── Birthdays ──────────────────────────────────────────────────────────────
  {
    id: 2,
    name: "Retro Blast",
    category: "Birthdays",
    style: "Bold & Funky",
    price: "₹999",
    tag: "🎂 Birthday",
    accentColor: "#00d2fd",
    imageSrc: "/templates/birthdays/retro-blast.png",
    imageAlt: "Retro Blast birthday invitation template",
    featured: true,
  },

  // ── Corporate ─────────────────────────────────────────────────────────────
  {
    id: 3,
    name: "Executive Grid",
    category: "Corporate",
    style: "Structured & Sharp",
    price: "₹1999",
    tag: "🏢 Corporate",
    accentColor: "#a78bfa",
    imageSrc: "/templates/corporate/executive-grid.png",
    imageAlt: "Executive Grid corporate event invitation template",
    featured: true,
  },

  // ── Baby Showers ──────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Stork & Stars",
    category: "Baby Showers",
    style: "Charming & Airy",
    price: "₹899",
    tag: "🍼 Baby Shower",
    accentColor: "#86efac",
    imageSrc: "/templates/baby-showers/stork-stars.png",
    imageAlt: "Stork & Stars baby shower invitation template",
    featured: true,
  },
];

/** All unique categories derived from template list (for filter pills) */
export const categories: Category[] = [
  "All",
  ...([...new Set(templates.map((t) => t.category))] as Exclude<
    Category,
    "All"
  >[]),
];

/** Only templates marked featured:true — used in the hero slider */
export const featuredTemplates = templates.filter((t) => t.featured);
