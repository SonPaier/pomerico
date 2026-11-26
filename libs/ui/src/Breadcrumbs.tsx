import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Absolute origin used in the BreadcrumbList JSON-LD (no trailing slash) */
  siteUrl?: string;
  ariaLabel?: string;
}

export function Breadcrumbs({
  items,
  siteUrl = "https://pomerico.com",
  ariaLabel = "Breadcrumb",
}: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label={ariaLabel}
        className="bg-gray-bg"
      >
        <div className="mx-auto max-w-7xl px-6 py-3"
      >
        <ol className="flex flex-wrap items-center gap-1 font-ui text-base text-dark/70">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="text-dark/50"
                >
                  <path
                    d="M4.5 2.5L7.5 6L4.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary-blue"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-dark/80">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
        </div>
      </nav>
    </>
  );
}
