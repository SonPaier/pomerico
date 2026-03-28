import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { data } from "@/content/services/hr-outsourcing-consulting";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/hr-outsourcing-consulting" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
