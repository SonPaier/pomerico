import type { ServiceCard, IconListItem } from "@pomerico/content";

export const industriesListingHero = {
  heading: "Outsourcing i rekrutacja dla Twojej branży",
  description:
    "Pomerico współpracuje z firmami z wielu branż – budujemy wydajne zespoły, usprawniamy operacje i optymalizujemy procesy. Od produkcji i logistyki po finanse i IT dostarczamy rozwiązania szyte na miarę, które podnoszą efektywność, zapewniają zgodność z przepisami i wspierają zrównoważony rozwój. Dzięki naszemu doświadczeniu firmy skalują się z pewnością, rozwiązują problemy operacyjne i osiągają mierzalne rezultaty.",
  iconList: [
    { bold: "Wspieramy firmy przemysłowe", text: "i produkcyjne w budowaniu wydajnych zespołów" },
    { bold: "Usprawniamy operacje,", text: "by zwiększyć efektywność, ograniczyć złożoność i przyspieszyć realizację projektów" },
    { bold: "Optymalizujemy procesy", text: "w logistyce, produkcji, finansach i HR" },
    { bold: "Zapewniamy zgodność", text: "z regulacjami branżowymi i standardami wewnętrznymi" },
    { bold: "Umożliwiamy skalowanie,", text: "aby Twoja organizacja rosła stabilnie, bez utraty wydajności" },
    { bold: "Dajemy dostęp do ekspertów", text: "– specjalistów z inżynierii, IT, finansów i zarządzania operacyjnego" },
  ] satisfies IconListItem[],
  trustImage: "/images/pomerico-trusted-partner-badges.svg",
};

export const allIndustryCards: ServiceCard[] = [
  { icon: "/images/icon-gears-system-integration.png", heading: "Intralogistyka", description: "Budujemy wykwalifikowane zespoły utrzymania ruchu, operacji i inżynierii dla zautomatyzowanych magazynów, centrów dystrybucyjnych i obiektów łańcucha dostaw w całej Europie.", href: "/industries/intralogistics" },
  { icon: "/images/icon-person-growth-performance.png", heading: "Bankowość i ubezpieczenia", description: "Dostarczamy specjalistów ds. finansów, ryzyka i operacji, przygotowanych do pracy w środowisku regulowanym – dla banków, ubezpieczycieli i fintechów działających w Polsce i UE.", href: "/industries/banking-insurance" },
  { icon: "/images/icon-brain-it-expertise.png", heading: "Technologie informatyczne", description: "Pozyskujemy programistów, inżynierów, specjalistów DevOps i liderów IT dla software house’ów, platform SaaS i korporacyjnych zespołów technologicznych.", href: "/industries/information-technology" },
  { icon: "/images/icon-wrench-reduced-turnover.png", heading: "Produkcja i przemysł", description: "Rekrutujemy kierowników produkcji, inżynierów jakości i specjalistów technicznych dla zakładów produkcyjnych, obiektów przemysłowych i linii produkcyjnych.", href: "/industries/manufacturing-industry" },
  { icon: "/images/icon-puzzle-team-integration.png", heading: "Centra usług wspólnych / BPO", description: "Obsadzamy i prowadzimy centra usług wspólnych (SSC), huby outsourcingowe i operacje BPO – ze skalowalnymi zespołami w finansach, HR i obsłudze klienta.", href: "/industries/shared-services-bpo" },
];
