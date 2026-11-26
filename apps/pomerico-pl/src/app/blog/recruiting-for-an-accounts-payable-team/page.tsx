import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { recruitingForAnAccountsPayableTeam } from "@/content/blog/recruiting-for-an-accounts-payable-team";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const SLUG = "recruiting-for-an-accounts-payable-team";
const TITLE = "Rekrutacja do zespołu Accounts Payable | Pomerico";
const DESCRIPTION =
  "Czego Accounts Payable Manager naprawdę szuka w kandydatach do zespołu AP: dokładności, spokoju przy zamknięciu miesiąca, ciekawości liczb i uczciwości.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
  },
}, blogPostOgImage(recruitingForAnAccountsPayableTeam));

export default function RecruitingForAnAccountsPayableTeamPage() {
  return (
    <BlogPostTemplate
      post={recruitingForAnAccountsPayableTeam}
      slug={SLUG}
      // Kategoria z listy wpisów (listing.ts), żeby była spójna z kartami na /blog.
      category={blogPosts.find((p) => p.slug === SLUG)?.category ?? "Finanse, Księgowość, Rekrutacja, Zarządzanie"}
      relatedPosts={blogPosts.filter((p) => p.slug !== SLUG)}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
