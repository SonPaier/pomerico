import Image from "next/image";
import Link from "next/link";
import type { ContactPerson } from "@pomerico/content";

interface ContactInfoProps {
  person: ContactPerson;
  contextMessage?: string;
}

export function ContactInfo({
  person,
  contextMessage,
}: ContactInfoProps) {
  return (
    <div className="min-w-[320px] rounded-lg border border-dark/5 bg-white p-8">
      <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-dark/60">
        Contact us
      </p>

      {contextMessage && (
        <p className="mt-3 text-sm italic text-primary-blue">
          &ldquo;{contextMessage}&rdquo;
        </p>
      )}

      <div className="relative mx-auto mt-5 h-36 w-36 overflow-hidden rounded-full">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-heading text-sm font-bold text-dark">
          {person.name}
        </h3>
        <p className="text-xs text-dark/70">{person.role}</p>
        <p className="text-[11px] text-dark/60">{person.availability}</p>
      </div>

      <div className="mt-5 flex flex-col gap-2.5 border-t border-dark/5 pt-5">
        {person.phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className="flex items-center gap-3 truncate text-xs text-dark/70 transition-colors hover:text-primary-blue"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary-blue" aria-hidden="true">
              <path d="M14.5 11.35v2a1.33 1.33 0 01-1.45 1.33 13.2 13.2 0 01-5.76-2.05 13 13 0 01-4-4A13.2 13.2 0 011.24 2.8 1.33 1.33 0 012.56 1.35h2a1.33 1.33 0 011.33 1.15 8.56 8.56 0 00.47 1.87 1.33 1.33 0 01-.3 1.41l-.85.85a10.67 10.67 0 004 4l.85-.85a1.33 1.33 0 011.41-.3 8.56 8.56 0 001.87.47 1.33 1.33 0 011.15 1.35z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {phone.label}
          </a>
        ))}
        <a
          href={person.email.href}
          className="flex items-center gap-3 truncate text-xs text-dark/70 transition-colors hover:text-primary-blue"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary-blue" aria-hidden="true">
            <path d="M2.67 2.67h10.66c.74 0 1.34.6 1.34 1.33v8c0 .73-.6 1.33-1.34 1.33H2.67c-.74 0-1.34-.6-1.34-1.33V4c0-.73.6-1.33 1.34-1.33z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.67 4L8 8.67 1.33 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {person.email.label}
        </a>
        <a
          href={person.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 truncate text-xs text-dark/70 transition-colors hover:text-primary-blue"
        >
          <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor" className="shrink-0 text-primary-blue" aria-hidden="true">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
          LinkedIn
        </a>
      </div>

      <Link
        href="/contact"
        className="mt-5 block w-full rounded bg-primary-red px-4 py-2.5 text-center font-ui text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-red/90"
      >
        Book a Free Consultation
      </Link>
    </div>
  );
}
