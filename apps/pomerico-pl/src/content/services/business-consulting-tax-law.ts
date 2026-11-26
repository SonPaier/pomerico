import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "business-consulting-tax-law",
  title: "Doradztwo biznesowe / podatki i prawo",
  metaDescription:
    "Poruszaj się pewnie w polskich przepisach. Zabezpieczamy zgodność prawną, podatkową i operacyjną Twojej firmy – abyś mógł bezpiecznie się rozwijać.",
  hero: {
    heading: "Doradztwo biznesowe, podatkowe i prawne w Polsce",
    description:
      "<p><b>Poruszaj się pewnie w polskich przepisach. Zabezpieczamy zgodność prawną, podatkową i operacyjną Twojej firmy – abyś mógł bezpiecznie się rozwijać.</b></p><p>Pomerico zapewnia kompleksowe doradztwo biznesowe, podatkowe i prawne dla firm działających w Polsce lub wchodzących na polski rynek.<br/>Łączymy wiedzę prawniczą, doradztwo operacyjne i compliance kadrowo-płacowy, aby Twój biznes działał sprawnie, bezpiecznie i efektywnie kosztowo – niezależnie od wielkości i etapu rozwoju.<br/>Niezależnie od tego, czy potrzebujesz nadzoru prawnego, jasności w sprawach podatkowych, założenia spółki, wsparcia operacyjnego czy zarządzania ryzykiem regulacyjnym – nasi eksperci przeprowadzą Cię przez każdy etap.</p>",
    iconList: [
      { bold: "Bezproblemowe zarządzanie zgodnością –", text: "Pomerico zajmuje się wszystkimi sprawami prawnymi, podatkowymi i operacyjnymi, w tym compliance kadrowo-płacowym, dzięki czemu Twój zespół może skupić się na rozwoju biznesu." },
      { bold: "Szybsze wejście na rynek –", text: "Sprawdzone procesy i eksperckie doradztwo pozwalają szybko uruchomić działalność w Polsce i skalować ją bez opóźnień, unikając ryzyk związanych z rejestracją, podatkami i zgodnością z przepisami." },
      { bold: "Gwarancja bezpieczeństwa operacyjnego –", text: "Dzięki kompleksowemu wsparciu i stałej opiece ekspertów Twoja działalność pozostaje w pełni zgodna z przepisami, bez ryzyka sankcji czy przestojów." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-process-optimization.png", heading: "Doradztwo prawne (Polska / UE)", description: "Umowy o pracę i dokumentacja, zgodność z prawem pracy, RODO i bezpieczeństwo danych, regulaminy i polityki wewnętrzne, zapobieganie sporom i ograniczanie ryzyka, formy współpracy: B2B / UoP / EOR / PEO." },
    { icon: "/images/icon-chart-growth-scalability.png", heading: "Doradztwo biznesowe i operacyjne", description: "Strategia wejścia na rynek i założenie spółki, optymalizacja procesów (HR, płace, finanse), audyty zgodności, ocena ryzyka operacyjnego, procesy onboardingu i obiegu dokumentów, wsparcie restrukturyzacji i skalowania." },
    { icon: "/images/icon-folders-document-management.png", heading: "Doradztwo podatkowe i płacowe", description: "Zgodność płacowa i modele kalkulacji wynagrodzeń, podatki, ZUS, benefity i dodatki, optymalizacja podatkowa dla pracowników i kontraktorów, wsparcie płac transgranicznych, symulacje kosztów zatrudnienia lub założenia spółki." },
  ],
  targetAudience: {
    heading: "Rozpoznajesz swoją sytuację?",
    description: "Najlepiej sprawdzamy się w firmach na szczególnym etapie – gdy koszt błędów w compliance jest wyższy niż koszt eksperckiego wsparcia.",
    items: [
      { bold: "Wejście do Polski", text: "Spółka czy EOR, struktura podatkowa, pierwsze umowy o pracę, obowiązki regulacyjne – wszystko mapujemy, zanim podejmiesz decyzję." },
      { bold: "Szybki wzrost", text: "Audytujemy Twoje obecne rozwiązania, usuwamy luki w compliance i budujemy ramy prawne i kadrowe, które rosną razem z Tobą – a nie przeciwko Tobie." },
      { bold: "Restrukturyzacja", text: "Wymagająca struktury prawnej, ram HR, dokumentacji wewnętrznej i bezpiecznych procesów." },
    ],
  },
  tagline: {
    heading: "Nie wiesz, od czego zacząć? Opisz nam swoją sytuację.",
    description: "Bez formularzy. Bez zobowiązań. Po prostu konkretna odpowiedź od kogoś, kto zna polskie przepisy.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Analiza i diagnoza", description: "Analizujemy Twój model biznesowy, obecne ryzyka, dokumentację, struktury płacowe i wymogi regulacyjne. Otrzymujesz jasną mapę drogową z priorytetami i rekomendacjami." },
      { number: "02.", heading: "Wybór modelu doradztwa", description: "Wybierz odpowiedni zakres: stałe wsparcie prawne i podatkowe, pakiety godzin doradczych, projekty compliance (audyty, polityki, transfery procesów), wsparcie przy wejściu na rynek lub restrukturyzacji." },
      { number: "03.", heading: "Dokumentacja i wdrożenie zgodności", description: "Przygotowujemy lub aktualizujemy: umowy, aneksy, regulaminy, polityki, dokumentację RODO, struktury płacowe, procesy administracji kadrowej i procesy operacyjne." },
      { number: "04.", heading: "Bieżące wsparcie i opieka ekspertów", description: "Monitorujemy zmiany w przepisach, dbamy o zgodność, doradzamy w decyzjach dotyczących zatrudnienia i wspieramy codzienne operacje." },
      { number: "05.", heading: "Skalowanie i zarządzanie ryzykiem", description: "Wraz z rozwojem Twojej firmy aktualizujemy ramy prawne, dokumentację, modele podatkowe i procesy HR, aby Twoja organizacja działała bezpiecznie i efektywnie." },
    ],
  },
  details: {
    heading: "Trzy obszary. Odpowiedź na każde pytanie o compliance.",
    subheading: "Niezależnie od tego, czy wchodzisz do Polski po raz pierwszy, szybko się rozwijasz, czy przechodzisz restrukturyzację – bierzemy na siebie złożoność prawną, podatkową i operacyjną, aby Twój zespół nie musiał.",
    cards: [
      { icon: "/images/icon-gears-process-optimization.png", heading: "Doradztwo prawne (Polska / UE)", description: "Nie masz pewności, czy Twój model zatrudnienia jest zgodny z prawem? Przeglądamy umowy, struktury B2B i dokumentację pracowniczą – i wskazujemy ryzyka, zanim staną się problemami. Umowy o pracę i dokumentacja, zgodność z prawem pracy, RODO i bezpieczeństwo danych, regulaminy i polityki wewnętrzne, zapobieganie sporom i ograniczanie ryzyka, formy współpracy: B2B / UoP / EOR / PEO." },
      { icon: "/images/icon-chart-growth-scalability.png", heading: "Doradztwo biznesowe i operacyjne", description: "Planujesz otworzyć spółkę w Polsce, ale nie wiesz, jaka forma prawna pasuje do Twojej struktury? Mapujemy opcje, liczymy koszty i prowadzimy Cię przez rejestrację. Strategia wejścia na rynek i założenie spółki, optymalizacja procesów (HR, płace, finanse), audyty zgodności, ocena ryzyka operacyjnego, procesy onboardingu i obiegu dokumentów, wsparcie restrukturyzacji i skalowania." },
      { icon: "/images/icon-folders-document-management.png", heading: "Doradztwo podatkowe i płacowe", description: "Zatrudniasz specjalistów w Polsce i zastanawiasz się, jak zrobić to efektywnie kosztowo? Przygotowujemy pełne symulacje kosztów: UoP, B2B czy EOR – na prawdziwych liczbach, a nie szacunkach. Zgodność płacowa i modele kalkulacji wynagrodzeń, podatki, ZUS, benefity i dodatki, optymalizacja podatkowa dla pracowników i kontraktorów, wsparcie płac transgranicznych, symulacje kosztów zatrudnienia lub założenia spółki." },
    ],
  },
  testimonials: [
    {
      quote: "Pomerico Group ma świetny zespół liderów i ludzi o kreatywnych talentach. To osobowości, które w naturalny sposób przyciągają innych, a Zarząd firmy wyróżnia się w biznesie szczególnie etyczną postawą. Branża doradcza jest tu wyborem wynikającym z pasji do ludzi – i to widać.",
      author: "Marek Makarewicz",
      role: "Financial Modeling Associate",
      company: "London Stock Exchange Group",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
};

/** Karty trzech obszarów doradztwa (sekcja „Trzy obszary…”) */
export const consultingCards = [
  {
    icon: "/images/icon-gears-process-optimization.png",
    heading: "Doradztwo prawne (Polska / UE)",
    quote: "Nie masz pewności, czy Twój model zatrudnienia jest zgodny z prawem? Przeglądamy umowy, struktury B2B i dokumentację pracowniczą – i wskazujemy ryzyka, zanim staną się problemami.",
    items: [
      "Umowy o pracę i dokumentacja",
      "Zgodność z prawem pracy",
      "RODO i bezpieczeństwo danych",
      "Regulaminy i polityki wewnętrzne",
      "Zapobieganie sporom i ograniczanie ryzyka",
      "Formy współpracy: B2B / UoP / EOR / PEO",
    ],
  },
  {
    icon: "/images/icon-chart-growth-scalability.png",
    heading: "Doradztwo biznesowe i operacyjne",
    quote: "Planujesz otworzyć spółkę w Polsce, ale nie wiesz, jaka forma prawna pasuje do Twojej struktury? Mapujemy opcje, liczymy koszty i prowadzimy Cię przez rejestrację.",
    items: [
      "Strategia wejścia na rynek i założenie spółki",
      "Optymalizacja procesów (HR, płace, finanse)",
      "Audyty zgodności",
      "Ocena ryzyka operacyjnego",
      "Procesy onboardingu i obiegu dokumentów",
      "Wsparcie restrukturyzacji i skalowania",
    ],
  },
  {
    icon: "/images/icon-folders-document-management.png",
    heading: "Doradztwo podatkowe i płacowe",
    quote: "Zatrudniasz specjalistów w Polsce i zastanawiasz się, jak zrobić to efektywnie kosztowo? Przygotowujemy pełne symulacje kosztów: UoP, B2B czy EOR – na prawdziwych liczbach, a nie szacunkach.",
    items: [
      "Zgodność płacowa i modele kalkulacji wynagrodzeń",
      "Podatki, ZUS, benefity i dodatki",
      "Optymalizacja podatkowa dla pracowników i kontraktorów",
      "Wsparcie płac transgranicznych",
      "Symulacje kosztów zatrudnienia lub założenia spółki",
    ],
  },
];

/** Karty sekcji „Rozpoznajesz swoją sytuację?” */
export const situationSection = {
  heading: "Rozpoznajesz swoją sytuację?",
  description:
    "Najlepiej sprawdzamy się w firmach na szczególnym etapie – gdy koszt błędów w compliance jest wyższy niż koszt eksperckiego wsparcia.",
};

export const situationCards = [
  {
    icon: "🌍",
    label: "Wejście do Polski",
    quote: "„Wchodzimy do Polski i musimy wiedzieć, z czym to się wiąże – prawnie i finansowo.”",
    description: "Spółka czy EOR, struktura podatkowa, pierwsze umowy o pracę, obowiązki regulacyjne – wszystko mapujemy, zanim podejmiesz decyzję.",
    tags: ["Technologie", "Logistyka", "Finanse", "Handel"],
  },
  {
    icon: "⚡",
    label: "Szybki wzrost",
    quote: "„Zatrudniamy w Polsce 10–50 osób, a nasze rozwiązania kadrowe i prawne nie nadążają za tempem.”",
    description: "Audytujemy Twoje obecne rozwiązania, usuwamy luki w compliance i budujemy ramy prawne i kadrowe, które rosną razem z Tobą – a nie przeciwko Tobie.",
    tags: ["Scale-upy", "Firmy z udziałem PE", "BPO / SSC", "Produkcja"],
  },
  {
    icon: "📝",
    label: "Restrukturyzacja",
    quote: "„Mamy spółkę w Polsce, ale od lat nikt nie przeglądał naszych umów, płac ani zgodności z przepisami.”",
    description: "Pełny audyt zgodności, przegląd umów, ponowne przeliczenie płac i ocena ryzyka regulacyjnego – zanim problem zamieni się w karę.",
    tags: ["Działające spółki", "Po przejęciu", "Przygotowanie do audytu"],
  },
];

/** Nagłówek sekcji korzyści na tej stronie */
export const benefitsSection = {
  heading: "Co dostarczamy",
  subtitle: "Kompleksowe doradztwo w trzech kluczowych obszarach.",
};

export const faqItems: FAQItem[] = [
  {
    question: "Czym jest doradztwo biznesowe w Pomerico?",
    answer: "To strategiczne wsparcie w obszarze sprzedaży, marketingu, restrukturyzacji i skalowania. Praktyczne rozwiązania sprawdzone w ponad 2 500 projektach."
  },
  {
    question: "Jak wpływa to na rentowność?",
    answer: "Pomagamy obniżać koszty operacyjne, optymalizować struktury i projektować skuteczne strategie sprzedaży i marketingu. Klienci często osiągają dwucyfrowe redukcje kosztów i wzrost produktywności."
  },
  {
    question: "Dlaczego Pomerico jest lepszym partnerem niż duże firmy doradcze?",
    answer: "Jesteśmy zwinni, elastyczni i efektywni kosztowo. W przeciwieństwie do korporacji dopasowujemy się do Twojej rzeczywistości – dostarczając przewidywalne, mierzalne wyniki bez zawyżonych kosztów ogólnych."
  },
  {
    question: "Czy potrzebuję spółki, aby zatrudniać pracowników w Polsce?",
    answer: "Nie. Pomerico umożliwia legalne zatrudnianie w modelu EOR/PEO – możesz działać od razu, a my bierzemy na siebie obowiązki prawne związane z zatrudnieniem."
  },
  {
    question: "Czy Pomerico może wesprzeć moją firmę w zakresie prawa pracy i umów?",
    answer: "Tak, przygotowujemy umowy, aktualizujemy polityki, dbamy o zgodność z prawem pracy i pomagamy zapobiegać sporom oraz ryzyku prawnemu."
  },
  {
    question: "Czy oferujecie doradztwo podatkowe i płacowe dla firm globalnych?",
    answer: "Tak, w tym w zakresie ZUS, benefitów, dodatków, naliczania wynagrodzeń, optymalizacji podatkowej i struktur zatrudnienia transgranicznego."
  },
  {
    question: "Jak pomagacie przy wejściu na rynek polski?",
    answer: "Wspieramy rekrutację, wybór struktury prawnej, ramy podatkowe, procesy operacyjne, organizację biura oraz modele EOR/PEO, które umożliwiają szybkie wejście na rynek."
  },
  {
    question: "Czy możecie przeprowadzić audyt naszych obecnych procesów HR, płacowych lub prawnych?",
    answer: "Tak, przeprowadzamy pełne audyty zgodności z jasnymi rekomendacjami i wsparciem we wdrożeniu."
  },
  {
    question: "Czy oferujecie długoterminowe lub stałe wsparcie doradcze?",
    answer: "Oczywiście – wielu klientów korzysta ze stałego doradztwa, aby zachować zgodność z przepisami w miarę rozwoju."
  },
];
