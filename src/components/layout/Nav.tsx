import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { profile } from "../../data/profile";
import { asset } from "../../lib/asset";

function navClass(isActive: boolean) {
  return `text-sm transition-colors ${
    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
  }`;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to the #about section, navigating home first if needed.
  const goToAbout = () => {
    setOpen(false);
    const scroll = () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (location.pathname === "/") {
      scroll();
    } else {
      navigate("/");
      setTimeout(scroll, 80);
    }
  };

  const resumeHref = asset(profile.resumeUrl);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link to="/" className="font-mono text-sm font-semibold tracking-tight text-ink">
          <span className="text-accent">~/</span>danial-afiq
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <NavLink to="/" end className={({ isActive }) => navClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => navClass(isActive)}>
            Projects
          </NavLink>
          <button type="button" onClick={goToAbout} className={navClass(false)}>
            About
          </button>
          <NavLink to="/contact" className={({ isActive }) => navClass(isActive)}>
            Contact
          </NavLink>
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg-soft px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLink to="/" end onClick={() => setOpen(false)} className={({ isActive }) => navClass(isActive)}>
              Home
            </NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)} className={({ isActive }) => navClass(isActive)}>
              Projects
            </NavLink>
            <button type="button" onClick={goToAbout} className={`w-fit ${navClass(false)}`}>
              About
            </button>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => navClass(isActive)}>
              Contact
            </NavLink>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-line-strong px-3 py-1.5 text-sm text-ink"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
