import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | InviteBox",
  description:
    "We started with a simple belief: the first impression of your event shouldn't just be an email—it should be a masterpiece. InviteBox was born from the intersection of editorial elegance and cutting-edge digital curation.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
