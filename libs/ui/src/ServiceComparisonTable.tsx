"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

type CellType = "yes" | "no" | "partial" | "txt";

interface Cell {
  type: CellType;
  label: string;
}

interface DataRow {
  kind: "data";
  feature: string;
  tags: string[];
  cells: Cell[];
}

interface CategoryRow {
  kind: "category";
  label: string;
}

type Row = DataRow | CategoryRow;

const columns = [
  {
    badge: "Employment",
    name: "EOR",
    desc: "Employer of Record — Pomerico is the legal employer",
    href: "/services/eor-employer-of-record",
    group: "employment",
  },
  {
    badge: "Employment",
    name: "EOR + Onsite",
    desc: "EOR with dedicated onsite management & coordination",
    href: "/services/eor-on-site",
    group: "employment",
  },
  {
    badge: "Employment",
    name: "PEO",
    desc: "Professional Employer Org — shared co-employment",
    href: "/services/peo-professional-employer-organization",
    group: "employment",
  },
  {
    badge: "Outsourcing",
    name: "BPO",
    desc: "Business Process Outsourcing — full process ownership",
    href: "/services/bpo-business-process-outsourcing",
    group: "outsourcing",
  },
  {
    badge: "Outsourcing",
    name: "Finance Outsourcing",
    desc: "Finance & Contracting — skilled finance professionals",
    href: "/services/finance-outsourcing-contracting",
    group: "outsourcing",
  },
  {
    badge: "Outsourcing",
    name: "HR Outsourcing",
    desc: "HR Outsourcing & Consulting — strategic HR support",
    href: "/services/hr-outsourcing-consulting",
    group: "outsourcing",
  },
  {
    badge: "Staffing",
    name: "Body Leasing",
    desc: "Staff Augmentation — specialists on demand",
    href: "/services/body-leasing-staff-augmentation",
    group: "staffing",
  },
  {
    badge: "Staffing",
    name: "RPO / Recruitment",
    desc: "Recruitment Process Outsourcing — end-to-end hiring",
    href: "/services/recruitment-services-rpo",
    group: "staffing",
  },
  {
    badge: "Staffing",
    name: "Nearshoring",
    desc: "Dedicated teams in Poland, EU location, your time zone",
    href: "/services/nearshoring-in-poland",
    group: "staffing",
  },
  {
    badge: "Advisory",
    name: "Market Entry",
    desc: "Legal, tax & HR setup to launch operations in Poland",
    href: "/services/market-entry-in-poland",
    group: "advisory",
  },
  {
    badge: "Advisory",
    name: "Business Consulting",
    desc: "Tax & Law — Polish regulations & compliance advisory",
    href: "/services/business-consulting-tax-law",
    group: "advisory",
  },
  {
    badge: "IT & Tech",
    name: "IT Contracting",
    desc: "Skilled IT professionals for project or ongoing tech work",
    href: "/services/it-contracting",
    group: "it",
  },
];

// Column order: EOR | EOR+Onsite | PEO | BPO | Finance Out. | HR Out. | Body Leasing | RPO/Recruit. | Nearshoring | Market Entry | Biz Consulting | IT Contracting
const rows: Row[] = [
  { kind: "category", label: "Employment & Legal" },
  { kind: "data", feature: "No local entity required", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "Not required" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Supported" }, { type: "partial", label: "Advisory only" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "Pomerico is the legal employer", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes — fully" }, { type: "yes", label: "Yes — fully" }, { type: "partial", label: "Shared" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Optional" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "Client retains employer status", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "partial", label: "Optional" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "yes", label: "Yes — after setup" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" },
  ]},
  { kind: "data", feature: "Full EU / Polish law compliance", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Partial" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes — core focus" }, { type: "yes", label: "Yes — core focus" }, { type: "yes", label: "Yes" },
  ]},

  { kind: "category", label: "HR & Payroll" },
  { kind: "data", feature: "Payroll managed by Pomerico", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "HR admin (contracts, leave, benefits)", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Full" }, { type: "yes", label: "Full" }, { type: "yes", label: "Full" }, { type: "yes", label: "Full" }, { type: "yes", label: "Full" }, { type: "yes", label: "Core service" }, { type: "yes", label: "Full" }, { type: "no", label: "No" }, { type: "yes", label: "Full" }, { type: "partial", label: "Setup only" }, { type: "no", label: "No" }, { type: "yes", label: "Full" },
  ]},
  { kind: "data", feature: "Dedicated HR Business Partner", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "On request" }, { type: "yes", label: "Yes" }, { type: "partial", label: "On request" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "Onsite manager / coordinator provided", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "no", label: "No" }, { type: "yes", label: "Yes — core feature" }, { type: "no", label: "No" }, { type: "partial", label: "Optional" }, { type: "no", label: "No" }, { type: "partial", label: "Optional" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" },
  ]},

  { kind: "category", label: "Talent & Recruitment" },
  { kind: "data", feature: "Recruitment included (no extra fee)", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes — free" }, { type: "yes", label: "Yes — free" }, { type: "yes", label: "Yes — free" }, { type: "yes", label: "Yes — free" }, { type: "yes", label: "Yes — free" }, { type: "partial", label: "Included" }, { type: "yes", label: "Yes — free" }, { type: "yes", label: "Core service" }, { type: "yes", label: "Yes — free" }, { type: "partial", label: "Optional" }, { type: "no", label: "No" }, { type: "yes", label: "Yes — free" },
  ]},
  { kind: "data", feature: "Direct Search / hidden market access", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Selective" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "Onboarding managed by Pomerico", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" },
  ]},

  { kind: "category", label: "Flexibility & Scale" },
  { kind: "data", feature: "Minimum team / engagement size", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "txt", label: "1 person" }, { type: "txt", label: "1 person" }, { type: "txt", label: "1 person" }, { type: "txt", label: "1 process" }, { type: "txt", label: "1 person" }, { type: "txt", label: "1 function" }, { type: "txt", label: "1 person" }, { type: "txt", label: "1 role" }, { type: "txt", label: "1 team" }, { type: "txt", label: "1 project" }, { type: "txt", label: "1 project" }, { type: "txt", label: "1 person" },
  ]},
  { kind: "data", feature: "Typical time to deployment", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "txt", label: "1–3 weeks" }, { type: "txt", label: "2–4 weeks" }, { type: "txt", label: "1–3 weeks" }, { type: "txt", label: "2–4 weeks" }, { type: "txt", label: "1–2 weeks" }, { type: "txt", label: "1–2 weeks" }, { type: "txt", label: "Days" }, { type: "txt", label: "2–6 weeks" }, { type: "txt", label: "4–8 weeks" }, { type: "txt", label: "4–12 weeks" }, { type: "txt", label: "1–2 weeks" }, { type: "txt", label: "Days–1 week" },
  ]},
  { kind: "data", feature: "Scale up / down without long-term commitment", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Moderate" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "High flexibility" }, { type: "partial", label: "Per project" }, { type: "yes", label: "Yes" }, { type: "no", label: "One-time" }, { type: "partial", label: "Per mandate" }, { type: "yes", label: "High flexibility" },
  ]},
  { kind: "data", feature: "Remote / hybrid / on-site support", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "partial", label: "Client-led" }, { type: "yes", label: "All models" }, { type: "partial", label: "On-site preferred" }, { type: "partial", label: "Remote / hybrid" }, { type: "yes", label: "All models" },
  ]},

  { kind: "category", label: "Billing & Cost" },
  { kind: "data", feature: "Fixed monthly invoice (predictable cost)", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Project-based" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Project-based" }, { type: "partial", label: "Per mandate" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "Cost savings vs. Western Europe", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "txt", label: "Up to 40%" }, { type: "txt", label: "Up to 40%" }, { type: "txt", label: "Up to 40%" }, { type: "txt", label: "30–50%" }, { type: "txt", label: "30–45%" }, { type: "txt", label: "30–40%" }, { type: "txt", label: "Up to 40%" }, { type: "txt", label: "Variable" }, { type: "txt", label: "Up to 50%" }, { type: "txt", label: "N/A" }, { type: "txt", label: "N/A" }, { type: "txt", label: "Up to 50%" },
  ]},
  { kind: "data", feature: "Zero hidden admin / compliance costs", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Fixed scope" }, { type: "partial", label: "Fixed scope" }, { type: "yes", label: "Yes" },
  ]},

  { kind: "category", label: "Process Management" },
  { kind: "data", feature: "Full process ownership by Pomerico", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "partial", label: "Hiring process" }, { type: "partial", label: "Team mgmt" }, { type: "yes", label: "Yes — setup" }, { type: "partial", label: "Advisory" }, { type: "no", label: "No" },
  ]},
  { kind: "data", feature: "Client manages daily tasks & goals", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No — Pomerico" }, { type: "partial", label: "Shared" }, { type: "partial", label: "Shared" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "KPI / SLA reporting included", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "partial", label: "Monthly" }, { type: "yes", label: "Full KPI/SLA" }, { type: "partial", label: "Monthly" }, { type: "yes", label: "Full KPI/SLA" }, { type: "yes", label: "Full KPI/SLA" }, { type: "yes", label: "Full KPI/SLA" }, { type: "partial", label: "Monthly" }, { type: "partial", label: "Per project" }, { type: "partial", label: "Monthly" }, { type: "partial", label: "Milestone-based" }, { type: "partial", label: "Per mandate" }, { type: "partial", label: "Per project" },
  ]},

  { kind: "category", label: "Advisory & Market Entry" },
  { kind: "data", feature: "Entity formation / registration support", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes — core" }, { type: "partial", label: "Advisory" }, { type: "no", label: "No" },
  ]},
  { kind: "data", feature: "Tax & legal advisory (Polish regulations)", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "partial", label: "Compliance" }, { type: "partial", label: "Compliance" }, { type: "partial", label: "Compliance" }, { type: "no", label: "No" }, { type: "partial", label: "Finance law" }, { type: "partial", label: "Labour law" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes — core" }, { type: "yes", label: "Yes — core" }, { type: "no", label: "No" },
  ]},
  { kind: "data", feature: "Business strategy & growth consulting", tags: ["employment", "outsourcing", "staffing", "advisory", "it"], cells: [
    { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "partial", label: "HR strategy" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes — core" }, { type: "yes", label: "Yes — core" }, { type: "no", label: "No" },
  ]},
];

const bestFor = [
  "International companies hiring in Poland without opening an entity. Fast market entry.",
  "Companies needing EOR plus active onsite presence, coordination and daily team management in Poland.",
  "Companies wanting HR admin offloaded while retaining employer status and full operational control.",
  "Organizations outsourcing entire departments: HR, Finance, IT, Back-Office, Marketing.",
  "Companies needing reliable finance professionals integrated into existing workflows with full compliance.",
  "Growing companies that need strategic HR support — from recruitment to retention and org development.",
  "Teams needing specific specialists fast — IT, Finance, HR, Operations — short or long-term.",
  "Companies that want to hire permanently and need an end-to-end recruitment partner.",
  "Companies leveraging Poland's skilled workforce and EU location for cost-effective remote team building.",
  "Foreign companies launching operations in Poland — from entity setup to hiring the first local team.",
  "International businesses navigating Polish tax law, regulatory compliance, and business strategy.",
  "Companies needing skilled developers, engineers or tech leads for project-based or ongoing IT work.",
];

const filters = [
  { label: "All Services", value: "all" },
  { label: "Employment Models", value: "employment" },
  { label: "Outsourcing", value: "outsourcing" },
  { label: "Talent & Staffing", value: "staffing" },
  { label: "Advisory & Market Entry", value: "advisory" },
  { label: "IT & Tech", value: "it" },
];

const cellColors: Record<CellType, string> = {
  yes: "text-primary-blue",
  no: "text-dark/40",
  partial: "text-dark/60",
  txt: "text-dark/60",
};

const dotColors: Record<CellType, string> = {
  yes: "bg-primary-blue",
  no: "bg-dark/30",
  partial: "bg-dark/40",
  txt: "",
};

function CellDisplay({ cell }: { cell: Cell }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${cellColors[cell.type]}`}>
      {cell.type !== "txt" && (
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColors[cell.type]}`} />
      )}
      {cell.label}
    </span>
  );
}

export function ServiceComparisonTable() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleColumns = activeFilter === "all"
    ? columns
    : columns.filter((col) => col.group === activeFilter);

  const visibleColumnIndices = visibleColumns.map((col) => columns.indexOf(col));

  const isRowVisible = (_row: Row): boolean => true;

  return (
    <section className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          heading={"Which Cooperation Model\nIs Right for You?"}
          subtitle="Compare our employment and outsourcing models side-by-side to find the setup that best matches your business goals."
        />

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-full border px-4 py-1.5 font-ui text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === f.value
                  ? "border-primary-blue bg-primary-blue text-white"
                  : "border-dark/15 bg-white text-dark/60 hover:border-primary-blue hover:text-primary-blue"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-dark/10 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1400px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-dark/10 bg-gray-bg">
                  <th className="min-w-[180px] p-4 text-left text-xs font-semibold uppercase tracking-wider text-dark/50" />
                  {visibleColumns.map((col) => (
                    <th key={col.name} className="border-l border-dark/5 p-4 text-left align-top">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-dark/40">
                        {col.badge}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-dark">{col.name}</span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-dark/50">{col.desc}</span>
                      <Link
                        href={col.href}
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-primary-red hover:underline"
                      >
                        Learn more
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  if (!isRowVisible(row)) return null;

                  if (row.kind === "category") {
                    return (
                      <tr key={`cat-${i}`} className="bg-gray-bg">
                        <td colSpan={visibleColumns.length + 1} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-dark/60">
                          {row.label}
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={`row-${i}`} className="border-b border-dark/5 transition-colors hover:bg-gray-bg/60 even:bg-gray-bg/30">
                      <td className="border-r border-dark/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-dark/70">
                        {row.feature}
                      </td>
                      {visibleColumnIndices.map((ci) => (
                        <td key={ci} className="border-r border-dark/5 px-4 py-3 text-center last:border-r-0">
                          <CellDisplay cell={row.cells[ci]} />
                        </td>
                      ))}
                    </tr>
                  );
                })}

                {/* Best for row */}
                <tr className="border-t border-dark/10 bg-primary-blue/5">
                  <td className="px-4 py-3.5 text-xs font-bold uppercase tracking-widest text-primary-blue">
                    Best for
                  </td>
                  {visibleColumnIndices.map((i) => (
                    <td key={i} className="border-l border-dark/5 px-4 py-3.5 align-top text-xs leading-relaxed text-dark/60">
                      {bestFor[i]}
                    </td>
                  ))}
                </tr>

                {/* CTA row */}
                <tr className="border-t border-dark/10 bg-gray-bg">
                  <td className="px-4 py-4 text-sm text-dark/50">
                    Not sure which fits?
                  </td>
                  {visibleColumns.map((col) => (
                    <td key={col.name} className="border-l border-dark/5 px-4 py-4 text-center">
                      <Link
                        href={col.href}
                        className="inline-block rounded bg-primary-red px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-red/90"
                      >
                        Learn More
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-5 text-xs text-dark/50">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-blue" /> Yes / Fully included
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-dark/40" /> Partially / on request
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-dark/30" /> No / Not applicable
          </span>
        </div>
      </div>
    </section>
  );
}
