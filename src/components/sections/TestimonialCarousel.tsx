"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { Testimonial } from "@/content/types";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  heading?: string;
}

export function TestimonialCarousel({
  testimonials,
  heading = "Executive Voices",
}: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", loop: true },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;
    if (isPlaying) {
      autoplay.stop();
      setIsPlaying(false);
    } else {
      autoplay.play();
      setIsPlaying(true);
    }
  }, [emblaApi, isPlaying]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-primary-blue">
          {heading}
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 shrink-0 basis-full px-4">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots + pause */}
        {testimonials.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex
                    ? "w-8 bg-primary-red"
                    : "w-2 bg-dark/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
