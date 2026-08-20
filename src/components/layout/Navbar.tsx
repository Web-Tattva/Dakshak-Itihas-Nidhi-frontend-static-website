"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/navigation";
import { ArchivalEmblem } from "../ui/ArchivalEmblem";
import { MobileNav } from "./MobileNav";
import { Menu, Search, X } from "lucide-react";

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const isHomePage = pathname === "/";
  // On subpages, the compact brand logo is permanently visible from top; on home page it morphs when sticky
  const showBrandLogo = isSticky || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isSticky || !isHomePage
            ? "bg-canvas shadow-parchment border-b border-border py-2.5"
            : "bg-surface border-b border-border py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          
          {/* Left Brand Logo & Title */}
          <div
            className={`flex items-center overflow-hidden transition-all duration-500 ease-out ${
              showBrandLogo
                ? "max-w-[280px] sm:max-w-[340px] opacity-100 translate-x-0 pr-4 border-r border-border/60"
                : "max-w-0 opacity-0 -translate-x-6 pointer-events-none pr-0 border-r-0"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-2.5 group whitespace-nowrap py-1"
            >
              <ArchivalEmblem size={34} />
              <div className="flex flex-col">
                <span className="font-serif text-sm sm:text-base font-bold text-accent tracking-wide group-hover:text-accent-gold transition-colors">
                  DAKSHAK ITIHAS NIDHI
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-secondary">
                  Historical Trust
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-2 xl:gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-xs xl:text-sm font-medium font-sans tracking-institutional transition-all duration-200 group rounded-sm ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-text-primary/90 hover:text-accent hover:bg-surface/60"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Subtle active / hover bottom line indicator */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-accent rounded-full animate-fadeIn" />
                  )}
                  <span className="absolute bottom-0.5 left-4 right-4 h-[1px] bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                </Link>
              );
            })}
          </div>

          {/* Right Action Icons & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search Archives"
              className="p-2 rounded-full hover:bg-surface border border-transparent hover:border-border text-text-secondary hover:text-accent transition-all duration-200"
              title="Search Archives & Records"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 rounded-md border border-border bg-surface text-text-primary hover:text-accent hover:border-accent-gold transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Expandable Quick Archival Search Drawer */}
        {searchOpen && (
          <div className="border-t border-border bg-surface px-4 sm:px-8 py-3.5 animate-fadeIn shadow-md">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-accent-gold shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search historical records, research areas, or trustees..."
                className="w-full bg-transparent border-none text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none font-sans"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-text-secondary hover:text-accent"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activePath={pathname}
      />
    </>
  );
}
