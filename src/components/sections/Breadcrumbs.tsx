import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://pomerico.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-bg"
      >
        <div className="mx-auto max-w-7xl px-6 py-3"
      >
        <ol className="flex flex-wrap items-center gap-1 font-ui text-base text-dark/50">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="text-dark/30"
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
