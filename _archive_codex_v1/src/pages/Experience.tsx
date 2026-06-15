import { Timeline } from "../components/sections/Timeline";
import { PageHeader } from "../components/ui/PageHeader";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <div>
      <PageHeader label="Experience log" title="Work, education, leadership, and the lessons between them." description="A cautious record of the environments that shaped how I communicate, build, and think about risk." />
      <div className="mt-10"><Timeline items={experience} /></div>
    </div>
  );
}
