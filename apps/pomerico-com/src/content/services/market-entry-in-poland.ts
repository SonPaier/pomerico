import type { ServicePageData, FAQItem } from "@pomerico/content";
import type { ComparisonTableProps } from "@pomerico/ui/ComparisonTable";
import type { DecisionCard } from "@pomerico/ui/DecisionCards";

export const marketEntryComparisonTable: ComparisonTableProps = {
  title: "4 models. One clear choice\nfor your situation.",
  subtitle: "How to enter the Polish market",
  columns: [
    {
      name: "Market Entry Advisory",
      tagline: "Strategy & legal guidance before you act",
      highlight: "good",
    },
    {
      name: "Local Business Operations",
      tagline: "Operate in Poland without your own entity",
      highlight: "good",
      badge: "Most popular",
    },
    {
      name: "Entry & Scale",
      tagline: "Consulting + outsourcing as a bridge to your own entity",
      highlight: "good",
    },
    {
      name: "Own Entity (sp. z o.o.)",
      tagline: "Full independence \u2014 with full complexity",
      highlight: "bad",
    },
  ],
  rows: [
    {
      label: "Best for",
      values: [
        "Companies that need clarity before committing to Poland",
        { text: "Fast, compliant operations without setting up a company", type: "good" },
        "Mid-term expansion with a path to full independence",
        "Long-term presence, 50+ employees, full operational control needed",
      ],
    },
    {
      label: "Time to start",
      values: [
        { text: "1 \u2013 2 weeks", type: "good" },
        { text: "1 \u2013 3 weeks", type: "good" },
        "2 \u2013 6 weeks",
        { text: "2 \u2013 4 months", type: "bad" },
      ],
    },
    {
      label: "Setup cost",
      values: [
        "Advisory fee only",
        { text: "\u20AC0 entity setup \u2014 No upfront cost", type: "good" },
        "Advisory fee + outsourcing setup",
        { text: "\u20AC1,500 \u2013 \u20AC5,000+ (notary, KRS, legal)", type: "bad" },
      ],
    },
    {
      label: "Legal & compliance",
      values: [
        "Guidance & recommendations \u2014 you execute",
        { text: "\u2713 Fully managed by Pomerico", type: "good" },
        { text: "\u2713 Managed during transition phase", type: "good" },
        { text: "\u2717 Your full responsibility \u2014 requires local expertise", type: "bad" },
      ],
    },
    {
      label: "HR & payroll",
      values: [
        "Not included",
        { text: "\u2713 End-to-end: contracts, payroll, ZUS, benefits", type: "good" },
        { text: "\u2713 Outsourced until you build internal capacity", type: "good" },
        { text: "\u2717 Your team must handle or hire an accountant", type: "bad" },
      ],
    },
    {
      label: "Local representative / sales",
      values: [
        "Not included",
        { text: "\u2713 Pomerico specialists can represent & sell on your behalf", type: "good" },
        "Available as add-on",
        "You recruit independently",
      ],
    },
    {
      label: "Flexibility / exit",
      values: [
        "Project-based, easy to end",
        { text: "Scale up or exit with 30\u2011day notice", type: "good" },
        "Structured transition plan",
        { text: "Liquidation: 3 \u2013 12 months", type: "bad" },
      ],
    },
    {
      label: "Monthly admin burden",
      values: [
        "Minimal \u2014 advisory calls & reports only",
        { text: "Minimal \u2014 one invoice, Pomerico handles the rest", type: "good" },
        "Low \u2014 shared between you and Pomerico",
        { text: "High \u2014 monthly filings, statements, accountant required", type: "bad" },
      ],
    },
    {
      label: "Ideal team size",
      values: [
        "Any \u2014 pre-hire phase",
        { text: "1 \u2013 50 employees", type: "good" },
        "5 \u2013 100 employees",
        "50+ employees to justify costs",
      ],
    },
    {
      label: "Path to own entity",
      values: [
        "Helps you decide \u2014 no transition built in",
        { text: "\u2713 Smooth handover when you\u2019re ready", type: "good" },
        { text: "\u2713 Designed as a bridge \u2014 entity setup included", type: "good" },
        "You already have one",
      ],
    },
  ],
  ctaLabel: "Talk to us \u2014 free consultation \u2192",
  ctaHref: "/contact",
  footnote:
    "Not sure where you stand? Most companies entering Poland start with Local Business Operations or Entry & Scale \u2014 and transition to their own entity once operations are stable. Pomerico guides you through every stage.",
};

export const marketEntryDecisionCards: DecisionCard[] = [
  {
    icon: "\uD83D\uDD0D",
    model: "Market Entry Advisory",
    quote: "\u201CWe\u2019re considering Poland but haven\u2019t decided yet.\u201D",
    description:
      "Get a legal, tax and operational roadmap before committing any resources. Ideal as a first step.",
  },
  {
    icon: "\u26A1",
    model: "Local Business Operations",
    quote: "\u201CWe need to operate in Poland now, without setting up a company.\u201D",
    description:
      "The fastest path to market. Pomerico handles employment, HR, accounting and compliance \u2014 you focus on business.",
  },
  {
    icon: "\uD83D\uDCC8",
    model: "Entry & Scale",
    quote: "\u201CWe plan to build a long-term presence, but want a structured transition.\u201D",
    description:
      "Start outsourced, scale gradually, and transfer operations to your own entity when you\u2019re ready.",
  },
  {
    icon: "\uD83C\uDFE2",
    model: "Own Entity",
    quote: "\u201CWe\u2019ve committed to Poland and need full independence.\u201D",
    description:
      "Best for 50+ employees and long-term operations. Pomerico can still support your legal setup and ongoing HR.",
  },
];

export const data: ServicePageData = {
  slug: "market-entry-in-poland",
  title: "Market Entry in Poland",
  metaDescription:
    "Pomerico's Market Entry Poland service provides comprehensive support for foreign companies planning to establish operations in Poland.",
  hero: {
    heading: "Market Entry in Poland",
    description:
      "<p>Pomerico's <b>Market Entry Poland</b> service provides comprehensive support for foreign companies planning to establish operations in Poland. We offer three flexible cooperation models tailored to your business needs</p><p><b>Market Entry Advisory</b> - legal and tax advisory, cost analysis, and recommendations for the optimal legal form of entry.</p><p><b>Local Business Operations</b> - we take over full operational support, enabling you to operate without setting up a local entity. We handle employee employment, HR management, accounting, and legal compliance. We can also delegate our accounting, finance, and even sales specialists to represent and sell your services in Poland.</p><p><b>Entry &amp; Scale</b> - a combination of strategic consulting and practical outsourcing of selected operational functions (HR, accounting, administration, IT) as a transitional stage before creating your own company.</p><p><b>Sales-as-a-Service</b> - launch and scale your sales operations in Poland, supported by our local expertise.</p><p><b>Marketing-as-a-Service</b> - full support in establishing and growing your brand on the Polish market.</p><p><b>Tax Consulting &amp; Law Consulting</b> - integrated legal and tax support for safe and efficient operations.</p>",
    iconList: [
      { bold: "Simplified market entry -", text: "Pomerico handles all aspects of establishing operations in Poland, including legal, tax, HR, and payroll, so you can enter the market without operational headaches." },
      { bold: "Rapid operational launch -", text: "Our structured processes and local expertise allow you to start and scale operations quickly, avoiding delays and risks during the setup phase." },
      { bold: "Compliance and risk assurance -", text: "With comprehensive legal, tax, and operational support, your business stays fully compliant, minimizing regulatory risks and ensuring smooth operations." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-shield-compliance-protection.png", heading: "Comprehensive Support", description: "Covering all key aspects of entering the Polish market." },
    { icon: "/images/icon-strategy-market-entry.png", heading: "Flexible Market Entry", description: "Start operations without the formal obligations of establishing a company." },
    { icon: "/images/icon-wrench-technical-support.png", heading: "Cost & Risk Optimization", description: "Avoid administrative and legal costs by leveraging Pomerico's local infrastructure." },
    { icon: "/images/icon-checklist-full-support.png", heading: "Full Operational Support", description: "From office and team management to HR and compliance." },
  ],
  targetAudience: {
    heading: "Who is our Market Entry in Poland for?",
    description: "Our Market Entry in Poland service is designed for international organizations that want to start operating in Poland quickly, compliantly, and without unnecessary complexity. We provide a complete solution - from legal, tax, and HR setup to operational and administrative support - so you can focus on building your business, not bureaucracy.",
    items: [
      { bold: "Plan to expand to Poland -", text: "And need a local partner to handle legal, tax, and HR compliance." },
      { bold: "Want to test the Polish market -", text: "Before establishing a legal entity." },
      { bold: "Seek to hire and manage local talent -", text: "(Marketing, finance, IT, operations) Without opening a company in Poland." },
      { bold: "Value flexibility and cost efficiency -", text: "While maintaining full control and transparency of their operations." },
      { bold: "Look for a partner, not just a provider -", text: "Someone who understands their goals, acts locally, and delivers measurable results." },
    ],
  },
  tagline: {
    heading: "No matter your scale - we act as your local team in Poland.",
    description: "We support both global corporations entering the Polish market and fast-growing tech and service companies expanding their operations in Central Europe.",
  },
  process: {
    heading: "Cooperation process",
    steps: [
      { number: "01.", heading: "Analysis & Diagnosis", description: "We start by understanding your organization. We analyze current processes, team capacity, costs, and operational challenges. Based on this, we identify which areas will bring the greatest ROI through outsourcing." },
      { number: "02.", heading: "Cooperation design", description: "We build a tailored BPO model: defining scope, KPIs, team structure, and reporting tools. Every project has a dedicated Project Manager and Team Leader responsible for quality and communication." },
      { number: "03.", heading: "Implementation & onboarding", description: "Within just a few weeks, we take over your operational processes. We handle recruitment, onboarding, compliance, HR and payroll administration, ensuring a seamless transition with no downtime or disruption. Your team starts performing - immediately." },
      { number: "04.", heading: "Reporting & optimization", description: "We provide regular reports and strategic insights. Based on data, we continuously optimize processes, costs, and efficiency. This is how our cooperation turns into a long-term partnership, not a one-time service." },
    ],
  },
  details: {
    heading: "How it works",
    cards: [
      { icon: "/images/icon-recruitment-talent-search.png", heading: "Recruitment", description: "We find specialists you can't reach on your own - from engineers to analysts and IT experts." },
      { icon: "/images/icon-handshake-partnership-reliability.png", heading: "Employment", description: "We hire them under compliant contracts, manage payroll, and ensure full legal security." },
      { icon: "/images/icon-puzzle-team-integration.png", heading: "Onboarding", description: "We introduce your new employees to the team and your company culture." },
      { icon: "/images/icon-strategy-market-entry.png", heading: "Operations", description: "We manage day-to-day HR, motivation, office setup, and equipment." },
      { icon: "/images/icon-shield-compliance-protection.png", heading: "Support", description: "You get continuous care from our experts who act as your in-house team." },
    ],
  },
  testimonials: [
    {
      quote: "Pomerico stands out for their reliability and efficiency, thanks to which I know I can fully trust them in cooperation. Their effectiveness in HR, marketing and other strategic areas deserves recognition and is the reason for the impressive quality of their services. They're the best company that I've ever had the pleasure to work with in the sector. Highly recommended.",
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

export const faqItems: FAQItem[] = [
  {
    question: "How can Pomerico help me enter the Polish market?",
    answer: "We provide consulting, outsourcing, and hybrid models - covering HR, payroll, sales, office management, tax, and legal. You can operate without opening a company, fully compliant."
  },
  {
    question: "What are the benefits of working with Pomerico for market entry?",
    answer: "Faster entry, reduced costs, and minimized risk. We've supported companies that grew from zero to full teams in weeks, saving them months of setup."
  },
  {
    question: "Why is Poland a strategic location for business?",
    answer: "Poland is the largest market in Central and Eastern Europe, with a highly skilled workforce and competitive labor costs. Its location makes it one of the most attractive hubs for nearshoring, especially for Nordic and EU companies - just a 1h flight from Copenhagen to Gdańsk. With Pomerico, you gain a local partner for outsourcing in Poland and market entry consulting, who knows the market inside out."
  },
  {
    question: "Do I need to open a legal entity to start operating in Poland?",
    answer: "Not necessarily. With Pomerico's EOR/PEO services, you can hire employees and operate immediately without creating a subsidiary, delaying entity setup until your business is ready."
  },
  {
    question: "Can Pomerico help me hire employees before I open a legal entity?",
    answer: "Yes, this is one of the biggest advantages. Using EOR, Pomerico becomes the official employer so you can hire and operate immediately while preparing for long-term market entry."
  },
  {
    question: "Can Pomerico support office setup or hybrid operations?",
    answer: "Yes, we help with workspace setup, hybrid arrangements, equipment management and onboarding processes tailored to your operational needs."
  },
  {
    question: "Can I test the Polish market before committing fully?",
    answer: "Yes, hiring through EOR allows you to run a pilot team or small operation and scale later based on performance and market demand."
  },
  {
    question: "How do I start entering the Polish market with Pomerico?",
    answer: "Simply outline your hiring or operational goals. We create a full market entry plan with timelines, roles, costs, and the best legal structure to launch operations quickly and safely."
  },
  {
    question: "What does \"market entry in Poland\" include and how does it work?",
    answer: "Market entry in Poland means setting up or expanding operations in the Polish market using Pomerico's support in legal compliance, hiring, payroll, EOR/PEO employment, recruitment, office setup, HR processes and operational onboarding - without needing to build a local infrastructure from scratch."
  },
];
