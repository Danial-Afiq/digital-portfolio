import { useState } from "react";
import { asset } from "../../lib/asset";

/**
 * Hero portrait. Falls back to a tasteful monogram tile if the photo is
 * missing, so the hero never looks broken before the real image is added.
 */
export function Portrait({
  src,
  name,
  className = "",
}: {
  src?: string;
  name: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const resolved = asset(src);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line-strong bg-surface ${className}`}
    >
      {resolved && !failed ? (
        <img
          src={resolved}
          alt={`Portrait of ${name}`}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-transparent to-violet/10">
          <span className="font-mono text-5xl font-semibold text-accent">{initials}</span>
        </div>
      )}
      {/* subtle accent ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
    </div>
  );
}
