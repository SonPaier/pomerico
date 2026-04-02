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
          <p className="mb-2 font-ui text-xs font-bold uppercase tracking-widest text-dark/50">
            {card.model}
          </p>
          <p className="mb-1.5 text-sm font-bold leading-snug text-dark">
            {card.quote}
          </p>
          <p className="text-xs leading-relaxed text-dark/70">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
