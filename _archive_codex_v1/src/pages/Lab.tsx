import { LockKeyhole } from "lucide-react";
import { LabLogCard } from "../components/sections/LabLogCard";
import { PageHeader } from "../components/ui/PageHeader";
import { labEntries } from "../data/lab";

export function Lab() {
  return (
    <div>
      <PageHeader label="CTF / Hackathon lab" title="Notes from learning under constraints." description="The lab documents methods, decisions, and defensive lessons across security, AI, and DevOps." />
      <div className="panel mt-8 flex gap-4 border-amber-300/20 p-5">
        <LockKeyhole className="mt-1 shrink-0 text-amber-300" size={20} aria-hidden />
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-200">Publication policy</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Writeups focus on learning process and defensive understanding. Sensitive details, credentials, active flags, and private challenge material are omitted.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {labEntries.map((entry) => <LabLogCard key={entry.id} entry={entry} />)}
      </div>
    </div>
  );
}
