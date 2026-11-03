import type { Metadata } from "next";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { industriesListingHero, allIndustryCards } from "@/content/industries/listing";

export const metadata: Metadata = {
  title: { absolute: "Outsourcing & Recruitment in Poland by Industry | Pomerico" },
  description:
    "Outsourcing and recruitment in Poland for banking & insurance, shared services, manufacturing, intralogistics and IT companies.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Outsourcing & Recruitment in Poland by Industry | Pomerico",
    description:
      "Outsourcing and recruitment in Poland for banking & insurance, shared services, manufacturing, intralogistics and IT companies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsourcing & Recruitment in Poland by Industry | Pomerico",
    description:
      "Outsourcing and recruitment in Poland for banking & insurance, shared services, manufacturing, intralogistics and IT companies.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <HeroSection data={industriesListingHero} />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading="All Industries"
            subtitle="Tailored solutions for every sector."
          />
          <ServiceCardGrid cards={allIndustryCards} />
        </div>
      </section>
    </>
  );
}
