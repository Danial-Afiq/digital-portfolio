import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "../../data/profile";
import { asset } from "../../lib/asset";
import { Container } from "../layout/PageShell";
import { ButtonLink, ButtonAnchor } from "../ui/Button";
import { Portrait } from "../ui/Portrait";
import { TerminalSnippet } from "../ui/TerminalSnippet";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: intro */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Portrait src={profile.photo} name={profile.name} className="h-16 w-16 shrink-0" />
              <div>
                <p className="eyebrow">{profile.location} · Available for internships</p>
                <p className="mt-1 font-mono text-sm text-ink-soft">{profile.name}</p>
              </div>
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {profile.role}
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-3 font-mono text-sm text-ink-mute">{profile.positioning}</p>

            <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink to="/projects">
                View work <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonAnchor href={asset(profile.resumeUrl) ?? "#"} variant="ghost">
                <FileText className="h-4 w-4" /> Resume
              </ButtonAnchor>
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="rounded-lg border border-line-strong p-2.5 text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="rounded-lg border border-line-strong p-2.5 text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right: signature terminal */}
          <div className="lg:pl-4">
            <TerminalSnippet />
          </div>
        </div>
      </Container>
    </section>
  );
}
