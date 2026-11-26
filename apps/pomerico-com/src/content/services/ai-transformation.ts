import type { FAQItem, ServiceCard, ServicePageData } from "@pomerico/content";

export const slug = "ai-transformation";
export const path = `/services/${slug}`;

export const metaTitle = "AI Transformation for Finance, HR & Recruitment | Pomerico";
export const metaDescription =
  "AI transformation for finance, HR and recruitment teams: we review your processes, standardise them and run an AI pilot on your own systems. Book a call.";

const linkClass = "font-semibold text-primary-blue underline";

export const data: ServicePageData = {
  slug,
  title: "AI Transformation",
  metaDescription,
  hero: {
    heading: "AI Transformation",
    description:
      "<p><b>Reduce repetitive work. Build AI into the way your teams already work.</b></p><p>Pomerico provides AI transformation services for finance, HR and recruitment teams in international companies and shared service centres (SSCs). We map and standardise your processes, identify the steps where AI can take over repetitive work, and run AI pilots on your own systems and under your security rules.</p><p>We know these processes from the inside: Pomerico runs finance, HR and recruitment work for international clients, and our own team uses AI tools such as Claude and ChatGPT every day. When a project needs technical skills your team does not have, we recruit AI engineers for your project.</p>",
    iconList: [
      { bold: "Optimized processes –", text: "Pomerico maps and standardises your finance, HR and recruitment processes before any automation, so AI works on one agreed way of working." },
      { bold: "Faster routine work –", text: "AI takes over repetitive steps, so your team spends more time on exceptions and quality." },
      { bold: "Reliable and compliant AI use –", text: "AI runs on your systems and under your security policies, with GDPR and the EU AI Act in mind, and people make every decision that affects people." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefitsSubtitle: "What changes when AI is built into the process.",
  benefits: [
    {
      icon: "/images/icon-cost-reduction-optimization.png",
      heading: "Less Time on Repetitive Tasks",
      description:
        "AI takes over routine tasks, so your team spends more time on exceptions and quality.",
    },
    {
      icon: "/images/icon-folders-document-management.png",
      heading: "A Process That Is Written Down",
      description:
        "Before any AI work, we write the process down and agree it with your team. New people and handovers then work from the same description.",
    },
    {
      icon: "/images/icon-shield-compliance-protection.png",
      heading: "Fits Your HQ and IT Rules",
      description:
        "We work on your systems and under your security policies, with GDPR and the EU AI Act considered from the start.",
    },
    {
      icon: "/images/icon-puzzle-team-integration.png",
      heading: "Extra Hands During the Change",
      description:
        "If a process needs more people while it changes, we can staff it through body leasing or BPO.",
      descriptionHtml:
        'If a process needs more people while it changes, we can staff it through <a href="/services/body-leasing-staff-augmentation">body leasing</a> or <a href="/services/bpo-business-process-outsourcing">BPO</a>.',
    },
  ],
  services: {
    heading: "What we deliver",
    cards: [
      {
        icon: "/images/icon-checklist-compliance-audit.png",
        heading: "AI Readiness Review",
        description:
          "We look at one process or team: how the work runs, which systems and data it uses, and where AI can help today. Scope and price are agreed after the first call.",
      },
      {
        icon: "/images/icon-workflow-process-automation.png",
        heading: "Process Mapping & Standardisation",
        description:
          "We describe how the work really runs, step by step, find where time is lost and agree one way of working: templates, rules, approval paths and clear owners.",
      },
      {
        icon: "/images/icon-chart-growth-scalability.png",
        heading: "Use Cases & Business Case",
        description:
          "For each idea we estimate the time it could save, the risk and the effort, so you can decide where to start.",
      },
      {
        icon: "/images/icon-gears-system-integration.png",
        heading: "AI Pilot on Your Systems",
        description:
          "We set up AI assistants or automations for one process on your accounts, then compare the result with how the process ran before.",
      },
      {
        icon: "/images/icon-brain-it-expertise.png",
        heading: "AI Engineers for Your Project",
        description:
          "When a project needs technical skills your team does not have, we recruit AI engineers for your project.",
      },
    ],
  },
  targetAudience: {
    heading: "Who Is AI Transformation For?",
    // The "We work with companies that" intro is the handwritten doodle shown under the heading (same as other service pages).
    description: "",
    items: [
      { bold: "Run finance teams or shared service centres –", text: "AP, AR, record-to-report, controlling and reporting with high volumes." },
      { bold: "Have busy HR and recruitment teams –", text: "onboarding, HR documentation, recurring employee questions and recruitment administration." },
      { bold: "Already have AI tools –", text: "but their teams still do most of the daily work the same way as before." },
      { bold: "Work under rules set by headquarters –", text: "group IT and compliance must approve every new tool and pilot. Pomerico works on your systems and under your security policies, which makes that approval easier." },
      { bold: "Want to grow without more manual work –", text: "and would rather free up capacity than hire for repetitive tasks." },
    ],
  },
  tagline: {
    preheading: "EU AI Act",
    heading: "AI in HR and Recruitment: What Is Allowed Today",
    description:
      "AI systems used to screen or evaluate candidates are classified as high-risk, and the requirements for them apply from 2 December 2027. GDPR applies now. Our Legal Partner and our CEO explain what this means for HR teams.",
    cta: { label: "Read the article", href: "/blog/ai-act-in-hr-and-recruitment" },
  },
  process: {
    heading: "Cooperation Process",
    intro:
      "An AI tool repeats whatever process it is given. If invoices arrive in five formats, approvals depend on who is on duty and nobody has written the steps down, the tool will repeat those problems faster. That is why every project starts with the process.",
    link: {
      label: "Read more: Accounts Payable Process Documentation",
      href: "/blog/accounts-payable-process-documentation",
    },
    steps: [
      { number: "01.", heading: "First Call", description: "Your goals, the process you want to change and your constraints. Free of charge." },
      { number: "02.", heading: "AI Readiness Review", description: "We look at the process, systems and data. Scope and price are agreed after the first call." },
      { number: "03.", heading: "Standardise the Process", description: "We agree one way of working before any automation." },
      { number: "04.", heading: "Pilot on One Process", description: "On your systems, measured against how the process ran before. Its length is agreed with you." },
      { number: "05.", heading: "Rollout & Handover", description: "We extend what worked, write the documentation and hand the solution over to your team." },
    ],
  },
  details: {
    heading: "Where AI Helps First",
    subtitle: "Good places to start with AI in back-office work.",
    cards: [
      {
        icon: "/images/icon-checklist-task-management.png",
        heading: "Finance & Accounting",
        description:
          "Invoice intake and coding, reconciliations, reporting, month-end checklists and process documentation.",
      },
      {
        icon: "/images/icon-id-card-employee-documentation.png",
        heading: "HR Operations",
        description: "Onboarding, HR helpdesk, documentation, policies.",
      },
      {
        icon: "/images/icon-recruitment-talent-search.png",
        heading: "Recruitment",
        description:
          "Sourcing, job ads, candidate communication – hiring decisions made by people.",
      },
    ],
  },
};

export const faqItems: FAQItem[] = [
  {
    question: "What is AI transformation and how does Pomerico deliver it?",
    answer:
      "AI transformation means changing business processes so that AI takes over repetitive work and supports decisions, while people keep control. At Pomerico we start by describing the process and measuring where time is lost, agree one way of working, and then pilot AI on your own systems.",
  },
  {
    question: "What does an AI readiness review include and how much does it cost?",
    answer:
      "We look at one process or team: how the work runs, which systems and data it uses and where AI can help. You get a description of the process, a list of AI use cases with estimated effort and benefit, and a recommended first pilot. Scope and price are agreed after the first call.",
  },
  {
    question: "Do we need to describe our processes before using AI?",
    answer:
      "Yes. Without a written process and a starting point to compare against, you cannot tell which steps are worth automating or show what the pilot changed.",
  },
  {
    question: "Which AI tools do you use?",
    answer:
      "In our own work we use Claude and ChatGPT. In client projects we start from the tools you already have and choose new ones together with your IT team.",
  },
  {
    question: "Do you work with SAP?",
    answer:
      "Yes. Our finance consultants work with SAP FI/CO and S/4HANA, including migration projects and shared service centre transitions.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "We work on your systems and under your security policies, follow GDPR, and keep a person in charge of every decision that affects people.",
  },
  {
    question: "Is AI in recruitment allowed under the EU AI Act?",
    answer: `Yes, with conditions. Emotion recognition at work is banned. Systems that screen or evaluate candidates are high-risk, and the requirements for them apply from 2 December 2027. Read more in our article <a href="/blog/ai-act-in-hr-and-recruitment" class="${linkClass}">AI Act in HR and Recruitment</a>.`,
  },
  {
    question: "Will AI replace our team?",
    answer:
      "Our goal is to give your team more capacity. People spend less time on repetitive steps and more on exceptions and quality, and decisions that affect people stay with people.",
  },
  {
    question: "How do you measure the results?",
    answer:
      "Before the pilot we record how the process runs: volumes, handling time, errors and rework. After the pilot we compare the same figures, so you can see what changed.",
  },
  {
    question: "Can you provide AI engineers for our project?",
    answer:
      "Yes. When a project needs technical skills your team does not have, we recruit AI engineers for your project. The length of the assignment is agreed with you.",
  },
];

/** Shared card used on the homepage and /services listing. */
export const aiTransformationCard: ServiceCard = {
  icon: "/images/icon-workflow-process-automation.png",
  heading: "AI Transformation",
  description:
    "Process review before automation, AI pilots on your own systems, people in charge of decisions.",
  href: path,
};
