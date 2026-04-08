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
  },
  {
    badge: "Employment",
    name: "PEO",
    desc: "Professional Employer Org — shared co-employment",
    href: "/services/peo-professional-employer-organization",
  },
  {
    badge: "Staffing",
    name: "Body Leasing",
    desc: "Staff Augmentation — specialists on demand",
    href: "/services/body-leasing-staff-augmentation",
  },
  {
    badge: "Outsourcing",
    name: "BPO",
    desc: "Business Process Outsourcing — full process ownership",
    href: "/services/bpo-business-process-outsourcing",
  },
  {
    badge: "Staffing",
    name: "RPO / Recruitment",
    desc: "Recruitment Process Outsourcing — end-to-end hiring",
    href: "/services/recruitment-services-rpo",
  },
];

const rows: Row[] = [
  { kind: "category", label: "Employment & Legal" },
  { kind: "data", feature: "No local entity required", tags: ["employment", "talent", "outsourcing"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "Not required" },
  ]},
  { kind: "data", feature: "Pomerico is the legal employer", tags: ["employment"], cells: [
    { type: "yes", label: "Yes — fully" }, { type: "partial", label: "Shared" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" },
  ]},
  { kind: "data", feature: "Client retains employer status", tags: ["employment"], cells: [
    { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "Full EU / Polish law compliance", tags: ["employment"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Partial" },
  ]},

  { kind: "category", label: "HR & Payroll" },
  { kind: "data", feature: "Payroll managed by Pomerico", tags: ["employment", "outsourcing"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" },
  ]},
  { kind: "data", feature: "HR admin (contracts, leave, benefits)", tags: ["employment", "outsourcing"], cells: [
    { type: "yes", label: "Full" }, { type: "yes", label: "Full" }, { type: "yes", label: "Full" }, { type: "yes", label: "Full" }, { type: "no", label: "No" },
  ]},
  { kind: "data", feature: "Dedicated HR Business Partner", tags: ["employment", "outsourcing"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "On request" },
  ]},

  { kind: "category", label: "Talent & Recruitment" },
  { kind: "data", feature: "Recruitment included (no extra fee)", tags: ["talent", "employment", "outsourcing"], cells: [
    { type: "yes", label: "Yes — free" }, { type: "yes", label: "Yes — free" }, { type: "partial", label: "Included" }, { type: "partial", label: "Optional" }, { type: "yes", label: "Core service" },
  ]},
  { kind: "data", feature: "Direct Search / hidden market access", tags: ["talent"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Selective" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "Onboarding managed by Pomerico", tags: ["talent"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" },
  ]},

  { kind: "category", label: "Flexibility & Scale" },
  { kind: "data", feature: "Minimum team size", tags: ["employment", "talent", "outsourcing"], cells: [
    { type: "txt", label: "1 person" }, { type: "txt", label: "1 person" }, { type: "txt", label: "1 person" }, { type: "txt", label: "1 process" }, { type: "txt", label: "1 role" },
  ]},
  { kind: "data", feature: "Typical time to deployment", tags: ["employment", "talent", "outsourcing"], cells: [
    { type: "txt", label: "1–3 weeks" }, { type: "txt", label: "1–3 weeks" }, { type: "txt", label: "Days" }, { type: "txt", label: "2–4 weeks" }, { type: "txt", label: "2–6 weeks" },
  ]},
  { kind: "data", feature: "Scale up / down without long-term commitment", tags: ["employment", "talent", "outsourcing"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "High flexibility" }, { type: "partial", label: "Moderate" }, { type: "partial", label: "Per project" },
  ]},
  { kind: "data", feature: "Remote / hybrid / on-site support", tags: ["employment", "talent", "outsourcing"], cells: [
    { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "yes", label: "All models" }, { type: "partial", label: "Client-led" },
  ]},

  { kind: "category", label: "Billing & Cost" },
  { kind: "data", feature: "Fixed monthly invoice (predictable cost)", tags: ["employment", "outsourcing"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "partial", label: "Project-based" },
  ]},
  { kind: "data", feature: "Cost savings vs. Western Europe", tags: ["employment", "outsourcing"], cells: [
    { type: "txt", label: "Up to 40%" }, { type: "txt", label: "Up to 40%" }, { type: "txt", label: "Up to 40%" }, { type: "txt", label: "30–33%" }, { type: "txt", label: "Variable" },
  ]},
  { kind: "data", feature: "Zero hidden admin / compliance costs", tags: ["employment", "outsourcing"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" },
  ]},

  { kind: "category", label: "Process Management" },
  { kind: "data", feature: "Full process ownership by Pomerico", tags: ["outsourcing"], cells: [
    { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "no", label: "No" }, { type: "yes", label: "Yes" }, { type: "no", label: "No" },
  ]},
  { kind: "data", feature: "Client manages daily tasks & goals", tags: ["outsourcing", "employment"], cells: [
    { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "yes", label: "Yes" }, { type: "no", label: "No — Pomerico" }, { type: "yes", label: "Yes" },
  ]},
  { kind: "data", feature: "KPI / SLA reporting included", tags: ["outsourcing"], cells: [
    { type: "partial", label: "Monthly" }, { type: "partial", label: "Monthly" }, { type: "partial", label: "Monthly" }, { type: "yes", label: "Full KPI/SLA" }, { type: "partial", label: "Per project" },
  ]},
];

const bestFor = [
  "International companies hiring in Poland without opening an entity. Fast market entry.",
  "Companies wanting HR admin offloaded while keeping employer status and control.",
  "Teams needing specific specialists fast. IT, Finance, HR, Operations. Short or long-term.",
  "Organizations outsourcing entire departments: HR, Finance, IT, Back-Office, Marketing.",
  "Companies that want to hire permanently and need an end-to-end recruitment partner.",
];

const filters = [
  { label: "All Models", value: "all" },
  { label: "Employment Models", value: "employment" },
  { label: "Outsourcing", value: "outsourcing" },
  { label: "Talent & Staffing", value: "talent" },
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

  const isRowVisible = (row: Row): boolean => {
    if (row.kind === "category") {
      const catIdx = rows.indexOf(row);
      for (let i = catIdx + 1; i < rows.length; i++) {
        const next = rows[i];
        if (next.kind === "category") break;
        if (next.kind === "data" && isDataRowVisible(next)) return true;
      }
      return false;
    }
    return isDataRowVisible(row as DataRow);
  };

  const isDataRowVisible = (row: DataRow): boolean => {
    if (activeFilter === "all") return true;
    return row.tags.includes(activeFilter);
  };

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
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-dark/10 bg-gray-bg">
                  <th className="min-w-[180px] p-4 text-left text-xs font-semibold uppercase tracking-wider text-dark/50" />
                  {columns.map((col) => (
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
                        <td colSpan={6} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-dark/60">
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
                      {row.cells.map((cell, ci) => (
                        <td key={ci} className="border-r border-dark/5 px-4 py-3 text-center last:border-r-0">
                          <CellDisplay cell={cell} />
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
                  {bestFor.map((text, i) => (
                    <td key={i} className="border-l border-dark/5 px-4 py-3.5 align-top text-xs leading-relaxed text-dark/60">
                      {text}
                    </td>
                  ))}
                </tr>

                {/* CTA row */}
                <tr className="border-t border-dark/10 bg-gray-bg">
                  <td className="px-4 py-4 text-sm text-dark/50">
                    Not sure which fits?
                  </td>
                  {columns.map((col) => (
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
