import { Github, ExternalLink, Figma } from "lucide-react";
import type { ProjectLinkKind } from "../../data/projects";

const icons: Record<ProjectLinkKind, typeof Github> = {
  github: Github,
  demo: ExternalLink,
  figma: Figma,
};

type Link = { kind: ProjectLinkKind; href: string; label: string };

/**
 * External link buttons (GitHub / live demo / prototype). Marked relative+z-10
 * and stop click propagation so they work inside a stretched-link card without
 * triggering the card's navigation.
 */
export function ProjectLinkButtons({
  links,
  size = "md",
  overlay = false,
}: {
  links: Link[];
  size?: "sm" | "md";
  /** Semi-opaque background so buttons stay legible over a thumbnail image. */
  overlay?: boolean;
}) {
  if (links.length === 0) return null;
  const sizing = size === "sm" ? "px-3 py-1.5 text-xs" : "px-3.5 py-2 text-sm";
  const surface = overlay ? "bg-bg/75 backdrop-blur-sm" : "bg-surface/40";

  return (
    <div className="relative z-10 flex flex-wrap gap-2">
      {links.map(({ kind, href, label }) => {
        const Icon = icons[kind];
        return (
          <a
            key={kind}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-1.5 rounded-lg border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent ${surface} ${sizing}`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        );
      })}
    </div>
  );
}
