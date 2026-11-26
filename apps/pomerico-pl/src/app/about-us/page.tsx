import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@pomerico/ui";
import { TestimonialCarousel } from "@pomerico/ui/client";
import { CaseStudyGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import {
  aboutUsHero,
  aboutUsWhatWeDo,
  managementTeam,
  aboutCtaBanner,
  aboutTestimonials,
} from "@/content/about-us";
import { allCaseStudyCards } from "@/content/case-studies";
import {
  plCaseStudyGridLabels,
  plCtaSectionLabels,
  plHeroTrustImageAlt,
  plTestimonialCarouselProps,
} from "@/content/ui-labels";
import { submitContactForm } from "@/app/actions/contact";
import { TeamCarousel } from "./TeamCarousel";
import "./about-us.css";

const TITLE = "O nas – firma BPO i rekrutacyjna z Gdańska | Pomerico";
const DESCRIPTION =
  "Pomerico Group powstała w 2015 r. w Gdańsku jako agencja rekrutacyjna. Dziś to partner w BPO i outsourcingu finansów dla firm międzynarodowych w Polsce.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about-us" },
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
}, {
  url: "/images/og/pomerico-team-about-hero.jpg",
  width: 1200,
  height: 630,
  alt: "Zespół zarządzający Pomerico Group w jasnym studiu fotograficznym",
});

const TEAM_HEADING = "Poznaj nasz zespół zarządzający";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-blue text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex min-w-0 flex-col gap-6">
              <h1 className="font-heading text-3xl font-bold lg:text-5xl">
                {aboutUsHero.heading}
              </h1>
              <div
                className="text-lg leading-relaxed opacity-90"
                dangerouslySetInnerHTML={{ __html: aboutUsHero.description }}
              />
              <Image
                src="/images/pomerico-trusted-partner-badges.svg"
                alt={plHeroTrustImageAlt}
                width={384}
                height={60}
                className="mt-2 h-auto w-full max-w-sm"
                unoptimized
              />
            </div>
            <div>
              <div className="about-hero-team">
                <Image
                  src={aboutUsHero.teamImage}
                  alt="Zespół Pomerico Group"
                  fill
                  preload
                  quality={90}
                  sizes="100vw"
                  className="object-cover object-left-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Czym się zajmujemy */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading={"Czym się zajmujemy?\nZintegrowane rozwiązania biznesowe"}
            subtitle="Kompleksowy outsourcing w obszarze HR, finansów, IT i operacji."
          />

          {/* Naprzemienne karty */}
          <div className="flex flex-col gap-8">
            {aboutUsWhatWeDo.blocks.map((block, i) => (
              <div
                key={i}
                className="grid items-center gap-8 overflow-hidden rounded-lg border border-dark/5 bg-white lg:grid-cols-2"
              >
                {block.image && (
                <div
                  className={`${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    width={1200}
                    height={1800}
                    sizes="(min-width: 1280px) 600px, (min-width: 1024px) calc(50vw - 40px), calc(100vw - 50px)"
                    quality={90}
                    className="h-auto w-full object-contain"
                  />
                </div>
                )}
                <div
                  className={`p-8 lg:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div
                    className="text-base leading-relaxed text-dark/80 [&_b]:text-dark [&_strong]:text-dark"
                    dangerouslySetInnerHTML={{ __html: block.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misja / Wizja / Wartości */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {/* Misja */}
            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">
                NASZA
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-dark">
                Misja
              </h2>
              <p className="mx-auto mt-4 max-w-[340px] text-justify text-sm leading-relaxed text-dark/80 hyphens-auto [text-align-last:center]">
                Z pełnym zaangażowaniem dostarczamy <strong>elastyczne</strong>{" "}
                i <strong>skuteczne</strong>{" "}rozwiązania dopasowane do
                realiów naszych klientów. Budujemy długofalowe relacje oparte
                na zaufaniu, przejrzystej komunikacji i{" "}
                <strong>odpowiedzialności</strong> – dzięki czemu nasi klienci
                osiągają swoje cele biznesowe <strong>szybciej</strong> i
                skuteczniej.
              </p>
            </div>

            {/* Wizja */}
            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">
                NASZA
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-dark">
                Wizja
              </h2>
              <p className="mx-auto mt-4 max-w-[340px] text-justify text-sm leading-relaxed text-dark/80 hyphens-auto [text-align-last:center]">
                Być partnerem pierwszego wyboru dla naszych klientów – zarówno
                we wsparciu operacyjnym, jak i strategicznym – dzięki{" "}
                <strong>naszej skuteczności i przewidywalności</strong>.
                Tworzymy środowisko, w którym złożone procesy stają się dla
                klientów proste, a wyzwania biznesowe rozwiązujemy w duchu
                prawdziwego partnerstwa.
              </p>
            </div>

            {/* Wartości */}
            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">
                NASZE
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-dark">
                Wartości
              </h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-dark/80">
                <li>Skuteczność dzięki zrozumieniu</li>
                <li>Zaufanie</li>
                <li>Wzajemna odpowiedzialność</li>
                <li>Zaangażowanie</li>
                <li>Partnerstwo</li>
                <li>Jakość ponad ilość</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zespół zarządzający */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader heading={TEAM_HEADING} align="center" />

          <TeamCarousel
            members={managementTeam}
            label={TEAM_HEADING}
            navLabel="zespół zarządzający"
          />
        </div>
      </section>

      {/* Baner CTA */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-2xl font-bold leading-snug lg:text-3xl">
            {aboutCtaBanner.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {aboutCtaBanner.description}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded bg-primary-red px-8 py-3 font-ui text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          >
            SKONSULTUJ SIĘ Z EKSPERTEM
          </Link>
        </div>
      </section>

      {/* Opinie klientów */}
      <TestimonialCarousel
        testimonials={aboutTestimonials}
        {...plTestimonialCarouselProps}
      />

      {/* Case studies */}
      <CaseStudyGrid
        cards={allCaseStudyCards.slice(0, 4)}
        {...plCaseStudyGridLabels}
      />

      {/* CTA */}
      <CTASection submitAction={submitContactForm} labels={plCtaSectionLabels} />
    </>
  );
}
