import type { ServicePageData } from "@/content/types";
import type {
  ComparisonTableProps,
} from "@/components/sections/ComparisonTable";

export const eorComparisonTable: Omit<ComparisonTableProps, never> = {
  title: "Which option is right\nfor your expansion?",
  subtitle: "EOR vs. Own Entity",
  columns: [
    { name: "EOR via Pomerico", highlight: "good", badge: "Recommended" },
    { name: "Own Legal Entity (sp. z o.o.)", highlight: "bad" },
  ],
  rows: [
    {
      label: "Setup cost",
      values: [
        { text: "\u20AC0 setup fee \u2014 No investment", type: "good" },
        { text: "\u20AC1,500 \u2013 \u20AC5,000+ registration, notary, legal fees", type: "bad" },
      ],
    },
    {
      label: "Time to first hire",
      values: [
        { text: "1 \u2013 3 weeks", type: "good" },
        { text: "2 \u2013 4 months (registration, KRS, bank account, NIP, REGON)", type: "bad" },
      ],
    },
    {
      label: "Legal & compliance burden",
      values: [
        { text: "Fully managed by Pomerico \u2014 labour law, payroll tax, ZUS contributions, GDPR", type: "good" },
        { text: "Your team is fully responsible \u2014 requires local legal & accounting expertise", type: "bad" },
      ],
    },
    {
      label: "Ongoing admin",
      values: [
        { text: "One monthly invoice. Zero internal HR admin needed.", type: "good" },
        { text: "Monthly payroll, ZUS filings, annual financial statements, accountant required", type: "bad" },
      ],
    },
    {
      label: "Flexibility / exit",
      values: [
        { text: "Scale up or down in days. Exit with 30\u2011day notice.", type: "good" },
        { text: "Liquidation process: 3 \u2013 12 months, legal and financial obligations remain", type: "bad" },
      ],
    },
    {
      label: "Risk & liability",
      values: [
        { text: "Pomerico assumes employer\u2011of\u2011record liability. You retain operational control.", type: "good" },
        { text: "Full employer liability \u2014 misclassification, incorrect filings, penalties on your entity", type: "bad" },
      ],
    },
    {
      label: "Minimum headcount",
      values: [
        { text: "From 1 employee. No minimum.", type: "good" },
        { text: "Entity setup costs rarely justify fewer than 10\u201315 FTEs", type: "bad" },
      ],
    },
    {
      label: "Best for",
      values: [
        "Market testing \u00b7 Fast expansion \u00b7 1\u201350 employees \u00b7 Project\u2011based hiring \u00b7 Reducing risk",
        "Long\u2011term commitment \u00b7 50+ employees \u00b7 Full operational independence required",
      ],
    },
  ],
  ctaLabel: "Get a Free Consultation \u2192",
  ctaHref: "/contact",
  footnote:
    "Note: Setup costs and timelines are approximate and may vary depending on company structure, industry, and specific legal requirements. Pomerico advisors can provide a tailored assessment for your situation.",
};

export const data: ServicePageData = {
  slug: "eor-employer-of-record",
  title: "EOR - Employer of Record",
  metaDescription:
    "Hire in Poland and Europe - without opening a legal entity. Trusted by companies from Denmark, Germany, Netherlands and across the EU.",
  hero: {
    heading: "EOR - Employer of Record",
    description:
      "<p><b>Hire in Poland and Europe - without opening a legal entity. Trusted by companies from Denmark, Germany, Netherlands and across the EU.</b></p><p>Pomerico acts as your official <b>Employer of Record</b> (EOR), enabling you to hire employees in Poland or across the EU quickly, legally and without establishing a local company.</p><p>You gain access to top talent while we manage all legal, HR, payroll and compliance responsibilities on your behalf.</p><p>With EOR, you focus on the work. We handle everything else - from employment contracts to monthly payroll and regulatory compliance.</p>",
    iconList: [
      { bold: "Streamlined hiring -", text: "Pomerico handles all legal, HR, payroll, and compliance, so you can hire quickly without opening a local entity." },
      { bold: "Fast onboarding & deployment -", text: "Access top talent across Poland and Europe with minimal setup time and full operational support." },
      { bold: "Reliable and compliant operations -", text: "All employment, payroll, and regulatory responsibilities are managed to ensure smooth and risk-free operations." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-person-growth-performance.png", heading: "Understanding Your Hiring Needs", description: "We gather details on the role, seniority level, responsibilities, expected salary and compliance requirements. You receive a clear overview of timelines and costs." },
    { icon: "/images/icon-gears-system-integration.png", heading: "Zero Compliance Risk", description: "Recruitment by Pomerico (free for EOR clients) Transfer of your chosen employee into our EOR structure  We guarantee quality through behavioural assessment, technical screening and culture-fit evaluation." },
    { icon: "/images/icon-gears-system-integration.png", heading: "Employment Setup & Documentation", description: "Pomerico becomes the legal employer and handles: employment contracts, HR documentation, payroll & taxes, benefits & insurance, compliance, onboarding and legal formalities." },
    { icon: "/images/icon-wrench-maintenance-services.png", heading: "Daily Work Managed by You", description: "You direct the employee's daily tasks, goals and performance. We manage HR, contracts, payroll and ongoing employment support." },
    { icon: "/images/icon-gears-system-integration.png", heading: "Reporting & Transparent Payroll", description: "Each month, you receive: a single consolidated invoice, payroll summaries, HR updates and employee satisfaction insights, compliance and contract monitoring." },
    { icon: "/images/icon-strategy-market-entry.png", heading: "Scaling Your Team Anytime", description: "You can hire 1 or 50 employees-quickly and without legal complexity." },
  ],
  targetAudience: {
    heading: "Who is EOR for?",
    description: "For companies that need to hire talent in Poland or Europe - without the cost or risk of opening a legal entity.",
    items: [
      { bold: "International companies expanding into Poland/EU -", text: "When you need a local presence without establishing a branch or subsidiary." },
      { bold: "Organizations hiring remote teams across borders -", text: "EOR makes cross-border hiring simple, safe and legally compliant." },
      { bold: "Companies needing fast access to Polish specialists -", text: "Pomerico sources experts in IT, Finance, HR, Operations, Data, Customer Support and more." },
      { bold: "Firms wanting cost-effective employment models -", text: "Polish labour costs and operational efficiency create measurable savings." },
      { bold: "Businesses that want to avoid HR, payroll and legal complexity -", text: "We handle everything - you focus on operations and delivery." },
      { bold: "Companies scaling teams for short- or long-term projects -", text: "EOR is ideal for flexible team growth, pilots, regional expansion or project-based staffing." },
      { bold: "Leaders who want predictable costs and zero compliance risk -", text: "You avoid legal exposure, misclassification risk and administrative overhead." },
    ],
  },
  tagline: {
    heading: "From employment to delivery",
    description: "2.5 weeks - average time to first employee deployed. Pomerico manages contracts, payroll, and compliance while your teams focus on performance.",
  },
  process: {
    heading: "Cooperation Process",
    steps: [
      { number: "01.", heading: "Scoping & Contract Setup", description: "We assess your hiring plans, compliance needs and expectations. You receive a transparent proposal with timelines and full cost structure." },
      { number: "02.", heading: "Recruitment or Employee Transfer", description: "We recruit talent for you (free of charge) or transfer your preferred candidate into our EOR structure. Each candidate is verified through behavioural and competency assessment." },
      { number: "03.", heading: "Legal Employment Setup", description: "Pomerico becomes the official employer and takes ownership of: employment contracts, taxes & social insurance, documentation, benefits, legal compliance, onboarding and HR care." },
      { number: "04.", heading: "Work Begins - You Manage, We Support", description: "Your employee works directly with your team. We manage HR tasks, payroll, administration, leave tracking and compliance." },
      { number: "05.", heading: "Monthly Reporting & Invoicing", description: "You receive a single monthly invoice and full payroll documentation." },
      { number: "06.", heading: "Scale Your Team Effortlessly", description: "Add new roles or new markets when needed - without opening new entities or hiring internal HR/payroll/legal teams." },
    ],
  },
  testimonials: [
    {
      quote: "Pomerico stands out for their reliability and efficiency thanks to which I know I can fully trust them in cooperation. Their effectiveness in HR, marketing and other strategic areas deserves recognition and is the reason for the impressive quality of their services. They're the best company that I've ever had the pleasure to work with in the sector. Highly recommended.",
      author: "Mikołaj Piec",
      role: "Owner",
      company: "Mera Automatic",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
};
