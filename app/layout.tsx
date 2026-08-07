import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InviteStash — Premium Digital Invitations",
  description:
    "Create stunning, interactive digital invitations for weddings, birthdays, baby showers, and more. Ditch boring PDFs — send an experience.",
  keywords: ["digital invitations", "RSVP", "wedding invite", "event invite", "interactive invite"],
  openGraph: {
    title: "InviteStash — Premium Digital Invitations",
    description: "Create stunning interactive invitations in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
