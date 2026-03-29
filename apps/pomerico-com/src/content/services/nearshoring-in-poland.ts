import type { ServicePageData } from "@pomerico/content";

export const data: ServicePageData & {
  whatWeHandle: {
    heading: string;
    superheading?: string;
    description: string;
    subsections: { heading: string; description: string }[];
  };
} = {
  slug: "nearshoring-in-poland",
  title: "Nearshoring in Poland",
  metaDescription:
    "Build high-quality, cost-efficient teams in Poland-fast, safely and without operational complexity.",
  hero: {
    heading: "Nearshoring in Poland",
    description:
      "<p><b>Build high-quality, cost-efficient teams in Poland-fast, safely and without operational complexity.</b></p><p>Poland is one of Europe's top nearshoring destinations, offering world-class talent, competitive costs, strong English skills, EU-level compliance and exceptional business reliability.<br/>Pomerico helps global companies build and scale nearshore teams in IT, Finance, Operations, Data, Customer Support and Engineering-without the need for local infrastructure.</p><p>We provide recruitment, HR, payroll, legal compliance, EOR/PEO employment, contracting and full operational support-so you can focus on delivery while we take care of everything else.</p>",
    iconList: [
      { bold: "Reduced internal workload -", text: "Pomerico manages recruitment, HR, payroll, legal compliance, and operational support, so you can focus on core business without administrative burden." },
      { bold: "Faster operational outcomes -", text: "Teams are built and onboarded in weeks, not months, ensuring immediate productivity and seamless integration into your operations." },
      { bold: "Reliable performance delivery -", text: "Stable, highly motivated teams with 0-7% turnover guarantee consistent quality, efficiency, and project success." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-recruitment-process.png", heading: "Access to Top Talent in the EU", description: "Poland is known for its highly skilled workforce, excellent universities and strong engineering culture. Nearshore teams deliver high productivity and Western-standard quality." },
    { icon: "/images/icon-shield-employer-compliance.png", heading: "More cost-effective - even up to 40% compared to Western Europe.", description: "Polish specialists deliver world-class expertise at a highly competitive cost, allowing companies to optimize budgets while boosting operational efficiency and accelerating business outcomes." },
    { icon: "/images/icon-workflow-process-automation.png", heading: "Full Legal Compliance (EU & Polish Labour Law)", description: "We manage all HR, payroll, contracts and compliance - ensuring your operations are fully aligned with EU standards." },
    { icon: "/images/icon-checklist-regulatory-compliance.png", heading: "Multiple Employment Models", description: "EOR, PEO, Body Leasing, Contracting, Permanent Hire. Choose the setup that fits your business - we manage the rest." },
    { icon: "/images/icon-brain-it-expertise.png", heading: "Proximity, Time Zone Alignment & Strong Communication", description: "Poland shares overlapping hours with all European markets, providing seamless collaboration and cultural compatibility." },
  ],
  targetAudience: {
    heading: "Who Is Nearshoring in Poland for?",
    description: "Build high-quality, cost-efficient teams in Poland - fast, safely and without operational complexity.",
    items: [
      { bold: "Companies expanding tech, finance or operations teams -", text: "Ideal for scaling without internal recruitment constraints." },
      { bold: "Businesses wanting EU-level quality at competitive cost -", text: "Poland is significantly more cost-efficient than Western Europe while offering high standards." },
      { bold: "Firms planning long-term delivery or transformation projects -", text: "Stable teams with low turnover ensure predictable output." },
      { bold: "Companies without local HR/Payroll/Legal capacity -", text: "We take over all operational, legal and employment complexity." },
      { bold: "International companies entering Poland gradually -", text: "Start with nearshore teams and transition to an entity later-or stay fully outsourced." },
    ],
  },
  tagline: {
    heading: "Build high-performing, cost-efficient teams in Poland quickly, safely, and without operational complexity \u2013 so you can focus on delivery and growth.",
    description: "Access top European talent, reduce overhead, and scale your operations seamlessly with our end-to-end support.",
  },
  process: {
    heading: "Cooperation process",
    steps: [
      { number: "01.", heading: "Needs Analysis & Nearshoring Strategy", description: "We begin by understanding your business goals, project scope, team structure, technologies, timelines and hiring priorities. You receive a transparent roadmap outlining recommended roles, expected availability, costs and cooperation models (EoR, contracting, permanent hire, hybrid)." },
      { number: "02.", heading: "Cooperation design", description: "Pomerico prepares a tailored acquisition plan for your roles. We define: required competencies and seniority, success indicators for each role, behavioural and cultural expectations, technical stack and delivery needs." },
      { number: "03.", heading: "Employment Model Selection", description: "Together we choose the structure that fits your strategy:\n\nEOR \u2013 fastest hire, no local entity needed;\nContracting / Staff Augmentation \u2013 maximum flexibility\nPermanent recruitment \u2013 long-term team building\nHybrid \u2013 mix of models for optimal cost & stability. All legal, payroll and compliance elements are handled by Pomerico." },
      { number: "04.", heading: "Onboarding & Operational Integration", description: "We coordinate all formalities. Your nearshore team becomes fully operational and integrated with your workflows, tools, rituals and communication style." },
      { number: "05.", heading: "Ongoing HR, Payroll & Delivery Support", description: "Your team focuses on execution - we handle everything else." },
      { number: "06.", heading: "Your team focuses on execution - we handle everything else", description: "As your operations grow, Pomerico rapidly expands your nearshore team - whether you need one additional specialist, a full squad or multi-department expansion. Scaling is smooth, compliant and fully supported operationally." },
    ],
  },
  details: {
    heading: "How it works?",
    cards: [
      { icon: "/images/icon-recruitment-talent-search.png", heading: "Recruitment", description: "We find specialists you can't reach on your own-from engineers to analysts and IT experts." },
      { icon: "/images/icon-handshake-partnership-reliability.png", heading: "Employment", description: "We hire them under compliant contracts, manage payroll, and ensure full legal security." },
      { icon: "/images/icon-puzzle-team-integration.png", heading: "Onboarding", description: "We introduce your new employees to the team and your company culture." },
      { icon: "/images/icon-strategy-market-entry.png", heading: "Operations", description: "We manage day-to-day HR, motivation, office setup, and equipment." },
      { icon: "/images/icon-shield-compliance-protection.png", heading: "Support", description: "You get continuous care from our experts who act as your in-house team." },
    ],
  },
  testimonials: [
    {
      quote: "They demonstrated loyalty on more than one occasion and carried out tasks exceeding our expectations, making decisions that were appropriate for the employer, not necessarily in their own interest. Before we started working with Pomerico, we had collaborated with many other agencies. I can confidently confirm, based on our experience, that this is the most reliable, effective, and trustworthy company.",
      author: "Micha\u0142 Karopowicz",
      role: "COO",
      company: "Babord VAP",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
  whatWeHandle: {
    superheading: "Build your nearshore team. Let us handle the rest.",
    heading: "What we handle for you?",
    description: "You don\u2019t have to think about hiring, taxes, or formalities\u2014 we do it all for you.\n\nImagine having all your operations in one place \u2013 with no stress about employment, contracts, payroll, or compliance.\nWith Pomerico, you get a full end-to-end service that lets you focus entirely on growing your business.",
    subsections: [
      {
        heading: "Your dedicated local partner",
        description: "You\u2019ll have a dedicated Project Manager who understands your business, reacts quickly, and manages your entire team in Poland.\nWe provide full HR, payroll, and legal support, plus direct contact whenever you need us.\n\nOur deep local know-how means we can optimize your processes and employment model, so your operations run smoother and more efficiently.",
      },
    ],
  },
};
