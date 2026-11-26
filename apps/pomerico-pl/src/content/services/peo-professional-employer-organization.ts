import type { ServicePageData, FAQItem } from "@pomerico/content";
import type { QuickComparisonProps } from "@pomerico/ui/QuickComparison";
import type { ComparisonTableProps } from "@pomerico/ui/ComparisonTable";
import { plComparisonNotSureLabel } from "@/content/ui-labels";

export const peoQuickComparison: QuickComparisonProps = {
  eyebrow: "Poznaj różnicę",
  title: "PEO czy EOR – w 30 sekund",
  columns: [
    {
      label: "PEO – Professional Employer Organization",
      accent: "red",
      points: [
        {
          icon: "",
          bold: "Model współzatrudnienia.",
          text: "Pomerico i Twoja firma dzielą rolę pracodawcy. Zachowujesz większą bezpośrednią kontrolę nad politykami i procesami HR.",
        },
        {
          icon: "",
          bold: "Najlepiej sprawdza się, gdy masz",
          text: "– lub planujesz założyć – własną spółkę w Polsce. PEO uzupełnia Twoją strukturę, a nie ją zastępuje.",
        },
        {
          icon: "",
          bold: "Więcej możliwości dopasowania.",
          text: "Ty kształtujesz polityki HR, benefity i procesy. Pomerico je administruje i dba o zgodność z przepisami.",
        },
      ],
    },
    {
      label: "EOR – Employer of Record",
      accent: "blue",
      points: [
        {
          icon: "",
          bold: "Model pełnego pracodawcy.",
          text: "Pomerico jest jedynym formalnym pracodawcą. Twoja firma nie ma w Polsce żadnych obowiązków pracodawcy.",
        },
        {
          icon: "",
          bold: "Spółka nie jest potrzebna – nigdy.",
          text: "Zatrudniasz w Polsce lub w całej UE bez rejestrowania firmy, zakładania rachunku bankowego i wpisu do KRS.",
        },
        {
          icon: "",
          bold: "Zero obowiązków compliance.",
          text: "Wszystkie obowiązki prawne, płacowe i podatkowe spoczywają wyłącznie na Pomerico. Ty skupiasz się na pracy.",
        },
      ],
    },
  ],
  footerText: "Nadal nie wiesz, co pasuje do Twojej sytuacji?",
  footerLinkLabel: "Zobacz pełne porównanie",
  footerLinkHref: "#full-comparison",
};

export const peoComparisonTable: ComparisonTableProps = {
  title: "PEO czy EOR – wszystkie szczegóły",
  subtitle: "Pełne porównanie",
  columns: [
    {
      name: "PEO",
      tagline: "Professional Employer Organization – model współzatrudnienia",
      highlight: "good",
    },
    {
      name: "EOR",
      tagline: "Employer of Record – model pełnego pracodawcy",
    },
  ],
  rows: [
    // Kwestie prawne i struktura
    { category: "Kwestie prawne i struktura", label: "", values: [] },
    {
      label: "Formalny pracodawca",
      values: [
        "Wspólnie – Pomerico i Twoja firma",
        { text: "✓ Wyłącznie Pomerico – nie masz w Polsce statusu pracodawcy", type: "good" },
      ],
    },
    {
      label: "Wymagana własna spółka w Polsce",
      values: [
        "Zalecana – model najlepiej działa obok Twojej spółki",
        { text: "✓ Niewymagana – działasz w pełni bez niej", type: "good" },
      ],
    },
    {
      label: "Umowy o pracę",
      values: [
        "Zawierane w ramach umowy o współzatrudnieniu – obowiązują Twoje polityki",
        "Zawierane wyłącznie przez Pomerico – standardowe umowy zgodne z przepisami",
      ],
    },
    {
      label: "Odpowiedzialność prawna",
      values: [
        "Dzielona między Twoją firmę a Pomerico",
        { text: "W całości po stronie Pomerico", type: "good" },
      ],
    },
    // Bieżące operacje
    { category: "Bieżące operacje", label: "", values: [] },
    {
      label: "Płace i ZUS",
      values: [
        { text: "✓ W całości obsługiwane przez Pomerico", type: "good" },
        { text: "✓ W całości obsługiwane przez Pomerico", type: "good" },
      ],
    },
    {
      label: "Kontrola nad polityką HR",
      values: [
        { text: "✓ Ty definiujesz polityki – Pomerico je administruje", type: "good" },
        "Standardowe ramy Pomerico – ograniczone możliwości dopasowania",
      ],
    },
    {
      label: "Benefity i dodatki",
      values: [
        { text: "W pełni do dopasowania – Ty projektujesz pakiet", type: "good" },
        "Pakiet standardowy – dopasowanie możliwe na życzenie",
      ],
    },
    {
      label: "RODO i compliance",
      values: [
        { text: "✓ Po stronie Pomerico", type: "good" },
        { text: "✓ Po stronie Pomerico", type: "good" },
      ],
    },
    // Kwestie handlowe i finansowe
    { category: "Kwestie handlowe i finansowe", label: "", values: [] },
    {
      label: "Koszt uruchomienia",
      values: [
        { text: "0 € dodatkowych opłat – bez kosztów na start", type: "good" },
        { text: "0 € dodatkowych opłat – bez kosztów na start", type: "good" },
      ],
    },
    {
      label: "Czas do pierwszego zatrudnienia",
      values: [
        { text: "1–3 tygodnie", type: "good" },
        { text: "1–3 tygodnie", type: "good" },
      ],
    },
    {
      label: "Rozliczenie miesięczne",
      values: [
        "Jedna faktura – wszystko w cenie",
        "Jedna faktura – wszystko w cenie",
      ],
    },
    {
      label: "Koszt a własna spółka",
      values: [
        "Niższe koszty administracji – bez wewnętrznego zespołu HR",
        { text: "Brak jakichkolwiek kosztów spółki – maksymalne oszczędności", type: "good" },
      ],
    },
    // Kiedy wybrać
    { category: "Kiedy wybrać", label: "", values: [] },
    {
      label: "Najlepsze dla",
      values: [
        "Firm z polską spółką (lub planujących ją założyć), które chcą zlecić administrację HR, zachowując kontrolę nad kulturą i politykami",
        "Firm wchodzących do Polski bez spółki – lub chcących uniknąć jakichkolwiek obowiązków pracodawcy w UE",
      ],
    },
    {
      label: "Optymalna wielkość zespołu",
      values: [
        "10–500+ pracowników",
        { text: "1–100 pracowników – dowolna skala", type: "good" },
      ],
    },
    {
      label: "Elastyczność / wyjście",
      values: [
        "Uporządkowany offboarding – zgodny z obowiązkami Twojej spółki",
        { text: "30‑dniowe wypowiedzenie – bez spółki do likwidacji", type: "good" },
      ],
    },
    {
      label: "Droga do własnej spółki",
      values: [
        { text: "✓ Już na tej drodze – PEO wspiera przejście", type: "good" },
        { text: "✓ Płynne przekazanie, gdy zdecydujesz się założyć spółkę", type: "good" },
      ],
    },
  ],
  ctaLabel: "Porozmawiaj z nami – bezpłatna konsultacja →",
  ctaHref: "/contact",
  ctaSecondaryLabel: "Dowiedz się więcej o EOR →",
  ctaSecondaryHref: "/services/eor-employer-of-record",
  footnote:
    "Nadal masz wątpliwości? W praktyce większość firm, które dopiero wchodzą do Polski, zaczyna od EOR ze względu na szybkość i prostotę, a po założeniu własnej spółki przechodzi na PEO. Pomerico wspiera oba etapy – i przejście między nimi.",
  notSureLabel: plComparisonNotSureLabel,
};

export const data: ServicePageData = {
  slug: "peo-professional-employer-organization",
  title: "PEO – Professional Employer Organization",
  metaDescription:
    "PEO w Polsce: zatrudniaj legalnie i zachowaj kontrolę nad pracą. Pomerico przejmuje administrację HR, płace i compliance. Skaluj zespół bezpiecznie.",
  hero: {
    heading: "PEO – Professional Employer Organization w Polsce",
    description:
      "<p><b>Zatrudniaj globalnie. Legalnie. Z mniejszym ryzykiem. Bez komplikacji.</b></p><p>Jako Twój partner PEO Pomerico przejmuje wszystkie obowiązki związane z zatrudnieniem – płace, administrację kadrową, podatki, compliance, onboarding i dokumentację pracowniczą. <b>Ty zarządzasz pracą i celami. My zajmujemy się całą resztą.</b></p><p>To najszybszy i najbezpieczniejszy sposób zatrudniania pracowników w Polsce lub zdalnie na innych rynkach – <b>bez zakładania spółki, lokalnej biurokracji i ryzyka niezgodności z przepisami.</b></p>",
    iconList: [
      { bold: "Bezproblemowe zatrudnianie globalne –", text: "Pomerico zajmuje się płacami, administracją HR, podatkami, compliance i onboardingiem, a Ty skupiasz się na zarządzaniu pracą i celami." },
      { bold: "Szybkie budowanie zespołu –", text: "Zatrudniaj pracowników w Polsce lub zdalnie w całej Europie – szybko i bez zakładania lokalnej spółki." },
      { bold: "Niezawodne compliance i operacje –", text: "Wszystkie obowiązki związane z zatrudnieniem, płacami i regulacjami realizujemy profesjonalnie, zapewniając płynną i wolną od ryzyka współpracę." },
    ],
    trustImage: "/images/pomerico-trusted-partner-badges.svg",
  },
  benefits: [
    { icon: "/images/icon-gears-system-integration.png", heading: "Pełna zgodność prawna i podatkowa", description: "Zatrudniamy pracowników w Twoim imieniu i bierzemy pełną odpowiedzialność za umowy o pracę, płace, podatki, benefity, zwolnienia lekarskie, urlopy, onboarding i ochronę danych. Eliminuje to ryzyko prawne i problemy z compliance." },
    { icon: "/images/icon-effectiveness-employee-growth.png", heading: "Zero administracji", description: "Zajmujemy się wszystkim, co dotyczy zatrudnienia – płacami, umowami, rekrutacją i benefitami – a Ty w pełni koncentrujesz się na rozwoju biznesu." },
    { icon: "/images/icon-folders-document-management.png", heading: "Zatrudnianie bez zakładania lokalnej spółki", description: "Wejdź na rynek bez kosztów i złożoności związanych z zakładaniem spółki. Skaluj zespół w tygodnie – nie miesiące." },
    { icon: "/images/icon-person-growth-performance.png", heading: "Dostęp do talentów niedostępnych na otwartym rynku", description: "Zaczynaliśmy jako agencja rekrutacyjna – dlatego znajdujemy specjalistów, których nie pokaże Ci żaden portal z ogłoszeniami: direct search, kampanie sourcingowe, assessmenty, testy behawioralne." },
    { icon: "/images/icon-checklist-task-management.png", heading: "Kompleksowe usługi HR", description: "Płace, umowy, benefity, wsparcie prawne, onboarding, integracja – wszystko po stronie Pomerico. Otrzymujesz jedną fakturę miesięcznie i pełną przejrzystość." },
  ],
  targetAudience: {
    heading: "Dla kogo jest nasze PEO?",
    description: "Idealny model dla globalnych firm, które chcą zatrudniać szybko, bezpiecznie i efektywnie kosztowo.",
    items: [
      { bold: "Chcesz zatrudniać w Polsce, ale nie jesteś gotowy na założenie spółki.", text: "Wchodzisz do Polski lub Europy Środkowej i szybko potrzebujesz lokalnych pracowników. Założenie sp. z o.o. trwa 2–4 miesiące i wiąże się ze stałymi obowiązkami prawnymi, podatkowymi i księgowymi, na które nie jesteś jeszcze gotowy. W modelu PEO Pomerico zostaje formalnym pracodawcą – Ty zachowujesz pełną kontrolę nad pracą, celami i bieżącym zarządzaniem. Pierwsza osoba gotowa do pracy w 1–3 tygodnie." },
      { bold: "Szybko rośniesz, a administracja HR Cię spowalnia.", text: "Zatrudniasz 5, 10, 20 osób, a Twój wewnętrzny zespół HR – albo Ty jako CEO – tonie w umowach, terminach płacowych, deklaracjach ZUS i dokumentach onboardingowych. PEO zdejmuje z Ciebie całą funkcję zatrudnienia: umowy, płace, benefity, compliance i dokumentację. Otrzymujesz jedną fakturę miesięcznie i zero administracji. Twój zespół skupia się na realizacji, a nie na biurokracji kadrowej." },
      { bold: "Potrzebujesz wykwalifikowanych specjalistów o 40–60% taniej niż na rynku macierzystym.", text: "Twój zespół w Danii, Niemczech czy Holandii jest drogi i trudny do skalowania. Polska oferuje ten sam poziom kompetencji – inżynierów, specjalistów finansowych, menedżerów operacyjnych – przy znacznie niższym całkowitym koszcie zatrudnienia. PEO daje Ci bezpośredni dostęp do polskich specjalistów bez kosztów lokalnej spółki, zespołu HR i infrastruktury compliance. My zajmujemy się wszystkim. Ty zyskujesz ludzi i oszczędności." },
      { bold: "Masz polską spółkę, ale administracja HR wciąż pochłania Twój czas.", text: "Działasz już w Polsce, ale płace, umowy, deklaracje ZUS i compliance obsługujesz wewnętrznie, a koszty tego rozwiązania są nieuzasadnione. PEO pozwala przekazać funkcję zatrudnienia Pomerico, nawet jeśli masz własną spółkę – zachowujesz strukturę prawną, pozbywasz się obciążeń administracyjnych." },
    ],
  },
  tagline: {
    heading: "Zachowaj kontrolę nad zespołem. Compliance zostaw nam.",
    description: "Pomerico zajmuje się płacami, compliance i administracją HR, umożliwiając zatrudnianie pracowników w Polsce i całej Europie bez zakładania lokalnej spółki.",
  },
  process: {
    heading: "Proces współpracy",
    steps: [
      { number: "01.", heading: "Rozpoznanie i analiza potrzeb", description: "Zaczynamy od poznania Twojej organizacji. Analizujemy obecne procesy, możliwości zespołu, koszty i wyzwania operacyjne. Na tej podstawie wskazujemy obszary, w których outsourcing przyniesie najwyższy zwrot z inwestycji." },
      { number: "02.", heading: "Rekrutacja lub przeniesienie pracowników", description: "Ty wybierasz model. Rekrutacja – wyszukujemy i weryfikujemy kandydatów (bezpłatnie dla klientów PEO/EOR). Przeniesienie pracowników – Twoi obecni pracownicy formalnie przechodzą do Pomerico jako pracodawcy. Gwarantujemy co najmniej dwóch dobrze dopasowanych kandydatów na każde stanowisko (jeśli rekrutacja jest w zakresie)." },
      { number: "03.", heading: "Formalności prawne i dokumentacja", description: "Pomerico przygotowuje umowy o pracę, parametry płacowe, klauzule poufności, ścieżki onboardingu i dokumentację compliance. Omijasz całą lokalną biurokrację – w pełni się nią zajmujemy." },
      { number: "04.", heading: "Onboarding i rozpoczęcie zatrudnienia", description: "Zajmujemy się zgłoszeniem do systemu płacowego, uruchomieniem benefitów, wdrożeniem, administracją HR i lokalnym compliance. Nowy pracownik przechodzi płynny onboarding ze wsparciem naszego zespołu HR." },
      { number: "05.", heading: "Codzienną pracą zarządzasz Ty", description: "Ty przydzielasz zadania, cele i obowiązki. My zarządzamy zatrudnieniem, motywacją, opieką HR, monitorowaniem dopasowania kulturowego, zwolnieniami lekarskimi, dokumentacją i bieżącym wsparciem." },
      { number: "06.", heading: "Stałe wsparcie i skalowanie", description: "Monitorujemy motywację, zaangażowanie i efektywność – utrzymując bardzo niską rotację. Skalowanie od 1 do 50 pracowników zajmuje kilka tygodni i jest możliwe w dowolnym momencie." },
    ],
  },
  testimonials: [
    {
      quote: "Pracowałem jako konsultant i mam o tej firmie wiele dobrego do powiedzenia. Podejście do pracowników było bardzo profesjonalne, a atmosfera w firmie – przyjazna i bardzo dobra. Duży nacisk kładziony jest na rozwój zawodowy, ale też osobisty. Menedżer Sebastian zawsze był pozytywnie nastawiony i zawsze znajdował czas, by pomóc albo porozmawiać o tym, co możemy robić lepiej i efektywniej.",
      author: "Olaf Langowski",
      role: "Konsultant",
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
    question: "Jak działa PEO w Pomerico?",
    answer: "<p>W modelu PEO pozostajesz formalnym pracodawcą, a my zajmujemy się HR, płacami, benefitami i compliance. To idealne rozwiązanie, jeśli chcesz odciążyć się administracyjnie, zachowując pełną kontrolę menedżerską.</p>"
  },
  {
    question: "Jakie korzyści daje PEO w porównaniu z budową własnego działu HR?",
    answer: "<p>Zyskujesz dostęp do sprawdzonych systemów HR, dobrych praktyk i wiedzy z zakresu compliance – bez czasu i kosztów budowania wewnętrznych struktur.</p>"
  },
  {
    question: "Dlaczego Pomerico to zaufany partner PEO?",
    answer: "<p>Bo nie tylko zarządzamy procesami – działamy jak część Twojego zespołu HR, wnosząc doświadczenie z ponad 2 500 zrealizowanych projektów i dziesięcioletnią ekspertyzę w wielu branżach.</p>"
  },
];
