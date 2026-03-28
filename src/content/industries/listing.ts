import type { ServiceCard, IconListItem } from "@/content/types";

export const industriesListingHero = {
  heading: "Building Teams, Optimizing Operations, Driving Growth",
  description:
    "Pomerico partners with companies across industries to build high-performing teams, streamline operations, and optimize processes. From manufacturing and logistics to finance and IT, we provide tailored solutions that enhance efficiency, ensure compliance, and drive sustainable growth. Our expertise helps businesses scale confidently, solve operational challenges, and achieve measurable results.",
  iconList: [
    { bold: "Support industrial", text: "and manufacturing companies in building high-performing teams" },
    { bold: "Streamline operations", text: "to improve efficiency, reduce complexity, and accelerate project delivery" },
    { bold: "Optimize processes", text: "across logistics, production, finance, and HR functions" },
    { bold: "Ensure compliance", text: "with industry regulations and internal standards" },
    { bold: "Enable scalability", text: "so your operations can grow sustainably while maintaining performance" },
    { bold: "Access expertise", text: "specialists in engineering, IT, finance, and operational management" },
  ] satisfies IconListItem[],
  trustImage: "/images/pomerico-trusted-partner-badges.svg",
};

export const allIndustryCards: ServiceCard[] = [
  { icon: "/images/icon-gears-system-integration.png", heading: "Intralogistics", description: "Building skilled maintenance, operations, and engineering teams for automated warehousing, distribution centres, and supply chain facilities across Europe.", href: "/industries/intralogistics" },
  { icon: "/images/icon-person-growth-performance.png", heading: "Banking & Insurance", description: "Providing compliance-ready finance, risk, and operations professionals for banks, insurers, and fintech companies operating in Poland and the EU.", href: "/industries/banking-insurance" },
  { icon: "/images/icon-brain-it-expertise.png", heading: "Information Technology", description: "Sourcing developers, engineers, DevOps specialists, and IT leaders for software houses, SaaS platforms, and enterprise technology teams.", href: "/industries/information-technology" },
  { icon: "/images/icon-wrench-reduced-turnover.png", heading: "Manufacturing & Industry", description: "Recruiting production managers, quality engineers, and technical specialists for manufacturing plants, industrial facilities, and production lines.", href: "/industries/manufacturing-industry" },
  { icon: "/images/icon-puzzle-team-integration.png", heading: "Shared Services / BPO", description: "Staffing and managing shared service centres, outsourcing hubs, and BPO operations with scalable teams across finance, HR, and customer support.", href: "/industries/shared-services-bpo" },
];
