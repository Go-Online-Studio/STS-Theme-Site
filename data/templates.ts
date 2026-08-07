/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  InviteStash — Template Registry (TypeScript Adapter)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  ✅ DATA IS NOW JSON-DRIVEN
 *  The source of truth is `data/templates.json`.
 *  This file reads from that JSON and re-exports typed data.
 *
 *  DATA HIERARCHY
 *  ──────────────
 *  data/templates.json                          ← ROOT (all categories + all templates)
 *    └── public/templates/weddings/wedding.json ← per-category aggregator
 *          ├── .../AnjaliManeetInvitation/template.json  ← individual sub-template
 *          ├── .../DoorDesign/template.json
 *          ├── .../E-invitesForWeddings - I/template.json
 *          ├── .../NewInvitaionOne/template.json
 *          ├── .../curtainDesign/template.json
 *          └── .../curtainDesign - II/template.json
 *
 *  HOW TO ADD A NEW TEMPLATE
 *  ──────────────────────────
 *  1. Create a folder in: public/templates/<category>/<your-template-name>/
 *  2. Add a feature.png (preview image) inside that folder
 *  3. Create template.json inside that folder (copy schema from any existing one)
 *  4. Add the same data to the category aggregator JSON:
 *       public/templates/<category>/<category>.json  →  templates[] array
 *  5. Add the same data to the root:
 *       data/templates.json  →  templates[] array
 *  6. Save — the gallery and hero slider update automatically.
 *  ─────────────────────────────────────────────────────────────────────────────
 */

import templateData from "./templates.json";

/* ─── Types ──────────────────────────────────────────────────────────────── */

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
  /** Full marketing description of the template */
  description?: string;
  /** Numeric price in INR (e.g. 2999) */
  price: number | string;
  /** Formatted display price (e.g. "₹2,999") */
  displayPrice?: string;
  /** Currency code */
  currency?: string;
  tag: string;
  accentColor: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional: URL to the live interactive invite (HTML file or external link) */
  liveUrl?: string | null;
  /** Show in the hero marquee slider */
  featured?: boolean;
  /** Key selling points of this template */
  highlights?: string[];
  /** Sub-folder name within category folder */
  folder?: string;
  /** Relative path to the sub-template's template.json */
  sourceFile?: string;
}

/* ─── Data from JSON ─────────────────────────────────────────────────────── */

/**
 * All templates — sourced from data/templates.json
 * Normalise the `price` field: JSON stores it as a number, but the
 * Template interface also accepts the legacy "₹999" string format.
 * We expose `displayPrice` (pre-formatted) for rendering.
 */
export const templates: Template[] = (
  templateData.templates as Template[]
).map((t) => ({
  ...t,
  // Legacy compatibility: if consumers use template.price as a display string,
  // fall back to displayPrice. New code should use displayPrice directly.
  price: t.displayPrice ?? `₹${t.price}`,
}));

/** All unique category labels derived from the JSON (for filter pills) */
export const categories: Category[] = [
  "All",
  ...([
    ...new Set(templates.map((t) => t.category)),
  ] as Exclude<Category, "All">[]),
];

/** Only templates marked featured:true — used in the hero slider */
export const featuredTemplates = templates.filter((t) => t.featured);

/** Look up a template by id */
export const getTemplateById = (id: number): Template | undefined =>
  templates.find((t) => t.id === id);

/** Get all templates for a given category */
export const getTemplatesByCategory = (
  category: Exclude<Category, "All">
): Template[] => templates.filter((t) => t.category === category);
