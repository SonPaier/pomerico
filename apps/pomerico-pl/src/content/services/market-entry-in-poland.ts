import type { ServicePageData, FAQItem } from "@pomerico/content";
import type { ComparisonTableProps } from "@pomerico/ui/ComparisonTable";
import type { DecisionCard } from "@pomerico/ui/DecisionCards";

export const marketEntryComparisonTable: ComparisonTableProps = {
  title: "4 modele. Jeden właściwy wybór\nw Twojej sytuacji.",
  subtitle: "Jak wejść na rynek polski",
  columns: [
    {
      name: "Doradztwo przy wejściu na rynek",
      tagline: "Strategia i wsparcie prawne, zanim podejmiesz decyzję",
      highlight: "good",
    },
    {
      name: "Lokalna obsługa operacyjna",
      tagline: "Działaj w Polsce bez własnej spółki",
      highlight: "good",
      badge: "Najczęściej wybierany",
    },
    {
      name: "Wejście i skalowanie",
      tagline: "Doradztwo + outsourcing jako pomost do własnej spółki",
      highlight: "good",
    },
    {
      name: "Własna spółka (sp. z o.o.)",
      tagline: "Pełna niezależność – i pełna złożoność",
      highlight: "bad",
    },
  ],
  rows: [
    {
      label: "Dla kogo",
      values: [
        "Firmy, które przed decyzją o Polsce potrzebują jasnego obrazu sytuacji",
        { text: "Szybkie, zgodne z prawem działanie bez zakładania spółki", type: "good" },
        "Ekspansja średnioterminowa z drogą do pełnej niezależności",
        "Długoterminowa obecność, ponad 50 pracowników, potrzeba pełnej kontroli operacyjnej",
      ],
    },
    {
      label: "Czas uruchomienia",
      values: [
        { text: "1–2 tygodnie", type: "good" },
        { text: "1–3 tygodnie", type: "good" },
        "2–6 tygodni",
        { text: "2–4 miesiące", type: "bad" },
      ],
    },
    {
      label: "Koszt uruchomienia",
      values: [
        "Wyłącznie wynagrodzenie za doradztwo",
        { text: "0 € za założenie spółki – brak kosztów na start", type: "good" },
        "Doradztwo + uruchomienie outsourcingu",
        { text: "1 500–5 000 €+ (notariusz, KRS, obsługa prawna)", type: "bad" },
      ],
    },
    {
      label: "Kwestie prawne i compliance",
      values: [
        "Wskazówki i rekomendacje – wdrażasz samodzielnie",
        { text: "✓ W całości po stronie Pomerico", type: "good" },
        { text: "✓ Prowadzone w fazie przejściowej", type: "good" },
        { text: "✗ Pełna odpowiedzialność po Twojej stronie – wymaga lokalnej wiedzy", type: "bad" },
      ],
    },
    {
      label: "Kadry i płace",
      values: [
        "Poza zakresem",
        { text: "✓ Kompleksowo: umowy, płace, ZUS, benefity", type: "good" },
        { text: "✓ W outsourcingu, dopóki nie zbudujesz własnych zasobów", type: "good" },
        { text: "✗ Twój zespół musi to prowadzić lub zatrudnić księgowego", type: "bad" },
      ],
    },
    {
      label: "Lokalny przedstawiciel / sprzedaż",
      values: [
        "Poza zakresem",
        { text: "✓ Specjaliści Pomerico mogą reprezentować Cię i sprzedawać w Twoim imieniu", type: "good" },
        "Dostępne jako opcja dodatkowa",
        "Rekrutujesz samodzielnie",
      ],
    },
    {
      label: "Elastyczność / wyjście",
      values: [
        "Rozliczenie projektowe, łatwe zakończenie",
        { text: "Skalowanie lub wyjście z 30-dniowym wypowiedzeniem", type: "good" },
        "Uporządkowany plan przejścia",
        { text: "Likwidacja: 3–12 miesięcy", type: "bad" },
      ],
    },
    {
      label: "Miesięczne obciążenie administracyjne",
      values: [
        "Minimalne – tylko konsultacje i raporty",
        { text: "Minimalne – jedna faktura, resztą zajmuje się Pomerico", type: "good" },
        "Niskie – podzielone między Ciebie i Pomerico",
        { text: "Wysokie – comiesięczne deklaracje, sprawozdania, konieczny księgowy", type: "bad" },
      ],
    },
    {
      label: "Optymalna wielkość zespołu",
      values: [
        "Dowolna – etap przed zatrudnieniem",
        { text: "1–50 pracowników", type: "good" },
        "5–100 pracowników",
        "Ponad 50 pracowników, aby koszty się uzasadniały",
      ],
    },
    {
      label: "Droga do własnej spółki",
      values: [
        "Pomagamy podjąć decyzję – bez wbudowanego etapu przejścia",
        { text: "✓ Płynne przekazanie, gdy będziesz gotowy", type: "good" },
        { text: "✓ Pomyślany jako pomost – założenie spółki w zakresie", type: "good" },
        "Masz ją już od początku",
      ],
    },
  ],
  ctaLabel: "Porozmawiajmy – bezpłatna konsultacja →",
  ctaHref: "/contact",
  footnote:
    "Nie wiesz, który model jest dla Ciebie? Większość firm wchodzących do Polski zaczyna od lokalnej obsługi operacyjnej lub modelu „wejście i skalowanie”, a po ustabilizowaniu działalności przechodzi na własną spółkę. Pomerico prowadzi Cię przez każdy etap.",
};

export const marketEntryDecisionCards: DecisionCard[] = [
  {
    icon: "🔍",
    model: "Doradztwo przy wejściu na rynek",
    quote: "„Rozważamy Polskę, ale jeszcze nie podjęliśmy decyzji.”",
    description:
      "Otrzymaj mapę drogową w zakresie prawa, podatków i operacji, zanim zaangażujesz jakiekolwiek zasoby. Idealny pierwszy krok.",
  },
  {
    icon: "⚡",
    model: "Lokalna obsługa operacyjna",
    quote: "„Musimy działać w Polsce od zaraz, bez zakładania spółki.”",
    description:
      "Najszybsza droga na rynek. Pomerico zajmuje się zatrudnieniem, HR, księgowością i compliance – Ty skupiasz się na biznesie.",
  },
  {
    icon: "📈",
    model: "Wejście i skalowanie",
    quote: "„Planujemy długoterminową obecność, ale chcemy uporządkowanego przejścia.”",
    description:
      "Zacznij w outsourcingu, skaluj stopniowo i przenieś operacje do własnej spółki, gdy będziesz gotowy.",
  },
  {
    icon: "🏢",
    model: "Własna spółka",
    quote: "„Postawiliśmy na Polskę i potrzebujemy pełnej niezależności.”",
    description:
      "Najlepsza opcja przy ponad 50 pracownikach i działalności długoterminowej. Pomerico nadal może wspierać Cię w kwestiach prawnych przy zakładaniu spółki i w bieżącym HR.",
  },
];

export const data: ServicePageData = {
  slug: "market-entry-in-poland",
  title: "Wejście na rynek polski",
  metaDescription:
    "Wejście na rynek polski: porównaj EOR z założeniem spółki w Polsce i skorzystaj ze wsparcia prawnego, podatkowego, kadrowego i księgowego przy ekspansji.",
  hero: {
    heading: "Wejście na rynek polski",
    description:
      "<p>Usługa <b>wejścia na rynek polski</b> w Pomerico to kompleksowe wsparcie dla zagranicznych firm planujących rozpoczęcie działalności w Polsce. Oferujemy trzy elastyczne modele współpracy dopasowane do potrzeb Twojego biznesu.</p><p><b>Doradztwo przy wejściu na rynek</b> – doradztwo prawne i podatkowe, analiza kosztów oraz rekomendacja optymalnej formy prawnej wejścia na rynek.</p><p><b>Lokalna obsługa operacyjna</b> – przejmujemy pełne wsparcie operacyjne, dzięki czemu możesz działać bez zakładania lokalnej spółki. Zajmujemy się zatrudnianiem pracowników, zarządzaniem HR, księgowością i zgodnością z przepisami. Możemy też oddelegować naszych specjalistów ds. księgowości, finansów, a nawet sprzedaży, którzy będą reprezentować Twoją firmę i sprzedawać jej usługi w Polsce.</p><p><b>Wejście i skalowanie</b> – połączenie doradztwa strategicznego z praktycznym outsourcingiem wybranych funkcji operacyjnych (HR, księgowość, administracja, IT) jako etap przejściowy przed utworzeniem własnej spółki.</p><p><b>Sales-as-a-Service</b> – uruchom i skaluj sprzedaż w Polsce, korzystając z naszej lokalnej ekspertyzy.</p><p><b>Marketing-as-a-Service</b> – pełne wsparcie w budowaniu i rozwijaniu Twojej marki na polskim rynku.</p><p><b>Doradztwo podatkowe i prawne</b> – zintegrowane wsparcie prawne i podatkowe dla bezpiecznego i efektywnego działania.</p>",
    iconList: [
      { bold: "Prostsze wejście na rynek –", text: "Pomerico zajmuje się wszystkimi aspektami uruchomienia działalności w Polsce, w tym kwestiami prawnymi, podatkowymi, kadrowymi i płacowymi, dzięki czemu wchodzisz na rynek bez operacyjnych problemów." },
      { bold: "Szybki start operacyjny –", text: "Uporządkowane procesy i lokalna ekspertyza pozwalają szybko rozpocząć i skalować działalność, bez opóźnień i ryzyk na etapie uruchamiania." },
      { bold: "Zgodność z przepisami i kontrola ryzyka –", text: "Dzięki kompleksowemu wsparciu prawnemu, podatkowemu i operacyjnemu Twoja firma działa w pełni zgodnie z przepisami, minimalizując ryzyko regulacyjne i zapewniając płynność działania." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-shield-compliance-protection.png", heading: "Kompleksowe wsparcie", description: "Obejmujemy wszystkie kluczowe aspekty wejścia na polski rynek." },
    { icon: "/images/icon-strategy-market-entry.png", heading: "Elastyczne wejście na rynek", description: "Rozpocznij działalność bez formalnych obowiązków związanych z zakładaniem spółki." },
    { icon: "/images/icon-wrench-technical-support.png", heading: "Optymalizacja kosztów i ryzyka", description: "Unikaj kosztów administracyjnych i prawnych, korzystając z lokalnej infrastruktury Pomerico." },
    { icon: "/images/icon-checklist-full-support.png", heading: "Pełne wsparcie operacyjne", description: "Od biura i zarządzania zespołem po HR i compliance." },
  ],
  targetAudience: {
    heading: "Dla kogo jest nasze wsparcie wejścia na rynek polski?",
    description: "Usługa wejścia na rynek polski jest przeznaczona dla organizacji międzynarodowych, które chcą rozpocząć działalność w Polsce szybko, zgodnie z przepisami i bez zbędnej złożoności. Zapewniamy kompletne rozwiązanie – od kwestii prawnych, podatkowych i kadrowych po wsparcie operacyjne i administracyjne – abyś mógł budować biznes, a nie zmagać się z biurokracją.",
    items: [
      { bold: "Firm planujących ekspansję do Polski –", text: "które potrzebują lokalnego partnera do obsługi kwestii prawnych, podatkowych i kadrowych." },
      { bold: "Firm otwierających nowy zakład (greenfield) –", text: "nową fabrykę, magazyn lub centrum operacyjne w Polsce, dla których przed startem trzeba zrekrutować, zatrudnić i wdrożyć cały zespół." },
      { bold: "Firm, które chcą przetestować polski rynek –", text: "zanim założą spółkę." },
      { bold: "Firm, które chcą zatrudniać lokalnych specjalistów i nimi zarządzać –", text: "(marketing, finanse, IT, operacje) bez otwierania spółki w Polsce." },
      { bold: "Firm ceniących elastyczność i efektywność kosztową –", text: "przy zachowaniu pełnej kontroli i przejrzystości działań." },
      { bold: "Firm szukających partnera, a nie tylko dostawcy –", text: "kogoś, kto rozumie ich cele, działa lokalnie i dostarcza mierzalne wyniki." },
    ],
  },
  tagline: {
    heading: "Niezależnie od skali – działamy jako Twój lokalny zespół w Polsce.",
    description: "Wspieramy zarówno globalne korporacje wchodzące na polski rynek, jak i szybko rosnące firmy technologiczne i usługowe rozwijające działalność w Europie Środkowej.",
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
    heading: "Jak to działa",
    cards: [
      { icon: "/images/icon-recruitment-talent-search.png", heading: "Rekrutacja", description: "Znajdujemy specjalistów, do których nie dotrzesz samodzielnie – od inżynierów po analityków i ekspertów IT." },
      { icon: "/images/icon-handshake-partnership-reliability.png", heading: "Zatrudnienie", description: "Zatrudniamy ich na zgodnych z prawem umowach, prowadzimy płace i zapewniamy pełne bezpieczeństwo prawne." },
      { icon: "/images/icon-puzzle-team-integration.png", heading: "Onboarding", description: "Wprowadzamy nowych pracowników do zespołu i kultury Twojej firmy." },
      { icon: "/images/icon-strategy-market-entry.png", heading: "Operacje", description: "Zajmujemy się bieżącym HR, motywacją, organizacją biura i wyposażeniem." },
      { icon: "/images/icon-shield-compliance-protection.png", heading: "Wsparcie", description: "Masz stałą opiekę naszych ekspertów, którzy działają jak Twój wewnętrzny zespół." },
    ],
  },
  testimonials: [
    {
      quote: "Pomerico wyróżnia się rzetelnością i efektywnością, dzięki czemu wiem, że mogę im w pełni zaufać. Ich skuteczność w obszarze HR, marketingu i innych strategicznych obszarach zasługuje na uznanie i stoi za imponującą jakością ich usług. To najlepsza firma w branży, z jaką miałem przyjemność współpracować. Zdecydowanie polecam.",
      author: "Mikołaj Piec",
      role: "Właściciel",
      company: "Mera Automatic",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
};

export const faqItems: FAQItem[] = [
  {
    question: "Jak Pomerico może pomóc mi wejść na polski rynek?",
    answer: "Oferujemy doradztwo, outsourcing i modele hybrydowe – obejmujące HR, płace, sprzedaż, zarządzanie biurem, podatki i kwestie prawne. Możesz działać bez zakładania spółki, w pełni zgodnie z przepisami."
  },
  {
    question: "Jakie korzyści daje współpraca z Pomerico przy wejściu na rynek?",
    answer: "Szybsze wejście, niższe koszty i mniejsze ryzyko. Wspieraliśmy firmy, które w ciągu kilku tygodni przeszły od zera do pełnych zespołów, oszczędzając miesiące przygotowań."
  },
  {
    question: "Dlaczego Polska to strategiczna lokalizacja dla biznesu?",
    answer: "Polska to największy rynek Europy Środkowo-Wschodniej, z wysoko wykwalifikowanymi kadrami i konkurencyjnymi kosztami pracy. Dzięki położeniu jest jednym z najatrakcyjniejszych ośrodków nearshoringu, zwłaszcza dla firm nordyckich i unijnych – z Kopenhagi do Gdańska leci się zaledwie godzinę. Z Pomerico zyskujesz lokalnego partnera w zakresie outsourcingu w Polsce i doradztwa przy wejściu na rynek, który zna ten rynek od podszewki."
  },
  {
    question: "Czy muszę założyć spółkę, aby rozpocząć działalność w Polsce?",
    answer: "Niekoniecznie. Dzięki usługom EOR/PEO Pomerico możesz zatrudniać pracowników i działać od razu, bez tworzenia spółki zależnej – i odłożyć jej założenie do momentu, gdy Twój biznes będzie na to gotowy."
  },
  {
    question: "Czy Pomerico może pomóc mi zatrudnić pracowników przed założeniem spółki?",
    answer: "Tak, to jedna z największych zalet. W modelu EOR Pomerico zostaje formalnym pracodawcą, dzięki czemu możesz zatrudniać i działać od razu, przygotowując się do długoterminowej obecności na rynku."
  },
  {
    question: "Czy Pomerico może zbudować zespół dla nowej lokalizacji lub fabryki w Polsce?",
    answer: "Tak. W inwestycjach typu greenfield rekrutujemy, zatrudniamy i wdrażamy cały zespół od zera, aby był gotowy przed uruchomieniem zakładu. Zrealizowaliśmy to dla nowego, zautomatyzowanego centrum dystrybucyjnego na Dolnym Śląsku (case study SSI Schäfer)."
  },
  {
    question: "Czy Pomerico wspiera organizację biura lub pracę hybrydową?",
    answer: "Tak, pomagamy w organizacji przestrzeni biurowej, modeli pracy hybrydowej, zarządzaniu sprzętem i procesach onboardingu dopasowanych do Twoich potrzeb operacyjnych."
  },
  {
    question: "Czy mogę przetestować polski rynek, zanim w pełni się zaangażuję?",
    answer: "Tak, zatrudnienie w modelu EOR pozwala uruchomić zespół pilotażowy lub niewielką działalność i skalować ją później w zależności od wyników i popytu."
  },
  {
    question: "Jak rozpocząć wejście na polski rynek z Pomerico?",
    answer: "Wystarczy, że przedstawisz swoje cele kadrowe lub operacyjne. Przygotujemy pełny plan wejścia na rynek z harmonogramem, stanowiskami, kosztami i najlepszą strukturą prawną, aby szybko i bezpiecznie uruchomić działalność."
  },
  {
    question: "Co obejmuje wejście na rynek polski i jak to działa?",
    answer: "Wejście na rynek polski oznacza uruchomienie lub rozwój działalności w Polsce przy wsparciu Pomerico w zakresie zgodności z przepisami, rekrutacji, płac, zatrudnienia w modelu EOR/PEO, organizacji biura, procesów HR i onboardingu operacyjnego – bez konieczności budowania lokalnej infrastruktury od zera."
  },
];
