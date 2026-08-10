import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | InviteStash",
  description:
    "Drop us a line and let's craft your perfect invite. Get in touch with our design studio in New York for custom digital invitations, rush orders, and inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
