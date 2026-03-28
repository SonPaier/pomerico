import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { data } from "@/content/industries/intralogistics";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/industries/intralogistics" },
};

export default function IntralogisticsPage() {
  return <IndustryPageTemplate data={data} />;
}
