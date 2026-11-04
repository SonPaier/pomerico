"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Expert } from "@/content/about-us";

interface TeamCarouselProps {
  members: Expert[];
  /** Accessible name of the carousel region, e.g. the section heading. */
  label: string;
  /** Used in the arrow aria-labels: "Previous {navLabel}" / "Next {navLabel}". */
  navLabel: string;
}

/**
 * Horizontal, snap-scrolling row of team cards (see .team-track in
 * globals.css). Shows whole cards only – 1 on mobile, 3 from 768px – so the
 * next card never peeks in. When everything fits (e.g. 3 cards on desktop)
 * it renders like the old 3-column grid: no arrows, not focusable.
 */
export function TeamCarousel({ members, label, navLabel }: TeamCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollable(max > 1);
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);

    // Vertical mouse wheel scrolls the carousel sideways until it reaches
    // an end; then the page scrolls normally.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      const canScroll =
        (e.deltaY > 0 && el.scrollLeft < max - 1) ||
        (e.deltaY < 0 && el.scrollLeft > 1);
      if (!canScroll) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "auto" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
      el.removeEventListener("wheel", onWheel);
    };
  }, [update]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap) });
  };

  return (
    <div className="team-carousel">
      <div
        ref={trackRef}
        className="team-track"
        tabIndex={scrollable ? 0 : undefined}
        role="region"
        aria-roledescription={scrollable ? "carousel" : undefined}
        aria-label={label}
      >
        {members.map((member) => (
          <div
            key={member.name}
            className="overflow-hidden rounded-lg border border-dark/5 bg-white"
          >
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                quality={90}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-dark">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-ui text-sm font-semibold text-primary-red">
                    {member.role}
                  </p>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 shrink-0 text-dark/50 transition-colors hover:text-[#0A66C2]"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
              <p className="mt-3 text-justify text-sm leading-relaxed text-dark/70 hyphens-auto">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Side arrows (client-logos carousel style, on white so they read
          over the photos), vertically centred on the square photos */}
      {scrollable && (
        <>
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            className="team-nav team-nav--prev inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-gray-300/60 bg-white/50 p-2 text-dark backdrop-blur-sm transition-colors hover:bg-white/80 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/50"
            aria-label={`Previous ${navLabel}`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            className="team-nav team-nav--next inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-gray-300/60 bg-white/50 p-2 text-dark backdrop-blur-sm transition-colors hover:bg-white/80 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/50"
            aria-label={`Next ${navLabel}`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
