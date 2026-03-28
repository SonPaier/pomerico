"use client";

import { useEffect, useRef, useState } from "react";
import type { CounterItem } from "@/content/types";

function AnimatedCounter({
  item,
  variant,
}: {
  item: CounterItem;
  variant: "light" | "dark";
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

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
