"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Lena Voss",
    role: "Creative Director",
    bgClassColor: "#fdf8ec",
    glowColor: "rgba(218, 165, 32, 0.2)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_8PMgAIaCRAUHpbWbc6wmKdmqR0lv6bsFuxL3YK8wxAv9p3k_v0W6GVUvc8hfaeu_rdCBsI6A8P-Ho53qWaGmCms1b9Zljy0jZ6QX7bfFp4Pivkc0poQJcJtDrpqfpLg_0SDukPSL1C9XPpTraa-sDXUyWMnBNb1J0mG8biB3hk1-xFwE2PcpxDawKHOMOJCpqQz9_uE1HTkbL0KcGEBC6M2jsj4Hd8fZIdNbbi9OMzZLgxApOFqUw",
  },
  {
    name: "Julian Reed",
    role: "Lead Motion Designer",
    bgClassColor: "#ecfbfd",
    glowColor: "rgba(0, 210, 253, 0.2)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX8OZNKxZulelr3WoxeLMtsx_2ebYIiLuCsJb3HbDZoqmZf9rLyIz17BvmzXaboTJw4MMnLAvQZZHIpuImNxDoizZx4-Dro4HC6epx1nNGzWu0lo0dHr4frr6TdDwEJp8VGymJFWWahamDJk8dLUK0WG14FsR3VmNye2wVq_obV-zdKTHEimkwF0jYbnJeOjV2k5P_jqyFzH2r0YOIzOxTcxUgLFxyfUQ0xmI61JSSZEDXs0F_wmGLtg",
  },
  {
    name: "Sasha Kim",
    role: "Curator",
    bgClassColor: "#fbeffd",
    glowColor: "rgba(203, 0, 182, 0.2)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCimjFY4c_BtnvCMAxPjfNedbdhuO21bnQS7ZEJbG-kqVMbJr3R451eeVEbFqdqNIAJAgboOL2_GiyO16U8AA8lkSVEELclJa6vRSs1cmdFPo-YyN0YJKNCEOVoC-_ak1-g11tHAHm7oH-HtuSPCCZvrr98EecZO85PSnQCvJmOV5pNWpjncVMnxsprbpJmgJt4hBttfUnrJJ2dpVgikuHgkulkbHR0PuUVNYDGg73qZm3bcBYD-cDGKQ",
  },
  {
    name: "Marcus Thorne",
    role: "Brand Strategist",
    bgClassColor: "#eceffd",
    glowColor: "rgba(63, 81, 181, 0.2)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2WJZE-1L8-2p7BMBpFHQIYiM24AGT6pucz3CJuh3St2tWpp4SGufPjFyL6rXb91mtib6H_knCcf2grJe-h9JlE1em7dzWNlFQVdbOm4A5_C9f7O5D9ymVS5xBTjNPMRyYEmZkGL_M70fSfIO3xJ_rgB4EIYqksDe2Yob9XJCGV8nWSvbKvVeYlxczKhqzgOUX6QfdwubANjX8RCxeP7NqbKWzEu0BwasKzueHpOCCKCI8GByq1-MOw",
  },
];

const services = [
  {
    title: "Digital Curation",
    description:
      "Selective aesthetics tailored to your event's DNA. We filter through the noise to bring you pure, unadulterated style.",
    cardBorderHover: "rgba(218, 165, 32, 0.3)",
    cardShadowHover: "rgba(218, 165, 32, 0.15)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#daa520" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Editorial Design",
    description:
      "Layouts that breathe. Typography that speaks. We treat every digital invitation like a high-end magazine cover.",
    cardBorderHover: "rgba(0, 210, 253, 0.3)",
    cardShadowHover: "rgba(0, 210, 253, 0.15)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d2fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: "Motion Narrative",
    description:
      "Static is boring. Our designs move with intention, creating a cinematic unveiling for your guests from the first click.",
    cardBorderHover: "rgba(203, 0, 182, 0.3)",
    cardShadowHover: "rgba(203, 0, 182, 0.15)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cb00b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const [timelineHeight, setTimelineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal observer
    const elements = document.querySelectorAll(".reveal-on-scroll, .reveal-scale");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Timeline fill height handler
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const total = start - end;

      const current = rect.top - end;
      let progress = 1 - (current / total);
      progress = Math.max(0, Math.min(1, progress));

      if (rect.bottom < windowHeight * 0.5) {
        progress = 1;
      }

      setTimelineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md selection:bg-secondary-fixed-dim selection:text-on-secondary-fixed">
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div aria-hidden className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-container/3 blur-[120px] pointer-events-none" />
        <div aria-hidden className="absolute top-[50%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary-container/3 blur-[140px] pointer-events-none" />

        {/* ── Hero Section ── */}
        <section className="max-w-7xl mx-auto px-6 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-label-md text-primary uppercase tracking-widest mb-4 block font-semibold reveal-on-scroll">
                Our Mission
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold text-on-surface leading-tight mb-6 reveal-on-scroll delay-100">
                We Ditch Boring Invites.<br />
                <span className="gradient-text">We Create Masterpieces.</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed reveal-on-scroll delay-200">
                We started with a simple belief: the first impression of your event
                shouldn&apos;t just be a plain email or boring PDF—it should be a cinematic experience.
                InviteBox was born from the intersection of editorial elegance and cutting-edge digital curation.
              </p>

              <div className="flex items-center gap-8 reveal-on-scroll delay-300">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-syne font-bold text-primary">150k+</span>
                  <span className="text-label-sm text-outline uppercase tracking-wider mt-1">Invites Sent</span>
                </div>
                <div className="w-px h-12 bg-outline-variant" />
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-syne font-bold text-primary">99%</span>
                  <span className="text-label-sm text-outline uppercase tracking-wider mt-1">Swoon Rate</span>
                </div>
              </div>
            </div>

            {/* Collage Feature Image */}
            <div className="lg:col-span-5 relative reveal-scale delay-200">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0iVL1iC6L15BHFnpVxw7B3bU8wANt4lBNqaIIvJHW1dox7aSc_glXzpJqfw8jrgm71k3FkEn2nHXbBHGCWRsJxGo464lS_AT-zZsLErAabEbyliXZMn9E9QG671of_-fzsqrAbBb2W4YYotwhg0Gj-n4sfkHui4JtGGSsJbTZ-6nwavvJkL_S1LLiCnbD0w5kxC2AhxzEVxOaWiQtx8vsyJY43-utABoORgs9eIjb9m2J9nFmO5zPGw"
                  alt="Editorial office space with minimalist aesthetic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Philosophy Section ── */}
        <section className="bg-surface-container-low py-24 mb-28 border-y border-outline-variant/20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
              <div className="max-w-2xl reveal-on-scroll">
                <span className="text-label-md text-primary uppercase tracking-widest mb-3 block font-semibold">
                  Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-syne font-bold text-on-surface">
                  Curated Digital Experiences
                </h2>
              </div>
              <p className="text-body-md text-on-surface-variant max-w-sm reveal-on-scroll delay-100">
                Beyond basic templates, we provide artistic direction for the modern host
                who values sophistication and soul.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((svc, index) => (
                <div
                  key={svc.title}
                  className={`philosophy-card reveal-on-scroll delay-${(index + 1) * 100}`}
                  style={{
                    ["--card-border-hover" as string]: svc.cardBorderHover,
                    ["--card-shadow-hover" as string]: svc.cardShadowHover,
                  } as React.CSSProperties}
                >
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mb-6 shadow-sm border border-outline-variant/30">
                      {svc.icon}
                    </div>
                    <h3 className="text-2xl font-syne font-bold text-on-surface mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                    <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary-container transition-all duration-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founders & Visionaries Section ── */}
        {/* <section className="max-w-7xl mx-auto px-6 mb-28 relative z-10">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-label-md text-primary uppercase tracking-widest mb-3 block font-semibold">
              Creative Lab
            </span>
            <h2 className="text-3xl sm:text-4xl font-syne font-bold text-on-surface">
              Meet the Designers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`team-member-card reveal-on-scroll delay-${(index + 1) * 100}`}
                style={{
                  ["--glow-color" as string]: member.glowColor,
                  ["--bg-class-color" as string]: member.bgClassColor,
                } as React.CSSProperties}
              >
                <div className="team-image-container">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                    className="team-image-pic"
                  />
                </div>
                <div className="px-3 py-4 text-center">
                  <h4 className="text-xl font-syne font-bold text-on-surface">{member.name}</h4>
                  <p className="text-label-sm text-outline uppercase tracking-wider mt-1.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* ── Testimonials Section ── */}
        <section className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="bg-inverse-surface rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden reveal-scale">
            {/* Background Decorative Glow */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"
            />
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-12 text-center">
              Loved by Hosts
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {/* Card 1 */}
              <div className="bg-surface p-8 rounded-2xl border-l-4 border-primary transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="text-primary text-5xl font-syne font-extrabold mb-2 leading-none">
                    “
                  </div>
                  <p className="text-body-lg text-on-surface-variant italic mb-8 leading-relaxed">
                    &quot;InviteBox didn&apos;t just send invites; they set the mood for my
                    entire gallery opening. The digital curation is unmatched in this
                    industry.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center font-bold text-primary">
                    AO
                  </div>
                  <div>
                    <p className="font-syne font-semibold text-on-surface">Amara Okafor</p>
                    <p className="text-label-sm text-outline">Gallerist</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface p-8 rounded-2xl border-l-4 border-secondary transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="text-secondary text-5xl font-syne font-extrabold mb-2 leading-none">
                    “
                  </div>
                  <p className="text-body-lg text-on-surface-variant italic mb-8 leading-relaxed">
                    &quot;The editorial design feel of these invites is exactly what was
                    missing from the digital world. It feels high-end, premium, and
                    personal.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center font-bold text-secondary">
                    DC
                  </div>
                  <div>
                    <p className="font-syne font-semibold text-on-surface">David Chen</p>
                    <p className="text-label-sm text-outline">Event Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── New CTA Section ── */}
        <section className="max-w-4xl mx-auto px-6 mt-28 relative z-10 reveal-scale">
          <div className="relative rounded-[2.5rem] p-12 text-center overflow-hidden border border-outline-variant/30 bg-surface-container-high shadow-2xl">
            {/* Ambient glows inside CTA */}
            <div aria-hidden className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl font-syne font-bold text-on-surface mb-4">
              Ready to elevate your event?
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-lg mx-auto mb-8 leading-relaxed">
              Create an unforgettable first impression. Select from our editorial collection and publish your customized design in minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/services#gallery"
                className="gradient-btn px-8 py-3.5 rounded-full text-label-md flex items-center gap-2"
              >
                Browse Collection
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full text-label-md border border-outline-variant/50 text-on-surface hover:bg-surface-container-low transition-colors"
              >
                Talk to a Designer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
