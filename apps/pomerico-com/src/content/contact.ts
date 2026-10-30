import { phones } from "./shared";

export const contactHero = {
  heading: "Contact Pomerico – Free HR Outsourcing Consultation",
  description:
    "Share your challenge and we\u2019ll design a solution around your business - not the other way around. Free consultation, no commitment, reply within 24 hours.",
};

export const contactDetails = {
  phones: [
    { label: `DK: ${phones.dk.display}`, href: phones.dk.href, flag: "dk" },
    { label: `PL: ${phones.pl.display}`, href: phones.pl.href, flag: "pl" },
  ],
  emails: [
    { label: "For job seekers", address: "recruitment@pomerico.com" },
    { label: "For B2B clients", address: "consult@pomerico.com" },
    { label: "In other matters", address: "office@pomerico.com" },
  ],
  company: {
    name: "Pomerico Group Sp. z o.o (Ltd.)",
    address: "Szafarnia 11/F8, 80755 Gdansk",
    country: "Poland, European Union",
    vat: "VAT EU: PL5842745186",
  },
  linkedin: "https://www.linkedin.com/company/pomerico/",
  mapUrl:
    "https://maps.google.com/maps?q=Pomerico+Group,+Szafarnia+11/F8,+80-755+Gdańsk&t=m&z=14&output=embed&iwloc=near",
};
