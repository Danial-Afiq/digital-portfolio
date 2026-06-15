import { Download, Github, Linkedin } from "lucide-react";
import { ActionLink } from "../components/ui/ActionLink";
import { Badge } from "../components/ui/Badge";
import { PageHeader } from "../components/ui/PageHeader";
import { certifications, profile } from "../data/profile";

export function Resume() {
  return (
    <div>
      <PageHeader label="Resume packet" title="A compact record of the work so far." description="The downloadable resume stays separate from the site so it can be updated without changing the application." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_.75fr]">
        <section className="panel p-6 md:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="system-label">Profile summary</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-50">{profile.name}</h2>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cyan-300">{profile.role}</p>
            </div>
            <Badge tone="green">Open to opportunities</Badge>
          </div>
          <p className="mt-7 max-w-3xl leading-8 text-slate-400">{profile.about}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href={profile.resumeUrl || undefined} icon={Download} variant="primary" external>Download resume</ActionLink>
            <ActionLink href={profile.linkedinUrl} icon={Linkedin} external>LinkedIn</ActionLink>
            <ActionLink href={profile.githubUrl || undefined} icon={Github} external>GitHub</ActionLink>
          </div>
          {!profile.resumeUrl && <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-amber-300">TODO: add public/resume.pdf and set resumeUrl in profile.ts</p>}
        </section>
        <section className="panel p-6 md:p-9">
          <p className="system-label">Certification registry</p>
          <ul className="mt-6 space-y-5">
            {certifications.map((item) => (
              <li key={item.name} className="border-t border-slate-800 pt-4 first:border-0 first:pt-0">
                <p className="text-sm font-medium text-slate-200">{item.name}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wide text-slate-600">{item.note}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
