import type { Metadata } from "next";
import { whatAnSscFinanceManagerReallyWantsToHear } from "@/content/blog/what-an-ssc-finance-manager-really-wants-to-hear";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = {
  title:
    "What an SSC Finance Manager Wants From an Outsourcing Partner | Pomerico",
  description:
    "What SSC, BSC and GBS finance managers don't want to hear from outsourcing partners - and what really gets their attention: structure, low disruption, risk.",
  alternates: { canonical: "/blog/what-an-ssc-finance-manager-really-wants-to-hear" },
  openGraph: {
    title:
      "What an SSC Finance Manager Wants From an Outsourcing Partner | Pomerico",
    description:
      "What SSC, BSC and GBS finance managers don't want to hear from outsourcing partners - and what really gets their attention: structure, low disruption, risk.",
    type: "article",
  },
};

export default function WhatAnSscFinanceManagerReallyWantsToHearPage() {
  return (
    <BlogPostTemplate
      post={whatAnSscFinanceManagerReallyWantsToHear}
      slug="what-an-ssc-finance-manager-really-wants-to-hear"
      category="Finance, BPO, Shared Services"
      relatedPosts={blogPosts.filter(
        (p) => p.slug !== "what-an-ssc-finance-manager-really-wants-to-hear",
      )}
    />
  );
}
