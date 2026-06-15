import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = [
  {
    id: "EXP-001",
    title: "Digital Trust Internship",
    organization: "PwC",
    type: "Work",
    summary:
      "Internship exposure involving client due diligence, AML-related support, audit/compliance workflows, and technology or cybersecurity-related projects.",
    highlights: [
      "Supported client due diligence and AML-related work",
      "Gained exposure to audit and compliance workflows",
      "Observed how security and technology decisions interact with business risk",
    ],
    tech: ["Digital Trust", "Compliance", "Cybersecurity Exposure"],
  },
  {
    id: "EXP-002",
    title: "Cybersecurity Tabletop / Injects Exposure",
    organization: "IHiS",
    type: "Project",
    summary:
      "Scenario-based cybersecurity response planning and communication exposure through tabletop exercise concepts.",
    highlights: ["Security scenario planning", "Communication and coordination", "Incident response thinking"],
    tech: ["Tabletop Exercises", "Security Awareness"],
  },
  {
    id: "EXP-003",
    title: "Team Leader / National Service",
    organization: "Singapore Police Force - ProCom",
    type: "Leadership",
    summary:
      "Developed operational discipline, communication, leadership, and decision-making under pressure in a structured environment.",
    highlights: ["Team leadership", "Operational readiness", "Communication under pressure"],
  },
  {
    id: "EXP-004",
    title: "Bachelor of Science in Computer Science",
    organization: "Singapore Management University",
    period: "Year 2",
    type: "Education",
    summary: "Computer Science coursework and group projects spanning software, UX, AI, and security-aware engineering.",
    highlights: ["Software development projects", "Interaction design and UX research", "Hackathon participation"],
  },
  {
    id: "EXP-005",
    title: "Diploma in Cybersecurity & Digital Forensics",
    organization: "Nanyang Polytechnic",
    type: "Education",
    summary: "Built a technical foundation in cybersecurity, digital forensics, application development, and secure systems.",
    highlights: [
      "GPA: 3.85/4.00 or 3.86/4.00 - TODO: confirm final value",
      "Director's List, AY2020/21 S2 and AY2021/22 S2",
      "Vice-President, NYP Google Developer Student Club",
    ],
  },
];
