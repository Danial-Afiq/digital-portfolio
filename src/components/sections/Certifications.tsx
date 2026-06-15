import { useState } from "react";
import { Award, BadgeCheck, ExternalLink, Maximize2 } from "lucide-react";
import type { Certification } from "../../types";
import { certifications } from "../../data/experience";
import { asset } from "../../lib/asset";
import { Lightbox } from "../ui/Lightbox";

type Accent = NonNullable<Certification["accent"]>;

const accentGradient: Record<Accent, string> = {
  emerald: "from-emerald-400/15",
  violet: "from-violet-400/15",
  cyan: "from-cyan-400/15",
  amber: "from-amber-400/15",
};
const accentText: Record<Accent, string> = {
  emerald: "text-emerald-300",
  violet: "text-violet-300",
  cyan: "text-cyan-300",
  amber: "text-amber-300",
};

function CertCard({ cert, onView }: { cert: Certification; onView: () => void }) {
  const accent = cert.accent ?? "emerald";
  const img = asset(cert.image);

  return (
    <div className="card overflow-hidden">
      {/* Certificate image (click to expand) or monogram placeholder */}
      <button
        type="button"
        onClick={img ? onView : undefined}
        disabled={!img}
        aria-label={img ? `View ${cert.name} certificate` : undefined}
        className={`group relative block aspect-[1.4/1] w-full overflow-hidden border-b border-line ${
          img ? "cursor-zoom-in" : "cursor-default"
        }`}
      >
        {img ? (
          <>
            <img
              src={img}
              alt={`${cert.name} certificate`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-md bg-black/55 text-ink opacity-0 transition-opacity group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" />
            </span>
          </>
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br to-transparent ${accentGradient[accent]}`}
          >
            <Award className={`h-9 w-9 ${accentText[accent]}`} />
            <span className={`font-mono text-2xl font-semibold ${accentText[accent]}`}>
              {cert.acronym}
            </span>
          </div>
        )}
      </button>

      {/* Details */}
      <div className="p-4">
        <h4 className="text-[0.95rem] font-semibold text-ink">{cert.name}</h4>
        <p className="text-sm text-ink-soft">{cert.issuer}</p>

        <dl className="font-mono mt-3 space-y-1 text-[0.72rem] text-ink-mute">
          <div className="flex justify-between gap-2">
            <dt>Issued</dt>
            <dd className="text-ink-soft">
              {cert.issued}
              {cert.expiry && <span className="text-ink-mute"> · exp {cert.expiry}</span>}
            </dd>
          </div>
          {cert.credentialId && (
            <div className="flex justify-between gap-2">
              <dt>ID</dt>
              <dd className="truncate text-ink-soft">{cert.credentialId}</dd>
            </div>
          )}
        </dl>

        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-soft"
          >
            <BadgeCheck className="h-3.5 w-3.5" /> Verify
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <div>
      <h3 className="font-mono mb-5 text-sm uppercase tracking-wider text-ink-mute">
        Certifications
      </h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <CertCard key={cert.acronym} cert={cert} onView={() => setActive(cert)} />
        ))}
      </div>

      {active?.image && (
        <Lightbox
          src={active.image}
          alt={`${active.name} certificate`}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
