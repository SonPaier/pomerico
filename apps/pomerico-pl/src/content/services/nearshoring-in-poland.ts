import type { ServicePageData, FAQItem } from "@pomerico/content";

export const data: ServicePageData & {
  whatWeHandle: {
    heading: string;
    superheading?: string;
    description: string;
    subsections: { heading: string; description: string }[];
  };
} = {
  slug: "nearshoring-in-poland",
  title: "Nearshoring w Polsce",
  metaDescription:
    "Nearshoring w Polsce: zespoły finansowe, HR i back office w UE, blisko Twojej strefy czasowej – efektywnie kosztowo i bez operacyjnej złożoności.",
  hero: {
    heading: "Nearshoring w Polsce",
    description:
      "<p><b>Buduj w Polsce wysokiej jakości, efektywne kosztowo zespoły – szybko, bezpiecznie i bez operacyjnej złożoności.</b></p><p>Polska to jeden z czołowych kierunków nearshoringu w Europie: oferuje specjalistów światowej klasy, konkurencyjne koszty, dobrą znajomość języka angielskiego, standardy zgodności na poziomie UE i wyjątkową niezawodność biznesową.<br/>Pomerico pomaga globalnym firmom budować i skalować zespoły nearshore w obszarach IT, finansów, operacji, danych, obsługi klienta i inżynierii – bez potrzeby tworzenia lokalnej infrastruktury.</p><p>Zapewniamy rekrutację, HR, płace, zgodność z przepisami, zatrudnienie w modelu EOR/PEO, kontraktowanie i pełne wsparcie operacyjne – Ty skupiasz się na realizacji, a my zajmujemy się resztą.</p>",
    iconList: [
      { bold: "Mniejsze obciążenie zespołu –", text: "Pomerico prowadzi rekrutację, HR, płace, compliance i wsparcie operacyjne, dzięki czemu możesz skupić się na kluczowej działalności bez ciężaru administracji." },
      { bold: "Szybsze efekty operacyjne –", text: "Zespoły budujemy i wdrażamy w tygodnie, a nie miesiące, zapewniając natychmiastową produktywność i płynną integrację z Twoimi operacjami." },
      { bold: "Przewidywalna jakość –", text: "Stabilne, zmotywowane zespoły z rotacją na poziomie 0–7% gwarantują stałą jakość, efektywność i powodzenie projektów." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-recruitment-process.png", heading: "Dostęp do najlepszych specjalistów w UE", description: "Polska słynie z wysoko wykwalifikowanych kadr, świetnych uczelni i silnej kultury inżynierskiej. Zespoły nearshore zapewniają wysoką produktywność i jakość na poziomie zachodnich standardów." },
    { icon: "/images/icon-shield-employer-compliance.png", heading: "Niższe koszty – nawet o 40% w porównaniu z Europą Zachodnią", description: "Polscy specjaliści oferują ekspertyzę światowej klasy w bardzo konkurencyjnej cenie, co pozwala optymalizować budżety, zwiększać efektywność operacyjną i szybciej osiągać cele biznesowe." },
    { icon: "/images/icon-workflow-process-automation.png", heading: "Pełna zgodność z prawem (prawo pracy UE i polskie)", description: "Prowadzimy całość spraw kadrowych, płacowych, umów i compliance – Twoje operacje są w pełni zgodne ze standardami UE." },
    { icon: "/images/icon-checklist-regulatory-compliance.png", heading: "Różne modele zatrudnienia", description: "EOR, PEO, body leasing, kontraktowanie, rekrutacja na stałe. Wybierz model dopasowany do Twojego biznesu – resztą zajmiemy się my." },
    { icon: "/images/icon-brain-it-expertise.png", heading: "Bliskość, zbieżna strefa czasowa i sprawna komunikacja", description: "Polska ma wspólne godziny pracy ze wszystkimi rynkami europejskimi, co zapewnia płynną współpracę i zgodność kulturową." },
  ],
  targetAudience: {
    heading: "Dla kogo jest nearshoring w Polsce?",
    description: "Buduj w Polsce wysokiej jakości, efektywne kosztowo zespoły – szybko, bezpiecznie i bez operacyjnej złożoności.",
    items: [
      { bold: "Firm rozbudowujących zespoły technologiczne, finansowe lub operacyjne –", text: "idealne rozwiązanie do skalowania bez ograniczeń wewnętrznej rekrutacji." },
      { bold: "Firm, które chcą jakości na poziomie UE w konkurencyjnej cenie –", text: "Polska jest znacznie bardziej efektywna kosztowo niż Europa Zachodnia, przy zachowaniu wysokich standardów." },
      { bold: "Firm planujących długoterminowe projekty realizacyjne lub transformacyjne –", text: "stabilne zespoły z niską rotacją zapewniają przewidywalne rezultaty." },
      { bold: "Firm bez lokalnych zasobów HR, płacowych i prawnych –", text: "przejmujemy całą złożoność operacyjną, prawną i związaną z zatrudnieniem." },
      { bold: "Firm uruchamiających nowe operacje (greenfield) w Polsce –", text: "zupełnie nowa lokalizacja, w której cały zespół trzeba jednocześnie zrekrutować, zatrudnić i wdrożyć." },
      { bold: "Firm międzynarodowych stopniowo wchodzących do Polski –", text: "zacznij od zespołów nearshore i później przejdź na własną spółkę – albo pozostań w pełnym outsourcingu." },
    ],
  },
  tagline: {
    heading: "Buduj w Polsce wydajne, efektywne kosztowo zespoły – szybko, bezpiecznie i bez operacyjnej złożoności – i skup się na realizacji oraz rozwoju.",
    description: "Zyskaj dostęp do najlepszych europejskich specjalistów, obniż koszty ogólne i płynnie skaluj operacje dzięki naszemu kompleksowemu wsparciu.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Analiza potrzeb i strategia nearshoringu", description: "Zaczynamy od zrozumienia Twoich celów biznesowych, zakresu projektu, struktury zespołu, technologii, harmonogramu i priorytetów rekrutacyjnych. Otrzymujesz przejrzystą mapę drogową z rekomendowanymi stanowiskami, przewidywaną dostępnością, kosztami i modelami współpracy (EOR, kontraktowanie, rekrutacja na stałe, model hybrydowy)." },
      { number: "02.", heading: "Projektowanie współpracy", description: "Pomerico przygotowuje plan pozyskania kandydatów dopasowany do Twoich stanowisk. Definiujemy: wymagane kompetencje i poziom doświadczenia, wskaźniki sukcesu dla każdej roli, oczekiwania behawioralne i kulturowe, stack technologiczny i potrzeby realizacyjne." },
      { number: "03.", heading: "Wybór modelu zatrudnienia", description: "Wspólnie wybieramy strukturę dopasowaną do Twojej strategii:\n\nEOR – najszybsze zatrudnienie, bez potrzeby zakładania spółki;\nkontraktowanie / staff augmentation – maksymalna elastyczność;\nrekrutacja na stałe – długoterminowe budowanie zespołu;\nmodel hybrydowy – połączenie modeli dla optymalnego kosztu i stabilności. Wszystkie kwestie prawne, płacowe i compliance prowadzi Pomerico." },
      { number: "04.", heading: "Onboarding i integracja operacyjna", description: "Koordynujemy wszystkie formalności. Twój zespół nearshore staje się w pełni operacyjny i zintegrowany z Twoimi procesami, narzędziami, rytuałami i stylem komunikacji." },
      { number: "05.", heading: "Bieżące wsparcie HR, płacowe i realizacyjne", description: "Twój zespół skupia się na realizacji – my zajmujemy się całą resztą." },
      { number: "06.", heading: "Twój zespół skupia się na realizacji – my zajmujemy się resztą", description: "Wraz z rozwojem Twoich operacji Pomerico szybko rozbudowuje zespół nearshore – niezależnie od tego, czy potrzebujesz jednego dodatkowego specjalisty, całego zespołu, czy rozbudowy kilku działów. Skalowanie przebiega płynnie, zgodnie z przepisami i z pełnym wsparciem operacyjnym." },
    ],
  },
  details: {
    heading: "Jak to działa?",
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
      quote: "Niejednokrotnie wykazali się lojalnością i realizowali zadania ponad nasze oczekiwania, podejmując decyzje korzystne dla pracodawcy, a niekoniecznie we własnym interesie. Zanim zaczęliśmy współpracę z Pomerico, współpracowaliśmy z wieloma innymi agencjami. Na podstawie naszych doświadczeń mogę z pełnym przekonaniem potwierdzić, że to najbardziej rzetelna, skuteczna i godna zaufania firma.",
      author: "Michał Karopowicz",
      role: "COO",
      company: "Babord VAP",
    },
  ],
  caseStudySlugs: [
    "hedepys-seamless-launch-in-poland-with-pomerico",
    "comprehensive-hr-transformation-driving-growth",
    "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    "60-hires-1600-applications-40000-people-reached",
  ],
  whatWeHandle: {
    superheading: "Zbuduj zespół nearshore. Resztą zajmiemy się my.",
    heading: "Czym się dla Ciebie zajmujemy?",
    description: "Nie musisz myśleć o rekrutacji, podatkach ani formalnościach – wszystko robimy za Ciebie.\n\nWyobraź sobie wszystkie operacje w jednym miejscu – bez stresu związanego z zatrudnieniem, umowami, płacami czy compliance.\nZ Pomerico otrzymujesz kompleksową usługę end-to-end, która pozwala Ci w pełni skupić się na rozwoju biznesu.",
    subsections: [
      {
        heading: "Twój dedykowany lokalny partner",
        description: "Otrzymujesz dedykowanego Project Managera, który rozumie Twój biznes, szybko reaguje i zarządza całym Twoim zespołem w Polsce.\nZapewniamy pełne wsparcie kadrowe, płacowe i prawne oraz bezpośredni kontakt, kiedy tylko go potrzebujesz.\n\nDzięki dogłębnej znajomości lokalnych realiów optymalizujemy Twoje procesy i model zatrudnienia, aby operacje przebiegały sprawniej i efektywniej.",
      },
    ],
  },
};

export const faqItems: FAQItem[] = [
  {
    question: "Dlaczego Polska to najlepsza lokalizacja nearshoringowa w Europie?",
    answer: "Polska oferuje duże zasoby wysoko wykwalifikowanych kadr, konkurencyjne koszty pracy oraz silne kompetencje w IT i finansach. Bliskość rynków nordyckich i unijnych (zaledwie godzina lotu z Gdańska do Kopenhagi) sprawia, że to idealny wybór dla firm szukających efektywności, dopasowania kulturowego i sprawnej współpracy."
  },
  {
    question: "Jak Pomerico wspiera nearshoring w Polsce?",
    answer: "Zapewniamy pełny pakiet: rekrutację, outsourcing IT, usługi kadrowo-płacowe, compliance i organizację biura. Dzięki usługom Employer of Record i BPO w Polsce Twój zespół jest legalnie zatrudniony, w pełni zgodny z przepisami i gotowy do pracy od pierwszego dnia."
  },
  {
    question: "Jakich korzyści biznesowych mogę się spodziewać z nearshoringu z Pomerico?",
    answer: "<ul><li>Szybsze wprowadzanie produktów na rynek</li><li>Do 30–40% oszczędności w porównaniu z Europą Zachodnią</li><li>Dedykowane zespoły o niskiej rotacji (0–7%)</li><li>Pełna zgodność z przepisami UE i lokalnymi</li></ul>"
  },
  {
    question: "Czy muszę założyć spółkę, aby rozpocząć nearshoring w Polsce?",
    answer: "Nie. Pomerico może zatrudnić Twój zespół w modelu EOR/PEO, dzięki czemu możesz działać od razu, bez zakładania spółki."
  },
  {
    question: "Z jakich modeli zatrudnienia mogę korzystać w ramach nearshoringu w Polsce?",
    answer: "EOR, PEO, kontraktowanie, body leasing, staff augmentation, rekrutacja na stałe lub modele hybrydowe."
  },
  {
    question: "Jakie korzyści kosztowe daje nearshoring do Polski?",
    answer: "Możesz liczyć na obniżenie kosztów nawet o 30–40% w porównaniu z Europą Zachodnią, przy zachowaniu wysokiej jakości projektów i zgodności z przepisami UE."
  },
  {
    question: "Czy nearshoring obejmuje zespoły hybrydowe lub stacjonarne?",
    answer: "Tak – zespoły nearshore mogą pracować zdalnie, hybrydowo lub stacjonarnie, w zależności od Twoich potrzeb operacyjnych."
  },
  {
    question: "Jak rozpocząć nearshoring z Pomerico?",
    answer: "Wystarczy, że przekażesz nam swoje potrzeby kadrowe. Przygotujemy dopasowany plan nearshoringu: stanowiska, koszty, harmonogram i najlepszy model współpracy."
  },
];
