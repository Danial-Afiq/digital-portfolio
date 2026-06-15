import { featuredProjects } from "../../data/projects";
import { Container } from "../layout/PageShell";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectTile } from "../project/ProjectTile";

export function FeaturedWork() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Featured work" title="Things I've built">
          A few projects where engineering, security, and usability overlap. Each links to a
          short case study.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
