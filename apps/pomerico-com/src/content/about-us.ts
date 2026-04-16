export const aboutUsHero = {
  heading: "Effective teams. Complete outsourcing",
  description: `<p>Since 2015, Pomerico Group has been supporting the dynamic growth of businesses – particularly <b>international clients</b> – by providing end-to-end outsourcing in Poland, strategic <b>Human Resource</b> management, and expert <b>Business Consulting</b>.</p>
<p>With years of experience and a deep understanding of the needs of global organizations, we take over key business processes, enabling companies to focus on achieving their strategic goals and driving sustainable growth.</p>`,
  teamImage: "/images/wiktoria-wierzbicka-about-hero.jpg",
};

// ── Management Team ────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export const managementTeam: TeamMember[] = [
  {
    name: "Sebastian Kunc",
    role: "General Manager",
    bio: "President of the Management Board, entrepreneur, manager, and HR Business Partner with over 13 years of experience. A graduate of the University of Gdańsk in Management, Sebastian specializes in designing and implementing recruitment and operational programs, combining his sales training background with strategic advisory expertise. He has worked with clients across the financial, IT, and technical sectors. As a mentor and trainer, he supports both managers and teams in developing leadership and operational excellence.",
    image: "/images/sebastian-kunc-general-manager.jpg",
    linkedin: "https://www.linkedin.com/in/sebastian-kunc/",
  },
  {
    name: "Rafał Tylkowski",
    role: "HR Project Manager",
    bio: "HR expert with over 10 years of experience in managing recruitment processes, career advisory, and HR Business Partnering. He specializes in building comprehensive teams for the technical and financial sectors, as well as in Direct Search and Executive Search — including senior-level and sales roles. Rafał was responsible for managing the entire recruitment process and building the team for H&M's first automated warehouse in Poland, as well as leading high-level recruitment projects across Europe.",
    image: "/images/rafal-tylkowski-hr-project-manager.webp",
    linkedin: "https://www.linkedin.com/in/rafa%C5%82-tylkowski-2b32b4a4/",
  },
  {
    name: "Wiktoria Wierzbicka",
    role: "HR Project & Operations Manager, Psychologist",
    bio: "An experienced consultant and HR Business Partner specializing in managing HR projects for international clients. As a psychologist, she conducts and analyzes behavioral assessments, leads recruitment processes, and develops effective team management and employee motivation strategies. She focuses particularly on international recruitment in the finance and IT sectors and also co-manages the operational delivery of our projects, including consultant team management.",
    image: "/images/wiktoria-wierzbicka-operations-manager.webp",
    linkedin: "https://www.linkedin.com/in/wiktoriawierzbicka/",
  },
];

// ── CTA Banner ─────────────────────────────────────────

export const aboutCtaBanner = {
  heading:
    "From recruitment to delivery – scale your operations in Poland with expert teams, streamlined processes, and guaranteed performance.",
  description:
    "92% project success, 0-7% turnover, and full teams onboarded in less than 3 weeks — all with a transparent, fixed monthly fee and no hidden costs.",
};

// ── About Testimonials (from live site) ────────────────

export const aboutTestimonials = [
  {
    quote:
      "Pomerico is not only an expert but also a reliable partner who understands business challenges.",
    author: "Julia Kasparek-Guzik",
    role: "COO",
    company: "Datumo",
  },
  {
    quote:
      "We have been impressed with the high-quality service and excellent communication.",
    author: "Mikołaj Piec",
    role: "Owner",
    company: "Mera Automatic",
  },
  {
    quote:
      "I feel at ease entrusting them with projects, which I believe is very important in a world full of challenges and uncertainty.",
    author: "Michał Karpowicz",
    role: "COO",
    company: "Babord",
  },
  {
    quote:
      "The recruitment went quickly, and its effects were more than satisfactory.",
    author: "Michał Nowak",
    role: "Regional Service Manager",
    company: "Vanderlande",
  },
];

// ── What We Do ─────────────────────────────────────────

export const aboutUsWhatWeDo = {
  blocks: [
    {
      description: `<p><b>Our services cover the full spectrum</b> of processes related to team building and outsourcing in HR, administration, finance, and IT — from recruitment and employment to optimization, management, long-term talent retention, and delivery of business <b>KPIs</b>.</p>
<p>Whether you are looking to hire a few specialists or need an entire department of dozens of professionals, <b>we create tailor-made teams that integrate seamlessly</b> with your organizational culture and deliver measurable results.</p>
<p><strong>We go beyond traditional outsourcing:</strong> by combining advanced recruitment strategies, bespoke onboarding processes, and continuous performance management, we ensure that your teams not only meet operational targets but also grow and develop within your company. Our approach reduces turnover, optimizes costs, and strengthens employee engagement, giving you stable, high-performing teams ready to drive your business forward.</p>
<p>From local startups to international corporations, Pomerico adapts its solutions to your specific needs, providing flexible models of cooperation such as Body Leasing, Employer of Record (EOR), or full process outsourcing. With Pomerico, every team member becomes a committed contributor to your goals, ensuring consistency, efficiency, and measurable impact across all areas of your business.</p>`,
      image: "/images/pomerico-business-consulting-meeting.jpg",
    },
  ],
};
