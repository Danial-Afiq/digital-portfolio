import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";
import { coverOf, primaryLink } from "../../data/projects";
import { ScreenshotFrame } from "../ui/ScreenshotFrame";
import { ProjectLinkButtons } from "./ProjectLinkButtons";
import { TechChip, StatusBadge, CategoryChip } from "../ui/Chip";

/** Compact card with a thumbnail, for grids (Projects page, Selected on Home). */
export function ProjectCard({ project }: { project: Project }) {
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
        <div className="mb-3 flex items-center justify-between gap-3">
          <CategoryChip label={project.category[0]} />
          <StatusBadge status={project.status} />
        </div>
        <h3 className="mb-1 flex items-center gap-1 text-base font-semibold text-ink">
          {/* Stretched link makes the whole card open the case study */}
          <Link
            to={`/projects/${project.id}`}
            className="before:absolute before:inset-0 before:content-['']"
          >
            {project.title}
          </Link>
          <ArrowUpRight className="h-4 w-4 text-ink-mute transition-colors group-hover:text-accent" />
        </h3>
        <p className="mb-4 flex-1 text-sm text-ink-soft">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </div>
      </div>
    </article>
  );
}
