import { useEffect, useMemo, useState } from "react";
import { LayoutGrid, Rows3 } from "lucide-react";
import { projects, allCategories, sortProjects, type SortKey } from "../data/projects";
import type { ProjectCategory } from "../types";
import { Container } from "../components/layout/PageShell";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProjectCard } from "../components/project/ProjectCard";
import { ProjectListItem } from "../components/project/ProjectListItem";

type View = "grid" | "list";

/** Labelled select styled to match the page chrome. */
function Dropdown({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex items-center gap-2">
      <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-mute">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="font-mono rounded-lg border border-line bg-surface px-3 py-1.5 text-xs text-ink-soft outline-none transition-colors hover:border-line-strong focus-visible:border-accent"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-surface text-ink">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ViewToggle({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  const options: { value: View; label: string; Icon: typeof LayoutGrid }[] = [
    { value: "grid", label: "Grid", Icon: LayoutGrid },
    { value: "list", label: "List", Icon: Rows3 },
  ];
  return (
    <div className="flex items-center gap-1 rounded-lg border border-line p-1" role="group" aria-label="Layout">
      {options.map(({ value, label, Icon }) => {
        const active = view === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            aria-pressed={active}
            aria-label={`${label} view`}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
              active ? "bg-accent-dim text-accent" : "text-ink-mute hover:text-ink"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

const SORT_OPTIONS = [
  { value: "impressive", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "type", label: "Type" },
];

const CATEGORY_OPTIONS = [
  { value: "All", label: "All" },
  ...allCategories.map((c) => ({ value: c, label: c })),
];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const [sort, setSort] = useState<SortKey>("impressive");
  const [view, setView] = useState<View>(
    () => (localStorage.getItem("projects-view") as View) || "grid",
  );

  useEffect(() => {
    localStorage.setItem("projects-view", view);
  }, [view]);

  const filtered = useMemo(() => {
    const base = active === "All" ? projects : projects.filter((p) => p.category.includes(active));
    return sortProjects(base, sort);
  }, [active, sort]);

  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Work" title="Projects">
          Software, security, and product work. Filter by category — each card opens a short case
          study.
        </SectionHeading>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Dropdown
              label="Category"
              value={active}
              onChange={(v) => setActive(v as ProjectCategory | "All")}
              options={CATEGORY_OPTIONS}
            />
            <Dropdown
              label="Sort"
              value={sort}
              onChange={(v) => setSort(v as SortKey)}
              options={SORT_OPTIONS}
            />
          </div>
          <ViewToggle view={view} onChange={setView} />
        </div>

        {view === "grid" ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-4">
            {filtered.map((project) => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-ink-mute">No projects in this category yet.</p>
        )}
      </Container>
    </div>
  );
}
