export interface DecisionCard {
  icon: string;
  model: string;
  quote: string;
  description: string;
  highlighted?: boolean;
}

export interface DecisionCardsProps {
  cards: DecisionCard[];
}

export function DecisionCards({ cards }: DecisionCardsProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`rounded border bg-white p-5 shadow-sm ${
            card.highlighted
              ? "border-primary-red shadow-md"
              : "border-dark/5"
          } ${!card.highlighted ? "" : ""}`}
        >
          <span className="mb-3 block text-2xl">{card.icon}</span>
          <span
            className={`mb-2 inline-block rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
              card.highlighted
                ? "bg-dark text-primary-red"
                : "bg-dark/5 text-dark/60"
            }`}
          >
            {card.model}
          </span>
          <p className="mb-1.5 text-sm font-bold leading-snug text-dark">
            {card.quote}
          </p>
          <p className="text-xs leading-relaxed text-dark/60">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
