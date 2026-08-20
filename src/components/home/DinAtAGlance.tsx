"use client";

import React, { useEffect, useRef } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Landmark, BookOpen, Users, Globe } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  numericTarget: number;
  suffix: string;
  label: string;
  description: string;
}

const STATS: StatItem[] = [
  {
    icon: <Landmark className="w-5 h-5" />,
    numericTarget: 12,
    suffix: "+",
    label: "Years of Archival Leadership",
    description: "Continuous historical research & manuscript preservation since 2014",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    numericTarget: 45,
    suffix: "+",
    label: "Scholarly Publications",
    description: "Monographs, translated source papers & conference volumes",
  },
  {
    icon: <Users className="w-5 h-5" />,
    numericTarget: 350,
    suffix: "+",
    label: "Historians & Fellows",
    description: "Active network of university scholars and researchers supported",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    numericTarget: 80,
    suffix: "+",
    label: "Conferences & Symposia",
    description: "National & international historical dialogues held",
  },
];

export function DinAtAGlance() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create ScrollTrigger counter animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          STATS.forEach((stat, index) => {
            const el = counterRefs.current[index];
            if (el) {
              const counterObj = { val: 0 };
              gsap.to(counterObj, {
                val: stat.numericTarget,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                  el.innerText = Math.floor(counterObj.val).toString();
                },
              });
            }
          });
        },
        once: true,
      });

      // Subtle card entrance animation
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 25,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-18 bg-surface/50 border-b border-border transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          category="Institutional Metrics"
          title="DIN at a Glance"
          subtitle="Quantifying our ongoing scholarly contributions to Indian historical inquiry, manuscript preservation, and academic dissemination."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card p-6 rounded-lg bg-canvas border border-border text-center flex flex-col items-center justify-between hover:border-accent-gold transition-all duration-300 shadow-sm hover:shadow-parchment group"
            >
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-accent group-hover:text-accent-gold group-hover:border-accent-gold transition-colors mb-4">
                {stat.icon}
              </div>

              <div className="flex items-baseline justify-center font-serif text-3xl sm:text-4xl font-bold text-accent mb-1 tracking-tight">
                <span
                  ref={(el) => {
                    counterRefs.current[index] = el;
                  }}
                >
                  {stat.numericTarget}
                </span>
                <span className="text-accent-gold ml-0.5">{stat.suffix}</span>
              </div>

              <h4 className="font-serif text-sm font-bold text-text-primary mb-2">
                {stat.label}
              </h4>

              <p className="text-xs text-text-secondary leading-relaxed">
                {stat.description}
              </p>

              {/* Fine hairline accent */}
              <div className="w-12 h-[1px] bg-border group-hover:bg-accent-gold/60 mt-4 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
