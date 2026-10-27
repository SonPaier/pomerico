import type { ReactNode } from "react";
import type { ServiceDetail, ServiceDetailIcon } from "@pomerico/content";

/** Outline icons drawn on a 24x24 grid, coloured via currentColor */
const icons: Record<ServiceDetailIcon, ReactNode> = {
  users: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M6.5 20v-1a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v1" />
      <circle cx="5" cy="9.5" r="2" />
      <path d="M1.5 19v-.5a3 3 0 0 1 3-3h.5" />
      <circle cx="19" cy="9.5" r="2" />
      <path d="M22.5 19v-.5a3 3 0 0 0-3-3H19" />
    </>
  ),
  cog: (
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
};

interface ServiceDetailCardProps {
  data: ServiceDetail;
}

export function ServiceDetailCard({ data }: ServiceDetailCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-dark/5 bg-white p-6 shadow-sm sm:flex-row sm:gap-6 sm:p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-primary-red/10 text-primary-red sm:h-14 sm:w-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 sm:h-7 sm:w-7"
          aria-hidden="true"
        >
          {icons[data.icon]}
        </svg>
      </div>
      <div className="max-w-[75ch]">
        <h3 className="font-heading text-lg font-bold text-dark">
          {data.heading}
        </h3>
        {data.paragraphs.map((paragraph, i) => (
          <p key={i} className="mt-3 text-sm leading-relaxed text-dark/70">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
