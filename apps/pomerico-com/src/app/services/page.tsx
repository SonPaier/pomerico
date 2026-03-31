import type { Metadata } from "next";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { servicesListingHero, allServiceCards } from "@/content/services/listing";

export const metadata: Metadata = {
  title: "HR Outsourcing & BPO Services in Poland",
  description:
    "Explore Pomerico's full range of HR outsourcing, BPO, EOR, recruitment, and consulting services in Poland. Build teams and scale operations. Get started today.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "HR Outsourcing & BPO Services in Poland",
    description:
      "Explore Pomerico's full range of HR outsourcing, BPO, EOR, recruitment, and consulting services in Poland. Build teams and scale operations. Get started today.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection data={servicesListingHero} />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />

      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading="All Services"
            subtitle="Comprehensive outsourcing solutions for every business need."
          />
          <ServiceCardGrid cards={allServiceCards} />
        </div>
      </section>
    </>
  );
}
