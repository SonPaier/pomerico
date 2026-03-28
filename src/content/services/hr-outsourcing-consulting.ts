import type { ServicePageData } from "@/content/types";

export const data: ServicePageData = {
  slug: "hr-outsourcing-consulting",
  title: "HR Outsourcing & Consulting",
  metaDescription:
    "Transform your HR operations in Poland with Pomerico's outsourcing and consulting services. Streamline hiring, payroll, and compliance. Book a free call.",
  hero: {
    heading: "HR Outsourcing & Consulting",
    description:
      "<p><b>Build stronger teams, transform your HR</b> processes and hire with confidence.<br/>Pomerico provides end-to-end HR consulting, interim HR leadership and HR contracting, helping organizations optimize people operations, improve performance and strengthen talent acquisition.</p><p>Whether you need <b>strategic HR expertise</b>, temporary HR support, or a dedicated HR specialist working inside your company \u2013 <b>we deliver</b> the knowledge, processes and tools that accelerate growth and reduce operational risks.</p>",
    iconList: [
      { bold: "Optimized HR operations -", text: "Pomerico manages HR processes, payroll, and compliance so your team can focus on strategic initiatives." },
      { bold: "Faster talent acquisition -", text: "Access top candidates quickly with our interim HR support, consulting, and contracting solutions." },
      { bold: "Reliable HR performance -", text: "All HR activities are handled professionally, ensuring stable, efficient, and high-quality people operations." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-brain-knowledge-expertise.png", heading: "Reduced Employee Turnover", description: "Through effective talent management strategies and motivational systems." },
    { icon: "/images/icon-handshake-business-partnership.png", heading: "Better Workforce Alignment", description: "Via precise career planning and individualized employee development. Pomerico integrates all HR functions in one place, reducing complexity and freeing up your time." },
    { icon: "/images/icon-id-card-employee-documentation.png", heading: "Increased Engagement & Performance", description: "By implementing tools that strengthen motivation and organizational culture." },
    { icon: "/images/icon-talent-acquisition-search.png", heading: "Access to Expert Support & Know-How", description: "Access to experienced HR Directors and HR Business Partners who can quickly deploy optimal HR solutions - we deliver specialists who bring structure, clarity and maturity into your HR operations." },
  ],
  details: {
    heading: "What we deliver",
    cards: [
      {
        icon: "/images/icon-person-growth-performance.png",
        heading: "HR Consulting",
        description: "<ul><li>audit of HR processes</li><li>defining structure & responsibilities</li><li>building competency matrices</li><li>implementing HR tools & workflows</li><li>performance & motivation systems</li><li>culture & engagement strategies</li><li>employer branding foundations</li><li>creation of HR documentation and procedures</li></ul>",
      },
      {
        icon: "/images/icon-wrench-maintenance-services.png",
        heading: "HR Leadership-as-a-Service",
        description: "<ul><li>interim HR Manager</li><li>interim Head of People</li><li>interim Talent Acquisition Lead</li><li>crisis HR leadership (mergers, restructuring)</li></ul>",
      },
      {
        icon: "/images/icon-gears-system-integration.png",
        heading: "HR Contracting (Interim / On-Demand HR)",
        description: "<ul><li>HR Generalist / HRBP on contract</li><li>talent Acquisition on contract</li><li>temporary HR support for scaling</li><li>full HR function externally managed</li><li>maternity leave coverage</li><li>project-based HR roles</li></ul>",
      },
    ],
  },
  targetAudience: {
    heading: "Who Is HR Consulting & Contracting For?",
    description: "For companies that want a modern, effective and scalable HR function - without building everything from scratch. This service is tailored for...",
    items: [
      { bold: "Fast-growing companies needing HR structure -", text: "Startups, scale-ups and new business units that need: onboarding, recruitment processes, role definitions, HR documentation, culture frameworks, engagement systems." },
      { bold: "Organizations without internal HR or with overloaded HR teams -", text: "We take over people operations, giving leadership the time to focus on strategy." },
      { bold: "Companies struggling with recruitment quality or high turnover -", text: "Pomerico specializes in solving the root of the problem through: behavioural assessments, culture fit analysis, improved sourcing, HR process redesign." },
      { bold: "Companies looking for temporary or project-based HR specialists -", text: "For moments when you need HR power now: maternity covers, burnout in the HR team, peak hiring, transformation projects." },
      { bold: "Firms scaling teams across IT, Finance, Operations or Sales -", text: "We build hiring and onboarding processes that prevent bottlenecks and hiring failures." },
      { bold: "Leaders who want strategic HR, not reactive HR -", text: "Pomerico helps define: people strategy, leadership frameworks, performance systems, development & succession paths." },
    ],
  },
  tagline: {
    preheading: "Your extended HR department",
    heading: "Ready to simplify your HR operations?",
    description: "Flexible, expert, and fully compliant \u2013 Pomerico handles recruitment, payroll and employee management so your team can focus on what matters.",
  },
  process: {
    heading: "Cooperation Process",
    steps: [
      { number: "01.", heading: "Analysis & Diagnosis", description: "We analyse your challenges, structure, hiring needs and existing HR processes. You receive a clear diagnosis and a tailored HR plan." },
      { number: "02.", heading: "Defining Scope & Selecting the Model", description: "HR Consulting (projects & strategic support), HR Contracting (on-demand specialists), Hybrid HR (ongoing support + specialists). We tailor scope, hours, KPIs and reporting cadence." },
      { number: "03.", heading: "Talent Matching & Verification", description: "We carefully select and verify HR specialists through behavioural profiling, culture-fit assessment and in-depth competency evaluation to ensure you receive only experts perfectly matched to your organization." },
      { number: "04.", heading: "Implementation & HR Activation", description: "We begin work immediately, focusing on: fixing urgent issues, structuring processes, creating documentation, implementing tools, optimizing the recruitment flow. Within weeks you see measurable improvements." },
      { number: "05.", heading: "Ongoing HR Support, Reporting & KPI Monitoring", description: "We provide regular updates in areas such as: recruitment effectiveness, retention, performance, engagement, process efficiency. You always know what is happening in your people operations." },
      { number: "06.", heading: "Scaling & Long-Term Partnership", description: "As your company grows, we adapt the HR structure: more processes, talent programs, advanced HR analytics, leadership development, succession planning. You get a mature HR function without the cost of building it internally." },
    ],
  },
  testimonials: [
    {
      quote: "The primary goal of our collaboration has been to enhance metrics in areas such as recruitment, sourcing and overall work efficiency. Pomerico Group excels in HR knowledge and organizational culture. Our experiences confirm that Pomerico Group is not only an expert but also a reliable partner who understands the challenges associated with organizational functioning. Their adeptness in identifying issues and crafting effective solutions ensures that collaborating with them is a guarantee of development. Despite not being a large company, they offer advantages through their flexibility, swift decision-making, and a genuine sense of care in working with you.",
      author: "Julia Kasparek-Guzik",
      role: "COO",
      company: "Datumo",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
};
