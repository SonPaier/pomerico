import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pomerico.com";
  const now = new Date();

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
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/blog/how-to-hire-more-effectively`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/blog/dora-vs-outsourcing`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/gdpr-information-clause`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...industries.map((slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...caseStudies.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
