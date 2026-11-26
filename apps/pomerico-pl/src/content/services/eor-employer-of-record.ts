import type { ServicePageData, FAQItem } from "@pomerico/content";
import type { ComparisonTableProps } from "@pomerico/ui/ComparisonTable";
import { plComparisonNotSureLabel } from "@/content/ui-labels";

export const eorComparisonTable: ComparisonTableProps = {
  title: "Która opcja jest właściwa\ndla Twojej ekspansji?",
  subtitle: "EOR czy własna spółka",
  columns: [
    { name: "EOR z Pomerico", highlight: "good", badge: "Rekomendowane" },
    { name: "Własna spółka (sp. z o.o.)", highlight: "bad" },
  ],
  rows: [
    {
      label: "Koszt uruchomienia",
      values: [
        { text: "0 € opłaty wstępnej – bez inwestycji", type: "good" },
        { text: "1 500–5 000+ € – rejestracja, notariusz, obsługa prawna", type: "bad" },
      ],
    },
    {
      label: "Czas do pierwszego zatrudnienia",
      values: [
        { text: "1–3 tygodnie", type: "good" },
        { text: "2–4 miesiące (rejestracja, KRS, rachunek bankowy, NIP, REGON)", type: "bad" },
      ],
    },
    {
      label: "Obowiązki prawne i compliance",
      values: [
        { text: "W całości po stronie Pomerico – prawo pracy, podatki od wynagrodzeń, składki ZUS, RODO", type: "good" },
        { text: "Pełna odpowiedzialność Twojego zespołu – wymaga lokalnej wiedzy prawnej i księgowej", type: "bad" },
      ],
    },
    {
      label: "Bieżąca administracja",
      values: [
        { text: "Jedna faktura miesięcznie. Zero wewnętrznej administracji kadrowej.", type: "good" },
        { text: "Comiesięczne płace, deklaracje ZUS, roczne sprawozdania finansowe, niezbędna księgowość", type: "bad" },
      ],
    },
    {
      label: "Elastyczność / wyjście",
      values: [
        { text: "Skalowanie w górę lub w dół w kilka dni. Zakończenie współpracy z 30‑dniowym wypowiedzeniem.", type: "good" },
        { text: "Likwidacja spółki: 3–12 miesięcy, zobowiązania prawne i finansowe pozostają", type: "bad" },
      ],
    },
    {
      label: "Ryzyko i odpowiedzialność",
      values: [
        { text: "Pomerico przejmuje odpowiedzialność pracodawcy. Ty zachowujesz kontrolę operacyjną.", type: "good" },
        { text: "Pełna odpowiedzialność pracodawcy – błędna kwalifikacja umów, nieprawidłowe deklaracje, kary nakładane na Twoją spółkę", type: "bad" },
      ],
    },
    {
      label: "Minimalna liczba pracowników",
      values: [
        { text: "Od 1 pracownika. Bez minimum.", type: "good" },
        { text: "Koszty założenia spółki rzadko się opłacają przy mniej niż 10–15 etatach", type: "bad" },
      ],
    },
    {
      label: "Najlepsze dla",
      values: [
        "Testowania rynku · Szybkiej ekspansji · 1–50 pracowników · Zatrudnienia projektowego · Ograniczenia ryzyka",
        "Długoterminowego zaangażowania · 50+ pracowników · Pełnej niezależności operacyjnej",
      ],
    },
  ],
  ctaLabel: "Umów bezpłatną konsultację →",
  ctaHref: "/contact",
  footnote:
    "Uwaga: koszty i terminy uruchomienia są orientacyjne i mogą się różnić w zależności od struktury firmy, branży i konkretnych wymogów prawnych. Doradcy Pomerico przygotują ocenę dopasowaną do Twojej sytuacji.",
  notSureLabel: plComparisonNotSureLabel,
};

export const data: ServicePageData = {
  slug: "eor-employer-of-record",
  title: "EOR – Employer of Record",
  metaDescription:
    "Employer of Record w Polsce: zatrudniaj bez polskiej spółki. Pomerico odpowiada za umowy, płace i compliance. Outsourcing zatrudnienia od 1 pracownika.",
  hero: {
    heading: "EOR – Employer of Record w Polsce",
    description:
      "<p><b>Zatrudniaj w Polsce i Europie – bez zakładania spółki. Zaufały nam firmy z Danii, Niemiec, Holandii i całej UE.</b></p><p>Pomerico pełni rolę Twojego formalnego pracodawcy – <b>Employer of Record</b> (EOR) – umożliwiając szybkie i legalne zatrudnianie pracowników w Polsce lub w innych krajach UE bez zakładania lokalnej spółki.</p><p>Zyskujesz dostęp do najlepszych specjalistów, a my w Twoim imieniu przejmujemy wszystkie obowiązki prawne, kadrowe, płacowe i związane z compliance.</p><p>W modelu EOR Ty koncentrujesz się na pracy. Resztą zajmujemy się my – od umów o pracę po comiesięczne płace i zgodność z przepisami.</p>",
    iconList: [
      { bold: "Sprawne zatrudnianie –", text: "Pomerico zajmuje się wszystkimi kwestiami prawnymi, kadrowymi, płacowymi i compliance, dzięki czemu zatrudniasz szybko bez zakładania lokalnej spółki." },
      { bold: "Szybki onboarding i start pracy –", text: "Dostęp do najlepszych specjalistów w Polsce i Europie przy minimalnym czasie przygotowań i pełnym wsparciu operacyjnym." },
      { bold: "Bezpieczne i zgodne z przepisami działanie –", text: "Przejmujemy wszystkie obowiązki związane z zatrudnieniem, płacami i regulacjami, zapewniając płynną i wolną od ryzyka współpracę." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-person-growth-performance.png", heading: "Zrozumienie Twoich potrzeb rekrutacyjnych", description: "Zbieramy informacje o stanowisku, poziomie doświadczenia, zakresie obowiązków, oczekiwanym wynagrodzeniu i wymogach formalnych. Otrzymujesz jasny obraz terminów i kosztów." },
    { icon: "/images/icon-gears-system-integration.png", heading: "Zero ryzyka niezgodności z przepisami", description: "Rekrutacja prowadzona przez Pomerico (bezpłatna dla klientów EOR) lub przeniesienie wybranego przez Ciebie pracownika do naszej struktury EOR. Jakość gwarantujemy dzięki ocenie behawioralnej, weryfikacji technicznej i ocenie dopasowania kulturowego." },
    { icon: "/images/icon-gears-system-integration.png", heading: "Formalności zatrudnienia i dokumentacja", description: "Pomerico zostaje formalnym pracodawcą i odpowiada za: umowy o pracę, dokumentację kadrową, płace i podatki, benefity i ubezpieczenia, compliance, onboarding i formalności prawne." },
    { icon: "/images/icon-wrench-maintenance-services.png", heading: "Codzienną pracą zarządzasz Ty", description: "Ty wyznaczasz pracownikowi bieżące zadania, cele i oceniasz wyniki. My zajmujemy się HR, umowami, płacami i bieżącą obsługą zatrudnienia." },
    { icon: "/images/icon-gears-system-integration.png", heading: "Raportowanie i przejrzyste płace", description: "Co miesiąc otrzymujesz: jedną zbiorczą fakturę, zestawienia płac, informacje HR i dane o satysfakcji pracowników oraz monitoring compliance i umów." },
    { icon: "/images/icon-strategy-market-entry.png", heading: "Skalowanie zespołu w dowolnym momencie", description: "Zatrudnisz 1 lub 50 pracowników – szybko i bez komplikacji prawnych." },
  ],
  targetAudience: {
    heading: "Dla kogo jest EOR?",
    description: "Dla firm, które potrzebują zatrudniać specjalistów w Polsce lub Europie – bez kosztów i ryzyka zakładania spółki.",
    items: [
      { bold: "Firm międzynarodowych wchodzących do Polski / UE –", text: "Gdy potrzebujesz lokalnej obecności bez zakładania oddziału czy spółki zależnej." },
      { bold: "Organizacji zatrudniających zespoły zdalne za granicą –", text: "EOR sprawia, że zatrudnianie transgraniczne jest proste, bezpieczne i zgodne z prawem." },
      { bold: "Firm potrzebujących szybkiego dostępu do polskich specjalistów –", text: "Pomerico pozyskuje ekspertów z obszarów IT, finansów, HR, operacji, danych, obsługi klienta i innych." },
      { bold: "Firm szukających efektywnych kosztowo modeli zatrudnienia –", text: "Koszty pracy w Polsce i sprawność operacyjna przekładają się na mierzalne oszczędności." },
      { bold: "Firm, które chcą uniknąć złożoności kadrowej, płacowej i prawnej –", text: "Zajmujemy się wszystkim – Ty skupiasz się na operacjach i realizacji." },
      { bold: "Firm budujących zespoły do projektów krótko- i długoterminowych –", text: "EOR sprawdza się przy elastycznym rozwoju zespołu, pilotażach, ekspansji regionalnej i zatrudnieniu projektowym." },
      { bold: "Liderów, którzy chcą przewidywalnych kosztów i zerowego ryzyka compliance –", text: "Unikasz ryzyka prawnego, błędnej kwalifikacji umów i obciążeń administracyjnych." },
    ],
  },
  tagline: {
    heading: "Od zatrudnienia do realizacji",
    description: "2,5 tygodnia – średni czas do rozpoczęcia pracy przez pierwszego pracownika. Pomerico zajmuje się umowami, płacami i compliance, a Twoje zespoły skupiają się na wynikach.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Określenie zakresu i umowa", description: "Analizujemy Twoje plany rekrutacyjne, wymogi formalne i oczekiwania. Otrzymujesz przejrzystą ofertę z harmonogramem i pełną strukturą kosztów." },
      { number: "02.", heading: "Rekrutacja lub przeniesienie pracownika", description: "Rekrutujemy dla Ciebie specjalistów (bezpłatnie) lub przenosimy wybranego przez Ciebie kandydata do naszej struktury EOR. Każdy kandydat przechodzi weryfikację behawioralną i kompetencyjną." },
      { number: "03.", heading: "Formalne zatrudnienie", description: "Pomerico zostaje formalnym pracodawcą i przejmuje: umowy o pracę, podatki i ubezpieczenia społeczne, dokumentację, benefity, zgodność z przepisami, onboarding i opiekę HR." },
      { number: "04.", heading: "Start pracy – Ty zarządzasz, my wspieramy", description: "Pracownik pracuje bezpośrednio z Twoim zespołem. My zajmujemy się sprawami HR, płacami, administracją, ewidencją urlopów i compliance." },
      { number: "05.", heading: "Miesięczne raporty i fakturowanie", description: "Otrzymujesz jedną fakturę miesięcznie i pełną dokumentację płacową." },
      { number: "06.", heading: "Bezproblemowe skalowanie zespołu", description: "Dodawaj nowe stanowiska lub rynki, gdy tylko potrzebujesz – bez zakładania kolejnych spółek i budowania własnych zespołów HR, płac czy działu prawnego." },
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
    question: "Czym jest Employer of Record i dlaczego warto wybrać Pomerico?",
    answer: "EOR pozwala zatrudniać pracowników w Polsce bez zakładania lokalnej spółki. Pomerico zostaje formalnym pracodawcą zatrudnionych specjalistów w Polsce lub UE i zajmuje się umowami, płacami, podatkami, benefitami i compliance, a Ty zarządzasz bieżącą pracą. Dzięki ponad 10-letniemu doświadczeniu i 85% klientów, którzy z nami zostają, jesteśmy jednym z najbardziej zaufanych dostawców EOR w Polsce."
  },
  {
    question: "Kiedy EOR jest lepszym wyborem niż założenie spółki?",
    answer: "<p>EOR (Employer of Record) to idealne rozwiązanie, gdy chcesz szybko zatrudnić pracowników w nowym kraju bez zakładania podmiotu prawnego. Sprawdza się, gdy:</p><ul><li>chcesz przetestować nowy rynek, zanim zdecydujesz się na własną spółkę,</li><li>chcesz ograniczyć obciążenia administracyjne, prawne i związane z compliance,</li><li>chcesz szybko wdrożyć pracowników przy pełnej zgodności z lokalnym prawem pracy,</li><li>Twój biznes wymaga elastyczności przy krótkich projektach lub zespołach zdalnych.</li></ul><p>EOR pozwala Ci skupić się na operacjach i rozwoju, a dostawca zajmuje się umowami o pracę, płacami, podatkami i zgodnością z przepisami.</p>"
  },
  {
    question: "Jakich efektów biznesowych mogę oczekiwać od EOR?",
    answer: "Klienci oszczędzają czas, ograniczają ryzyko i zyskują natychmiastowy dostęp do polskiego rynku. Przykładowo pomogliśmy klientom obsadzić kluczowe stanowiska menedżerskie w zaledwie 2,5 tygodnia – po miesiącach nieudanych prób wewnętrznych. Płace, compliance, a nawet administracja biura – masz gotowy polski oddział „pod klucz”. Niektórzy klienci w ten sposób zwiększyli zespół do ponad 25 osób w ciągu 3 miesięcy."
  },
  {
    question: "Dlaczego EOR to najlepsza opcja dla firm zagranicznych?",
    answer: "Bo zapewnia natychmiastową obecność prawną, pełną zgodność z przepisami i zero obciążeń administracyjnych. Możesz szybko przetestować i rozwinąć biznes w Polsce ze sprawdzonym partnerem, który zbudował setki zespołów dla globalnych organizacji."
  },
  {
    question: "Czy EOR jest bezpieczny prawnie i zgodny z przepisami UE i polskimi?",
    answer: "Tak. Pomerico zapewnia pełną zgodność z polskim prawem pracy, regulacjami UE, RODO, wymogami podatkowymi i standardami branżowymi, zdejmując z klienta odpowiedzialność pracodawcy."
  },
  {
    question: "Czy potrzebuję spółki w Polsce, aby zatrudniać przez EOR?",
    answer: "Nie – właśnie ten problem rozwiązuje EOR. Pomerico jest zarejestrowanym pracodawcą, dzięki czemu działasz lokalnie bez zakładania oddziału czy spółki zależnej."
  },
  {
    question: "Czy Pomerico może bezpośrednio rekrutować dla nas pracowników?",
    answer: "Tak. Rekrutacja jest wliczona w usługę i bezpłatna dla klientów EOR – korzystamy z direct search, profilowania behawioralnego i zaawansowanych narzędzi sourcingowych, aby znaleźć specjalistów niedostępnych na portalach z ogłoszeniami."
  },
  {
    question: "Czy EOR obsługuje pracę zdalną, hybrydową i stacjonarną?",
    answer: "Obsługujemy wszystkie modele – w zespołach międzynarodowych najczęściej zatrudnia się w modelu przede wszystkim zdalnym."
  },
  {
    question: "Za co odpowiada Pomerico jako formalny pracodawca?",
    answer: "<p>Zajmujemy się:</p><ul><li>umowami o pracę,</li><li>płacami i podatkami,</li><li>benefitami, ubezpieczeniami i ewidencją urlopów,</li><li>wsparciem HR i zgodnością z prawem,</li><li>dokumentacją onboardingową,</li><li>bieżącą opieką nad pracownikami.</li></ul><p><strong>Ty zarządzasz wyłącznie codziennymi zadaniami i wynikami.</strong></p>"
  },
  {
    question: "Jak EOR wpływa na naszą sprawozdawczość finansową?",
    answer: "<p>Korzystanie z EOR co do zasady wpływa na sprawozdawczość finansową, ponieważ pracownicy są formalnie zatrudnieni przez dostawcę EOR. Oznacza to, że:</p><ul><li>płace, benefity i koszty zatrudnienia są rozliczane przez EOR,</li><li>firma może – zależnie od standardów rachunkowości – ujmować te koszty jako koszty usług, a nie bezpośrednie koszty zatrudnienia,</li><li>obowiązki takie jak składki na ubezpieczenia społeczne i podatki realizuje dostawca EOR, co upraszcza compliance i raportowanie,</li><li>firma zachowuje kontrolę nad budżetami, wskaźnikami efektywności i planowaniem zatrudnienia, nie będąc formalnym pracodawcą.</li></ul><p>EOR zapewnia zgodność z przepisami, a wewnętrzna sprawozdawczość pozostaje przejrzysta i zgodna z regulacjami finansowymi.</p>"
  },
];
