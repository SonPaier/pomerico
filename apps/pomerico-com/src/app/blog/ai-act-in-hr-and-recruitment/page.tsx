import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { aiActInHrAndRecruitment } from "@/content/blog/ai-act-in-hr-and-recruitment";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = withOgImage({
  title: { absolute:
    "AI Act in HR and Recruitment: What Is Allowed Today | Pomerico" },
  description:
    "AI Act in HR: emotion recognition is already prohibited, CV screening becomes high-risk from 2 December 2027, and the GDPR applies now. Where to start.",
  alternates: { canonical: "/blog/ai-act-in-hr-and-recruitment" },
  openGraph: {
    title:
      "AI Act in HR and Recruitment: What Is Allowed Today | Pomerico",
    description:
      "AI Act in HR: emotion recognition is already prohibited, CV screening becomes high-risk from 2 December 2027, and the GDPR applies now. Where to start.",
    type: "article",
  },
}, blogPostOgImage(aiActInHrAndRecruitment));

export default function AiActInHrAndRecruitmentPage() {
  return (
    <BlogPostTemplate
      post={aiActInHrAndRecruitment}
      slug="ai-act-in-hr-and-recruitment"
      category="HR Outsourcing, Recruitment, Compliance"
      relatedPosts={blogPosts.filter(
        (p) => p.slug !== "ai-act-in-hr-and-recruitment",
      )}
    />
  );
}
