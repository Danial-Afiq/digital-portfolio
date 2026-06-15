# Danial Afiq — Digital Portfolio

A clean, dark, visual-first portfolio for a security-aware software engineer.
Project-first: real screenshots and strong featured tiles up top, short overviews,
and depth tucked inside case-study pages. Subtle security/software flavour (one
terminal touch, hand-built architecture diagrams) — not a dashboard template.

> Design direction lives in [`DESIGN.md`](./DESIGN.md). It supersedes the older
> `AGENTS.md` / `PORTFOLIO_SPEC.md`, which describe the deprecated v1 (archived in
> `_archive_codex_v1/`). `CONTENT.md` remains the content source of truth.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- React Router (`HashRouter`)
- Lucide React icons
- GitHub Pages via Actions

## Local Setup

Requires Node.js 20+.

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Project Structure

```
src/
  data/          profile.ts · projects.ts · skills.ts   (edit content here)
  components/
    layout/      Nav, Footer, PageShell, ScrollToTop
    ui/          Button, Chip, ScreenshotFrame, Portrait, TerminalSnippet, Diagram, CopyButton
    project/     ProjectTile, ProjectCard, ProjectFilter
    sections/    Hero, FeaturedWork, AboutStrip, SkillChips, SelectedProjects, ContactCTA
  pages/         Home, Projects, ProjectDetail, Contact, NotFound
  lib/asset.ts   resolves /public paths against the deploy base
  styles/        index.css (Tailwind + design tokens)
```

## Routes

| Route | Page |
|---|---|
| `#/` | Home |
| `#/projects` | Filterable project grid |
| `#/projects/:id` | Case study |
| `#/contact` | Contact |

## Updating Content

Everything is data-driven:

- `src/data/profile.ts` — name, links, about copy, quick facts, photo/resume paths
- `src/data/projects.ts` — projects + full case-study fields (render only what you fill in)
- `src/data/skills.ts` — grouped skill chips

## Adding Your Photo, Screenshots & Resume

The site shows tasteful **placeholders** until you add real assets — nothing looks broken.

1. **Photo** — drop `public/images/portrait.jpg` (square, ~640px). Already wired via `profile.photo`.
2. **Screenshots** — each project has its own folder `public/images/projects/<id>/`, and the
   files are listed in that project's `gallery` array in `src/data/projects.ts`. The first
   gallery image is the cover; the case-study page renders a carousel + lightbox. See
   `public/images/README.md`.
3. **Resume** — drop `public/resume.pdf`. The Resume button already points there.

## Filling Placeholders

Search `src/data/` for `TODO`:

- [ ] GitHub profile URL (`profile.ts` → `githubUrl`)
- [ ] Public email (`profile.ts` → `email`)
- [ ] `public/resume.pdf`
- [ ] Per-project `githubUrl` / `demoUrl` / `figmaUrl`
- [ ] Project screenshots + portrait

Missing links simply don't render (or show a disabled state on the Contact page) — no broken anchors.

## GitHub Pages Deployment

The workflow at `.github/workflows/deploy.yml` builds on push to `main` with:

```txt
VITE_BASE_PATH=/digital-portfolio/
```

1. Push to GitHub.
2. **Settings → Pages → Source: GitHub Actions**.
3. Push to `main` (or run the workflow).

For a user site `<username>.github.io`, set `VITE_BASE_PATH` to `/`. For another repo
name, use `/<repository-name>/` (leading + trailing slash matter).

## Accent / Theming

Edit the tokens in `src/styles/index.css` under `@theme` — change `--color-accent`
to recolour the whole site.

## Public Safety

CTF / security content stays educational and defensive. No flags, credentials,
private endpoints, exploit payloads, or sensitive screenshots.

## Troubleshooting

- **Assets 404 on Pages** — `VITE_BASE_PATH` must match the repo name (slashes included).
- **A route won't open directly** — use the hash URL, e.g. `…/digital-portfolio/#/projects`.
- **Build fails after editing data** — run `npm run build`; TypeScript flags bad project fields.
