import type { Profile } from "../types";

export const profile: Profile = {
  name: "Danial Afiq",
  role: "Security-focused software engineer",
  positioning: "B.Sc. Computer Science @ SMU · Software · Security · Cloud",
  location: "Singapore",
  tagline:
    "Computer Science undergrad at SMU building full-stack web and desktop apps with a secure-by-design approach. Seeking software & security engineering internships.",
  about: [
    "I'm a Computer Science undergraduate at Singapore Management University, with a Diploma in Cybersecurity & Digital Forensics from Nanyang Polytechnic (GPA 3.86).",
    "I have hands-on experience building full-stack web and desktop applications with Python, React, Node/Express, MySQL, and Electron — and I bring a security-first lens from my forensics background, OWASP work, and tools like Burp Suite, Nmap, and Wireshark. I like projects where engineering, security, and usability overlap, and I document the decisions and tradeoffs along the way.",
  ],
  facts: [
    { label: "Studying", value: "B.Sc. Computer Science, SMU · grad. Aug 2029" },
    { label: "Background", value: "Dip. Cybersecurity & Digital Forensics, NYP · GPA 3.86" },
    { label: "Certified", value: "CEH · CHFI · AWS Cloud Practitioner" },
    { label: "Seeking", value: "Software / Security Engineering internships" },
    { label: "Based in", value: "Singapore" },
  ],
  // Old portrait from the previous site is in use; replace public/images/portrait.jpg
  // with your newer photo (square, ~640px) to update it.
  photo: "images/portrait.jpg",
  email: "danial.afiq.official@gmail.com",
  githubUrl: "https://github.com/Danial-Afiq",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-danial-afiq/",
  // TODO: drop your resume at public/resume.pdf.
  resumeUrl: "resume.pdf",
  oldSiteUrl: "https://danialafiqofficial.wixsite.com/my-site",
};
