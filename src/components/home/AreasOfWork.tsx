"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "../ui/SectionHeader";
import {
  FileSearch,
  BookMarked,
  Presentation,
  Archive,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const AREAS = [
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: "Research & Documentation",
    description:
      "Supporting original scholarly study, multi-archive documentation, and nuanced historical interpretation across regional and maritime histories.",
    href: "/what-we-do#research",
    metric: "240+ Archival Records Processed",
  },
  {
    icon: <BookMarked className="w-6 h-6" />,
    title: "Historical Publications",
    description:
      "Publishing rigorously peer-reviewed monographs, translated source texts, and edited volumes to make specialized scholarship widely accessible.",
    href: "/what-we-do#publications",
    metric: "45+ Published Monographs",
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    title: "Academic Programmes & Colloquia",
    description:
      "Bringing together leading historians, international scholars, and emerging researchers for interdisciplinary symposia and academic exchange.",
    href: "/what-we-do#conferences",
    metric: "80+ Symposia & Conferences",
  },
  {
    icon: <Archive className="w-6 h-6" />,
    title: "Archives / Preservation",
    description:
      "Preserving fragile historical records, cartographic charts, manuscripts, rare photographs, and oral histories for future generations.",
    href: "/what-we-do#preservation",
    metric: "12,000+ Scanned Pages",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education & Outreach",
    description:
      "Cultivating historical awareness and critical historiography among university students, educators, and the broader public.",
    href: "/what-we-do#outreach",
    metric: "1,500+ Students & Fellows",
  },
];

export function AreasOfWork() {
  return (
    <section className="py-20 bg-canvas border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          category="Scholarly Mandate"
          title="Our Areas of Work"
          subtitle="Dakshak Itihas Nidhi advances historical understanding through five integrated pillars of institutional research, conservation, and scholarly dissemination."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((area, index) => (
            <div
              key={area.title}
              className={`group p-6 rounded-lg bg-surface border border-border hover:border-accent-gold transition-all duration-300 shadow-sm hover:shadow-parchment flex flex-col justify-between ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-canvas border border-border flex items-center justify-center text-accent group-hover:text-accent-gold group-hover:border-accent-gold/40 transition-colors">
                    {area.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="font-mono text-[11px] text-accent font-semibold">
                  {area.metric}
                </span>
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-1 text-xs font-serif font-bold text-accent group-hover:text-accent-gold transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
