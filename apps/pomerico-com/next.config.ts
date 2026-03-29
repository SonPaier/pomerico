import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pomerico.com",
      },
    ],
  },
  async redirects() {
    return [
      // Service pages: flat → nested
      ...[
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
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/services/${slug}`,
        permanent: true,
      })),

      // Industry pages: flat → nested
      ...[
        "intralogistics",
        "banking-insurance",
        "information-technology",
        "manufacturing-industry",
        "shared-services-bpo",
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/industries/${slug}`,
        permanent: true,
      })),

      // Case study pages: flat → nested
      ...[
        "hedepys-seamless-launch-in-poland-with-pomerico",
        "comprehensive-hr-transformation-driving-growth",
        "recruiting-a-strategic-country-sales-manager-for-market-expansion",
        "60-hires-1600-applications-40000-people-reached",
        "how-we-secured-a-quality-control-expert-in-just-weeks",
        "building-a-multidisciplinary-maintenance-team-for-automated-warehousing",
        "cs-7-how-pomerico-ensured-a-successful-succession-and-hired-the-ideal-service-network-leader",
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/case-studies/${slug.replace("cs-7-", "")}`,
        permanent: true,
      })),

      // Blog posts: old slugs → new
      {
        source: "/7-factors",
        destination: "/blog/dora-vs-outsourcing",
        permanent: true,
      },
      {
        source: "/6-factors-thanks",
        destination: "/blog/how-to-hire-more-effectively",
        permanent: true,
      },
      {
        source: "/6-factors-2",
        destination: "/blog/how-to-hire-more-effectively",
        permanent: true,
      },
      // Duplicate blog posts → canonical
      ...["8-factors", "9-factors", "10-factors", "11-factors"].map((slug) => ({
        source: `/${slug}`,
        destination: "/blog/how-to-hire-more-effectively",
        permanent: true,
      })),

      // WP artifacts
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/single-industry-duplicated-ss",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
