import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { accountsPayableProcessDocumentation } from "@/content/blog/accounts-payable-process-documentation";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const TITLE = "Dokumentacja procesów Accounts Payable | Pomerico";
const DESCRIPTION =
  "Jak dokumentować procesy Accounts Payable: pisz dla nowicjusza, opisuj wyjątki, pisz zwięźle, porządkuj dokumenty źródłowe i bądź gotowy na audyt SOX.";

export const metadata: Metadata = withOgImage(
  {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: "/blog/accounts-payable-process-documentation" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "article" },
  },
  blogPostOgImage(accountsPayableProcessDocumentation)
);

export default function AccountsPayableProcessDocumentationPage() {
  return (
    <BlogPostTemplate
      post={accountsPayableProcessDocumentation}
      slug="accounts-payable-process-documentation"
      category="Finanse, Accounts Payable, Dokumentacja procesów"
      relatedPosts={blogPosts.filter((p) => p.slug !== "accounts-payable-process-documentation")}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
