"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./ArrowRightIcon";

const DEFAULT_TOPICS = [
  "Choose a topic",
  "Looking for a job",
  "I offer services",
  "I am a B2B Client, free quote and/or consultation",
  "Other",
] as const;

export interface CTAFormProps {
  submitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
  topics?: readonly string[];
}

export function CTAForm({ submitAction, topics }: CTAFormProps) {
  const formTopics = topics ?? DEFAULT_TOPICS;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitAction(formData);

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-white p-10 text-center">
        <p className="font-heading text-xl font-bold text-dark">
          Thank you for reaching out!
        </p>
        <p className="mt-2 text-dark/70">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded border border-dark/10 bg-gray-bg px-4 py-3 text-sm text-dark placeholder:text-dark/70 focus:border-primary-blue focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-8 lg:p-10"
    >
      <h3 className="font-heading text-2xl font-bold text-primary-blue">
        Book your free consultation
      </h3>
      <p className="mt-1 text-sm text-dark/70">
        No commitment &middot; Reply within 24h
      </p>

      {error && (
        <div className="mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-5">
        {/* Row 1: Name + Email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="ctaform-name" className="mb-1.5 block font-ui text-[11px] font-semibold uppercase tracking-wider text-dark/70">
              Full Name
            </label>
            <input
              id="ctaform-name"
              type="text"
              name="name"
              placeholder="Name"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="ctaform-email" className="mb-1.5 block font-ui text-[11px] font-semibold uppercase tracking-wider text-dark/70">
              Email Address
            </label>
            <input
              id="ctaform-email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 2: Phone + Topic */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="ctaform-phone" className="mb-1.5 block font-ui text-[11px] font-semibold uppercase tracking-wider text-dark/70">
              Phone Number
            </label>
            <input
              id="ctaform-phone"
              type="tel"
              name="phone"
              placeholder="Phone number (+xx)"
              required
              pattern="[0-9()#&+*\-=. ]+"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="ctaform-topic" className="mb-1.5 block font-ui text-[11px] font-semibold uppercase tracking-wider text-dark/70">
              Topic of Interest
            </label>
            <select id="ctaform-topic" name="topic" className={inputClass}>
              {formTopics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <label htmlFor="ctaform-brief" className="mb-1.5 block font-ui text-[11px] font-semibold uppercase tracking-wider text-dark/70">
            Project Brief
          </label>
          <textarea
            id="ctaform-brief"
            name="message"
            placeholder="Tell us about your situation - what are you looking to achieve?"
            rows={4}
            className={inputClass}
          />
        </div>

        {/* File upload */}
        <div className="rounded border-2 border-dashed border-dark/10 bg-gray-bg px-4 py-3">
          <label className="flex cursor-pointer items-center gap-3 text-sm text-dark/70">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-dark/50" aria-hidden="true">
              <path d="M17.5 12.5V15.83a1.67 1.67 0 01-1.67 1.67H4.17a1.67 1.67 0 01-1.67-1.67V12.5M14.17 6.67L10 2.5M10 2.5L5.83 6.67M10 2.5v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
              <strong className="text-dark/70">Upload RFP or Specs</strong>
              <span className="ml-2 text-xs">PDF, DOCX (Max 10MB)</span>
            </span>
            <input type="file" name="file" multiple className="hidden" />
          </label>
        </div>

        {/* GDPR */}
        <label htmlFor="ctaform-consent" className="flex items-start gap-2 text-xs text-dark/70">
          <input
            id="ctaform-consent"
            type="checkbox"
            name="gdpr"
            required
            className="mt-0.5 shrink-0"
          />
          <span>
            I agree to the processing of my personal data in accordance with
            the{" "}
            <Link href="/privacy-policy" className="text-primary-blue underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-red px-6 py-4 font-ui text-sm font-semibold text-white transition-colors hover:bg-primary-red/90 disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send a message"}
          {!submitting && <ArrowRightIcon stroke="white" />}
        </button>
      </div>
    </form>
  );
}
