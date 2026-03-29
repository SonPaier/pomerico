import type { IconListItem } from "@pomerico/content";
import { CheckmarkIcon } from "./CheckmarkIcon";

interface IconListProps {
  items: IconListItem[];
  /** "dark" = white text on blue bg, "light" = dark text on white bg */
  variant?: "dark" | "light";
}

export function IconList({ items, variant = "light" }: IconListProps) {
  const textColor = variant === "dark" ? "text-white" : "text-dark";

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckmarkIcon className="mt-1 shrink-0" />
          <span className={textColor}>
            {item.bold && <strong>{item.bold} </strong>}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
