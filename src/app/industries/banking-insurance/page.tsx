import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { data } from "@/content/industries/banking-insurance";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/industries/banking-insurance" },
};

export default function BankingInsurancePage() {
  return <IndustryPageTemplate data={data} />;
}
