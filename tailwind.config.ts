import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        accent: {
          DEFAULT: "var(--color-accent)",
          gold: "var(--color-accent-gold)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        parchment: "0 4px 20px -2px rgba(28, 25, 23, 0.06), 0 2px 6px -1px rgba(28, 25, 23, 0.04)",
        "parchment-lg": "0 10px 30px -5px rgba(28, 25, 23, 0.12), 0 4px 12px -2px rgba(28, 25, 23, 0.08)",
        manuscript: "0 4px 25px 0 rgba(0, 0, 0, 0.35)",
        gold: "0 0 20px -2px rgba(194, 155, 56, 0.35)",
      },
      backgroundImage: {
        "gold-shimmer": "linear-gradient(135deg, rgba(194, 155, 56, 0.15) 0%, rgba(194, 155, 56, 0.02) 100%)",
        "parchment-pattern": "radial-gradient(ellipse at top, var(--color-surface) 0%, var(--color-canvas) 70%)",
      },
      letterSpacing: {
        archival: "0.2em",
        institutional: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
