import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { industriesListingHero, allIndustryCards } from "@/content/industries/listing";
import {
  plBreadcrumbAria,
  plBreadcrumbHome,
  plCardLinkLabel,
  plHeroTrustImageAlt,
  plSiteUrl,
} from "@/content/ui-labels";

const TITLE = "Outsourcing i rekrutacja w Polsce według branż | Pomerico";
const DESCRIPTION =
  "Outsourcing i rekrutacja w Polsce dla bankowości i ubezpieczeń, centrów usług wspólnych, produkcji, intralogistyki i firm IT.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/industries" },
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
});

export default function IndustriesPage() {
  return (
    <>
      <HeroSection data={industriesListingHero} trustImageAlt={plHeroTrustImageAlt} />

      <Breadcrumbs
        items={[
          { label: plBreadcrumbHome, href: "/" },
          { label: "Branże" },
        ]}
        siteUrl={plSiteUrl}
        ariaLabel={plBreadcrumbAria}
      />

      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading="Wszystkie branże"
            subtitle="Rozwiązania dopasowane do specyfiki każdego sektora."
          />
          <ServiceCardGrid cards={allIndustryCards} linkLabel={plCardLinkLabel} />
        </div>
      </section>
    </>
  );
}
