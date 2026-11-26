import type { BlogPostCard } from "@pomerico/content";

export type { BlogPostCard };

// Lista wpisów na /blog i w sekcji „Więcej artykułów” pod każdym wpisem.
// Kolejność i slugi jak na pomerico.com. Daty w formacie "DD/MM/YYYY"
// (strona /blog i BlogPostTemplate wyświetlają je w formacie pl-PL).
// Tytuł wpisu służy też jako tekst alternatywny miniatury.

export const blogPosts: BlogPostCard[] = [
  {
    slug: "ai-act-in-hr-and-recruitment",
    title:
      "AI Act w HR i rekrutacji: co już wolno, a czego nie",
    description:
      "AI Act w HR: rozpoznawanie emocji jest już zakazane, selekcja CV od 2 grudnia 2027 r. staje się systemem wysokiego ryzyka, a RODO obowiązuje już dziś. Od czego zacząć.",
    image: "/images/ai-act-in-hr-and-recruitment-featured.webp",
    date: "23/11/2026",
    author: "Sebastian Kunc i Olga Zabieglik",
    category: "Outsourcing HR, Rekrutacja, Compliance",
  },
  {
    slug: "pay-transparency-before-the-act-enters-into-force",
    title:
      "Jawność wynagrodzeń: ustawy jeszcze nie ma, ale obowiązki już są. Co zrobić, zanim wejdzie w życie?",
    description:
      "Ustawa o jawności wynagrodzeń jeszcze nie obowiązuje, ale część obowiązków już tak. Od czego zacząć: opisy stanowisk, wartościowanie stanowisk, siatki płac.",
    image: "/images/pay-transparency-before-the-act-enters-into-force.webp",
    date: "18/11/2026",
    author: "Sebastian Kunc i Olga Zabieglik",
    category: "Outsourcing HR, Compliance, Zarządzanie",
  },
  {
    slug: "accounts-payable-process-documentation",
    title:
      "Dokumentacja procesów Accounts Payable: dlaczego dobra procedura AP jest na wagę złota",
    description:
      "Jak dokumentować procesy Accounts Payable: pisz dla nowicjusza, opisuj wyjątki, pisz zwięźle, uporządkuj dokumenty pomocnicze i bądź gotowy na audyt SOX.",
    image: "/images/accounts-payable-process-documentation.webp",
    date: "27/10/2026",
    author: "Joanna Włodarczyk",
    category: "Finanse, Accounts Payable, Dokumentacja procesów",
  },
  {
    slug: "accounts-payable-onboarding-mistakes",
    title:
      "Onboarding w Accounts Payable: 7 błędów, których warto unikać w pierwszych tygodniach nowej osoby w zespole",
    description:
      "7 najczęstszych błędów w onboardingu w Accounts Payable – i co działa zamiast nich: mentor, plan dzień po dniu, checklista dostępów i cotygodniowe rozmowy.",
    image: "/images/accounts-payable-onboarding-mistakes.webp",
    date: "21/10/2026",
    author: "Joanna Włodarczyk",
    category: "Finanse, Accounts Payable, Onboarding",
  },
  {
    slug: "polish-sscs-and-scandinavian-expectations",
    title:
      "Polskie SSC a skandynawskie oczekiwania – dlaczego kultura liczy się bardziej niż kurs EUR/PLN",
    description:
      "Dlaczego to kultura, a nie kurs EUR/PLN, decyduje o trwałym partnerstwie polskich SSC ze skandynawskimi firmami – feedback, terminy, inicjatywa.",
    image: "/images/polish-sscs-and-scandinavian-expectations-featured.webp",
    date: "13/10/2026",
    author: "Wiktoria Wierzbicka",
    category: "Finanse, BPO, Shared Services",
  },
  {
    slug: "recruiting-for-an-accounts-payable-team",
    title: "Rekrutacja w Accounts Payable",
    description:
      "Czego naprawdę szuka Accounts Payable Manager, rekrutując do zespołu Accounts Payable – dokładności, spokoju pod presją zamknięcia miesiąca, ciekawości liczb i uczciwości.",
    image: "/images/recruiting-for-an-accounts-payable-team.webp",
    date: "08/10/2026",
    author: "Joanna Włodarczyk",
    category: "Finanse, Księgowość, Rekrutacja, Zarządzanie",
  },
  {
    slug: "what-an-ssc-finance-manager-really-wants-to-hear",
    title:
      "Co Finance Manager w SSC naprawdę chce usłyszeć od partnera outsourcingowego (a czego nie)",
    description:
      "Czego Finance Managerowie w SSC, BSC i GBS nie chcą słyszeć od partnerów outsourcingowych – i co naprawdę przyciąga ich uwagę: struktura, minimum zakłóceń, ryzyko.",
    image: "/images/what-an-ssc-finance-manager-really-wants-to-hear.webp",
    date: "06/10/2026",
    author: "Wiktoria Wierzbicka",
    category: "Finanse, BPO, Shared Services",
  },
  {
    slug: "hiring-in-poland",
    title:
      "Chcesz zatrudnić kogoś w Polsce? Oto co musisz zrobić, zanim podpiszesz umowę",
    description:
      "Spółka, oddział, zatrudnienie bezpośrednie czy EOR? Co zagraniczna firma musi wiedzieć o ZUS, płacach, podatkach i pułapce B2B, zanim zatrudni kogoś w Polsce.",
    image: "/images/hiring-in-poland.webp",
    date: "30/09/2026",
    author: "Wiktoria Wierzbicka i Sebastian Kunc",
    category: "Outsourcing HR, EOR, Compliance",
  },
  {
    slug: "accounts-payable-under-pressure",
    title:
      "Accounts Payable pod presją: odporność operacyjna w finansach z perspektywy lidera",
    description:
      "Jak liderzy AP budują odporność operacyjną – od problemów z przepustowością zespołu po BPO, nearshoring i outsourcing finansów w Polsce.",
    image: "/images/accounts-payable-under-pressure.webp",
    date: "03/06/2026",
    author: "Joanna Włodarczyk",
    category: "Finanse, BPO, Księgowość, Zarządzanie",
  },
  {
    slug: "how-to-hire-more-effectively",
    title: "Jak rekrutować skuteczniej",
    description:
      "Praktyczne sposoby na skuteczniejszą rekrutację – od zdefiniowania roli i pozyskiwania kandydatów po onboarding i retencję. Eksperckie porady HR od Pomerico Group.",
    image: "/images/pomerico-hero-background.webp",
    date: "24/02/2026",
    author: "Sebastian Kunc",
    category: "Rekrutacja i HR",
  },
  {
    slug: "dora-vs-outsourcing",
    title:
      "DORA a outsourcing finansowy: co naprawdę musisz wiedzieć, zanim podpiszesz kolejną umowę",
    description:
      "DORA nie kończy ery outsourcingu finansowego – zmienia jego warunki. Praktyczny przewodnik dla CFO i COO: umowy, ryzyka i bezpieczny BPO w regulowanym świecie.",
    image: "/images/dora-compliance-outsourcing-article.webp",
    date: "24/02/2026",
    author: "Wiktoria Wierzbicka",
    category: "Compliance i regulacje",
  },
];
