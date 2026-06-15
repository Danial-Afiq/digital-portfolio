export type ProjectStatus = "Completed" | "In Progress" | "Archived" | "Coming Soon";

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
};

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

export type SkillLevel = "Used in projects" | "Comfortable" | "Learning" | "Exploring";

export type SkillGroup = {
  group: string;
  description: string;
  skills: { name: string; level: SkillLevel }[];
};

export type LabEntry = {
  id: string;
  title: string;
  category: "CTF" | "BrainHack" | "CDDC" | "AI" | "Security Notes" | "AWS / DevOps Notes";
  status: "Published" | "Draft" | "Coming Soon";
  summary: string;
  safeNote?: string;
  tags: string[];
};
