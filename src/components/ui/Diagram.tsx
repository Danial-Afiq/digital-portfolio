import { ArrowRight } from "lucide-react";
import type { Diagram as DiagramType } from "../../types";

/**
 * Lightweight, hand-built architecture diagram. Renders the nodes as a
 * left-to-right flow (wraps to a vertical stack on small screens). Edge labels
 * are pulled from the `flow` pairs. No external diagramming dependency.
 */
export function Diagram({ diagram }: { diagram: DiagramType }) {
  const { nodes, flow, caption } = diagram;

  const edgeLabel = (fromId: string, toId: string) =>
    flow.find(([f, t]) => f === fromId && t === toId)?.[2];

  return (
    <figure className="card overflow-hidden p-5 sm:p-6">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-2">
        {nodes.map((node, i) => {
          const next = nodes[i + 1];
          const label = next ? edgeLabel(node.id, next.id) : undefined;
          return (
            <div key={node.id} className="contents">
              <div className="flex-1 rounded-lg border border-line bg-surface-2 px-3 py-3 text-center">
                <p className="text-sm font-medium text-ink">{node.label}</p>
                {node.note && (
                  <p className="font-mono mt-0.5 text-[0.68rem] uppercase tracking-wider text-ink-mute">
                    {node.note}
                  </p>
                )}
              </div>
              {next && (
                <div className="flex shrink-0 items-center justify-center gap-1 text-accent">
                  <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" aria-hidden />
                  {label && (
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-mute">
                      {label}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <figcaption className="font-mono mt-4 text-center text-[0.72rem] uppercase tracking-wider text-ink-mute">
        {caption}
      </figcaption>
    </figure>
  );
}
