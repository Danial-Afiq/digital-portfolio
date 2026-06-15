import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "green" | "cyan" | "violet" | "amber" | "slate";
};

const tones = {
  green: "border-emerald-400/25 bg-emerald-400/8 text-emerald-300",
  cyan: "border-cyan-400/25 bg-cyan-400/8 text-cyan-300",
  violet: "border-violet-400/25 bg-violet-400/8 text-violet-300",
  amber: "border-amber-400/25 bg-amber-400/8 text-amber-300",
  slate: "border-slate-500/25 bg-slate-500/8 text-slate-300",
};

export function Badge({ children, tone = "slate" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider ${tones[tone]}`}>
      {children}
    </span>
  );
}
