import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ActionLink } from "../components/ui/ActionLink";
import { Badge } from "../components/ui/Badge";
import { projects } from "../data/projects";

function DetailBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="border-t border-slate-800 pt-7">
      <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="text-cyan-300">+</span>{item}</li>)}
      </ul>
    </section>
  );
}

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <article>
      <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-emerald-300">
        <ArrowLeft size={15} aria-hidden /> Back to registry
      </Link>
      <header className="mt-8 grid gap-8 border-b border-slate-800 pb-10 lg:grid-cols-[1fr_18rem]">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="green">{project.status}</Badge>
            {project.category.map((item) => <Badge key={item}>{item}</Badge>)}
          </div>
          <p className="system-label mt-8">Case study // {project.id}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-50 md:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">{project.summary}</p>
        </div>
        <aside className="panel h-fit p-5" aria-label="Project metadata">
          <p className="system-label">Module metadata</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div><dt className="font-mono text-[9px] uppercase tracking-widest text-slate-600">Status</dt><dd className="mt-1 text-slate-200">{project.status}</dd></div>
            <div><dt className="font-mono text-[9px] uppercase tracking-widest text-slate-600">Stack</dt><dd className="mt-1 leading-6 text-slate-400">{project.tech.join(" // ")}</dd></div>
          </dl>
          <div className="mt-6 flex flex-col gap-2">
            <ActionLink href={project.githubUrl} icon={Github} external>GitHub</ActionLink>
            <ActionLink href={project.demoUrl} icon={ExternalLink} external>Demo</ActionLink>
          </div>
        </aside>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="panel space-y-8 p-6 md:p-9">
          {project.problem && <section><p className="system-label">01 / Problem and context</p><p className="mt-4 max-w-3xl leading-8 text-slate-400">{project.problem}</p></section>}
          {project.role && <section className="border-t border-slate-800 pt-7"><h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300">02 / My role</h2><p className="mt-4 max-w-3xl leading-8 text-slate-400">{project.role}</p></section>}
          <DetailBlock title="03 / Key features" items={project.highlights} />
          <DetailBlock title="04 / Security and engineering decisions" items={project.securityAngle} />
          <DetailBlock title="05 / Challenges" items={project.challenges} />
          {project.outcome && <section className="border-t border-slate-800 pt-7"><h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300">06 / Outcome</h2><p className="mt-4 max-w-3xl leading-8 text-slate-400">{project.outcome}</p></section>}
          <DetailBlock title="07 / What I learned" items={project.lessons} />
          <DetailBlock title="08 / What I would improve" items={project.improvements} />
        </div>
        <aside className="space-y-5">
          <div className="panel p-5">
            <p className="system-label">Media bay</p>
            <div className="mt-4 grid aspect-[4/3] place-items-center rounded-lg border border-dashed border-slate-700 bg-slate-950/50 p-5 text-center font-mono text-[10px] uppercase tracking-widest text-slate-600">
              TODO: add project screenshots
            </div>
          </div>
          <div className="panel border-amber-300/20 p-5">
            <p className="system-label text-amber-300">Public safety note</p>
            <p className="mt-3 text-xs leading-6 text-slate-400">Sensitive details, credentials, active challenge material, and unsafe exploit instructions are omitted.</p>
          </div>
        </aside>
      </div>
    </article>
  );
}
