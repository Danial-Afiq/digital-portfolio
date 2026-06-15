import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        {children && <p className="mt-2 text-ink-soft">{children}</p>}
      </div>
      {action}
    </div>
  );
}
