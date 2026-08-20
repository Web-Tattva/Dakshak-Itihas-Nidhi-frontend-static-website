import React from "react";
import { HeroBanner } from "@/components/home/HeroBanner";
import { AreasOfWork } from "@/components/home/AreasOfWork";
import { DinAtAGlance } from "@/components/home/DinAtAGlance";
import { ArchivalSpotlight } from "@/components/home/ArchivalSpotlight";
import Link from "next/link";
import { Compass, Scroll, Award, ArrowRight, ShieldCheck, Landmark } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section with GSAP timeline entrance */}
      <HeroBanner />

      {/* About DIN Institutional Overview & Founding Mandate */}
      <section className="py-16 bg-surface/30 border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="p-8 sm:p-12 rounded-xl bg-canvas border border-border shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-accent-gold" />
                  <span>Institutional Vision & Philosophy</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-snug">
                  A Repository of Rigorous Knowledge, Archival Integrity & Scholarly Discourse
                </h2>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  Dakshak Itihas Nidhi (DIN) was founded as a dedicated non-profit archival and historical research trust. Our mission is to bridge critical gaps in Indian historiography—with special emphasis on maritime trade, epigraphy, fortifications, and indigenous documentation—ensuring that primary sources are preserved and made freely accessible to scholars, students, and posterity.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5 text-accent-gold" /> Primary Source Preservation
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accent-gold" /> Peer-Reviewed Scholarship
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-accent-gold" /> Open Archival Access
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-lg bg-surface border border-border space-y-3">
                <h3 className="font-serif text-base font-bold text-accent">
                  Institutional Framework
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  "Position DIN as a credible historical and research institution: scholarly, archival and authoritative, while remaining contemporary and easy to navigate."
                </p>
                <div className="pt-2 border-t border-border/80">
                  <Link
                    href="/history"
                    className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-accent hover:text-accent-gold transition-colors"
                  >
                    <span>Read Our Complete History</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Areas of Work Cards */}
      <AreasOfWork />

      {/* Institutional Numbers & Activity (Animated GSAP Counter) */}
      <DinAtAGlance />

      {/* Historical Archival Spotlight */}
      <ArchivalSpotlight />
    </div>
  );
}
