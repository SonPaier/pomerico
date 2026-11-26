import type { IndustryPageData } from "@pomerico/content";

export const data: IndustryPageData = {
  slug: "intralogistics",
  title: "Intralogistyka",
  metaDescription:
    "Pomerico wspiera firmy intralogistyczne w rozwoju i skalowaniu operacji: zespoły magazynowe, szybkie wdrożenie i pełna zgodność z przepisami.",
  hero: {
    heading: "Intralogistyka",
    description:
      "<p>Od <b>2015 roku</b> wspieramy firmy intralogistyczne w rozwoju i skalowaniu działalności. Dzięki bogatemu doświadczeniu i <b>unikalnemu know-how</b> jesteśmy <b>silnym partnerem liderów rynku</b>.</p><p>Mamy udokumentowane sukcesy w intralogistyce – odpowiadaliśmy m.in. za rekrutację i budowę zespołów dla pierwszego w pełni zautomatyzowanego magazynu <b>H&M</b> w Polsce.</p>",
    iconList: [
      { bold: "Sprawne operacje magazynowe –", text: "Pomerico zajmuje się rekrutacją, HR i wsparciem operacyjnym, dzięki czemu procesy intralogistyczne przebiegają płynnie i efektywnie." },
      { bold: "Szybkie uruchamianie zespołów –", text: "budujemy i skalujemy zespoły do projektów logistycznych, fulfillmentu i automatyzacji – bez przestojów operacyjnych." },
      { bold: "Niezawodność i zgodność z przepisami –", text: "zespoły są w pełni przeszkolone, zintegrowane i działają zgodnie ze standardami operacyjnymi, co gwarantuje stabilne i bezpieczne wyniki." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  services: [
    { icon: "/images/icon-gears-recruitment-process.png", heading: "Outsourcing procesów rekrutacyjnych (RPO)", description: "Rekrutacja specjalistów i menedżerów, w tym trudno dostępnych profili technicznych." },
    { icon: "/images/icon-folders-document-management.png", heading: "Body leasing", description: "Elastyczny dostęp do specjalistów, których potrzebujesz w danej chwili – bez bezpośredniego zatrudniania, np. inżynierów PLC, kontrolerów finansowych czy handlowców." },
    { icon: "/images/icon-person-growth-performance.png", heading: "EOR / PEO", description: "Pełne wsparcie prawne, podatkowe i kadrowe, które pozwala szybko i zgodnie z przepisami zatrudniać w Polsce bez zakładania lokalnej spółki." },
    { icon: "/images/icon-checklist-regulatory-compliance.png", heading: "Wejście na rynek", description: "Pomagamy firmom wejść na rynek polski w modelu doradczym lub outsourcingowym. Działamy jako Twój lokalny partner w Polsce." },
  ],
  tagline: {
    heading: "Firmy z branży intralogistycznej wybierają Pomerico, bo budujemy stabilne, wydajne zespoły – a nie tylko obsadzamy stanowiska.",
    description: "Dostarczamy gotowych do pracy specjalistów w ciągu kilku tygodni, ograniczamy rotację i zapewniamy płynną integrację – przy przejrzystych, stałych opłatach i bez ukrytych kosztów.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Analiza potrzeb i strategia nearshoringu", description: "Zaczynamy od poznania Twoich celów biznesowych, zakresu projektu, struktury zespołu, technologii, harmonogramu i priorytetów rekrutacyjnych. Otrzymujesz przejrzystą mapę drogową z rekomendowanymi rolami, przewidywaną dostępnością kandydatów, kosztami i modelami współpracy (EOR, kontraktowanie, zatrudnienie na stałe, model hybrydowy)." },
      { number: "02.", heading: "Projektowanie współpracy", description: "Pomerico przygotowuje dopasowany plan pozyskania kandydatów na Twoje stanowiska. Określamy:\n\nwymagane kompetencje i poziom doświadczenia,\nwskaźniki sukcesu dla każdej roli,\noczekiwania behawioralne i kulturowe,\nstos technologiczny i potrzeby projektowe." },
      { number: "03.", heading: "Wybór modelu zatrudnienia", description: "Wspólnie wybieramy strukturę dopasowaną do Twojej strategii:\n\nEOR – najszybsze zatrudnienie, bez lokalnej spółki\nKontraktowanie / staff augmentation – maksymalna elastyczność\nRekrutacja stała / RPO – budowa zespołu na lata\nModel hybrydowy – połączenie modeli dla optymalnego kosztu i stabilności.\n\nWszystkie kwestie prawne, płacowe i compliance bierze na siebie Pomerico." },
      { number: "04.", heading: "Onboarding i integracja operacyjna", description: "Koordynujemy wszystkie formalności. Twój zespół nearshore staje się w pełni operacyjny i zintegrowany z Twoimi procesami, narzędziami, rytuałami i stylem komunikacji." },
      { number: "05.", heading: "Bieżące wsparcie HR, płacowe i operacyjne", description: "Twój zespół skupia się na realizacji zadań – my zajmujemy się całą resztą." },
      { number: "06.", heading: "Skalowanie zespołu", description: "Wraz z rozwojem Twojej działalności Pomerico szybko rozbudowuje zespół nearshore – niezależnie od tego, czy potrzebujesz jednego dodatkowego specjalisty, całego zespołu, czy rozbudowy kilku działów. Skalowanie przebiega płynnie, zgodnie z przepisami i z pełnym wsparciem operacyjnym." },
    ],
  },
  testimonials: [
    {
      quote: "W codziennej pracy ważne jest dla mnie dotrzymywanie zobowiązań i ustaleń – i dokładnie tak wygląda współpraca z Pomerico Group. Proces przebiegł dokładnie tak, jak został przedstawiony na etapie oferty, z dużą koncentracją na moich oczekiwaniach i niestandardowym podejściem do samej realizacji. Wysoka jakość usługi, przejawiająca się rzetelnością, skutecznością i niezawodnością w doborze personelu, sprawia, że odpowiedzialny wybór Pomerico Group jako partnera okazał się trafną i opłacalną decyzją. Gorąco polecam.",
      author: "Tadeusz Kęsik",
      role: "Head of CSS Department",
      company: "SSI Schäfer",
    },
  ],
  trustedLogos: [
    { src: "/images/vanderlande-logo.png", alt: "Logo Vanderlande" },
    { src: "/images/ssi-schaefer-logo.png", alt: "Logo SSI Schäfer" },
    { src: "/images/kardex-logo.png", alt: "Logo Kardex" },
  ],
};
