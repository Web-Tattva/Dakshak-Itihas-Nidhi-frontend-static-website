"use client";

import React from "react";

interface EmblemProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function ArchivalEmblem({ className = "", size = 48, showText = false }: EmblemProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* Outer Circular Archival Border with Filigree Marks */}
        <circle
          cx="60"
          cy="60"
          r="56"
          stroke="var(--color-accent-gold)"
          strokeWidth="2"
          strokeDasharray="4 2"
          opacity="0.85"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <circle
          cx="60"
          cy="60"
          r="48"
          stroke="var(--color-border)"
          strokeWidth="0.75"
        />

        {/* Central Seal Background */}
        <circle cx="60" cy="60" r="46" fill="var(--color-surface)" />

        {/* Eight-Point Historical Compass / Sunburst Star */}
        <g stroke="var(--color-accent-gold)" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
          <line x1="60" y1="18" x2="60" y2="102" />
          <line x1="18" y1="60" x2="102" y2="60" />
          <line x1="30" y1="30" x2="90" y2="90" />
          <line x1="30" y1="90" x2="90" y2="30" />
        </g>

        {/* Archival Shield Outline */}
        <path
          d="M60 28C74 28 84 34 84 46C84 66 60 84 60 88C60 84 36 66 36 46C36 34 46 28 60 28Z"
          fill="var(--color-canvas)"
          stroke="var(--color-accent)"
          strokeWidth="2"
        />

        {/* Central Manuscript Scroll & Quill Motif */}
        <path
          d="M50 42C54 40 66 40 70 42C70 56 65 64 60 74C55 64 50 56 50 42Z"
          stroke="var(--color-accent-gold)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        
        {/* Open Book / Inscription lines */}
        <line x1="53" y1="48" x2="67" y2="48" stroke="var(--color-accent)" strokeWidth="1.2" />
        <line x1="55" y1="54" x2="65" y2="54" stroke="var(--color-accent)" strokeWidth="1.2" />
        <line x1="57" y1="60" x2="63" y2="60" stroke="var(--color-accent-gold)" strokeWidth="1.2" />

        {/* Emblem Cardinal Dots */}
        <circle cx="60" cy="18" r="2.5" fill="var(--color-accent-gold)" />
        <circle cx="60" cy="102" r="2.5" fill="var(--color-accent-gold)" />
        <circle cx="18" cy="60" r="2.5" fill="var(--color-accent-gold)" />
        <circle cx="102" cy="60" r="2.5" fill="var(--color-accent-gold)" />
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif tracking-institutional text-sm font-bold text-text-primary leading-tight">
            DAKSHAK ITIHAS NIDHI
          </span>
          <span className="font-mono text-[10px] tracking-widest text-text-secondary uppercase">
            Historical Research Trust
          </span>
        </div>
      )}
    </div>
  );
}
