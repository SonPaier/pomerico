import type {
  BlogPostTemplateLabels,
  BreadcrumbsProps,
  CaseStudyGridProps,
  CaseStudyLayoutLabels,
  CTAFormLabels,
  CTASectionLabels,
  IndustryPageTemplateLabels,
  PageTemplateCommonLabels,
  ServiceComparisonCell,
  ServiceComparisonColumn,
  ServiceComparisonLabels,
  ServiceComparisonRow,
  ServicePageTemplateLabels,
  TestimonialCardLabels,
} from "@pomerico/ui";

// Polskie teksty wbudowane we wspólne komponenty z @pomerico/ui.
// Każdy komponent ma domyślne teksty angielskie (pomerico.com); na pomerico.pl
// przekazujemy poniższe obiekty, np.:
//   <ServicePageTemplate … labels={plServicePageLabels} siteUrl={plSiteUrl} />
//   <CaseStudyLayout … labels={plCaseStudyLayoutLabels} siteUrl={plSiteUrl} />
//   <BlogPostTemplate … labels={plBlogPostLabels} locale={plLocale} siteUrl={plSiteUrl} />
//   <CTASection submitAction={…} labels={plCtaSectionLabels} />
//   <CTAForm submitAction={…} labels={plCtaFormLabels} />
//   <Breadcrumbs items={…} siteUrl={plSiteUrl} ariaLabel={plBreadcrumbAria} />
//   <HeroSection data={…} trustImageAlt={plHeroTrustImageAlt} />
//   <TrustBadges alt={plTrustBadgesAlt} />
//   <ComparisonTable … notSureLabel={plComparisonNotSureLabel} />
//   <ServiceComparisonTable labels={plServiceComparisonLabels} />
//   <ImageCarousel images={…} ariaLabels={plImageCarouselAriaLabels} />
//   <TestimonialCarousel … {...plTestimonialCarouselProps} />
//   <ServiceCardGrid … linkLabel={plCardLinkLabel} />
//   <CaseStudyGrid cards={…} {...plCaseStudyGridLabels} />

export const plLocale = "pl-PL";
export const plSiteUrl = "https://pomerico.pl";

// ── Drobne, pojedyncze teksty ────────────────────────────

export const plBreadcrumbHome = "Strona główna";
export const plBreadcrumbAria: NonNullable<BreadcrumbsProps["ariaLabel"]> = "Ścieżka nawigacji";
export const plHeroTrustImageAlt = "Zaufany partner od 2015 roku";
export const plTrustBadgesAlt = "Zaufany partner od 2015 roku – stabilność, partner biznesowy";
export const plComparisonNotSureLabel = "Nie wiesz, co wybrać?";
export const plCardLinkLabel = "Dowiedz się więcej";

export const plImageCarouselAriaLabels = {
  previous: "Poprzednie logo",
  next: "Następne logo",
};

/** Header `ariaLabels` (layout); `{label}` = nazwa pozycji menu */
export const plHeaderAriaLabels = {
  menuToggle: "Otwórz lub zamknij menu",
  mainNav: "Menu główne",
  mobileNav: "Menu mobilne",
  submenuToggle: "Rozwiń podmenu: {label}",
};

// ── Opinie klientów ──────────────────────────────────────

export const plTestimonialCardLabels: TestimonialCardLabels = {
  logoAlt: "Logo {company}",
  defaultCompany: "klienta",
};

/** Do rozwinięcia w <TestimonialCarousel … {...plTestimonialCarouselProps} /> */
export const plTestimonialCarouselProps = {
  heading: "Głos naszych klientów",
  ariaLabels: {
    previous: "Poprzednia opinia",
    next: "Następna opinia",
    goTo: "Przejdź do opinii",
  },
  cardLabels: plTestimonialCardLabels,
};

/** Nagłówek bloku z pojedynczą opinią (TestimonialBlock, case studies) */
export const plTestimonialBlockHeading = "Głos naszych klientów";

// ── Siatka case studies ──────────────────────────────────

/** Do rozwinięcia w <CaseStudyGrid cards={…} {...plCaseStudyGridLabels} /> */
export const plCaseStudyGridLabels: Omit<CaseStudyGridProps, "cards"> = {
  heading: "Case studies –\nrealne wyniki naszych klientów",
  subtitle: "Strategiczna doskonałość na rynkach międzynarodowych.",
  viewLabel: "Zobacz case study",
  tagline: "Precyzyjne rozwiązania dla nowoczesnego biznesu.",
  exploreLabel: "Zobacz wszystkie realizacje",
  defaultTag: "CASE STUDY",
};

// ── Formularz kontaktowy i sekcja CTA ────────────────────

/** Tematy formularza; pierwszy to placeholder (actions/contact.ts go pomija) */
export const plFormTopics = [
  "Wybierz temat",
  "Szukam pracy",
  "Oferuję usługi",
  "Jestem klientem B2B – bezpłatna wycena i/lub konsultacja",
  "Inne",
] as const;

export const plCtaFormLabels: CTAFormLabels = {
  heading: "Umów bezpłatną konsultację",
  subheading: "Bez zobowiązań · Odpowiedź w ciągu 24 h",
  nameLabel: "Imię i nazwisko",
  namePlaceholder: "Imię i nazwisko",
  emailLabel: "Adres e-mail",
  emailPlaceholder: "E-mail",
  phoneLabel: "Numer telefonu",
  phonePlaceholder: "Numer telefonu (+48)",
  topicLabel: "Temat",
  topics: plFormTopics,
  briefLabel: "Opis potrzeb",
  briefPlaceholder: "Opisz swoją sytuację – co chcesz osiągnąć?",
  uploadLabel: "Dołącz zapytanie ofertowe lub specyfikację",
  uploadHint: "PDF, DOC, XLS, PNG, JPG (maks. 10 MB / plik)",
  removeFile: "Usuń plik {name}",
  consentBefore: "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ",
  consentLink: "Polityką prywatności",
  consentAfter: ".",
  privacyHref: "/privacy-policy",
  submit: "Wyślij wiadomość",
  submitting: "Wysyłanie…",
  successTitle: "Dziękujemy za wiadomość!",
  successText: "Odpowiemy w ciągu 24 godzin.",
  genericError: "Coś poszło nie tak. Spróbuj ponownie.",
  unexpectedError: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.",
};

export const plCtaSectionLabels: CTASectionLabels = {
  heading: "Twój następny krok zaczyna się tutaj.",
  intro:
    "Chcesz usprawnić procesy, powiększyć zespół lub wejść na nowy rynek? Wystarczy jedna rozmowa, by sprawdzić, czy jesteśmy właściwym partnerem.",
  points: [
    {
      title: "Działamy jak Twój wewnętrzny zespół",
      desc: "Nie jesteśmy agencją. Bierzemy pełną odpowiedzialność za ludzi i procesy.",
    },
    {
      title: "Skalujesz, kiedy potrzebujesz",
      desc: "Zatrudniaj szybciej, elastyczniej i bez długoterminowych zobowiązań.",
    },
    {
      title: "Skuteczność potwierdzona liczbami",
      desc: "Ponad 2 500 zrealizowanych projektów, 85% klientów współpracuje z nami długoterminowo.",
    },
  ],
  badgesAlt: "Zaufany partner od 2015 roku – stabilność zespołu, założona w 2015 roku, partner biznesowy",
  form: plCtaFormLabels,
};

// ── Szablony stron usług i branż ─────────────────────────

const plPageTemplateCommonLabels: PageTemplateCommonLabels = {
  breadcrumbHome: plBreadcrumbHome,
  breadcrumbAria: plBreadcrumbAria,
  heroTrustImageAlt: plHeroTrustImageAlt,
  benefitsHeading: "Korzyści dla Twojej firmy",
  benefitsSubtitle: "Mierzalne efekty w każdym projekcie.",
  cardLinkLabel: plCardLinkLabel,
  processHeading: "Proces współpracy",
  faqPreheading: "Masz pytania?",
  faqHeading: "Najczęściej zadawane pytania",
  testimonials: plTestimonialCarouselProps,
  caseStudies: plCaseStudyGridLabels,
  cta: plCtaSectionLabels,
};

export const plServicePageLabels: ServicePageTemplateLabels = {
  ...plPageTemplateCommonLabels,
  breadcrumbServices: "Usługi",
  targetAudiencePreheading: "POMERICO GROUP",
  clutchBadgeAlt: "Zweryfikowany partner Clutch – Top HR Outsourcing Company, Polska 2023",
  // Grafika clutch-doodle.svg zawiera angielski napis – alt opisuje to, co na niej widać.
  clutchDoodleAlt: "We work with companies that",
};

export const plIndustryPageLabels: IndustryPageTemplateLabels = {
  ...plPageTemplateCommonLabels,
  breadcrumbIndustries: "Branże",
  trustedBy: "Zaufali nam liderzy branży",
  servicesHeading: "Nasze usługi",
};

// ── Case study ───────────────────────────────────────────

export const plCaseStudyLayoutLabels: CaseStudyLayoutLabels = {
  heroImageAlt: "Szklana fasada nowoczesnego biurowca na tle błękitnego nieba",
  clientSpotlight: "Klient w centrum uwagi",
  client: "Klient",
  industry: "Branża",
  projectGoal: "Cel projektu",
  challenge: "Wyzwanie",
  viewAllServices: "ZOBACZ WSZYSTKIE USŁUGI",
  approach: "Nasze podejście",
  results: "Rezultaty",
  breadcrumbHome: plBreadcrumbHome,
  breadcrumbCaseStudies: "Case studies",
  breadcrumbAria: plBreadcrumbAria,
  testimonialHeading: plTestimonialBlockHeading,
  testimonialCardLabels: plTestimonialCardLabels,
  caseStudies: plCaseStudyGridLabels,
  cta: plCtaSectionLabels,
};

// ── Wpis na blogu ────────────────────────────────────────

export const plBlogPostLabels: BlogPostTemplateLabels = {
  breadcrumbHome: plBreadcrumbHome,
  breadcrumbBlog: "Blog",
  breadcrumbAria: plBreadcrumbAria,
  writtenBy: "Autor",
  linkedin: "LinkedIn",
  authorsSeparator: " i ",
  moreArticles: "Więcej artykułów",
  readMore: "Czytaj dalej",
  publisherName: "Pomerico Group",
};

// ── Tabela porównawcza modeli współpracy (/services) ─────

const Y = (label = "Tak"): ServiceComparisonCell => ({ type: "yes", label });
const N = (label = "Nie"): ServiceComparisonCell => ({ type: "no", label });
const P = (label: string): ServiceComparisonCell => ({ type: "partial", label });
const T = (label: string): ServiceComparisonCell => ({ type: "txt", label });
const ALL_TAGS = ["employment", "outsourcing", "staffing", "advisory", "it"];
const row = (feature: string, cells: ServiceComparisonCell[]): ServiceComparisonRow => ({
  kind: "data",
  feature,
  tags: ALL_TAGS,
  cells,
});
const category = (label: string): ServiceComparisonRow => ({ kind: "category", label });

// Kolejność kolumn: EOR | EOR + On Site | PEO | BPO | Outsourcing finansów | Outsourcing HR |
// Body leasing | RPO / rekrutacja | Nearshoring | Wejście na rynek | Doradztwo biznesowe | Kontraktowanie IT
const plServiceComparisonColumns: ServiceComparisonColumn[] = [
  { badge: "Zatrudnienie", name: "EOR", desc: "Employer of Record – Pomerico jest formalnym pracodawcą", href: "/services/eor-employer-of-record", group: "employment" },
  { badge: "Zatrudnienie", name: "EOR + On Site", desc: "EOR z dedykowanym zarządzaniem i koordynacją na miejscu", href: "/services/eor-on-site", group: "employment" },
  { badge: "Zatrudnienie", name: "PEO", desc: "Professional Employer Organization – współzatrudnienie", href: "/services/peo-professional-employer-organization", group: "employment" },
  { badge: "Outsourcing", name: "BPO", desc: "Outsourcing procesów biznesowych – pełna odpowiedzialność za proces", href: "/services/bpo-business-process-outsourcing", group: "outsourcing" },
  { badge: "Outsourcing", name: "Outsourcing finansów", desc: "Finanse i kontraktowanie – doświadczeni specjaliści finansowi", href: "/services/finance-outsourcing-contracting", group: "outsourcing" },
  { badge: "Outsourcing", name: "Outsourcing HR", desc: "Outsourcing i doradztwo HR – strategiczne wsparcie HR", href: "/services/hr-outsourcing-consulting", group: "outsourcing" },
  { badge: "Kadry", name: "Body leasing", desc: "Staff augmentation – specjaliści na żądanie", href: "/services/body-leasing-staff-augmentation", group: "staffing" },
  { badge: "Kadry", name: "RPO / rekrutacja", desc: "Outsourcing procesów rekrutacyjnych – rekrutacja end-to-end", href: "/services/recruitment-services-rpo", group: "staffing" },
  { badge: "Kadry", name: "Nearshoring", desc: "Dedykowane zespoły w Polsce – lokalizacja w UE, Twoja strefa czasowa", href: "/services/nearshoring-in-poland", group: "staffing" },
  { badge: "Doradztwo", name: "Wejście na rynek", desc: "Wsparcie prawne, podatkowe i kadrowe przy starcie działalności w Polsce", href: "/services/market-entry-in-poland", group: "advisory" },
  { badge: "Doradztwo", name: "Doradztwo biznesowe", desc: "Podatki i prawo – doradztwo w zakresie polskich przepisów i compliance", href: "/services/business-consulting-tax-law", group: "advisory" },
  { badge: "IT i technologie", name: "Kontraktowanie IT", desc: "Specjaliści IT do projektów i stałej pracy technologicznej", href: "/services/it-contracting", group: "it" },
];

const plServiceComparisonRows: ServiceComparisonRow[] = [
  category("Zatrudnienie i kwestie prawne"),
  row("Bez konieczności zakładania spółki", [Y(), Y(), Y(), Y(), Y(), Y(), Y(), N("Niewymagane"), Y(), P("Wspieramy"), P("Tylko doradztwo"), Y()]),
  row("Pomerico jest formalnym pracodawcą", [Y("Tak – w pełni"), Y("Tak – w pełni"), P("Wspólnie"), Y(), Y(), P("Opcjonalnie"), Y(), N(), Y(), N(), N(), Y()]),
  row("Klient zachowuje status pracodawcy", [N(), N(), Y(), N(), N(), P("Opcjonalnie"), N(), Y(), N(), Y("Tak – po uruchomieniu"), Y(), N()]),
  row("Pełna zgodność z prawem UE i polskim", [Y(), Y(), Y(), Y(), Y(), Y(), Y(), P("Częściowo"), Y(), Y("Tak – kluczowy obszar"), Y("Tak – kluczowy obszar"), Y()]),

  category("HR i płace"),
  row("Płace obsługiwane przez Pomerico", [Y(), Y(), Y(), Y(), Y(), Y(), Y(), N(), Y(), N(), N(), Y()]),
  row("Administracja HR (umowy, urlopy, benefity)", [Y("Pełna"), Y("Pełna"), Y("Pełna"), Y("Pełna"), Y("Pełna"), Y("Kluczowa usługa"), Y("Pełna"), N(), Y("Pełna"), P("Tylko na starcie"), N(), Y("Pełna")]),
  row("Dedykowany HR Business Partner", [Y(), Y(), Y(), Y(), Y(), Y(), Y(), P("Na życzenie"), Y(), P("Na życzenie"), N(), Y()]),
  row("Kierownik / koordynator na miejscu", [N(), Y("Tak – kluczowa cecha"), N(), P("Opcjonalnie"), N(), P("Opcjonalnie"), N(), N(), Y(), N(), N(), N()]),

  category("Talenty i rekrutacja"),
  row("Rekrutacja w cenie (bez dodatkowych opłat)", [Y("Tak – bezpłatnie"), Y("Tak – bezpłatnie"), Y("Tak – bezpłatnie"), Y("Tak – bezpłatnie"), Y("Tak – bezpłatnie"), P("W pakiecie"), Y("Tak – bezpłatnie"), Y("Kluczowa usługa"), Y("Tak – bezpłatnie"), P("Opcjonalnie"), N(), Y("Tak – bezpłatnie")]),
  row("Direct search / dostęp do ukrytego rynku", [Y(), Y(), Y(), P("Wybiórczo"), Y(), Y(), Y(), Y(), Y(), N(), N(), Y()]),
  row("Onboarding prowadzony przez Pomerico", [Y(), Y(), Y(), Y(), Y(), Y(), Y(), N(), Y(), N(), N(), Y()]),

  category("Elastyczność i skala"),
  row("Minimalna skala współpracy", [T("1 osoba"), T("1 osoba"), T("1 osoba"), T("1 proces"), T("1 osoba"), T("1 funkcja"), T("1 osoba"), T("1 stanowisko"), T("1 zespół"), T("1 projekt"), T("1 projekt"), T("1 osoba")]),
  row("Typowy czas uruchomienia", [T("1–3 tygodnie"), T("2–4 tygodnie"), T("1–3 tygodnie"), T("2–4 tygodnie"), T("1–2 tygodnie"), T("1–2 tygodnie"), T("Kilka dni"), T("2–6 tygodni"), T("4–8 tygodni"), T("4–12 tygodni"), T("1–2 tygodnie"), T("Kilka dni – 1 tydzień")]),
  row("Skalowanie bez długoterminowych zobowiązań", [Y(), Y(), Y(), P("Umiarkowane"), Y(), Y(), Y("Wysoka elastyczność"), P("Per projekt"), Y(), N("Jednorazowo"), P("Per zlecenie"), Y("Wysoka elastyczność")]),
  row("Praca zdalna / hybrydowa / stacjonarna", [Y("Wszystkie modele"), Y("Wszystkie modele"), Y("Wszystkie modele"), Y("Wszystkie modele"), Y("Wszystkie modele"), Y("Wszystkie modele"), Y("Wszystkie modele"), P("Decyduje klient"), Y("Wszystkie modele"), P("Preferowana stacjonarna"), P("Zdalna / hybrydowa"), Y("Wszystkie modele")]),

  category("Rozliczenia i koszty"),
  row("Stała miesięczna faktura (przewidywalny koszt)", [Y(), Y(), Y(), Y(), Y(), Y(), Y(), P("Za projekt"), Y(), P("Za projekt"), P("Per zlecenie"), Y()]),
  row("Oszczędności względem Europy Zachodniej", [T("Do 40%"), T("Do 40%"), T("Do 40%"), T("30–50%"), T("30–45%"), T("30–40%"), T("Do 40%"), T("Zmienne"), T("Do 50%"), T("Nie dotyczy"), T("Nie dotyczy"), T("Do 50%")]),
  row("Brak ukrytych kosztów administracji i compliance", [Y(), Y(), Y(), Y(), Y(), Y(), Y(), N(), Y(), P("Stały zakres"), P("Stały zakres"), Y()]),

  category("Zarządzanie procesami"),
  row("Pełna odpowiedzialność Pomerico za proces", [N(), N(), N(), Y(), Y(), Y(), N(), P("Proces rekrutacji"), P("Zarządzanie zespołem"), Y("Tak – uruchomienie"), P("Doradztwo"), N()]),
  row("Klient zarządza bieżącymi zadaniami i celami", [Y(), Y(), Y(), N("Nie – Pomerico"), P("Wspólnie"), P("Wspólnie"), Y(), Y(), Y(), Y(), Y(), Y()]),
  row("Raportowanie KPI / SLA w cenie", [P("Co miesiąc"), Y("Pełne KPI/SLA"), P("Co miesiąc"), Y("Pełne KPI/SLA"), Y("Pełne KPI/SLA"), Y("Pełne KPI/SLA"), P("Co miesiąc"), P("Per projekt"), P("Co miesiąc"), P("Według kamieni milowych"), P("Per zlecenie"), P("Per projekt")]),

  category("Doradztwo i wejście na rynek"),
  row("Wsparcie przy zakładaniu i rejestracji spółki", [N(), N(), N(), N(), N(), N(), N(), N(), N(), Y("Tak – kluczowe"), P("Doradztwo"), N()]),
  row("Doradztwo podatkowe i prawne (polskie przepisy)", [P("Compliance"), P("Compliance"), P("Compliance"), N(), P("Prawo finansowe"), P("Prawo pracy"), N(), N(), N(), Y("Tak – kluczowe"), Y("Tak – kluczowe"), N()]),
  row("Doradztwo strategiczne i rozwojowe", [N(), N(), N(), N(), N(), P("Strategia HR"), N(), N(), N(), Y("Tak – kluczowe"), Y("Tak – kluczowe"), N()]),
];

export const plServiceComparisonLabels: ServiceComparisonLabels = {
  heading: "Który model współpracy\njest dla Ciebie?",
  subtitle:
    "Porównaj nasze modele zatrudnienia i outsourcingu, aby wybrać rozwiązanie najlepiej dopasowane do celów Twojej firmy.",
  filters: [
    { label: "Wszystkie usługi", value: "all" },
    { label: "Modele zatrudnienia", value: "employment" },
    { label: "Outsourcing", value: "outsourcing" },
    { label: "Talenty i kadry", value: "staffing" },
    { label: "Doradztwo i wejście na rynek", value: "advisory" },
    { label: "IT i technologie", value: "it" },
  ],
  columns: plServiceComparisonColumns,
  rows: plServiceComparisonRows,
  bestFor: [
    "Firmy międzynarodowe zatrudniające w Polsce bez zakładania spółki. Szybkie wejście na rynek.",
    "Firmy, które potrzebują EOR oraz aktywnej obecności na miejscu, koordynacji i bieżącego zarządzania zespołem w Polsce.",
    "Firmy, które chcą przekazać administrację HR, zachowując status pracodawcy i pełną kontrolę operacyjną.",
    "Organizacje outsourcujące całe działy: HR, finanse, IT, back office, marketing.",
    "Firmy potrzebujące rzetelnych specjalistów finansowych zintegrowanych z istniejącymi procesami, z pełną zgodnością z przepisami.",
    "Rozwijające się firmy, które potrzebują strategicznego wsparcia HR – od rekrutacji po retencję i rozwój organizacji.",
    "Zespoły, które szybko potrzebują konkretnych specjalistów – IT, finanse, HR, operacje – na krótko lub długoterminowo.",
    "Firmy, które chcą zatrudniać na stałe i szukają partnera do rekrutacji end-to-end.",
    "Firmy wykorzystujące wykwalifikowane kadry w Polsce i lokalizację w UE do efektywnego kosztowo budowania zespołów zdalnych.",
    "Zagraniczne firmy uruchamiające działalność w Polsce – od założenia spółki po zatrudnienie pierwszego lokalnego zespołu.",
    "Międzynarodowe firmy, które poruszają się w polskim prawie podatkowym, regulacjach i strategii biznesowej.",
    "Firmy potrzebujące doświadczonych programistów, inżynierów lub tech leadów do projektów lub stałej pracy IT.",
  ],
  learnMoreLink: "Dowiedz się więcej",
  bestForLabel: "Dla kogo",
  notSureLabel: plComparisonNotSureLabel,
  learnMoreButton: "Szczegóły",
  legendYes: "Tak / w pełni w cenie",
  legendPartial: "Częściowo / na życzenie",
  legendNo: "Nie / nie dotyczy",
};
