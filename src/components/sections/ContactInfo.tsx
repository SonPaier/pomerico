import Image from "next/image";
import Link from "next/link";
import type { ContactPerson } from "@/content/types";

interface ContactInfoProps {
  person: ContactPerson;
  /** Italic context line shown below the top bar. Changes per page. */
  contextMessage?: string;
}

export function ContactInfo({
  person,
  contextMessage = "Ready to optimize your processes?",
}: ContactInfoProps) {
  return (
    <div className="min-w-[280px] overflow-hidden rounded-xl border border-dark/10 bg-white shadow-md">
      {/* ── Top accent bar ── */}
      <div className="flex items-center gap-2 bg-[#1a3d6b] px-5 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c8a951]" aria-hidden="true" />
        <span className="font-ui text-[10px] font-semibold uppercase tracking-[2px] text-white/65">
          Contact us
        </span>
      </div>

      {/* ── Body ── */}
      <div className="px-5 pb-5 pt-6">
        {/* Context line */}
        <p className="mb-5 border-b border-dark/5 pb-4 text-[13px] font-medium italic leading-relaxed text-primary-blue">
          &ldquo;{contextMessage}&rdquo;
        </p>

        {/* Person card */}
        <div className="mb-4 flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#c8a951]">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Online dot */}
            <span
              className="absolute bottom-0.5 right-0.5 h-[11px] w-[11px] rounded-full border-2 border-white bg-green-500"
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold leading-tight text-dark">{person.name}</p>
            <p className="text-[11.5px] leading-snug text-dark/50">{person.role}</p>
            <span className="mt-1 inline-block rounded bg-[#1a3d6b]/[.07] px-2 py-0.5 font-ui text-[9.5px] font-bold uppercase tracking-wider text-[#1a3d6b]">
              Your first contact
            </span>
          </div>
        </div>

        {/* Contact lines */}
        <div className="mb-4 flex flex-col gap-2.5">
          {/* Phone numbers with country labels */}
          {person.phones.map((phone, i) => {
            const country = i === 0 ? "Denmark" : "Poland";
            return (
              <a
                key={phone.href}
                href={phone.href}
                className="flex items-center gap-2.5 transition-opacity hover:opacity-75"
              >
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-gray-bg">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1a3d6b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.23 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <span className="flex flex-col gap-px">
                  <span className="font-ui text-[9.5px] font-semibold uppercase tracking-wider text-dark/40">
                    {country}
                  </span>
                  <span className="text-[13px] font-medium text-dark">{phone.label}</span>
                </span>
              </a>
            );
          })}

          {/* Email */}
          <a
            href={person.email.href}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-75"
          >
            <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-gray-bg">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a3d6b"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </span>
            <span className="flex flex-col gap-px">
              <span className="font-ui text-[9.5px] font-semibold uppercase tracking-wider text-dark/40">
                E-mail
              </span>
              <span className="text-[13px] font-medium text-dark">{person.email.label}</span>
            </span>
          </a>
        </div>

        {/* CTA button */}
        <Link
          href="/contact"
          className="mb-3 block w-full rounded-lg bg-[#1a3d6b] px-3 py-3 text-center text-[13px] font-semibold tracking-wide text-white transition-all hover:bg-[#1e4d85] hover:-translate-y-px"
        >
          Book a Free Consultation &rarr;
        </Link>

        {/* Availability */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-dark/40">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" aria-hidden="true" />
          Available {person.availability}
        </div>
      </div>

      {/* ── Job seekers note ── */}
      <div className="flex items-start gap-2 border-t border-dark/5 bg-gray-bg px-5 py-3">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="mt-0.5 shrink-0 text-dark/30"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p className="text-[11.5px] leading-relaxed text-dark/40">
          Looking for a job? &rarr;{" "}
          <a
            href="mailto:recruitment@pomerico.com"
            className="font-medium text-primary-blue hover:underline"
          >
            recruitment@pomerico.com
          </a>
        </p>
      </div>
    </div>
  );
}
