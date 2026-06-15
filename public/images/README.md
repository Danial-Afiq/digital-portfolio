# Images

Drop real media here and the designed placeholders disappear automatically.

## Portrait

- `portrait.jpg` — square hero photo, ~640×640px. Referenced from `src/data/profile.ts` (`photo`).

## Project screenshots — one folder per project

Each project keeps its images in its own folder:

```
images/projects/<project-id>/01-something.png
images/projects/<project-id>/02-something.png
...
```

The folder name matches the project `id` in `src/data/projects.ts`, and each file
is listed in that project's `gallery` array (`{ src, alt }`). The **first** gallery
image is used as the card/cover. On a case-study page the gallery renders as a
carousel with a thumbnail strip and a click-to-expand lightbox.

To add screenshots to a project:

1. Drop images in `public/images/projects/<id>/`.
2. Add `{ src: "images/projects/<id>/<file>", alt: "..." }` entries to that
   project's `gallery` in `src/data/projects.ts`.

Projects without a `gallery` (e.g. Vault, EcoEats, FPL NagBot) show a clean
monogram placeholder until you add images.

## Guidelines

- Prefer WebP/PNG; keep files reasonably small (these are resized to ~1280px wide).
- Descriptive filenames; the `alt` text lives in `projects.ts`.
- No sensitive content: credentials, flags, private infrastructure, or internal dashboards.
