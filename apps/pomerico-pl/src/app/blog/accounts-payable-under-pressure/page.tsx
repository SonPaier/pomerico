import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { accountsPayableUnderPressure } from "@/content/blog/accounts-payable-under-pressure";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const TITLE = "Accounts Payable pod presją – perspektywa lidera | Pomerico";
const DESCRIPTION =
  "Jak liderzy AP budują odporność operacyjną – od problemów z przepustowością zespołu po BPO, nearshoring i outsourcing finansów w Polsce.";

export const metadata: Metadata = withOgImage(
  {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: "/blog/accounts-payable-under-pressure" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "article" },
  },
  blogPostOgImage(accountsPayableUnderPressure)
);

export default function AccountsPayableUnderPressurePage() {
  return (
    <BlogPostTemplate
      post={accountsPayableUnderPressure}
      slug="accounts-payable-under-pressure"
      category="Finanse, BPO, Księgowość, Zarządzanie"
      relatedPosts={blogPosts.filter((p) => p.slug !== "accounts-payable-under-pressure")}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
