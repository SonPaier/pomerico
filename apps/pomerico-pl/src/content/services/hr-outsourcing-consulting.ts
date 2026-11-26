import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "hr-outsourcing-consulting",
  title: "Outsourcing i doradztwo HR",
  metaDescription:
    "Outsourcing HR w Polsce: doradztwo HR, interim HR, koordynacja płac, offboarding i outplacement dla firm międzynarodowych. Umów bezpłatną rozmowę.",
  hero: {
    heading: "Outsourcing i doradztwo HR",
    description:
      "<p><b>Buduj silniejsze zespoły, usprawniaj procesy HR</b> i zatrudniaj z pewnością.<br/>Pomerico zapewnia kompleksowy <b>outsourcing HR w Polsce</b>: doradztwo HR, interim HR management i HR contracting – w całym cyklu życia pracownika, od rekrutacji i onboardingu po offboarding i outplacement. Pomagamy organizacjom usprawniać zarządzanie ludźmi, podnosić efektywność i wzmacniać pozyskiwanie talentów.</p><p>Niezależnie od tego, czy potrzebujesz <b>strategicznej ekspertyzy HR</b>, czasowego wsparcia czy dedykowanego specjalisty HR pracującego w Twojej firmie – <b>dostarczamy</b> wiedzę, procesy i narzędzia, które przyspieszają rozwój i ograniczają ryzyko operacyjne.</p>",
    iconList: [
      { bold: "Uporządkowane procesy HR –", text: "Pomerico zarządza procesami HR, płacami i zgodnością z przepisami, a Twój zespół może skupić się na inicjatywach strategicznych." },
      { bold: "Szybsze pozyskiwanie talentów –", text: "Szybki dostęp do najlepszych kandydatów dzięki wsparciu interim HR, doradztwu i HR contractingowi." },
      { bold: "Niezawodne HR –", text: "Wszystkie działania HR prowadzimy profesjonalnie, zapewniając stabilne, sprawne i wysokiej jakości zarządzanie ludźmi." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-brain-knowledge-expertise.png", heading: "Niższa rotacja pracowników", description: "Dzięki skutecznym strategiom zarządzania talentami i systemom motywacyjnym." },
    { icon: "/images/icon-handshake-business-partnership.png", heading: "Lepsze dopasowanie zespołu", description: "Dzięki precyzyjnemu planowaniu ścieżek kariery i indywidualnemu rozwojowi pracowników. Pomerico łączy wszystkie funkcje HR w jednym miejscu, upraszczając procesy i oszczędzając Twój czas." },
    { icon: "/images/icon-id-card-employee-documentation.png", heading: "Większe zaangażowanie i efektywność", description: "Dzięki wdrożeniu narzędzi wzmacniających motywację i kulturę organizacyjną." },
    { icon: "/images/icon-talent-acquisition-search.png", heading: "Dostęp do eksperckiego wsparcia i know-how", description: "Dostęp do doświadczonych dyrektorów HR i HR Business Partnerów, którzy szybko wdrażają optymalne rozwiązania – dostarczamy specjalistów, którzy wnoszą do HR strukturę, przejrzystość i dojrzałość." },
  ],
  details: {
    heading: "Co oferujemy",
    cards: [
      {
        icon: "/images/icon-person-growth-performance.png",
        heading: "Doradztwo HR",
        description: "Audyt procesów HR. Definiowanie struktury i zakresów odpowiedzialności. Tworzenie matryc kompetencji. Wdrażanie narzędzi i procesów HR. Systemy oceny i motywacji. Strategie kultury organizacyjnej i zaangażowania. Podstawy employer brandingu. Tworzenie dokumentacji i procedur HR.",
      },
      {
        icon: "/images/icon-wrench-maintenance-services.png",
        heading: "HR Leadership-as-a-Service",
        description: "Interim HR Manager. Interim Head of People. Interim Talent Acquisition Lead. Kryzysowe przywództwo HR (fuzje, restrukturyzacje).",
      },
      {
        icon: "/images/icon-gears-system-integration.png",
        heading: "HR contracting (interim / HR na żądanie)",
        description: "HR Generalist / HRBP na kontrakcie. Talent Acquisition na kontrakcie. Czasowe wsparcie HR przy skalowaniu. Cała funkcja HR zarządzana zewnętrznie. Zastępstwa na czas urlopu macierzyńskiego. Role HR w projektach. Interim HR Specialist zatrudniony przez Pomerico. Specjaliści Mid Office na kontrakcie.",
      },
      {
        icon: "/images/icon-handshake-partnership.png",
        heading: "Offboarding i outplacement",
        description: "Uporządkowany offboarding w ramach outsourcingu HR w Polsce: wypowiedzenia i dokumentacja zakończenia współpracy zgodnie z polskim prawem pracy, zarządzanie procesem przekazania obowiązków, checklisty zwrotu sprzętu i odbierania dostępów, rozliczenie końcowe skoordynowane z płacami. Exit interviews z raportem o przyczynach odejść. Wsparcie przy restrukturyzacji: planowanie zwolnień, plany komunikacji i przygotowanie menedżerów do trudnych rozmów. Programy outplacementu dla odchodzących pracowników: doradztwo zawodowe, pomoc przy CV i profilu LinkedIn, przygotowanie do rozmów kwalifikacyjnych i aktywne wsparcie na rynku pracy.",
      },
    ],
  },
  targetAudience: {
    heading: "Dla kogo jest doradztwo i HR contracting?",
    description: "Dla firm, które chcą mieć nowoczesną, skuteczną i skalowalną funkcję HR – bez budowania wszystkiego od zera. Usługa jest skierowana do…",
    items: [
      { bold: "Szybko rosnących firm, którym brakuje struktury HR –", text: "Startupów, scale-upów i nowych jednostek biznesowych, które potrzebują: onboardingu, procesów rekrutacyjnych, opisów stanowisk, dokumentacji HR, ram kultury organizacyjnej i systemów zaangażowania." },
      { bold: "Organizacji bez własnego HR lub z przeciążonym działem HR –", text: "Przejmujemy obsługę kadrową, dając zarządowi czas na strategię." },
      { bold: "Firm z problemem jakości rekrutacji lub wysokiej rotacji –", text: "Pomerico rozwiązuje źródło problemu poprzez: ocenę behawioralną, analizę dopasowania kulturowego, lepszy sourcing i przeprojektowanie procesów HR." },
      { bold: "Firm szukających specjalistów HR na czas określony lub do projektów –", text: "Na chwile, gdy wsparcie HR potrzebne jest od zaraz: zastępstwa macierzyńskie, wypalenie w zespole HR, szczyty rekrutacyjne, projekty transformacyjne." },
      { bold: "Firm rozbudowujących zespoły IT, finansów, operacji lub sprzedaży –", text: "Budujemy procesy rekrutacji i onboardingu, które zapobiegają wąskim gardłom i nietrafionym zatrudnieniom." },
      { bold: "Liderów, którzy chcą strategicznego, a nie reaktywnego HR –", text: "Pomerico pomaga zdefiniować: strategię personalną, model przywództwa, systemy oceny, ścieżki rozwoju i sukcesji." },
      { bold: "Firm potrzebujących wsparcia przy offboardingu i outplacemencie –", text: "Przy restrukturyzacji, redukcji zatrudnienia czy zamknięciu lokalizacji w Polsce planujemy i prowadzimy ludzką stronę zmiany: zgodne z prawem rozstania, jasną komunikację i programy outplacementu, które chronią wizerunek pracodawcy i morale zespołu, który zostaje." },
    ],
  },
  tagline: {
    preheading: "Twój rozszerzony dział HR",
    heading: "Gotowy, by uprościć HR w swojej firmie?",
    description: "Elastycznie, fachowo i w pełni zgodnie z przepisami – Pomerico zajmuje się rekrutacją, płacami i obsługą pracowników, a Twój zespół skupia się na tym, co najważniejsze.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Analiza i diagnoza", description: "Analizujemy Twoje wyzwania, strukturę, potrzeby rekrutacyjne i obecne procesy HR. Otrzymujesz jasną diagnozę i dopasowany plan działań HR." },
      { number: "02.", heading: "Określenie zakresu i wybór modelu", description: "Doradztwo HR (projekty i wsparcie strategiczne), HR contracting (specjaliści na żądanie), HR hybrydowy (stałe wsparcie + specjaliści). Dopasowujemy zakres, liczbę godzin, KPI i częstotliwość raportowania." },
      { number: "03.", heading: "Dobór i weryfikacja specjalistów", description: "Starannie wybieramy i weryfikujemy specjalistów HR – profilowanie behawioralne, ocena dopasowania kulturowego i pogłębiona ocena kompetencji – aby trafiali do Ciebie wyłącznie eksperci idealnie dopasowani do Twojej organizacji." },
      { number: "04.", heading: "Wdrożenie i uruchomienie HR", description: "Zaczynamy od razu, koncentrując się na: rozwiązaniu pilnych problemów, uporządkowaniu procesów, przygotowaniu dokumentacji, wdrożeniu narzędzi i optymalizacji procesu rekrutacji. Już po kilku tygodniach widzisz mierzalną poprawę." },
      { number: "05.", heading: "Bieżące wsparcie HR, raportowanie i monitoring KPI", description: "Regularnie raportujemy m.in.: skuteczność rekrutacji, retencję, efektywność, zaangażowanie i sprawność procesów. Zawsze wiesz, co dzieje się w obszarze zarządzania ludźmi." },
      { number: "06.", heading: "Skalowanie i długoterminowe partnerstwo", description: "Wraz z rozwojem firmy dostosowujemy strukturę HR: więcej procesów, programy talentowe, zaawansowana analityka HR, rozwój przywództwa, planowanie sukcesji. Zyskujesz dojrzałą funkcję HR bez kosztów budowania jej wewnętrznie." },
    ],
  },
  testimonials: [
    {
      quote: "Głównym celem naszej współpracy była poprawa wskaźników w obszarach takich jak rekrutacja, sourcing i ogólna efektywność pracy. Pomerico Group wyróżnia się wiedzą z zakresu HR i kultury organizacyjnej. Nasze doświadczenia potwierdzają, że Pomerico Group to nie tylko ekspert, ale też rzetelny partner, który rozumie wyzwania związane z funkcjonowaniem organizacji. Ich umiejętność trafnego diagnozowania problemów i tworzenia skutecznych rozwiązań sprawia, że współpraca z nimi to gwarancja rozwoju. Choć nie są dużą firmą, ich atutem jest elastyczność, szybkie podejmowanie decyzji i autentyczne zaangażowanie we współpracę.",
      author: "Julia Kasparek-Guzik",
      role: "Dyrektor operacyjna",
      company: "Datumo",
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
    question: "Jakie obszary obejmuje doradztwo HR?",
    answer: "Prowadzimy audyty, opracowujemy strategie rekrutacyjne, projektujemy ścieżki kariery i programy benefitowe, a także zapewniamy zewnętrznych dyrektorów HR lub HRBP do prowadzenia projektów transformacyjnych."
  },
  {
    question: "Jak doradztwo HR pomaga zatrzymać pracowników?",
    answer: "Poprzez spójne powiązanie narzędzi motywacyjnych, kultury organizacyjnej i ścieżek kariery ze strategią biznesową. Nasi klienci odnotowują wyraźny spadek rotacji i wyższe wskaźniki zaangażowania."
  },
  {
    question: "Dlaczego warto powierzyć doradztwo HR firmie Pomerico?",
    answer: "Bo łączymy akademicką wiedzę z zakresu HR z praktycznym doświadczeniem biznesowym. Nie tylko doradzamy – wdrażamy, optymalizujemy i dostarczamy mierzalną poprawę."
  },
  {
    question: "Jak HR contracting wspiera firmy bez własnego działu HR?",
    answer: "W pełni przejmujemy obsługę HR – dokumentację, onboarding, polityki, proces rekrutacji, wsparcie pracowników i monitoring efektywności – dzięki czemu masz sprawnie działający dział HR bez zatrudniania go wewnętrznie."
  },
  {
    question: "Jakie są korzyści z zewnętrznego konsultanta HR w porównaniu z zatrudnieniem wewnętrznym?",
    answer: "Zyskujesz natychmiastową ekspertyzę, unikasz opóźnień rekrutacyjnych, obniżasz koszty, ograniczasz ryzyko związane z zatrudnieniem i otrzymujesz dostęp do sprawdzonych metod i narzędzi HR stosowanych przez specjalistów Pomerico."
  },
  {
    question: "Które procesy HR można w pełni zlecić na zewnątrz?",
    answer: "Rekrutację, onboarding i offboarding, administrację kadrową, modele kompetencyjne, zarządzanie efektywnością, inicjatywy kulturowe, badania zaangażowania, dokumentację, audyty HR i systemy rozwoju talentów."
  },
  {
    question: "Czym różnią się doradztwo HR, HR contracting i interim HR?",
    answer: "Doradztwo HR koncentruje się na analizie, projektowaniu i usprawnianiu procesów HR (onboarding, ocena pracownicza, rekrutacja, kultura, kompetencje). HR contracting zapewnia dedykowanego specjalistę HR pracującego w Twojej firmie w elastycznym modelu. Interim HR to doświadczony lider HR (HR Manager, HRBP, Head of People), który czasowo zarządza funkcją HR w okresie wzrostu lub zmian organizacyjnych."
  },
  {
    question: "Kiedy warto zatrudnić specjalistę interim HR?",
    answer: "Gdy firma szybko rośnie, przechodzi restrukturyzację, zmaga się z wysoką rotacją, brakuje jej lidera HR albo potrzebuje zastępstwa na czas urlopu macierzyńskiego lub długiej nieobecności."
  },
  {
    question: "Jak doradztwo HR podnosi jakość rekrutacji i obniża koszty błędnych zatrudnień?",
    answer: "Pomerico stosuje profilowanie behawioralne, matryce kompetencji, analizę dopasowania kulturowego i ustrukturyzowane rozmowy kwalifikacyjne, co znacząco zwiększa trafność zatrudnień i obniża koszty nietrafionych decyzji."
  },
  {
    question: "Czy oferujecie offboarding i outplacement w Polsce?",
    answer: "Tak. Pomerico prowadzi offboarding i outplacement w ramach usług outsourcingu HR w Polsce. Obsługujemy zarówno pojedyncze odejścia, jak i większe projekty restrukturyzacyjne – od dokumentacji zakończenia współpracy i zarządzania przekazaniem obowiązków po rozliczenie końcowe z płacami i exit interviews. Przy zwolnieniach przygotowujemy plan komunikacji, wspieramy menedżerów i prowadzimy programy outplacementu, które pomagają odchodzącym pracownikom szybciej znaleźć nową pracę."
  },
];
