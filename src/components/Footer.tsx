import Link from "next/link";
import Image from "next/image";
import {
  footerCompanyLinks,
  footerServiceLinks,
  footerIndustryLinks,
} from "@/content/navigation";
import { contactWiktoria, pomericoLogo, companyLinkedin, clutchBadge } from "@/content/shared";
import { ContactInfo } from "./sections/ContactInfo";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 font-ui text-sm font-bold uppercase tracking-wider text-dark">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-ui text-sm text-dark/70 transition-colors hover:text-dark"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-bg border-t border-dark/10">
      {/* Navigation columns + Contact card */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <FooterColumn title="Company" links={footerCompanyLinks} />
            <Image
              src={clutchBadge}
              alt="Clutch top company"
              width={120}
              height={130}
              className="mt-6 w-24"
            />
          </div>

          {/* Services */}
          <FooterColumn title="Services" links={footerServiceLinks} />

          {/* Industry */}
          <FooterColumn title="Industry" links={footerIndustryLinks} />

          {/* Contact person */}
          <ContactInfo person={contactWiktoria} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/">
            <Image
              src={pomericoLogo}
              alt="Pomerico Group"
              width={172}
              height={36}
              className="h-8 w-auto max-w-[172px]"
            />
          </Link>
          <a
            href={companyLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pomerico on LinkedIn"
            className="text-dark/60 transition-colors hover:text-dark"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 448 512"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
