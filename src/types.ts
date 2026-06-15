export type ProjectStatus = "Completed" | "In Progress" | "Prototype" | "Ongoing" | "Archived";

export type ProjectCategory =
  | "Software"
  | "Security"
  | "Web"
  | "Desktop"
  | "AI"
  | "Cloud / DevOps"
  | "UI / UX"
  | "CTF / Hackathon";

/** A single labelled box in a hand-built architecture diagram. */
export type DiagramNode = {
  id: string;
  label: string;
  /** Optional second line, e.g. a tech or role note. */
  note?: string;
};

export type Diagram = {
  caption: string;
  nodes: DiagramNode[];
  /** Directed connections drawn left-to-right between node ids. */
  flow: [string, string, string?][]; // [from, to, optional edge label]
};

export type GalleryItem = {
  src: string;
  alt: string;
  /** Defaults to "image". Use "video" for an mp4 demo (rendered with controls). */
  type?: "image" | "video";
  /** Poster image for a video item. */
  poster?: string;
};

export type Project = {
  id: string;
  title: string;
  /** One-line overview shown on tiles/cards. Keep it short. */
  tagline: string;
  category: ProjectCategory[];
  status: ProjectStatus;
  featured: boolean;
  year?: string;

  /** Short paragraph for the top of the case study. */
  summary: string;

  /** Tech chips. */
  tech: string[];

  /** Case-study depth (all optional — render only what exists). */
  problem?: string;
  role?: string;
  features?: string[];
  engineering?: string[];
  challenges?: string;
  outcome?: string;
  lessons?: string[];
  improvements?: string[];
  diagram?: Diagram;

  /**
   * Media. Paths are relative to /public. Each project keeps its images in
   * its own folder under public/images/projects/<id>/. The first gallery
   * item doubles as the tile/cover image (use an image, not a video, first).
   */
  gallery?: GalleryItem[];

  /** Links. Use undefined when not yet available. */
  githubUrl?: string;
  demoUrl?: string;
  figmaUrl?: string;

  /** Accent tint used for the placeholder mockup frame. */
  accent?: "emerald" | "violet" | "cyan" | "amber";
};

export type SkillGroup = {
  group: string;
  skills: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  kind: "Work" | "Leadership" | "Education";
  points: string[];
};

export type Certification = {
  name: string;
  acronym: string;
  issuer: string;
  issued: string;
  expiry?: string;
  credentialId?: string;
  verifyUrl?: string;
  /** Certificate image under public/images/certs/. Falls back to a monogram. */
  image?: string;
  accent?: "emerald" | "violet" | "cyan" | "amber";
};

export type Profile = {
  name: string;
  role: string;
  positioning: string;
  location: string;
  tagline: string;
  about: string[];
  facts: { label: string; value: string }[];
  photo?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeUrl: string;
  oldSiteUrl?: string;
};
