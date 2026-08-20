"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS, INSTITUTION_INFO } from "@/lib/navigation";
import { ArchivalEmblem } from "../ui/ArchivalEmblem";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { MapPin, Mail, Phone, Clock, ArrowUpRight, Palette } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border transition-colors duration-300 text-text-secondary font-sans mt-auto">
      {/* Top Footer Section with Institutional Branding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1 & 2: About DIN Institution */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <ArchivalEmblem size={44} />
              <div>
                <h3 className="font-serif text-lg font-bold text-accent tracking-wide">
                  DAKSHAK ITIHAS NIDHI
                </h3>
                <p className="font-mono text-[10px] tracking-widest text-text-secondary uppercase">
                  {INSTITUTION_INFO.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-text-secondary max-w-md pt-2">
              Dedicated to preserving historical records, encouraging scholarly inquiry, and fostering deep historical consciousness across India and maritime regions.
            </p>

            <div className="pt-2 text-xs font-mono space-y-1 text-text-secondary/90">
              <div><span className="text-accent-gold">STATUS:</span> Non-profit Scholarly Research Trust</div>
              <div><span className="text-accent-gold">REGISTRATION:</span> {INSTITUTION_INFO.regNo}</div>
              <div><span className="text-accent-gold">CATALOGUE:</span> Open Scholarly Access (CC BY-NC-ND)</div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold text-text-primary uppercase tracking-institutional mb-4 pb-2 border-b border-border/80">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-accent flex items-center gap-1.5 transition-colors group"
                  >
                    <span className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Archival Wings */}
          <div>
            <h4 className="font-serif text-sm font-bold text-text-primary uppercase tracking-institutional mb-4 pb-2 border-b border-border/80">
              Archival Wings
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/what-we-do#research" className="hover:text-accent flex items-center justify-between group">
                  <span>Research & Documentation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#preservation" className="hover:text-accent flex items-center justify-between group">
                  <span>Manuscript Preservation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-accent flex items-center justify-between group">
                  <span>Institutional Legacy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/trustees" className="hover:text-accent flex items-center justify-between group">
                  <span>Board of Trustees</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent flex items-center justify-between group">
                  <span>Scholarly Grants & Inquiries</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Registered Office & Contacts */}
          <div>
            <h4 className="font-serif text-sm font-bold text-text-primary uppercase tracking-institutional mb-4 pb-2 border-b border-border/80">
              Office & Access
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{INSTITUTION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${INSTITUTION_INFO.email}`} className="hover:text-accent transition-colors">
                  {INSTITUTION_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>{INSTITUTION_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary/80">
                <Clock className="w-4 h-4 text-accent-gold shrink-0" />
                <span>{INSTITUTION_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Bar: Theme Switcher Selector */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 bg-canvas/40 p-4 rounded-lg border">
          <div className="flex items-center gap-2.5">
            <Palette className="w-4 h-4 text-accent-gold" />
            <div className="text-xs">
              <span className="font-serif font-bold text-text-primary">Institutional Theme:</span>{" "}
              <span className="text-text-secondary">Switch color schemes & reading aesthetics</span>
            </div>
          </div>

          <ThemeSwitcher />
        </div>
      </div>

      {/* Bottom Copyright & Archival Citation Bar */}
      <div className="border-t border-border/70 bg-canvas/70 py-6 px-4 sm:px-8 text-xs text-text-secondary">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © 2026 <span className="font-serif font-bold text-text-primary">Dakshak Itihas Nidhi</span>. All rights reserved. Registered Archival Trust.
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-text-secondary/80">
            <span>Scholarship • Preservation • Integrity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
