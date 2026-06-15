import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";
import { coverOf, primaryLink } from "../../data/projects";
import { ScreenshotFrame } from "../ui/ScreenshotFrame";
import { ProjectLinkButtons } from "./ProjectLinkButtons";
import { TechChip, StatusBadge, CategoryChip } from "../ui/Chip";

/** Horizontal row for the Projects page list view. */
export function ProjectListItem({ project }: { project: Project }) {
  const link = primaryLink(project);

  return (
    <article className="card card-hover group relative flex min-h-32 overflow-hidden">
      <div className="w-28 shrink-0 sm:w-52">
        <ScreenshotFrame
          fill
          src={coverOf(project)}
          alt={`${project.title} preview`}
          label={project.title}
          accent={project.accent}
          className="border-r border-line"
        />
      </div>
      {link && (
        <div className="absolute right-3 top-3 z-10">
          <ProjectLinkButtons links={[link]} size="sm" overlay />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-1 p-4 pr-24 sm:p-5 sm:pr-32">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <CategoryChip label={project.category[0]} />
          <StatusBadge status={project.status} />
          {project.year && (
            <span className="font-mono text-[0.7rem] text-ink-mute">{project.year}</span>
          )}
        </div>
        <h3 className="flex items-center gap-1 text-base font-semibold text-ink">
          <Link
            to={`/projects/${project.id}`}
            className="before:absolute before:inset-0 before:content-['']"
          >
            {project.title}
          </Link>
          <ArrowUpRight className="h-4 w-4 text-ink-mute transition-colors group-hover:text-accent" />
        </h3>
        <p className="text-sm text-ink-soft">{project.tagline}</p>
        <div className="mt-1 hidden flex-wrap gap-1.5 sm:flex">
          {project.tech.slice(0, 5).map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </div>
      </div>
    </article>
  );
}
