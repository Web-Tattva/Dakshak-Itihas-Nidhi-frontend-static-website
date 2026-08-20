"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "../ui/SectionHeader";
import { Sparkles, Eye, ArrowRight, FileText } from "lucide-react";

export function ArchivalSpotlight() {
  return (
    <section className="py-20 bg-canvas transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          category="Archival Treasure"
          title="From Our Archives • Historical Spotlight"
          subtitle="Discover rare manuscript folios, cartographic charts, and institutional ephemera preserved in the DIN Special Collections."
        />

        <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-border shadow-parchment-lg relative overflow-hidden">
          {/* Subtle Decorative Archival Background Element */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Archival Manuscript Visual Simulation */}
            <div className="lg:col-span-5 relative group">
              <div className="p-6 rounded-lg bg-canvas border-2 border-border/80 shadow-md relative overflow-hidden select-none font-mono">
                {/* Vintage Archival Header */}
                <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-4 text-[10px] text-text-secondary">
                  <span>REF: DIN-MS-1682-A</span>
                  <span className="text-accent font-bold">FOLIO 14B</span>
                </div>

                <div className="space-y-2.5 opacity-90">
                  <div className="font-serif text-base font-bold text-accent italic">
                    "Konkan Naval Muster Roll & Fort Provisioning Ledger"
                  </div>
                  <div className="text-xs text-text-secondary font-sans leading-relaxed border-l-2 border-accent-gold pl-3 py-1 bg-surface/40">
                    Dated Shake 1604 (1682 CE) — Modi script on aged hemp paper with royal seal impression of the Maratha Admiralty.
                  </div>

                  {/* Simulated Manuscript Lines */}
                  <div className="space-y-1 pt-2 opacity-60">
                    <div className="h-2 bg-text-secondary/20 rounded w-full" />
                    <div className="h-2 bg-text-secondary/20 rounded w-11/12" />
                    <div className="h-2 bg-text-secondary/20 rounded w-4/5" />
                    <div className="h-2 bg-text-secondary/20 rounded w-full" />
                  </div>
                </div>

                {/* Archival Wax Seal Stamp Simulation */}
                <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[10px]">
                  <span className="text-accent-gold font-bold uppercase tracking-widest">
                    RESTORED & DIGITIZED
                  </span>
                  <span className="text-text-secondary">RESOLUTION: 1200 DPI</span>
                </div>
              </div>
            </div>

            {/* Right: Curatorial Notes & Significance */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-border text-xs font-mono text-accent font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                <span>Curatorial Spotlight of the Quarter</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                The 1682 Maratha Admiralty Ledger: Indigenous Naval Logistics
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed">
                This rare document provides unmatched historical granularity into the victualing, crew compensation, timber seasoning methods, and coastal patrol routes utilized by Admiral Kanhoji Angre&apos;s predecessors along the Konkan littoral.
              </p>

              <div className="grid grid-cols-2 gap-4 py-2 text-xs font-mono">
                <div className="p-3 rounded bg-canvas border border-border">
                  <div className="text-text-secondary uppercase">Source Language</div>
                  <div className="font-serif font-bold text-text-primary mt-0.5">Old Marathi (Modi Script)</div>
                </div>
                <div className="p-3 rounded bg-canvas border border-border">
                  <div className="text-text-secondary uppercase">Conservation State</div>
                  <div className="font-serif font-bold text-accent mt-0.5">Stabilized (Deacidified)</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/what-we-do#preservation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-white font-serif text-xs font-bold tracking-wider hover:bg-accent/90 transition-all shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW PRESERVATION DETAILS</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-serif font-bold text-text-primary hover:text-accent transition-colors"
                >
                  <span>Request Archival Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
