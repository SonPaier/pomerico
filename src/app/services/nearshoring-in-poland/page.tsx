import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { data } from "@/content/services/nearshoring-in-poland";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/nearshoring-in-poland" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
