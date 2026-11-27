import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "recruitment-services-rpo",
  title: "Usługi rekrutacyjne / RPO",
  metaDescription:
    "Agencja rekrutacyjna w Polsce: outsourcing rekrutacji (RPO), direct search i executive search na stanowiska w finansach, IT i inżynierii. Umów rozmowę.",
  hero: {
    heading: "Agencja rekrutacyjna w Polsce – RPO i executive search",
    description:
      "<p><b>Zatrudniaj najlepszych szybciej. Precyzyjnie. I bez kosztów budowania wewnętrznego zespołu rekrutacyjnego.</b></p><p>Pomerico prowadzi precyzyjne rekrutacje i RPO (Recruitment Process Outsourcing – outsourcing procesów rekrutacyjnych) dla firm, które chcą skalować zespoły, podnieść jakość zatrudnień i dotrzeć do kandydatów niedostępnych na portalach z ogłoszeniami.<br/>Łączymy profilowanie behawioralne, weryfikację kompetencji technicznych i metodologię Direct Search, aby dostarczać specjalistów, którzy sprawdzają się nie tylko na rozmowie, ale przede wszystkim w codziennej pracy.</p><p>W modelu RPO Pomerico staje się Twoim rozszerzonym działem rekrutacji – w pełni zintegrowanym z Twoimi procesami, kulturą i celami biznesowymi.</p>",
    iconList: [
      { bold: "Sprawne pozyskiwanie talentów –", text: "Pomerico staje się przedłużeniem Twojego zespołu rekrutacyjnego i dostarcza najlepszych kandydatów bez konieczności budowania wewnętrznego działu HR." },
      { bold: "Szybsze zatrudnienia –", text: "Profilowanie behawioralne, weryfikacja techniczna i Direct Search zapewniają precyzyjną i szybką rekrutację trudno dostępnych specjalistów." },
      { bold: "Pewne efekty –", text: "Kandydaci są w pełni zweryfikowani i wdrożeni, co gwarantuje wysoką efektywność i dopasowanie kulturowe od pierwszego dnia." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-system-integration.png", heading: "Oszczędność czasu i zasobów", description: "Bierzemy na siebie ciężar rekrutacji, dzięki czemu Twój zespół może skupić się na rozwoju biznesu." },
    { icon: "/images/icon-wrench-maintenance-services.png", heading: "Niższe koszty", description: "Eliminujesz wydatki na rekrutację wewnętrzną i zarządzanie wieloma agencjami." },
    { icon: "/images/icon-magnifier-quality-assurance.png", heading: "Gwarancja jakości", description: "Dostarczamy kandydatów idealnie dopasowanych zarówno pod względem kompetencji, jak i kultury organizacyjnej." },
    { icon: "/images/icon-checklist-compliance-audit.png", heading: "Silniejsza marka pracodawcy", description: "Prowadzimy kampanie employer brandingowe, które zwiększają atrakcyjność Twojej firmy na rynku pracy." },
    { icon: "/images/icon-person-growth-performance.png", heading: "Skalowalne wsparcie rekrutacyjne (od 1 do ponad 100 stanowisk)", description: "Dopasowujemy się do Twoich potrzeb – od pojedynczych specjalistycznych stanowisk po duże projekty rekrutacyjne i długoterminowe RPO osadzone w Twojej organizacji." },
    { icon: "/images/icon-puzzle-team-integration.png", heading: "Dostęp do kandydatów niedostępnych na otwartym rynku", description: "Pomerico specjalizuje się w docieraniu do wartościowych kandydatów dzięki Direct Search, zaawansowanej automatyzacji sourcingu, mapowaniu rynku i profilowaniu behawioralnemu." },
  ],
  targetAudience: {
    heading: "Dla kogo są nasze usługi rekrutacyjne / RPO?",
    description: "Z Pomerico zatrudniasz szybciej, trafniej i przy minimalnym ryzyku, zyskując talenty potrzebne do rozwoju firmy. Zatrudniaj najlepszych szybciej. Precyzyjnie. I bez kosztów budowania wewnętrznego zespołu rekrutacyjnego.",
    items: [
      { bold: "Firm szybko rozbudowujących zespoły –", text: "idealne rozwiązanie w okresach dynamicznego wzrostu, rozwoju nowych produktów lub ekspansji międzynarodowej." },
      { bold: "Firm uruchamiających nowe zakłady (greenfield) w Polsce –", text: "nowe fabryki, magazyny i linie produkcyjne, które przed startem potrzebują kompletnego zespołu zrekrutowanego od zera." },
      { bold: "Organizacji bez wewnętrznych zespołów rekrutacyjnych –", text: "RPO eliminuje potrzebę zatrudniania na etat rekruterów, specjalistów HR czy sourcerów." },
      { bold: "Firm zmagających się z niską jakością rekrutacji lub małym napływem kandydatów –", text: "zaawansowany sourcing Pomerico usuwa wąskie gardła i wzmacnia pipeline kandydatów." },
      { bold: "Firm potrzebujących niszowych lub rzadkich specjalistów –", text: "IT (SQL, Python, DevOps, SAP), finanse, przemysł, R&D, HR, operacje, księgowość, inżynieria i inne obszary." },
      { bold: "Firm międzynarodowych budujących zespoły w Polsce lub UE –", text: "działamy jako Twój lokalny partner rekrutacyjny." },
      { bold: "Firm, które chcą przewidywalnych kosztów rekrutacji –", text: "RPO to jasne miesięczne rozliczenie bez wysokich prowizji agencyjnych." },
    ],
  },
  tagline: {
    heading: "Od sourcingu po onboarding",
    description: "Twój rozszerzony zespół rekrutacyjny – skalowalny, precyzyjny i skupiony na dostarczaniu najlepszych kandydatów na kluczowe stanowiska.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Rozpoznanie potrzeb i plan zatrudnień", description: "Określamy potrzeby kadrowe, opisy stanowisk, wymagane kompetencje i harmonogram." },
      { number: "02.", heading: "Ustalenie struktury RPO", description: "Dobieramy odpowiedni model współpracy." },
      { number: "03.", heading: "Poszukiwanie talentów i prezentacja kandydatów", description: "Wyszukujemy, weryfikujemy i przedstawiamy kandydatów w trybie ciągłym lub projektowym." },
      { number: "04.", heading: "Bieżące raportowanie i optymalizacja", description: "Cotygodniowe podsumowania, raporty z pipeline'u, analityka kandydatów i KPI efektywności." },
      { number: "05.", heading: "Skalowanie zespołu RPO w dowolnym momencie", description: "Potrzebujesz jednego rekrutera czy całego zespołu? Skalujemy od ręki." },
    ],
  },
  details: {
    heading: "Co nas wyróżnia?",
    cards: [
      { icon: "/images/icon-recruitment-talent-search.png", heading: "Dostęp do unikalnych kandydatów", description: "Dzięki autorskim metodom Direct Search, silnym zasobom marketingowym i własnym bazom danych docieramy do specjalistów niedostępnych na standardowych portalach z ogłoszeniami." },
      { icon: "/images/icon-magnifier-security-verification.png", heading: "Doświadczenie w executive search", description: "Skutecznie rekrutujemy menedżerów wyższego szczebla, liderów zespołów i ekspertów kluczowych dla biznesu." },
      { icon: "/images/icon-magnifier-quality-assurance.png", heading: "Gwarancja jakości", description: "Dostarczamy kandydatów idealnie dopasowanych zarówno pod względem kompetencji, jak i kultury organizacyjnej." },
      { icon: "/images/icon-gears-recruitment-process.png", heading: "Skalowalność procesu", description: "Od pojedynczych zatrudnień po całe działy – w tym projekty, w których w krótkim czasie dostarczyliśmy ponad 10 specjalistów." },
      { icon: "/images/icon-person-growth-performance.png", heading: "Elastyczność i szybkość", description: "Dostosowujemy się do Twoich celów biznesowych – również przy pilnych rekrutacjach zamykanych w zaledwie kilka dni." },
    ],
  },
  testimonials: [
    {
      quote: "W swojej karierze miałem przyjemność współpracować z wieloma agencjami rekrutacyjnymi. Muszę przyznać, że pieniądze wydane na usługi Pomerico Group okazały się doskonałą inwestycją. (…) Zdaję sobie sprawę, że tradycyjnymi metodami rekrutacji nigdy nie dotarłbym do tak wykwalifikowanych kandydatów, a byłaby to strata, na którą po prostu nie mogłem sobie pozwolić. (…) Projekt okazał się znacznie bardziej czasochłonny i kosztowny, niż pierwotnie zakładano, ale usługa została zrealizowana bez żadnych dodatkowych opłat – z najwyższą jakością i starannością do samego końca.",
      author: "Jakub Glinkowski",
      role: "Prezes Zarządu",
      company: "Apex-Thermo King Sp. z o.o.",
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
    question: "Czym jest RPO i jak realizuje je Pomerico?",
    answer: "Outsourcing procesów rekrutacyjnych (RPO) w Polsce oznacza prowadzenie zatrudniania end-to-end. To nie tylko przesyłanie CV, ale projektowanie strategii, sourcing, testowanie kandydatów i onboarding pracowników – tak, jak robiłby to wewnętrzny dział HR."
  },
  {
    question: "Czym wyróżnia się rekrutacja w Pomerico?",
    answer: "Specjalizujemy się w rekrutacji na stałe. Docieramy do kandydatów niedostępnych na portalach z ogłoszeniami dzięki Direct Search, employer brandingowi i zaawansowanym narzędziom oceny. Dla jednego z klientów zbudowaliśmy 25-osobowy dział w niecałe 3 miesiące, z rotacją bliską 0% w pierwszym roku."
  },
  {
    question: "Jakie korzyści biznesowe daje RPO z Pomerico?",
    answer: "Przewidywalne wyniki, niższe koszty i dostęp do kandydatów, do których inaczej trudno dotrzeć. Przy 92% skuteczności rekrutacji klienci traktują nas jako długoterminowego partnera, a nie tylko dostawcę."
  },
  {
    question: "Co się stanie, jeśli zatrudniony kandydat szybko odejdzie?",
    answer: "W zależności od modelu RPO oferujemy gwarancję wymiany kandydata, a także wsparcie retencji, aby ograniczyć rotację."
  },
  {
    question: "Czy wspieracie employer branding i candidate experience?",
    answer: "Tak, model RPO podnosi jakość dotarcia do kandydatów, komunikację z nimi i postrzeganie marki firmy na rynku."
  },
  {
    question: "Czy Pomerico może prowadzić rekrutację end-to-end dla długoterminowych potrzeb kadrowych?",
    answer: "Tak, RPO jest stworzone właśnie z myślą o długoterminowej, przewidywalnej i skalowalnej rekrutacji."
  },
  {
    question: "Czy Pomerico może skompletować zespół dla nowego zakładu (greenfield) w Polsce?",
    answer: "Tak. W projektach greenfield – nowych fabrykach, magazynach czy zakładach produkcyjnych – rekrutujemy cały zespół od zera przed startem, w tym stanowiska techniczne, kierownicze i wspierające. Dla SSI Schäfer zbudowaliśmy zespół utrzymania ruchu dla nowego, zautomatyzowanego centrum dystrybucyjnego na Dolnym Śląsku: trzon zespołu zatrudniliśmy w 3 miesiące – w czasie o połowę krótszym od planowanego – a zespół rozrósł się do 35 osób."
  },
];
