import type { CaseStudyCard } from "@pomerico/content";

// Wszystkie case studies (kolejność jak na pomerico.com). Strona główna pokazuje pierwsze 4.
// Strony szczegółowe: src/content/case-study-pages/*.ts

export const caseStudiesListingHero = {
  heading: "Case studies – outsourcing i rekrutacja w Polsce",
  description:
    "Zobacz, jak Pomerico pomaga firmom z całej Europy budować wydajne zespoły, wchodzić na nowe rynki i zmieniać sposób działania HR. Każde case study pokazuje nasze praktyczne podejście i mierzalne efekty.",
  iconList: [] as { bold?: string; text: string }[],
  trustImage: "/images/pomerico-trusted-partner-badges.svg",
};

export const allCaseStudyCards: CaseStudyCard[] = [
  {
    slug: "hedepys-seamless-launch-in-poland-with-pomerico",
    title: "Wejście na rynek bez komplikacji: sprawny start Hedepy w Polsce z Pomerico",
    industry: "Opieka zdrowotna / terapia online",
    summary:
      "Czeska platforma terapii online Hedepy planowała wejście na rynek polski. Pomerico zapewniło kompleksowe wsparcie w zakresie EOR, prawa, podatków i operacji.",
    image: "/images/hedepy-case-study-logo.jpg",
  },
  {
    slug: "comprehensive-hr-transformation-driving-growth",
    title: "Transformacja HR w Datumo: kompleksowy projekt strategiczny",
    industry: "Technologie",
    industries: ["information-technology"],
    summary:
      "Pomerico przeprowadziło dla Datumo ponad 17-etapową transformację HR obejmującą systemy rekrutacji, employer branding, projektowanie struktury organizacyjnej i wskaźniki efektywności.",
    image: "/images/datumo-case-study-logo.jpg",
  },
  {
    slug: "recruiting-a-strategic-country-sales-manager-for-market-expansion",
    title: "Rekrutacja strategicznego lidera sprzedaży na potrzeby ekspansji rynkowej",
    industry: "Intralogistyka / automatyzacja magazynów",
    industries: ["intralogistics"],
    summary:
      "Kardex powierzył Pomerico strategicznie kluczowe zadanie – rekrutację Country Sales Managera w ramach ustrukturyzowanego executive search.",
    image: "/images/kardex-logo.png",
  },
  {
    slug: "60-hires-1600-applications-40000-people-reached",
    title: "60 zatrudnionych, 1600 aplikacji, 40 000 osób w zasięgu",
    industry: "Przetwórstwo spożywcze / produkcja",
    industries: ["manufacturing-industry"],
    summary:
      "Babord VAP powierzył Pomerico rekrutację 60 pracowników na nową linię produkcyjną – dzięki zaangażowaniu lokalnej społeczności i kreatywnemu sourcingowi w terenie.",
    image: "/images/babord-case-study-logo.png",
  },
  {
    slug: "how-we-secured-a-quality-control-expert-in-just-weeks",
    title: "Jak w kilka tygodni pozyskaliśmy eksperta ds. kontroli jakości",
    industry: "Budownictwo przemysłowe",
    industries: ["manufacturing-industry"],
    summary:
      "Po tym, jak cztery agencje odmówiły realizacji zlecenia, Pomerico w ciągu kilku tygodni zrekrutowało Quality Control Managera dla Joong Won Poland.",
    image: "/images/joong-won-poland-logo.png",
  },
  {
    slug: "building-a-multidisciplinary-maintenance-team-for-automated-warehousing",
    title: "Budowa interdyscyplinarnego zespołu utrzymania ruchu dla zautomatyzowanego magazynu",
    industry: "Intralogistyka / magazynowanie",
    industries: ["intralogistics"],
    summary:
      "SSI Schaefer powierzył Pomerico zbudowanie od zera 35-osobowego zespołu utrzymania ruchu w zaledwie 3 miesiące – o połowę szybciej, niż planowano.",
    image: "/images/ssi-schaefer-case-study-logo.png",
  },
  {
    slug: "how-pomerico-ensured-a-successful-succession-and-hired-the-ideal-service-network-leader",
    title:
      "Jak Pomerico zapewniło udaną sukcesję i zatrudniło idealnego lidera sieci serwisowej",
    industry: "Chłodnictwo transportowe / motoryzacja",
    industries: ["manufacturing-industry"],
    summary:
      "Pomerico zrekrutowało Service Network Managera dla Apex Thermo King w wieloetapowym procesie executive search, umożliwiając płynną sukcesję na stanowisko Service Directora.",
    image: "/images/thermo-king-case-study-logo.png",
  },
];

export const homepageCaseStudyCards: CaseStudyCard[] = allCaseStudyCards.slice(0, 4);
