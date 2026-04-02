import Image from "next/image";
import type { HeroSection as HeroSectionData } from "@pomerico/content";
import { IconList } from "./IconList";
import { TrustBadges } from "./TrustBadges";

interface HeroSectionProps {
  data: HeroSectionData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="bg-primary-blue text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:py-10">
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
                alt="Trusted partner since 2015"
                width={384}
                height={60}
                className="mt-2 max-w-sm"
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
