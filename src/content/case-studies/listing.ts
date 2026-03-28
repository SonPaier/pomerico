import type { CaseStudyCard } from "@/content/types";

export const caseStudiesListingHero = {
  heading: "Case Studies - Real Results for Our Clients",
  description:
    "Discover how Pomerico helps businesses across Europe build high-performing teams, enter new markets, and transform their HR operations. Each case study showcases our hands-on approach and measurable impact.",
  iconList: [] as { bold?: string; text: string }[],
  trustImage: "/images/pomerico-trusted-partner-badges.svg",
};

export const allCaseStudyCards: CaseStudyCard[] = [
  {
    slug: "hedepys-seamless-launch-in-poland-with-pomerico",
    title:
      "Market Entry Made Simple: Hedepy's Seamless Launch in Poland with Pomerico",
    industry: "Healthcare / Online Therapy",
    summary:
      "Czech-based online therapy platform Hedepy planned to expand into the Polish market. Pomerico delivered end-to-end EOR, legal, tax, and operational support.",
    image: "/images/hedepy-case-study-logo.jpg",
  },
  {
    slug: "comprehensive-hr-transformation-driving-growth",
    title: "HR Transformation at Datumo: Comprehensive Strategic Project",
    industry: "Technology",
    summary:
      "Pomerico delivered a 17+ phase HR transformation for Datumo covering recruitment systems, employer branding, organizational design, and performance metrics.",
    image: "/images/datumo-case-study-logo.jpg",
  },
  {
    slug: "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    title: "Recruiting a Strategic Sales Leader for Market Expansion",
    industry: "Intralogistics / Warehouse Automation",
    summary:
      "Kardex approached Pomerico with a strategically critical assignment -- to recruit a Country Sales Manager through structured executive search.",
    image: "/images/kardex-logo.png",
  },
  {
    slug: "60-hires-1600-applications-40000-people-reached",
    title: "60 Hires, 1,600 Applications, 40,000 People Reached",
    industry: "Food Processing / Production",
    summary:
      "Babord VAP entrusted Pomerico with recruiting 60 employees for a new production line through community engagement and creative field-based sourcing.",
    image: "/images/babord-case-study-logo.png",
  },
  {
    slug: "how-we-secured-a-quality-control-expert-in-just-weeks",
    title: "How We Secured a Quality Control Expert in Just Weeks",
    industry: "Industrial Construction",
    summary:
      "After four agencies rejected the assignment, Pomerico recruited a Quality Control Manager for Joong Won Poland within weeks.",
    image: "/images/joong-won-poland-logo.png",
  },
  {
    slug: "building-a-multidisciplinary-maintenance-team-for-automated-warehousing",
    title:
      "Building a Multidisciplinary Maintenance Team for Automated Warehousing",
    industry: "Intralogistics / Warehousing",
    summary:
      "SSI Schaefer entrusted Pomerico with building a 35-person maintenance team from scratch in just 3 months -- half the planned timeframe.",
    image: "/images/ssi-schaefer-case-study-logo.png",
  },
  {
    slug: "how-pomerico-ensured-a-successful-succession-and-hired-the-ideal-service-network-leader",
    title:
      "How Pomerico Ensured a Successful Succession and Hired the Ideal Service Network Leader",
    industry: "Transport Refrigeration / Automotive",
    summary:
      "Pomerico recruited a Service Network Manager for Apex Thermo King through multi-stage executive search, enabling a smooth succession to Service Director.",
    image: "/images/thermo-king-case-study-logo.png",
  },
];
