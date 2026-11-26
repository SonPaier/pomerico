"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Links to /contact#book-consultation first land at the top of the contact
// page, then glide down to the form. The hash deliberately matches no element
// id, so the browser doesn't jump straight there on its own.
const CONTACT_PATH = "/contact";
const TRIGGER_HASH = "#book-consultation";
const FORM_ID = "consultation-form";
const DELAY_MS = 500;

function isTriggerLink(link: HTMLAnchorElement) {
  const url = new URL(link.href, window.location.href);
  return url.pathname === CONTACT_PATH && url.hash === TRIGGER_HASH;
}

function scrollToForm() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  document
    .getElementById(FORM_ID)
    ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

export function ConsultationScroll() {
  const pathname = usePathname();
  const pending = useRef(false);

  // Direct visit to /contact#book-consultation (typed or opened in a new tab).
  useEffect(() => {
    if (window.location.hash === TRIGGER_HASH) pending.current = true;
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!link || !isTriggerLink(link)) return;
      if (window.location.pathname === CONTACT_PATH) {
        // Already on the contact page: just glide down.
        event.preventDefault();
        scrollToForm();
      } else {
        pending.current = true;
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (pathname !== CONTACT_PATH || !pending.current) return;
    pending.current = false;
    const timer = window.setTimeout(scrollToForm, DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
