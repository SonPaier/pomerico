import type { Metadata } from "next";
import { hiringInPoland } from "@/content/blog/hiring-in-poland";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = {
  title:
    "Hiring in Poland: What to Do Before You Sign the Contract | Pomerico",
  description:
    "Subsidiary, branch, direct employment or EOR? What a foreign company must know about ZUS, payroll, taxes and the B2B trap before hiring someone in Poland.",
  alternates: { canonical: "/blog/hiring-in-poland" },
  openGraph: {
    title:
      "Hiring in Poland: What to Do Before You Sign the Contract | Pomerico",
    description:
      "Subsidiary, branch, direct employment or EOR? What a foreign company must know about ZUS, payroll, taxes and the B2B trap before hiring someone in Poland.",
    type: "article",
  },
};

export default function HiringInPolandPage() {
  return (
    <BlogPostTemplate
      post={hiringInPoland}
      slug="hiring-in-poland"
      category="HR Outsourcing, EOR, Compliance"
      relatedPosts={blogPosts.filter((p) => p.slug !== "hiring-in-poland")}
    />
  );
}
