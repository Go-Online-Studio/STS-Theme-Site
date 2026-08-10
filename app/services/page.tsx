"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TemplateGallery from "@/app/components/TemplateGallery";

const steps = [
  {
    step: "01",
    title: "Pick Your Template",
    desc: "Browse our curated gallery of premium animated e-invite templates. Filter by wedding, birthday, corporate, and more to find your perfect base design.",
  },
  {
    step: "02",
    title: "Personalize Every Detail",
    desc: "Share your event schedule, location coordinates, background music choices, and guest questions. Our motion design team handles the rest, custom-crafting a tailored masterpiece.",
  },
  {
    step: "03",
    title: "Broadcast & Track RSVPs",
    desc: "Share the high-end digital link instantly via WhatsApp or Email. Watch RSVP entries roll in on your live dashboard, organized by dietary needs, party size, and schedules.",
  },
];

export default function ServicesPage() {
  const mapSectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [fillHeight, setFillHeight] = useState(0); // in pixels for the map path line
  const [progress, setProgress] = useState(0); // overall scroll progress (0 to 1)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check screen size on mount and resize
    const checkMediaQuery = () => {
      setIsDesktop(window.innerWidth >= 900);
    };
    checkMediaQuery();
    window.addEventListener("resize", checkMediaQuery);

    const handleScroll = () => {
      if (!mapSectionRef.current) return;
      const rect = mapSectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const sectionTop = rect.top;

      // Calculate how much of the section has been scrolled past the top of viewport
      const scrolled = -sectionTop;
      const totalScrollable = sectionHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Clamp progress between 0 and 1
      const currentProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setProgress(currentProgress);

      // The fill track is 280px tall on desktop
      const trackMaxHeight = 280;
      setFillHeight(currentProgress * trackMaxHeight);

      // Determine active step based on scroll progress zones
      if (currentProgress < 0.35) {
        setActiveStep(0);
      } else if (currentProgress < 0.75) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("resize", checkMediaQuery);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero Banner with Left & Right Showcase Cards ── */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#faf8ff] to-background min-h-[85vh] flex items-center">
        {/* Floating Background Glows */}
        <div
          aria-hidden
          className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #007a94, transparent)" }}
        />
        <div
          aria-hidden
          className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #cb00b6, transparent)" }}
        />

        {/* ── Grid Container: text in center, decorative cards on sides ── */}
        <div className="services-hero-container">

          {/* Left Column Showcase Cards */}
          <div className="hero-side-column hero-side-column-left">
            {/* Card 1: Design Details */}
            <div className="ui-feature-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎨</span>
                <span className="text-label-sm font-bold text-primary">Editorial Design</span>
              </div>
              <p className="text-body-sm text-on-surface-variant font-medium leading-relaxed">
                Premium layout, custom serif typography &amp; ambient background effects.
              </p>
            </div>

            {/* Card 2: RSVP Tracker */}
            <div className="ui-feature-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">👥</span>
                <span className="text-label-sm font-bold text-secondary">Guest Tracker</span>
              </div>
              <div className="mt-2 text-headline-sm font-syne font-bold text-on-surface">148 RSVP&apos;d</div>
              <p className="text-label-sm text-outline mt-1">122 attending • 12 veg • 6 gluten-free</p>
            </div>

            {/* Card 3: Music Player */}
            <div className="ui-feature-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎵</span>
                <span className="text-label-sm font-bold text-tertiary">Ambient Music</span>
              </div>
              <p className="text-label-sm text-on-surface-variant truncate font-semibold">Perfect_Piano.mp3</p>
              <div className="flex gap-0.5 items-end h-4 mt-2">
                <div className="w-1 bg-primary h-3 animate-pulse" />
                <div className="w-1 bg-primary h-2 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-1 bg-primary h-4 animate-pulse" style={{ animationDelay: "0.4s" }} />
                <div className="w-1 bg-primary h-1 animate-pulse" style={{ animationDelay: "0.1s" }} />
                <div className="w-1 bg-primary h-3 animate-pulse" style={{ animationDelay: "0.3s" }} />
              </div>
            </div>
          </div>

          {/* Center Column: Text Content */}
          <div className="text-center w-full relative z-10 py-6">
            <h1 className="services-hero-headline">
              Stunning Animations.<br />
              <span className="gradient-text">Complete Guest Control.</span>
            </h1>

            <p className="services-hero-sub">
              Pick a template, share your details, and get a premium digital e-invite fitted with background music, direct GPS maps, and real-time RSVP databases.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#gallery"
                className="gradient-btn px-8 py-3.5 rounded-full text-label-md flex items-center gap-2"
              >
                Browse Gallery
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#how-it-works-scroll"
                className="px-8 py-3.5 rounded-full text-label-md border border-outline-variant/50 text-on-surface hover:bg-surface-container-low transition-colors"
              >
                See How It Works ↓
              </Link>
            </div>
          </div>

          {/* Right Column Showcase Cards */}
          <div className="hero-side-column hero-side-column-right">
            {/* Card 4: Location Map */}
            <div className="ui-feature-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📍</span>
                <span className="text-label-sm font-bold text-primary">Live Directions</span>
              </div>
              <p className="text-body-sm text-on-surface-variant font-medium">
                Taj Palace Hotel, Mumbai. One-click nav for guests.
              </p>
            </div>

            {/* Card 5: Analytics */}
            <div className="ui-feature-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📊</span>
                <span className="text-label-sm font-bold text-secondary">Analytics Dashboard</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div>
                  <div className="text-headline-sm font-syne font-bold text-on-surface">94%</div>
                  <p className="text-label-sm text-outline">Open Rate</p>
                </div>
                <div className="text-right">
                  <div className="text-headline-sm font-syne font-bold text-on-surface">2m 14s</div>
                  <p className="text-label-sm text-outline">Avg Session</p>
                </div>
              </div>
            </div>

            {/* Card 6: WhatsApp broadcast */}
            <div className="ui-feature-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📲</span>
                <span className="text-label-sm font-bold text-tertiary">WhatsApp Delivery</span>
              </div>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                Broadcast direct links to all guests instantly with real-time delivery ticks.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Template Gallery Section ── */}
      <div id="gallery">
        <TemplateGallery />
      </div>

      {/* ── Sticky Scroll Map Flow (How It Works Redesign) ── */}
      <section
        id="how-it-works-scroll"
        ref={mapSectionRef}
        className="map-flow-section"
      >
        <div className="map-flow-sticky">
          <div className="map-flow-title">
            <span className="text-label-md text-primary-container mb-3 uppercase tracking-wider block font-semibold">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-on-surface">
              How It Works
            </h2>
            <p className="text-body-md text-on-surface-variant mt-3">
              Scroll down to follow the journey from picking a design to event success.
            </p>
          </div>

          <div className="map-flow-grid">
            {/* Left Column: Sticky Timeline Path Checkpoints */}
            <div className="path-indicator-column">
              <div className="map-flow-track" />
              <div className="map-flow-fill" style={{ height: `${fillHeight}px` }} />

              {steps.map((s, idx) => (
                <div
                  key={s.step}
                  className={`map-node ${activeStep === idx ? "map-node-active" : ""} ${activeStep > idx ? "map-node-completed" : ""}`}
                >
                  {s.step}
                </div>
              ))}
            </div>

            {/* Right Column: Absolute Stacking Cards Container */}
            <div className="cards-absolute-container">
              {steps.map((s, idx) => {
                // Dynamic animation variables (desktop only)
                let translateYVal = "0%";
                let opacityVal = 1;
                let scaleVal = 1;
                let translateShiftY = 0;
                let shadowVal = "none";
                let borderVal = "none";

                if (isDesktop) {
                  if (idx === 0) {
                    opacityVal = progress >= 0.45 ? 0 : 1;
                    translateYVal = "0%";
                  } else if (idx === 1) {
                    if (progress <= 0.15) {
                      translateYVal = "100%";
                      opacityVal = 0;
                    } else if (progress < 0.45) {
                      const ratio = (progress - 0.15) / 0.30;
                      translateYVal = `${(1 - ratio) * 100}%`;
                      if (progress < 0.30) {
                        opacityVal = (progress - 0.15) / 0.15;
                      } else {
                        opacityVal = 1;
                      }
                    } else {
                      translateYVal = "0%";
                      opacityVal = progress >= 0.85 ? 0 : 1;
                    }
                  } else if (idx === 2) {
                    if (progress <= 0.60) {
                      translateYVal = "100%";
                      opacityVal = 0;
                    } else if (progress < 0.90) {
                      const ratio = (progress - 0.60) / 0.30;
                      translateYVal = `${(1 - ratio) * 100}%`;
                      if (progress < 0.75) {
                        opacityVal = (progress - 0.60) / 0.15;
                      } else {
                        opacityVal = 1;
                      }
                    } else {
                      translateYVal = "0%";
                      opacityVal = 1;
                    }
                  }

                  // Add staggered depth scale for covered cards
                  if (activeStep > idx) {
                    const factor = activeStep - idx;
                    scaleVal = 1 - factor * 0.04;
                    translateShiftY = -factor * 12;
                  }

                  // Show shadow and border only on moving cards
                  if (idx === 1 && progress > 0.15 && progress < 0.45) {
                    shadowVal = "0 -20px 40px -15px rgba(0, 60, 75, 0.16), -20px 0 40px -15px rgba(0, 60, 75, 0.12), 20px 0 40px -15px rgba(0, 60, 75, 0.12)";
                    borderVal = "1px solid rgba(0, 96, 117, 0.08)";
                  } else if (idx === 2 && progress > 0.60 && progress < 0.90) {
                    shadowVal = "0 -20px 40px -15px rgba(0, 60, 75, 0.16), -20px 0 40px -15px rgba(0, 60, 75, 0.12), 20px 0 40px -15px rgba(0, 60, 75, 0.12)";
                    borderVal = "1px solid rgba(0, 96, 117, 0.08)";
                  }
                }

                return (
                  <div
                    key={s.step}
                    className="absolute-flow-card"
                    style={isDesktop ? {
                      zIndex: idx * 10,
                      opacity: opacityVal,
                      transform: `scale(${scaleVal}) translateY(calc(${translateYVal} + ${translateShiftY}px))`,
                      boxShadow: shadowVal,
                      border: borderVal,
                      transition: progress === 0 || progress === 1 ? "all 0.4s ease" : "opacity 0.25s ease, transform 0.1s linear, box-shadow 0.25s ease, border 0.25s ease",
                    } : {
                      zIndex: idx * 10,
                    } as React.CSSProperties}
                  >
                    <div className="step-card-header">
                      <span className="step-card-num">Step {s.step}</span>
                      <h3 className="step-card-title">{s.title}</h3>
                    </div>
                    <p className="step-card-desc">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #006075 0%, #007a94 50%, #00677e 100%)" }}
        >
          <div aria-hidden className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: "#00d2fd" }} />
          <div aria-hidden className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: "#cb00b6" }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">
              Ready to create your invite?
            </h2>
            <p className="text-body-md text-white/70 max-w-xl mx-auto mb-10">
              Join hundreds of couples, families, and event planners who trust InviteStash for their most important moments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#gallery" className="bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-label-md hover:bg-white/90 transition-colors flex items-center gap-2">
                Browse Templates
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/" className="border border-white/30 text-white px-8 py-3.5 rounded-full text-label-md hover:bg-white/10 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
