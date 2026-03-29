import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

export interface ComparisonTableColumn {
  name: string;
  tagline?: string;
  highlight?: "good" | "bad";
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
  return <span className="text-dark">{value.text}</span>;
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

        <div className="overflow-hidden rounded-lg border border-dark/10 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-dark/10 bg-gray-bg">
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-dark/50" />
                  {columns.map((col) => (
                    <th
                      key={col.name}
                      className={`p-4 text-left align-top ${
                        col.highlight === "good"
                          ? "bg-blue-50"
                          : col.highlight === "bad"
                            ? "bg-red-50"
                            : ""
                      }`}
                    >
                      <span
                        className={`block text-sm font-bold ${
                          col.highlight === "good"
                            ? "text-blue-700"
                            : col.highlight === "bad"
                              ? "text-red-700"
                              : "text-dark"
                        }`}
                      >
                        {col.name}
                      </span>
                      {col.tagline && (
                        <span className="mt-1 block text-xs font-normal text-dark/50">
                          {col.tagline}
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
                          className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-dark/60"
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
                      <td className="border-r border-dark/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-dark/70">
                        {row.label}
                      </td>
                      {row.values.map((val, vi) => (
                        <td
                          key={vi}
                          className={`px-4 py-3 leading-relaxed border-r border-dark/5 last:border-r-0 ${
                            columns[vi]?.highlight === "good"
                              ? "bg-blue-50/30 font-semibold text-dark"
                              : columns[vi]?.highlight === "bad"
                                ? "bg-red-50/30 text-dark/70"
                                : "text-dark/70"
                          }`}
                        >
                          <CellValue value={val} />
                        </td>
                      ))}
                    </tr>
                  );
                })}

                {/* CTA row */}
                {ctaLabel && ctaHref && (
                  <tr className="border-t border-dark/10 bg-gray-bg">
                    <td className="px-4 py-5 text-sm font-normal text-dark/60">
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
                            className="inline-block rounded border border-dark/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-dark/70 transition-colors hover:bg-dark/5"
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
          <p className="mt-4 text-xs leading-relaxed text-dark/60">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
