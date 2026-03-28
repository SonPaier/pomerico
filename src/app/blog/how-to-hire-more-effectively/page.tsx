import type { Metadata } from "next";
import { howToHireMoreEffectively } from "@/content/blog/how-to-hire-more-effectively";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";

export const metadata: Metadata = {
  title: "How to Hire More Effectively in 2023",
  description:
    "Practical strategies for more effective hiring – from defining roles and sourcing candidates to onboarding and retention. Expert HR advice from Pomerico Group.",
  alternates: { canonical: "/blog/how-to-hire-more-effectively" },
};

export default function HowToHirePage() {
  return (
    <BlogPostTemplate
      post={howToHireMoreEffectively}
      slug="how-to-hire-more-effectively"
      relatedPosts={blogPosts}
    />
  );
}
