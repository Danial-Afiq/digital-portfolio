import type { ProjectStatus } from "../../types";

/** Small monospace tech tag. */
export function TechChip({ label }: { label: string }) {
  return (
    <span className="font-mono rounded-md border border-line px-2 py-0.5 text-[0.72rem] text-ink-soft">
      {label}
    </span>
  );
}

const statusColor: Record<ProjectStatus, string> = {
  Completed: "text-accent border-accent/40",
  "In Progress": "text-violet border-violet/40",
  Ongoing: "text-violet border-violet/40",
  Prototype: "text-ink-soft border-line-strong",
  Archived: "text-ink-mute border-line",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`font-mono inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.7rem] ${statusColor[status]}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function CategoryChip({ label }: { label: string }) {
  return (
    <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-mute">
      {label}
    </span>
  );
}
