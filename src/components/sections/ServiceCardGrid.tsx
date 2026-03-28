import type { ServiceCard as ServiceCardData } from "@/content/types";
import { ServiceCard } from "./ServiceCard";

interface ServiceCardGridProps {
  cards: ServiceCardData[];
  columns?: 2 | 3 | 4;
}

export function ServiceCardGrid({ cards, columns = 3 }: ServiceCardGridProps) {
  const gridCols =
    columns === 2
      ? "grid gap-8 sm:grid-cols-2"
      : columns === 4
        ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridCols}>
      {cards.map((card, i) => (
        <ServiceCard key={i} data={card} />
      ))}
    </div>
  );
}
