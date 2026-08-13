"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Template } from "@/data/templates";

const journeySteps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1a 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Instant Delivery",
    color: "text-primary-container",
    borderHover: "group-hover:border-primary-container",
    title: "Arrival",
    desc: "The journey begins with a pulse in their pocket. A high-contrast notification that signals something extraordinary is about to happen.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
      </svg>
    ),
    label: "Custom Music & Map",
    color: "text-tertiary",
    borderHover: "group-hover:border-tertiary",
    title: "Atmosphere",
    desc: "As the link opens, the room shifts. Synchronized audio and vibrant aesthetics create an immediate sensory immersion.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    label: "RSVP Intelligence",
    color: "text-secondary",
    borderHover: "group-hover:border-secondary",
    title: "Connection",
    desc: "Confirmation with a single tap. The excitement builds as they join a curated circle, tracked in real-time for your perfect hosting.",
  },
];

interface Props {
  template: Template;
  related: Template[];
}

function PhoneMockup({
  template,
  mockupRef,
}: {
  template: Template;
  mockupRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="relative group w-full max-w-[310px] sm:max-w-[330px]">
      {/* Background radial glowing light */}
      <div
        className="absolute -inset-8 rounded-full opacity-25 group-hover:opacity-45 transition-opacity duration-700 blur-[60px] pointer-events-none"
        style={{ background: `${template.accentColor}` }}
      />
      {/* Outer Phone Shell */}
      <div
        ref={mockupRef}
        className="relative z-10 bg-neutral-950 p-3 rounded-[3.2rem] shadow-2xl border border-neutral-850/80 transition-all duration-500 hover:scale-[1.01] hover:-rotate-1"
        style={{
          boxShadow: `0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 50px ${template.accentColor}15`,
        }}
      >
        {/* Realistic screen container */}
        <div className="w-full aspect-[9/19.5] relative rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800/40">
          
          {/* iOS Status Bar */}
          <div className="absolute top-0 inset-x-0 h-11 z-30 flex justify-between items-center px-6 text-white text-[11px] font-semibold tracking-tight select-none pointer-events-none">
            <span>9:41</span>
            {/* Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-22 h-5 bg-neutral-950 rounded-full flex items-center justify-center border border-white/5" />
            <div className="flex items-center gap-1.5">
              {/* Cellular network bar indicator */}
              <svg width="12" height="9" viewBox="0 0 17 11" fill="currentColor">
                <rect x="0" y="8" width="2.5" height="3" rx="0.5" />
                <rect x="3.5" y="6" width="2.5" height="5" rx="0.5" />
                <rect x="7" y="4" width="2.5" height="7" rx="0.5" />
                <rect x="10.5" y="2" width="2.5" height="9" rx="0.5" />
                <rect x="14" y="0" width="2.5" height="11" rx="0.5" opacity="0.4" />
              </svg>
              <span>5G</span>
              {/* Battery indicator */}
              <div className="w-5 h-2.5 border border-white/40 rounded-[3px] p-[1px] flex items-center relative">
                <div className="h-full w-4/5 bg-white rounded-[1.5px]" />
                <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[3px] bg-white/40 rounded-r-[1px]" />
              </div>
            </div>
          </div>

          {/* Glare/reflection cover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.1] pointer-events-none z-20" />
          
          {/* Template Feature Image */}
          <Image
            src={template.imageSrc}
            alt={template.imageAlt}
            fill
            sizes="(max-width: 640px) 310px, 400px"
            className="object-cover select-none"
            priority
          />

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/80 rounded-full z-20 pointer-events-none" />
        </div>
      </div>

      {/* Interactive floating elements - only visible on lg screens */}
      <div 
        className="absolute -bottom-6 -left-12 glass-card py-3 px-4 rounded-2xl shadow-xl hidden lg:block animate-bounce z-20 border border-white/30 backdrop-blur-md"
        style={{ animationDuration: "5s" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-on-surface/85 leading-none">Interactive Audio Flow</p>
            <p className="text-[9px] text-on-surface-variant font-mono mt-0.5">Synced Background Music</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TemplateDetailClient({ template, related }: Props) {
  const router = useRouter();
  const mockupRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (mockupRef.current) {
        mockupRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px) rotate(${3 + x * 4}deg)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("reveal-active")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal-el").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <style>{`
        .reveal-el {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.0s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-el.reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .hero-glow {
          filter: blur(130px);
        }
      `}</style>

      <Navbar />

      <main className="relative pt-24 pb-32">
        {/* Ambient background glow behind the page */}
        <div
          ref={glowRef}
          aria-hidden
          className="hero-glow absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] h-[600px] -z-10 opacity-40 transition-transform duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle, ${template.accentColor}18 0%, rgba(203,0,182,0.02) 80%, transparent 100%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Breadcrumb - Full Width at top */}
          <div className="reveal-el flex items-center gap-2 text-label-sm text-on-surface-variant mb-8">
            <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#gallery" className="hover:text-on-surface transition-colors">Gallery</Link>
            <span>/</span>
            <span className="text-on-surface font-medium">{template.name}</span>
          </div>

          {/* Two-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Scrollable Details & Cards (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              
              {/* Template Main Heading & Description */}
              <div>
                <span className="reveal-el text-label-md text-primary tracking-[0.25em] uppercase font-semibold mb-2 block">
                  {template.tag}
                </span>
                <h1 className="reveal-el font-syne font-extrabold text-[clamp(2.5rem,5.5vw,4.2rem)] leading-[1.05] text-on-surface mb-6">
                  {template.name}
                </h1>
                <p className="reveal-el text-body-lg text-on-surface-variant leading-relaxed font-hanken">
                  {template.description ?? `${template.style} — a premium animated digital invitation crafted for your most important moments.`}
                </p>
              </div>

              {/* PHONE PREVIEW (Visible only on Mobile/Tablet, Hidden on Desktop) */}
              <div className="block lg:hidden w-full flex justify-center py-6">
                <PhoneMockup template={template} />
              </div>

              {/* Price & Action Cards Box */}
              <div className="reveal-el glass-card p-8 rounded-[2rem] border border-outline-variant/10 shadow-2xl flex flex-col gap-6 relative overflow-hidden bg-white/40 backdrop-blur-md">
                {/* Visual Accent glow line on top of card */}
                <div className="absolute top-0 inset-x-0 h-1.5" style={{ background: template.accentColor }} />
                
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <span className="text-label-sm text-secondary tracking-widest uppercase block mb-1">
                      {template.category} Invitation
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="font-syne font-extrabold text-4xl text-primary">
                        {template.displayPrice ?? (typeof template.price === "number" ? `₹${template.price.toLocaleString("en-IN")}` : template.price)}
                      </span>
                      <span className="text-label-sm text-outline line-through opacity-60 font-semibold">
                        {template.displayPrice
                          ? template.displayPrice.replace(/[\d,]+/g, (n) => Math.round(Number(n.replace(/,/g, "")) * 1.4).toLocaleString("en-IN"))
                          : (typeof template.price === "number"
                              ? `₹${Math.round(template.price * 1.4).toLocaleString("en-IN")}`
                              : typeof template.price === "string"
                                ? template.price.replace(/[\d,]+/g, (n) => Math.round(Number(n.replace(/,/g, "")) * 1.4).toLocaleString("en-IN"))
                                : "")}
                      </span>
                    </div>
                  </div>
                  
                  {/* Category and Style indicator badges */}
                  <div className="flex gap-2">
                    <span className="text-[11px] font-mono font-bold py-1 px-3 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {template.style}
                    </span>
                    <span className="text-[11px] font-mono font-bold py-1 px-3 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                      Instant Use
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <button
                    className="group text-white px-6 py-4 rounded-full font-syne font-semibold text-md flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer"
                    style={{
                      background: template.accentColor,
                      boxShadow: `0 10px 25px -5px ${template.accentColor}50`,
                    }}
                    onClick={() => {
                      // contact / order action
                    }}
                  >
                    Claim this Invite
                    <svg className="group-hover:translate-x-1.5 transition-transform duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="flex gap-2 w-full">
                    {template.liveUrl && (
                      <a
                        href={template.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-5 py-4 rounded-full font-syne font-semibold text-md flex items-center justify-center gap-2 text-on-surface border border-outline-variant hover:bg-surface-container-low transition-all cursor-pointer hover:border-on-surface"
                      >
                        View Demo
                      </a>
                    )}

                    <button className="flex-1 px-5 py-4 rounded-full font-syne font-semibold text-md flex items-center justify-center gap-2 text-secondary border border-secondary/30 hover:bg-secondary/10 transition-all cursor-pointer">
                      Inquiry Now
                    </button>
                  </div>
                </div>

                {/* Secure purchase indicator */}
                <div className="flex items-center gap-2 text-[12px] text-on-surface-variant/80 mt-2 border-t border-outline-variant/10 pt-4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Fully customizable invitation with music, RSVP database, and map navigation.</span>
                </div>
              </div>

              {/* Social Proof Curators */}
              <div className="reveal-el flex items-center gap-4 bg-surface-container-lowest/50 p-4 rounded-2xl border border-outline-variant/10 w-fit">
                <div className="flex -space-x-3">
                  {[
                    "https://i.pravatar.cc/40?img=11",
                    "https://i.pravatar.cc/40?img=12",
                    "https://i.pravatar.cc/40?img=13",
                  ].map((src, i) => (
                    <img key={i} src={src} alt="Reviewer" className="w-9 h-9 rounded-full border-2 border-background object-cover animate-fade-in" />
                  ))}
                </div>
                <span className="text-[12px] font-semibold text-on-surface-variant tracking-wider uppercase">
                  ⭐ 4.9/5 Rating from 2,400+ Curators
                </span>
              </div>

              {/* Guest Sequence Section (Custom Styled Cards) */}
              <div className="flex flex-col gap-8 mt-4">
                <div className="reveal-el">
                  <span className="text-label-sm text-primary tracking-[0.3em] uppercase block mb-1.5 font-bold">
                    The Guest Sequence
                  </span>
                  <h2 className="font-syne font-bold text-3xl md:text-4xl text-on-surface">
                    The Digital Journey
                  </h2>
                  <p className="text-body-md text-on-surface-variant mt-2 max-w-xl">
                    Every detail designed to construct a cohesive experience from the moment guests tap the link.
                  </p>
                </div>

                <div className="flex flex-col gap-5 relative">
                  {journeySteps.map((step, i) => (
                    <div
                      key={step.title}
                      className="reveal-el flex flex-col md:flex-row gap-5 items-start p-6 rounded-2xl border border-outline-variant/15 hover:border-outline-variant/40 bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] group hover:bg-white/50"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-outline-variant/20 shadow-sm glass-card ${step.color} group-hover:scale-105 transition-transform duration-300`}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-outline font-bold tracking-widest">
                            STEP 0{i + 1}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/50" />
                          <h3 className="font-syne font-bold text-lg text-on-surface">{step.title}</h3>
                        </div>
                        <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed font-hanken">
                          {step.desc}
                        </p>
                        <div className="flex items-center gap-1.5 mt-3 text-[11px] font-mono font-bold tracking-wider text-primary opacity-80 uppercase">
                          <span>Feature</span>
                          <span className="text-outline-variant">•</span>
                          <span>{step.label}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Section */}
              {template.highlights && template.highlights.length > 0 && (
                <div className="flex flex-col gap-8 mt-4 border-t border-outline-variant/10 pt-12">
                  <div className="reveal-el">
                    <span className="text-label-sm text-primary tracking-[0.3em] uppercase block mb-1.5 font-bold">What&apos;s Included</span>
                    <h2 className="font-syne font-bold text-3xl text-on-surface">Everything you need.</h2>
                    <p className="text-body-md text-on-surface-variant mt-2 max-w-xl">
                      This template comes pre-packaged with our advanced system functions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {template.highlights.map((h, i) => (
                      <div
                        key={h}
                        className="reveal-el glass-card rounded-2xl p-5 border border-outline-variant/10 bg-white/40 hover:bg-white/60 hover:scale-[1.02] hover:border-outline-variant/30 transition-all duration-300 flex items-start gap-4"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                          style={{ background: `${template.accentColor}18` }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={template.accentColor} strokeWidth="4" strokeLinecap="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="text-body-md text-on-surface font-semibold leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Sticky Phone Mockup (lg:col-span-5) */}
            {/* Visible only on Desktop (lg and above), hidden on Mobile/Tablet */}
            <div className="hidden lg:flex lg:col-span-5 lg:sticky lg:top-28 self-start justify-center w-full min-h-[500px]">
              <PhoneMockup template={template} mockupRef={mockupRef} />
            </div>

          </div>
        </div>
      </main>

      {/* ── Curated Discovery (Related) ──────────────────── */}
      {related.length > 0 && (
        <section className="py-32 bg-surface-container-low/50 relative border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="reveal-el flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
              <div className="max-w-xl">
                <span className="text-label-md text-on-surface-variant tracking-[0.3em] uppercase block mb-4">The Catalog</span>
                <h2 className="font-syne font-bold text-5xl text-on-surface">Curated Discovery</h2>
                <p className="text-body-lg text-on-surface-variant mt-4">
                  Beyond this invite, discover other realms of digital elegance for your distinct vision.
                </p>
              </div>
              <Link
                href="/#gallery"
                className="group text-label-md text-on-surface flex items-center gap-3 border-b border-on-surface pb-1 hover:text-primary hover:border-primary transition-all"
              >
                EXPLORE THE ARCHIVE
                <svg className="group-hover:translate-x-2 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Asymmetric grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Large card */}
              {related[0] && (
                <div
                  className="reveal-el md:col-span-7 group cursor-pointer"
                  style={{ transitionDelay: "100ms" }}
                  onClick={() => router.push(`/templates/${related[0].id}`)}
                >
                  <div className="overflow-hidden rounded-3xl aspect-[16/10] relative mb-5">
                    <Image src={related[0].imageSrc} alt={related[0].imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-label-sm uppercase tracking-widest">{related[0].category}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-syne font-semibold text-2xl text-on-surface">{related[0].name}</h4>
                      <p className="text-label-md text-on-surface-variant mt-1">{related[0].style} &amp; {related[0].displayPrice ?? related[0].price}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tall card */}
              {related[1] && (
                <div
                  className="reveal-el md:col-span-5 md:mt-12 group cursor-pointer"
                  style={{ transitionDelay: "300ms" }}
                  onClick={() => router.push(`/templates/${related[1].id}`)}
                >
                  <div className="overflow-hidden rounded-3xl aspect-[4/5] relative mb-5">
                    <Image src={related[1].imageSrc} alt={related[1].imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div>
                    <h4 className="font-syne font-semibold text-2xl text-on-surface">{related[1].name}</h4>
                    <p className="text-label-md text-on-surface-variant mt-1">{related[1].style} &amp; {related[1].displayPrice ?? related[1].price}</p>
                  </div>
                </div>
              )}

              {/* Square card */}
              {related[2] && (
                <div
                  className="reveal-el md:col-span-4 md:-mt-24 group cursor-pointer"
                  style={{ transitionDelay: "500ms" }}
                  onClick={() => router.push(`/templates/${related[2].id}`)}
                >
                  <div className="overflow-hidden rounded-3xl aspect-square relative mb-5">
                    <Image src={related[2].imageSrc} alt={related[2].imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div>
                    <h4 className="font-syne font-semibold text-2xl text-on-surface">{related[2].name}</h4>
                    <p className="text-label-md text-on-surface-variant mt-1">{related[2].style} &amp; {related[2].displayPrice ?? related[2].price}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Footer ─────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
