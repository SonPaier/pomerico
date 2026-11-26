import type { ServiceCard, Testimonial } from "@pomerico/content";

// ── Karty usług („W czym się specjalizujemy?”) ──────────

export const homepageServiceCards: ServiceCard[] = [
  {
    icon: "/images/icon-person-growth-performance.png",
    heading: "Outsourcing finansów i kontraktowanie",
    description: "Zoptymalizowane operacje finansowe, szybsze wyniki, niezawodna zgodność z przepisami i raportowanie.",
    href: "/services/finance-outsourcing-contracting",
  },
  {
    icon: "/images/icon-handshake-partnership.png",
    heading: "Body leasing / staff augmentation",
    description: "Elastyczne skalowanie zespołu, szybki dostęp do specjalistów, bez długoterminowych zobowiązań.",
    href: "/services/body-leasing-staff-augmentation",
  },
  {
    icon: "/images/icon-id-card-employer-of-record.png",
    heading: "Employer of Record (EOR)",
    description: "Zgodność z lokalnymi przepisami, bezpieczne zatrudnianie za granicą, obsługa płac i umów.",
    href: "/services/eor-employer-of-record",
  },
  {
    icon: "/images/icon-globe-international-expansion.png",
    heading: "Outsourcing procesów biznesowych (BPO)",
    description: "Zoptymalizowane procesy biznesowe, niższe koszty operacyjne, koncentracja na kluczowej działalności.",
    href: "/services/bpo-business-process-outsourcing",
  },
  {
    icon: "/images/icon-recruitment-talent-search.png",
    heading: "Usługi rekrutacyjne / RPO",
    description: "Szybsza rekrutacja, dostęp do wykwalifikowanych kandydatów, pełna obsługa procesu od A do Z.",
    href: "/services/recruitment-services-rpo",
  },
  {
    icon: "/images/icon-shield-employer-compliance.png",
    heading: "Wejście na rynek polski",
    description: "Znajomość lokalnego rynku, przygotowanie prawne i kadrowe, szybka ekspansja.",
    href: "/services/market-entry-in-poland",
  },
  {
    icon: "/images/icon-hr-team-search.png",
    heading: "Outsourcing i doradztwo HR",
    description: "Strategiczne wsparcie HR – od rekrutacji, przez utrzymanie pracowników, po rozwój organizacji.",
    href: "/services/hr-outsourcing-consulting",
  },
  {
    icon: "/images/icon-brain-it-expertise.png",
    heading: "Kontraktowanie IT",
    description: "Dostęp do doświadczonych specjalistów IT do projektów lub stałej współpracy.",
    href: "/services/it-contracting",
  },
  {
    icon: "/images/icon-workflow-process-automation.png",
    heading: "Nearshoring w Polsce",
    description: "Wykorzystaj wykwalifikowane kadry i lokalizację Polski w UE do efektywnego kosztowo nearshoringu.",
    href: "/services/nearshoring-in-poland",
  },
];

// ── „Dlaczego klienci zostają z nami na lata?” ──────────

export const whyPomericoCards: ServiceCard[] = [
  {
    icon: "/images/icon-effectiveness-employee-growth.png",
    heading: "Skuteczność",
    description: "92,4% projektów realizujemy na czas. W wielu zespołach rotacja wynosi 0%.",
  },
  {
    icon: "/images/icon-umbrella-cost-efficiency.png",
    heading: "Efektywność kosztowa",
    description: "Ograniczamy zbędne wydatki i minimalizujemy koszty błędnych decyzji rekrutacyjnych.",
  },
  {
    icon: "/images/icon-cost-reduction-optimization.png",
    heading: "Szybkość",
    description: "Pierwsi kandydaci w 48 godzin. Kompletny zespół w 2–4 tygodnie.",
  },
  {
    icon: "/images/icon-magnifier-quality-assurance.png",
    heading: "Gwarancja rezultatów",
    description: "Podejmujemy się tylko projektów, które możemy zrealizować na najwyższym poziomie.",
  },
  {
    icon: "/images/icon-comprehensive-support-umbrella.png",
    heading: "Kompleksowe wsparcie",
    description: "Od rekrutacji, przez HR i finanse, po doradztwo – jeden partner do wszystkich potrzeb.",
  },
  {
    icon: "/images/icon-shield-trusted-by-candidates.png",
    heading: "Zaufanie kandydatów",
    description: "93% kandydatów ocenia nasz proces rekrutacji jako profesjonalny i przejrzysty.",
  },
  {
    icon: "/images/icon-wrench-reduced-turnover.png",
    heading: "Niższa rotacja",
    description: "Dbamy o utrzymanie i zaangażowanie pracowników – stabilne zespoły to lepsze wyniki.",
  },
  {
    icon: "/images/icon-handshake-partnership-reliability.png",
    heading: "Partnerstwo i niezawodność",
    description: "Klienci zostają z nami na lata dzięki naszej uczciwości, elastyczności i pełnemu zaangażowaniu.",
  },
];

// ── Opinie klientów ──────────────────────────────────────

export const homepageTestimonials: Testimonial[] = [
  {
    quote:
      "Pomerico Group wyróżnia się wiedzą z zakresu HR i kultury organizacyjnej. Ich umiejętność trafnego diagnozowania problemów i tworzenia skutecznych rozwiązań sprawia, że współpraca z nimi to gwarancja rozwoju.",
    author: "Julia Kasparek-Guzik",
    role: "Dyrektor operacyjna",
    company: "Datumo",
    companyLogo: "/images/datumo-logo-trimmed.webp",
  },
  {
    quote:
      "Rekrutacja przebiegła szybko, a jej efekty były więcej niż zadowalające. Jestem bardzo zadowolony ze współpracy i gorąco polecam Pomerico Group.",
    author: "Michał Nowak",
    role: "Regional Service Manager",
    company: "Vanderlande",
    companyLogo: "/images/vanderlande-logo-trimmed.webp",
  },
  {
    quote:
      "Pomerico wyróżnia się niezawodnością i efektywnością. Ich skuteczność w obszarze HR, marketingu i innych strategicznych obszarach zasługuje na uznanie. To najlepsza firma, z jaką miałem przyjemność współpracować w tej branży.",
    author: "Mikołaj Piec",
    role: "Właściciel",
    company: "Mera Automatic",
  },
  {
    quote:
      "Niejednokrotnie wykazali się lojalnością i realizowali zadania ponad nasze oczekiwania. To najbardziej rzetelna, skuteczna i godna zaufania firma.",
    author: "Michał Karpowicz",
    role: "COO",
    company: "Babord",
    companyLogo: "/images/babord-logo-trimmed.webp",
  },
];

// ── Mapa ─────────────────────────────────────────────────

export const mapImage = "/images/pomerico-services-map-europe.png";
