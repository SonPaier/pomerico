import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

export interface ComparisonTableColumn {
  name: string;
  tagline?: string;
  highlighted?: boolean;
  badge?: string;
}

export interface ComparisonTableRow {
  category?: string;
  label: string;
  values: (string | { text: string; type: "good" | "bad" | "neutral" })[];
}

export interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  columns: ComparisonTableColumn[];
  rows: ComparisonTableRow[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  footnote?: string;
}

function CellValue({
  value,
}: {
  value: string | { text: string; type: "good" | "bad" | "neutral" };
}) {
  if (typeof value === "string") {
    return <>{value}</>;
  }
  const colorClass =
    value.type === "good"
      ? "text-green-700"
      : value.type === "bad"
        ? "text-red-700"
        : "text-dark";
  return <span className={colorClass}>{value.text}</span>;
}

export function ComparisonTable({
  title,
  subtitle,
  columns,
  rows,
  ctaLabel,
  ctaHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  footnote,
}: ComparisonTableProps) {
  const totalCols = columns.length + 1; // +1 for label column

  return (
    <section className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader heading={title} subtitle={subtitle} />

        <div className="overflow-hidden rounded border border-dark/5 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-dark text-white">
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-white/50" />
                  {columns.map((col) => (
                    <th
                      key={col.name}
                      className={`p-4 text-left align-top ${
                        col.highlighted
                          ? "bg-primary-red/10"
                          : ""
                      }`}
                    >
                      <span
                        className={`block text-sm font-bold ${
                          col.highlighted
                            ? "text-primary-red"
                            : "text-white/70"
                        }`}
                      >
                        {col.name}
                      </span>
                      {col.tagline && (
                        <span className="mt-1 block text-xs font-normal text-white/50">
                          {col.tagline}
                        </span>
                      )}
                      {col.badge && (
                        <span className="mt-1.5 inline-block rounded-full bg-primary-red px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                          {col.badge}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  if (row.category) {
                    return (
                      <tr key={`cat-${i}`} className="bg-gray-bg">
                        <td
                          colSpan={totalCols}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-dark/40"
                        >
                          {row.category}
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr
                      key={`row-${i}`}
                      className="border-b border-dark/5 transition-colors hover:bg-gray-bg/60 even:bg-gray-bg/30"
                    >
                      <td className="border-r border-dark/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-dark/50">
                        {row.label}
                      </td>
                      {row.values.map((val, vi) => (
                        <td
                          key={vi}
                          className={`px-4 py-3 leading-relaxed ${
                            columns[vi]?.highlighted
                              ? "border-r border-dark/5 bg-primary-red/[0.03] font-semibold text-dark"
                              : "border-r border-dark/5 text-dark/70"
                          } last:border-r-0`}
                        >
                          <CellValue value={val} />
                        </td>
                      ))}
                    </tr>
                  );
                })}

                {/* CTA row */}
                {ctaLabel && ctaHref && (
                  <tr className="bg-dark">
                    <td className="px-4 py-5 text-sm font-normal text-white/50">
                      Not sure which fits?
                    </td>
                    <td
                      colSpan={columns.length}
                      className="px-4 py-5"
                    >
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={ctaHref}
                          className="inline-block rounded bg-primary-red px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-red/90"
                        >
                          {ctaLabel}
                        </Link>
                        {ctaSecondaryLabel && ctaSecondaryHref && (
                          <Link
                            href={ctaSecondaryHref}
                            className="inline-block rounded border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:bg-white/10"
                          >
                            {ctaSecondaryLabel}
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {footnote && (
          <p className="mt-4 text-xs leading-relaxed text-dark/40">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
