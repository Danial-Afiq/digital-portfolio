import type { ExperienceItem, Certification } from "../types";

export const experience: ExperienceItem[] = [
  {
    role: "Digital Trust (Cloud Trust) Intern",
    org: "PwC Singapore",
    period: "Sep 2022 – Feb 2023",
    kind: "Work",
    points: [
      "Supported Client Due Diligence (KYC) under AML/CFT policies — screening, sanctions/adverse-media checks, and documented risk findings.",
      "Contributed to a cybersecurity tabletop exercise for a healthcare-tech client: drafted realistic incident injects (credential compromise, data exfiltration, cloud misconfiguration) and prepared facilitator materials.",
      "Automated routine file-handling and report tasks using AWS (S3, Lambda).",
      "Assisted audit teams with working papers, tie-outs, and evidence collection.",
    ],
  },
  {
    role: "Full-time National Serviceman — Protective Security Command (ProCom)",
    org: "Singapore Police Force",
    period: "2023 – 2025",
    kind: "Leadership",
    points: [
      "Led and coordinated a team of 20+ during shift duty for Operation Stinger Patrol at Changi Airport (Jan–Jun 2025).",
      "Conducted patrol operations and supported incident response in high-security public environments under strict SOPs.",
      "Operated reliably under time pressure with disciplined execution and attention to detail.",
    ],
  },
  {
    role: "Vice-President, Google Developer Student Club",
    org: "Nanyang Polytechnic",
    period: "2021 – 2022",
    kind: "Leadership",
    points: [
      "Ran technical workshops (FastAPI, Android/Kotlin, Flutter) and hosted a Python Code Clinic and a Unity game-dev showcase.",
    ],
  },
];

export const education: ExperienceItem[] = [
  {
    role: "B.Sc. (Computer Science)",
    org: "Singapore Management University",
    period: "2025 – 2029 (expected)",
    kind: "Education",
    points: [
      "Coursework: Programming Fundamentals (Java), Discrete Mathematics, Computer Architecture, Statistics for Data Science, Interaction Design & Prototyping.",
    ],
  },
  {
    role: "Diploma in Cybersecurity & Digital Forensics",
    org: "Nanyang Polytechnic",
    period: "2020 – 2023",
    kind: "Education",
    points: [
      "GPA 3.86 · Director's List (Year 1 & Year 2 Sem 2).",
      "Distinctions in Web Development, App Development, Law & Ethics of IT, Systems Security Management, and Cybersecurity Attack & Defence.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    acronym: "CCP",
    issuer: "Amazon Web Services",
    issued: "Jan 2026",
    expiry: "Jan 2029",
    accent: "amber",
    credentialId: "d64bc389ae7d4b0e869c64460c62f494",
    verifyUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/d64bc389ae7d4b0e869c64460c62f494",
    image: "images/certs/aws_ccp.png",
  },
  {
    name: "Certified Ethical Hacker",
    acronym: "CEH",
    issuer: "EC-Council",
    issued: "Apr 2022",
    expiry: "Apr 2025",
    credentialId: "ECC8246053179",
    // EC-Council public verification portal (enter the credential ID).
    // TODO: replace with your direct Aspen verification link if you have one.
    verifyUrl: "https://aspen.eccouncil.org/Verify",
    image: "images/certs/ceh.jpg",
    accent: "emerald",
  },
  {
    name: "Computer Hacking Forensic Investigator",
    acronym: "CHFI",
    issuer: "EC-Council",
    issued: "Apr 2022",
    expiry: "Apr 2025",
    credentialId: "ECC9340875621",
    verifyUrl: "https://aspen.eccouncil.org/Verify",
    image: "images/certs/chfi.jpg",
    accent: "violet",
  },
];
