import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { Container } from "../layout/PageShell";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../project/ProjectCard";

export function SelectedProjects() {
  const rest = projects.filter((p) => !p.featured);
  if (rest.length === 0) return null;

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="More work"
          title="Also in the lab"
          action={
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-soft"
            >
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          }
        >
          Cybersecurity practice, AI competition work, and earlier builds.
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              // On mobile (single column) cap the list at 4 cards; show all from sm up.
              className={i >= 4 ? "max-sm:hidden" : ""}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
