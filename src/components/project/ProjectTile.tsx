import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";
import { coverOf, primaryLink } from "../../data/projects";
import { ScreenshotFrame } from "../ui/ScreenshotFrame";
import { ProjectLinkButtons } from "./ProjectLinkButtons";
import { TechChip, StatusBadge } from "../ui/Chip";

/** Large, screenshot-forward tile used in the Featured Work grid. */
export function ProjectTile({ project }: { project: Project }) {
  const link = primaryLink(project);

  return (
    <article className="card card-hover group relative flex flex-col overflow-hidden">
      <ScreenshotFrame
        src={coverOf(project)}
        alt={`${project.title} preview`}
        label={project.title}
        accent={project.accent}
        className="border-b border-line"
      />
      {link && (
        <div className="absolute right-3 top-3 z-10">
          <ProjectLinkButtons links={[link]} size="sm" overlay />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">
            <Link
              to={`/projects/${project.id}`}
              className="before:absolute before:inset-0 before:content-['']"
            >
              {project.title}
            </Link>
          </h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="mb-4 flex-1 text-sm text-ink-soft">{project.tagline}</p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent-soft">
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
