"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    eventType: "Wedding Gala",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("sent");
      setFormData({
        fullName: "",
        email: "",
        eventType: "Wedding Gala",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />

      <main className="pt-32 pb-20 overflow-x-hidden">
        {/* ── Hero / Editorial Title ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <span className="text-label-md text-secondary uppercase tracking-widest block mb-2 font-semibold">
                Drop us a line
              </span>
              <h1 className="text-5xl md:text-6xl font-syne font-bold text-primary leading-tight">
                Let&apos;s craft your <span className="text-secondary italic font-serif">perfect</span> invite.
              </h1>
            </div>
            <div className="hidden md:block pb-3 border-b-4 border-secondary-container">
              <p className="text-body-lg text-on-surface-variant max-w-xs text-right leading-snug">
                Premium invitations for the moments that define who you are.
              </p>
            </div>
          </div>
        </section>

        {/* ── Funky Contact Form Section ────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-2xl overflow-hidden border border-outline-variant/40 shadow-xl">
            {/* Left: Form */}
            <div className="lg:col-span-7 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-label-md text-on-surface-variant mb-2 block font-medium group-focus-within:text-primary transition-colors">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-surface-bright border border-outline-variant/40 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-on-surface"
                    />
                  </div>
                  <div className="group">
                    <label className="text-label-md text-on-surface-variant mb-2 block font-medium group-focus-within:text-primary transition-colors">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-surface-bright border border-outline-variant/40 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-on-surface"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-label-md text-on-surface-variant mb-2 block font-medium group-focus-within:text-primary transition-colors">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-surface-bright border border-outline-variant/40 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-on-surface cursor-pointer"
                  >
                    <option value="Wedding Gala">Wedding Gala</option>
                    <option value="Corporate Launch">Corporate Launch</option>
                    <option value="Private Soiree">Private Soiree</option>
                    <option value="Modern Art Opening">Modern Art Opening</option>
                    <option value="Birthday Party">Birthday Party</option>
                  </select>
                </div>

                <div className="group">
                  <label className="text-label-md text-on-surface-variant mb-2 block font-medium group-focus-within:text-primary transition-colors">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your vision..."
                    className="w-full bg-surface-bright border border-outline-variant/40 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-on-surface resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`w-full md:w-auto font-syne font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${status === "sent"
                      ? "bg-tertiary-container text-white"
                      : "bg-primary-container text-on-primary hover:shadow-lg active:scale-[0.98]"
                    }`}
                >
                  {status === "submitting" && (
                    <>
                      <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Sent!
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Premium Image */}
            <div
              className="lg:col-span-5 relative min-h-[420px] bg-cover bg-center flex items-end p-8"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwS7CdyasLPCymMCckGvObq160O4FPHNSmXJCcwts6DQqBjBqzyPRE7cmvqxq_HONC1M8LV_H-qndOgayplgtWwmCe02FWSkqJsOIw8vzPzZSUuC9zXPFOkqDojfpZ_nhYGiRKkxgdTInxKv426NzbvXDAxHab56X-UWGTzY5Y-9jQ2NmUH4pghmAntoS8LdmwUZrvabnkrSfMa4uI5CJO0LIY56Qares9L9hpOnG7tjYMi-CJHhRT6w')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl text-white shadow-2xl">
                <p className="font-syne font-semibold text-xl leading-snug mb-2">
                  &quot;The invitation is the soul of the event.&quot;
                </p>
                <span className="text-label-sm opacity-80 uppercase tracking-widest font-mono">
                  — Creative Director
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Company Details Section ────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-secondary-container transition-all group">
              <div className="bg-secondary-container w-12 h-12 rounded-full flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="font-syne font-semibold text-2xl text-on-surface mb-2">Call Us</h3>
              <p className="text-body-md text-on-surface-variant font-medium">+1 (555) 000-1234</p>
              <p className="text-label-sm text-secondary mt-2 font-mono">Mon - Fri, 9am - 6pm EST</p>
            </div>

            {/* Address */}
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-secondary-container transition-all group">
              <div className="bg-secondary-container w-12 h-12 rounded-full flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-syne font-semibold text-2xl text-on-surface mb-2">Studio</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                42 Design District Ave, Suite 100
                <br />
                New York, NY 10013
              </p>
            </div>

            {/* Email */}
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-secondary-container transition-all group">
              <div className="bg-secondary-container w-12 h-12 rounded-full flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="font-syne font-semibold text-2xl text-on-surface mb-2">Email</h3>
              <a
                href="mailto:hello@InviteBox.com"
                className="text-body-md text-primary font-semibold hover:underline decoration-secondary"
              >
                hello@InviteBox.com
              </a>
              <p className="text-label-sm text-secondary mt-2 font-mono">24h Response Guarantee</p>
            </div>
          </div>
        </section>

        {/* ── Map Section ───────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <div className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="InviteBox Studio Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1655123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-outline-variant/30 max-w-xs pointer-events-none">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <span className="text-label-sm text-primary font-mono font-medium">Live Now</span>
              </div>
              <h4 className="font-syne font-semibold text-xl text-on-surface">NYC Headquarters</h4>
              <p className="text-body-sm text-on-surface-variant mt-1 leading-snug">
                Stop by for a coffee and a creative session with our design leads.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ Micro-Section (Asymmetric Bento) ───────────── */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-primary text-on-primary p-8 rounded-2xl flex flex-col justify-between h-full min-h-[220px]">
              <h2 className="font-syne font-bold text-3xl md:text-4xl leading-tight">
                Got quick questions?
              </h2>
              <Link
                href="/services"
                className="self-start px-6 py-2.5 rounded-full text-white font-mono text-label-md border-2 border-[#00D4FF] hover:bg-[#00D4FF] hover:text-white transition-all mt-6"
              >
                Read FAQ
              </Link>
            </div>

            <div className="bg-tertiary-fixed p-8 rounded-2xl">
              <svg className="text-on-tertiary-fixed mb-4" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <h4 className="font-syne font-semibold text-xl text-on-tertiary-fixed mb-2">Fast Track</h4>
              <p className="text-body-sm text-on-tertiary-fixed/80 leading-relaxed">
                Need a rush order? Let us know in your message.
              </p>
            </div>

            <div className="bg-surface-container-high p-8 rounded-2xl">
              <svg className="text-primary mb-4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              </svg>
              <h4 className="font-syne font-semibold text-xl text-primary mb-2">Custom Art</h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                Hand-painted details and unique textures.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
