# PORTFOLIO_SPEC.md

## Project Name

Danial Afiq Digital Portfolio

## Concept

Build a modern digital portfolio for Danial Afiq with this positioning:

> Security-aware Software Engineer

The visual concept is:

> A personal command center / security lab dashboard for a CS student who builds software, understands cybersecurity, and is growing into DevOps/cloud/security-aware engineering.

This is not a generic developer template. It should feel like a polished technical control panel that organizes Danial's projects, experience, skills, and lab notes.

---

## Design Mood

Keywords:

- command center
- security lab
- system dashboard
- terminal
- encrypted vault
- technical report
- clean dark UI
- serious but not boring
- distinctive but not gimmicky
- software engineering + cybersecurity + DevOps

The site should feel like it belongs to someone who builds real software and understands security.

---

## Visual References

Use these only as inspiration. Do not copy assets, layouts, or copyrighted images exactly.

### Terminal Portfolio Inspiration

https://dribbble.com/shots/27272226-Terminal-UI-Portfolio-web-concept

Use for:
- terminal interaction idea
- command prompt style
- `/about`, `/projects`, `/skills`, `/contact` command concept
- clean dark terminal layout

Do not make the whole site terminal-only.

---

### Dark Developer Portfolio / Bento Layout

https://dribbble.com/shots/26610844-Dark-Mode-Developer-Portfolio

Use for:
- dark developer portfolio mood
- bento-style content cards
- clean spacing
- modern portfolio presentation

Avoid making it look like a generic SaaS landing page.

---

### Cybersecurity Dashboard Inspiration

https://www.behance.net/gallery/199310545/Cyber-Security-Admin-Dashboard-UI-Design

Use for:
- dashboard widgets
- security status cards
- dark UI with accent colours
- command-center feeling

Do not create fake security metrics that look misleading.

---

### Cybersecurity Dashboard Search References

https://www.behance.net/search/projects/cyber%20security%20dashboard%20dark%20theme

https://dribbble.com/search/cybersecurity-dashboard

Use for:
- card layout
- status indicators
- chart-like sections
- threat-lab mood

Do not overuse charts unless they communicate actual portfolio information.

---

### Command Center UI Search Reference

https://dribbble.com/search/command-center-ui

Use for:
- dashboard structure
- control-room feel
- dense but readable layouts

---

### Clean Developer Portfolio Structure

https://brittanychiang.com/

Use for:
- clean information architecture
- strong project cards
- simple recruiter-friendly structure
- good text hierarchy

Do not clone the exact layout or colour palette.

---

### Digital Garden / Notes Structure

https://www.taniarascia.com/

Use for:
- notes/projects/about structure
- developer identity beyond just project screenshots
- simple technical writing and blog-like expansion

---

### Playful Interactive Inspiration

https://bruno-simon.com/

Use only for:
- optional small playground inspiration
- memorable interaction idea

Do not build the whole portfolio as a 3D game. Recruiters must be able to navigate normally.

---

### Portfolio Ideas Gallery

https://portfolio-ideas.vercel.app/portfolio.html

Use for:
- browsing different portfolio structures
- avoiding overused layouts
- checking visual variety

---

## Visual Style

### Background

Use a dark base:

```txt
#05070D
#080D16
#0B1120
```

Add subtle:
- grid background
- radial glow
- circuit-like texture
- noise texture
- scanline effect only if very subtle

The background must not distract from reading.

---

### Cards / Surfaces

Use:

```txt
#101827
#111C2E
#0F172A
```

Style:
- thin borders
- slight transparency
- subtle blur if tasteful
- soft shadows
- hover border glow
- no heavy glassmorphism that hurts readability

Suggested border:

```css
border: 1px solid rgba(148, 163, 184, 0.18);
```

---

### Accent Colours

Primary:

```txt
#00FF9C
#00E5A8
```

Secondary:

```txt
#22D3EE
```

Tertiary:

```txt
#A78BFA
```

Warning:

```txt
#F59E0B
```

Danger:

```txt
#FB7185
```

Text:

```txt
#E5E7EB
#CBD5E1
#94A3B8
#64748B
```

Use accent colours sparingly.

---

## Typography

Use:
- Inter for normal text
- JetBrains Mono for terminal/system labels

Guidelines:
- Headings should be sharp and modern.
- Body text should be easy to read.
- Use monospace for labels, commands, badges, metadata, and terminal elements.
- Do not make the whole site monospace.
- Avoid tiny text.

---

## Core Layout

### Global Layout

Desktop:
- top navigation or left-side compact navigation
- max-width content container
- dashboard sections
- strong hero
- cards arranged in responsive grids

Mobile:
- clean mobile nav
- stacked content
- no horizontal scrolling
- terminal panels must resize properly

---

## Navigation

Required nav items:

- Home
- Projects
- Experience
- Stack
- Lab
- Resume
- Contact

Optional:
- Playground

Desktop nav should feel like a system toolbar or command-center nav.

Mobile nav should be simple and reliable.

---

## Page 1: Home

Homepage order:

1. Hero / Terminal
2. System Snapshot
3. Featured Projects
4. About
5. Experience Preview
6. Technical Stack Preview
7. Lab Preview
8. Resume / Contact CTA

---

### Hero Section

The hero must include:

- Name: Danial Afiq
- Role: Year 2 Computer Science Student @ SMU
- Positioning: Software Engineering · Cybersecurity · DevOps
- Short description:

```txt
I build practical software with a security-first mindset — from full-stack apps and encrypted desktop tools to CTFs, cloud, and automation projects.
```

Buttons:
- View Projects
- View Resume
- Contact Me
- GitHub
- LinkedIn

Hero visual:
- terminal/system panel on the right
- animated typing effect
- system status widgets

Example terminal copy:

```txt
danial@portfolio:~$ whoami
Year 2 Computer Science Student @ SMU

danial@portfolio:~$ cat focus.txt
Software Engineering · Cybersecurity · DevOps

danial@portfolio:~$ ls projects
vault-app secure-p2p-transfer ecoeats brainhack cddc web-security

danial@portfolio:~$ status
Building. Learning. Shipping.
```

The terminal should look real enough to be cool, but it must not imply it executes real system commands.

---

### System Snapshot Section

Create dashboard cards such as:

- CS @ SMU
- Cybersecurity Diploma
- Software + Security
- Cloud / DevOps
- CTF / Hackathon Lab
- Projects Shipped

Card style:
- small icon
- monospace label
- status badge
- 1-line explanation

Example:

```txt
STATUS: ACTIVE
FOCUS: SWE + SECURITY
MODE: BUILDING
```

---

### Featured Projects Section

Show 4–6 featured projects.

Card style:
- title
- category badge
- status badge
- short description
- tech chips
- “Case Study” link
- GitHub/Demo links if available

Make cards feel like system modules or security report summaries.

Featured projects:

1. Secure Folder / Vault App
2. Secure P2P File Transfer
3. Web Application Security Project
4. EcoEats
5. BrainHack / TIL-AI 2026
6. CDDC / CTF Lab

---

### About Section

Use this direction:

```txt
I’m Danial Afiq, a Computer Science undergraduate at Singapore Management University with a background in Cybersecurity & Digital Forensics from Nanyang Polytechnic. My work sits at the intersection of software engineering, cybersecurity, and cloud/devops. I like building practical systems — encrypted desktop apps, secure file-transfer tools, web applications, CTF solutions, and school projects that solve real user problems.
```

Keep the final copy natural, concise, and not too formal.

---

## Page 2: Projects

Create a full projects page.

Required filters:

- All
- Software
- Cybersecurity
- Web
- Desktop
- AI
- DevOps / Cloud
- UX / School
- CTF / Hackathon

Each project card should include:
- title
- summary
- category
- status
- tech stack
- links
- case study link if available

Use data-driven rendering.

---

## Page 3: Project Case Study

Use a reusable project detail page.

Suggested route with HashRouter:

```txt
#/projects/:id
```

Each case study should include:

1. Project summary
2. Problem / Context
3. My Role
4. Tech Stack
5. Key Features
6. Security / Engineering Decisions
7. Challenges
8. Outcome
9. What I Learned
10. What I Would Improve
11. Screenshots / Media placeholder
12. Links

Visual style:
- technical report
- status badges
- metadata sidebar
- system/report header
- table of contents on desktop if easy

Do not make the page too dense.

---

## Page 4: Experience

Create a timeline.

Experience entries should look like log events.

Example labels:
- `EXP-001`
- `EXP-002`
- `EXP-003`

Include:
- PwC / Digital Trust Internship
- IHiS cybersecurity tabletop/injects exposure
- Singapore Police Force / ProCom NS leadership
- SMU school projects and hackathons

Use cautious wording. Do not overstate.

---

## Page 5: Technical Stack

Do not use percentage bars.

Use grouped skill clusters:

- Languages
- Frontend
- Backend
- Desktop / App
- Cybersecurity
- Cloud / DevOps
- AI / Emerging Tech
- Tools

Each skill can have a status:
- Used in projects
- Comfortable
- Learning
- Exploring

Use honest labels.

---

## Page 6: Lab

Create a CTF / Hackathon Lab page.

Purpose:
- show problem-solving
- show AI/security learning
- show safe technical notes
- avoid unsafe exploit dumping

Categories:
- CTF
- BrainHack
- CDDC
- AI
- Security Notes
- AWS / DevOps Notes

Card style:
- lab log card
- title
- category
- status
- safe summary
- “Coming soon” if writeup is not ready

Safety note to include on page:

```txt
Writeups focus on learning process and defensive understanding. Sensitive details, credentials, active flags, and private challenge material are omitted.
```

---

## Page 7: Resume

Create a resume page.

Required:
- download resume button
- placeholder `/resume.pdf`
- instructions in README for replacing resume
- short summary card
- links to LinkedIn and GitHub

Do not embed a huge PDF viewer unless simple.

---

## Page 8: Contact

Keep static-friendly.

Include:
- email button
- copy email button
- LinkedIn link
- GitHub link

Do not include phone number by default.

Do not create backend form.

Optional:
- simple mailto button with subject

Example:

```txt
mailto:<YOUR_EMAIL>?subject=Portfolio%20Contact
```

---

## Optional Page: Playground

Create a terminal playground.

Commands:
- help
- whoami
- projects
- skills
- experience
- contact
- resume
- clear
- theme
- open vault
- open lab

Rules:
- must be optional
- must not replace normal navigation
- must be keyboard accessible
- must not execute real commands
- must not be security theatre

---

## Components

Build reusable components:

- AppShell
- Navbar
- MobileNav
- Footer
- SectionHeading
- TerminalHero
- CommandTerminal
- StatusCard
- ProjectCard
- ProjectGrid
- ProjectFilter
- CaseStudyLayout
- Timeline
- SkillCluster
- LabLogCard
- ResumeCard
- ContactPanel
- GlowCard
- Badge
- Button
- CopyButton

---

## Data Models

### Project

```ts
export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Archived"
  | "Coming Soon";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  category: string[];
  status: ProjectStatus;
  featured: boolean;
  year?: string;
  summary: string;
  problem?: string;
  role?: string;
  tech: string[];
  highlights: string[];
  securityAngle?: string[];
  challenges?: string[];
  outcome?: string;
  lessons?: string[];
  improvements?: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
};
```

### Experience

```ts
export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  period?: string;
  type: "Work" | "Education" | "Leadership" | "Project" | "Hackathon";
  summary: string;
  highlights: string[];
  tech?: string[];
};
```

### Skill

```ts
export type SkillGroup = {
  group: string;
  description: string;
  skills: {
    name: string;
    level: "Used in projects" | "Comfortable" | "Learning" | "Exploring";
  }[];
};
```

### Lab Entry

```ts
export type LabEntry = {
  id: string;
  title: string;
  category: "CTF" | "BrainHack" | "CDDC" | "AI" | "Security Notes" | "AWS / DevOps Notes";
  status: "Published" | "Draft" | "Coming Soon";
  summary: string;
  safeNote?: string;
  tags: string[];
};
```

---

## README Requirements

README must include:

1. Project overview
2. Tech stack
3. Local setup

```bash
npm install
npm run dev
```

4. Build

```bash
npm run build
npm run preview
```

5. GitHub Pages deployment steps
6. How to update content
7. How to replace resume
8. How to add project screenshots
9. Placeholder checklist
10. Troubleshooting

---

## GitHub Actions

Create:

```txt
.github/workflows/deploy.yml
```

Use:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Final Quality Checklist

The finished site must:

- look polished
- be responsive
- work on GitHub Pages
- have no TypeScript errors
- have no broken imports
- have no console errors
- have working navigation
- have accessible buttons/links
- avoid fake skill percentages
- avoid unsafe CTF content
- avoid overclaiming
- avoid exposing phone number
- clearly mark placeholders
- include README
- include deployment workflow

