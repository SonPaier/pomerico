import type { Metadata } from "next";
import { polishSscsAndScandinavianExpectations } from "@/content/blog/polish-sscs-and-scandinavian-expectations";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = {
  title:
    "Polish SSCs and Scandinavian Expectations: Why Culture Matters | Pomerico",
  description:
    "Why culture, not the EUR/PLN exchange rate, decides whether Polish SSCs and Scandinavian companies build a lasting partnership - feedback, deadlines, initiative.",
  alternates: { canonical: "/blog/polish-sscs-and-scandinavian-expectations" },
  openGraph: {
    title:
      "Polish SSCs and Scandinavian Expectations: Why Culture Matters | Pomerico",
    description:
      "Why culture, not the EUR/PLN exchange rate, decides whether Polish SSCs and Scandinavian companies build a lasting partnership - feedback, deadlines, initiative.",
    type: "article",
  },
};

export default function PolishSscsAndScandinavianExpectationsPage() {
  return (
    <BlogPostTemplate
      post={polishSscsAndScandinavianExpectations}
      slug="polish-sscs-and-scandinavian-expectations"
      category="Finance, BPO, Shared Services"
      relatedPosts={blogPosts.filter(
        (p) => p.slug !== "polish-sscs-and-scandinavian-expectations",
      )}
    />
  );
}
