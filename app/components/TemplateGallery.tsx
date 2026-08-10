"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { templates, categories, type Category } from "@/data/templates";

function TemplateCard({ template, delay }: { template: (typeof templates)[number]; delay?: number }) {
  const router = useRouter();

  return (
    <div
      id={`template-card-${template.id}`}
      role="link"
      tabIndex={0}
      onClick={() => router.push(`/templates/${template.id}`)}
      onKeyDown={(e) => e.key === "Enter" && router.push(`/templates/${template.id}`)}
      className="bg-surface h-auto rounded-xl border border-outline-variant/30 ambient-shadow overflow-hidden group cursor-pointer scroll-reveal"
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {/* Image */}
      <div className="bg-surface-container-low relative overflow-hidden">
        <Image
          src={template.imageSrc}
          alt={template.imageAlt}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105 block"
        />
        {/* Category badge — top right */}
        <div className="absolute top-3 right-3 bg-surface/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-on-surface border border-outline-variant/50">
          {template.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-headline-md text-on-surface font-syne font-bold mb-1">{template.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-body-md text-on-surface-variant">{template.style}</span>
          <span className="text-label-md text-primary-container bg-primary-container/10 px-3 py-1 rounded">
            {template.price}
          </span>
        </div>
      </div>
    </div>
  );
}


export default function TemplateGallery() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? templates : templates.filter((t) => t.category === active);

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div className="scroll-reveal">
          <h2 className="text-headline-lg text-on-surface font-syne">Find Your Aesthetic</h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            Browse our curated stash of premium templates.
          </p>
        </div>
        {/* <Link
          href="/#gallery"
          className="text-primary-container text-label-md flex items-center gap-1.5 hover:underline hover:gap-2.5 transition-all"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link> */}
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`filter-${cat.toLowerCase().replace(/ /g, "-")}`}
            onClick={() => setActive(cat)}
            className={`filter-pill ${
              active === cat ? "filter-pill-active" : "filter-pill-inactive"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid — 1 col on mobile, 2 on md, 3 on lg */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((t, i) => (
          <TemplateCard key={t.id} template={t} delay={i === 0 ? undefined : i * 0.1} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-on-surface-variant text-body-md py-16">
          No templates found for this category.
        </p>
      )}
    </section>
  );
}
