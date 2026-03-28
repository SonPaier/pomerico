import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";
import { data } from "@/content/case-studies/sales-manager";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/recruiting-a-strategic-country-sales-manager-for-market-expansion" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
