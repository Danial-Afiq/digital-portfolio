import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projectById, projectLinks } from "../data/projects";
import { Container } from "../components/layout/PageShell";
import { ScreenshotFrame } from "../components/ui/ScreenshotFrame";
import { Gallery } from "../components/ui/Gallery";
import { Diagram } from "../components/ui/Diagram";
import { ProjectLinkButtons } from "../components/project/ProjectLinkButtons";
import { TechChip, StatusBadge } from "../components/ui/Chip";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="eyebrow mb-4">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-ink-soft">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetail() {
  const { id } = useParams();
  const project = id ? projectById(id) : undefined;

  if (!project) {
    return (
      <Container className="py-24 text-center">
        <p className="font-mono text-ink-mute">Project not found.</p>
        <Link to="/projects" className="mt-4 inline-block text-accent hover:text-accent-soft">
          ← Back to projects
        </Link>
      </Container>
    );
  }

  return (
    <article className="py-12 sm:py-16">
      <Container>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        {/* Header */}
        <header className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              {project.year && (
                <span className="font-mono text-xs text-ink-mute">{project.year}</span>
              )}
              <span className="font-mono text-xs uppercase tracking-wider text-ink-mute">
                {project.category.join(" · ")}
              </span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 max-w-2xl text-lg text-ink-soft">{project.tagline}</p>
          </div>
        </header>

        <div className="mt-5">
          <ProjectLinkButtons links={projectLinks(project)} />
        </div>

        {/* Gallery or placeholder cover */}
        <div className="mt-8">
          {project.gallery && project.gallery.length > 0 ? (
            <Gallery shots={project.gallery} />
          ) : (
            <ScreenshotFrame
              src={undefined}
              alt={`${project.title} cover`}
              label={project.title}
              accent={project.accent}
              className="card overflow-hidden"
            />
          )}
        </div>

        {/* Body grid: content + meta sidebar */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px]">
          <div>
            <Section title="Overview">
              <p className="text-base leading-relaxed text-ink-soft">{project.summary}</p>
            </Section>

            {project.problem && (
              <Section title="Problem">
                <p className="text-ink-soft">{project.problem}</p>
              </Section>
            )}

            {project.diagram && (
              <Section title="How it works">
                <Diagram diagram={project.diagram} />
              </Section>
            )}

            {project.features && project.features.length > 0 && (
              <Section title="Key features">
                <BulletList items={project.features} />
              </Section>
            )}

            {project.engineering && project.engineering.length > 0 && (
              <Section title="Security / engineering decisions">
                <BulletList items={project.engineering} />
              </Section>
            )}

            {project.challenges && (
              <Section title="Challenges">
                <p className="text-ink-soft">{project.challenges}</p>
              </Section>
            )}

            {project.outcome && (
              <Section title="Outcome">
                <p className="text-ink-soft">{project.outcome}</p>
              </Section>
            )}

            {project.lessons && project.lessons.length > 0 && (
              <Section title="What I learned">
                <BulletList items={project.lessons} />
              </Section>
            )}

            {project.improvements && project.improvements.length > 0 && (
              <Section title="What I'd improve">
                <BulletList items={project.improvements} />
              </Section>
            )}

          </div>

          {/* Meta sidebar */}
          <aside className="lg:sticky lg:top-20 lg:h-fit">
            <div className="card p-5">
              <h2 className="font-mono mb-3 text-[0.7rem] uppercase tracking-wider text-ink-mute">
                Role
              </h2>
              <p className="mb-5 text-sm text-ink-soft">{project.role ?? "—"}</p>
              <h2 className="font-mono mb-3 text-[0.7rem] uppercase tracking-wider text-ink-mute">
                Tech
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <TechChip key={t} label={t} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
