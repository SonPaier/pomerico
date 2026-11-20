import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { payTransparencyBeforeTheActEntersIntoForce } from "@/content/blog/pay-transparency-before-the-act-enters-into-force";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = withOgImage({
  title: { absolute:
    "Pay Transparency in Poland: What to Do Before the Act | Pomerico" },
  description:
    "The Polish pay transparency act is not in force yet, but some obligations already apply. Where to start: job descriptions, job evaluation, pay grades.",
  alternates: { canonical: "/blog/pay-transparency-before-the-act-enters-into-force" },
  openGraph: {
    title:
      "Pay Transparency in Poland: What to Do Before the Act | Pomerico",
    description:
      "The Polish pay transparency act is not in force yet, but some obligations already apply. Where to start: job descriptions, job evaluation, pay grades.",
    type: "article",
  },
}, blogPostOgImage(payTransparencyBeforeTheActEntersIntoForce));

export default function PayTransparencyBeforeTheActEntersIntoForcePage() {
  return (
    <BlogPostTemplate
      post={payTransparencyBeforeTheActEntersIntoForce}
      slug="pay-transparency-before-the-act-enters-into-force"
      category="HR Outsourcing, Compliance, Management"
      relatedPosts={blogPosts.filter(
        (p) => p.slug !== "pay-transparency-before-the-act-enters-into-force",
      )}
    />
  );
}
