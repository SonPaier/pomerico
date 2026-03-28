import { CTAForm } from "./CTAForm";

export function CTASection() {
  return (
    <section className="bg-primary-blue py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left — messaging */}
          <div className="text-white">
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">
              Your next step starts here.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Ready to optimize your processes, scale your team or enter a new market?
              One conversation is enough to know if we&apos;re the right fit.
            </p>

            <ul className="mt-10 flex flex-col gap-5">
              {[
                "We act as your internal team",
                "Scale when you need it",
                "Efficiency proven by numbers",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M11.5 3.5L5.25 9.75L2.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-10 border-t border-white/10 pt-8">
              <div className="text-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mx-auto text-white" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
                </svg>
                <p className="mt-2 font-ui text-xs font-semibold uppercase tracking-wider text-white/70">Team Stability</p>
              </div>
              <div className="text-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mx-auto text-white" aria-hidden="true">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor" />
                </svg>
                <p className="mt-2 font-ui text-xs font-semibold uppercase tracking-wider text-white/70">Founded in 2015</p>
              </div>
              <div className="text-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mx-auto text-white" aria-hidden="true">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="currentColor" />
                </svg>
                <p className="mt-2 font-ui text-xs font-semibold uppercase tracking-wider text-white/70">Trusted Partner</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <CTAForm />
          </div>
        </div>
      </div>
    </section>
  );
}
