import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "eor-on-site",
  title: "EOR + On Site",
  metaDescription:
    "Zatrudniaj i zarządzaj zespołami na miejscu w Polsce bez lokalnej spółki. EOR + On Site od Pomerico: płace, compliance i administracja HR. Poproś o wycenę.",
  hero: {
    heading: "EOR + On Site w Polsce",
    description:
      "<p><b>Zatrudniaj i zarządzaj zespołami pracującymi na miejscu w Polsce – bez zakładania lokalnej spółki.</b></p><p>Dzięki modelowi EOR + On Site Pomerico umożliwia firmom międzynarodowym legalne zatrudnianie i zarządzanie zespołami pracującymi stacjonarnie w Polsce – <b>bez tworzenia oddziału, spółki zależnej czy struktury prawnej.</b></p><p>Stajemy się formalnym pracodawcą, odpowiadamy za compliance, płace, HR i dokumentację, a Ty bezpośrednio kierujesz pracą zespołu w wybranej przez siebie lokalizacji.</p><p>To model idealny dla firm, które potrzebują fizycznej obecności – operacje, magazyny, produkcja, R&amp;D, specjaliści terenowi, zespoły lokalne – ale chcą uniknąć złożoności prawnej, podatkowej i kadrowej.</p>",
    iconList: [
      { bold: "Prostsze zarządzanie zespołem –", text: "Pomerico jest formalnym pracodawcą i zajmuje się płacami, HR i compliance, a Ty bezpośrednio kierujesz pracownikami na miejscu." },
      { bold: "Szybkie uruchomienie zespołu –", text: "Budujesz i skalujesz zespoły stacjonarne w Polsce bez zakładania oddziału czy spółki." },
      { bold: "Sprawne operacje i zgodność z przepisami –", text: "Bierzemy na siebie wszystkie obowiązki prawne, podatkowe i kadrowe, zapewniając płynną i zgodną z przepisami pracę na miejscu." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-operations-management.png", heading: "Opis roli i wymagań na miejscu", description: "Zbieramy szczegółowe informacje o Twoich potrzebach i wymaganiach. Otrzymujesz jasny plan kosztów, kroków formalnych i harmonogramu onboardingu." },
    { icon: "/images/icon-folders-document-management.png", heading: "Rekrutacja lub przeniesienie pracownika", description: "Rekrutacja prowadzona przez Pomerico (bezpłatna dla klientów EOR) lub przeniesienie wskazanego przez Ciebie pracownika do naszej struktury EOR. Zanim przedstawimy kandydatów, przechodzą weryfikację behawioralną, ocenę umiejętności i dopasowania kulturowego." },
    { icon: "/images/icon-effectiveness-employee-growth.png", heading: "Legalne zatrudnienie i compliance", description: "Pomerico zostaje formalnym pracodawcą i odpowiada za: umowy i dokumentację onboardingową, płace i podatki, BHP, benefity i ubezpieczenia, obsługę zwolnień lekarskich i urlopów, RODO i bezpieczeństwo danych oraz opiekę HR na miejscu." },
    { icon: "/images/icon-checklist-compliance-audit.png", heading: "Start pracy na miejscu", description: "Pracownik pracuje stacjonarnie we wskazanej przez Ciebie lokalizacji. Ty zarządzasz codziennymi zadaniami, grafikiem i wynikami; my – wszystkim, co dotyczy zatrudnienia, HR i płac." },
    { icon: "/images/icon-folders-document-management.png", heading: "Miesięczne raporty i przejrzyste koszty", description: "Otrzymujesz: jedną zbiorczą fakturę miesięczną, zestawienie płac, raporty HR i ewidencję czasu pracy, aktualizacje w zakresie compliance oraz monitoring umów." },
    { icon: "/images/icon-puzzle-team-integration.png", heading: "Skaluj zespół w dowolnym momencie", description: "Niezależnie od tego, czy potrzebujesz 5, 20 czy 50 pracowników na miejscu, skalowanie jest proste: bez formalności prawnych, bez obciążeń płacowych, bez ryzyka niezgodności z przepisami." },
  ],
  targetAudience: {
    heading: "Dla kogo jest EOR + On Site?",
    description: "Dla firm, które potrzebują fizycznej obecności w Polsce – bez budowania infrastruktury prawnej i kadrowej.",
    items: [
      { bold: "Globalnych firm wchodzących na polski rynek –", text: "Działaj na miejscu od razu, odraczając lub unikając konieczności zakładania lokalnej spółki." },
      { bold: "Firm zarządzających zespołami produkcyjnymi, operacyjnymi lub magazynowymi –", text: "Idealne rozwiązanie dla produkcji, logistyki, motoryzacji, przemysłu, serwisu i utrzymania ruchu." },
      { bold: "Firm potrzebujących specjalistów technicznych na miejscu –", text: "SAP, automatyka, inżynieria, terenowe zespoły IT, wsparcie R&D, technicy sprzętowi i inni." },
      { bold: "Organizacji budujących lokalne zespoły na nowych rynkach lub w pilotażach –", text: "Testuj operacje, buduj pierwsze zespoły lub prowadź pilotaże na miejscu bez ryzyka prawnego i kadrowego." },
      { bold: "Firm oczekujących przewidywalnych kosztów i zerowego ryzyka compliance –", text: "Zajmujemy się prawem pracy, podatkami, płacami, HR i BHP – Ty skupiasz się na operacjach." },
      { bold: "Firm, które muszą szybko zatrudniać i uruchamiać pracę na miejscu –", text: "Dzięki sprawdzonej infrastrukturze dostarczamy specjalistów i uruchamiamy zespoły w ciągu 1–3 tygodni." },
    ],
  },
  tagline: {
    heading: "Twój partner EOR w Polsce",
    description: "Elastyczne zespoły stacjonarne i zdalne, w pełni zgodne z przepisami, przy minimalnym obciążeniu administracyjnym.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Analiza potrzeb i zakresu stanowiska", description: "Analizujemy lokalizację, model pracy, potrzebny sprzęt, wymogi formalne i kompetencje niezbędne do pracy na miejscu." },
      { number: "02.", heading: "Rekrutacja lub przeniesienie pracownika", description: "Wyszukujemy, weryfikujemy i dopasowujemy kandydatów metodą direct search i profilowania behawioralnego albo przenosimy Twojego obecnego pracownika do naszej struktury EOR." },
      { number: "03.", heading: "Formalności zatrudnienia i BHP", description: "Pomerico zajmuje się wszystkimi formalnościami: przygotowaniem umów, zgłoszeniem do systemu płacowego, wymogami medycyny pracy i dokumentacją." },
      { number: "04.", heading: "Start pracy na miejscu", description: "Pracownicy pracują bezpośrednio we wskazanej przez Ciebie lokalizacji; Ty zarządzasz zadaniami, my – HR, płacami i compliance." },
      { number: "05.", heading: "Miesięczne raporty i przejrzystość operacyjna", description: "Otrzymujesz zbiorczą fakturę, zestawienie płac, raporty compliance i informacje z obszaru HR." },
      { number: "06.", heading: "Skaluj operacje na miejscu w dowolnym momencie", description: "Zwiększaj lub zmniejszaj zatrudnienie bez komplikacji prawnych, płacowych i administracyjnych." },
    ],
  },
  testimonials: [
    {
      quote: "Pomerico wyróżnia się niezawodnością i skutecznością, dzięki czemu wiem, że mogę im w pełni zaufać. Ich efektywność w obszarze HR, marketingu i innych strategicznych dziedzin zasługuje na uznanie i stoi za imponującą jakością ich usług. To najlepsza firma w tej branży, z jaką miałem przyjemność współpracować. Gorąco polecam.",
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
    question: "Czym EOR + On Site różni się od standardowego EOR?",
    answer: "Łączy prostotę prawną modelu EOR z fizyczną obecnością biura i zespołu w Polsce. Pracownicy są legalnie zatrudnieni przez Pomerico, ale na co dzień pracują na miejscu w dedykowanym biurze – tak jak w Twoim własnym oddziale, tylko bez związanych z nim kosztów."
  },
  {
    question: "Czy Pomerico może zorganizować biuro i zarządzać nim?",
    answer: "Tak – zajmujemy się HR, płacami, compliance, a nawet administracją biura, dzięki czemu masz gotowy polski oddział „pod klucz”. Niektórzy klienci w ten sposób zwiększyli zespół do ponad 25 osób w ciągu 3 miesięcy."
  },
  {
    question: "Dlaczego EOR + On Site to dobre rozwiązanie dla firm skandynawskich i europejskich?",
    answer: "Bo Polska jest zaledwie godzinę lotu od Kopenhagi czy Sztokholmu, co czyni ją efektywnym kosztowo hubem nearshoringowym. Z Pomerico zyskujesz lokalną realizację na międzynarodowym poziomie."
  },
  {
    question: "Czy EOR sprawdzi się przy zatrudnieniu czasowym, sezonowym lub projektowym na miejscu?",
    answer: "Oczywiście. Model EOR sprawdza się w przypadku zespołów długo- i krótkoterminowych, pilotażowych, sezonowych lub projektowych – w zależności od Twoich potrzeb operacyjnych."
  },
  {
    question: "Czy pracownicy EOR na miejscu mogą współpracować z moim zespołem wewnętrznym?",
    answer: "Tak. Pracownicy na miejscu działają pod Twoim bieżącym kierownictwem i pracują ramię w ramię z zespołem wewnętrznym jak zwykli pracownicy, a Pomerico w tle zajmuje się sprawami HR i zatrudnienia."
  },
  {
    question: "Czy Pomerico może zapewnić kierowników lub koordynatorów dla zespołów na miejscu?",
    answer: "Tak. Możemy zapewnić Team Leaderów, Supervisorów lub koordynatorów, którzy działają pod Twoim kierownictwem, ale formalnie są zatrudnieni przez Pomerico."
  },
  {
    question: "Które dni są w Polsce dniami roboczymi?",
    answer: "Standardowy tydzień pracy w Polsce trwa 5 dni – od poniedziałku do piątku. W modelu EOR Pomerico dopasowujemy harmonogram pracy do potrzeb Twojej firmy – możliwe są też inne modele (np. praca zmianowa lub projektowa), zawsze w pełnej zgodności z lokalnym prawem pracy."
  },
  {
    question: "Jakie są dni ustawowo wolne od pracy w Polsce?",
    answer: "W Polsce obowiązują oficjalne dni ustawowo wolne od pracy, w które pracownicy zazwyczaj nie pracują. W modelu EOR Pomerico zapewnia pełną zgodność z lokalnym kalendarzem świąt, uwzględnia święta w płacach i planowaniu zespołu oraz pomaga optymalizować dostępność pracowników (np. w projektach międzynarodowych)."
  },
  {
    question: "Ile godzin tygodniowo pracuje się w Polsce?",
    answer: "Standardowy czas pracy w Polsce to 40 godzin tygodniowo (8 godzin dziennie). W modelu EOR zapewniamy pełną zgodność z Kodeksem pracy, zarządzamy nadgodzinami, urlopami i zwolnieniami lekarskimi (L4) oraz optymalizujemy koszty pracy i efektywność zespołu."
  },
  {
    question: "Ile godzin miesięcznie pracuje się w Polsce?",
    answer: "Liczba godzin pracy w miesiącu zależy od kalendarza (dni robocze i święta), ale średnio wynosi około 160–168 godzin. Z Pomerico precyzyjnie wyliczamy wymiar czasu pracy, uwzględniamy lokalne przepisy i święta oraz zapewniamy przejrzyste raportowanie dla Twojej firmy. Zachowujesz kontrolę bez obciążeń operacyjnych."
  },
  {
    question: "Jakie święta obchodzi się w Polsce?",
    answer: "W ciągu roku w Polsce przypada kilka dni ustawowo wolnych od pracy (np. Nowy Rok, Wielkanoc, Święto Pracy, Boże Narodzenie). W praktyce oznacza to okresowo mniejszą dostępność zespołu i konieczność wcześniejszego planowania projektów. W Pomerico pomagamy z wyprzedzeniem planować obłożenie zespołu, proponujemy rozwiązania (np. rotacje, zastępstwa) i dbamy o ciągłość działania firmy."
  },
];
