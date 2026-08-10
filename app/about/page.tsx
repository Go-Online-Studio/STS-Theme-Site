import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "About Us | InviteStash",
  description:
    "We started with a simple belief: the first impression of your event shouldn't just be an email—it should be a masterpiece. InviteStash was born from the intersection of editorial elegance and cutting-edge digital curation.",
};

const teamMembers = [
  {
    name: "Lena Voss",
    role: "Creative Director",
    bgClass: "bg-secondary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_8PMgAIaCRAUHpbWbc6wmKdmqR0lv6bsFuxL3YK8wxAv9p3k_v0W6GVUvc8hfaeu_rdCBsI6A8P-Ho53qWaGmCms1b9Zljy0jZ6QX7bfFp4Pivkc0poQJcJtDrpqfpLg_0SDukPSL1C9XPpTraa-sDXUyWMnBNb1J0mG8biB3hk1-xFwE2PcpxDawKHOMOJCpqQz9_uE1HTkbL0KcGEBC6M2jsj4Hd8fZIdNbbi9OMzZLgxApOFqUw",
    offset: "",
  },
  {
    name: "Julian Reed",
    role: "Lead Motion Designer",
    bgClass: "bg-tertiary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX8OZNKxZulelr3WoxeLMtsx_2ebYIiLuCsJb3HbDZoqmZf9rLyIz17BvmzXaboTJw4MMnLAvQZZHIpuImNxDoizZx4-Dro4HC6epx1nNGzWu0lo0dHr4frr6TdDwEJp8VGymJFWWahamDJk8dLUK0WG14FsR3VmNye2wVq_obV-zdKTHEimkwF0jYbnJeOjV2k5P_jqyFzH2r0YOIzOxTcxUgLFxyfUQ0xmI61JSSZEDXs0F_wmGLtg",
    offset: "",
  },
  {
    name: "Sasha Kim",
    role: "Curator",
    bgClass: "bg-primary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCimjFY4c_BtnvCMAxPjfNedbdhuO21bnQS7ZEJbG-kqVMbJr3R451eeVEbFqdqNIAJAgboOL2_GiyO16U8AA8lkSVEELclJa6vRSs1cmdFPo-YyN0YJKNCEOVoC-_ak1-g11tHAHm7oH-HtuSPCCZvrr98EecZO85PSnQCvJmOV5pNWpjncVMnxsprbpJmgJt4hBttfUnrJJ2dpVgikuHgkulkbHR0PuUVNYDGg73qZm3bcBYD-cDGKQ",
    offset: "lg:mt-10",
  },
  {
    name: "Marcus Thorne",
    role: "Brand Strategist",
    bgClass: "bg-surface-variant",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2WJZE-1L8-2p7BMBpFHQIYiM24AGT6pucz3CJuh3St2tWpp4SGufPjFyL6rXb91mtib6H_knCcf2grJe-h9JlE1em7dzWNlFQVdbOm4A5_C9f7O5D9ymVS5xBTjNPMRyYEmZkGL_M70fSfIO3xJ_rgB4EIYqksDe2Yob9XJCGV8nWSvbKvVeYlxczKhqzgOUX6QfdwubANjX8RCxeP7NqbKWzEu0BwasKzueHpOCCKCI8GByq1-MOw",
    offset: "lg:mt-10",
  },
];

const services = [
  {
    title: "Digital Curation",
    description:
      "Selective aesthetics tailored to your event's DNA. We filter through the noise to bring you pure, unadulterated style.",
    bgIcon: "bg-secondary-fixed",
    iconColor: "text-primary",
    barColor: "bg-secondary",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: "Editorial Design",
    description:
      "Layouts that breathe. Typography that speaks. We treat every digital invitation like a high-end magazine cover.",
    bgIcon: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    barColor: "bg-tertiary",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    title: "Motion Narrative",
    description:
      "Static is boring. Our designs move with intention, creating a cinematic unveiling for your guests from the first click.",
    bgIcon: "bg-primary-fixed",
    iconColor: "text-primary-container",
    barColor: "bg-primary",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md selection:bg-secondary-fixed-dim selection:text-on-secondary-fixed">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* ── Hero Section: Our Story ────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-label-md text-secondary uppercase tracking-widest mb-4 block font-semibold">
                The Genesis
              </span>
              <h1 className="text-5xl md:text-6xl font-syne font-bold text-primary leading-tight mb-6">
                Our Story
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
                We started with a simple belief: the first impression of your event
                shouldn&apos;t just be an email—it should be a masterpiece. InviteStash was
                born from the intersection of editorial elegance and cutting-edge digital
                curation.
              </p>

              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-syne font-bold text-secondary">150k+</span>
                  <span className="text-label-sm text-outline uppercase tracking-wider">Invites Sent</span>
                </div>
                <div className="w-px h-12 bg-outline-variant" />
                <div className="flex flex-col">
                  <span className="text-4xl font-syne font-bold text-secondary">99%</span>
                  <span className="text-label-sm text-outline uppercase tracking-wider">Swoon Rate</span>
                </div>
              </div>
            </div>

            {/* Image panel with rotate */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl rotate-1 border border-outline-variant/30 group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0iVL1iC6L15BHFnpVxw7B3bU8wANt4lBNqaIIvJHW1dox7aSc_glXzpJqfw8jrgm71k3FkEn2nHXbBHGCWRsJxGo464lS_AT-zZsLErAabEbyliXZMn9E9QG671of_-fzsqrAbBb2W4YYotwhg0Gj-n4sfkHui4JtGGSsJbTZ-6nwavvJkL_S1LLiCnbD0w5kxC2AhxzEVxOaWiQtx8vsyJY43-utABoORgs9eIjb9m2J9nFmO5zPGw"
                alt="Editorial office space with minimalist aesthetic"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ── Services Section: Expertise ──────────────────────── */}
        <section className="bg-surface-container-low py-20 mb-24 border-y border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-label-md text-secondary uppercase tracking-widest mb-3 block font-semibold">
                  Expertise
                </span>
                <h2 className="text-4xl font-syne font-bold text-on-surface">
                  Curated Digital Experiences
                </h2>
              </div>
              <p className="text-body-md text-on-surface-variant max-w-sm">
                Beyond basic templates, we provide artistic direction for the modern host
                who values sophistication and soul.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-surface p-8 rounded-2xl border border-outline-variant/40 hover:border-secondary transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 ${svc.bgIcon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${svc.iconColor}`}
                    >
                      {svc.icon}
                    </div>
                    <h3 className="text-2xl font-syne font-semibold text-on-surface mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed mb-6">
                      {svc.description}
                    </p>
                  </div>
                  <div className={`h-1 w-0 group-hover:w-full ${svc.barColor} transition-all duration-500 rounded-full`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founders & Visionaries ───────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <span className="text-label-md text-secondary uppercase tracking-widest mb-3 block font-semibold">
              Founders &amp; Visionaries
            </span>
            <h2 className="text-4xl font-syne font-bold text-on-surface">
              Meet the Designers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className={`group relative overflow-hidden rounded-2xl bg-surface-bright p-3 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-outline-variant/20 ${member.offset}`}
              >
                <div className={`aspect-[3/4] overflow-hidden rounded-xl mb-4 relative ${member.bgClass}`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="px-3 pb-3">
                  <h4 className="text-xl font-syne font-bold text-primary">{member.name}</h4>
                  <p className="text-label-sm text-outline uppercase tracking-wider mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials: Loved by Hosts ────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-inverse-surface rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"
            />
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-12 text-center">
              Loved by Hosts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Card 1 */}
              <div className="bg-surface p-8 rounded-2xl border-l-4 border-secondary transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
                <div className="text-secondary text-5xl font-syne font-extrabold mb-4 leading-none">
                  “
                </div>
                <p className="text-body-lg text-on-surface-variant italic mb-8 leading-relaxed">
                  &quot;InviteStash didn&apos;t just send invites; they set the mood for my
                  entire gallery opening. The digital curation is unmatched in this
                  industry.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-primary">
                    AO
                  </div>
                  <div>
                    <p className="font-syne font-semibold text-primary">Amara Okafor</p>
                    <p className="text-label-sm text-outline">Gallerist</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface p-8 rounded-2xl border-l-4 border-tertiary transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
                <div className="text-tertiary text-5xl font-syne font-extrabold mb-4 leading-none">
                  “
                </div>
                <p className="text-body-lg text-on-surface-variant italic mb-8 leading-relaxed">
                  &quot;The editorial design feel of these invites is exactly what was
                  missing from the digital world. It feels high-end, premium, and
                  personal.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary">
                    DC
                  </div>
                  <div>
                    <p className="font-syne font-semibold text-primary">David Chen</p>
                    <p className="text-label-sm text-outline">Event Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer Shell ─────────────────────────────────────── */}
      <footer className="w-full py-16 px-6 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="text-3xl font-syne font-extrabold text-primary mb-2">
              InviteStash
            </Link>
            <p className="text-on-surface-variant text-label-md max-w-xs">
              © 2025 InviteStash. Premium Invitations for Modern Moments.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-label-md">
            <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
              Refund Policy
            </Link>
            <Link href="/about" className="text-primary underline">
              About Us
            </Link>
            <Link href="/services" className="text-on-surface-variant hover:text-secondary transition-colors">
              Services
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
