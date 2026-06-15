# AGENTS.md

## Role

You are Codex acting as a senior frontend engineer, UI engineer, and deployment engineer.

Your task is to build Danial Afiq's personal digital portfolio from scratch as a static website hosted on GitHub Pages.

The portfolio should position Danial as a **security-aware software engineer**: a Computer Science student who builds practical software, understands cybersecurity, and is developing cloud/devops skills.

Read these files before making changes:

1. `AGENTS.md` — development rules and constraints.
2. `PORTFOLIO_SPEC.md` — design, architecture, UI/UX, deployment, and quality requirements.
3. `CONTENT.md` — portfolio content, project information, experience, education, skills, and placeholders.

If instructions conflict:
1. Follow explicit user instructions from the latest prompt first.
2. Then follow `AGENTS.md`.
3. Then follow `PORTFOLIO_SPEC.md`.
4. Then follow `CONTENT.md`.

---

## Core Objective

Build a polished, responsive, accessible, static portfolio website with a **command-center / security-lab aesthetic**.

The site must feel:
- technical
- modern
- professional
- memorable
- recruiter-friendly
- not generic
- not like a copied template

The final site should communicate:

> Danial builds practical software with a security-first mindset.

---

## Required Stack

Use:

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion for subtle animation
- React Router using `HashRouter`, unless you implement a reliable GitHub Pages deep-link fallback
- Lucide React or Tabler Icons for icons
- Static data files for content

Do not use:
- Next.js
- backend server
- database
- serverless functions
- authentication
- paid external services by default
- Wix
- heavy 3D libraries unless explicitly needed for a tiny optional experiment

The site must work as a static GitHub Pages site.

---

## GitHub Pages Requirements

This project is intended for:

```txt
<YOUR_GITHUB_USERNAME>.github.io
```

Assume it is a GitHub Pages user site.

Use Vite base path:

```ts
base: "/"
```

If the repo name is not `<YOUR_GITHUB_USERNAME>.github.io`, make the base path easy to change and document it in `README.md`.

Add GitHub Actions deployment workflow:

```txt
.github/workflows/deploy.yml
```

Use GitHub Pages Actions deployment.

The build output should be:

```txt
dist/
```

Required commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Before finishing, verify that `npm run build` succeeds.

---

## Development Rules

### Code Quality

Write clean, maintainable TypeScript React code.

Use:
- small reusable components
- clear file structure
- data-driven content
- strict-ish typing
- readable component names
- semantic HTML
- accessible interactive elements

Avoid:
- giant single-file components
- hardcoded repeated content
- magic strings scattered everywhere
- unnecessary dependencies
- overcomplicated architecture

---

## Suggested File Structure

Create a structure similar to:

```txt
src/
  assets/
  components/
    layout/
    ui/
    terminal/
    sections/
    project/
  data/
    projects.ts
    experience.ts
    skills.ts
    lab.ts
    profile.ts
  pages/
    Home.tsx
    Projects.tsx
    ProjectDetail.tsx
    Experience.tsx
    Lab.tsx
    Resume.tsx
    Contact.tsx
    Playground.tsx
  routes/
  styles/
  utils/
  App.tsx
  main.tsx

public/
  resume.pdf
  images/
  favicon.svg

.github/
  workflows/
    deploy.yml

README.md
```

This structure can be adjusted if there is a better reason, but keep it understandable.

---

## Content Management

Put portfolio content in data files, not hardcoded deep inside components.

Recommended files:

```txt
src/data/profile.ts
src/data/projects.ts
src/data/experience.ts
src/data/skills.ts
src/data/lab.ts
```

Use placeholders for missing information, but make them obvious.

Examples:

```ts
githubUrl: "# TODO: add GitHub repo link"
demoUrl: "# TODO: add live demo link"
```

Do not invent project links.

Do not invent employment dates.

Do not invent awards or competition results.

Do not overstate experience.

---

## Writing Style

Use a tone that is:

- honest
- direct
- technical
- clear
- confident
- not cringe
- not inflated
- not overly corporate

Avoid phrases like:

- “I am passionate about technology”
- “highly motivated individual”
- “10x developer”
- “expert in everything”
- “I have always loved computers”
- “cutting-edge solutions”
- “leveraging synergies”
- “revolutionizing the future”

Prefer phrases like:

- “I build practical software with a security-first mindset.”
- “My work sits between software engineering, cybersecurity, and cloud/devops.”
- “I care about shipping usable systems, not just toy demos.”
- “I document decisions, tradeoffs, and what I learned.”
- “I like projects where engineering, security, and usability overlap.”

---

## Safety and Public Sharing Rules

This portfolio may include cybersecurity and CTF-related content.

Do not publish:
- real secrets
- API keys
- credentials
- private keys
- tokens
- live target details
- active competition flags
- private infrastructure details
- instructions for attacking real systems
- exploit payloads that are unsafe outside a CTF context
- anything that violates competition rules

For CTF / cybersecurity content:
- keep it educational
- keep it high-level where needed
- emphasize methodology and defensive learning
- use placeholders for writeups that need later review
- avoid turning the portfolio into an offensive hacking manual

Safe framing:

> “This writeup focuses on the reasoning process and defensive lessons learned. Sensitive details and active challenge material are omitted.”

---

## Privacy Rules

Do not include Danial's phone number by default.

Use:
- email placeholder
- GitHub placeholder
- LinkedIn link from `CONTENT.md`
- resume download placeholder

If a contact form is included, it must work without a backend or be removed.

Preferred contact section:
- email mailto link
- copy email button
- GitHub link
- LinkedIn link

Do not create a fake form that silently does nothing.

---

## Design Rules

The aesthetic is:

> command-center / security-lab / security-aware software engineer

Use:
- dark background
- subtle grid/circuit texture
- terminal panel
- dashboard cards
- system status widgets
- small glow effects
- thin borders
- monospace labels
- polished typography

Avoid:
- generic gradient blob developer portfolio
- stock hacker imagery
- skulls
- hooded hacker clichés
- Matrix rain overload
- excessive neon
- fake “cyber attack” visuals
- unreadable tiny text
- making everything monospace

The site should look distinctive but still professional.

---

## Accessibility Requirements

Implement:

- semantic HTML
- proper heading hierarchy
- keyboard navigation
- visible focus states
- good colour contrast
- alt text for meaningful images
- real buttons for actions
- real links for navigation
- reduced motion support via `prefers-reduced-motion`
- responsive layout
- no content hidden behind hover-only interactions

Do not sacrifice accessibility for visual effects.

---

## Animation Rules

Use Framer Motion sparingly.

Good:
- subtle fade-in
- subtle slide-up
- terminal typing effect
- hover glow
- small status pulse
- smooth route transitions

Bad:
- heavy animation everywhere
- long intro loading screen
- scroll hijacking
- motion that blocks reading
- complex 3D main navigation
- animations that hurt performance

Respect reduced motion preferences.

---

## Performance Requirements

The site should be lightweight.

Target:
- fast initial load
- no huge image files
- no unnecessary libraries
- optimized assets
- good Lighthouse score
- no console errors
- no TypeScript errors

If using images:
- use local optimized placeholders
- document where Danial can replace screenshots later
- do not hotlink copyrighted inspiration images

---

## SEO Requirements

Add:
- useful `<title>`
- meta description
- Open Graph tags
- Twitter card tags
- favicon placeholder
- meaningful page titles
- `robots.txt`
- optional `sitemap.xml`

Suggested title:

```txt
Danial Afiq | Security-Aware Software Engineer
```

Suggested description:

```txt
Digital portfolio of Danial Afiq, a Computer Science student at SMU building software, cybersecurity, DevOps, and AI projects.
```

---

## Required Pages

Build at least:

- Home
- Projects
- Project Detail / Case Study route
- Experience
- Lab
- Resume
- Contact
- Optional Playground / Terminal page

If time or complexity is a concern, prioritize:
1. Home
2. Projects
3. Project Detail
4. Experience
5. Resume/Contact
6. Lab
7. Playground

---

## Final Verification

Before finishing:

1. Run install/build checks where possible.
2. Confirm no broken imports.
3. Confirm routes work.
4. Confirm mobile responsiveness.
5. Confirm GitHub Pages deployment workflow exists.
6. Confirm README explains setup and deployment.
7. Confirm placeholder values are clearly marked.
8. Confirm no phone number is exposed.
9. Confirm no unsafe CTF/exploit content is included.
10. Confirm project content is editable from data files.

---

## Final Response to User

After building, summarize:

- what was built
- main files created
- commands to run locally
- deployment steps
- placeholders Danial must replace
- where to edit content
- any assumptions made
