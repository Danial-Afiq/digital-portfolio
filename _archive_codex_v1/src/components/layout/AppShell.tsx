import { Menu, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../../data/profile";

const navItems = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Stack", "/stack"],
  ["Lab", "/lab"],
  ["Resume", "/resume"],
  ["Contact", "/contact"],
  ["Terminal", "/playground"],
] as const;

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
  return navItems.map(([label, path]) => (
    <NavLink
      key={path}
      to={path}
      onClick={onNavigate}
      className={({ isActive }) =>
        `rounded-md px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-wider transition ${
          isActive ? "bg-emerald-300/10 text-emerald-300" : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
        }`
      }
    >
      {label}
    </NavLink>
  ));
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-20 rounded bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-950 focus:translate-y-0">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#05070d]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <NavLink to="/" className="flex items-center gap-3 text-slate-50" aria-label={`${profile.name} home`}>
            <span className="grid size-9 place-items-center rounded-lg border border-emerald-300/30 bg-emerald-300/8 text-emerald-300">
              <ShieldCheck size={19} aria-hidden />
            </span>
            <span>
              <span className="block font-mono text-xs font-semibold uppercase tracking-wider">{profile.name}</span>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-slate-500">Security-aware SWE</span>
            </span>
          </NavLink>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <NavItems />
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <span className="status-dot" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Available for opportunities</span>
          </div>
          <button
            className="grid size-10 place-items-center rounded-lg border border-slate-700 text-slate-200 lg:hidden"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={19} aria-hidden /> : <Menu size={19} aria-hidden />}
          </button>
        </div>
        {open && (
          <nav className="grid gap-1 border-t border-slate-800 bg-[#080d16] p-4 lg:hidden" aria-label="Mobile navigation">
            <NavItems onNavigate={() => setOpen(false)} />
          </nav>
        )}
      </header>
      <main id="main-content" className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        {children}
      </main>
      <footer className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-7 font-mono text-[10px] uppercase tracking-widest text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>Designed and built by {profile.name}</p>
          <p>React // TypeScript // Static by design</p>
        </div>
      </footer>
    </div>
  );
}
