import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Masthead } from "@/components/layout/Masthead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dakshak Itihas Nidhi | Historical & Archival Research Institution",
  description:
    "Dakshak Itihas Nidhi is a premier historical and research institution dedicated to preserving history, encouraging scholarly inquiry, and building historical consciousness.",
  keywords: [
    "Dakshak Itihas Nidhi",
    "DIN",
    "Historical Research",
    "Indian History",
    "Maritime Research",
    "Archival Preservation",
    "Historical Manuscripts",
    "E-Books",
    "Academic Conferences",
  ],
  authors: [{ name: "Dakshak Itihas Nidhi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-archival">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-canvas text-text-primary selection:bg-accent/20 selection:text-accent">
        <ThemeProvider>
          {/* Top Archival Masthead with Title, Crest & Tagline */}
          <Masthead />

          {/* Sticky Morphing Navigation Bar */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1 w-full flex flex-col">{children}</main>

          {/* Institutional Archival Footer with Theme Switcher */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
