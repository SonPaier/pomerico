import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData = {
  slug: "it-contracting",
  title: "Kontraktowanie IT",
  metaDescription:
    "Zatrudniaj kontraktorów IT w Polsce z Pomerico Group. Szybko buduj elastyczne zespoły technologiczne, ograniczaj ryzyko i skaluj według potrzeb.",
  hero: {
    heading: "Kontraktowanie IT",
    description:
      "<p><b>Buduj wydajne zespoły IT – elastycznie, szybko i bez długoterminowego ryzyka zatrudnienia.</b></p><p>Pomerico dostarcza najwyższej klasy specjalistów IT na kontrakcie, dając Twojej firmie elastyczność w skalowaniu, przyspieszaniu dostarczania produktów, wspieraniu projektów transformacyjnych i natychmiastowym uzupełnianiu luk kompetencyjnych. Otrzymujesz dokładnie tę ekspertyzę, której potrzebujesz – bez kosztów stałego zatrudnienia. Docieramy do niszowych talentów, rzetelnie weryfikujemy umiejętności i przejmujemy wszystkie obowiązki kadrowe, prawne i płacowe, aby Twoje zespoły mogły w pełni skupić się na realizacji.</p>",
    iconList: [
      { bold: "Elastyczne skalowanie zespołu –", text: "Natychmiast powiększaj lub dopasowuj zespoły IT do potrzeb projektu bez kosztów rekrutacji." },
      { bold: "Szybsza realizacja projektów –", text: "Szybki dostęp do niszowych specjalistów przekłada się na sprawniejsze wdrożenia i płynną realizację projektów IT." },
      { bold: "Bezpieczeństwo i zgodność z przepisami –", text: "Przejmujemy wszystkie obowiązki kadrowe, płacowe i prawne, dzięki czemu Twoje zespoły działają zgodnie z przepisami i koncentrują się na realizacji." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-operations-management.png", heading: "Szybszy dostęp do specjalistów IT wysokiej klasy", description: "Dostarczamy specjalistów w ciągu dni lub tygodni – nie miesięcy – dzięki direct search, własnym kanałom sourcingowym i silnej sieci kontaktów w IT." },
    { icon: "/images/icon-wrench-maintenance-services.png", heading: "Pełne wsparcie prawne, płacowe i HR", description: "Zajmujemy się umowami, płacami, podatkami, opieką HR i zaangażowaniem, compliance i dokumentacją, onboardingiem i offboardingiem. Ty zarządzasz codzienną pracą – my całą resztą." },
    { icon: "/images/icon-magnifier-security-verification.png", heading: "Dostęp do talentów niedostępnych na rynku", description: "Docieramy do kandydatów pasywnych dzięki direct search, profilowaniu behawioralnemu i sourcingowi wielokanałowemu – również do seniorów i specjalistów niszowych, zwykle nieosiągalnych dla standardowych agencji." },
    { icon: "/images/icon-checklist-project-delivery.png", heading: "Niska rotacja (0–7%)", description: "Silne wsparcie HR, jasne oczekiwania i dopasowanie kulturowe zapewniają długoterminową stabilność i efektywność w Twoich projektach." },
  ],
  targetAudience: {
    heading: "Dla kogo jest kontraktowanie IT?",
    description: "Buduj wydajne zespoły IT – elastycznie, szybko i bez długoterminowego ryzyka zatrudnienia.",
    items: [
      { bold: "Firm potrzebujących szybkiego dostępu do kompetencji IT –", text: "Gdy rekrutacja wewnętrzna jest zbyt wolna lub zbyt skomplikowana – zwłaszcza w przypadku ról niszowych i seniorskich." },
      { bold: "Firm skalujących zespoły technologiczne pod projekty lub rozwój produktu –", text: "Idealne w szczytach developmentu, przy rosnącym backlogu lub w fazie wdrożenia." },
      { bold: "Organizacji migrujących do chmury lub modernizujących architekturę –", text: "Dostarczamy specjalistów DevOps, Cloud Engineerów, ekspertów od danych, automatyzacji oraz SAP/ERP." },
      { bold: "Firm z nieprzewidywalnym lub sezonowym obciążeniem –", text: "Elastyczne kontraktowanie sprawia, że płacisz wyłącznie za kompetencje, których potrzebujesz." },
      { bold: "Firm, które chcą uniknąć długoterminowych zobowiązań kadrowych –", text: "Kontraktowanie ogranicza ryzyko i zwiększa zwinność." },
      { bold: "Firm bez własnych zasobów rekrutacyjnych –", text: "Stajemy się Twoim zewnętrznym zapleczem sourcingu IT – szybkim, trafnym i efektywnym kosztowo." },
    ],
  },
  tagline: {
    heading: "Twój zespół IT na żądanie",
    description: "Elastyczny, ekspercki i gotowy wspierać projekty developerskie, DevOps i transformacyjne – bez długoterminowego ryzyka zatrudnienia.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Rozpoznanie i analiza techniczna", description: "Definiujemy rolę, obowiązki, stack technologiczny, poziom doświadczenia, zakres i harmonogram." },
      { number: "02.", heading: "Sourcing i shortlista", description: "Direct search, kampanie sourcingowe i aktywacja bazy talentów. Wyłącznie zweryfikowani, dopasowani specjaliści IT." },
      { number: "03.", heading: "Rozmowy i wybór", description: "Rozmawiasz z najlepszymi kandydatami i wybierasz osobę najlepiej dopasowaną." },
      { number: "04.", heading: "Umowa i onboarding", description: "Pomerico zajmuje się wszystkimi formalnościami, płacami i dokumentacją." },
      { number: "05.", heading: "Realizacja i wsparcie HR", description: "Kontraktor pracuje z Twoim zespołem; my dbamy o HR, płace i zaangażowanie." },
      { number: "06.", heading: "Skalowanie", description: "W każdej chwili dodajesz kolejnych inżynierów lub specjalistów – bez wąskich gardeł rekrutacyjnych." },
    ],
  },
  testimonials: [
    {
      quote: "Polecam Pomerico zarówno z perspektywy kandydata, jak i klienta B2B. Jako Senior Engineer i menedżer miałem kontakt z wieloma firmami w branży – w tym przypadku szczególnie cenię jakość usług i indywidualne podejście. Doceniam ich etykę w zarządzaniu projektami, relacjach z klientami i negocjacjach. Dodatkowy plus za komunikację i szybkość reakcji.",
      author: "Michael Mańkowski",
      role: "Software Engineering Manager",
      company: "Adverity",
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
    question: "Czym jest kontraktowanie IT i czym różni się od outsourcingu lub zatrudnienia na stałe?",
    answer: "Kontraktowanie IT daje firmom szybki i elastyczny dostęp do wyspecjalizowanych inżynierów bez zwiększania stałego zatrudnienia. W przeciwieństwie do outsourcingu zachowujesz pełną kontrolę nad realizacją, roadmapą i codzienną pracą. W przeciwieństwie do zatrudnienia etatowego unikasz długich procesów rekrutacji, obsługi płac, compliance i długoterminowego ryzyka."
  },
  {
    question: "Czy kontraktowanie sprawdza się w długoterminowych projektach?",
    answer: "Tak – wielu klientów korzysta z kontraktowania IT przy wdrożeniach trwających rok lub kilka lat."
  },
  {
    question: "Czy kontraktorzy IT mogą pracować zdalnie, stacjonarnie lub hybrydowo?",
    answer: "Tak – klienci łączą elastyczność pracy zdalnej z okazjonalnymi spotkaniami na miejscu, w zależności od wymagań projektu."
  },
  {
    question: "Kto na co dzień zarządza kontraktorami IT?",
    answer: "Zazwyczaj kontraktorami IT zarządza Twój zespół wewnętrzny, co zapewnia spójność z priorytetami biznesowymi. W zależności od modelu Pomerico może jednak zapewnić także koordynację lub częściowe wsparcie w zarządzaniu. Model dopasowujemy do preferowanego przez Ciebie poziomu zaangażowania."
  },
  {
    question: "Co jeśli zmienią się wymagania projektu?",
    answer: "Gdy wymagania się zmieniają, możemy dostosować zakres, wymienić lub dodać specjalistów albo zmienić model współpracy. Ta elastyczność to jedna z kluczowych zalet kontraktowania IT – nie jesteś związany sztywnymi strukturami."
  },
  {
    question: "Czy kontraktowanie IT jest tańsze niż zatrudnienie wewnętrzne?",
    answer: "Tak, kontraktowanie IT często jest bardziej opłacalne niż stałe zatrudnienie. Eliminuje opłaty rekrutacyjne, długoterminowe ryzyko związane z zatrudnieniem i stałe koszty ogólne. Koszty pozostają przewidywalne i dopasowane do rzeczywistych potrzeb projektu."
  },
  {
    question: "Na jakie wsparcie mogę liczyć w ramach kontraktowania IT?",
    answer: "Otrzymujesz standardowe wsparcie obejmujące rekrutację, umowy, płace, compliance i koordynację. W zależności od modelu możemy też wspierać onboarding, procesy HR i monitorowanie efektywności. Zakres wsparcia jest elastyczny i może zmieniać się wraz z Twoimi potrzebami."
  },
];
