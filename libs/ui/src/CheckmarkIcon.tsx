export function CheckmarkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="29.3036" height="29.3036" rx="14.6518" fill="#A31226" />
      <path
        d="M20.333 10.9883L12.5187 18.8026L8.9668 15.2506"
        stroke="white"
        strokeWidth="2.13117"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
