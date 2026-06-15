import { FormEvent, useRef, useState } from "react";
import { PageHeader } from "../components/ui/PageHeader";
import { profile } from "../data/profile";

const responses: Record<string, string> = {
  help: "Commands: whoami, projects, skills, experience, contact, resume, open vault, open lab, clear",
  whoami: `${profile.name} // ${profile.current} // ${profile.role}`,
  projects: "vault-app, secure-p2p-transfer, web-security, ecoeats, brainhack, cddc-lab",
  skills: "React, Python, Electron, Flask, Docker, AWS, web security, and more.",
  experience: "PwC Digital Trust exposure, IHiS tabletop exposure, SPF ProCom leadership, SMU projects.",
  contact: profile.email || "TODO: public email has not been configured.",
  resume: profile.resumeUrl || "TODO: resume PDF has not been configured.",
  "open vault": "Navigate to Projects and open Secure Folder / Vault App.",
  "open lab": "Navigate to Lab for safe learning notes.",
};

export function Playground() {
  const [history, setHistory] = useState<{ command: string; output: string }[]>([
    { command: "help", output: responses.help },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = new FormData(event.currentTarget).get("command")?.toString().trim().toLowerCase() ?? "";
    event.currentTarget.reset();
    if (!input) return;
    if (input === "clear") return setHistory([]);
    setHistory((current) => [...current, { command: input, output: responses[input] ?? `Command not found: ${input}. Type "help".` }]);
  }

  return (
    <div>
      <PageHeader label="Optional playground" title="A terminal that only knows the portfolio." description="It does not execute system commands. It is simply a keyboard-friendly alternate way to explore the content." />
      <section className="panel scanline mt-10 min-h-[500px]" onClick={() => inputRef.current?.focus()}>
        <div className="border-b border-slate-800 px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">portfolio-terminal // sandboxed</div>
        <div className="space-y-5 p-5 font-mono text-xs leading-6 md:p-8 md:text-sm" aria-live="polite">
          {history.map((entry, index) => (
            <div key={`${entry.command}-${index}`}>
              <p><span className="text-emerald-300">guest@portfolio</span><span className="text-slate-500">:~$ </span><span className="text-slate-200">{entry.command}</span></p>
              <p className="mt-1 max-w-3xl text-slate-400">{entry.output}</p>
            </div>
          ))}
          <form onSubmit={submit} className="flex items-center">
            <label htmlFor="command" className="shrink-0"><span className="text-emerald-300">guest@portfolio</span><span className="text-slate-500">:~$ </span></label>
            <input ref={inputRef} id="command" name="command" autoComplete="off" className="min-w-0 flex-1 border-0 bg-transparent text-slate-100 outline-none" aria-label="Terminal command" />
          </form>
        </div>
      </section>
    </div>
  );
}
