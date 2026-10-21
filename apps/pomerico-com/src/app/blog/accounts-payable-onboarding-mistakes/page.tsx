import type { Metadata } from "next";
import { accountsPayableOnboardingMistakes } from "@/content/blog/accounts-payable-onboarding-mistakes";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = {
  title:
    "Accounts Payable Onboarding: 7 Mistakes to Avoid | Pomerico",
  description:
    "The 7 most common Accounts Payable onboarding mistakes – and what works instead: a mentor, a day-by-day plan, an access checklist and weekly check-ins.",
  alternates: { canonical: "/blog/accounts-payable-onboarding-mistakes" },
  openGraph: {
    title:
      "Accounts Payable Onboarding: 7 Mistakes to Avoid | Pomerico",
    description:
      "The 7 most common Accounts Payable onboarding mistakes – and what works instead: a mentor, a day-by-day plan, an access checklist and weekly check-ins.",
    type: "article",
  },
};

export default function AccountsPayableOnboardingMistakesPage() {
  return (
    <BlogPostTemplate
      post={accountsPayableOnboardingMistakes}
      slug="accounts-payable-onboarding-mistakes"
      category="Finance, Accounts Payable, Onboarding"
      relatedPosts={blogPosts.filter(
        (p) => p.slug !== "accounts-payable-onboarding-mistakes",
      )}
    />
  );
}
