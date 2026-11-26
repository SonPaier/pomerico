import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "finance-outsourcing-contracting",
  title: "Outsourcing finansów i kontraktowanie",
  metaDescription:
    "Outsourcing finansów w Polsce: zespoły AP/AR, controlling i IFRS, specjaliści finansowi interim i konsultanci finansowi dla firm międzynarodowych.",
  hero: {
    heading: "Outsourcing finansów i kontraktowanie w Polsce",
    description:
      "<p><b>Obniż koszty. Zwiększ precyzję. Skup się na tym, co napędza Twój biznes.</b></p><p>Pomerico Group zapewnia specjalistyczny outsourcing finansów w Polsce, kontraktowanie specjalistów finansowych oraz konsultantów finansowych dla firm międzynarodowych i centrów usług wspólnych (SSC). Wspieramy obszary AP (accounts payable – rozrachunki z dostawcami), AR, RTR, controlling i raportowanie według MSSF (IFRS), w tym projekty SAP FI/CO, migracje do S/4HANA i transfery procesów do SSC. Pomagamy też wdrażać usprawnienia oparte na AI i automatyzować procesy finansowe.</p><p>Nasi konsultanci finansowi mają doświadczenie we wspieraniu m.in. rynków nordyckich (Dania, Szwecja, Norwegia) i niemieckiego, w tym transakcji transgranicznych i faktur międzynarodowych.</p>",
    iconList: [
      { bold: "Uporządkowane operacje finansowe –", text: "Pomerico prowadzi księgowość, controlling, płace i finanse operacyjne, dzięki czemu Twój zespół może skupić się na strategii i rozwoju." },
      { bold: "Szybsze wyniki finansowe –", text: "Dedykowani eksperci finansowi szybko dostarczają rzetelne wyniki, zapewniając pełną przejrzystość i efektywność." },
      { bold: "Pewna zgodność z przepisami i raportowanie –", text: "Wszystkie obowiązki finansowe i płacowe realizujemy profesjonalnie, gwarantując zgodność z przepisami i stałą jakość." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-strategy-market-entry.png", heading: "Niższe koszty", description: "Outsourcing operacji finansowych eliminuje koszty zatrudniania, szkoleń, nieobecności, oprogramowania, kosztów ogólnych i ryzyk związanych z compliance. Klienci Pomerico regularnie osiągają znaczące oszczędności, jednocześnie podnosząc jakość." },
    { icon: "/images/icon-folders-document-management.png", heading: "Gwarancja zgodności i precyzji", description: "Zapewniamy pełną zgodność z polskimi i unijnymi przepisami finansowymi – w zakresie rachunkowości, podatków, płac, raportowania i ochrony danych. Twoje finanse działają bezbłędnie, przewidywalnie i są zawsze gotowe do audytu." },
    { icon: "/images/icon-target-bpo-outsourcing.png", heading: "Dostęp do ekspertów najwyższej klasy", description: "Zyskujesz dostęp do doświadczonych konsultantów i specjalistów finansowych w obszarach AP, AR, RTR, controllingu i raportowania IFRS, w tym SAP FI/CO, migracji do S/4HANA i transferów procesów do SSC." },
    { icon: "/images/icon-checklist-compliance-audit.png", heading: "Jeden partner: finanse, HR, płace i prawo", description: "Koniec z chaosem wielu dostawców. Prowadzimy procesy finansowe, administrację kadrową, płace, sprawy podatkowe i compliance – wszystko w jednym miejscu." },
  ],
  services: {
    heading: "Usługi outsourcingu finansów w Polsce",
    cards: [
      { icon: "/images/icon-checklist-task-management.png", heading: "AP / AR / RTR", description: "Accounts Payable w ramach procesu Procure-to-Pay (PTP / P2P), Accounts Receivable w ramach Order-to-Cash (OTC / O2C) oraz Record-to-Report (RTR / R2R). Obejmuje faktury, uzgodnienia, przebiegi płatności, windykację, rozliczenia wewnątrzgrupowe i zamknięcia okresów." },
      { icon: "/images/icon-gears-system-integration.png", heading: "Transfery SAP i SSC", description: "Wsparcie migracji SAP FI/CO i S/4HANA, transfer wiedzy, przejęcie procesów i organizacja pracy po migracji. Doświadczenie obejmuje harmonizację AP/RTR po fuzjach oraz testowanie przepływów w Coupa, Ariba i OCR." },
      { icon: "/images/icon-chart-growth-scalability.png", heading: "Controlling i IFRS", description: "Budżetowanie, prognozowanie, analiza odchyleń, modele alokacji kosztów oraz raportowanie zgodnie z MSSF (IFRS) i lokalnymi standardami rachunkowości." },
      { icon: "/images/icon-workflow-process-automation.png", heading: "AI i automatyzacja finansów", description: "Wsparcie usprawnień w finansach i controllingu z wykorzystaniem AI, Pythona, SQL, RPA, Power Query, VBA, R i Power BI." },
      { icon: "/images/icon-shield-compliance-protection.png", heading: "Specjalistyczna sprawozdawczość ubezpieczeniowa", description: "Solvency II i formularze QRT (Quantitative Reporting Templates), MSSF 9 i oczekiwane straty kredytowe (ECL), kontrola portfela inwestycyjnego i raportowanie wewnątrzgrupowe oraz rozliczanie podatku od składek ubezpieczeniowych (IPT) w krajach europejskich." },
    ],
    itemsHeading: "Konsultanci finansowi w Polsce",
    items: [
      {
        icon: "lightbulb",
        heading: "Doradztwo w zakresie księgowości, AI, AP/AR i controllingu",
        paragraphs: [
          "Praktyczne doradztwo i bezpośrednie wsparcie zespołów finansowych i biur rachunkowych w obszarze księgowości, usprawnień opartych na AI, Accounts Payable, Accounts Receivable i controllingu – w tym doświadczony księgowy pracujący bezpośrednio z Twoim zespołem.",
          "Analizujemy uzgodnione procesy, wskazujemy możliwości usprawnień oraz określamy rekomendacje i odpowiedzialności za ich wdrożenie.",
        ],
      },
      {
        icon: "users",
        heading: "Specjaliści finansowi interim",
        paragraphs: [
          "Zatrudnij przez Pomerico doświadczonego, zweryfikowanego konsultanta finansowego, który wesprze Twoje SSC lub dział finansowy podczas transferów procesów, migracji systemów, nieobecności w zespole lub chwilowych szczytów pracy.",
          "Zajmujemy się rekrutacją, płacami i administracją zatrudnienia, a Twój zespół kieruje uzgodnionymi zadaniami. Rozliczenie godzinowe lub miesięczne, na uzgodniony okres zlecenia.",
          "Konsultant wspiera Twój zespół bez bezpośredniej umowy o pracę z Twoją organizacją. Jeśli mamy dostępnego konsultanta o pasującym profilu, zlecenie może ruszyć od razu; w pozostałych przypadkach staramy się rozpocząć w ciągu dwóch tygodni. Termin startu potwierdzamy dla każdego zlecenia.",
        ],
      },
      {
        icon: "cog",
        heading: "Konsultant ds. transformacji finansów",
        paragraphs: [
          "Wnieś kompetencje finansowe i technologiczne do konkretnego projektu transformacyjnego. Konsultant ds. transformacji finansów (Finance Transformation Consultant) wspiera automatyzację, działania związane z migracją SAP i optymalizację procesów finansowych, łącząc wymagania finansów operacyjnych z systemami i raportowaniem.",
          "Konsultanta angażujesz do projektu trwającego od trzech do sześciu miesięcy, z rezultatami i zakresem odpowiedzialności uzgodnionymi przed rozpoczęciem prac.",
        ],
      },
      {
        icon: "clipboard-list",
        heading: "Specjaliści finansowi do projektów",
        paragraphs: [
          "Zaangażuj specjalistę lub zespół finansowy do konkretnego projektu, np. transferu procesów, transformacji lub migracji systemu.",
          "Wspólnie z Twoją organizacją ustalamy wymagane kompetencje, czas trwania projektu, rezultaty i sposób raportowania.",
        ],
      },
      {
        icon: "user-check",
        heading: "Specjaliści finansowi na długi okres",
        paragraphs: [
          "Dodaj dedykowanego specjalistę lub zespół finansowy do stałego wsparcia Twoich procesów finansowych.",
          "Pomerico odpowiada za rekrutację, zatrudnienie i administrację kadrową, a zakres prac, godziny pracy i podział odpowiedzialności ustalamy z Twoją organizacją.",
        ],
      },
      {
        icon: "git-merge",
        heading: "Projekty transferu procesów i integracji po fuzjach",
        paragraphs: [
          "Wsparcie przy transferach procesów finansowych i integracji po fuzjach, w tym transfer wiedzy, przejęcie procesów, harmonizacja AP/RTR i przekazanie prac.",
          "Zakres projektu, odpowiedzialności i rezultaty definiujemy wspólnie z Twoją organizacją.",
        ],
      },
      {
        icon: "file-warning",
        heading: "Specjalista ds. wyjątków finansowych na żądanie",
        paragraphs: [
          "Po automatycznym przetwarzaniu w zespołach finansowych często zostają przypadki wymagające specjalistycznej analizy: sporne faktury, błędy w danych dostawców, niezgodności między zamówieniem a przyjęciem towaru czy faktury transgraniczne wymagające ręcznego uzgodnienia.",
          "Specjalista ds. wyjątków finansowych (Finance Exception Specialist) analizuje takie przypadki, koordynuje ich rozwiązanie z właściwymi zespołami i dokumentuje powtarzające się problemy. Usługa zapewnia stałe wsparcie w ramach uzgodnionej, cyklicznej puli godzin, a zakres, raportowanie i zasady eskalacji dopasowujemy do Twojego obciążenia.",
        ],
      },
      {
        icon: "handshake",
        heading: "Wsparcie HR Business Partnera dla zespołów finansowych",
        paragraphs: [
          "Zapewnij swojemu zespołowi finansowemu wsparcie HR Business Partnera – z uzgodnionym na czas zlecenia zakresem spraw kadrowych, odpowiedzialnościami i zasadami współpracy z Twoim wewnętrznym działem HR.",
        ],
      },
    ],
  },
  targetAudience: {
    heading: "Dla kogo jest outsourcing finansów i kontraktowanie?",
    description: "Dla firm, które potrzebują precyzji, szybkości, eksperckiego wsparcia i przewidywalnych operacji finansowych – bez zatrudniania na etat. Outsourcing finansów i kontraktowanie w Pomerico to rozwiązanie dla organizacji, które chcą wzmocnić lub skalować kompetencje finansowe przy niskich kosztach, ryzyku i złożoności.",
    items: [
      { bold: "Firmy bez własnego działu finansowego –", text: "startupy, scale-upy i firmy międzynarodowe wchodzące do Polski lub UE, które od razu potrzebują księgowości, controllingu, koordynacji płac lub raportowania – bez budowania wewnętrznego zespołu." },
      { bold: "Organizacje, które chcą obniżyć koszty operacji finansowych –", text: "firmy dążące do obniżenia kosztów zespołów finansowych o 30–40% dzięki outsourcingowi, przewidywalnym miesięcznym opłatom i optymalizacji procesów. (Przykład: klient osiągnął 33% optymalizacji kosztów i 38% wzrostu produktywności)." },
      { bold: "Firmy szukające trudno dostępnych specjalistów finansowych –", text: "SSC, międzynarodowe zespoły finansowe i zagraniczne biura rachunkowe szukające specjalistów AP, AR, RTR lub controllingu z doświadczeniem procesowym, w SAP FI/CO i w raportowaniu wymaganym w danym zleceniu." },
      { bold: "Firmy działające pod rygorystycznymi wymogami compliance –", text: "instytucje finansowe, grupy ubezpieczeniowe i globalne przedsiębiorstwa, które muszą zapewnić gotowość do audytu, zgodność z prawem i RODO, poprawność podatkową oraz bezpieczne raportowanie." },
      { bold: "Firmy w okresie wzrostu, transformacji lub M&A –", text: "zespoły finansowe potrzebujące wsparcia interim lub projektowego podczas transferów procesów, migracji ERP, fuzji lub nieobecności w zespole – w tym konsultanta ds. transformacji finansów do konkretnego projektu." },
      { bold: "Organizacje z wysoką rotacją lub trudnościami rekrutacyjnymi –", text: "jeśli stanowiska finansowe trudno obsadzić lub utrzymać, Pomerico zapewnia długoterminowych specjalistów przy rotacji 0–7%, gwarantując ciągłość i zachowanie wiedzy." },
      { bold: "Firmy, które chcą automatyzować lub modernizować procesy –", text: "zespoły finansowe i biura rachunkowe usprawniające księgowość, AP, AR lub controlling dzięki AI i automatyzacji albo potrzebujące specjalistycznego wsparcia przy wyjątkach fakturowych, których nie rozwiązało automatyczne przetwarzanie." },
      { bold: "Firmy międzynarodowe zatrudniające w Polsce lub regionie CEE –", text: "outsourcing finansów to niskoryzykowna opcja dla globalnych firm rozwijających się w Polsce bez zakładania spółki i zatrudniania lokalnego personelu finansowego." },
      { bold: "Liderzy, którzy chcą skupić się na strategii, a nie na administracji finansowej –", text: "prezesi, dyrektorzy finansowi i założyciele, którzy wolą koncentrować się na wzroście, rentowności i relacjach z inwestorami, podczas gdy Pomerico dba o operacje, precyzję i zgodność z przepisami." },
    ],
  },
  tagline: {
    heading: "Usprawnij swoje operacje finansowe",
    description: "Pomerico zapewnia kompleksowy outsourcing finansów i kontraktowanie specjalistów, gwarantując rzetelne raportowanie, zgodność z przepisami i efektywność operacyjną.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Analiza i diagnoza", description: "Zaczynamy od zrozumienia Twojego modelu biznesowego, obecnych procesów finansowych, wyzwań i celów. Analizujemy m.in.: zakres zadań księgowych, controllingowych i raportowych, wymogi compliance, narzędzia i oprogramowanie (ERP/SAP/SQL), obciążenie pracą i wymaganą dostępność oraz definicję KPI. Otrzymujesz jasną propozycję z przejrzystą wyceną i harmonogramem." },
      { number: "02.", heading: "Wybór modelu współpracy", description: "Wybierasz strukturę najlepiej dopasowaną do Twojej organizacji: outsourcing finansów – Pomerico prowadzi proces end-to-end; kontraktowanie specjalistów – dedykowani eksperci wspierają Twój wewnętrzny dział finansowy; model hybrydowy – odpowiedzialność za proces plus eksperci w Twoim zespole. Ta elastyczność gwarantuje dopasowanie do Twojej rzeczywistości operacyjnej." },
      { number: "03.", heading: "Rekrutacja, weryfikacja i onboarding", description: "Jeśli potrzebujesz nowych specjalistów, Pomerico prowadzi rekrutację bezpłatnie dla klientów outsourcingowych. Wszystkie formalności, płace i kwestie prawne bierze na siebie Pomerico." },
      { number: "04.", heading: "Bieżąca praca i stałe wsparcie", description: "Twój dedykowany specjalista lub zespół finansowy zaczyna pracę zgodnie z Twoimi procesami i KPI. Bierzemy odpowiedzialność za poprawność i zgodność z przepisami, dokumentację, bezpieczne przetwarzanie danych, płace i administrację kadrową." },
      { number: "05.", heading: "Skalowanie w górę lub w dół w dowolnym momencie", description: "Potrzebujesz dodatkowego księgowego? Controllera na okres szczytu? Całego zespołu do projektu transformacyjnego? Skalujemy Twoje operacje finansowe w ciągu dni lub tygodni, a nie miesięcy – bez długich procesów rekrutacyjnych i opóźnień we wdrożeniu." },
      { number: "06.", heading: "Długoterminowe partnerstwo i wsparcie strategiczne", description: "Pomerico staje się Twoim długoterminowym partnerem finansowym. Wspieramy Cię przy audytach, cyklach budżetowych, zmianach podatkowych, ekspansji międzynarodowej i wdrożeniach systemów. Twoje operacje finansowe stają się stabilne, przewidywalne i w pełni dopasowane do rozwoju firmy." },
    ],
  },
  testimonials: [
    {
      quote: "Pomerico Group ma świetny zespół liderów i ludzi o kreatywnych talentach. To osobowości, które w naturalny sposób przyciągają innych, a Zarząd firmy wyróżnia się w biznesie szczególnie etyczną postawą. Branża doradcza jest tu wyborem wynikającym z pasji do ludzi – i to widać.",
      author: "Marek Makarewicz",
      role: "Financial Modelling Associate",
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

export const faqItems: FAQItem[] = [
  {
    question: "Co obejmuje outsourcing finansów w Pomerico?",
    answer: "Prowadzimy księgowość, controlling, sprawozdawczość finansową, rozrachunki z odbiorcami i przygotowanie do audytu. Wielu naszych klientów międzynarodowych powierza nam pełne zastąpienie lub wzmocnienie swoich działów finansowych – zyskując stabilność, zgodność z przepisami i efektywność."
  },
  {
    question: "W jaki sposób outsourcing finansów obniża koszty?",
    answer: "Utrzymanie własnego zespołu finansowego bywa kosztowne i ryzykowne. Z Pomerico obniżasz koszty ogólne, zyskując jednocześnie dostęp do zespołu doświadczonych ekspertów finansowych. W praktyce oznacza to niższe koszty wynagrodzeń, mniejsze ryzyko w obszarze compliance i przewidywalne wydatki rozliczane jedną miesięczną fakturą."
  },
  {
    question: "Skąd mam pewność, że moje finanse są w Pomerico bezpieczne?",
    answer: "Od ponad 10 lat wspieramy firmy międzynarodowe – gwarantujemy zero kar za naruszenia przepisów i terminowe dostarczanie wszystkich raportów. Działamy jako Twój partner finansowy, zawsze przed terminami, abyś Ty mógł wyprzedzać rynek."
  },
  {
    question: "Czy wspieracie w sprawach podatkowych i prawnych?",
    answer: "Prowadzimy księgowość, controlling, sprawozdawczość finansową, rozrachunki z odbiorcami i przygotowanie do audytu. Wielu naszych klientów międzynarodowych powierza nam pełne zastąpienie lub wzmocnienie swoich działów finansowych – zyskując stabilność, zgodność z przepisami i efektywność."
  },
  {
    question: "Czy automatyzujecie procesy finansowe?",
    answer: "Tak, nasi eksperci pracują z SAP, SQL, Pythonem, narzędziami do przetwarzania danych i automatyzacji przepływów pracy."
  },
  {
    question: "Czy mogę zatrudnić tylko jednego eksperta?",
    answer: "Tak, możesz zacząć od jednego specjalisty i w każdej chwili rozszerzyć współpracę."
  },
];
