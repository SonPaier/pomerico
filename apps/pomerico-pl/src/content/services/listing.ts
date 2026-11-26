import type { ServiceCard, IconListItem } from "@pomerico/content";

export const servicesListingHero = {
  heading: "Usługi outsourcingowe w Polsce",
  description:
    "W Pomerico pomagamy firmom z całej Europy budować wydajne zespoły, usprawniać operacje i w pełni wykorzystywać potencjał wzrostu. Nasze kompleksowe usługi odpowiadają na realne wyzwania biznesowe – od skalowania zespołów i poprawy efektywności operacyjnej po zapewnienie zgodności z przepisami i wsparcie transformacji cyfrowej.",
  iconList: [
    { bold: "Szybsza i sprawniejsza", text: "realizacja kluczowych procesów biznesowych" },
    { bold: "Mniejsza złożoność", text: "operacyjna i obciążenie administracyjne" },
    { bold: "Dostęp do najlepszych", text: "specjalistów z wielu dziedzin" },
    { bold: "Zgodność z przepisami", text: "prawa i regulacjami" },
    { bold: "Długoterminowa skalowalność", text: "i odporność działalności biznesowej" },
  ] satisfies IconListItem[],
  trustImage: "/images/pomerico-trusted-partner-badges.svg",
};

export const allServiceCards: ServiceCard[] = [
  { icon: "/images/icon-target-bpo-outsourcing.png", heading: "BPO – outsourcing procesów biznesowych", description: "Przejmujemy całe procesy biznesowe, abyś mógł skupić się na kluczowej strategii. Od operacji back office po obsługę klienta – nasze zespoły zapewniają mierzalny wzrost efektywności.", href: "/services/bpo-business-process-outsourcing" },
  { icon: "/images/icon-shield-trusted-by-candidates.png", heading: "PEO – Professional Employer Organization", description: "Dzielisz obowiązki pracodawcy, zachowując pełną kontrolę operacyjną. Zajmujemy się płacami, benefitami i zgodnością z przepisami, a Ty zarządzasz swoim zespołem.", href: "/services/peo-professional-employer-organization" },
  { icon: "/images/icon-effectiveness-employee-growth.png", heading: "Outsourcing finansów i kontraktowanie", description: "Uporządkowane operacje finansowe z pewną zgodnością z przepisami i rzetelnym raportowaniem. Zapewniamy wykwalifikowanych specjalistów finansowych, którzy wpisują się w Twoje procesy i szybciej dostarczają wyniki.", href: "/services/finance-outsourcing-contracting" },
  { icon: "/images/icon-gears-recruitment-process.png", heading: "Body leasing / staff augmentation", description: "Elastycznie skaluj zespół dzięki zweryfikowanym specjalistom, bez długoterminowych zobowiązań. Szybko zyskujesz ekspertów, którzy płynnie dołączają do Twojej struktury.", href: "/services/body-leasing-staff-augmentation" },
  { icon: "/images/icon-hr-team-search.png", heading: "Outsourcing i doradztwo HR", description: "Strategiczne wsparcie HR – od rekrutacji po retencję i rozwój organizacji. Projektujemy i wdrażamy rozwiązania HR dopasowane do etapu rozwoju Twojej firmy.", href: "/services/hr-outsourcing-consulting" },
  { icon: "/images/icon-magnifier-security-verification.png", heading: "EOR – Employer of Record", description: "Zatrudniaj legalnie w Polsce bez zakładania lokalnej spółki. Zajmujemy się umowami, płacami, podatkami i pełną zgodnością z przepisami, abyś mógł od razu wdrażać nowych pracowników.", href: "/services/eor-employer-of-record" },
  { icon: "/images/icon-handshake-partnership.png", heading: "EOR + On Site", description: "Employer of Record połączony z dedykowanym zarządzaniem i koordynacją na miejscu. Dbamy o to, by Twoje zespoły zdalne działały równie sprawnie jak działy wewnętrzne.", href: "/services/eor-on-site" },
  { icon: "/images/icon-puzzle-team-integration.png", heading: "Usługi rekrutacyjne / RPO", description: "Rekrutacja end-to-end prowadzona przez doświadczonych specjalistów HR. Od sourcingu i selekcji po zatrudnienie – szybko dostarczamy wykwalifikowanych kandydatów.", href: "/services/recruitment-services-rpo" },
  { icon: "/images/icon-folders-document-management.png", heading: "Kontraktowanie IT", description: "Zyskaj dostęp do wykwalifikowanych specjalistów IT do projektów lub stałej współpracy. Pozyskujemy programistów, inżynierów i tech leadów we wszystkich głównych technologiach.", href: "/services/it-contracting" },
  { icon: "/images/icon-globe-international-expansion.png", heading: "Wejście na rynek polski", description: "Uruchom działalność w Polsce z eksperckim wsparciem prawnym, podatkowym i kadrowym. Prowadzimy Cię przez każdy etap – od założenia spółki po zatrudnienie pierwszego lokalnego zespołu.", href: "/services/market-entry-in-poland" },
  { icon: "/images/icon-wrench-reduced-turnover.png", heading: "Doradztwo biznesowe / podatki i prawo", description: "Eksperckie doradztwo w zakresie polskich przepisów podatkowych, zgodności prawnej i strategii biznesowej. Pomagamy firmom międzynarodowym pewnie poruszać się w polskim otoczeniu regulacyjnym.", href: "/services/business-consulting-tax-law" },
  { icon: "/images/icon-workflow-process-automation.png", heading: "Nearshoring w Polsce", description: "Wykorzystaj wykwalifikowane kadry w Polsce i lokalizację w UE do efektywnego kosztowo nearshoringu. Budujemy dedykowane zespoły pracujące w Twojej strefie czasowej i zarządzamy nimi.", href: "/services/nearshoring-in-poland" },
];
