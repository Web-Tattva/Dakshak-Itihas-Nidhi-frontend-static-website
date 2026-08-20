"use client";

import React from "react";

interface SectionHeaderProps {
  category?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  category,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignmentClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 sm:mb-16 ${className}`}>
      {category && (
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
          <span className="font-mono text-xs uppercase tracking-archival text-accent font-semibold">
            {category}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
        </div>
      )}

      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>

      <div className="filigree-divider w-24 my-3 opacity-70">
        <span className="text-accent-gold text-xs">✦</span>
      </div>

      {subtitle && (
        <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
