import type { IndustryPageData } from "@pomerico/content";

export const data: IndustryPageData = {
  slug: "intralogistics",
  title: "Intralogistics",
  metaDescription:
    "Pomerico supports intralogistics companies in developing and scaling operations with optimized warehouse teams, rapid deployment, and full compliance.",
  hero: {
    heading: "Intralogistics",
    description:
      "<p>Since <b>2015</b>, we have been supporting intralogistics companies in developing and scaling their operations. Thanks to our extensive experience and <b>unique know-how</b>, we are a <b>strong partner for market leaders</b>.</p><p>We have a proven track record in intralogistics \u2013 for example, we were responsible for recruiting and building teams for the first fully automated <b>H&M</b> warehouse in Poland.</p>",
    iconList: [
      { bold: "Optimized warehouse operations -", text: "Pomerico manages recruitment, HR, and operational support, ensuring smooth and efficient intralogistics processes." },
      { bold: "Rapid team deployment -", text: "Build and scale teams for logistics, fulfillment, and automation projects quickly without operational delays." },
      { bold: "Reliable performance and compliance -", text: "Teams are fully trained, integrated, and compliant with operational standards, ensuring consistent and safe results." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  services: [
    { icon: "/images/icon-gears-recruitment-process.png", heading: "Recruitment Process Outsourcing (RPO)", description: "Recruitment of specialists and managers, including hard-to-find technical profiles" },
    { icon: "/images/icon-folders-document-management.png", heading: "Body Leasing", description: "Flexibly hire the specialists you currently need without direct employment, such as PLC engineers, financial controllers, or sales professionals." },
    { icon: "/images/icon-person-growth-performance.png", heading: "EOR / PEO", description: "Full legal, tax, and HR support that enables fast and compliant hiring in Poland without establishing a local entity" },
    { icon: "/images/icon-checklist-regulatory-compliance.png", heading: "Market Entry", description: "We assist companies in entering the Polish market through consulting or outsourcing models. We act as your local partner in Poland" },
  ],
  tagline: {
    heading: "Companies choose Pomerico for intralogistics because we build high-performing, stable teams \u2013 not just fill positions.",
    description: "Delivering ready-to-work specialists in weeks, minimizing turnover, and ensuring seamless integration \u2013 all with transparent, fixed fees and no hidden costs.",
  },
  process: {
    heading: "Cooperation process",
    steps: [
      { number: "01.", heading: "Needs Analysis & Nearshoring Strategy", description: "We begin by understanding your business goals, project scope, team structure, technologies, timelines and hiring priorities. You receive a transparent roadmap outlining recommended roles, expected availability, costs and cooperation models (EoR, contracting, permanent hire, hybrid)." },
      { number: "02.", heading: "Cooperation design", description: "Pomerico prepares a tailored acquisition plan for your roles. We define:\n\nrequired competencies and seniority,\nsuccess indicators for each role,\nbehavioural and cultural expectations,\ntechnical stack and delivery needs." },
      { number: "03.", heading: "Employment Model Selection", description: "Together we choose the structure that fits your strategy:\n\nEOR \u2013 fastest hire, no local entity needed\nContracting / Staff Augmentation \u2013 maximum flexibility;\nPermanent Recruitment/ RPO \u2013 long-term team building\nHybrid \u2013 mix of models for optimal cost & stability.\n\nAll legal, payroll and compliance elements are handled by Pomerico." },
      { number: "04.", heading: "Onboarding & Operational Integration", description: "We coordinate all formalities. Your nearshore team becomes fully operational and integrated with your workflows, tools, rituals and communication style." },
      { number: "05.", heading: "Ongoing HR, Payroll & Delivery Support", description: "Your team focuses on execution-we handle everything else." },
      { number: "06.", heading: "Your team focuses on execution - we handle everything else", description: "As your operations grow, Pomerico rapidly expands your nearshore team-whether you need one additional specialist, a full squad or multi-department expansion. Scaling is smooth, compliant and fully supported operationally." },
    ],
  },
  testimonials: [
    {
      quote: "In my day-to-day operations, it is important for me to fulfill obligations and agreed arrangements, and this is exactly what cooperation with Pomerico Group looks like. The course of the process unfolded exactly as it had been presented during the service offering stage, and it was characterized by a strong focus on my expectations and the unconventional nature of the implementation itself. The high quality of the service, manifested through reliability, effectiveness, and dependability in personnel selection, means that the responsible choice of our partner in the form of Pomerico Group proved to be the right and profitable decision in the sector. Highly recommended.",
      author: "Tadeusz K\u0119sik",
      role: "Head of CSS Department",
      company: "SSI Sch\u00e4fer",
    },
  ],
  caseStudySlugs: [
    "building-a-multidisciplinary-maintenance-team-for-automated-warehousing",
    "how-we-secured-a-quality-control-expert-in-just-weeks",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
};
