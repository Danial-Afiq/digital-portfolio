import { useEffect, useRef, useState } from "react";
import { asciiBanner } from "./asciiName";

const BANNER = asciiBanner("DANIAL AFIQ");

const BOOT_LINES = [
  "> danial-afiq-portfolio@1.0.0 start",
  "> vite",
  "",
  "  VITE v7.3  ready in 312 ms",
  "  ➜  Local:   http://localhost:5173/",
  "  ➜  mounting components …",
  "  ✓ compiled successfully — launching portfolio",
];

const ACCEPTED = ["", "npm run start", "npm start", "start", "run", "npm run dev"];

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Phase = "await" | "booting" | "done";

export function BootScreen({
  onReady,
  onClosed,
}: {
  /** Boot finished — reveal the site behind (fires as the overlay starts fading). */
  onReady: () => void;
  /** Overlay fully faded out — safe to unmount. */
  onClosed: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("await");
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [shown, setShown] = useState(0); // boot lines revealed
  const inputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll while the boot screen is up.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    if (phase === "await") inputRef.current?.focus();
  }, [phase]);

  // Stream the boot log, then finish.
  useEffect(() => {
    if (phase !== "booting") return;
    if (prefersReducedMotion) {
      setShown(BOOT_LINES.length);
      const t = setTimeout(finish, 400);
      return () => clearTimeout(t);
    }
    if (shown < BOOT_LINES.length) {
      const t = setTimeout(() => setShown((s) => s + 1), 200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(finish, 700);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, shown]);

  function finish() {
    setPhase("done");
    onReady(); // reveal the site behind as the overlay fades
    setTimeout(onClosed, 550);
  }

  function run(e?: React.FormEvent) {
    e?.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!ACCEPTED.includes(cmd)) {
      setErrors((prev) => [...prev, `bash: ${input.trim()}: command not found`]);
      setInput("");
      return;
    }
    setPhase("booting");
  }

  return (
    <div
      onClick={() => phase === "await" && inputRef.current?.focus()}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-bg px-4 transition-opacity duration-500 ${
        phase === "done" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* faint scanlines + glow */}
      <div className="scanlines pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(52,211,153,0.10),transparent_55%)]" />

      {/* Skip */}
      {phase === "await" && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onReady();
            onClosed();
          }}
          className="font-mono absolute right-4 top-4 text-xs text-ink-mute transition-colors hover:text-accent"
        >
          skip intro →
        </button>
      )}

      <div className="relative w-full max-w-2xl">
        <div
          className="boot-fade-up mx-auto rounded-xl border border-line bg-surface/70 p-5 shadow-2xl backdrop-blur"
        >
          {/* window chrome */}
          <div className="mb-4 flex items-center gap-1.5 border-b border-line pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
            <span className="font-mono ml-2 text-[0.7rem] text-ink-mute">danial@portfolio — bash</span>
          </div>

          {/* ASCII name banner, printed inside the terminal. Use a system
              monospace (not the JetBrains Mono webfont) so the full-block glyph
              and space share the same advance width — otherwise rows don't line
              up. line-height:1 tiles the blocks into solid letters. */}
          <pre
            aria-label="Danial Afiq"
            style={{
              fontFamily:
                'ui-monospace, "Cascadia Mono", "Cascadia Code", Consolas, "DejaVu Sans Mono", "Liberation Mono", monospace',
              lineHeight: 1,
            }}
            className="select-none overflow-hidden whitespace-pre tracking-normal text-accent drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] text-[6px] sm:text-[10px] md:text-[12px]"
          >
            {BANNER}
          </pre>
          <p className="font-mono mt-2 mb-4 border-b border-line pb-4 text-[0.72rem] text-ink-mute">
            // security-aware software engineer · CS @ SMU
          </p>

          <div className="font-mono space-y-1 text-[0.82rem] leading-relaxed">
            {phase === "await" ? (
              <>
                <p className="text-ink-mute">Welcome. Start the dev server to launch the site.</p>
                {errors.map((err, i) => (
                  <p key={i} className="text-[#fb7185]">
                    {err}
                  </p>
                ))}
                <form onSubmit={run} className="flex items-center gap-2 pt-1">
                  <span className="text-accent">danial@portfolio</span>
                  <span className="-ml-1 text-ink-mute">:~$</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="npm run start"
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="off"
                    aria-label="Type a command to launch the portfolio"
                    className="flex-1 bg-transparent text-ink caret-accent outline-none placeholder:text-ink-mute"
                  />
                </form>
                <p className="pt-2 text-[0.72rem] text-ink-mute">
                  type <span className="text-accent">npm run start</span> and hit{" "}
                  <span className="text-ink-soft">Enter</span> &nbsp;·&nbsp; or just press Enter
                </p>
              </>
            ) : (
              <>
                <p className="text-ink-soft">
                  <span className="text-accent">danial@portfolio</span>
                  <span className="text-ink-mute">:~$</span> npm run start
                </p>
                {BOOT_LINES.slice(0, shown).map((line, i) => (
                  <p key={i} className="boot-fade-up text-ink-soft">
                    {line || " "}
                  </p>
                ))}
                {shown >= BOOT_LINES.length && (
                  <p className="text-accent">
                    launching <span className="caret">&nbsp;</span>
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
