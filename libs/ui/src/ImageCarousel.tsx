"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { ClientLogo } from "@pomerico/content";

interface ImageCarouselProps {
  images: ClientLogo[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [isPlaying, setIsPlaying] = useState(true);
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

  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-6">
        {/* Track with side arrows (same semi-transparent style as the About Us team carousel) */}
        <div className="relative">
          {/* On mobile the track is inset so the two logos sit closer together, clear of the side arrows */}
          <div className="mx-7 overflow-hidden sm:mx-0" ref={emblaRef}>
            <div className="-ml-2 flex">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 basis-1/2 pl-2 sm:basis-1/3 lg:basis-1/5"
                >
                  <div className="flex items-center justify-center py-2">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={220}
                      height={130}
                      sizes="180px"
                      className="max-w-[130px] object-contain sm:max-w-[180px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute top-1/2 z-10 -translate-y-1/2 -left-[22px] inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-gray-300/60 bg-white/50 p-2 text-dark backdrop-blur-sm transition-colors hover:bg-white/80"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute top-1/2 z-10 -translate-y-1/2 -right-[22px] inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-gray-300/60 bg-white/50 p-2 text-dark backdrop-blur-sm transition-colors hover:bg-white/80"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
