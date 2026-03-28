import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { servicesListingHero, allServiceCards } from "@/content/services/listing";

export const metadata: Metadata = {
  title: "Services Overview – What We Do",
  description:
    "Explore Pomerico's full range of HR outsourcing, BPO, EOR, recruitment, and consulting services in Poland. Build teams and scale operations. Get started today.",
  alternates: { canonical: "/services" },
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
