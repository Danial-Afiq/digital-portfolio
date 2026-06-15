import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    description: "Core languages used across coursework and personal builds.",
    skills: [
      { name: "Python", level: "Comfortable" },
      { name: "JavaScript", level: "Used in projects" },
      { name: "TypeScript", level: "Learning" },
      { name: "SQL", level: "Used in projects" },
      { name: "HTML / CSS", level: "Comfortable" },
    ],
  },
  {
    group: "Frontend",
    description: "Interfaces, interaction design, and responsive implementation.",
    skills: [
      { name: "React", level: "Used in projects" },
      { name: "Tailwind CSS", level: "Used in projects" },
      { name: "Figma", level: "Used in projects" },
      { name: "Responsive UI", level: "Used in projects" },
      { name: "Interaction Design", level: "Used in projects" },
    ],
  },
  {
    group: "Backend",
    description: "Application services and web fundamentals.",
    skills: [
      { name: "Node.js / Express", level: "Used in projects" },
      { name: "Flask", level: "Used in projects" },
      { name: "REST APIs", level: "Used in projects" },
      { name: "WebSockets", level: "Used in projects" },
      { name: "Authentication basics", level: "Used in projects" },
    ],
  },
  {
    group: "Desktop / App",
    description: "Local-first tools and desktop application workflows.",
    skills: [
      { name: "Electron", level: "Used in projects" },
      { name: "Tkinter", level: "Used in projects" },
      { name: "Filesystem handling", level: "Used in projects" },
      { name: "IPC", level: "Used in projects" },
      { name: "App packaging", level: "Learning" },
    ],
  },
  {
    group: "Cybersecurity",
    description: "Defensive thinking backed by formal study and practice.",
    skills: [
      { name: "Web Security", level: "Comfortable" },
      { name: "OWASP Top 10", level: "Comfortable" },
      { name: "Secure Coding", level: "Used in projects" },
      { name: "Cryptography basics", level: "Used in projects" },
      { name: "Digital Forensics", level: "Comfortable" },
      { name: "CTF problem solving", level: "Used in projects" },
    ],
  },
  {
    group: "Cloud / DevOps",
    description: "Reproducible builds, cloud fundamentals, and delivery.",
    skills: [
      { name: "AWS", level: "Learning" },
      { name: "Docker", level: "Used in projects" },
      { name: "GitHub Actions", level: "Used in projects" },
      { name: "CI/CD", level: "Learning" },
      { name: "Linux", level: "Used in projects" },
    ],
  },
  {
    group: "AI / Emerging Tech",
    description: "Competition and project exposure across applied AI workflows.",
    skills: [
      { name: "LLMs / RAG", level: "Exploring" },
      { name: "Whisper / ASR", level: "Used in projects" },
      { name: "Computer Vision", level: "Exploring" },
      { name: "NLP", level: "Exploring" },
      { name: "Autonomous agents", level: "Exploring" },
    ],
  },
  {
    group: "Tools",
    description: "The practical toolkit behind the work.",
    skills: [
      { name: "Git / GitHub", level: "Used in projects" },
      { name: "Docker", level: "Used in projects" },
      { name: "Kali Linux / VMware", level: "Used in projects" },
      { name: "VS Code", level: "Comfortable" },
      { name: "Google Cloud Workbench", level: "Used in projects" },
    ],
  },
];
