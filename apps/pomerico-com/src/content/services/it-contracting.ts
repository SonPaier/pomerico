import type { ServicePageData } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "it-contracting",
  title: "IT Contracting",
  metaDescription:
    "Hire skilled IT contractors in Poland with Pomerico Group. Build flexible tech teams fast, reduce hiring risk, and scale on demand. Get started today.",
  hero: {
    heading: "IT Contracting",
    description:
      "<p><b>Build high-performing IT teams - flexibly, fast and without long-term hiring risk.</b></p><p>Pomerico delivers top-tier IT specialists on contract, giving your business the flexibility to scale, accelerate product delivery, support transformation projects and fill skill gaps instantly. You get the exact expertise you need - without the overhead of full-time hiring. We source niche talent, verify skills thoroughly and manage all HR, legal and payroll responsibilities, so your teams can stay fully focused on delivery.</p>",
    iconList: [
      { bold: "Flexible team scaling -", text: "Instantly expand or adjust your IT teams to meet project demands without hiring overhead." },
      { bold: "Accelerated project delivery -", text: "Get niche talent quickly to ensure faster deployment and seamless execution of IT projects." },
      { bold: "Secure and compliant operations -", text: "All HR, payroll, and legal responsibilities are managed, keeping your teams compliant and focused on delivery." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-operations-management.png", heading: "Faster Access to High-Quality IT Talent", description: "We deliver specialists in days or weeks - not months - thanks to Direct Search, proprietary sourcing funnels and a strong IT talent network." },
    { icon: "/images/icon-wrench-maintenance-services.png", heading: "Full Legal, Payroll & HR Support", description: "We handle contracts, payroll, taxes, HR care & engagement, compliance & documentation, onboarding & offboarding. You manage daily work - we manage everything else." },
    { icon: "/images/icon-magnifier-security-verification.png", heading: "Access to Talent Unavailable on the Market", description: "We reach passive candidates through Direct Search, behavioural profiling and multi-channel sourcing - including senior and niche specialists normally unavailable for standard agencies." },
    { icon: "/images/icon-checklist-project-delivery.png", heading: "Low Turnover (0-7%)", description: "Strong HR support, clear expectations and culture-fit alignment ensure long-term stability and performance on your projects." },
  ],
  targetAudience: {
    heading: "Who is IT Contracting for?",
    description: "Build high-performing IT teams - flexibly, fast and without long-term hiring risk.",
    items: [
      { bold: "Companies needing fast access to IT expertise -", text: "When internal hiring is too slow or too complex-especially for niche or senior roles." },
      { bold: "Businesses scaling tech teams for projects or product delivery -", text: "Ideal during development peaks, backlog expansion or launch phases." },
      { bold: "Organizations migrating to cloud or modernizing architecture -", text: "We deliver DevOps, Cloud Engineers, Data experts, Automation specialists and SAP/ERP professionals." },
      { bold: "Firms with unpredictable or seasonal workloads -", text: "Flexible contracting ensures you pay only for the skills you need." },
      { bold: "Companies wanting to avoid long-term employment commitments -", text: "Contracting reduces risk and increases agility." },
      { bold: "Businesses lacking internal recruitment capacity -", text: "We become your external IT sourcing engine-fast, accurate and cost-effective." },
    ],
  },
  tagline: {
    heading: "Your on-demand IT team",
    description: "Flexible, expert, and ready to support development, DevOps, and transformation projects with no long-term hiring risk.",
  },
  process: {
    heading: "Cooperation Process",
    steps: [
      { number: "01.", heading: "Discovery & Tech Analysis", description: "We define the role, responsibilities, stack, seniority, scope and timeline." },
      { number: "02.", heading: "Sourcing & Shortlisting", description: "Direct Search + sourcing campaigns + talent pool activation. Only verified, relevant IT specialists." },
      { number: "03.", heading: "Interviews & Selection", description: "You interview top candidates and choose the best fit." },
      { number: "04.", heading: "Contract Setup & Onboarding", description: "Pomerico handles all formalities, payroll and documentation." },
      { number: "05.", heading: "Delivery & HR Support", description: "Your contractor works with your team; we take care of HR, payroll and engagement." },
      { number: "06.", heading: "Scalability", description: "Add more engineers or specialists at any time - with no hiring bottlenecks." },
    ],
  },
  testimonials: [
    {
      quote: "I recommend Pomerico from the candidate and B2B Client side. As a Senior Engineer and Manager, I have had contact with many companies in the industry, in this case I am particularly pleased with the quality of services and individual approach. I appreciate their ethics in project management, customer relations and negotiations. An additional plus for communication and responsiveness.",
      author: "Michael Mańkowski",
      role: "Software Engineering Manager",
      company: "Adverity",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
};
