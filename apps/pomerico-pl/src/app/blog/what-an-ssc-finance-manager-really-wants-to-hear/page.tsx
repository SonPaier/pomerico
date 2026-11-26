import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { whatAnSscFinanceManagerReallyWantsToHear } from "@/content/blog/what-an-ssc-finance-manager-really-wants-to-hear";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const SLUG = "what-an-ssc-finance-manager-really-wants-to-hear";
const TITLE = "Czego finance manager w SSC oczekuje od partnera | Pomerico";
const DESCRIPTION =
  "Czego finance managerowie w SSC, BSC i GBS nie chcą słyszeć od partnerów outsourcingowych, a co przykuwa ich uwagę: konkret, brak zakłóceń, ryzyko.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
  },
}, blogPostOgImage(whatAnSscFinanceManagerReallyWantsToHear));

export default function WhatAnSscFinanceManagerReallyWantsToHearPage() {
  return (
    <BlogPostTemplate
      post={whatAnSscFinanceManagerReallyWantsToHear}
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
