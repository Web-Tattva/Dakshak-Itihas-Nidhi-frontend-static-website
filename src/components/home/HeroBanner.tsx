"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { Compass, ArrowRight, ShieldCheck, Library, Scroll, Users } from "lucide-react";

export function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.7,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.9,
          },
          "-=0.4"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          cardsRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-surface/60 via-canvas to-canvas border-b border-border py-16 sm:py-24"
    >
      {/* Background Archival Compass / Watermark Silhouette */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.035] dark:opacity-[0.06] select-none">
        <svg width="700" height="700" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 4 L50 96 M4 50 L96 50 M18 18 L82 82 M18 82 L82 18" stroke="currentColor" strokeWidth="1" />
          <polygon points="50,12 55,45 88,50 55,55 50,88 45,55 12,50 45,45" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Institutional Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border/90 text-xs font-mono text-text-secondary mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="tracking-wider uppercase text-accent font-semibold">
              Archival & Historical Trust
            </span>
            <span className="text-border">•</span>
            <span className="text-text-secondary">Est. 2014</span>
          </div>

          {/* Majestic Hero Headline */}
          <h1
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.12]"
          >
            Preserving History. <br />
            <span className="text-accent italic font-normal">Encouraging Research.</span> <br />
            Building Historical Consciousness.
          </h1>

          {/* Filigree ornamental divider */}
          <div className="filigree-divider w-36 mx-auto my-6">
            <span className="font-serif text-accent-gold text-sm tracking-widest uppercase">
              ✦ &nbsp; ✦ &nbsp; ✦
            </span>
          </div>

          {/* Subtitle / Core Framework Statement */}
          <p
            ref={descRef}
            className="font-sans text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Positioning DIN as a credible, authoritative repository of Indian historical scholarship, maritime heritage, and open academic dialogue.
          </p>

          {/* Primary Action Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-accent text-white font-serif text-sm tracking-institutional font-semibold shadow-parchment-lg hover:bg-accent/90 hover:shadow-gold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/history"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-surface border border-border text-text-primary font-serif text-sm tracking-institutional font-semibold hover:bg-surface/80 hover:border-accent-gold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4 text-accent-gold" />
              <span>OUR HISTORY & VISION</span>
            </Link>
          </div>

          {/* 4 Pillars Highlight Strip */}
          <div
            ref={cardsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-left"
          >
            <div className="p-4 rounded-lg bg-surface/70 border border-border hover:border-accent-gold/60 transition-colors shadow-sm">
              <div className="w-8 h-8 rounded bg-canvas flex items-center justify-center text-accent mb-2.5">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-text-primary">Research</h3>
              <p className="text-xs text-text-secondary mt-1">Scholarly documentation & historical interpretation</p>
            </div>

            <div className="p-4 rounded-lg bg-surface/70 border border-border hover:border-accent-gold/60 transition-colors shadow-sm">
              <div className="w-8 h-8 rounded bg-canvas flex items-center justify-center text-accent mb-2.5">
                <Scroll className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-text-primary">Preservation</h3>
              <p className="text-xs text-text-secondary mt-1">Restoring manuscripts, records & rare artifacts</p>
            </div>

            <div className="p-4 rounded-lg bg-surface/70 border border-border hover:border-accent-gold/60 transition-colors shadow-sm">
              <div className="w-8 h-8 rounded bg-canvas flex items-center justify-center text-accent mb-2.5">
                <Library className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-text-primary">Documentation</h3>
              <p className="text-xs text-text-secondary mt-1">Primary sources, fort surveys & oral archives</p>
            </div>

            <div className="p-4 rounded-lg bg-surface/70 border border-border hover:border-accent-gold/60 transition-colors shadow-sm">
              <div className="w-8 h-8 rounded bg-canvas flex items-center justify-center text-accent mb-2.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-sm font-bold text-text-primary">Stewardship</h3>
              <p className="text-xs text-text-secondary mt-1">Institutional ethics & academic outreach</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
