import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { data } from "@/content/services/finance-outsourcing-contracting";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/finance-outsourcing-contracting" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
