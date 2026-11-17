import type { FAQItem, IconListItem, ProcessStep, ServiceCard } from "@pomerico/content";

export const slug = "ai-transformation";
export const path = `/services/${slug}`;

export const metaTitle = "AI Transformation Consulting | Pomerico Group";
export const metaDescription =
  "We map your processes, measure bottlenecks, estimate the business case and implement AI in finance, HR and recruitment – within your compliance rules.";

export const hero = {
  heading: "AI Transformation for Companies: From Process Map to Working AI Tools",
  description:
    "We map your processes, find the bottlenecks, estimate what AI can realistically deliver and implement tools your people actually use – on your own environment and within your security rules. We did it in our own company first.",
  trustImage: "/images/pomerico-trusted-partner-badges.svg",
  // "See how we use AI at Pomerico" – add once /case-studies/ai-at-pomerico is published (#11056).
};

export const whoItIsFor: ServiceCard[] = [
  {
    icon: "/images/icon-gears-operations-management.png",
    heading: "Shared service centres and GBS",
    description:
      "Finance, HR and procurement processes at scale, where headquarters' IT and compliance must approve every tool.",
  },
  {
    icon: "/images/icon-chart-growth-scalability.png",
    heading: "Mid-size companies",
    description:
      "Growing teams that want AI to take over repetitive work before they hire more people.",
  },
  {
    icon: "/images/icon-folders-document-management.png",
    heading: "Service and back office teams",
    description:
      "Finance, HR, recruitment, customer service, sales support and administration in any industry.",
  },
];

export const whyProjectsStall = {
  heading: "Why most AI projects stall",
  description:
    "Most organisations already pay for AI licences, yet daily work looks the same. The reasons are rarely technical: processes are not mapped, nobody measured where time is lost, compliance or IT blocks pilots, and teams were never shown how AI fits their tasks. We start with the process and the people, then choose the tool.",
};

export const whatWeDo: ServiceCard[] = [
  {
    icon: "/images/icon-checklist-compliance-audit.png",
    heading: "AI readiness audit",
    description:
      "A fixed-scope, fixed-price audit (3–4 weeks): we assess processes, data, systems, skills and governance, and show where AI is possible today and where it is not.",
  },
  {
    icon: "/images/icon-workflow-process-automation.png",
    heading: "Process mapping and bottleneck analysis",
    description:
      "We map how work really runs, measure volumes, handling times and rework, and find the steps that cost the most.",
  },
  {
    icon: "/images/icon-cost-reduction-optimization.png",
    heading: "Business case and benefit estimate",
    description:
      "For each use case we estimate time saved (in hours and FTE), quality gains, risk and cost, and rank them by value and effort.",
  },
  {
    icon: "/images/icon-checklist-task-management.png",
    heading: "Standardisation before automation",
    description:
      "First we agree one way of working: templates, rules, approval paths and clear ownership. We do not automate a messy process.",
  },
  {
    icon: "/images/icon-brain-knowledge-expertise.png",
    heading: "Organisational readiness",
    description: "AI policy, roles, AI literacy training and change management.",
  },
  {
    icon: "/images/icon-gears-system-integration.png",
    heading: "Implementation of AI tools, agents and RPA",
    description:
      "AI assistants, agents, RPA bots and automations in finance, HR, recruitment, sales and procurement, integrated with tools you already use (e.g. Microsoft 365, SAP, your CRM).",
  },
  {
    icon: "/images/icon-brain-it-expertise.png",
    heading: "AI engineers for your project",
    description:
      "AI engineers employed by Pomerico join your team for the implementation. They build and maintain AI assistants, agents and automations on your environment, work with your IT and process owners, and hand the solution over to your people. You direct the work; we handle employment, payroll and administration.",
  },
  {
    icon: "/images/icon-magnifier-quality-assurance.png",
    heading: "Measurement and continuous improvement",
    description: "We compare results with the baseline and expand what works.",
  },
];

export const tools = {
  heading: "Tools we work with",
  paragraphs: [
    "We are not tied to one vendor. We start from the tools you already have, often Microsoft 365 Copilot and SAP, and add others where they deliver more. Our team works daily with Claude and ChatGPT, automates processes with Python, SQL, VBA, Power Query and RPA, and builds reporting in Power BI. For clients we have automated controlling reporting, built cost allocation models and implemented P2P tools such as Coupa and Ariba, and we run our own marketing and sales on AI.",
  ],
};

export const howItWorks: ProcessStep[] = [
  {
    number: "01.",
    heading: "Discovery call",
    description: "Goals, scope and constraints (1 hour, free of charge).",
  },
  {
    number: "02.",
    heading: "AI readiness audit",
    description:
      "Fixed scope, fixed price, 3–4 weeks. Week 1: workshops and data on volumes, people and systems. Week 2: process map with time spent per process and bottlenecks. Week 3: prioritised improvements – standardisation, existing tools, RPA, AI. Week 4: business case and roadmap – savings in hours and FTE, implementation plan and a short presentation for management.",
  },
  {
    number: "03.",
    heading: "Standardise the process",
    description:
      "One way of working before automation: templates, rules, approval paths, clear ownership.",
  },
  {
    number: "04.",
    heading: "Pilot on one process",
    description:
      "Built on your environment, measured against the baseline; its length depends on the process and is agreed with you.",
  },
  {
    number: "05.",
    heading: "Scale and handover",
    description: "Rollout, training, documentation, ongoing support.",
  },
];

export const whereAiDeliversFirst: IconListItem[] = [
  {
    bold: "Finance & accounting:",
    text: "invoice intake and coding, reconciliations, reporting, month-end checklists.",
  },
  { bold: "HR operations:", text: "onboarding, HR helpdesk, documentation, policies." },
  {
    bold: "Recruitment:",
    text: "sourcing, job ads, candidate communication – hiring decisions made by people.",
  },
  { bold: "Sales and marketing:", text: "meeting notes, content, research, tender monitoring." },
  {
    bold: "Procurement and back office:",
    text: "document handling, data enrichment, request routing.",
  },
];

export const whyPomerico: IconListItem[] = [
  {
    bold: "We run business processes ourselves.",
    text: "Since 2015 we have delivered finance, HR and recruitment services, so we know these processes as operators, not only as consultants.",
  },
  {
    bold: "AI runs our own company.",
    text: "Our marketing, sales pipeline and analytics already work on AI, built by our business team without a large IT department.",
  },
  {
    bold: "Your environment, your rules.",
    text: "We deliver on your accounts and under your security policies, which makes approval by headquarters and IT easier.",
  },
  {
    bold: "People plus technology.",
    text: "If the transformation needs extra hands, we staff the process through leasing or BPO, and provide AI engineers for the implementation.",
  },
  {
    bold: "Human in the loop and EU AI Act-aware.",
    text: "People make the decisions that affect people.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What is AI transformation?",
    answer:
      "The redesign of business processes so that AI takes over repetitive work and supports decisions, while people keep control. It starts with mapping processes and measuring where time is lost, not with buying a tool.",
  },
  {
    question: "How long does an AI readiness audit take?",
    answer:
      "3–4 weeks for one function, such as finance or HR, with a fixed scope and a fixed price. You get a process map with time spent per process, a prioritised list of improvements, a benefit estimate in hours and FTE, an implementation plan and a short presentation for management.",
  },
  {
    question: "Do we need to map processes before implementing AI?",
    answer:
      "Yes. Without a map and a baseline you cannot tell which steps are worth automating or prove the result.",
  },
  {
    question: "Can you work with Microsoft Copilot and SAP?",
    answer:
      "Yes. We start from the tools you already have and add others only where they deliver more.",
  },
  {
    question: "Do you also implement RPA?",
    answer:
      "Yes. RPA handles rule-based, high-volume steps, such as moving data between systems. AI handles emails, documents and steps that need judgement. In most processes we combine both.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "We work on your environment and under your security policies, follow GDPR and the EU AI Act, and keep a human in the loop for decisions about people.",
  },
  {
    question: "Is AI in recruitment allowed under the EU AI Act?",
    answer:
      "Yes, with conditions. Emotion recognition at work is banned, and systems that screen or rank candidates will be high-risk from 2 December 2027.",
  },
  {
    question: "Will AI replace our team?",
    answer:
      "Our goal is capacity, not headcount cuts: your team spends less time on repetitive steps and more on exceptions and quality.",
  },
  {
    question: "How do you measure ROI?",
    answer:
      "We measure the baseline before the pilot (volumes, handling time, errors, rework) and compare it after the pilot. We report the result in hours and FTE freed and, in finance, in days cut from the month-end close.",
  },
  {
    question: "Can we hire an AI engineer from you?",
    answer:
      "Yes, as part of an AI transformation project. An AI engineer employed by Pomerico works in your team for the implementation, on your environment and under your security rules. The length of the assignment is agreed with you.",
  },
];

export const finalCta = {
  heading: "Not sure where AI fits in your processes?",
  description:
    "Book a 30-minute call. We will tell you honestly where AI makes sense in your team – and where it does not.",
  ctaLabel: "Book a 30-minute call",
  ctaHref: "/contact#book-consultation",
};

/** Shared card used on the homepage and /services listing. */
export const aiTransformationCard: ServiceCard = {
  icon: "/images/icon-workflow-process-automation.png",
  heading: "AI Transformation",
  description:
    "Process mapping, AI readiness audit and implementation of AI tools in finance, HR and recruitment.",
  href: path,
};
