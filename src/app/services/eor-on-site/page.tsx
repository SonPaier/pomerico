import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { data } from "@/content/services/eor-on-site";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/eor-on-site" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
