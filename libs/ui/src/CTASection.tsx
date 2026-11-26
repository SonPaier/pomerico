import Image from "next/image";
import { CTAForm, type CTAFormLabels } from "./CTAForm";

export interface CTASectionLabels {
  heading: string;
  intro: string;
  points: { title: string; desc: string }[];
  badgesAlt: string;
  /** Texts of the form on the right */
  form?: Partial<CTAFormLabels>;
}

export const CTA_SECTION_LABELS_EN: CTASectionLabels = {
  heading: "Your next step starts here.",
  intro:
    "Ready to optimize your processes, scale your team or enter a new market? One conversation is enough to know if we're the right fit.",
  points: [
    { title: "We act as your internal team", desc: "We are not an agency. We take full responsibility for people and processes." },
    { title: "Scale when you need it", desc: "Hire faster, more flexibly, and without long-term commitments." },
    { title: "Efficiency proven by numbers", desc: "2 500+ projects delivered, 85% of clients in long-term cooperation." },
  ],
  badgesAlt: "Trusted partner since 2015 – Team Stability, Founded in 2015, Business Partner",
};

export interface CTASectionProps {
  submitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
  /** Overrides for built-in texts (defaults: English, see CTA_SECTION_LABELS_EN) */
  labels?: Partial<CTASectionLabels>;
}

export function CTASection({ submitAction, labels }: CTASectionProps) {
  const l = { ...CTA_SECTION_LABELS_EN, ...labels };
  return (
    <section className="bg-primary-blue py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left — messaging */}
          <div className="text-white">
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">
              {l.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              {l.intro}
            </p>

            <ul className="mt-10 flex flex-col gap-6">
              {l.points.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M11.5 3.5L5.25 9.75L2.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold">{item.title}</span>
                    <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-white/10 pt-8">
              <Image
                src="/images/pomerico-trusted-partner-badges.svg"
                alt={l.badgesAlt}
                width={384}
                height={60}
                className="h-auto w-full max-w-sm brightness-0 invert"
                unoptimized
              />
            </div>
          </div>

          {/* Right — form */}
          <div>
            <CTAForm submitAction={submitAction} labels={l.form} />
          </div>
        </div>
      </div>
    </section>
  );
}
