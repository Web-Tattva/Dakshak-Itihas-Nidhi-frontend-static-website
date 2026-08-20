import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { INSTITUTION_INFO } from "@/lib/navigation";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Building,
  ShieldCheck,
  UserCheck,
  FileText,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Dakshak Itihas Nidhi",
  description: "Official contact information, email, phone, address, and department directory for Dakshak Itihas Nidhi.",
};

const DEPARTMENTS = [
  {
    name: "Directorate of Research & Grants",
    head: "Dr. Arvind S. Kulkarni (Director)",
    email: "directorate@dakshakitihasnidhi.org",
    phone: "+91 98201 45891",
    scope: "Primary research projects, paleography, Modi script studies, and research grant proposals.",
  },
  {
    name: "Archival Vaults & Conservation",
    head: "Prof. Meera Deshpande (Head Conservator)",
    email: "archives@dakshakitihasnidhi.org",
    phone: "+91 (022) 2284-5902",
    scope: "Reading room appointments, manuscript conservation, and digital folio copy requests.",
  },
  {
    name: "Editorial & Publications Desk",
    head: "Dr. Rajeshwar Rao (Publications Chair)",
    email: "editor@dakshakitihasnidhi.org",
    phone: "+91 (022) 2284-5904",
    scope: "Monograph publishing submissions, journal paper inquiries, and academic symposia.",
  },
  {
    name: "Trust Governance & Legal Affairs",
    head: "Justice Shrikant V. Patwardhan (Retd.)",
    email: "governance@dakshakitihasnidhi.org",
    phone: "+91 (022) 2284-5905",
    scope: "Family archive donations, legal deeds, and open-access research licensing.",
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 bg-canvas transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeader
          category="Institutional Contact"
          title="Contact Us"
          subtitle="Get in touch with Dakshak Itihas Nidhi for research inquiries, archival access, publications, or general institutional information."
        />

        {/* TOP MINIMAL BANNER: Primary Essential Contact Details */}
        <div className="p-8 sm:p-10 rounded-2xl bg-surface border-2 border-border shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3 py-1 rounded-full bg-canvas border border-border text-xs font-mono font-bold text-accent uppercase tracking-wider">
              Quick Contact & Location
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary mt-3">
              General Inquiries & Visiting Details
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              For general questions, archival access, or visiting our research wing in Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            
            {/* Email */}
            <div className="p-5 rounded-xl bg-canvas border border-border flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-md bg-surface border border-border flex items-center justify-center text-accent mb-3 mx-auto sm:mx-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono text-text-secondary uppercase font-bold">Official Email</div>
                <a
                  href={`mailto:${INSTITUTION_INFO.email}`}
                  className="font-serif font-bold text-sm text-accent hover:underline block mt-1 break-all"
                >
                  {INSTITUTION_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="p-5 rounded-xl bg-canvas border border-border flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-md bg-surface border border-border flex items-center justify-center text-accent mb-3 mx-auto sm:mx-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono text-text-secondary uppercase font-bold">Phone & WhatsApp</div>
                <div className="font-mono text-xs text-text-primary font-bold mt-1">
                  {INSTITUTION_INFO.phone}
                </div>
                <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
                  WA: +91 98201 45890
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="p-5 rounded-xl bg-canvas border border-border flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-md bg-surface border border-border flex items-center justify-center text-accent mb-3 mx-auto sm:mx-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono text-text-secondary uppercase font-bold">Location</div>
                <div className="text-xs text-text-primary font-medium mt-1 leading-snug">
                  Heritage Research Wing, Fort Campus, Mumbai 400001
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 rounded-xl bg-canvas border border-border flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-md bg-surface border border-border flex items-center justify-center text-accent mb-3 mx-auto sm:mx-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono text-text-secondary uppercase font-bold">Office Hours</div>
                <div className="text-xs text-text-primary font-medium mt-1 leading-snug">
                  Mon – Fri: 9:30 AM – 5:30 PM IST
                </div>
                <div className="text-[11px] font-mono text-accent-gold font-bold mt-0.5">
                  Sat: By Appointment
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Specific Department Directory */}
        <div className="space-y-6">
          <div className="border-b border-border/80 pb-3">
            <h3 className="font-serif text-xl font-bold text-text-primary">
              Specific Department Contacts
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Direct contacts for specific archival wings, manuscript access, publishing, or trust governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.name}
                className="p-5 rounded-xl bg-surface border border-border hover:border-accent-gold transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-base font-bold text-text-primary">
                    {dept.name}
                  </h4>
                  <div className="text-xs font-serif font-semibold text-accent mt-0.5">
                    {dept.head}
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mt-2 font-sans">
                    {dept.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono mt-4">
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-accent font-bold hover:underline"
                  >
                    {dept.email}
                  </a>
                  <span className="text-text-secondary font-medium">{dept.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visiting Guidelines Footnote */}
        <div className="mt-12 p-5 rounded-xl bg-surface/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-gold shrink-0" />
            <span>Visiting reading room requires government photo ID & prior appointment.</span>
          </div>
          <div className="font-mono text-text-primary">
            CSMT / Churchgate Railway Access
          </div>
        </div>

      </div>
    </div>
  );
}
