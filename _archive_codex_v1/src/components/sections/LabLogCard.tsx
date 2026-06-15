import { FileText, LockKeyhole } from "lucide-react";
import type { LabEntry } from "../../types";
import { Badge } from "../ui/Badge";

export function LabLogCard({ entry }: { entry: LabEntry }) {
  const tone = entry.status === "Published" ? "green" : entry.status === "Draft" ? "cyan" : "amber";
  return (
    <article className="panel panel-hover p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-10 place-items-center rounded-lg border border-slate-700 bg-slate-900 text-emerald-300">
          <FileText size={18} aria-hidden />
        </div>
        <Badge tone={tone}>{entry.status}</Badge>
      </div>
      <p className="system-label mt-6">{entry.id} // {entry.category}</p>
      <h2 className="mt-3 text-lg font-semibold text-slate-50">{entry.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">{entry.summary}</p>
      {entry.safeNote && (
        <p className="mt-4 flex gap-2 border-l border-amber-300/40 pl-3 text-xs leading-5 text-amber-200/70">
          <LockKeyhole size={14} className="mt-0.5 shrink-0" aria-hidden /> {entry.safeNote}
        </p>
      )}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </div>
    </article>
  );
}
