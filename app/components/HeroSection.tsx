"use client";

import Image from "next/image";
import { featuredTemplates } from "@/data/templates";

/*
  Triplicate the list so the -33.333% translateX loop is seamless.
  Row 2 starts offset so the two rows show different cards at the same time.
*/
const row1 = [...featuredTemplates, ...featuredTemplates, ...featuredTemplates];
const row2 = [
  ...featuredTemplates.slice(2),
  ...featuredTemplates.slice(0, 2),
  ...featuredTemplates.slice(2),
  ...featuredTemplates.slice(0, 2),
  ...featuredTemplates.slice(2),
  ...featuredTemplates.slice(0, 2),
];

function TemplateCard({ item }: { item: (typeof featuredTemplates)[number] }) {
  return (
    <div className="marquee-card">
      <div className="marquee-card-img-wrap">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="marquee-card-img"
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
        />
        <div
          className="marquee-card-glow"
          style={{ "--glow": item.accentColor } as React.CSSProperties}
        />
      </div>

      <div className="marquee-card-label">
        <span className="marquee-card-tag">{item.tag}</span>
        <span className="marquee-card-name">{item.name}</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero-slider"
      className="marquee-hero"
      aria-label="Featured invitation templates"
    >
      <div className="marquee-hero-bg" aria-hidden />

      {/* Row 1 — scrolls LEFT */}
      <div className="marquee-row">
        <div className="marquee-track marquee-track-left">
          {row1.map((item, i) => (
            <TemplateCard key={`r1-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div className="marquee-row">
        <div className="marquee-track marquee-track-right">
          {row2.map((item, i) => (
            <TemplateCard key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className="marquee-fade-left"  aria-hidden />
      <div className="marquee-fade-right" aria-hidden />

      {/* ── Commented: heading, badge, CTAs, stats ───────────────── */}
      {/*
        <h1>Don't send a PDF. Send an Experience.</h1>
        <p>Premium Digital Invitations...</p>
        <button>Explore Templates</button>
        <button>See How It Works</button>
        Stats: 10,000+ events | 98% satisfaction | <10 min setup
      */}
    </section>
  );
}
