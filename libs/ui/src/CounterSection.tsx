"use client";

import { useEffect, useRef, useState } from "react";
import type { CounterItem } from "@pomerico/content";

function AnimatedCounter({
  item,
  variant,
}: {
  item: CounterItem;
  variant: "light" | "dark";
}) {
  // Server HTML (and crawlers) get the final value; the count-up from 0 only runs in the browser.
  const [count, setCount] = useState(item.value);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at mount: keep the final value instead of flashing back to 0.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setCount(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = item.duration ?? 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * item.value);

      if (current >= steps) {
        setCount(item.value);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, item.value, item.duration]);

  const display =
    item.value % 1 === 0 ? Math.round(count) : count.toFixed(1);

  const numberColor =
    variant === "dark" ? "text-white" : "text-primary-red";
  const titleColor =
    variant === "dark" ? "text-white/80" : "text-dark/70";

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className={`font-heading text-4xl font-bold lg:text-5xl ${numberColor}`}>
        {display}
        {item.suffix}
      </div>
      <div className={`mt-2 font-ui text-sm ${titleColor}`}>{item.title}</div>
    </div>
  );
}

interface CounterSectionProps {
  items: CounterItem[];
  /** "light" = dark text on white bg, "dark" = white text on blue bg */
  variant?: "light" | "dark";
}

export function CounterSection({ items, variant = "light" }: CounterSectionProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {items.map((item, i) => (
        <AnimatedCounter key={i} item={item} variant={variant} />
      ))}
    </div>
  );
}
