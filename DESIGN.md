# Design notes (v2 — current)

This is the authoritative design direction for the current site. It **supersedes**
the command-center / security-lab dashboard direction described in the older
`AGENTS.md` and `PORTFOLIO_SPEC.md`, which describe the deprecated v1 (archived in
`_archive_codex_v1/`). `CONTENT.md` is still the source of truth for content.

## Goal

A clean, visual-first, recruiter-friendly software-engineer portfolio. It should
read like an actual engineer's personal site — not a generated dashboard.

## Principles

- **Project-first.** Real screenshots/mockups near the top, strong featured tiles,
  short overviews. Depth lives only inside case-study pages.
- **Calm dark theme.** One restrained accent (emerald `#34d399`), hairline borders,
  generous spacing. No fake metrics, no neon overload.
- **One signature moment.** A single decorative terminal card in the hero is the
  only "terminal" element. Security flavour otherwise comes from content and from
  hand-built architecture diagrams on technical projects — not from visual chrome.
- **Honest copy.** No buzzwords, no overstated ownership, no invented dates/awards.

## Explicitly avoided (v1 baggage)

- "registry / module / log entry / system snapshot" language
- repeated dashboard cards and status widgets
- text-heavy project cards on listing pages
- fake terminal/security labels everywhere
- skill percentage bars

## Structure

- `/` Home — hero (photo + intro + terminal), featured tiles, about + skills,
  more work, contact CTA
- `/projects` — filterable grid
- `/projects/:id` — case study (overview, problem, diagram, features, decisions,
  outcome, lessons, screenshots, links)
- `/contact` — email + copy, LinkedIn, GitHub, resume

## Tokens

Defined in `src/styles/index.css` under `@theme`. Change the accent by editing
`--color-accent` / `--color-accent-soft`.
