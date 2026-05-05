"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pomerico-cookie-consent";

type Categories = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
};

type StoredConsent = {
  v: 1;
  ts: number;
  categories: Categories;
};

type CookieRow = { name: string; duration: string; description: string };

type Category = {
  key: keyof Categories;
  title: string;
  description: string;
  alwaysActive?: boolean;
  cookies: CookieRow[];
};

type ConsentTexts = {
  title: string;
  intro: string;
  details: string;
  acceptAll: string;
  rejectAll: string;
  customise: string;
  savePrefs: string;
  alwaysActive: string;
  noCookies: string;
  cookieCol: string;
  durationCol: string;
  descriptionCol: string;
  close: string;
  ariaRegion: string;
  ariaDialog: string;
  preferencesLabel: string;
};

const TEXTS_EN: ConsentTexts = {
  title: "We value your privacy",
  intro:
    "We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic. By clicking “Accept All”, you consent to our use of cookies.",
  details:
    "Cookies categorised as “Necessary” are stored on your browser as they are essential for enabling the basic functionalities of the site. We also use third-party cookies that help us analyse how you use this website, store your preferences, and provide content and advertisements relevant to you. These cookies will only be stored in your browser with your prior consent.",
  acceptAll: "Accept All",
  rejectAll: "Reject All",
  customise: "Customise",
  savePrefs: "Save My Preferences",
  alwaysActive: "Always Active",
  noCookies: "No cookies to display.",
  cookieCol: "Cookie",
  durationCol: "Duration",
  descriptionCol: "Description",
  close: "Close",
  ariaRegion: "Cookie consent",
  ariaDialog: "Customise consent preferences",
  preferencesLabel: "Consent Preferences",
};

const TEXTS_PL: ConsentTexts = {
  title: "Szanujemy Twoją prywatność",
  intro:
    "Używamy plików cookie, aby ułatwić nawigację, dostarczać spersonalizowane treści i analizować ruch. Klikając „Akceptuję wszystkie”, wyrażasz zgodę na używanie plików cookie.",
  details:
    "Pliki cookie oznaczone jako „Niezbędne” są zapisywane na Twoim urządzeniu, ponieważ są konieczne do działania podstawowych funkcji strony. Używamy również plików cookie podmiotów trzecich, które pomagają nam analizować, jak korzystasz z tej strony, zapamiętywać Twoje preferencje oraz dostarczać odpowiednie treści i reklamy. Te pliki cookie będą przechowywane w Twojej przeglądarce wyłącznie po wyrażeniu zgody.",
  acceptAll: "Akceptuję wszystkie",
  rejectAll: "Odrzuć wszystkie",
  customise: "Dostosuj",
  savePrefs: "Zapisz preferencje",
  alwaysActive: "Zawsze aktywne",
  noCookies: "Brak plików cookie.",
  cookieCol: "Cookie",
  durationCol: "Czas",
  descriptionCol: "Opis",
  close: "Zamknij",
  ariaRegion: "Zgoda na cookie",
  ariaDialog: "Dostosuj preferencje zgód",
  preferencesLabel: "Preferencje zgód",
};

const CATEGORIES_EN: Category[] = [
  {
    key: "necessary",
    title: "Necessary",
    alwaysActive: true,
    description:
      "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
    cookies: [
      {
        name: "pomerico-cookie-consent",
        duration: "1 year",
        description:
          "Pomerico sets this cookie to remember users' consent preferences so that their preferences are respected on subsequent visits to this site. It does not collect or store any personal information about the site visitors.",
      },
    ],
  },
  {
    key: "functional",
    title: "Functional",
    description:
      "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
    cookies: [
      {
        name: "li_gc",
        duration: "6 months",
        description: "LinkedIn sets this cookie for storing visitor's consent regarding using cookies for non-essential purposes.",
      },
      {
        name: "lidc",
        duration: "1 day",
        description: "LinkedIn sets the lidc cookie to facilitate data center selection.",
      },
    ],
  },
  {
    key: "analytics",
    title: "Analytics",
    description:
      "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    cookies: [
      {
        name: "_ga",
        duration: "1 year 1 month 4 days",
        description:
          "Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.",
      },
      {
        name: "_ga_*",
        duration: "1 year 1 month 4 days",
        description: "Google Analytics sets this cookie to store and count page views.",
      },
      {
        name: "_gid",
        duration: "1 day",
        description: "Google Analytics sets this cookie to store information on how visitors use a website.",
      },
    ],
  },
  {
    key: "performance",
    title: "Performance",
    description:
      "Performance cookies are used to understand and analyse the key performance indexes of the website, which helps in delivering a better user experience for visitors.",
    cookies: [],
  },
  {
    key: "advertisement",
    title: "Advertisement",
    description:
      "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.",
    cookies: [
      {
        name: "bcookie",
        duration: "1 year",
        description: "LinkedIn sets this cookie from LinkedIn share buttons and ad tags to recognise browser IDs.",
      },
    ],
  },
];

const CATEGORIES_PL: Category[] = [
  {
    key: "necessary",
    title: "Niezbędne",
    alwaysActive: true,
    description:
      "Niezbędne pliki cookie są wymagane do działania podstawowych funkcji strony, takich jak bezpieczne logowanie czy zapamiętywanie preferencji zgód. Te pliki nie przechowują danych osobowych.",
    cookies: [
      {
        name: "pomerico-cookie-consent",
        duration: "1 rok",
        description:
          "Pomerico używa tego pliku do zapamiętania Twoich preferencji zgód, dzięki czemu będą respektowane przy kolejnych wizytach. Nie zbiera ani nie przechowuje danych osobowych.",
      },
    ],
  },
  {
    key: "functional",
    title: "Funkcjonalne",
    description:
      "Funkcjonalne pliki cookie pozwalają na realizację określonych funkcji, np. udostępnianie treści w mediach społecznościowych, zbieranie opinii i obsługę narzędzi podmiotów trzecich.",
    cookies: [
      {
        name: "li_gc",
        duration: "6 miesięcy",
        description: "LinkedIn używa tego pliku do zapamiętania zgody odwiedzających na pliki cookie nieprzeznaczone do funkcji niezbędnych.",
      },
      {
        name: "lidc",
        duration: "1 dzień",
        description: "LinkedIn używa pliku lidc do ułatwienia wyboru centrum danych.",
      },
    ],
  },
  {
    key: "analytics",
    title: "Analityczne",
    description:
      "Analityczne pliki cookie służą do zrozumienia, jak użytkownicy korzystają ze strony. Pomagają w zbieraniu danych o liczbie odwiedzających, współczynniku odrzuceń, źródle ruchu itp.",
    cookies: [
      {
        name: "_ga",
        duration: "1 rok 1 miesiąc 4 dni",
        description:
          "Google Analytics używa tego pliku do obliczania danych o użytkownikach, sesjach i kampaniach oraz śledzenia korzystania ze strony. Plik przechowuje informacje anonimowo i przypisuje losowo wygenerowany numer w celu rozpoznawania unikalnych użytkowników.",
      },
      {
        name: "_ga_*",
        duration: "1 rok 1 miesiąc 4 dni",
        description: "Google Analytics używa tego pliku do przechowywania i zliczania odsłon strony.",
      },
      {
        name: "_gid",
        duration: "1 dzień",
        description: "Google Analytics używa tego pliku do przechowywania informacji o tym, jak użytkownicy korzystają ze strony.",
      },
    ],
  },
  {
    key: "performance",
    title: "Wydajnościowe",
    description:
      "Pliki wydajnościowe pomagają mierzyć i analizować kluczowe wskaźniki wydajności strony, co przekłada się na lepsze doświadczenie użytkowników.",
    cookies: [],
  },
  {
    key: "advertisement",
    title: "Reklamowe",
    description:
      "Reklamowe pliki cookie pozwalają na dostarczanie spersonalizowanych reklam w oparciu o wcześniej odwiedzane strony oraz analizę skuteczności kampanii reklamowych.",
    cookies: [
      {
        name: "bcookie",
        duration: "1 rok",
        description: "LinkedIn używa tego pliku do rozpoznawania identyfikatorów przeglądarek z przycisków udostępniania i tagów reklam.",
      },
    ],
  },
];

const DEFAULT_OPT_IN: Categories = {
  necessary: true,
  functional: true,
  analytics: true,
  performance: true,
  advertisement: true,
};

const DEFAULT_OPT_OUT: Categories = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  advertisement: false,
};

function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.v !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

type GtagFn = (...args: unknown[]) => void;
type WindowWithGtag = Window & { gtag?: GtagFn; dataLayer?: unknown[] };

function pushConsentUpdate(categories: Categories) {
  if (typeof window === "undefined") return;
  const w = window as WindowWithGtag;
  w.dataLayer = w.dataLayer || [];
  const gtag: GtagFn =
    w.gtag ??
    ((...args: unknown[]) => {
      w.dataLayer!.push(args);
    });
  w.gtag = gtag;
  gtag("consent", "update", {
    ad_storage: categories.advertisement ? "granted" : "denied",
    ad_user_data: categories.advertisement ? "granted" : "denied",
    ad_personalization: categories.advertisement ? "granted" : "denied",
    analytics_storage: categories.analytics ? "granted" : "denied",
    functionality_storage: categories.functional ? "granted" : "denied",
    personalization_storage: categories.functional ? "granted" : "denied",
    security_storage: "granted",
  });
  w.dataLayer.push({ event: "consent_update", consent: categories });
}

function writeConsent(categories: Categories) {
  if (typeof window === "undefined") return;
  const payload: StoredConsent = { v: 1, ts: Date.now(), categories };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  pushConsentUpdate(categories);
  window.dispatchEvent(new CustomEvent("pomerico:consent-changed", { detail: categories }));
}

export function CookieConsent({ locale = "en" }: { locale?: "en" | "pl" } = {}) {
  const t = locale === "pl" ? TEXTS_PL : TEXTS_EN;
  const categories = locale === "pl" ? CATEGORIES_PL : CATEGORIES_EN;

  const [mounted, setMounted] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [openCat, setOpenCat] = useState<keyof Categories | null>("necessary");
  const [selection, setSelection] = useState<Categories>(DEFAULT_OPT_OUT);

  useEffect(() => {
    setMounted(true);
    const existing = readConsent();
    if (existing) {
      setSelection(existing.categories);
    } else {
      setShowNotice(true);
    }
    const handler = () => {
      setShowPrefs(true);
      const current = readConsent();
      setSelection(current?.categories ?? DEFAULT_OPT_OUT);
    };
    window.addEventListener("pomerico:open-consent-prefs", handler);
    return () => window.removeEventListener("pomerico:open-consent-prefs", handler);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const lock = showNotice || showPrefs;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted, showNotice, showPrefs]);

  if (!mounted) return null;

  const acceptAll = () => {
    writeConsent(DEFAULT_OPT_IN);
    setSelection(DEFAULT_OPT_IN);
    setShowNotice(false);
    setShowPrefs(false);
  };

  const rejectAll = () => {
    writeConsent(DEFAULT_OPT_OUT);
    setSelection(DEFAULT_OPT_OUT);
    setShowNotice(false);
    setShowPrefs(false);
  };

  const savePrefs = () => {
    writeConsent(selection);
    setShowNotice(false);
    setShowPrefs(false);
  };

  const toggle = (key: keyof Categories) => {
    if (key === "necessary") return;
    setSelection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {showNotice && !showPrefs && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-dark/60 px-4 py-6 backdrop-blur-sm"
          role="region"
          aria-label={t.ariaRegion}
        >
          <div className="w-full max-w-md rounded-lg border border-dark/10 bg-white p-6 shadow-2xl sm:p-7">
            <p className="font-heading text-lg font-semibold text-dark sm:text-xl">{t.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-dark/70">{t.intro}</p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={acceptAll}
                className="w-full rounded bg-primary-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-blue/90 sm:w-auto sm:flex-1"
              >
                {t.acceptAll}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="w-full rounded border border-dark/20 px-4 py-2.5 text-sm font-semibold text-dark/80 transition hover:bg-dark/5 sm:w-auto sm:flex-1"
              >
                {t.rejectAll}
              </button>
              <button
                type="button"
                onClick={() => setShowPrefs(true)}
                className="w-full rounded border border-primary-blue px-4 py-2.5 text-sm font-semibold text-primary-blue transition hover:bg-primary-blue/5 sm:w-auto sm:flex-1"
              >
                {t.customise}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPrefs && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={t.ariaDialog}
        >
          <div className="flex max-h-[90vh] w-full max-w-2xl flex-col rounded-lg bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-dark/10 p-5">
              <div className="min-w-0">
                <h2 className="font-heading text-lg font-bold text-dark sm:text-xl">{t.title}</h2>
                <p className="mt-2 text-sm text-dark/70">{t.details}</p>
              </div>
              <button
                type="button"
                aria-label={t.close}
                onClick={() => {
                  setShowPrefs(false);
                  if (!readConsent()) setShowNotice(true);
                }}
                className="shrink-0 rounded p-1 text-dark/60 transition hover:bg-dark/5 hover:text-dark"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <ul className="space-y-3">
                {categories.map((cat) => {
                  const isOpen = openCat === cat.key;
                  const enabled = selection[cat.key];
                  return (
                    <li key={cat.key} className="rounded border border-dark/10">
                      <div className="flex items-center justify-between gap-3 p-3">
                        <button
                          type="button"
                          onClick={() => setOpenCat(isOpen ? null : cat.key)}
                          className="flex flex-1 items-center gap-2 text-left"
                          aria-expanded={isOpen}
                        >
                          <svg className={`h-4 w-4 shrink-0 transition ${isOpen ? "rotate-90" : ""}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" /></svg>
                          <span className="font-heading text-base font-semibold text-dark">{cat.title}</span>
                        </button>
                        {cat.alwaysActive ? (
                          <span className="text-xs font-semibold uppercase tracking-wide text-primary-blue">{t.alwaysActive}</span>
                        ) : (
                          <button
                            type="button"
                            role="switch"
                            aria-checked={enabled}
                            aria-label={cat.title}
                            onClick={() => toggle(cat.key)}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition ${enabled ? "bg-primary-blue" : "bg-dark/20"}`}
                          >
                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ${enabled ? "translate-x-5" : "translate-x-0"}`} />
                          </button>
                        )}
                      </div>
                      {isOpen && (
                        <div className="border-t border-dark/10 p-3">
                          <p className="text-sm text-dark/70">{cat.description}</p>
                          {cat.cookies.length === 0 ? (
                            <p className="mt-3 text-sm italic text-dark/50">{t.noCookies}</p>
                          ) : (
                            <div className="mt-3 overflow-x-auto">
                              <table className="w-full border-collapse text-xs">
                                <thead>
                                  <tr className="bg-dark/5">
                                    <th className="border border-dark/15 px-2 py-1.5 text-left font-semibold">{t.cookieCol}</th>
                                    <th className="border border-dark/15 px-2 py-1.5 text-left font-semibold">{t.durationCol}</th>
                                    <th className="border border-dark/15 px-2 py-1.5 text-left font-semibold">{t.descriptionCol}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {cat.cookies.map((c) => (
                                    <tr key={c.name}>
                                      <td className="border border-dark/15 px-2 py-1.5 font-mono">{c.name}</td>
                                      <td className="border border-dark/15 px-2 py-1.5 whitespace-nowrap">{c.duration}</td>
                                      <td className="border border-dark/15 px-2 py-1.5">{c.description}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-2 border-t border-dark/10 p-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="w-full rounded border border-dark/20 px-4 py-2 text-sm font-semibold text-dark/80 transition hover:bg-dark/5 sm:w-auto"
              >
                {t.rejectAll}
              </button>
              <button
                type="button"
                onClick={savePrefs}
                className="w-full rounded border border-primary-blue px-4 py-2 text-sm font-semibold text-primary-blue transition hover:bg-primary-blue/5 sm:w-auto"
              >
                {t.savePrefs}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="w-full rounded bg-primary-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-blue/90 sm:w-auto"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function ConsentPreferencesButton({ className, label = "Consent Preferences" }: { className?: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("pomerico:open-consent-prefs"))}
      className={className ?? "text-sm text-dark/70 underline-offset-4 transition hover:text-primary-blue hover:underline"}
    >
      {label}
    </button>
  );
}
