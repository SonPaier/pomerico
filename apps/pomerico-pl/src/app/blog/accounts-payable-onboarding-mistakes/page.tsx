import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { accountsPayableOnboardingMistakes } from "@/content/blog/accounts-payable-onboarding-mistakes";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const TITLE = "Onboarding w Accounts Payable: 7 błędów | Pomerico";
const DESCRIPTION =
  "7 najczęstszych błędów w onboardingu w Accounts Payable – i co działa zamiast nich: mentor, plan dzień po dniu, checklista dostępów i cotygodniowe rozmowy.";

export const metadata: Metadata = withOgImage(
  {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: "/blog/accounts-payable-onboarding-mistakes" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "article" },
  },
  blogPostOgImage(accountsPayableOnboardingMistakes)
);

export default function AccountsPayableOnboardingMistakesPage() {
  return (
    <BlogPostTemplate
      post={accountsPayableOnboardingMistakes}
      slug="accounts-payable-onboarding-mistakes"
      category="Finanse, Accounts Payable, Onboarding"
      relatedPosts={blogPosts.filter((p) => p.slug !== "accounts-payable-onboarding-mistakes")}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
