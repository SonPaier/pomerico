import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { data } from "@/content/industries/information-technology";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/industries/information-technology" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function InformationTechnologyPage() {
  return <IndustryPageTemplate data={data} />;
}
