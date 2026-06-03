import type { Metadata } from "next";
import { doraVsOutsourcing } from "@/content/blog/dora-vs-outsourcing";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = {
  title:
    "DORA and Financial Outsourcing: What You Need to Know | Pomerico",
  description:
    "DORA doesn't end financial outsourcing — it changes the conditions. A practical guide for CFOs and COOs on contracts, risks and safe BPO in the regulated world.",
  alternates: { canonical: "/blog/dora-vs-outsourcing" },
  openGraph: {
    title:
      "DORA and Financial Outsourcing: What You Need to Know | Pomerico",
    description:
      "DORA doesn't end financial outsourcing — it changes the conditions. A practical guide for CFOs and COOs on contracts, risks and safe BPO in the regulated world.",
    type: "article",
  },
};

export default function DoraVsOutsourcingPage() {
  return (
    <BlogPostTemplate
      post={doraVsOutsourcing}
      slug="dora-vs-outsourcing"
      category="Compliance & Regulations"
      relatedPosts={blogPosts.filter((p) => p.slug !== "dora-vs-outsourcing")}
    />
  );
}
