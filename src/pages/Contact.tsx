import { Mail, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import { asset } from "../lib/asset";
import { Container } from "../components/layout/PageShell";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ButtonAnchor } from "../components/ui/Button";
import { CopyButton } from "../components/ui/CopyButton";

export function Contact() {
  const mailto = profile.email
    ? `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio contact")}`
    : undefined;

  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Contact" title="Let's talk">
          The best ways to reach me. I'm open to internships, collaborations, and interesting
          problems in software and security.
        </SectionHeading>

        <div className="card p-6 sm:p-8">
          {/* Email */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="rounded-lg border border-line bg-surface-2 p-2.5 text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-mute">
                  Email
                </p>
                <p className="text-ink">{profile.email ?? "Add your public email in profile.ts"}</p>
              </div>
            </div>
            {profile.email && mailto ? (
              <div className="flex gap-2">
                <ButtonAnchor href={mailto}>
                  <Mail className="h-4 w-4" /> Email me
                </ButtonAnchor>
                <CopyButton value={profile.email} label="Copy" />
              </div>
            ) : (
              <span className="font-mono text-xs text-ink-mute">TODO: add email</span>
            )}
          </div>

          <div className="my-6 border-t border-line" />

          {/* Other links */}
          <div className="grid gap-3 sm:grid-cols-2">
            {profile.linkedinUrl && (
              <ContactLink href={profile.linkedinUrl} icon={Linkedin} label="LinkedIn" sub="muhammad-danial-afiq" />
            )}
            {profile.githubUrl ? (
              <ContactLink href={profile.githubUrl} icon={Github} label="GitHub" sub="See the code" />
            ) : (
              <DisabledLink icon={Github} label="GitHub" sub="TODO: add profile URL" />
            )}
            <ContactLink href={asset(profile.resumeUrl) ?? "#"} icon={FileText} label="Resume" sub="Download PDF" />
            {profile.oldSiteUrl && (
              <ContactLink href={profile.oldSiteUrl} icon={ExternalLink} label="Previous site" sub="Archived portfolio" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  sub,
}: {
  href: string;
  icon: typeof Github;
  label: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="card card-hover flex items-center gap-3 p-4"
    >
      <span className="rounded-lg border border-line bg-surface-2 p-2.5 text-ink-soft">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        <p className="text-xs text-ink-mute">{sub}</p>
      </div>
    </a>
  );
}

function DisabledLink({ icon: Icon, label, sub }: { icon: typeof Github; label: string; sub: string }) {
  return (
    <div className="card flex items-center gap-3 p-4 opacity-60">
      <span className="rounded-lg border border-line bg-surface-2 p-2.5 text-ink-mute">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-medium text-ink-soft">{label}</p>
        <p className="font-mono text-xs text-ink-mute">{sub}</p>
      </div>
    </div>
  );
}
