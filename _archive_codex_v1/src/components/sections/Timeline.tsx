import { Badge } from "../ui/Badge";
import type { ExperienceItem } from "../../types";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-5 before:absolute before:bottom-4 before:left-[13px] before:top-4 before:w-px before:bg-slate-800">
      {items.map((item) => (
        <li key={item.id} className="relative pl-10">
          <span className="absolute left-1.5 top-7 z-10 size-3.5 rounded-full border-2 border-[#05070d] bg-emerald-300 shadow-[0_0_15px_rgba(0,229,168,.45)]" />
          <article className="panel p-5 md:p-7">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <p className="system-label">{item.id} // {item.type}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-1 text-sm text-cyan-300">{item.organization}{item.period ? ` // ${item.period}` : ""}</p>
              </div>
              <Badge tone="slate">Log entry</Badge>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">{item.summary}</p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2"><span className="text-emerald-300">+</span>{highlight}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
