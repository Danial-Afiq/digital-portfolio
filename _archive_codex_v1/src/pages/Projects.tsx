import { useState } from "react";
import { ProjectCard } from "../components/project/ProjectCard";
import { PageHeader } from "../components/ui/PageHeader";
import { projectFilters, projects } from "../data/projects";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((project) => project.category.includes(filter));

  return (
    <div>
      <PageHeader label="Project registry" title="Practical builds and honest case studies." description="Filter the registry by domain, then open a case study for the context and engineering decisions behind the work." />
      <div className="my-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={`rounded-lg border px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider transition ${
              filter === item ? "border-emerald-300/50 bg-emerald-300/10 text-emerald-300" : "border-slate-700 bg-slate-900/60 text-slate-400 hover:text-slate-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-slate-500">{filtered.length} modules found</p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  );
}
