import type { MetadataRoute } from "next";
import type { NavItem, NavLink } from "@pomerico/content";
import {
  mainNav,
  footerCompanyLinks,
  footerServiceLinks,
  footerIndustryLinks,
} from "@/content/navigation";

const baseUrl = "https://pomerico.pl";

// Blog posts and case studies – same slugs as on pomerico.com (Polish versions live at the
// same paths). Dates are the English publication dates, "DD/MM/YYYY".
// TODO: once src/content/blog/listing.ts and src/content/case-studies/listing.ts exist in
// this app, build these lists from them instead.
const blogPosts: { slug: string; date: string }[] = [
  { slug: "ai-act-in-hr-and-recruitment", date: "23/11/2026" },
  { slug: "pay-transparency-before-the-act-enters-into-force", date: "18/11/2026" },
  { slug: "accounts-payable-process-documentation", date: "27/10/2026" },
  { slug: "accounts-payable-onboarding-mistakes", date: "21/10/2026" },
  { slug: "polish-sscs-and-scandinavian-expectations", date: "13/10/2026" },
  { slug: "recruiting-for-an-accounts-payable-team", date: "08/10/2026" },
  { slug: "what-an-ssc-finance-manager-really-wants-to-hear", date: "06/10/2026" },
  { slug: "hiring-in-poland", date: "30/09/2026" },
  { slug: "accounts-payable-under-pressure", date: "03/06/2026" },
  { slug: "how-to-hire-more-effectively", date: "24/02/2026" },
  { slug: "dora-vs-outsourcing", date: "24/02/2026" },
];

const caseStudies = [
  "hedepys-seamless-launch-in-poland-with-pomerico",
  "comprehensive-hr-transformation-driving-growth",
  "building-a-multidisciplinary-maintenance-team-for-automated-warehousing",
  "how-pomerico-ensured-a-successful-succession-and-hired-the-ideal-service-network-leader",
  "how-we-secured-a-quality-control-expert-in-just-weeks",
  "60-hires-1600-applications-40000-people-reached",
  "recruiting-a-strategic-country-sales-manager-for-market-expansion",
];

/** "DD/MM/YYYY" → Date; undefined (no <lastmod>) on a malformed or out-of-range date. */
function parsePostDate(date: string): Date | undefined {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(date);
  if (!match) return undefined;
  const [day, month, year] = match.slice(1).map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  const roundTrips =
    parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
  return roundTrips ? parsed : undefined;
}

type Entry = MetadataRoute.Sitemap[number];

/** Priority and change frequency by path, as on pomerico.com. */
function pageEntry(path: string): Entry {
  const url = path === "/" ? baseUrl : `${baseUrl}${path}`;
  if (path === "/") return { url, changeFrequency: "weekly", priority: 1 };
  if (path === "/about-us" || path === "/services") return { url, changeFrequency: "monthly", priority: 0.9 };
  if (path === "/case-studies") return { url, changeFrequency: "weekly", priority: 0.8 };
  if (path === "/industries" || path === "/contact") return { url, changeFrequency: "monthly", priority: 0.8 };
  if (path === "/blog") return { url, changeFrequency: "weekly", priority: 0.6 };
  if (path === "/faq") return { url, changeFrequency: "monthly", priority: 0.5 };
  if (path === "/privacy-policy" || path === "/gdpr-information-clause")
    return { url, changeFrequency: "yearly", priority: 0.2 };
  return { url, changeFrequency: "monthly", priority: 0.7 }; // service and industry pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Every page linked from the header and footer (deduplicated, in menu order).
  const navLinks: (NavItem | NavLink)[] = [
    ...mainNav.flatMap((item) => ("children" in item && item.children ? [item, ...item.children] : [item])),
    ...footerCompanyLinks,
    ...footerServiceLinks,
    ...footerIndustryLinks,
  ];
  const paths = [...new Set(navLinks.map((link) => link.href))];

  return [
    ...paths.map(pageEntry),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: parsePostDate(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...caseStudies.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
