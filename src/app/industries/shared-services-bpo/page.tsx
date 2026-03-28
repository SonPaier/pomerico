import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { data } from "@/content/industries/shared-services-bpo";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/industries/shared-services-bpo" },
};

export default function SharedServicesBpoPage() {
  return <IndustryPageTemplate data={data} />;
}
