import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { data } from "@/content/industries/manufacturing-industry";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/industries/manufacturing-industry" },
};

export default function ManufacturingIndustryPage() {
  return <IndustryPageTemplate data={data} />;
}
