import type { IndustryPageData } from "@pomerico/content";

export const data: IndustryPageData = {
  slug: "manufacturing-industry",
  title: "Produkcja i przemysł",
  metaDescription:
    "Pomerico wspiera firmy produkcyjne i przemysłowe w budowie stabilnych, wydajnych zespołów oraz w optymalizacji procesów HR, płacowych i back office.",
  hero: {
    heading: "Produkcja i przemysł",
    description:
      "<p>Od 2015 roku wspieramy firmy produkcyjne i przemysłowe w budowaniu stabilnych i wydajnych zespołów. Dzięki sprawdzonemu doświadczeniu jesteśmy zaufanym partnerem międzynarodowych liderów – pomagamy im nie tylko zatrudniać inżynierów i techników, ale też optymalizować procesy HR, płacowe i back office.</p>",
    iconList: [
      { bold: "Sprawne zarządzanie kadrami –", text: "Pomerico przejmuje rekrutację, HR, płace i procesy back office, dzięki czemu Twoje zespoły mogą skupić się na produkcji i operacjach." },
      { bold: "Szybsza realizacja projektów –", text: "błyskawicznie wdrażamy inżynierów, techników i personel operacyjny, aby cele produkcyjne były realizowane bez opóźnień." },
      { bold: "Niezawodność operacyjna –", text: "zespoły są w pełni przeszkolone, zintegrowane i monitorowane, co zapewnia stałą wydajność i zgodność ze standardami branżowymi." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  servicesHeading: "Nasze usługi dla produkcji i przemysłu",
  services: [
    { icon: "/images/icon-gears-recruitment-process.png", heading: "Outsourcing procesów rekrutacyjnych (RPO)", description: "Rekrutacja specjalistów niedostępnych na tradycyjnych portalach z ogłoszeniami. Direct search i Assessment Center dopasowane do wymagań produkcji. Skalowanie zespołów projektowych w rekordowym czasie." },
    { icon: "/images/icon-folders-document-management.png", heading: "Body leasing / staff augmentation", description: "Dedykowani eksperci do projektów produkcyjnych, automatyzacji i logistyki wewnętrznej. Elastyczne wsparcie w zależności od zapotrzebowania i harmonogramu produkcji." },
    { icon: "/images/icon-person-growth-performance.png", heading: "EOR / PEO", description: "Zatrudnianie pracowników w pełnej zgodności z prawem, bez konieczności zakładania spółki w Polsce. Obsługa kwestii prawnych, kadrowych, płacowych i regulacyjnych – również dla zespołów międzynarodowych." },
    { icon: "/images/icon-checklist-regulatory-compliance.png", heading: "Wejście na rynek", description: "Pomagamy firmom produkcyjnym i przemysłowym wejść na rynek polski w modelu doradczym lub outsourcingowym. Jako Twój lokalny partner dbamy o zgodność z przepisami, usprawniamy operacje i przyspieszamy uruchomienie zespołu. Od założenia spółki po HR, płace i procesy operacyjne – Pomerico zapewnia kompleksowe wsparcie, a Ty możesz skupić się na produkcji i rozwoju na rynku." },
    { icon: "/images/icon-magnifier-security-verification.png", heading: "BPO – outsourcing procesów biznesowych", description: "Outsourcing procesów administracyjnych i operacyjnych: HR, księgowość, raportowanie, controlling. Zarządzanie back office, dzięki któremu zespoły produkcyjne mogą skupić się na kluczowej działalności." },
    { icon: "/images/icon-globe-international-expansion.png", heading: "Rozwiązania IT i cyfrowe", description: "Specjaliści IT wspierający automatyzację, systemy ERP, Big Data i analitykę produkcji. DevOps i wsparcie technologiczne w projektach cyfryzacji fabryk." },
  ],
  benefits: [
    { icon: "/images/icon-shield-trusted-by-candidates.png", heading: "Krótszy time-to-market", description: "Szybko skaluj zespoły dzięki w pełni zintegrowanym specjalistom i ograniczaj opóźnienia w realizacji projektów oraz uruchamianiu operacji." },
    { icon: "/images/icon-wrench-technical-support.png", heading: "Efektywność kosztowa", description: "Optymalizuj koszty operacyjne i kadrowe dzięki outsourcingowi, elastycznemu zatrudnieniu i usprawnionym procesom – bez kompromisów w jakości." },
    { icon: "/images/icon-handshake-partnership.png", heading: "Niezawodność operacyjna", description: "Stabilne, w pełni przeszkolone i zgodne z przepisami zespoły zapewniają powtarzalną realizację, minimalną rotację i przewidywalne wyniki." },
    { icon: "/images/icon-strategy-market-entry.png", heading: "Elastyczność i skalowalność", description: "Dopasowuj wielkość zespołu, kompetencje i zakres prac na bieżąco, aby szybko reagować na zmiany rynkowe i potrzeby projektów." },
  ],
  tagline: {
    heading: "Pomerico dostarcza stabilne zespoły, szybkie efekty i mierzalne rezultaty.",
    description: "Rotacja na poziomie 0–7%, zespoły wdrożone w kilka tygodni, przejrzyste koszty.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Analiza potrzeb i strategia nearshoringu", description: "Zaczynamy od poznania Twoich celów biznesowych, zakresu projektu, struktury zespołu, technologii, harmonogramu i priorytetów rekrutacyjnych. Otrzymujesz przejrzystą mapę drogową z rekomendowanymi rolami, przewidywaną dostępnością kandydatów, kosztami i modelami współpracy (EOR, kontraktowanie, zatrudnienie na stałe, model hybrydowy)." },
      { number: "02.", heading: "Projektowanie współpracy", description: "Pomerico przygotowuje dopasowany plan pozyskania kandydatów na Twoje stanowiska. Określamy: wymagane kompetencje i poziom doświadczenia, wskaźniki sukcesu dla każdej roli, oczekiwania behawioralne i kulturowe, stos technologiczny i potrzeby projektowe." },
      { number: "03.", heading: "Wybór modelu zatrudnienia", description: "Wspólnie wybieramy strukturę dopasowaną do Twojej strategii: EOR – najszybsze zatrudnienie, bez lokalnej spółki; kontraktowanie / staff augmentation – maksymalna elastyczność; rekrutacja stała – budowa zespołu na lata; model hybrydowy – połączenie modeli dla optymalnego kosztu i stabilności. Wszystkie kwestie prawne, płacowe i compliance bierze na siebie Pomerico." },
      { number: "04.", heading: "Onboarding i integracja operacyjna", description: "Koordynujemy wszystkie formalności. Twój zespół nearshore staje się w pełni operacyjny i zintegrowany z Twoimi procesami, narzędziami, rytuałami i stylem komunikacji." },
      { number: "05.", heading: "Bieżące wsparcie HR, płacowe i operacyjne", description: "Twój zespół skupia się na realizacji zadań – my zajmujemy się całą resztą." },
      { number: "06.", heading: "Skalowanie zespołu", description: "Wraz z rozwojem Twojej działalności Pomerico szybko rozbudowuje zespół nearshore – niezależnie od tego, czy potrzebujesz jednego dodatkowego specjalisty, całego zespołu, czy rozbudowy kilku działów. Skalowanie przebiega płynnie, zgodnie z przepisami i z pełnym wsparciem operacyjnym." },
    ],
  },
  testimonials: [
    {
      quote: "Niejednokrotnie wykazali się lojalnością i realizowali zadania ponad nasze oczekiwania, podejmując decyzje korzystne dla pracodawcy, a niekoniecznie we własnym interesie. Na podstawie naszych doświadczeń mogę z pełnym przekonaniem potwierdzić, że to najbardziej rzetelna, skuteczna i godna zaufania firma.",
      author: "Michał Karpowicz",
      role: "COO",
      company: "Babord VAP",
    },
  ],
  trustedLogos: [
    { src: "/images/sonac-logo.png", alt: "Logo Sonac" },
    { src: "/images/mmr-group-logo.png", alt: "Logo MMR Group" },
    { src: "/images/babord-logo.png", alt: "Logo Babord" },
  ],
};
