import type { Metadata } from "next";
import { doraVsOutsourcing } from "@/content/blog/dora-vs-outsourcing";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";

export const metadata: Metadata = {
  title: "DORA vs Outsourcing – Is Financial Outsourcing Safe?",
  description:
    "Is financial outsourcing safe in the world of DORA regulation? Learn how to stay compliant while leveraging BPO services in the EU financial sector.",
  alternates: { canonical: "/blog/dora-vs-outsourcing" },
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
