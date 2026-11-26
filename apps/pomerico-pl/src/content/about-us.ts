export const aboutUsHero = {
  heading: "Twój partner w outsourcingu BPO i finansów w Gdańsku",
  description: `<p>Od 2015 roku Pomerico Group wspiera dynamiczny rozwój firm – przede wszystkim <b>klientów międzynarodowych</b> – oferując kompleksowy outsourcing w Polsce, strategiczne <b>zarządzanie zasobami ludzkimi</b> oraz eksperckie <b>doradztwo biznesowe</b>.</p>
<p>Dzięki wieloletniemu doświadczeniu i dobremu zrozumieniu potrzeb globalnych organizacji przejmujemy kluczowe procesy biznesowe, aby nasi klienci mogli skupić się na realizacji celów strategicznych i trwałym rozwoju.</p>`,
  teamImage: "/images/pomerico-team-about-hero.webp",
};

// ── Zespół zarządzający ──────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export const managementTeam: TeamMember[] = [
  {
    name: "Sebastian Kunc",
    role: "General Manager",
    bio: "Prezes Zarządu, przedsiębiorca, manager i HR Business Partner z ponad 13-letnim doświadczeniem. Absolwent zarządzania na Uniwersytecie Gdańskim. Specjalizuje się w projektowaniu i wdrażaniu programów rekrutacyjnych i operacyjnych, łącząc doświadczenie trenera sprzedaży z kompetencjami doradztwa strategicznego. Współpracował z klientami z sektora finansowego, IT i technicznego. Jako mentor i trener wspiera zarówno managerów, jak i zespoły w rozwijaniu przywództwa i doskonałości operacyjnej.",
    image: "/images/sebastian-kunc-general-manager.webp",
    linkedin: "https://www.linkedin.com/in/sebastian-kunc/",
  },
  {
    name: "Rafał Tylkowski",
    role: "HR Project Manager",
    bio: "Ekspert HR z ponad 10-letnim doświadczeniem w zarządzaniu procesami rekrutacyjnymi, doradztwie zawodowym i HR Business Partneringu. Specjalizuje się w budowaniu kompletnych zespołów dla sektora technicznego i finansowego, a także w direct search i executive search – również na stanowiska seniorskie i sprzedażowe. Odpowiadał za zarządzanie całym procesem rekrutacji i zbudowanie zespołu dla pierwszego zautomatyzowanego magazynu H&M w Polsce, a także prowadził rekrutacje na wysokie stanowiska w całej Europie.",
    image: "/images/rafal-tylkowski-hr-project-manager.webp",
    linkedin: "https://www.linkedin.com/in/rafa%C5%82-tylkowski-2b32b4a4/",
  },
  {
    name: "Wiktoria Wierzbicka",
    role: "Project & Operations Manager, psycholog",
    bio: "Doświadczona konsultantka i HR Business Partner, specjalizująca się w zarządzaniu projektami HR dla klientów międzynarodowych. Jako psycholog przeprowadza i analizuje oceny behawioralne, prowadzi procesy rekrutacyjne oraz opracowuje skuteczne strategie zarządzania zespołami i motywowania pracowników. Szczególnie koncentruje się na rekrutacji międzynarodowej w sektorze finansowym i IT, a także współzarządza operacyjną realizacją naszych projektów, w tym zespołem konsultantów.",
    image: "/images/wiktoria-wierzbicka-operations-manager.webp",
    linkedin: "https://www.linkedin.com/in/wiktoriawierzbicka/",
  },
  {
    name: "Joanna Włodarczyk",
    role: "Accounts Payable Manager",
    bio: "Doświadczona specjalistka ds. finansów z ponad dziewięcioletnim stażem w międzynarodowych centrach usług wspólnych (SSC), w obszarach Accounts Payable (rozrachunki z dostawcami) i Record-to-Report. Brała udział w transferach procesów, ich harmonizacji oraz tworzeniu nowych zespołów. W swojej roli dba o silne relacje w zespole Accounts Payable, zapewnia eksperckie wsparcie współpracownikom i wprowadza ich w nowe rozwiązania.",
    image: "/images/joanna-wlodarczyk-expert.webp",
    linkedin: "https://www.linkedin.com/in/joanna-w%C5%82odarczyk-4b257b164",
  },
  {
    name: "Igor Nalepka",
    role: "Tech Lead",
    bio: "Tech Lead i FullStack Developer z doświadczeniem w projektowaniu, tworzeniu i utrzymaniu nowoczesnych systemów oprogramowania. Specjalizuje się w architekturze oprogramowania, rozwoju produktów IT i strategii technologicznej, łącząc praktyczną wiedzę inżynierską z umiejętnością realizacji projektów. Odpowiada za techniczny rozwój produktów, jakość oprogramowania oraz koordynację prac frontendowych i backendowych. Ściśle współpracuje z Project Managerami i interesariuszami biznesowymi, przekładając wymagania na skalowalne i niezawodne rozwiązania – zwłaszcza w obszarze nowoczesnych platform CRM i sprzedażowych. Aktywnie wykorzystuje narzędzia AI w procesie wytwarzania oprogramowania, aby zwiększać efektywność i jakość dostarczanych rozwiązań.",
    image: "/images/igor-nalepka.webp",
  },
  {
    name: "Olga Zabieglik",
    role: "Legal Partner",
    bio: "Ekspertka prawna i radca prawny z ponad 25-letnim doświadczeniem w kompleksowym doradztwie prawnym dla przedsiębiorstw. Specjalizuje się w prawie handlowym, korporacyjnym i konsumenckim, ze szczególnym naciskiem na wspieranie firm w bieżącej działalności, negocjacjach umów i zarządzaniu ryzykiem prawnym. Ma bogate doświadczenie w pozyskiwaniu funduszy unijnych, zarządzaniu projektami oraz doradztwie w krajowych i międzynarodowych sprawach prawnych. Absolwentka Uniwersytetu Gdańskiego, ukończyła również polsko-francuskie studia podyplomowe Mastère Spécialisé z zarządzania finansami, łącząc wiedzę prawniczą z dobrym rozumieniem biznesu i finansów.",
    image: "/images/olga-zabieglik.webp",
  },
];

// ── Baner CTA ────────────────────────────────────────────

export const aboutCtaBanner = {
  heading:
    "Od rekrutacji po realizację – skaluj działalność w Polsce dzięki eksperckim zespołom, uporządkowanym procesom i gwarantowanym wynikom.",
  description:
    "92% skuteczności projektów, rotacja na poziomie 0–7% i kompletne zespoły wdrożone w mniej niż 3 tygodnie – przy przejrzystej, stałej miesięcznej opłacie i bez ukrytych kosztów.",
};

// ── Opinie klientów (strona O nas) ───────────────────────

export const aboutTestimonials = [
  {
    quote:
      "Pomerico to nie tylko ekspert, ale też rzetelny partner, który rozumie wyzwania biznesowe.",
    author: "Julia Kasparek-Guzik",
    role: "Dyrektor operacyjna",
    company: "Datumo",
  },
  {
    quote:
      "Jesteśmy pod wrażeniem wysokiej jakości usług i doskonałej komunikacji.",
    author: "Mikołaj Piec",
    role: "Właściciel",
    company: "Mera Automatic",
  },
  {
    quote:
      "Powierzając im projekty, czuję się spokojny, a to bardzo ważne w świecie pełnym wyzwań i niepewności.",
    author: "Michał Karpowicz",
    role: "COO",
    company: "Babord",
  },
  {
    quote:
      "Rekrutacja przebiegła szybko, a jej efekty były więcej niż zadowalające.",
    author: "Michał Nowak",
    role: "Regional Service Manager",
    company: "Vanderlande",
  },
];

// ── Czym się zajmujemy ───────────────────────────────────

export const aboutUsWhatWeDo = {
  blocks: [
    {
      description: `<p><b>Nasze usługi obejmują pełne spektrum</b> procesów związanych z budowaniem zespołów i outsourcingiem w obszarze HR, administracji, finansów i IT – od rekrutacji i zatrudnienia, przez optymalizację i zarządzanie, po długofalowe utrzymanie talentów i realizację biznesowych <b>KPI</b>.</p>
<p>Niezależnie od tego, czy potrzebujesz kilku specjalistów, czy całego działu liczącego kilkudziesięciu ekspertów, <b>tworzymy zespoły szyte na miarę, które płynnie wpisują się</b> w kulturę Twojej organizacji i przynoszą mierzalne efekty.</p>
<p><strong>Wychodzimy poza tradycyjny outsourcing:</strong> łącząc zaawansowane strategie rekrutacyjne, indywidualnie projektowany onboarding i stałe zarządzanie wynikami, dbamy o to, by Twoje zespoły nie tylko realizowały cele operacyjne, ale też rozwijały się w Twojej firmie. Nasze podejście ogranicza rotację, optymalizuje koszty i wzmacnia zaangażowanie pracowników – zyskujesz stabilne, efektywne zespoły gotowe napędzać rozwój Twojego biznesu.</p>
<p>Od lokalnych startupów po międzynarodowe korporacje – Pomerico dopasowuje rozwiązania do Twoich potrzeb, oferując elastyczne modele współpracy, takie jak body leasing, Employer of Record (EOR) czy pełny outsourcing procesów. Z Pomerico każdy członek zespołu realnie przyczynia się do realizacji Twoich celów, zapewniając spójność, efektywność i mierzalny wpływ we wszystkich obszarach Twojej działalności.</p>`,
      image: "/images/pomerico-management-sebastian-kunc-rafal-tylkowski-studio.webp",
      imageAlt:
        "Rafał Tylkowski i Sebastian Kunc z zarządu Pomerico siedzący na stołkach w studiu fotograficznym",
    },
  ],
};
