import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { polishSscsAndScandinavianExpectations } from "@/content/blog/polish-sscs-and-scandinavian-expectations";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const SLUG = "polish-sscs-and-scandinavian-expectations";
const TITLE = "Polskie SSC a oczekiwania Skandynawów | Pomerico";
const DESCRIPTION =
  "Dlaczego to kultura, a nie kurs EUR/PLN, decyduje o trwałej współpracy polskich SSC ze skandynawskimi firmami – feedback, terminy, inicjatywa.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
  },
}, blogPostOgImage(polishSscsAndScandinavianExpectations));

export default function PolishSscsAndScandinavianExpectationsPage() {
  return (
    <BlogPostTemplate
      post={polishSscsAndScandinavianExpectations}
      slug={SLUG}
      // Kategoria z listy wpisów (listing.ts), żeby była spójna z kartami na /blog.
      category={blogPosts.find((p) => p.slug === SLUG)?.category ?? "Finanse, BPO, Shared Services"}
      relatedPosts={blogPosts.filter((p) => p.slug !== SLUG)}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
