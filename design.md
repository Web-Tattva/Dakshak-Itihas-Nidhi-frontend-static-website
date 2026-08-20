@theme {
  /* Dynamic Palette Switcher CSS Variables (Default: Parchment & Deep Maroon) */
  --color-canvas: var(--user-canvas, #fbf9f5); /* Warm Ivory / Parchment */
  --color-surface: var(--user-surface, #f0ebd9); /* Sandstone */
  --color-border: var(--user-border, #e2d9c8); /* Muted Aged Line */
  --color-text-primary: var(--user-text-primary, #1c1917); /* Deep Ink Charcoal */
  --color-text-secondary: var(--user-text-secondary, #57534e); /* Muted Slate */
  --color-accent: var(--user-accent, #701a1e); /* Deep Maroon */
  --color-accent-gold: var(--user-accent-gold, #c29b38); /* Antique Gold */

  /* Typography — Academic Archival Selection */
  --font-serif-heading: 'Cinzel', 'Playfair Display', Georgia, serif;
  --font-sans-body: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  --font-mono-archive: 'JetBrains Mono', monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --text-body-sm: 14px;
  --text-body: 16px;
  --text-subheading: 20px;
  --text-heading-sm: 24px;
  --text-heading: 36px;
  --text-heading-lg: 52px;
  --text-display: 76px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-80: 80px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 12px;
}

/* Theme Presets available for Footer Switching */
.theme-archival { /* Default */
  --user-canvas: #fbf9f5;
  --user-surface: #f2ebd9;
  --user-border: #e2d9c8;
  --user-text-primary: #1c1917;
  --user-text-secondary: #57534e;
  --user-accent: #701a1e;
  --user-accent-gold: #c29b38;
}

.theme-dark-manuscript {
  --user-canvas: #121110;
  --user-surface: #1c1a17;
  --user-border: #332f2b;
  --user-text-primary: #f3f0e6;
  --user-text-secondary: #a8a29e;
  --user-accent: #c29b38;
  --user-accent-gold: #e5c158;
}

.theme-royal-heritage {
  --user-canvas: #0f172a;
  --user-surface: #1e293b;
  --user-border: #334155;
  --user-text-primary: #f8fafc;
  --user-text-secondary: #94a3b8;
  --user-accent: #38bdf8;
  --user-accent-gold: #fbbf24;
}