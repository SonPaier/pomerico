import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { data } from "@/content/services/bpo-business-process-outsourcing";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/bpo-business-process-outsourcing" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
