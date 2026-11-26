import Image from "next/image";
import type { HeroSection as HeroSectionData } from "@pomerico/content";
import { IconList } from "./IconList";
import { TrustBadges } from "./TrustBadges";
import { heroFadeStyle } from "./heroFade";

interface HeroSectionProps {
  data: HeroSectionData;
  trustImageAlt?: string;
}

export function HeroSection({
  data,
  trustImageAlt = "Trusted partner since 2015",
}: HeroSectionProps) {
  return (
    // Fades into the light grey breadcrumb bar that follows every hero.
    <section className="pb-44 text-white" style={heroFadeStyle("var(--color-gray-bg)")}>
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
<h1 className="font-heading text-3xl font-bold lg:text-5xl">
              {data.heading}
            </h1>
            <div
              className="text-lg leading-relaxed opacity-90"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            {data.trustImage && (
              <Image
                src={data.trustImage}
                alt={trustImageAlt}
                width={384}
                height={60}
                className="mt-2 h-auto w-full max-w-sm"
                unoptimized
              />
            )}
          </div>
          <div>
            <IconList items={data.iconList} variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
