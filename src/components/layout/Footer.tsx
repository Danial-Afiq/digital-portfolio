import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { asset } from "../../lib/asset";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-ink-mute">
          © {year} {profile.name} · built with React + Tailwind
        </p>
        <div className="flex items-center gap-4 text-ink-soft">
          {profile.githubUrl && (
            <a href={profile.githubUrl} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="hover:text-accent">
              <Github className="h-5 w-5" />
            </a>
          )}
          {profile.linkedinUrl && (
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="hover:text-accent">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent">
              <Mail className="h-5 w-5" />
            </a>
          )}
          <a href={asset(profile.resumeUrl)} target="_blank" rel="noreferrer noopener" className="font-mono text-xs hover:text-accent">
            resume
          </a>
        </div>
      </div>
    </footer>
  );
}
