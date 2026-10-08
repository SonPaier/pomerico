import type { Metadata } from "next";
import { recruitingForAnAccountsPayableTeam } from "@/content/blog/recruiting-for-an-accounts-payable-team";
import { blogPosts } from "@/content/blog/listing";
import { BlogPostTemplate } from "@pomerico/ui";

export const metadata: Metadata = {
  title:
    "Recruitment in Accounts Payable | Pomerico",
  description:
    "What an AP Team Lead really looks for when recruiting for an Accounts Payable team — accuracy, calm under month-end pressure, curiosity about numbers and integrity.",
  alternates: { canonical: "/blog/recruiting-for-an-accounts-payable-team" },
  openGraph: {
    title:
      "Recruitment in Accounts Payable | Pomerico",
    description:
      "What an AP Team Lead really looks for when recruiting for an Accounts Payable team — accuracy, calm under month-end pressure, curiosity about numbers and integrity.",
    type: "article",
  },
};

export default function RecruitingForAnAccountsPayableTeamPage() {
  return (
    <BlogPostTemplate
      post={recruitingForAnAccountsPayableTeam}
      slug="recruiting-for-an-accounts-payable-team"
      category="Finance, Accounting, Recruitment, Management"
      relatedPosts={blogPosts.filter(
        (p) => p.slug !== "recruiting-for-an-accounts-payable-team"
      )}
    />
  );
}
