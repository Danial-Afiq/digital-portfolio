import { Activity, Cloud, Code2, GraduationCap, ShieldCheck, TerminalSquare } from "lucide-react";

const icons = [Activity, Code2, GraduationCap, ShieldCheck, Cloud, TerminalSquare];

type StatusCardProps = {
  item: { label: string; value: string; detail: string; tone: string };
  index: number;
};

export function StatusCard({ item, index }: StatusCardProps) {
  const Icon = icons[index % icons.length];
  return (
    <article className="panel panel-hover p-5">
      <div className="mb-8 flex items-center justify-between">
        <Icon size={18} className="text-emerald-300" aria-hidden />
        <span className={`size-2 rounded-full ${item.tone === "amber" ? "bg-amber-300" : item.tone === "violet" ? "bg-violet-300" : item.tone === "cyan" ? "bg-cyan-300" : "bg-emerald-300"}`} />
      </div>
      <p className="system-label text-slate-500">{item.label}</p>
      <h3 className="mt-2 text-sm font-semibold text-slate-100">{item.value}</h3>
      <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
    </article>
  );
}
