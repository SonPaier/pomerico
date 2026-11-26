import type { FAQItem } from "@pomerico/content";

export const faqHero = {
  heading: "Najczęściej zadawane pytania o outsourcing w Polsce",
  description:
    "Outsourcing, czyli Business Process Outsourcing (BPO), polega na przekazaniu wybranych procesów biznesowych do Pomerico – to my bierzemy pełną odpowiedzialność za ich realizację. Możesz powierzyć nam HR, płace, finanse, wsparcie IT, administrację, a nawet operacje sprzedażowe. Nasi klienci zyskują gotowe do działania zespoły i procesy bez konieczności budowania wewnętrznych działów.",
};

// Pierwsze 7 pytań z FAQ pomerico.com (pokazywane na stronie głównej).
// Pełna lista (strona /faq): allFaqItems na końcu pliku.

export const faqItems: FAQItem[] = [
  {
    question: "Jakie modele współpracy są dostępne?",
    answer: `<p>W Pomerico oferujemy elastyczne modele współpracy dopasowane do skali Twojej firmy, rynku i etapu rozwoju. Możesz wybrać model, który daje Ci pełną kontrolę, albo całkowicie odciąża Twoje wewnętrzne zespoły.</p>
<p>Dostępne modele współpracy:</p>
<ul>
<li><strong>Outsourcing / BPO (Business Process Outsourcing)</strong> – przejmujemy całe procesy (HR, finanse, IT, back office) i zarządzamy nimi kompleksowo, z dedykowanym zespołem i managerem.</li>
<li><strong>Body leasing / staff augmentation</strong> – pracujesz bezpośrednio z dedykowanymi specjalistami, a Pomerico pozostaje ich formalnym pracodawcą i zajmuje się całą administracją.</li>
<li><strong>Employer of Record (EOR)</strong> – zatrudniamy pracowników w Twoim imieniu, zapewniając pełną zgodność z przepisami, obsługę płac, podatków i kadr (idealne przy wejściu na rynek polski lub skalowaniu międzynarodowym).</li>
<li><strong>Rekrutacja w ramach outsourcingu</strong> – rekrutacja jest często wliczona i bezpłatna przy długoterminowej współpracy outsourcingowej.</li>
<li><strong>Doradztwo HR i biznesowe</strong> – strategiczne doradztwo w zakresie HR, struktury organizacyjnej, optymalizacji kosztów i skalowania.</li>
</ul>
<p>Większość klientów łączy modele (np. EOR + BPO), aby uzyskać maksymalną elastyczność i efektywność kosztową.</p>`,
  },
  {
    question: "Ile kosztuje outsourcing?",
    answer: `<p>Koszty zależą od zakresu i modelu współpracy. Oferujemy przejrzyste rozliczenia – zwykle stałą miesięczną opłatę za proces lub za pracownika, bez ukrytych kosztów.</p>
<p>Dzięki temu masz przewidywalne i kontrolowane koszty, które mogą być nawet o 33% niższe niż przy realizacji procesów wewnętrznie.</p>`,
  },
  {
    question: "Jakie modele rozliczeń mogę wybrać?",
    answer: `<p>Zaczynamy od konsultacji i audytu procesów, po których przygotowujemy dopasowaną ofertę i plan operacyjny. Dostępne modele:</p>
<ul>
<li><strong>EoR (Employer of Record)</strong> – formalnie zatrudniamy Twoich pracowników w Polsce</li>
<li><strong>PEO (Professional Employer Organization)</strong> – współzatrudnienie</li>
<li><strong>BPO (Business Process Outsourcing)</strong> – przejmujemy określone funkcje, takie jak HR, płace, finanse czy IT</li>
</ul>
<p>Każdy model jest elastyczny i dopasowany do struktury oraz celów Twojej firmy.</p>`,
  },
  {
    question: "Jak zapewniacie zgodność z przepisami i bezpieczeństwo danych?",
    answer:
      "Działamy zgodnie z rygorystycznymi standardami compliance, w tym RODO, DORA oraz lokalnym prawem pracy i prawem podatkowym. Wszystkie procesy realizujemy w oparciu o umowy NDA i SLA, stosując najwyższe standardy ochrony danych. Nie otrzymaliśmy dotąd żadnej kary za naruszenie przepisów, a zaufali nam międzynarodowi klienci z branży finansowej i IT.",
  },
  {
    question: "Czym różni się outsourcing HR od PEO/HRO?",
    answer: `<ul>
<li><strong>Outsourcing HR:</strong> Pomerico w pełni przejmuje procesy HR (rekrutację, płace, administrację kadrową).</li>
<li><strong>PEO:</strong> Ty pozostajesz pracodawcą, a Pomerico zajmuje się administracją HR i zgodnością z przepisami.</li>
<li><strong>EoR:</strong> Pomerico staje się formalnym pracodawcą – idealne rozwiązanie przy wejściu na rynek.</li>
</ul>
<p>Pomożemy Ci wybrać model najlepiej dopasowany do Twoich potrzeb.</p>`,
  },
  {
    question: "Jak outsourcing wpływa na pracowników?",
    answer: `<p>Outsourcing nie jest zagrożeniem dla pracowników – często wręcz zwiększa ich retencję.</p>
<p>Dzięki uporządkowanemu onboardingowi, przejrzystym procesom HR i programom rozwojowym nasze zespoły outsourcingowe osiągają rotację na poziomie 0–7%, znacznie poniżej średniej rynkowej.</p>`,
  },
  {
    question: "Czy outsourcing może poprawić retencję talentów?",
    answer: `<p>Tak. Dzięki uporządkowanemu onboardingowi, jasnym ścieżkom kariery, systemom motywacyjnym i dedykowanemu wsparciu HR nasze zespoły outsourcingowe konsekwentnie utrzymują niską rotację.</p>
<p>Właściwy dostawca powinien oferować doświadczenie, przejrzystość i udokumentowane wyniki. Ponad 2500 zrealizowanych projektów i 85% klientów współpracujących z nami długoterminowo sprawiają, że Pomerico jest strategicznym partnerem, a nie tylko dostawcą.</p>`,
  },
];

// Pozostałe pytania – wyświetlane tylko na stronie /faq.
const moreFaqItems: FAQItem[] = [
  {
    question: "Jak wybrać właściwego dostawcę usług outsourcingowych?",
    answer:
      "Właściwy dostawca powinien oferować doświadczenie, przejrzystość i udokumentowane wyniki. Ponad 2500 zrealizowanych projektów i 85% klientów współpracujących z nami długoterminowo sprawiają, że Pomerico jest nie tylko dostawcą, ale strategicznym partnerem. Otrzymujesz dedykowanego project managera, regularne raporty i – w razie potrzeby – bezpośredni dostęp do naszego zarządu.",
  },
  {
    question: "Jakie wsparcie otrzymam?",
    answer:
      "Otrzymujesz dedykowanego project managera, regularne raporty i – w razie potrzeby – bezpośredni dostęp do naszego zarządu. Zapewniamy także opiekę HR, monitorowanie zaangażowania pracowników i stałą optymalizację procesów.",
  },
  {
    question: "Czy outsourcing sprawdzi się w małej firmie?",
    answer:
      "Tak. Wspieramy zarówno szybko rosnące startupy, jak i duże, ugruntowane przedsiębiorstwa. Możesz zacząć od jednego specjalisty lub jednej funkcji i stopniowo zwiększać skalę.",
  },
  {
    question: "Czy znaczenie outsourcingu będzie rosło?",
    answer:
      "Tak. Firmy szukają efektywności, zgodności z przepisami i elastyczności, dlatego outsourcing zyskuje na znaczeniu – zwłaszcza w obszarach HR, IT i finansów. Pomerico już dziś pomaga klientom przejść na skalowalne modele, przygotowane na przyszłość.",
  },
  {
    question: "Jak szybko można rozpocząć współpracę?",
    answer:
      "W zależności od modelu outsourcing może ruszyć w ciągu kilku dni lub tygodni. Przykładowo, dla jednego z klientów zbudowaliśmy 25-osobowy zespół operacyjny w zaledwie 3 miesiące – dwa razy szybciej, niż zakładał plan.",
  },
  {
    question: "Czy mogę zacząć od jednego specjalisty i rozbudować zespół później?",
    answer:
      "Oczywiście. Wielu naszych klientów zaczyna od jednego stanowiska lub jednej funkcji, a następnie stopniowo rozbudowuje większe zespoły. Nasze modele są w pełni skalowalne.",
  },
  {
    question: "Jakie błędy najczęściej popełnia się przy outsourcingu?",
    answer:
      "Najczęstsze błędy to wybór niewłaściwego modelu, słaba komunikacja i brak jasno określonych KPI. W Pomerico ograniczamy te ryzyka, przeprowadzając audyt na starcie, ustalając przejrzyste KPI i zapewniając dedykowaną opiekę nad klientem.",
  },
  {
    question: "Jak uniknąć błędów przy outsourcingu?",
    answer: `<p>Włączamy naszych specjalistów w kulturę Twojej organizacji i otwarcie komunikujemy się z Twoimi zespołami.</p>
<p>Prowadzimy uporządkowany onboarding: shadowing, szkolenia, dopasowanie kulturowe i jasne linie raportowania.</p>
<p>Pomerico to nie tylko wykonawca – jesteśmy Twoim strategicznym doradcą. Łączymy outsourcing z doradztwem, pomagając optymalizować koszty, usprawniać procesy i dopasowywać HR oraz finanse do celów biznesowych.</p>`,
  },
];

/** Pełna lista pytań (strona /faq) – kolejność jak na pomerico.com. */
export const allFaqItems: FAQItem[] = [...faqItems, ...moreFaqItems];
