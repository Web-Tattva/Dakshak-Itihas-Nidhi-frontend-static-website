"use client";

import React, { useState, useEffect, useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArchivalEmblem } from "@/components/ui/ArchivalEmblem";
import {
  BookOpen,
  Building2,
  X,
  ChevronRight,
} from "lucide-react";

interface Trustee {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  tenure: string;
  briefBio: string;
  fullBio: string;
  focus: string;
  selectedPublications: string[];
  committees: string[];
  initials: string;
}

const TRUSTEES: Trustee[] = [
  {
    id: "trustee-01",
    name: "Dr. Arvind S. Kulkarni",
    designation: "Managing Trustee & Director of Research",
    qualification: "Ph.D. in Maritime History, Former Chair of Deccan Studies (Univ. of Mumbai)",
    tenure: "Trustee Since 2014",
    initials: "AK",
    briefBio:
      "Distinguished authority on 17th-century Western Indian naval tactics and Modi script paleography. Has authored 8 seminal monographs on Indian Ocean port systems and guided over 30 doctoral research scholars.",
    fullBio:
      "Dr. Arvind S. Kulkarni is an internationally acclaimed historian specializing in the maritime and administrative history of early modern Western India. Over a distinguished four-decade academic career, Dr. Kulkarni served as Chair of the Department of History and Director of Deccan Archival Studies at the University of Mumbai. As the Founding Managing Trustee of Dakshak Itihas Nidhi, he established the Trust's chemical conservation laboratories and the Modi Script Paleography Bureau. His research on Maratha naval logistics under Admiral Kanhoji Angre revolutionized contemporary understanding of indigenous coastal sovereignty against European mercantile armadas.",
    focus: "Maritime Historiography, Modi Script Paleography, Naval Logistics",
    selectedPublications: [
      "Maritime Frontiers & Trade Routes of the Western Seaboard (1500–1850)",
      "Naval Logistics and Coastal Redoubts of the Konkan Littoral (1660–1780)",
      "Modi Administrative Terminology: An Archival Lexicon",
    ],
    committees: ["Academic Research Council (Chair)", "Conservation & Vault Governance Board", "Editorial Publications Committee"],
  },
  {
    id: "trustee-02",
    name: "Prof. Meera Deshpande",
    designation: "Trustee — Archival Conservation & Digitization",
    qualification: "M.Phil in Conservation Science, Fellow of the Royal Numismatic Society",
    tenure: "Trustee Since 2016",
    initials: "MD",
    briefBio:
      "Leads DIN's manuscript conservation laboratories. Specialist in medieval paper restoration, pigment chromatography, and international standard digital archiving protocols.",
    fullBio:
      "Prof. Meera Deshpande is a preeminent archival conservator and material scientist. Having trained at the National Research Laboratory for Conservation of Cultural Property and the British Library's Asian Collections, she pioneered non-invasive multi-spectral imaging methods for waterlogged Modi paper records. At Dakshak Itihas Nidhi, Prof. Deshpande oversees all micro-climate storage vaults, deacidification protocols, and high-resolution 1200 DPI archival rasterization pipelines.",
    focus: "Paper Conservation, Cellulose Deacidification, Digital Archiving Standards",
    selectedPublications: [
      "Chemical Diagnostics & Stabilization of 18th-Century Rag Paper in Coastal Climates",
      "Digital Preservation Standards for Vernacular South Asian Manuscripts",
    ],
    committees: ["Conservation Technology Committee (Chair)", "Digital Library Technical Oversight"],
  },
  {
    id: "trustee-03",
    name: "Justice Shrikant V. Patwardhan (Retd.)",
    designation: "Trustee — Legal Affairs & Institutional Governance",
    qualification: "Former Judge, High Court of Judicature at Bombay",
    tenure: "Trustee Since 2015",
    initials: "SP",
    briefBio:
      "Advises the Trust on legal compliance, scholarly copyright management, archival acquisition deeds, and non-profit ethical charters.",
    fullBio:
      "Justice Shrikant V. Patwardhan brings decades of distinguished judicial wisdom to Dakshak Itihas Nidhi. Having served on the bench of the Bombay High Court with notable contributions to intellectual property and heritage conservation jurisprudence, Justice Patwardhan drafted DIN's comprehensive Open Archival Charter, ensuring that all recovered records are protected by Creative Commons non-commercial licensing while safeguarding donors' archival deeds.",
    focus: "Institutional Governance, Archival Ethics, Open-Access Copyright Jurisprudence",
    selectedPublications: [
      "Legal Frameworks for the Protection of Private Archival Depositories in India",
      "Intellectual Property, Fair Use, and Open Scholarly Access in the Digital Age",
    ],
    committees: ["Legal Compliance & Ethics Council (Chair)", "Finance & Endowment Audit Panel"],
  },
  {
    id: "trustee-04",
    name: "Dr. Rajeshwar Rao",
    designation: "Trustee — Academic Conferences & Publications",
    qualification: "Ph.D. in Epigraphy & Historical Architecture (Deccan College)",
    tenure: "Trustee Since 2018",
    initials: "RR",
    briefBio:
      "Oversees the DIN Digital Library and peer-review editorial boards. Renowned for field surveys of medieval rock-cut water systems and fort architecture in the Deccan plateau.",
    fullBio:
      "Dr. Rajeshwar Rao is an eminent field archaeologist and epigraphist whose surveys of basalt architecture across the Sahyadri ranges have set new standards for spatial documentation. He has directed 14 comprehensive field expeditions mapping defensive architecture, rock-cut rainwater harvesting networks, and inscriptional epigraphs across Western Maharashtra and Goa. At DIN, Dr. Rao chairs the Peer-Review Editorial Board for the DIN Monograph Series.",
    focus: "Epigraphy, Military Architecture, LIDAR Archaeological Mapping",
    selectedPublications: [
      "Epigraphy & Fortifications of the Sahyadri: Inscriptional Corpus (1300–1800)",
      "Hydraulic Engineering in Deccan Mountain Fortresses: An Archaeological Survey",
    ],
    committees: ["Publications & Editorial Board (Chair)", "National Conference Programme Committee"],
  },
];

const FOUNDERS_LEGACY = [
  {
    name: "Late Prof. R. G. Bhandarkar Memorial Chair",
    role: "Founding Mentor & Institutional Patron (In Memoriam)",
    tenure: "Visionary Patron (2014)",
    note: "Pioneered indigenous archival recovery frameworks and bequeathed foundational collection of 1,200 rare lithographs and manuscript folios to DIN.",
  },
  {
    name: "Late Capt. Manohar S. Rane",
    role: "Founding Trustee (1942–2021)",
    tenure: "Trustee 2014 – 2021",
    note: "Veteran mariner, researcher, and naval historian who endowed the DIN Maritime Cartography Collection and established the annual Maritime History Symposia.",
  },
  {
    name: "Dr. Nilambari Joshi",
    role: "Trustee Emerita (Retired 2024)",
    tenure: "Trustee 2014 – 2024",
    note: "Eminent Sanskritist and Modi paleographer whose decade of editorial service shaped the bilingual translation bureau at Dakshak Itihas Nidhi.",
  },
];

export default function TrusteesPage() {
  const [selectedTrustee, setSelectedTrustee] = useState<Trustee | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTrustee(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="py-16 bg-canvas transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Page Heading: Board of Trustees with introductory text */}
        <SectionHeader
          category="Institutional Governance"
          title="Board of Trustees"
          subtitle="Dakshak Itihas Nidhi is guided by a Board of Trustees committed to the preservation, study and dissemination of history. The Board unites senior academic chairs, conservation scientists, and legal experts to maintain the highest standards of archival stewardship."
        />

        {/* Trustee Cards Grid - All cards rendered at 100% opacity */}
        <div className="trustee-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {TRUSTEES.map((trustee) => (
            <div
              key={trustee.id}
              className="trustee-card p-8 rounded-2xl bg-surface border border-border hover:border-accent-gold transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                {/* Profile Frame with Archival Crest & Details */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-canvas border-2 border-accent-gold/70 flex items-center justify-center text-accent shrink-0 shadow-inner group-hover:scale-105 transition-transform p-2.5">
                    <ArchivalEmblem size={40} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-bold">
                        {trustee.tenure}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {trustee.name}
                    </h3>

                    <div className="text-xs font-serif font-bold text-accent mt-0.5">
                      {trustee.designation}
                    </div>

                    <div className="text-[11px] font-mono text-text-secondary mt-1">
                      {trustee.qualification}
                    </div>
                  </div>
                </div>

                {/* Brief Bio */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans mb-6">
                  {trustee.briefBio}
                </p>
              </div>

              {/* Card Footer: Focus Area & Modal Trigger */}
              <div className="pt-4 border-t border-border/80 flex items-center justify-between">
                <div className="text-[11px] font-mono text-text-secondary truncate max-w-[200px]">
                  <span className="text-accent font-bold">Focus: </span>
                  {trustee.focus.split(",")[0]}
                </div>

                <button
                  onClick={() => setSelectedTrustee(trustee)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-canvas border border-border text-xs font-serif font-bold text-accent hover:border-accent-gold hover:text-accent-gold transition-all shadow-sm"
                >
                  <span>Read Full Bio</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Section: Founders & Former Leadership */}
        <div className="legacy-section p-8 sm:p-12 rounded-2xl bg-surface/60 border border-border shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-accent-gold" />
              <span>Institutional Legacy</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
              Founders & Former Leadership
            </h2>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">
              Honoring the visionary scholars, benefactors, and patrons whose foundational commitment and endowment established Dakshak Itihas Nidhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS_LEGACY.map((legacy) => (
              <div
                key={legacy.name}
                className="legacy-card p-6 rounded-xl bg-canvas border border-border hover:border-accent transition-colors shadow-sm flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="text-[10px] font-mono text-accent uppercase tracking-wider font-bold mb-1">
                    {legacy.tenure}
                  </div>
                  <h4 className="font-serif text-base font-bold text-text-primary mb-1">
                    {legacy.name}
                  </h4>
                  <div className="text-xs font-serif font-semibold text-accent mb-2">
                    {legacy.role}
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {legacy.note}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 text-[10px] font-mono text-text-secondary">
                  Dakshak Itihas Nidhi Archival Registry
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Trustee Full Biography Modal */}
      {selectedTrustee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Modal Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedTrustee(null)}
          />

          {/* Modal Dialog Card */}
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-canvas border-2 border-border rounded-2xl shadow-2xl z-10 overflow-y-auto p-6 sm:p-10 font-sans">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedTrustee(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface border border-border text-text-secondary hover:text-accent transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6 pr-8">
              <div className="w-16 h-16 rounded-full bg-surface border border-accent-gold flex items-center justify-center text-accent shrink-0 p-2 shadow-inner">
                <ArchivalEmblem size={40} />
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-bold">
                  {selectedTrustee.tenure}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                  {selectedTrustee.name}
                </h3>
                <div className="text-xs sm:text-sm font-serif font-semibold text-accent mt-0.5">
                  {selectedTrustee.designation}
                </div>
                <div className="text-xs font-mono text-text-secondary mt-1">
                  {selectedTrustee.qualification}
                </div>
              </div>
            </div>

            {/* Modal Body: Full Bio */}
            <div className="space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border/80 pt-5">
              <p>{selectedTrustee.fullBio}</p>
            </div>

            {/* Scholarly Specializations */}
            <div className="mt-6 p-4 rounded-lg bg-surface border border-border">
              <div className="text-xs font-mono text-accent font-bold uppercase tracking-wider mb-1">
                Primary Research & Archival Specialization:
              </div>
              <div className="text-xs text-text-primary font-medium">
                {selectedTrustee.focus}
              </div>
            </div>

            {/* Key Publications */}
            <div className="mt-6">
              <h4 className="font-serif text-sm font-bold text-text-primary uppercase tracking-wider mb-2.5 pb-1 border-b border-border">
                Selected Published Monographs & Research
              </h4>
              <ul className="space-y-2 text-xs text-text-secondary">
                {selectedTrustee.selectedPublications.map((pub, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5" />
                    <span>{pub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Committees */}
            <div className="mt-6 pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] text-text-secondary uppercase">Committees:</span>
                {selectedTrustee.committees.map((comm, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-surface border border-border text-[11px] font-medium text-text-primary">
                    {comm}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedTrustee(null)}
                className="px-5 py-2 rounded bg-accent text-white font-serif text-xs font-bold hover:bg-accent/90"
              >
                Close Biography
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
