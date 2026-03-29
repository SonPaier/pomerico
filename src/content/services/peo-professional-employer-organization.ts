import type { ServicePageData } from "@/content/types";
import type { QuickComparisonProps } from "@/components/sections/QuickComparison";
import type { ComparisonTableProps } from "@/components/sections/ComparisonTable";

export const peoQuickComparison: QuickComparisonProps = {
  eyebrow: "Know the difference",
  title: "PEO vs EOR \u2014 in 30 seconds",
  badge: "Quick read",
  columns: [
    {
      label: "PEO \u2014 Professional Employer Organization",
      accent: "red",
      points: [
        {
          icon: "\uD83E\uDD1D",
          bold: "Co-employment model.",
          text: "Pomerico and your company share the employer role. You retain more direct control over HR policies and processes.",
        },
        {
          icon: "\uD83C\uDFE2",
          bold: "Works best if you have",
          text: "\u2014 or plan to build \u2014 your own Polish entity. PEO complements your structure, it doesn\u2019t replace it.",
        },
        {
          icon: "\u2699\uFE0F",
          bold: "More customisation.",
          text: "You shape the HR policies, benefits and processes. Pomerico administers and ensures compliance.",
        },
      ],
    },
    {
      label: "EOR \u2014 Employer of Record",
      accent: "blue",
      points: [
        {
          icon: "\uD83D\uDCCB",
          bold: "Full employer model.",
          text: "Pomerico is the sole legal employer on record. Your company has no employment obligations in Poland whatsoever.",
        },
        {
          icon: "\uD83D\uDE80",
          bold: "No entity needed \u2014 ever.",
          text: "Hire in Poland or across the EU without registering a company, opening a bank account or dealing with KRS.",
        },
        {
          icon: "\uD83D\uDD12",
          bold: "Zero compliance burden.",
          text: "All legal, payroll and tax obligations sit entirely with Pomerico. You focus on the work.",
        },
      ],
    },
  ],
  footerText: "Still not sure which one fits your situation?",
  footerLinkLabel: "See full comparison",
  footerLinkHref: "#full-comparison",
};

export const peoComparisonTable: ComparisonTableProps = {
  title: "PEO vs EOR \u2014 every detail",
  subtitle: "Full comparison",
  columns: [
    {
      name: "PEO",
      tagline: "Professional Employer Organization \u2014 shared employer model",
      highlight: "good",
    },
    {
      name: "EOR",
      tagline: "Employer of Record \u2014 full employer model",
    },
  ],
  rows: [
    // Legal & structural
    { category: "Legal & structural", label: "", values: [] },
    {
      label: "Employer of record",
      values: [
        "Shared \u2014 both Pomerico and your company",
        { text: "\u2713 Pomerico only \u2014 you have zero employer status in Poland", type: "good" },
      ],
    },
    {
      label: "Own Polish entity required",
      values: [
        "Recommended \u2014 works best alongside your entity",
        { text: "\u2713 Not required \u2014 operate fully without one", type: "good" },
      ],
    },
    {
      label: "Employment contracts",
      values: [
        "Issued under co-employment agreement \u2014 your policies apply",
        "Issued solely by Pomerico \u2014 standard compliant contracts",
      ],
    },
    {
      label: "Legal liability",
      values: [
        "Shared between your company and Pomerico",
        { text: "Sits entirely with Pomerico", type: "good" },
      ],
    },
    // Day-to-day operations
    { category: "Day-to-day operations", label: "", values: [] },
    {
      label: "Payroll & ZUS",
      values: [
        { text: "\u2713 Fully managed by Pomerico", type: "good" },
        { text: "\u2713 Fully managed by Pomerico", type: "good" },
      ],
    },
    {
      label: "HR policy control",
      values: [
        { text: "\u2713 You define policies \u2014 Pomerico administers", type: "good" },
        "Pomerico\u2019s standard framework \u2014 limited customisation",
      ],
    },
    {
      label: "Benefits & perks",
      values: [
        { text: "Fully customisable \u2014 you design the package", type: "good" },
        "Standard package \u2014 customisation available on request",
      ],
    },
    {
      label: "GDPR & compliance",
      values: [
        { text: "\u2713 Managed by Pomerico", type: "good" },
        { text: "\u2713 Managed by Pomerico", type: "good" },
      ],
    },
    // Commercial & financial
    { category: "Commercial & financial", label: "", values: [] },
    {
      label: "Setup cost",
      values: [
        { text: "\u20AC0 additional setup \u2014 No upfront cost", type: "good" },
        { text: "\u20AC0 additional setup \u2014 No upfront cost", type: "good" },
      ],
    },
    {
      label: "Time to first hire",
      values: [
        { text: "1 \u2013 3 weeks", type: "good" },
        { text: "1 \u2013 3 weeks", type: "good" },
      ],
    },
    {
      label: "Monthly billing",
      values: [
        "One invoice \u2014 all-inclusive",
        "One invoice \u2014 all-inclusive",
      ],
    },
    {
      label: "Cost vs. own entity",
      values: [
        "Lower admin overhead \u2014 no internal HR team needed",
        { text: "No entity costs at all \u2014 maximum savings", type: "good" },
      ],
    },
    // When to choose
    { category: "When to choose", label: "", values: [] },
    {
      label: "Best for",
      values: [
        "Companies with a Polish entity (or planning one) who want to outsource HR admin while keeping control of culture and policies",
        "Companies expanding into Poland without an entity \u2014 or those wanting zero employer obligations anywhere in the EU",
      ],
    },
    {
      label: "Ideal team size",
      values: [
        "10 \u2013 500+ employees",
        { text: "1 \u2013 100 employees \u2014 Any size", type: "good" },
      ],
    },
    {
      label: "Flexibility / exit",
      values: [
        "Structured offboarding \u2014 aligned with your entity obligations",
        { text: "30\u2011day notice \u2014 no entity to dissolve", type: "good" },
      ],
    },
    {
      label: "Path to own entity",
      values: [
        { text: "\u2713 Already on that path \u2014 PEO supports the transition", type: "good" },
        { text: "\u2713 Smooth handover when you\u2019re ready to incorporate", type: "good" },
      ],
    },
  ],
  ctaLabel: "Talk to us \u2014 free consultation \u2192",
  ctaHref: "/contact",
  ctaSecondaryLabel: "Learn more about EOR \u2192",
  ctaSecondaryHref: "/services/eor-employer-of-record",
  footnote:
    "Still unsure? In practice, most companies new to Poland start with EOR for speed and simplicity, then transition to PEO once they establish their own entity. Pomerico supports both stages \u2014 and the transition between them.",
};

export const data: ServicePageData = {
  slug: "peo-professional-employer-organization",
  title: "PEO - Professional Employer Organization",
  metaDescription:
    "Use Pomerico's PEO services to hire employees in Poland legally and compliantly. Reduce risk, cut admin overhead, and scale your team. Contact us today.",
  hero: {
    heading: "PEO - Professional Employer Organization",
    description:
      "<p><b>Hire globally. Legally. With less risk. And zero complexity.</b></p><p>As your PEO partner, Pomerico takes over all employment-related responsibilities - payroll, HR administration, taxes, compliance, onboarding and employee documentation. <b>You manage the work and goals. We take care of everything else.</b></p><p>This is the fastest and safest way to hire employees in Poland or remotely in other markets <b>without setting up a legal entity and without dealing with local bureaucracy or compliance risks.</b></p>",
    iconList: [
      { bold: "Effortless global hiring -", text: "Pomerico handles payroll, HR administration, taxes, compliance, and onboarding, letting you focus on managing work and goals." },
      { bold: "Rapid workforce deployment -", text: "Hire employees in Poland or remotely across Europe quickly, without setting up a local legal entity." },
      { bold: "Reliable compliance and operations -", text: "All employment, payroll, and regulatory responsibilities are managed professionally to ensure smooth and risk-free operations." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-system-integration.png", heading: "Full legal & tax compliance", description: "We employ your employees on your behalf and take complete responsibility for employment contracts, payroll, taxes, benefits, sick leave, vacation, onboarding and data protection. This eliminates legal risks and compliance challenges." },
    { icon: "/images/icon-effectiveness-employee-growth.png", heading: "Zero Administration", description: "We handle everything related to employment payroll, contracts, recruitment, and benefits - while you focus entirely on business growth." },
    { icon: "/images/icon-folders-document-management.png", heading: "Hire without establishing a local company", description: "Enter the market without the cost and complexity of forming an entity. Scale your team in weeks - not months." },
    { icon: "/images/icon-person-growth-performance.png", heading: "Access to talent unavailable on the open market", description: "We started as a recruitment agency - which means we find specialists no job board will show you: Direct Search, sourcing campaigns, assessments, behavioural tests." },
    { icon: "/images/icon-checklist-task-management.png", heading: "All-inclusive HR services", description: "Payroll, contracts, benefits, legal support, onboarding, integration - all handled by Pomerico. You receive one monthly invoice and full transparency." },
  ],
  targetAudience: {
    heading: "Who is our PEO for?",
    description: "The ideal model for global companies that want to hire fast, safe and cost-effective.",
    items: [
      { bold: "You want to hire in Poland - but you're not ready to open a legal entity.", text: "You're expanding into Poland or Central Europe and need local employees fast. Setting up a sp. z o.o. takes 2-4 months and comes with ongoing legal, tax and accounting obligations you're not ready to manage. With PEO, Pomerico becomes the legal employer - you keep full control over the work, goals and daily management. First hire ready in 1-3 weeks." },
      { bold: "You're growing fast and HR administration is slowing you down.", text: "You're hiring 5, 10, 20 people and your internal HR team - or you as CEO - is drowning in contracts, payroll deadlines, ZUS filings and onboarding paperwork. PEO takes the entire employment function off your plate: contracts, payroll, benefits, compliance and documentation. You get one monthly invoice and zero admin. Your team focuses on delivery, not HR bureaucracy." },
      { bold: "You need qualified talent at 40-60% lower cost than in your home market.", text: "Your team in Denmark, Germany or the Netherlands is expensive and hard to scale. Poland offers the same level of talent - engineers, finance specialists, operations managers - at significantly lower total employment cost. PEO gives you direct access to Polish specialists without the overhead of a local entity, HR team or compliance infrastructure. We handle everything. You get the people and the savings." },
      { bold: "You have a Polish entity - but HR administration is still eating your time.", text: "You're already operating in Poland but payroll, contracts, ZUS filings and compliance are handled internally at a cost that doesn't make sense. PEO lets you transfer the employment function to Pomerico even if you have your own entity - keeping the legal structure, losing the admin burden." },
    ],
  },
  tagline: {
    heading: "Keep control of your team. Let us handle the compliance.",
    description: "Pomerico manages payroll, compliance, and HR administration, enabling you to onboard employees in Poland and across Europe without creating a local entity.",
  },
  process: {
    heading: "Cooperation Process",
    steps: [
      { number: "01.", heading: "Discovery & Needs Analysis", description: "We start by understanding your organization. We analyze current processes, team capacity, costs, and operational challenges. Based on this, we identify which areas will bring the greatest ROI through outsourcing." },
      { number: "02.", heading: "Recruitment or Talent Transfer", description: "You choose the model. Recruitment – We source and verify candidates (free of charge for PEO/EOR clients). Talent Transfer – Your existing employees are formally moved under Pomerico as their legal employer. We guarantee at least two well-matched candidates for each role (if recruitment is included)." },
      { number: "03.", heading: "Legal Setup & Documentation", description: "Pomerico prepares employment contracts, payroll parameters, confidentiality clauses, onboarding paths and compliance documentation. You avoid all local bureaucracy - we handle it fully." },
      { number: "04.", heading: "Onboarding & Employment Launch", description: "We manage payroll registration, benefits setup, induction, HR administration and local compliance. Your new employee receives a smooth onboarding experience supported by our HR team." },
      { number: "05.", heading: "Daily Work Managed by You", description: "You assign tasks, goals and responsibilities. We manage employment, motivation, HR care, culture-fit monitoring, sick leave, documentation and ongoing support." },
      { number: "06.", heading: "Continuous Support & Scaling", description: "We monitor motivation, engagement and performance - keeping turnover extremely low. Scaling from 1 to 50 employees can be done in weeks, anytime." },
    ],
  },
  testimonials: [
    {
      quote: "I worked as a Consultant and I have a lot of good things to say about this company. The approach to employees was very professional, with a very friendly and good atmosphere in the company. A very strong emphasis on professional development, but also personal development. Manager Sebastian was always positive and always able to find time to help or talk about what we can do better and more efficiently.",
      author: "Olaf Langowski",
      role: "Consultant",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
};
