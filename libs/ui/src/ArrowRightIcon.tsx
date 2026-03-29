interface ArrowRightIconProps {
  className?: string;
  stroke?: string;
}

export function ArrowRightIcon({
  className,
  stroke = "currentColor",
}: ArrowRightIconProps) {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12.5 5.833L0.833 5.833M12.5 5.833L7.5 10.833M12.5 5.833L7.5 0.833"
        stroke={stroke}
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
