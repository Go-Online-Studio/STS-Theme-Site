"use client";

import { useState } from "react";
import Image from "next/image";
import { templates, categories, type Category } from "@/data/templates";

function TemplateCard({ template }: { template: (typeof templates)[number] }) {
  return (
    <div
      id={`template-card-${template.id}`}
      className="bg-surface rounded-2xl border border-outline-variant/30 ambient-shadow overflow-hidden group cursor-pointer card-hover scroll-reveal"
    >
      {/* Image */}
      <div className="h-52 bg-surface-container-low relative overflow-hidden">
        <Image
          src={template.imageSrc}
          alt={template.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-surface/85 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm text-on-surface border border-outline-variant/40">
          {template.category}
        </div>
        {/* Live badge */}
        {template.liveUrl && (
          <div className="absolute top-3 left-3 bg-primary-container/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-label-sm text-on-primary flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-on-primary animate-pulse inline-block" />
            Live
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {template.liveUrl ? (
            <a
              href={template.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-btn px-5 py-2.5 rounded-full text-label-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Open Invite ↗
            </a>
          ) : (
            <button className="gradient-btn px-5 py-2.5 rounded-full text-label-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Preview Template
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-headline-md text-on-surface">{template.name}</h3>
        <div className="flex justify-between items-center mt-3">
          <span className="text-body-md text-on-surface-variant">{template.style}</span>
          <span className="text-label-md text-primary-container bg-primary-container/10 px-3 py-1 rounded-lg">
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
        <button className="text-primary-container text-label-md flex items-center gap-1.5 hover:underline hover:gap-2.5 transition-all">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Filter pills — auto-generated from categories in data file */}
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((t) => (
          <TemplateCard key={t.id} template={t} />
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
