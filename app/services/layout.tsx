import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — InviteBox",
  description:
    "Explore InviteBox's full suite of services: custom e-invite design, RSVP management, guest analytics, and instant delivery. Everything you need to host effortlessly.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
