import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { aiActInHrAndRecruitment } from "@/content/blog/ai-act-in-hr-and-recruitment";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const SLUG = "ai-act-in-hr-and-recruitment";
const TITLE = "AI Act w HR i rekrutacji: co wolno w 2026 r. | Pomerico";
const DESCRIPTION =
  "Co AI Act zakazuje w HR już dziś, co wolno i co zmieni się 2.12.2027. Daty po Digital Omnibus, obowiązki pracodawcy, przykłady i plan.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
  },
}, blogPostOgImage(aiActInHrAndRecruitment));

export default function AiActInHrAndRecruitmentPage() {
  return (
    <BlogPostTemplate
      post={aiActInHrAndRecruitment}
      slug={SLUG}
      // Kategoria z listy wpisów (listing.ts), żeby była spójna z kartami na /blog.
      category={blogPosts.find((p) => p.slug === SLUG)?.category ?? "Outsourcing HR, Rekrutacja, Compliance"}
      relatedPosts={blogPosts.filter((p) => p.slug !== SLUG)}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
