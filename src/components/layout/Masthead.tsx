"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArchivalEmblem } from "../ui/ArchivalEmblem";
import { INSTITUTION_INFO } from "@/lib/navigation";

export function Masthead() {
  const pathname = usePathname();

  // Grand Masthead renders on the Home Page (/) for initial impact
  if (pathname !== "/") return null;

  return (
    <header className="relative w-full bg-canvas border-b border-border/70 transition-colors duration-300">
      {/* Archival Masthead Centerpiece */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Central Title & Emblem */}
          <Link
            href="/"
            className="group flex flex-col items-center text-center cursor-pointer select-none transition-transform duration-300"
          >
            <div className="mb-3 flex items-center justify-center">
              <ArchivalEmblem size={64} />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent transition-colors duration-300 leading-tight">
              DAKSHAK ITIHAS NIDHI
            </h1>

            {/* Decorative filigree flourish line */}
            <div className="filigree-divider w-full max-w-md my-2.5">
              <span className="font-serif text-accent-gold text-sm tracking-widest uppercase">
                ✦ &nbsp; ✦ &nbsp; ✦
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm md:text-base text-text-secondary font-medium tracking-wider max-w-xl">
              {INSTITUTION_INFO.tagline}
            </p>
          </Link>

        </div>
      </div>
    </header>
  );
}
