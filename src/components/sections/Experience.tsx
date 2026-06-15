import { Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import type { ExperienceItem } from "../../types";
import { experience, education } from "../../data/experience";
import { Container } from "../layout/PageShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Certifications } from "./Certifications";

const kindIcon = {
  Work: Briefcase,
  Leadership: ShieldCheck,
  Education: GraduationCap,
} as const;

function TimelineEntry({ item }: { item: ExperienceItem }) {
  const Icon = kindIcon[item.kind];
  return (
    <li className="relative border-l border-line pl-9 pb-7 last:pb-0">
      <span className="absolute -left-6 top-0 grid h-12 w-12 place-items-center rounded-full border border-line-strong bg-surface text-accent">
        <Icon className="h-7 w-7" />
      </span>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <h4 className="text-[0.95rem] font-medium text-ink">{item.role}</h4>
        <span className="font-mono text-[0.7rem] text-ink-mute">{item.period}</span>
      </div>
      <p className="mb-2 text-sm text-accent-soft">{item.org}</p>
      <ul className="space-y-1.5">
        {item.points.map((p, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-mute" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Experience() {
  return (
    <section className="border-t border-line py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Experience & education" title="Where I've been" />

        <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
          <div>
            <h3 className="font-mono mb-5 text-sm uppercase tracking-wider text-ink-mute">
              Experience
            </h3>
            <ul>
              {experience.map((item) => (
                <TimelineEntry key={item.role} item={item} />
              ))}
            </ul>
          </div>

          <div className="border-t border-line pt-12 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <h3 className="font-mono mb-5 text-sm uppercase tracking-wider text-ink-mute">
              Education
            </h3>
            <ul>
              {education.map((item) => (
                <TimelineEntry key={item.role} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications — full-width image cards */}
        <div className="mt-12">
          <Certifications />
        </div>
      </Container>
    </section>
  );
}
