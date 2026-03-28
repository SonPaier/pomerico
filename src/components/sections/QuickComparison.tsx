import Link from "next/link";

export interface QuickComparisonColumn {
  label: string;
  accent: "red" | "blue";
  points: { icon: string; bold: string; text: string }[];
}

export interface QuickComparisonProps {
  eyebrow: string;
  title: string;
  badge?: string;
  columns: [QuickComparisonColumn, QuickComparisonColumn];
  footerText?: string;
  footerLinkLabel?: string;
  footerLinkHref?: string;
}

export function QuickComparison({
  eyebrow,
  title,
  badge,
  columns,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: QuickComparisonProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded bg-dark shadow-lg">
          {/* Header */}
          <div className="flex flex-col items-start gap-3 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-red">
                {eyebrow}
              </p>
              <h3 className="mt-1 font-heading text-xl font-bold text-white">
                {title}
              </h3>
            </div>
            {badge && (
              <span className="whitespace-nowrap rounded-full border border-primary-red/30 bg-primary-red/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-red">
                {badge}
              </span>
            )}
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {columns.map((col, ci) => (
              <div
                key={ci}
                className={`px-6 py-6 ${
                  ci === 0
                    ? "border-b border-white/10 bg-primary-red/[0.04] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p
                  className={`mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                    col.accent === "red"
                      ? "text-primary-red"
                      : "text-primary-blue"
                  }`}
                >
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      col.accent === "red"
                        ? "bg-primary-red"
                        : "bg-primary-blue"
                    }`}
                  />
                  {col.label}
                </p>

                <div className="space-y-4">
                  {col.points.map((pt, pi) => (
                    <div key={pi} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-base">
                        {pt.icon}
                      </span>
                      <p className="text-sm leading-relaxed text-white/75">
                        <strong className="font-semibold text-white">
                          {pt.bold}
                        </strong>{" "}
                        {pt.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          {(footerText || footerLinkLabel) && (
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
              {footerText && (
                <span className="text-xs text-white/40">{footerText}</span>
              )}
              {footerLinkLabel && footerLinkHref && (
                <Link
                  href={footerLinkHref}
                  className="text-xs font-bold uppercase tracking-wider text-primary-red transition-colors hover:text-primary-red/80"
                >
                  {footerLinkLabel} &darr;
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
