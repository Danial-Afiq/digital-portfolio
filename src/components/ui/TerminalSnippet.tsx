import { useEffect, useState } from "react";
import { useBootReady } from "../boot/BootContext";

/**
 * The site's single terminal touch — purely decorative. It does not execute
 * anything; it's a compact "about" card rendered in a familiar shell style,
 * typed in line by line on load (skipped under prefers-reduced-motion).
 */
type Line = { prompt: boolean; text: string; accent?: boolean };

const lines: Line[] = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Year 2 Computer Science @ SMU", accent: true },
  { prompt: true, text: "cat focus.txt" },
  { prompt: false, text: "software · cybersecurity · cloud/devops", accent: true },
  { prompt: true, text: "ls projects" },
  { prompt: false, text: "vault-app  p2p-transfer  restaurant-app  web-sec  ..." },
  { prompt: true, text: "status" },
  { prompt: false, text: "building. learning. shipping.", accent: true },
];

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Prompt() {
  return (
    <>
      <span className="text-accent">danial@portfolio</span>
      <span className="text-ink-mute">:~$ </span>
    </>
  );
}

export function TerminalSnippet({ className = "" }: { className?: string }) {
  const ready = useBootReady();
  // li = current line index, ci = chars typed in current line
  const [li, setLi] = useState(reducedMotion ? lines.length : 0);
  const [ci, setCi] = useState(0);

  useEffect(() => {
    if (!ready) return; // wait for the boot intro to finish
    if (li >= lines.length) return;
    const { text, prompt } = lines[li];
    if (ci < text.length) {
      const t = setTimeout(() => setCi((c) => c + 1), 26);
      return () => clearTimeout(t);
    }
    // line finished — pause, then move to next
    const t = setTimeout(() => {
      setLi((l) => l + 1);
      setCi(0);
    }, prompt ? 280 : 140);
    return () => clearTimeout(t);
  }, [li, ci, ready]);

  const done = li >= lines.length;

  return (
    <div className={`card overflow-hidden ${className}`} aria-label="Decorative terminal introduction">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        <span className="font-mono ml-3 text-[0.7rem] text-ink-mute">danial@portfolio</span>
      </div>
      <div className="font-mono space-y-1 p-4 text-[0.8rem] leading-relaxed">
        {lines.map((line, i) => {
          if (i > li) return null;
          const text = i === li ? line.text.slice(0, ci) : line.text;
          const showCaret = i === li && !done;
          return (
            <p
              key={i}
              className={line.accent && !line.prompt ? "text-accent-soft" : "text-ink-soft"}
            >
              {line.prompt && <Prompt />}
              {text}
              {showCaret && <span className="caret">&nbsp;</span>}
            </p>
          );
        })}
        {done && (
          <p className="text-ink-soft">
            <Prompt />
            <span className="caret">&nbsp;</span>
          </p>
        )}
      </div>
    </div>
  );
}
