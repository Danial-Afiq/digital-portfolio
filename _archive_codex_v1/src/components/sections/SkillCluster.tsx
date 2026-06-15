import type { SkillGroup, SkillLevel } from "../../types";
import { Badge } from "../ui/Badge";

function levelTone(level: SkillLevel) {
  if (level === "Comfortable") return "green";
  if (level === "Used in projects") return "cyan";
  if (level === "Learning") return "amber";
  return "violet";
}

export function SkillCluster({ group }: { group: SkillGroup }) {
  return (
    <article className="panel p-5 md:p-6">
      <p className="system-label">Skill cluster</p>
      <h2 className="mt-3 text-xl font-semibold text-slate-50">{group.group}</h2>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{group.description}</p>
      <ul className="mt-6 space-y-3">
        {group.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-3 border-t border-slate-800 pt-3">
            <span className="text-sm text-slate-200">{skill.name}</span>
            <Badge tone={levelTone(skill.level)}>{skill.level}</Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}
