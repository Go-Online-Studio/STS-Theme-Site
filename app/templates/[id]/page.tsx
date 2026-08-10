import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { templates, getTemplateById } from "@/data/templates";
import TemplateDetailClient from "./TemplateDetailClient";

// Required for static export — pre-generate all template pages
export function generateStaticParams() {
  return templates.map((t) => ({ id: String(t.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const template = getTemplateById(Number(id));
  if (!template) return { title: "Template Not Found — InviteStash" };
  return {
    title: `${template.name} — InviteStash`,
    description:
      template.description ??
      `${template.name} — ${template.style} digital invitation template.`,
    openGraph: {
      title: `${template.name} — InviteStash`,
      description: template.description ?? `${template.name} — ${template.style} digital invitation.`,
      images: template.imageSrc ? [{ url: template.imageSrc }] : [],
    },
  };
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const template = getTemplateById(Number(id));
  if (!template) notFound();

  // Related: same category, exclude current, up to 3
  const related = templates
    .filter((t) => t.category === template.category && t.id !== template.id)
    .slice(0, 3);

  return <TemplateDetailClient template={template} related={related} />;
}
