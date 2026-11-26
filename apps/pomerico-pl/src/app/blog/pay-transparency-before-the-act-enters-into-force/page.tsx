import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { payTransparencyBeforeTheActEntersIntoForce } from "@/content/blog/pay-transparency-before-the-act-enters-into-force";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const SLUG = "pay-transparency-before-the-act-enters-into-force";
const TITLE = "Jawność wynagrodzeń: co zrobić przed ustawą | Pomerico";
const DESCRIPTION =
  "Ustawa o jawności wynagrodzeń jeszcze nie obowiązuje, ale część obowiązków już tak. Od czego zacząć: opisy stanowisk, wartościowanie, siatki płac.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
  },
}, blogPostOgImage(payTransparencyBeforeTheActEntersIntoForce));

export default function PayTransparencyBeforeTheActEntersIntoForcePage() {
  return (
    <BlogPostTemplate
      post={payTransparencyBeforeTheActEntersIntoForce}
      slug={SLUG}
      // Kategoria z listy wpisów (listing.ts), żeby była spójna z kartami na /blog.
      category={blogPosts.find((p) => p.slug === SLUG)?.category ?? "Outsourcing HR, Compliance, Zarządzanie"}
      relatedPosts={blogPosts.filter((p) => p.slug !== SLUG)}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
