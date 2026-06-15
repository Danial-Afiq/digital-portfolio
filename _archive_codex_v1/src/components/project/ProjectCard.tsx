import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types";
import { Badge } from "../ui/Badge";

function statusTone(status: Project["status"]) {
  if (status === "Completed") return "green";
  if (status === "In Progress") return "cyan";
  if (status === "Coming Soon") return "amber";
  return "slate";
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel panel-hover flex h-full flex-col p-5 md:p-6">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone={statusTone(project.status)}>{project.status}</Badge>
          <Badge>{project.category[0]}</Badge>
        </div>
        <span className="font-mono text-[10px] text-slate-600">{project.id.toUpperCase()}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold tracking-tight text-slate-50">{project.title}</h3>
        {project.subtitle && <p className="mt-1 font-mono text-[11px] text-cyan-300/80">{project.subtitle}</p>}
        <p className="mt-4 text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded border border-slate-700/80 bg-slate-900/70 px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-slate-400">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-7 flex items-center gap-4 border-t border-slate-800 pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider">
        <Link className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200" to={`/projects/${project.id}`}>
          Case study <ArrowUpRight size={13} aria-hidden />
        </Link>
        {project.githubUrl && (
          <a className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200" href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github size={13} aria-hidden /> GitHub
          </a>
        )}
      </div>
    </article>
  );
}
