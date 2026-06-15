import { Check, Clipboard, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/profile";
import { ActionLink } from "../ui/ActionLink";

export function ContactPanel() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    if (!profile.email) return;
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="panel p-6 md:p-9">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
        <div>
          <p className="system-label">Contact handshake</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Let's talk about software, security, or the work between them.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            The contact layer is intentionally simple: direct links, no backend, and no form that disappears into nowhere.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <ActionLink href={profile.email ? `mailto:${profile.email}?subject=Portfolio%20Contact` : undefined} icon={Mail} variant="primary">Email</ActionLink>
          <button
            type="button"
            disabled={!profile.email}
            onClick={copyEmail}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-slate-100 transition hover:border-emerald-300/50 disabled:cursor-not-allowed disabled:opacity-45"
          >
            {copied ? <Check size={15} aria-hidden /> : <Clipboard size={15} aria-hidden />}
            {copied ? "Copied" : "Copy email"} {!profile.email && <span className="text-[9px]">TODO</span>}
          </button>
          <ActionLink href={profile.linkedinUrl} icon={Linkedin} external>LinkedIn</ActionLink>
          <ActionLink href={profile.githubUrl || undefined} icon={Github} external>GitHub</ActionLink>
        </div>
      </div>
    </div>
  );
}
