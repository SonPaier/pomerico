import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "body-leasing-staff-augmentation",
  title: "Body Leasing / Staff Augmentation",
  metaDescription:
    "Body Leasing is a flexible service where Pomerico assigns specialists from various fields - such as IT, HR, Finance or Marketing - to support your team.",
  hero: {
    heading: "Body Leasing / Staff Augmentation",
    description:
      "<p>Body Leasing is a <b>flexible service</b> where Pomerico assigns specialists from various fields - such as IT, HR, Finance or Marketing - to support your team. These experts can work <b>exclusively</b> for your company or on a flexible schedule, while remaining formally employed by Pomerico. This way, you avoid employment-related formalities and can quickly expand the delivery capacity of your project team.</p>",
    iconList: [
      { bold: "Flexible talent deployment -", text: "Pomerico provides specialists on-demand across IT, HR, Finance, and Marketing to expand your team quickly." },
      { bold: "Rapid project scaling -", text: "Experts work exclusively for your company on flexible schedules, enabling fast ramp-up of project capacity." },
      { bold: "Streamlined employment management -", text: "All employment, payroll, and compliance responsibilities are handled by Pomerico, letting your team focus on delivery." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-wrench-maintenance-services.png", heading: "Immediate Access to Experts", description: "Without recruitment costs." },
    { icon: "/images/icon-handshake-business-partnership.png", heading: "No HR Administration", description: "All employment and administrative processes are handled by Pomerico." },
    { icon: "/images/icon-person-growth-performance.png", heading: "Easy Team Scalability", description: "Quickly adjust project team size to current business needs." },
    { icon: "/images/icon-shield-compliance-protection.png", heading: "HR Support", description: "We assign a dedicated HR Business Partner to support project team management." },
    { icon: "/images/icon-puzzle-team-integration.png", heading: "Team Integration", description: "For exclusive projects, we build one joint team with your company, fully integrated into your organization." },
    { icon: "/images/icon-strategy-market-entry.png", heading: "Flexibility", description: "Hire specialists full-time or part-time, depending on your needs." },
  ],
  targetAudience: {
    heading: "Who Is Body Leasing / Staff Augmentation For?",
    description: "Body Leasing / Staff Augmentation from Pomerico is the perfect solution for organizations that want to strengthen their teams with highly skilled professionals, while maintaining maximum flexibility, speed and cost-efficiency.",
    items: [
      { bold: "Companies Expanding Their Teams Quickly -", text: "When you need developers, analysts, finance specialists, project managers or engineers now - not in 3\u20136 months." },
      { bold: "Organizations Facing Temporary Talent Gaps -", text: "Ideal during long-term absences, unexpected employee turnover, periods of high workload." },
      { bold: "Firms Needing Rare or Niche Expertise -", text: "When internal recruitment struggles to find specialists with specific skills (e.g. SQL, Python, SAP, Big Data, automation, niche finance roles). Pomerico excels in sourcing talent unavailable on job boards through Direct Search and advanced sourcing methods." },
      { bold: "Businesses That Don't Want to Build Internal HR or Recruitment -", text: "We take over the recruitment, verification, administration and HR support - you focus only on managing the work." },
      { bold: "Global Companies Scaling in Poland or CEE -", text: "Staff augmentation allows you to hire Polish experts without opening a local entity, using our legal and HR infrastructure." },
      { bold: "Startups and Scale-Ups During Fast Growth -", text: "When headcount needs to grow with product roadmap, sales pipeline or operational demand - instantly and flexibly." },
      { bold: "Organizations Facing High Turnover or Hiring Challenges -", text: "Pomerico provides stable teams with 0-7% yearly turnover, ensuring knowledge continuity and predictable delivery." },
      { bold: "Companies Wanting Cost Efficiency Without Reducing Quality -", text: "You get top-tier specialists at competitive rates - with no long-term contracts, payroll costs, or legal burden." },
    ],
  },
  tagline: {
    heading: "Your on-demand teams",
    description: "Pomerico's Body Leasing ensures fast, flexible, and reliable staffing solutions.",
  },
  process: {
    heading: "Cooperation Process",
    steps: [
      { number: "01.", heading: "Analysis & Diagnosis", description: "We begin by analyzing required skills and seniority, responsibilities and deliverables, necessary tools and stack, expected timeline & hours commitment, cultural and communication expectations. You receive a clear plan, pricing and delivery timeframes." },
      { number: "02.", heading: "Sourcing & Candidate Shortlisting", description: "Pomerico activates its advanced sourcing ecosystem. We specialize in reaching candidates unavailable on the open market." },
      { number: "03.", heading: "Selection & Contracting", description: "You select the specialist you want to work with." },
      { number: "04.", heading: "Onboarding & Integration", description: "Your specialist is onboarded in line with your processes, tools and expectations. Thanks to our strong onboarding frameworks, clients often experience 0% turnover in the first year." },
      { number: "05.", heading: "Daily Work & Performance Monitoring", description: "You manage daily tasks - we handle everything else. Pomerico provides ongoing HR support, motivation checks, and performance monitoring to ensure long-term quality and engagement." },
      { number: "06.", heading: "Reporting & Optimization", description: "You receive: monthly activity summaries, KPI & SLA performance, contract scalability options, recommendations for improvements." },
    ],
  },
  testimonials: [
    {
      quote: "Pomerico stands out for their reliability and efficiency thanks to which I know I can fully trust them in cooperation. Their effectiveness in HR, marketing and other strategic areas deserves recognition and is the reason for the impressive quality of their services. They're the best company that I've ever had the pleasure to work with in the sector. Highly recommended.",
      author: "Mikołaj Piec",
      role: "Owner",
      company: "Meta Automatic",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
};

export const faqItems: FAQItem[] = [
  {
    question: "What is Body Leasing/ Staff Augmentation in Poland and how does it work at Pomerico?",
    answer: "It's a fast and flexible way to add IT, HR, finance, or marketing experts to your projects. They remain employed by us but work fully integrated with your team."
  },
  {
    question: "How quickly can you provide specialists?",
    answer: "Often within days. Thanks to our proprietary candidate base and in-house sourcing team, we can deliver qualified experts faster than traditional recruitment agencies in Poland."
  },
  {
    question: "Why choose Pomerico for Body Leasing/ Staff Augmentation?",
    answer: "Because we combine speed with quality. Our projects show turnover below 7%, proving we don't just provide people - we provide stable, effective teams."
  },
];
