import type { BlogPostCard } from "@pomerico/content";

export type { BlogPostCard };

export const blogPosts: BlogPostCard[] = [
  {
    slug: "accounts-payable-under-pressure",
    title:
      "Accounts Payable Under Pressure: A Leader's Perspective on Operational Resilience in Finance",
    description:
      "How AP leaders manage operational resilience — from team capacity challenges to BPO, nearshoring and finance outsourcing in Poland.",
    image: "/images/accounts-payable-under-pressure.webp",
    date: "03/06/2026",
    author: "Joanna Włodarczyk",
    category: "Finance, BPO, Accounting, Management",
  },
  {
    slug: "dora-vs-outsourcing",
    title:
      "DORA and Financial Outsourcing: What You Really Need to Know Before Signing Your Next Contract",
    description:
      "DORA doesn't end financial outsourcing — it changes the conditions. A practical guide for CFOs and COOs on contracts, risks and safe BPO in the regulated world.",
    image: "/images/dora-compliance-outsourcing-article.webp",
    date: "24/02/2026",
    author: "Wiktoria Wierzbicka",
    category: "Compliance & Regulations",
  },
];
