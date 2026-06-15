import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({ label, title, description, action }: SectionHeadingProps) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="system-label mb-3">{label}</p>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">{title}</h2>
        {description && <p className="mt-3 leading-7 text-slate-400">{description}</p>}
      </div>
      {action}
    </div>
  );
}
