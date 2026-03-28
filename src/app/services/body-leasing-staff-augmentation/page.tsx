import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { data } from "@/content/services/body-leasing-staff-augmentation";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/body-leasing-staff-augmentation" },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
