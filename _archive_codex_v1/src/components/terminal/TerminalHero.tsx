import { motion, useReducedMotion } from "framer-motion";
import { Terminal } from "lucide-react";

const commands = [
  { command: "whoami", output: "Year 2 Computer Science Student @ SMU" },
  { command: "cat focus.txt", output: "Software Engineering // Cybersecurity // DevOps" },
  { command: "ls projects", output: "vault-app  p2p-transfer  ecoeats  web-security  ai-lab" },
  { command: "status", output: "Building. Learning. Shipping." },
];

export function TerminalHero() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.5 }}
      className="panel scanline min-h-[390px]"
      aria-label="Portfolio terminal summary"
    >
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-rose-400/70" />
          <span className="size-2 rounded-full bg-amber-400/70" />
          <span className="size-2 rounded-full bg-emerald-400/70" />
        </div>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
          <Terminal size={13} aria-hidden /> portfolio-session
        </span>
      </div>
      <div className="space-y-5 p-5 font-mono text-xs leading-6 md:p-7 md:text-sm">
        {commands.map((item, index) => (
          <motion.div
            key={item.command}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 + index * 0.25 }}
          >
            <p className="text-slate-400">
              <span className="text-emerald-300">danial@portfolio</span>
              <span className="text-slate-600">:</span>
              <span className="text-cyan-300">~</span>
              <span className="text-slate-500">$ </span>
              <span className="text-slate-200">{item.command}</span>
            </p>
            <p className="mt-1 text-slate-400">{item.output}</p>
          </motion.div>
        ))}
        <p className="flex items-center text-slate-400">
          <span className="text-emerald-300">danial@portfolio</span>
          <span className="text-slate-600">:</span>
          <span className="text-cyan-300">~</span>
          <span className="text-slate-500">$ </span>
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-300" aria-label="Terminal cursor" />
        </p>
      </div>
    </motion.div>
  );
}
