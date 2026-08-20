"use client";

import React from "react";
import { useTheme, ThemeMode } from "@/context/ThemeContext";
import { Sparkles, Moon, Sun, Shield } from "lucide-react";

interface ThemeOption {
  id: ThemeMode;
  name: string;
  shortName: string;
  tagline: string;
  previewBg: string;
  previewAccent: string;
  icon: React.ReactNode;
}

const THEMES: ThemeOption[] = [
  {
    id: "theme-archival",
    name: "Archival Parchment",
    shortName: "Archival",
    tagline: "Warm Ivory & Deep Maroon",
    previewBg: "#fbf9f5",
    previewAccent: "#701a1e",
    icon: <Sun className="w-3.5 h-3.5" />,
  },
  {
    id: "theme-dark-manuscript",
    name: "Dark Manuscript",
    shortName: "Manuscript",
    tagline: "Charcoal & Antique Gold",
    previewBg: "#121110",
    previewAccent: "#c29b38",
    icon: <Moon className="w-3.5 h-3.5" />,
  },
  {
    id: "theme-royal-heritage",
    name: "Royal Heritage",
    shortName: "Royal",
    tagline: "Slate Navy & Gold / Azure",
    previewBg: "#0b1329",
    previewAccent: "#38bdf8",
    icon: <Shield className="w-3.5 h-3.5" />,
  },
];

interface ThemeSwitcherProps {
  className?: string;
  variant?: "pills" | "compact";
}

export function ThemeSwitcher({ className = "", variant = "pills" }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 ${className}`}>
      <div className="inline-flex p-1 rounded-lg bg-surface border border-border/80 shadow-inner">
        {THEMES.map((t) => {
          const isActive = theme === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`relative flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all duration-300 ${
                isActive
                  ? "bg-canvas text-accent shadow-sm border border-border font-semibold"
                  : "text-text-secondary hover:text-text-primary hover:bg-canvas/40"
              }`}
              title={`${t.name} (${t.tagline})`}
            >
              {/* Color swatch dot */}
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0 shadow-sm"
                style={{ backgroundColor: t.previewAccent }}
              />

              <span className="hidden md:inline">{t.name}</span>
              <span className="inline md:hidden">{t.shortName}</span>

              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold ml-0.5 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
