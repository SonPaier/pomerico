import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "bpo-business-process-outsourcing",
  title: "BPO – outsourcing procesów biznesowych",
  metaDescription:
    "BPO w Polsce: przejmujemy procesy finansowe, HR, administracyjne i back office z dedykowanym zespołem i managerem. Stała opłata miesięczna, uzgodnione KPI.",
  hero: {
    heading: "BPO – outsourcing procesów biznesowych w Polsce",
    description:
      "<p>Usługa BPO w Pomerico oznacza przejęcie pełnej odpowiedzialności za wybrane procesy operacyjne w Twojej firmie – np. HR, administrację, finanse czy wsparcie IT. Otrzymujesz gotowe rezultaty bez angażowania własnych zasobów. Pomerico zapewnia dedykowany zespół specjalistów, profesjonalne zarządzanie i gwarantuje realizację uzgodnionych KPI.</p>",
    iconList: [
      { bold: "Mniejsze obciążenie zespołu –", text: "Pomerico bierze pełną odpowiedzialność za procesy HR, finansowe, IT i administracyjne, dzięki czemu Twój zespół może skupić się na priorytetach strategicznych." },
      { bold: "Szybsze efekty operacyjne –", text: "Dedykowane zespoły i profesjonalne zarządzanie szybko dostarczają gotowe rezultaty – bez opóźnień i wąskich gardeł." },
      { bold: "Przewidywalna jakość –", text: "Uzgodnione KPI są realizowane konsekwentnie, co zapewnia stabilne, przewidywalne i wysokiej jakości wyniki operacyjne." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-operations-management.png", heading: "Optymalizacja kosztów operacyjnych", description: "Dzięki skutecznym rozwiązaniom podatkowym, prawnym i operacyjnym znacząco obniżamy koszty prowadzenia działalności. Współpraca z Pomerico to inwestycja, która się zwraca." },
    { icon: "/images/icon-folders-document-management.png", heading: "Kompleksowe wsparcie administracyjne", description: "Rekrutację, HR, płace i benefity w całości prowadzi Pomerico – Ty możesz skupić się na obszarach strategicznych." },
    { icon: "/images/icon-effectiveness-employee-growth.png", heading: "Skalowalność i szybkie wdrożenie", description: "Gotowe zespoły specjalistów możemy uruchomić w ciągu kilku dni, zależnie od usługi. Dotyczy to także rozwiązań nearshoringowych w Polsce dla firm międzynarodowych." },
    { icon: "/images/icon-checklist-compliance-audit.png", heading: "Dedykowany Project Manager", description: "Zapewniamy eksperta odpowiedzialnego za bieżącą komunikację, realizację celów i raportowanie wyników." },
  ],
  targetAudience: {
    heading: "Dla kogo jest nasze BPO?",
    description: "Nasze rozwiązania BPO są przeznaczone dla organizacji, które chcą oszczędzać czas, obniżać koszty i skupić się na tym, co naprawdę napędza ich rozwój. Przejmujemy operacje, aby Twoje zespoły mogły skoncentrować się na strategii, innowacjach i skalowaniu.",
    items: [
      { bold: "Dynamicznie rosnących firm –", text: "które potrzebują skalowalnego wsparcia operacyjnego (np. HR, finanse, IT)." },
      { bold: "Firm chcących obniżyć koszty zatrudnienia –", text: "bez kompromisów w jakości usług." },
      { bold: "Firm działających międzynarodowo –", text: "które potrzebują zaufanego partnera w Polsce, znającego lokalne przepisy, specyfikę rynku i kulturę." },
      { bold: "Organizacji ze złożonymi procesami –", text: "wymagającymi automatyzacji, standaryzacji lub świeżego spojrzenia na optymalizację." },
      { bold: "Firm szukających partnera, a nie dostawcy –", text: "kogoś, kto rozumie ich cele i bierze pełną odpowiedzialność za wyniki." },
    ],
  },
  tagline: {
    heading: "Firmy wybierają BPO od Pomerico, bo dostarczamy mierzalne wyniki – nie obietnice.",
    description: "92% skuteczności projektów, rotacja na poziomie 0–7% i pełne zespoły wdrożone w mniej niż 3 tygodnie – przy przejrzystej, stałej opłacie miesięcznej i bez ukrytych kosztów.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Analiza i diagnoza", description: "Zaczynamy od zrozumienia Twojej organizacji. Analizujemy obecne procesy, możliwości zespołu, koszty i wyzwania operacyjne. Na tej podstawie wskazujemy obszary, w których outsourcing przyniesie najwyższy zwrot z inwestycji." },
      { number: "02.", heading: "Projektowanie współpracy", description: "Budujemy model BPO dopasowany do Twoich potrzeb: definiujemy zakres, KPI, strukturę zespołu i narzędzia raportowe. Każdy projekt ma dedykowanego Project Managera i Team Leadera odpowiedzialnych za jakość i komunikację." },
      { number: "03.", heading: "Wdrożenie i onboarding", description: "W ciągu kilku tygodni przejmujemy Twoje procesy operacyjne. Zajmujemy się rekrutacją, onboardingiem, zgodnością z przepisami, administracją kadrową i płacową, zapewniając płynne przejście bez przestojów i zakłóceń. Twój zespół działa od pierwszego dnia." },
      { number: "04.", heading: "Raportowanie i optymalizacja", description: "Dostarczamy regularne raporty i strategiczne rekomendacje. Na podstawie danych stale optymalizujemy procesy, koszty i efektywność. Tak współpraca zmienia się w długoterminowe partnerstwo, a nie jednorazową usługę." },
    ],
  },
  details: {
    heading: "Czym się zajmujemy?",
    cards: [
      { icon: "/images/icon-person-growth-performance.png", heading: "Finanse i księgowość", description: "Administracja płacowa i kadrowa, controlling i raportowanie finansowe, fakturowanie i obsługa rozrachunków, budżetowanie i optymalizacja kosztów, zarządzanie przepływami pieniężnymi, sprawozdawczość podatkowa, wsparcie audytu, obsługa zakupów" },
      { icon: "/images/icon-gears-system-integration.png", heading: "HR i administracja", description: "Rekrutacja i pozyskiwanie talentów, zarządzanie kadrami, administracja benefitów pracowniczych, programy onboardingu i retencji, szkolenia i rozwój, zarządzanie wynikami, analityka HR" },
      { icon: "/images/icon-wrench-maintenance-services.png", heading: "IT i wsparcie techniczne", description: "Helpdesk i wsparcie techniczne, utrzymanie i konfiguracja systemów, monitoring aplikacji i rozwiązywanie problemów, zarządzanie dostępami i infrastrukturą, monitoring bezpieczeństwa IT, wdrażanie oprogramowania, zarządzanie usługami chmurowymi" },
      { icon: "/images/icon-person-growth-performance.png", heading: "Wsparcie marketingu i sprzedaży", description: "Badania rynku i analiza danych, obsługa CRM i aktualizacja baz danych, planowanie i koordynacja kampanii, obsługa klienta i komunikacja z klientami, prowadzenie mediów społecznościowych, tworzenie treści, generowanie leadów" },
      { icon: "/images/icon-umbrella-cost-efficiency.png", heading: "Operacje i back office", description: "Obsługa zamówień i zarządzanie przepływem pracy, koordynacja logistyki, wsparcie dostawców i podwykonawców, zarządzanie dokumentacją i raportowanie" },
      { icon: "/images/icon-id-card-employer-of-record.png", heading: "Compliance i zarządzanie ryzykiem", description: "Wsparcie w zakresie zgodności z przepisami, koordynacja audytu wewnętrznego, raportowanie ryzyka i kontrola procesów" },
    ],
  },
  testimonials: [
    {
      quote: "Pomerico Group wyróżnia się wiedzą z zakresu HR i kultury organizacyjnej. Nasze doświadczenia potwierdzają, że Pomerico Group to nie tylko ekspert, ale też rzetelny partner, który rozumie wyzwania związane z funkcjonowaniem organizacji. Trafnie identyfikują problemy i projektują skuteczne rozwiązania, dlatego współpraca z nimi to gwarancja rozwoju. Choć nie są dużą firmą, oferują przewagi wynikające z elastyczności, szybkiego podejmowania decyzji i prawdziwej troski we współpracy.",
      author: "Julia Kasparek-Guzik",
      role: "Dyrektor operacyjna",
      company: "Datumo",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "60-hires-1600-applications-40000-people-reached",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
  ],
};

export const faqItems: FAQItem[] = [
  {
    question: "Czym jest BPO w Polsce i jak Pomerico realizuje outsourcing procesów biznesowych?",
    answer: "BPO oznacza powierzenie nam pełnej odpowiedzialności za wybrane procesy operacyjne, takie jak HR, finanse, administracja czy wsparcie IT. W Pomerico nie tylko „przejmujemy zadania” – dostarczamy gotowe, mierzalne rezultaty. Ponad 2 000 zrealizowanych projektów i 92% skuteczności to gwarancja efektywności, zgodności z przepisami i przejrzystości na każdym etapie."
  },
  {
    question: "Jakie procesy mogę przekazać Pomerico?",
    answer: "Klienci powierzają nam płace, HR, rekrutację, controlling finansowy, IT Service Desk, a nawet całe operacje back office. Zapewniamy dedykowanych Project Managerów i jasne KPI (SLA, wskaźniki jakości), więc dokładnie wiesz, co otrzymujesz. To więcej niż outsourcing – to rozszerzenie Twojego biznesu."
  },
  {
    question: "Jakie korzyści przyniesie mojej firmie BPO?",
    answer: "Oszczędności (nawet o 33% niższe koszty operacyjne w projektach klientów), wyższa produktywność (wzrost wydajności nawet o 38%) i znacznie niższa rotacja (0–7% w zespołach outsourcingowych). Przede wszystkim zyskujesz zaufanego partnera, który zdejmuje z kadry zarządzającej ciężar administracji i pozwala skupić się na rozwoju."
  },
  {
    question: "Czy BPO opłaca się małym firmom i startupom?",
    answer: "Tak. Outsourcing obniża koszty stałe, eliminuje potrzebę budowania wewnętrznych działów HR i finansów, a z Pomerico możesz zacząć już od jednego pracownika – bez minimalnej skali."
  },
  {
    question: "Czy outsourcing jest bezpieczny prawnie i zgodny z RODO?",
    answer: "Tak. Pomerico zapewnia pełną zgodność z prawem pracy, przepisami podatkowymi i ubezpieczeniowymi, wymogami umownymi, poufnością i regulacjami branżowymi (np. DORA, RODO). Klienci otrzymują audytowalne procesy i kompletną dokumentację."
  },
  {
    question: "Jak szybko można rozpocząć współpracę?",
    answer: "Zwykle w ciągu 2–3 tygodni, a przy wcześniej zweryfikowanych kandydatach nawet szybciej. W przypadku większych zespołów onboarding trwa zazwyczaj o 50% krócej niż rekrutacja wewnętrzna."
  },
  {
    question: "Czy zespół outsourcingowy może pracować w pełni zdalnie?",
    answer: "Tak, zespół outsourcingowy może pracować całkowicie zdalnie. Pomerico specjalizuje się w budowaniu zespołów zdalnych w całej Europie i zarządzaniu nimi, dbając o sprawną komunikację, produktywność i integrację z Twoimi procesami wewnętrznymi. Nasze zespoły korzystają z bezpiecznych narzędzi do współpracy, platform do zarządzania projektami i regularnego raportowania, co pozwala utrzymać wysoką wydajność i odpowiedzialność także poza biurem. Praca zdalna daje dostęp do najlepszych specjalistów bez ograniczeń geograficznych, a my zajmujemy się koordynacją, zgodnością z przepisami i wsparciem operacyjnym, aby projekt przebiegał płynnie."
  },
  {
    question: "Które branże najczęściej korzystają z BPO w Polsce?",
    answer: "BPO (Business Process Outsourcing) jest w Polsce szeroko wykorzystywane w wielu sektorach dzięki wykwalifikowanym kadrom, konkurencyjnym kosztom i solidnej infrastrukturze operacyjnej. Najczęściej z usług BPO korzystają: finanse i bankowość – księgowość, płace, compliance i raportowanie; ubezpieczenia – obsługa polis, likwidacja szkód i obsługa klienta; IT i technologie – rozwój oprogramowania, wsparcie techniczne i operacje IT; produkcja i przemysł – zarządzanie łańcuchem dostaw, HR i procesy administracyjne; centra usług wspólnych (SSC) – operacje back office, zakupy i wsparcie operacyjne. Polscy dostawcy BPO, tacy jak Pomerico, pozwalają firmom z tych sektorów efektywnie skalować zespoły, optymalizować koszty i utrzymywać wysoką jakość usług."
  },
  {
    question: "Czy mogę połączyć BPO z innymi usługami, takimi jak PEO, płace czy rekrutacja?",
    answer: "Tak, wielu klientów korzysta z modelu łączonego. Pomerico działa jako jeden partner w zakresie HR, płac, kwestii prawnych, rekrutacji i operacji."
  },
];
