import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog/listing";

/** Blog listing dates are "DD/MM/YYYY" strings. Returns undefined (no <lastmod>) on a malformed
 *  or out-of-range date (Date.UTC would silently roll "32/10" over to 1 Nov) instead of an
 *  Invalid Date, which would throw in toISOString() and fail the whole build. */
function parsePostDate(date: string): Date | undefined {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(date);
  if (!match) return undefined;
  const [day, month, year] = match.slice(1).map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  const roundTrips =
    parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
  return roundTrips ? parsed : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pomerico.com";
  // No `lastModified` on evergreen pages: a build-time `new Date()` on every URL is noise
  // that Google learns to ignore. Blog posts carry their real publication date.

  const services = [
    "bpo-business-process-outsourcing",
    "finance-outsourcing-contracting",
    "peo-professional-employer-organization",
    "body-leasing-staff-augmentation",
    "hr-outsourcing-consulting",
    "eor-employer-of-record",
    "eor-on-site",
    "recruitment-services-rpo",
    "it-contracting",
    "market-entry-in-poland",
    "business-consulting-tax-law",
    "nearshoring-in-poland",
  ];

  const industries = [
    "intralogistics",
    "banking-insurance",
    "information-technology",
    "manufacturing-industry",
    "shared-services-bpo",
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

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about-us`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.6 },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: parsePostDate(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/gdpr-information-clause`, changeFrequency: "yearly", priority: 0.2 },
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...industries.map((slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...caseStudies.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
