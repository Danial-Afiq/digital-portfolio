import { skillGroups } from "../../data/skills";

export function SkillChips() {
  return (
    <div className="space-y-4">
      {skillGroups.map((group) => (
        <div key={group.group} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="font-mono w-40 shrink-0 text-sm uppercase tracking-wider text-ink-mute">
            {group.group}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-ink-soft"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
