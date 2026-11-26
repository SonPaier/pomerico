import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { doraVsOutsourcing } from "@/content/blog/dora-vs-outsourcing";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const TITLE = "DORA a outsourcing finansowy: co musisz wiedzieć | Pomerico";
const DESCRIPTION =
  "DORA nie kończy outsourcingu finansowego – zmienia jego warunki. Praktyczny przewodnik dla CFO i COO: umowy, ryzyka i bezpieczny BPO w świecie regulacji.";

export const metadata: Metadata = withOgImage(
  {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: "/blog/dora-vs-outsourcing" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "article" },
  },
  blogPostOgImage(doraVsOutsourcing)
);

export default function DoraVsOutsourcingPage() {
  return (
    <BlogPostTemplate
      post={doraVsOutsourcing}
      slug="dora-vs-outsourcing"
      category="Compliance i regulacje"
      relatedPosts={blogPosts.filter((p) => p.slug !== "dora-vs-outsourcing")}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
