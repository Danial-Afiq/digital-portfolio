import { useState } from "react";
import { ImageOff } from "lucide-react";
import { asset } from "../../lib/asset";

type Accent = "emerald" | "violet" | "cyan" | "amber";

const accentGradient: Record<Accent, string> = {
  emerald: "from-emerald-400/20 via-emerald-500/5",
  violet: "from-violet-400/20 via-violet-500/5",
  cyan: "from-cyan-400/20 via-cyan-500/5",
  amber: "from-amber-400/20 via-amber-500/5",
};

const accentText: Record<Accent, string> = {
  emerald: "text-emerald-300",
  violet: "text-violet-300",
  cyan: "text-cyan-300",
  amber: "text-amber-300",
};

/**
 * A clean media frame. Shows the real screenshot when it loads; otherwise a
 * designed monogram placeholder so the layout looks intentional before assets
 * are added. Used for tile/cover images (object-cover) and placeholders.
 */
export function ScreenshotFrame({
  src,
  alt,
  label,
  accent = "emerald",
  className = "",
  fit = "cover",
  fill = false,
}: {
  src?: string;
  alt: string;
  label: string;
  accent?: Accent;
  className?: string;
  fit?: "cover" | "contain";
  /** Fill the parent's height (for list rows) instead of a fixed 16:10 box. */
  fill?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const resolved = asset(src);
  const showImage = resolved && !failed;

  return (
    <div
      className={`relative overflow-hidden bg-bg-soft ${fill ? "h-full w-full" : "aspect-[16/10]"} ${className}`}
    >
      {showImage ? (
        <img
          src={resolved}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} ${
            fill ? "absolute inset-0" : ""
          }`}
        />
      ) : (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br to-transparent ${accentGradient[accent]} ${
            fill ? "absolute inset-0" : ""
          }`}
        >
          <span className={`font-mono text-4xl font-semibold sm:text-5xl ${accentText[accent]}`}>
            {label
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </span>
          <span className="font-mono inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-widest text-ink-mute">
            <ImageOff className="h-3 w-3" /> {label}
          </span>
        </div>
      )}
    </div>
  );
}
