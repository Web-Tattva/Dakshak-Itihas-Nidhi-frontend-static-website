"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "theme-archival" | "theme-dark-manuscript" | "theme-royal-heritage";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("theme-archival");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("din-theme") as ThemeMode | null;
    if (saved && ["theme-archival", "theme-dark-manuscript", "theme-royal-heritage"].includes(saved)) {
      setThemeState(saved);
      document.documentElement.classList.remove("theme-archival", "theme-dark-manuscript", "theme-royal-heritage");
      document.documentElement.classList.add(saved);
    } else {
      document.documentElement.classList.add("theme-archival");
    }
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("din-theme", newTheme);
      document.documentElement.classList.remove("theme-archival", "theme-dark-manuscript", "theme-royal-heritage");
      document.documentElement.classList.add(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
