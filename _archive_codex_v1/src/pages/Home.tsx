import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, FlaskConical, Github, Linkedin, Mail } from "lucide-react";
import { ProjectCard } from "../components/project/ProjectCard";
import { ContactPanel } from "../components/sections/ContactPanel";
import { LabLogCard } from "../components/sections/LabLogCard";
import { StatusCard } from "../components/sections/StatusCard";
import { TerminalHero } from "../components/terminal/TerminalHero";
import { ActionLink } from "../components/ui/ActionLink";
import { SectionHeading } from "../components/ui/SectionHeading";
import { experience } from "../data/experience";
import { labEntries } from "../data/lab";
import { profile, snapshot } from "../data/profile";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

export function Home() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="space-y-24 md:space-y-32">
      <section className="grid min-h-[calc(100vh-9rem)] items-center gap-10 py-5 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-6 flex items-center gap-3">
            <span className="status-dot" aria-hidden />
            <p className="system-label">System online // {profile.name}</p>
          </div>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.055em] text-slate-50 sm:text-6xl md:text-7xl">
            Security-aware software engineer <span className="text-emerald-300">in progress.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{profile.summary}</p>
          <p className="mt-5 font-mono text-xs uppercase tracking-widest text-cyan-300/80">{profile.current} // Singapore</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/projects" variant="primary">View projects</ActionLink>
            <ActionLink href="/resume" icon={Download}>Resume</ActionLink>
            <ActionLink href="/contact" icon={Mail}>Contact</ActionLink>
            <ActionLink href={profile.githubUrl || undefined} icon={Github} external>GitHub</ActionLink>
            <ActionLink href={profile.linkedinUrl} icon={Linkedin} external>LinkedIn</ActionLink>
          </div>
        </motion.div>
        <TerminalHero />
      </section>

      <section aria-labelledby="snapshot-title">
        <SectionHeading label="01 / System snapshot" title="A quick read on the current operating mode." description="The labels are honest by design: what I know, what I have built, and what I am actively learning." />
        <h2 id="snapshot-title" className="sr-only">System snapshot</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {snapshot.map((item, index) => <StatusCard key={item.label} item={item} index={index} />)}
        </div>
      </section>

      <section>
        <SectionHeading
          label="02 / Featured modules"
          title="Projects where engineering, security, and usability overlap."
          description="Each module opens into a case study with context, decisions, tradeoffs, and next steps."
          action={<ActionLink href="/projects" variant="quiet">All projects <ArrowRight size={14} aria-hidden /></ActionLink>}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
        <article className="panel p-6 md:p-9">
          <p className="system-label">03 / About operator</p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-50">I care about shipping usable systems, not just toy demos.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">{profile.about}</p>
          <div className="mt-7 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wide text-slate-400">
            {["Practical builds", "Security-first mindset", "Clear documentation", "Continuous learning"].map((item) => (
              <span key={item} className="rounded border border-slate-700 bg-slate-900/70 px-3 py-2">{item}</span>
            ))}
          </div>
        </article>
        <article className="panel p-6 md:p-9">
          <p className="system-label">Education path</p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">Current</p>
              <h3 className="mt-2 font-semibold text-slate-100">Computer Science</h3>
              <p className="mt-1 text-sm text-slate-500">Singapore Management University</p>
            </div>
            <div className="border-t border-slate-800 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-violet-300">Foundation</p>
              <h3 className="mt-2 font-semibold text-slate-100">Cybersecurity & Digital Forensics</h3>
              <p className="mt-1 text-sm text-slate-500">Nanyang Polytechnic</p>
            </div>
          </div>
        </article>
      </section>

      <section>
        <SectionHeading
          label="04 / Experience log"
          title="Experience that shaped how I work."
          action={<ActionLink href="/experience" variant="quiet">Open full log <ArrowRight size={14} aria-hidden /></ActionLink>}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {experience.slice(0, 3).map((item) => (
            <article key={item.id} className="panel p-6">
              <p className="system-label">{item.id} // {item.type}</p>
              <h3 className="mt-4 text-lg font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-1 text-xs text-cyan-300">{item.organization}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          label="05 / Technical stack"
          title="A stack described by evidence, not percentages."
          description="Skills are grouped by how they show up in projects, coursework, and current exploration."
          action={<ActionLink href="/stack" variant="quiet">Inspect stack <ArrowRight size={14} aria-hidden /></ActionLink>}
        />
        <div className="panel grid gap-px overflow-hidden bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.slice(0, 4).map((group) => (
            <article key={group.group} className="bg-[#0b1120] p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-300">{group.group}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{group.skills.slice(0, 3).map((skill) => skill.name).join(" // ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          label="06 / Lab notes"
          title="Learning logs, with the unsafe details left out."
          action={<ActionLink href="/lab" icon={FlaskConical} variant="quiet">Open lab <ArrowRight size={14} aria-hidden /></ActionLink>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {labEntries.slice(0, 3).map((entry) => <LabLogCard key={entry.id} entry={entry} />)}
        </div>
      </section>

      <section><ContactPanel /></section>
    </div>
  );
}
