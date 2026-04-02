import Image from "next/image";
import { CTAForm } from "./CTAForm";

export interface CTASectionProps {
  submitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
}

export function CTASection({ submitAction }: CTASectionProps) {
  return (
    <section className="bg-primary-blue py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left — messaging */}
          <div className="text-white">
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">
              Your next step starts here.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Ready to reduce costs, scale your team or enter a new market?
              One conversation is enough to know if we&apos;re the right fit.
            </p>

            <ul className="mt-10 flex flex-col gap-6">
              {[
                { title: "We act as your internal team", desc: "We are not an agency. We take full responsibility for people and processes." },
                { title: "Scale when you need it", desc: "Hire faster, more flexibly, and without long-term commitments." },
                { title: "Efficiency proven by numbers", desc: "2 500+ projects delivered, 85% of clients in long-term cooperation." },
              ].map((item) => (
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
                alt="Trusted partner since 2015 – Team Stability, Founded in 2015, Business Partner"
                width={384}
                height={60}
                className="max-w-sm brightness-0 invert"
                unoptimized
              />
            </div>
          </div>

          {/* Right — form */}
          <div>
            <CTAForm submitAction={submitAction} />
          </div>
        </div>
      </div>
    </section>
  );
}
