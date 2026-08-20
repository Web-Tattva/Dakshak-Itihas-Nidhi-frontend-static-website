"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS, INSTITUTION_INFO } from "@/lib/navigation";
import { ArchivalEmblem } from "../ui/ArchivalEmblem";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { X, ChevronRight, BookOpen, Mail } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export function MobileNav({ isOpen, onClose, activePath }: MobileNavProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-canvas border-l border-border h-full flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-border/80 bg-surface/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ArchivalEmblem size={38} />
            <div>
              <h3 className="font-serif text-sm font-bold text-accent tracking-wide">
                DAKSHAK ITIHAS NIDHI
              </h3>
              <p className="font-mono text-[9px] uppercase tracking-wider text-text-secondary">
                Navigation Directory
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface border border-border text-text-secondary hover:text-accent transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="py-4 px-4 flex-1 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activePath === item.href || (item.href !== "/" && activePath.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-md text-sm font-sans tracking-wide transition-all ${
                  isActive
                    ? "bg-surface text-accent font-semibold border-l-4 border-accent"
                    : "text-text-primary hover:bg-surface/60 hover:text-accent"
                }`}
              >
                <div>
                  <div className="font-serif text-sm font-medium">{item.label}</div>
                  {item.description && (
                    <div className="text-[11px] text-text-secondary font-sans mt-0.5 line-clamp-1">
                      {item.description}
                    </div>
                  )}
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "text-accent" : "text-border"}`} />
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer & Theme Switcher */}
        <div className="p-6 border-t border-border/80 bg-surface/40 space-y-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-text-secondary uppercase mb-2">
              Color Palette
            </div>
            <ThemeSwitcher />
          </div>

          <div className="pt-3 border-t border-border/50 text-[11px] text-text-secondary font-mono">
            {INSTITUTION_INFO.regNo}
          </div>
        </div>

      </div>
    </div>
  );
}
