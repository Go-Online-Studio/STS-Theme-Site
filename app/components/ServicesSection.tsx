"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "design",
    number: "01",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Custom Design",
    desc: "Tailor-made aesthetics for your event. Every pixel crafted for impact, every layout tuned to evoke emotion and elegance.",
    tag: "Design Studio",
    accentRgb: "0, 96, 117",
    accentClass: "text-primary",
    tagBg: "#e5f7ff",
    tagColor: "#006075",
    cardGradient: "linear-gradient(140deg, #f2f3ff 0%, #e5f7ff 60%, #faf8ff 100%)",
    borderColor: "rgba(0, 96, 117, 0.2)",
    glowColor: "rgba(0, 96, 117, 0.13)",
  },
  {
    id: "rsvp",
    number: "02",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
      </svg>
    ),
    title: "RSVP Management",
    desc: "Track attendees seamlessly. Custom questions, dietary needs, +1 tracking — all managed from one clean, beautiful dashboard.",
    tag: "Guest Tools",
    accentRgb: "0, 103, 126",
    accentClass: "text-secondary",
    tagBg: "#e0f6ff",
    tagColor: "#00677e",
    cardGradient: "linear-gradient(140deg, #eaedff 0%, #d6f5ff 60%, #faf8ff 100%)",
    borderColor: "rgba(0, 103, 126, 0.2)",
    glowColor: "rgba(0, 103, 126, 0.13)",
  },
  {
    id: "analytics",
    number: "03",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Guest Analytics",
    desc: "Real-time insights into your guest list. Know who's attending, when they confirmed, and plan every detail accordingly.",
    tag: "Insights",
    accentRgb: "161, 0, 144",
    accentClass: "text-tertiary",
    tagBg: "#fff0fb",
    tagColor: "#a10090",
    cardGradient: "linear-gradient(140deg, #fff1f7 0%, #fde8ff 60%, #faf8ff 100%)",
    borderColor: "rgba(161, 0, 144, 0.18)",
    glowColor: "rgba(161, 0, 144, 0.10)",
  },
  {
    id: "delivery",
    number: "04",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
    title: "Instant Delivery",
    desc: "Reach every guest with a single click — via email, SMS, or a beautifully shareable link. Every invite lands perfectly.",
    tag: "Multi-Channel",
    accentRgb: "0, 122, 148",
    accentClass: "text-primary-container",
    tagBg: "#dff4ff",
    tagColor: "#007a94",
    cardGradient: "linear-gradient(140deg, #f2f3ff 0%, #daf5ff 60%, #faf8ff 100%)",
    borderColor: "rgba(0, 122, 148, 0.2)",
    glowColor: "rgba(0, 122, 148, 0.13)",
  },
];

const SCROLL_PER_CARD = 1; // in viewport heights

export default function ServicesSection() {
  const outerRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [animDir, setAnimDir] = useState<"up" | "down">("up");
  // animKey forces re-mount of the entering card so CSS animation re-triggers
  const [animKey, setAnimKey] = useState(0);
  const prevIdxRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const { top } = outer.getBoundingClientRect();
      const scrolledIn = -top; // px scrolled into the section

      if (scrolledIn < 0) {
        // Haven't reached the section yet
        if (prevIdxRef.current !== 0) {
          prevIdxRef.current = 0;
          setActiveIdx(0);
        }
        return;
      }

      const vh = window.innerHeight;
      const rawIdx = Math.floor(scrolledIn / (vh * SCROLL_PER_CARD));
      const clampedIdx = Math.min(Math.max(rawIdx, 0), services.length - 1);

      if (clampedIdx !== prevIdxRef.current) {
        const dir = clampedIdx > prevIdxRef.current ? "up" : "down";
        setAnimDir(dir);
        setAnimKey((k) => k + 1);
        prevIdxRef.current = clampedIdx;
        setActiveIdx(clampedIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile card scroll animation via IntersectionObserver
  useEffect(() => {
    const cards = document.querySelectorAll(".svc-mobile-card");
    if (!cards.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("svc-mob-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const svc = services[activeIdx];
  // +1 extra viewport so the last card has breathing room before the sticky releases
  const totalHeight = `${(services.length + 1) * 100}vh`;

  return (
    <section
      ref={outerRef}
      id="services"
      className="svc-outer border-t border-outline-variant/30"
      style={{ height: totalHeight }}
    >
      {/* ── Sticky panel — sticks while section scrolls ── */}
      <div className="svc-panel">

        {/* ── Left: static heading + nav ── */}
        <div className="svc-header-col">
          <p className="text-label-md text-primary-container mb-3 tracking-widest uppercase">What We Offer</p>
          <h2 className="text-headline-lg text-on-surface font-syne mb-4">
            Our&nbsp;<span className="gradient-text">Services</span>
          </h2>
          <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
            Everything you need to host effortlessly — designed for modern event creators.
          </p>

          {/* Step indicators */}
          <div className="svc-steps">
            {services.map((s, i) => (
              <div
                key={s.id}
                className={`svc-step ${i === activeIdx ? "svc-step-active" : ""}`}
                style={i === activeIdx ? { color: `rgb(${s.accentRgb})` } : {}}
              >
                <span
                  className="svc-step-dot"
                  style={{
                    background: i === activeIdx ? `rgb(${s.accentRgb})` : undefined,
                    borderColor: i === activeIdx ? `rgb(${s.accentRgb})` : undefined,
                  }}
                />
                <span className="svc-step-label">{s.title}</span>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="gradient-btn mt-10 px-6 py-3 rounded-full text-label-md inline-flex items-center gap-2"
          >
            Explore All Services
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* ── Right: animated card ── */}
        <div className="svc-card-stage">
          {/* Render only the active card; key + animDir triggers CSS re-animation */}
          <div
            key={`${activeIdx}-${animKey}`}
            className={`svc-card-wrap ${animDir === "up" ? "svc-enter-up" : "svc-enter-down"}`}
            style={{ "--accent-rgb": svc.accentRgb } as React.CSSProperties}
          >
            <Link
              href={`/services/${svc.id}`}
              id={`service-${svc.id}`}
              className="svc-face group"
              style={{
                background: svc.cardGradient,
                borderColor: svc.borderColor,
                boxShadow: `0 32px 80px -16px ${svc.glowColor}`,
              }}
            >
              {/* Number watermark */}
              <span className="svc-big-num" style={{ color: `rgba(${svc.accentRgb}, 0.07)` }}>
                {svc.number}
              </span>

              {/* Tag */}
              <span className="svc-chip" style={{ background: svc.tagBg, color: svc.tagColor }}>
                {svc.tag}
              </span>

              {/* Icon */}
              <div
                className="svc-icon-bubble mt-6"
                style={{
                  background: `rgba(${svc.accentRgb}, 0.1)`,
                  boxShadow: `0 0 0 1px rgba(${svc.accentRgb}, 0.15)`,
                }}
              >
                <span className={svc.accentClass}>{svc.icon}</span>
              </div>

              {/* Text */}
              <div className="mt-8">
                <h3 className="text-headline-md text-on-surface font-syne mb-3">{svc.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{svc.desc}</p>
              </div>

              {/* Learn more */}
              <div className={`svc-learn mt-8 ${svc.accentClass}`}>
                <span className="text-label-md">Learn more</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="svc-arrow-svg">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Glow blob */}
              <div
                aria-hidden
                className="svc-glow-blob"
                style={{ background: `radial-gradient(circle, rgba(${svc.accentRgb}, 0.18) 0%, transparent 70%)` }}
              />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
