import { companyLinkedin, phones } from "./shared";

export const contactHero = {
  heading: "Kontakt z Pomerico – bezpłatna konsultacja",
  description:
    "Opowiedz nam o swoim wyzwaniu, a zaprojektujemy rozwiązanie wokół Twojego biznesu – nie odwrotnie. Bezpłatna konsultacja, bez zobowiązań, odpowiedź w ciągu 24 godzin.",
};

export const contactDetails = {
  // Na pomerico.pl pokazujemy wyłącznie polski numer telefonu.
  phones: [{ label: `Tel.: ${phones.pl.display}`, href: phones.pl.href, flag: "pl" }],
  emails: [
    { label: "Dla kandydatów:", address: "recruitment@pomerico.com" },
    { label: "Dla klientów B2B:", address: "consult@pomerico.com" },
    { label: "W pozostałych sprawach:", address: "office@pomerico.com" },
  ],
  company: {
    name: "Pomerico Group Sp. z o.o.",
    address: "Szafarnia 11/F8, 80-755 Gdańsk",
    country: "Polska, Unia Europejska",
    vat: "VAT UE: PL5842745186",
  },
  linkedin: companyLinkedin,
  mapUrl:
    "https://maps.google.com/maps?q=Pomerico+Group,+Szafarnia+11/F8,+80-755+Gdańsk&t=m&z=14&output=embed&iwloc=near&hl=pl",
};
