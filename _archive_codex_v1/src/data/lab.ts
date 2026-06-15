import type { LabEntry } from "../types";

export const labEntries: LabEntry[] = [
  {
    id: "LOG-001",
    title: "Secure File Transfer",
    category: "Security Notes",
    status: "Draft",
    summary:
      "Design notes for a secure local-network file-transfer application using encryption, steganography, access-token login, and logging.",
    tags: ["Python", "Tkinter", "Encryption", "Local Network"],
  },
  {
    id: "LOG-002",
    title: "Web Application Security",
    category: "Security Notes",
    status: "Draft",
    summary: "Defensive notes from securing a vulnerable restaurant web application and studying OWASP Top 10 risks.",
    safeNote: "Exploit payloads and unsafe step-by-step material are intentionally omitted.",
    tags: ["Flask", "OWASP", "Secure Cookies", "Input Validation"],
  },
  {
    id: "LOG-003",
    title: "BrainHack ASR",
    category: "BrainHack",
    status: "Draft",
    summary: "Notes from testing ASR workflows with Whisper models, Dockerized builds, and cloud infrastructure.",
    safeNote: "Private competition material is omitted.",
    tags: ["ASR", "Whisper", "Docker", "Google Cloud"],
  },
  {
    id: "LOG-004",
    title: "CDDC Practice",
    category: "CDDC",
    status: "Coming Soon",
    summary: "CTF-style learning notes covering scripting, decoding, web security reasoning, and challenge methodology.",
    safeNote: "Flags, credentials, active challenge details, and private infrastructure are omitted.",
    tags: ["CTF", "Python", "Linux", "Problem Solving"],
  },
  {
    id: "LOG-005",
    title: "AWS / DevOps Notes",
    category: "AWS / DevOps Notes",
    status: "Coming Soon",
    summary: "Learning notes from AWS, Docker, GitHub Actions, CI/CD, and cloud/devops fundamentals.",
    tags: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
];
