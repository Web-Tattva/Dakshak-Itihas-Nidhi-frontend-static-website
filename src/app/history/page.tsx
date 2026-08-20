"use client";

import React, { useEffect, useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  Landmark,
  Compass,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Scroll,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

interface Milestone {
  year: string;
  stage: string;
  title: string;
  tagline: string;
  description: string;
  keyOutputs: string[];
  archivalRef: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2014",
    stage: "Establishment & Charter",
    title: "Foundation of Dakshak Itihas Nidhi",
    tagline: "Uniting Maritime Historians, Archivists & Academic Trustees",
    description:
      "Dakshak Itihas Nidhi was established in Mumbai by a distinguished collective of historians, philologists, and researchers. The founding charter committed the Trust to retrieving neglected primary sources, standardizing vernacular paleography, and publishing rigorous historiography free from external bias.",
    keyOutputs: [
      "Foundational Trust Charter & Archival Ethics Board constituted",
      "Endowment of the first 1,200 rare lithographs and manuscript folios",
      "Establishment of the Chemical Conservation & Microfilming Unit",
    ],
    archivalRef: "DIN-FND-2014-01",
  },
  {
    year: "2017",
    stage: "First Major Publication",
    title: "Inaugural Monograph & Modi Script Survey",
    tagline: "Pioneering Systematic Inscriptional Collation",
    description:
      "DIN published its landmark first monograph on Western Seaboard Maritime Polities (1500–1850) and inaugurated a comprehensive field survey across 24 hill and coastal fortresses in Maharashtra, digitizing Modi script revenue ledgers and stone inscriptions.",
    keyOutputs: [
      "Publication of Flagship Monograph Vol. I (ISBN 978-81-948201-4-2)",
      "Discovery and transcription of the 1682 Maratha Admiralty Ledger",
      "First Modi Paleography Training Camp for 45 university researchers",
    ],
    archivalRef: "DIN-PUB-2017-04",
  },
  {
    year: "2020",
    stage: "Conferences & Symposia",
    title: "National Conference Series & Research Syndicates",
    tagline: "Convening National Historical Scholarship",
    description:
      "Instituted the biennial National Maritime History Conference, establishing permanent academic partnerships with university departments across India, the United Kingdom, and the Netherlands to cross-reference colonial gazetteers with vernacular archives.",
    keyOutputs: [
      "1st National Maritime History Conference convened in Mumbai",
      "Formal collaborative agreement with the Maharashtra State Archives",
      "Institution of the DIN Annual Memorial Lecture Series",
    ],
    archivalRef: "DIN-CNF-2020-09",
  },
  {
    year: "2023",
    stage: "Digital Library & Open Access",
    title: "Launch of DIN Open-Access Digital Library",
    tagline: "Democratizing Archival Access Worldwide",
    description:
      "Launched the DIN Digital Library portal, offering open-access, searchable, high-resolution PDF editions of all institutional publications, research papers, and conference proceedings, downloaded over 150,000 times by global scholars.",
    keyOutputs: [
      "Open-access digital portal featuring 40+ books & 300+ research papers",
      "Launch of the DIN Doctoral Fellowship Program (15 annual grants)",
      "High-resolution 1200 DPI archival rasterization pipeline",
    ],
    archivalRef: "DIN-DIG-2023-12",
  },
  {
    year: "2026",
    stage: "Global Consortium & Future Expansion",
    title: "International Consortium for Indian Ocean Historiography",
    tagline: "Connecting Vernacular Archives to Global Digital Humanities",
    description:
      "Established multi-lateral archival research fellowships spanning South and Southeast Asia, deploying AI-assisted paleographic optical character recognition for Modi script while preserving hands-on paper conservation traditions.",
    keyOutputs: [
      "International research syndicate across 8 maritime research institutions",
      "Expansion of oral history archives documenting indigenous shipwrights",
      "Modernized digital scholarly framework and multi-theme archival portal",
    ],
    archivalRef: "DIN-INT-2026-18",
  },
];

export default function HistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation for header sections
      gsap.from(".history-section", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // 2. Vertical Line Progress Animation via ScrollTrigger
      if (timelineRef.current && lineProgressRef.current) {
        gsap.to(lineProgressRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 85%",
            scrub: true,
          },
        });
      }

      // 3. Staggered reveal of timeline milestone cards
      const milestoneCards = gsap.utils.toArray<HTMLElement>(".milestone-node");
      milestoneCards.forEach((node) => {
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.75,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-16 bg-canvas transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Page Title: Our History */}
        <SectionHeader
          category="Institutional Heritage"
          title="Our History"
          subtitle="Explore the origins, founding vision, and archival journey of Dakshak Itihas Nidhi as an independent scholarly research trust."
        />

        {/* The Beginning */}
        <section className="history-section mb-16 p-8 sm:p-12 rounded-xl bg-surface border border-border shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-gold" />
            <span>Origins & Genesis</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary mb-5">
            The Beginning
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Dakshak Itihas Nidhi (DIN) was founded out of an urgent recognition that critical primary historical records—particularly relating to regional naval warfare, coastal fortification engineering, trade guild cartularies, and Modi script revenue ledgers—remained scattered, unpreserved, and under-represented in mainstream historiography.
            </p>
            <p>
              In the early decades of the 21st century, independent researchers found that thousands of private palm-leaf manuscripts and 17th-century Marathi Modi scrolls in private family depositories were rapidly deteriorating due to lack of climate control and professional conservation.
            </p>
            <p>
              A collective of maritime historians, numismatists, epigraphists, and legal trustees convened in Mumbai to establish an autonomous, non-partisan institution dedicated solely to the scrupulous collection, chemical deacidification, transcription, translation, and open publication of these irreplaceable historical treasures.
            </p>
          </div>
        </section>

        {/* The Vision */}
        <section className="history-section mb-20 p-8 sm:p-12 rounded-xl bg-surface border border-border shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-gold" />
            <span>Founding Mandate</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary mb-5">
            The Vision
          </h2>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans mb-6">
            The founders intended Dakshak Itihas Nidhi not merely as a passive archival repository, but as an active intellectual catalyst for rigorous, open, and authoritative historiography:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-lg bg-canvas border border-border flex items-start gap-3.5">
              <Scroll className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-bold text-text-primary mb-1">
                  Primary Source Primacy
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Rigorous textual criticism and direct transcription from original manuscripts, avoiding secondary distortions or ideological conjectures.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-canvas border border-border flex items-start gap-3.5">
              <Compass className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-bold text-text-primary mb-1">
                  Maritime & Deccan Historiography
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Illuminating the neglected naval prowess, coastal port economies, and mountain fortress architectures of the Western Littoral and Deccan plateau.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-canvas border border-border flex items-start gap-3.5">
              <BookOpen className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-bold text-text-primary mb-1">
                  Open Scholarly Access
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Ensuring all research publications, scanned folios, and conference proceedings are accessible freely to students and researchers without paywalls.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-canvas border border-border flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-bold text-text-primary mb-1">
                  Institutional Continuity & Ethics
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Maintaining non-profit trust governance, peer-reviewed standards, and long-term archival conservation protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey (Interactive GSAP ScrollTrigger Timeline) */}
        <section ref={timelineRef} className="mb-24 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              <span>Decade of Milestones</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary">
              Our Journey (2014 – Present)
            </h2>
            <p className="text-sm text-text-secondary max-w-xl mx-auto mt-2">
              Follow the chronological evolution of Dakshak Itihas Nidhi from its founding charter to its global open-access digital research consortium.
            </p>
          </div>

          {/* Vertical Progress Line Track */}
          <div className="relative pl-6 sm:pl-36">
            
            {/* Background Line (Muted) */}
            <div className="absolute left-[30px] sm:left-[143px] top-4 bottom-4 w-[2px] bg-border/70" />

            {/* GSAP Animated Scrubbed Line (Accent Gold) */}
            <div
              ref={lineProgressRef}
              className="absolute left-[30px] sm:left-[143px] top-4 bottom-4 w-[2px] bg-accent-gold origin-top"
              style={{ transform: "scaleY(0)" }}
            />

            {/* Milestones List */}
            <div className="space-y-14">
              {MILESTONES.map((item, index) => (
                <div
                  key={item.year}
                  className="milestone-node relative group"
                >
                  {/* Desktop Year Badge on Far Left */}
                  <div className="hidden sm:block absolute -left-36 top-1 w-24 text-right">
                    <span className="font-serif text-2xl font-bold text-accent group-hover:text-accent-gold transition-colors block">
                      {item.year}
                    </span>
                    <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider block">
                      {item.archivalRef}
                    </span>
                  </div>

                  {/* Glowing Milestone Anchor Dot */}
                  <div className="absolute -left-[19px] sm:-left-[15px] top-2 w-7 h-7 rounded-full bg-canvas border-2 border-accent-gold flex items-center justify-center group-hover:scale-125 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-accent-gold group-hover:bg-accent transition-colors" />
                  </div>

                  {/* Mobile Year Badge */}
                  <div className="sm:hidden flex items-center gap-2 font-serif text-lg font-bold text-accent mb-1 pl-4">
                    <span>{item.year}</span>
                    <span className="text-border">•</span>
                    <span className="text-xs font-mono text-text-secondary">{item.stage}</span>
                  </div>

                  {/* Milestone Content Card */}
                  <div className="ml-2 sm:ml-6 p-6 sm:p-8 rounded-xl bg-surface border border-border hover:border-accent-gold transition-all duration-300 shadow-sm hover:shadow-parchment-lg">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-canvas border border-border text-accent font-bold">
                        {item.stage}
                      </span>
                      <span className="text-xs font-mono text-text-secondary hidden sm:inline">
                        REF: {item.archivalRef}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-primary mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-sans font-medium text-accent mb-4">
                      {item.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5 font-sans">
                      {item.description}
                    </p>

                    {/* Key Outputs List */}
                    <div className="pt-4 border-t border-border/80">
                      <div className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold mb-2">
                        Institutional Milestones Achieved:
                      </div>
                      <ul className="space-y-1.5 text-xs text-text-secondary">
                        {item.keyOutputs.map((out, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Purpose Today */}
        <section className="history-section p-8 sm:p-12 rounded-2xl bg-surface border border-border shadow-parchment text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <Landmark className="w-4 h-4 text-accent-gold" />
            <span>Contemporary Mission</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Purpose Today
          </h2>

          <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8 font-sans">
            As historical scholarship enters an era of digital paleography, computational linguistics, and global connectivity, Dakshak Itihas Nidhi continues to unite archival guardianship with modern open research frameworks. We remain steadfast in ensuring that primary source materials are not only safeguarded from physical decay, but actively invigorate contemporary historical awareness across India and the maritime world.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-accent text-white font-serif text-xs font-bold tracking-wider hover:bg-accent/90 shadow-md transition-all"
            >
              <span>EXPLORE OUR AREAS OF WORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-canvas border border-border text-text-primary font-serif text-xs font-bold tracking-wider hover:border-accent-gold shadow-sm transition-all"
            >
              <Compass className="w-4 h-4 text-accent-gold" />
              <span>CONTACT OUR ARCHIVISTS</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
