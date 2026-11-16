import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { accountsPayableProcessDocumentation } from "@/content/blog/accounts-payable-process-documentation";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = withOgImage({
  title: { absolute:
    "Accounts Payable Process Documentation: Why It Pays Off | Pomerico" },
  description:
    "How to document Accounts Payable processes: write for first-timers, cover the exceptions, keep it short, organise supporting documents and stay SOX-ready.",
  alternates: { canonical: "/blog/accounts-payable-process-documentation" },
  openGraph: {
    title:
      "Accounts Payable Process Documentation: Why It Pays Off | Pomerico",
    description:
      "How to document Accounts Payable processes: write for first-timers, cover the exceptions, keep it short, organise supporting documents and stay SOX-ready.",
    type: "article",
  },
}, blogPostOgImage(accountsPayableProcessDocumentation));

export default function AccountsPayableProcessDocumentationPage() {
  return (
    <BlogPostTemplate
      post={accountsPayableProcessDocumentation}
      slug="accounts-payable-process-documentation"
      category="Finance, Accounts Payable, Process Documentation"
      relatedPosts={blogPosts.filter(
        (p) => p.slug !== "accounts-payable-process-documentation",
      )}
    />
  );
}
