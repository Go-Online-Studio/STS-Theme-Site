import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Static Export for cPanel / shared hosting ──────────────────────────────
  // Generates an 'out/' folder with plain HTML/CSS/JS files.
  // Upload the entire 'out/' folder contents to your public_html directory.
  output: "export",

  // ── Images ─────────────────────────────────────────────────────────────────
  // Static export has no Node server, so Next.js image optimization is disabled.
  // Images are served as-is from the 'public/' folder.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
