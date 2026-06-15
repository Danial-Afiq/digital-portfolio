import { profile } from "../../data/profile";
import { Container } from "../layout/PageShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Portrait } from "../ui/Portrait";
import { SkillChips } from "./SkillChips";

export function AboutStrip() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-line bg-bg-soft/60 py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left: photo + facts */}
          <div>
            <Portrait src={profile.photo} name={profile.name} className="aspect-square w-full max-w-xs" />
            <dl className="mt-6 space-y-3">
              {profile.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-0.5">
                  <dt className="font-mono text-sm uppercase tracking-wider text-ink-mute">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-ink-soft">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: about copy + skills */}
          <div>
            <SectionHeading eyebrow="About" title="Security-aware, product-minded" />
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              {profile.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8">
              <SkillChips />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
