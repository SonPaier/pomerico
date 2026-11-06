import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { accountsPayableUnderPressure } from "@/content/blog/accounts-payable-under-pressure";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = withOgImage({
  title:
    "Accounts Payable Under Pressure – A Leader's Perspective | Pomerico",
  description:
    "How AP leaders manage operational resilience — from team capacity challenges to BPO, nearshoring and finance outsourcing in Poland. A practical perspective from Pomerico.",
  alternates: { canonical: "/blog/accounts-payable-under-pressure" },
  openGraph: {
    title:
      "Accounts Payable Under Pressure – A Leader's Perspective | Pomerico",
    description:
      "How AP leaders manage operational resilience — from team capacity challenges to BPO, nearshoring and finance outsourcing in Poland.",
    type: "article",
  },
}, blogPostOgImage(accountsPayableUnderPressure));

export default function AccountsPayableUnderPressurePage() {
  return (
    <BlogPostTemplate
      post={accountsPayableUnderPressure}
      slug="accounts-payable-under-pressure"
      category="Finance, BPO, Accounting, Management"
      relatedPosts={blogPosts.filter(
        (p) => p.slug !== "accounts-payable-under-pressure"
      )}
    />
  );
}
