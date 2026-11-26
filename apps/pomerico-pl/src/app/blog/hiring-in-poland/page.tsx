import type { Metadata } from "next";
import { withOgImage, blogPostOgImage } from "@/lib/og-image";
import { hiringInPoland } from "@/content/blog/hiring-in-poland";
import { blogPosts } from "@/content/blog/listing";
import { plBlogPostLabels, plLocale, plSiteUrl } from "@/content/ui-labels";
import { BlogPostTemplate } from "@pomerico/ui";

const TITLE = "Zatrudnianie w Polsce: co zrobić przed umową | Pomerico";
const DESCRIPTION =
  "Spółka, oddział, zatrudnienie bezpośrednie czy EOR? Co zagraniczna firma musi wiedzieć o ZUS, płacach, podatkach i pułapce B2B, zanim zatrudni w Polsce.";

export const metadata: Metadata = withOgImage(
  {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: "/blog/hiring-in-poland" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "article" },
  },
  blogPostOgImage(hiringInPoland)
);

export default function HiringInPolandPage() {
  return (
    <BlogPostTemplate
      post={hiringInPoland}
      slug="hiring-in-poland"
      category="Outsourcing HR, EOR, Compliance"
      relatedPosts={blogPosts.filter((p) => p.slug !== "hiring-in-poland")}
      labels={plBlogPostLabels}
      locale={plLocale}
      siteUrl={plSiteUrl}
    />
  );
}
