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

const CATEGORIES: Category[] = [
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
        description: "Linkedin set this cookie for storing visitor's consent regarding using cookies for non-essential purposes.",
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
        name: "_ga_*",
        duration: "1 year 1 month 4 days",
        description: "Google Analytics sets this cookie to store and count page views.",
      },
      {
        name: "_ga",
        duration: "1 year 1 month 4 days",
        description:
          "Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.",
      },
      {
        name: "_fbp",
        duration: "3 months",
        description:
          "Facebook sets this cookie to display advertisements when either on Facebook or on a digital platform powered by Facebook advertising after visiting the website.",
      },
      {
        name: "_gat_UA-*",
        duration: "1 minute",
        description: "Google Analytics sets this cookie for user behaviour tracking.",
      },
      {
        name: "_hjSessionUser_*",
        duration: "1 year",
        description:
          "Hotjar sets this cookie to ensure data from subsequent visits to the same site is attributed to the same user ID, which persists in the Hotjar User ID, which is unique to that site.",
      },
      {
        name: "_hjSession_*",
        duration: "1 hour",
        description:
          "Hotjar sets this cookie to ensure data from subsequent visits to the same site is attributed to the same user ID, which persists in the Hotjar User ID, which is unique to that site.",
      },
    ],
  },
  {
    key: "performance",
    title: "Performance",
    description:
      "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
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
        description: "LinkedIn sets this cookie from LinkedIn share buttons and ad tags to recognize browser IDs.",
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

function writeConsent(categories: Categories) {
  if (typeof window === "undefined") return;
  const payload: StoredConsent = { v: 1, ts: Date.now(), categories };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent("pomerico:consent-changed", { detail: categories }));
}

export function CookieConsent() {
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
          role="region"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 z-[9998] mx-auto max-w-md rounded-lg border border-dark/10 bg-white p-5 shadow-2xl sm:right-auto"
        >
          <p className="font-heading text-base font-semibold text-dark">Customise Consent Preferences</p>
          <p className="mt-2 text-sm text-dark/70">
            We use cookies to help you navigate efficiently and perform certain functions. You will find detailed
            information about all cookies under each consent category below.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPrefs(true)}
              className="rounded border border-primary-blue px-4 py-2 text-sm font-semibold text-primary-blue transition hover:bg-primary-blue/5"
            >
              Customise
            </button>
            <button
              type="button"
              onClick={rejectAll}
              className="rounded border border-dark/20 px-4 py-2 text-sm font-semibold text-dark/80 transition hover:bg-dark/5"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="rounded bg-primary-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-blue/90"
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      {showPrefs && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark/50 p-4" role="dialog" aria-modal="true" aria-label="Customise consent preferences">
          <div className="flex max-h-[90vh] w-full max-w-2xl flex-col rounded-lg bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-dark/10 p-5">
              <div>
                <h2 className="font-heading text-xl font-bold text-dark">Customise Consent Preferences</h2>
                <p className="mt-2 text-sm text-dark/70">
                  We use cookies to help you navigate efficiently and perform certain functions. You will find detailed
                  information about all cookies under each consent category below. The cookies that are categorised as
                  &quot;Necessary&quot; are stored on your browser as they are essential for enabling the basic functionalities
                  of the site. We also use third-party cookies that help us analyse how you use this website, store your
                  preferences, and provide the content and advertisements that are relevant to you. These cookies will only
                  be stored in your browser with your prior consent. You can choose to enable or disable some or all of
                  these cookies but disabling some of them may affect your browsing experience.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => {
                  setShowPrefs(false);
                  if (!readConsent()) setShowNotice(true);
                }}
                className="ml-4 shrink-0 rounded p-1 text-dark/60 transition hover:bg-dark/5 hover:text-dark"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <ul className="space-y-3">
                {CATEGORIES.map((cat) => {
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
                          <svg className={`h-4 w-4 transition ${isOpen ? "rotate-90" : ""}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" /></svg>
                          <span className="font-heading text-base font-semibold text-dark">{cat.title}</span>
                        </button>
                        {cat.alwaysActive ? (
                          <span className="text-xs font-semibold uppercase tracking-wide text-primary-blue">Always Active</span>
                        ) : (
                          <button
                            type="button"
                            role="switch"
                            aria-checked={enabled}
                            aria-label={`Toggle ${cat.title}`}
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
                            <p className="mt-3 text-sm italic text-dark/50">No cookies to display.</p>
                          ) : (
                            <div className="mt-3 overflow-x-auto">
                              <table className="w-full border-collapse text-xs">
                                <thead>
                                  <tr className="bg-dark/5">
                                    <th className="border border-dark/15 px-2 py-1.5 text-left font-semibold">Cookie</th>
                                    <th className="border border-dark/15 px-2 py-1.5 text-left font-semibold">Duration</th>
                                    <th className="border border-dark/15 px-2 py-1.5 text-left font-semibold">Description</th>
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

            <div className="flex flex-wrap items-center justify-end gap-2 border-t border-dark/10 p-5">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded border border-dark/20 px-4 py-2 text-sm font-semibold text-dark/80 transition hover:bg-dark/5"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={savePrefs}
                className="rounded border border-primary-blue px-4 py-2 text-sm font-semibold text-primary-blue transition hover:bg-primary-blue/5"
              >
                Save My Preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded bg-primary-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-blue/90"
              >
                Accept All
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
