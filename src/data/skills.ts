import type { SkillGroup } from "../types";

// At most six of the most relevant / impressive skills per group.
export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    skills: ["Python", "JavaScript", "Java", "Kotlin", "SQL", "Lua"],
  },
  {
    group: "Frontend",
    skills: ["React", "React Native", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    skills: ["Node.js", "Express", "Flask", "Django", "REST APIs", "MySQL"],
  },
  {
    group: "Security",
    skills: ["OWASP Top 10", "Burp Suite", "Nmap", "Wireshark", "Metasploit", "Kali Linux"],
  },
  {
    group: "Cloud / DevOps",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Git", "Vite"],
  },
  {
    group: "Forensics & Tools",
    skills: ["Autopsy", "FTK Imager", "EnCase", "Splunk", "Postman", "Figma"],
  },
];
