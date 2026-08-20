export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "HISTORY", href: "/history", description: "The Beginning, Vision & Archival Journey" },
  { label: "WHAT WE DO", href: "/what-we-do", description: "Research, Preservation & Academic Outreach" },
  { label: "TRUSTEES", href: "/trustees", description: "Board of Trustees & Institutional Leadership" },
  { label: "CONTACT US", href: "/contact", description: "Registered Office, Enquiries & Collaboration" },
];

export const INSTITUTION_INFO = {
  name: "Dakshak Itihas Nidhi",
  acronym: "DIN",
  tagline: "Preserving History. Encouraging Research. Building Historical Consciousness.",
  established: "Est. 2014",
  subtitle: "Historical and Archival Research Institution",
  regNo: "Reg. No. E-32948 / Scholarly Trust",
  address: "Heritage Research Wing, Fort Campus, Mumbai, Maharashtra 400001",
  email: "directorate@dakshakitihasnidhi.org",
  phone: "+91 (022) 2284-5900",
  hours: "Monday – Friday: 09:30 AM – 05:30 PM IST",
};
