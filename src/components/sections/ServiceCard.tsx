import Image from "next/image";
import Link from "next/link";
import type { ServiceCard as ServiceCardData } from "@/content/types";
import { ArrowRightIcon } from "./ArrowRightIcon";

interface ServiceCardProps {
  data: ServiceCardData;
}

export function ServiceCard({ data }: ServiceCardProps) {
  const card = (
    <div className="flex h-full flex-col rounded-lg border border-dark/5 bg-white p-6">
      <Image
        src={data.icon}
        alt=""
        width={56}
        height={56}
        className="mb-5 h-auto max-w-[56px]"
      />
      <h3 className="font-heading mb-2 text-base font-bold text-dark">
        {data.heading}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-dark/70">
        {data.description}
      </p>
      {data.href && (
        <span className="mt-4 inline-flex items-center gap-1 font-ui text-sm font-semibold text-primary-blue">
          Learn More
          <ArrowRightIcon />
        </span>
      )}
    </div>
  );

  if (data.href) {
    return (
      <Link href={data.href} className="block rounded-lg transition-colors hover:bg-gray-bg">
        {card}
      </Link>
    );
  }

  return card;
}
