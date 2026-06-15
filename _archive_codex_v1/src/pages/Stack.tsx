import { SkillCluster } from "../components/sections/SkillCluster";
import { PageHeader } from "../components/ui/PageHeader";
import { skillGroups } from "../data/skills";

export function Stack() {
  return (
    <div>
      <PageHeader label="Technical stack" title="Tools grouped by use, not decorated with fake percentages." description="Labels reflect project use, current comfort, and active exploration. They are meant to be useful, not absolute." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => <SkillCluster key={group.group} group={group} />)}
      </div>
    </div>
  );
}
