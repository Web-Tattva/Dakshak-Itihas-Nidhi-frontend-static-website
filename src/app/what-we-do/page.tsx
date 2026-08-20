"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  FileSearch,
  Shield,
  BookOpen,
  Users,
  Presentation,
  GraduationCap,
  Sparkles,
  Award,
  Globe,
  Mic,
  Languages,
  ArrowRight,
  Database,
  Layers,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

interface PillarDetail {
  id: string;
  category: string;
  icon: React.ReactNode;
  title: string;
  summary: string;
  coreActivities: string[];
  archivalMethods: string[];
  impactMetric: string;
  tagline: string;
}

const DETAILED_PILLARS: PillarDetail[] = [
  {
    id: "research",
    category: "Primary Historiography",
    icon: <FileSearch className="w-6 h-6" />,
    title: "Research & Documentation",
    tagline: "Uncovering Lost Archives & Vernacular Records",
    summary:
      "Dakshak Itihas Nidhi spearheads rigorous, primary-source historical investigations with special focus on the Western Indian littoral, Deccan fortifications, and maritime mercantilism.",
    coreActivities: [
      "Field epigraphy expeditions across 40+ Sahyadri hill and coastal forts.",
      "Multi-archive corroboration comparing indigenous Modi records with Dutch, Portuguese, and British colonial gazetteers.",
      "Quantitative trade volume reconstructions from port customs toll ledgers (1500–1850).",
    ],
    archivalMethods: [
      "Critical textual recension and diplomatics",
      "Cartographic GIS spatial historical mapping",
      "Numismatic spectral composition analysis",
    ],
    impactMetric: "240+ Archival Bundles Documented",
  },
  {
    id: "preservation",
    category: "Physical & Digital Conservation",
    icon: <Shield className="w-6 h-6" />,
    title: "Manuscript & Archival Preservation",
    tagline: "Safeguarding Fragile Manuscripts, Ephemera & Oral Memory",
    summary:
      "Our conservation wing treats, stabilizes, and digitizes deteriorating paper manuscripts, birch bark folios, copper plates, and living oral traditions before they are lost to climate and decay.",
    coreActivities: [
      "Chemical deacidification, Japanese tissue lining, and bespoke phase-box enclosure crafting.",
      "High-precision 1200 DPI archival rasterization adhering to ISO 19264-1 image standards.",
      "Living Oral History sound recordings of traditional indigenous shipbuilders and port elders.",
    ],
    archivalMethods: [
      "Non-destructive multi-spectral imaging",
      "Cellulose stabilization & organic antifungal fumigation",
      "Cold vault micro-climate preservation",
    ],
    impactMetric: "12,500+ Scanned High-Res Folios",
  },
  {
    id: "publications",
    category: "Academic Publishing",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Scholarly Publications & Monographs",
    tagline: "Authoritative, Peer-Reviewed Historical Scholarship",
    summary:
      "Publishing peer-reviewed monographs, annotated source text translations, and the annual DIN Journal of Indian Maritime History to make specialized scholarly research widely accessible.",
    coreActivities: [
      "DIN Monograph Series: Authored by leading university chairs and independent historians.",
      "Annotated Source Text Translations: Bilingual critical editions of untranslated Modi and Persian scrolls.",
      "Annual DIN Journal of Deccan & Maritime Historiography distributed worldwide.",
    ],
    archivalMethods: [
      "Double-blind peer review editorial standard",
      "Open-access digital distribution (Creative Commons)",
      "Scholarly citation indexing and DOI registration",
    ],
    impactMetric: "45+ Published Monographs & Books",
  },
  {
    id: "workshops",
    category: "Scholarly Training",
    icon: <Users className="w-6 h-6" />,
    title: "Workshops & Academic Programmes",
    tagline: "Training the Next Generation of Historians & Paleographers",
    summary:
      "Conducting hands-on masterclasses, paleography workshops, and archival methodology intensives for university scholars, doctoral fellows, and dedicated history enthusiasts.",
    coreActivities: [
      "Bi-annual Modi Script Paleography intensives teaching 17th-century cursive Marathi decipherment.",
      "Historiographical source criticism and archival research method bootcamps.",
      "Field archaeology and conservation science workshops in partner regional conservation laboratories.",
    ],
    archivalMethods: [
      "Hands-on manuscript deciphering exercises",
      "Interactive orthographic transcription software",
      "Direct mentorship by senior archival curators",
    ],
    impactMetric: "1,200+ Scholars Trained in Paleography",
  },
  {
    id: "conferences",
    category: "Intellectual Exchange",
    icon: <Presentation className="w-6 h-6" />,
    title: "Conferences & Symposia",
    tagline: "Convening Global Dialogues on Indian & Maritime History",
    summary:
      "Bringing together international historians, epigraphists, numismatists, and cultural anthropologists for high-level thematic symposia, keynote lectures, and research presentations.",
    coreActivities: [
      "Biennial National Maritime History Conference convening 40+ scholarly paper presentations.",
      "DIN Memorial Distinguished Lecture Series delivered by globally recognized historians.",
      "Thematic colloquia on Fort Architecture, Indian Ocean Navies, and Trade Economics.",
    ],
    archivalMethods: [
      "Peer-reviewed conference proceedings published annually",
      "Hybrid video broadcasting for international audiences",
      "Interdisciplinary roundtables uniting archaeologists and historians",
    ],
    impactMetric: "80+ Symposia & Conferences Hosted",
  },
  {
    id: "outreach",
    category: "Public Consciousness",
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education & Outreach",
    tagline: "Fostering Historical Consciousness & Heritage Stewardship",
    summary:
      "Democratizing historical knowledge through school curricula enrichment, curated public exhibitions, community heritage walks, and interactive digital educational repositories.",
    coreActivities: [
      "Youth history immersion camps and guided field archaeology tours of UNESCO tentative sites.",
      "Public archival exhibitions showcasing high-resolution facsimiles of rare documents.",
      "Museum curatorial mentorship for regional trusts and community libraries across Maharashtra.",
    ],
    archivalMethods: [
      "Open-access digital learning kits for educators",
      "Public history podcasts and documentary video essays",
      "Community oral history collection drives",
    ],
    impactMetric: "15,000+ Students & Public Participants",
  },
];

const EXPANSION_INITIATIVES = [
  {
    icon: <Award className="w-5 h-5 text-accent-gold" />,
    title: "DIN Research Fellowships & Grants",
    category: "Financial Grants",
    desc: "Direct doctoral and post-doctoral research grants supporting independent historians conducting field archaeology, paleography, and maritime archival documentation.",
    scope: "15 Annual Fellowships Awarded",
  },
  {
    icon: <Languages className="w-5 h-5 text-accent-gold" />,
    title: "Manuscript Translation Bureau",
    category: "Philology & Translation",
    desc: "A dedicated translation syndicate converting complex Modi, Persian, Old Portuguese, and Sanskrit administrative ledgers into standardized English and Marathi.",
    scope: "50,000+ Words Translated Annually",
  },
  {
    icon: <Globe className="w-5 h-5 text-accent-gold" />,
    title: "Mobile Mass Digitisation Labs",
    category: "Field Digitisation",
    desc: "Rapid deployment scanning units equipped with planetary archival cameras visiting remote temple trusts, family archives, and rural libraries.",
    scope: "Covering 18 Districts Across Western India",
  },
  {
    icon: <Mic className="w-5 h-5 text-accent-gold" />,
    title: "Living Maritime Oral Archives",
    category: "Intangible Heritage",
    desc: "Audio-visual documentation capturing traditional knowledge from hereditary boat builders, dhow navigators, and coastal lighthouse keepers.",
    scope: "120+ Hours of Master Interviews",
  },
  {
    icon: <Database className="w-5 h-5 text-accent-gold" />,
    title: "Epigraphic Digital Corpus",
    category: "Digital Humanities",
    desc: "3D photogrammetric scans and searchable Modi / Grantha inscriptional database open to computational linguists and archaeologists.",
    scope: "180+ 3D Inscription Models",
  },
  {
    icon: <Layers className="w-5 h-5 text-accent-gold" />,
    title: "Inter-Institutional Research Syndicates",
    category: "Consortium",
    desc: "Cooperative research programs with university history departments and archival repositories in the UK, Portugal, and the Netherlands.",
    scope: "6 Permanent Global Partnerships",
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="py-16 bg-canvas transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeader
          category="Institutional Programs"
          title="What We Do"
          subtitle="A comprehensive overview of Dakshak Itihas Nidhi's scholarly operations, archival initiatives, and academic dissemination wings."
        />

        {/* 6 Core Detailed Section Blocks - All rendered 100% solid opacity */}
        <div className="pillar-block-container space-y-8 mb-20">
          {DETAILED_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="pillar-block p-6 sm:p-8 rounded-xl bg-surface border border-border hover:border-accent-gold transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                
                {/* Left Column: Icon, Title, Tagline & Summary */}
                <div className="lg:w-[48%] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-canvas border border-border flex items-center justify-center text-accent">
                        {pillar.icon}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                        {pillar.category}
                      </span>
                    </div>

                    {/* Clean Number Badge Pill */}
                    <span className="px-3 py-1 rounded-full bg-canvas border border-border font-mono text-xs font-bold text-accent shadow-xs">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-text-primary">
                    {pillar.title}
                  </h2>

                  <p className="font-serif text-xs font-bold text-accent italic">
                    "{pillar.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                    {pillar.summary}
                  </p>

                  <div className="pt-2 inline-flex items-center gap-2 px-3 py-1 rounded bg-canvas border border-border/80 text-xs font-mono text-text-primary">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-bold text-accent">Impact:</span>
                    <span>{pillar.impactMetric}</span>
                  </div>
                </div>

                {/* Right Column: Operations & Archival Methods */}
                <div className="lg:w-[48%] flex flex-col justify-between space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border/70 lg:pl-6">
                  <div>
                    <h3 className="font-serif text-xs font-bold text-text-primary uppercase tracking-wider mb-2 pb-1 border-b border-border/60">
                      Core Operations & Fieldwork
                    </h3>
                    <ul className="space-y-2 text-xs text-text-secondary">
                      {pillar.coreActivities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                    <div className="text-[11px] font-mono text-text-secondary">
                      <span className="text-accent font-semibold">Standard: </span>
                      {pillar.archivalMethods[0]}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 font-serif font-bold text-accent hover:text-accent-gold transition-colors"
                    >
                      <span>Contact Wing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Structured Grid Layout for Expanded Initiatives */}
        <div className="expansion-container p-8 sm:p-10 rounded-2xl bg-surface/60 border border-border shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <span>Expanded Institutional Wings</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
              Grants, Archival Projects & Fellowships
            </h2>
            <p className="text-sm text-text-secondary mt-1 leading-relaxed">
              Targeted research sponsorships and technical capabilities engineered to address historically under-resourced preservation domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPANSION_INITIATIVES.map((init) => (
              <div
                key={init.title}
                className="expansion-card p-5 rounded-xl bg-canvas border border-border hover:border-accent-gold transition-all duration-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-md bg-surface border border-border flex items-center justify-center text-accent">
                      {init.icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold px-2 py-0.5 rounded bg-surface border border-border">
                      {init.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-sm font-bold text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {init.title}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {init.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-secondary/80">Scope:</span>
                  <span className="text-accent font-semibold">{init.scope}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-canvas border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-serif text-sm font-bold text-text-primary">
                Propose an Archival Project or Apply for Fellowship
              </h4>
              <p className="text-xs text-text-secondary mt-0.5">
                DIN reviews scholarly research grant applications bi-annually in April and October.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-white font-serif text-xs font-bold tracking-wider hover:bg-accent/90 shrink-0 shadow-sm"
            >
              <span>DIRECT CONTACT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
