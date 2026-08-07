"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 900);
  };

  return (
    <section
      id="newsletter"
      className="max-w-4xl mx-auto px-6 py-20 scroll-reveal"
    >
      <div className="relative bg-surface-container-high rounded-3xl p-10 md:p-14 border border-outline-variant/30 text-center overflow-hidden">
        {/* Gradient decoration */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(0,210,253,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(161,0,144,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant/30 rounded-full px-4 py-1.5 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary-container">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7z"/>
            </svg>
            <span className="text-label-sm text-primary">Early Access Perks</span>
          </div>

          <h2 className="text-headline-lg text-on-surface font-syne mb-4">
            Join the Vibe
          </h2>
          <p className="text-body-md text-on-surface-variant mb-8 max-w-md mx-auto">
            Get exclusive templates, design tips, and event inspiration — delivered
            straight to your inbox. No spam, ever.
          </p>

          {!submitted ? (
            <form
              id="newsletter-form"
              onSubmit={handleSubmit}
              className="neon-focus flex flex-col sm:flex-row gap-3 max-w-md mx-auto rounded-xl border border-outline-variant/40 bg-surface p-1.5 transition-all"
            >
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-on-surface placeholder-outline text-body-md px-3 py-2 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="gradient-btn px-6 py-2.5 rounded-lg text-label-md shrink-0 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                ) : (
                  <>
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-3 animate-fade-in-up">
              <div className="w-14 h-14 rounded-full bg-primary-container/15 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary-container">
                  <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <p className="text-headline-md text-on-surface font-syne">You&apos;re in!</p>
              <p className="text-body-md text-on-surface-variant">
                Welcome aboard. Expect your first vibe drop soon 🎉
              </p>
            </div>
          )}

          <p className="text-label-sm text-outline mt-5">
            ✦ 5,000+ creators already subscribed · Unsubscribe any time
          </p>
        </div>
      </div>
    </section>
  );
}
