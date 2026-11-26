import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-lg px-6 text-center">
        <h1 className="font-heading text-6xl font-bold text-primary-blue">404</h1>
        <p className="mt-4 text-lg text-dark/70">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded bg-primary-red px-6 py-3 font-ui text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-red/90"
          >
            Strona główna
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded border border-primary-blue px-6 py-3 font-ui text-sm font-semibold uppercase tracking-wider text-primary-blue transition-colors hover:bg-primary-blue hover:text-white"
          >
            Nasze usługi
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded border border-primary-blue px-6 py-3 font-ui text-sm font-semibold uppercase tracking-wider text-primary-blue transition-colors hover:bg-primary-blue hover:text-white"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
