import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { howToHireMoreEffectively } from "@/content/blog/how-to-hire-more-effectively";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const SLUG = "how-to-hire-more-effectively";
const TITLE = "Jak rekrutować skuteczniej | Pomerico";
const DESCRIPTION =
  "Jak rekrutować skuteczniej: dobór narzędzi, Direct Search, profil kandydata, onboarding i niska rotacja. Praktyczne wskazówki HR od Pomerico Group.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
  },
}, blogPostOgImage(howToHireMoreEffectively));

export default function HowToHireMoreEffectivelyPage() {
  return (
    <BlogPostTemplate
      post={howToHireMoreEffectively}
      slug={SLUG}
      // Kategoria z listy wpisów (listing.ts), żeby była spójna z kartami na /blog.
      category={blogPosts.find((p) => p.slug === SLUG)?.category ?? "Rekrutacja i HR"}
      relatedPosts={blogPosts.filter((p) => p.slug !== SLUG)}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
