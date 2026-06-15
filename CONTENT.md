# CONTENT.md

## Profile

Name:

```txt
Danial Afiq
```

Primary positioning:

```txt
Security-Aware Software Engineer
```

Alternative positioning lines:

```txt
Computer Science Student @ SMU
Software Engineering · Cybersecurity · DevOps
Building practical software with a security-first mindset
```

Short hero description:

```txt
I build practical software with a security-first mindset — from full-stack apps and encrypted desktop tools to CTFs, cloud, and automation projects.
```

Longer about draft:

```txt
I’m Danial Afiq, a Computer Science undergraduate at Singapore Management University with a background in Cybersecurity & Digital Forensics from Nanyang Polytechnic. My work sits at the intersection of software engineering, cybersecurity, and cloud/devops. I like building practical systems — encrypted desktop apps, secure file-transfer tools, web applications, CTF solutions, and school projects that solve real user problems.
```

Tone:
- honest
- technical
- direct
- not exaggerated
- not overly corporate

Avoid:
- “I am passionate about technology”
- “highly motivated”
- “expert”
- fake metrics
- generic buzzwords

---

## Contact and Links

Current old portfolio:

```txt
https://danialafiqofficial.wixsite.com/my-site
```

LinkedIn:

```txt
https://www.linkedin.com/in/muhammad-danial-afiq/
```

GitHub:

```txt
TODO: add GitHub profile URL
```

Email:

```txt
TODO: add public email address
```

Resume:

```txt
Place resume PDF at public/resume.pdf
```

Important:
- Do not include phone number by default.
- Use email, GitHub, LinkedIn, and resume download instead.

---

## Education

### Singapore Management University

```txt
Bachelor of Science in Computer Science
Year 2 Computer Science Student
```

Notes:
- Use “Year 2 Computer Science Student @ SMU” in hero.
- Do not invent graduation year unless provided.

---

### Nanyang Polytechnic

```txt
Diploma in Cybersecurity & Digital Forensics
GPA: 3.85/4.00 or 3.86/4.00
```

Use cautious wording:

```txt
Diploma in Cybersecurity & Digital Forensics, Nanyang Polytechnic
```

Achievements from old portfolio:
- Director’s List, AY2020/21 S2
- Director’s List, AY2021/22 S2
- MENDAKI Scholarship
- Wu Hsioh Kwang Scholarship

Distinction modules from old portfolio:
- Web Development
- App Development
- Law & Ethics of IT
- Systems Security Management

Activities from old portfolio:
- Vice-President, NYP Google Developer Student Club
- Volunteer, Chong Pang CC

If uncertain, include achievements in a compact education section and allow easy editing.

---

## Certifications

From old portfolio:
- CEH certificate shown
- CHFI certificate shown

Additional known certification:
- AWS Certified Cloud Practitioner

Use placeholders for dates / credential IDs:

```txt
TODO: add certificate dates and credential links if available
```

Do not invent credential IDs.

---

## Experience

### PwC / Digital Trust Internship

Type:

```txt
Work / Internship
```

Suggested cautious summary:

```txt
Internship experience involving client due diligence, AML-related work, basic auditing exposure, and technology/cybersecurity-related project exposure.
```

Possible highlights:
- Client due diligence and AML-related support
- Exposure to audit/compliance workflows
- Exposure to AWS-related automation or cloud concepts where relevant
- Cybersecurity tabletop exercise / inject-related exposure if appropriate

Important:
- Do not overstate technical ownership.
- Do not claim production engineering work unless details are provided.
- Keep wording professional and cautious.

---

### IHiS Cybersecurity TTX / Injects Exposure

Type:

```txt
Project / Cybersecurity Exposure
```

Suggested summary:

```txt
Cybersecurity tabletop exercise / injects exposure involving scenario-based security response planning and communication.
```

Possible highlights:
- Scenario-based cybersecurity planning
- Inject preparation or understanding
- Communication and coordination
- Security awareness and incident response thinking

Important:
- Do not overstate role.
- Use as project/experience exposure if exact title is unknown.

---

### Singapore Police Force / ProCom National Service

Type:

```txt
Leadership / National Service
```

Suggested summary:

```txt
Served in the Singapore Police Force under ProCom, developing operational discipline, communication, leadership, and decision-making under pressure.
```

Possible highlights:
- Team Leader responsibilities
- Operational readiness
- Communication under pressure
- Responsibility and discipline
- Working in structured, high-stakes environments

Important:
- Keep details appropriate and non-sensitive.
- Do not include operational details that should not be public.

---

### SMU School Projects

Type:

```txt
Education / Projects
```

Suggested summary:

```txt
Computer Science coursework and group projects involving software development, interaction design, UX research, AI, and cybersecurity-related learning.
```

Featured school project:
- EcoEats

---

## Featured Projects

### 1. Secure Folder / Vault App

ID:

```txt
secure-folder-vault
```

Category:
- Desktop App
- Security
- Software Engineering

Status:

```txt
Completed / In Progress
```

Choose the most accurate status.

Summary:

```txt
Encrypted desktop vault application for storing images, files, videos, and notes securely. Built with Electron, React, Node.js, secure IPC, encryption, thumbnails, and local vault storage.
```

Tech:
- Electron
- React
- Node.js
- TypeScript or JavaScript
- Sharp
- IPC
- Local file system
- Encryption
- GitHub Actions

Highlights:
- Local encrypted vault storage
- Image/file/video/notes organization
- Thumbnail generation for better performance
- Secure IPC considerations
- Overlay image viewer
- Tabs for Images, Videos, Files, and Notes
- Packaging considerations for Windows
- GitHub Actions / CI exposure

Security / engineering angle:
- Local-first design
- Encryption for stored content
- Careful IPC boundary between renderer and main process
- Performance optimization using thumbnails and caching
- Avoid exposing decrypted content unnecessarily

Lessons:
- Electron security matters
- UX and performance are closely linked
- Packaging desktop apps requires practical tradeoffs
- Secure local storage needs careful handling

Links:
- GitHub: TODO
- Demo: TODO
- Screenshots: TODO

---

### 2. Secure P2P File Transfer / Tkinter Project

ID:

```txt
secure-p2p-file-transfer
```

Category:
- Cybersecurity
- Desktop App
- Networking

Status:

```txt
Completed
```

Summary:

```txt
Standalone desktop application for secure file transfer over a local network, using encryption, steganography, access-token login, and logging.
```

Tech:
- Python
- Tkinter
- MySQL
- Figma
- Networking
- Encryption
- Steganography

Highlights:
- Secure local network file transfer
- Files encrypted and encoded into images before transfer
- Receiver decodes and decrypts the original file
- Access-token-based login as a 2FA-like mechanism
- GUI for sending and receiving files
- Logging support

Security / engineering angle:
- Confidentiality during transfer
- Authentication flow using access token file
- Practical GUI around security workflow
- Logging for accountability

Notes from old portfolio:
- Made during Nanyang Polytechnic
- Standalone desktop application
- Allows company to send files over local network securely and retrieve logs
- Uses image steganography after encryption
- Receiver enters sender IP and port to receive files
- Recipient decodes and decrypts file
- Access token upload acts like 2FA

Links:
- GitHub: TODO
- Demo: TODO
- Screenshots: TODO

---

### 3. Web Application Security Project

ID:

```txt
web-application-security
```

Category:
- Application Security
- Web Security
- Cybersecurity

Status:

```txt
Completed
```

Summary:

```txt
Secured a vulnerable restaurant web application by identifying and patching web security issues such as insecure deserialization, server-side template injection, session risks, SQL injection concepts, and OWASP Top 10 issues.
```

Tech:
- Python
- Flask
- OWASP Top 10
- JWT-style signing
- Secure cookies
- SQL injection concepts
- SSTI concepts
- Insecure deserialization concepts

Highlights:
- Fictitious ABC Restaurant web application
- Cookie/cart security improvement
- Digital-signature-inspired validation
- Base64 serialized cart data with appended signature
- Web vulnerability identification and patching
- OWASP Top 10 learning

Security / engineering angle:
- Defensive application security
- Secure session/cart handling
- Input validation and template safety
- Avoid insecure deserialization
- Avoid server-side template injection risks

Important safety rule:
- Present this as defensive learning.
- Do not include offensive exploit payloads.
- Do not provide a step-by-step exploit guide.

Links:
- Old hosted project: http://danserenity.pythonanywhere.com
- GitHub: TODO
- Screenshots: TODO

---

### 4. EcoEats

ID:

```txt
ecoeats
```

Category:
- UX
- School Project
- Web App Concept
- Product Design

Status:

```txt
Completed / Prototype
```

Summary:

```txt
Surplus food marketplace concept helping food vendors sell leftover food at discounted rates while allowing customers to discover and reserve food for self-pickup.
```

Tech:
- Figma
- UX Research
- Prototyping
- Interaction Design
- User Flows

Highlights:
- Vendor/customer flows
- Vendor adds surplus items
- Vendor sets discount timing and rates
- Customer reserves food for self-pickup
- QR pickup confirmation
- Orders dashboard with pending/completed states
- Analytics page
- Vendor interview insights

Research context:
- Interviewed a food vendor
- Observed peak-hour and leftover-food constraints
- Considered perishability and vendor workflow
- Designed around practical vendor/customer needs

Case study should include:
- Problem
- User groups
- Research insight
- Main flows
- Design decisions
- What changed after feedback
- What could be improved

Links:
- Figma: TODO
- Screenshots: TODO

---

### 5. BrainHack / TIL-AI 2026

ID:

```txt
brainhack-til-ai-2026
```

Category:
- AI
- Hackathon
- Cloud
- Software Engineering

Status:

```txt
Completed / Participated
```

Summary:

```txt
AI competition work involving ASR, CV, NLP/RAG, and autonomous game-agent tasks, with Dockerized workflows and cloud-based development.
```

Tech:
- Python
- Docker
- Google Cloud Workbench
- Whisper
- ASR
- CV
- NLP
- RAG
- Autonomous agents

Highlights:
- Worked with speech-to-text / ASR tasks
- Tested Whisper models
- Used Dockerized competition workflow
- Used cloud development environment
- Explored AI task categories including ASR, CV, NLP/RAG, and autonomous game agent work
- Learned to work under competition constraints

Important:
- Do not claim awards unless provided.
- Do not include private competition material.
- Keep writeup high-level unless content is safe to publish.

Links:
- GitHub: TODO
- Writeup: TODO

---

### 6. CDDC / CTF Lab

ID:

```txt
cddc-ctf-lab
```

Category:
- Cybersecurity
- CTF
- Hackathon
- Scripting

Status:

```txt
Ongoing / Coming Soon
```

Summary:

```txt
Collection of CTF-style cybersecurity problem solving, decoding, web security, cryptography, scripting, and challenge writeups where safe to share.
```

Tech:
- Python
- Linux
- Kali
- Hashing
- Scripting
- Cryptography basics
- Web security
- Reverse engineering basics

Highlights:
- Solved CTF-style challenges
- Used scripting to decode and automate tasks
- Practiced web security reasoning
- Practiced cryptography and encoding/decoding workflows
- Documented learning process

Safety:
- Do not publish active flags
- Do not publish private challenge infrastructure
- Do not publish credentials
- Do not publish unsafe exploit instructions
- Keep writeups educational and defensive

Suggested page note:

```txt
Writeups focus on learning process and defensive understanding. Sensitive details, credentials, active flags, and private challenge material are omitted.
```

Links:
- GitHub: TODO
- Writeups: TODO

---

## Additional / Older Projects

These can appear on the full Projects page but not necessarily homepage.

### Flask Restaurant / App Development Project

ID:

```txt
flask-restaurant-app
```

Category:
- Web
- School Project
- Backend

Summary:

```txt
Group web application built during Nanyang Polytechnic App Development module using Flask, WTForms, Shelve, Bootstrap, HTML, CSS, JavaScript, and database concepts.
```

Tech:
- Python
- Flask
- WTForms
- Bootstrap
- HTML
- CSS
- JavaScript
- MySQL / Shelve

Highlights:
- User registration and login
- Password hashing
- Profile page
- Basic web app structure
- Group project collaboration

Old hosted link:

```txt
http://danserenity.pythonanywhere.com
```

---

### Chat Project

ID:

```txt
chat-project
```

Category:
- Web
- Realtime
- Personal Project

Summary:

```txt
Personal chat project built with Python Flask, WebSockets, JavaScript, and MS SQL.
```

Tech:
- Python
- Flask
- WebSockets
- JavaScript
- HTML
- CSS
- MS SQL

Highlights:
- Realtime chat room
- WebSocket communication
- Backend and frontend integration

Links:
- GitHub: TODO
- Demo: TODO

---

### Discord Bot

ID:

```txt
discord-bot
```

Category:
- Automation
- Bot
- Personal Project

Summary:

```txt
Discord bot project exploring automation and bot interactions.
```

Tech:
- Python or JavaScript: TODO confirm
- Discord API: TODO confirm

Links:
- GitHub: TODO

---

### HTML Project

ID:

```txt
html-project
```

Category:
- Web
- Frontend
- Archived

Summary:

```txt
Older frontend project from earlier web development learning.
```

Tech:
- HTML
- CSS
- JavaScript

Status:
- Archived

---

### Hotel Prototype

ID:

```txt
hotel-prototype
```

Category:
- UX
- Prototype
- Archived

Summary:

```txt
Older hotel-related prototype project.
```

Tech:
- Figma or prototyping tool: TODO confirm

Status:
- Archived

---

### Mobile App Prototype

ID:

```txt
mobile-app-prototype
```

Category:
- UX
- Mobile
- Prototype

Summary:

```txt
Older mobile app prototype project.
```

Tech:
- Figma or prototyping tool: TODO confirm

Status:
- Archived

---

## Skill Groups

### Languages

- Python — Comfortable
- JavaScript — Used in projects
- TypeScript — Learning / Used in projects
- SQL — Used in projects
- HTML — Comfortable
- CSS — Comfortable

---

### Frontend

- React — Used in projects
- Tailwind CSS — Used in projects
- Figma — Used in projects
- Responsive UI — Used in projects
- Interaction Design — Used in school projects

---

### Backend

- Node.js — Used in projects
- Express — Used in projects
- Flask — Used in projects
- REST APIs — Used in projects
- WebSockets — Used in projects
- Authentication basics — Used in projects

---

### Desktop / App

- Electron — Used in projects
- Tkinter — Used in projects
- Local file system handling — Used in projects
- IPC — Used in projects
- App packaging — Learning / Used in projects

---

### Cybersecurity

- Web Security — Comfortable
- OWASP Top 10 — Comfortable
- Cryptography basics — Used in projects
- Secure coding — Used in projects
- Digital forensics background — Comfortable
- CTF problem solving — Used in practice
- Ethical hacking concepts — Comfortable

---

### Cloud / DevOps

- AWS — Learning / Certified Cloud Practitioner
- Docker — Used in projects
- GitHub Actions — Used in projects
- CI/CD — Learning / Used in projects
- Linux — Used in projects
- Remote SSH / cloud workbench — Used in projects

---

### AI / Emerging Tech

- LLMs — Exploring
- RAG — Exploring / Hackathon exposure
- Whisper / ASR — Used in BrainHack
- Computer Vision — Hackathon exposure
- NLP — Hackathon exposure
- Autonomous agents — Hackathon exposure

---

### Tools

- Git
- GitHub
- VS Code
- Docker
- Kali Linux
- VMware
- Figma
- Google Cloud Workbench

---

## Lab Entries

### LOG-001: Secure File Transfer

Category:

```txt
Security Notes
```

Status:

```txt
Published / Draft
```

Summary:

```txt
Notes on designing a secure local-network file-transfer application using encryption, steganography, access-token login, and logging.
```

Tags:
- Python
- Tkinter
- Encryption
- Steganography
- Local Network

---

### LOG-002: Web Application Security

Category:

```txt
Security Notes
```

Status:

```txt
Draft
```

Summary:

```txt
Defensive notes from securing a vulnerable restaurant web application and learning about OWASP Top 10 risks.
```

Tags:
- Flask
- OWASP
- Secure Cookies
- SSTI
- Insecure Deserialization

Safety:
- Keep defensive.
- Avoid exploit payloads.

---

### LOG-003: BrainHack ASR

Category:

```txt
BrainHack
```

Status:

```txt
Draft
```

Summary:

```txt
Notes from testing ASR workflows using Whisper models, Dockerized builds, and cloud-based competition infrastructure.
```

Tags:
- ASR
- Whisper
- Docker
- Python
- Google Cloud

---

### LOG-004: CDDC Practice

Category:

```txt
CDDC
```

Status:

```txt
Coming Soon
```

Summary:

```txt
CTF-style cybersecurity learning notes covering scripting, decoding, web security reasoning, and challenge methodology where safe to share.
```

Tags:
- CTF
- Python
- Linux
- Cybersecurity
- Problem Solving

Safety:
- Do not include flags, credentials, or active challenge secrets.

---

### LOG-005: AWS / DevOps Notes

Category:

```txt
AWS / DevOps Notes
```

Status:

```txt
Coming Soon
```

Summary:

```txt
Learning notes from AWS, Docker, GitHub Actions, CI/CD, and cloud/devops fundamentals.
```

Tags:
- AWS
- Docker
- GitHub Actions
- CI/CD
- DevOps

---

## Suggested Homepage Copy

### Hero Eyebrow

```txt
SYSTEM ONLINE · DANIAL AFIQ
```

### Hero Title

```txt
Security-aware software engineer in progress.
```

### Hero Subtitle

```txt
Year 2 Computer Science student at SMU building practical software across web, desktop, cybersecurity, cloud, and AI.
```

### CTA Labels

```txt
View Projects
Open Lab
Download Resume
Contact
```

---

## Suggested Section Labels

Use these labels for personality:

```txt
01 / SYSTEM BOOT
02 / FEATURED MODULES
03 / EXPERIENCE LOG
04 / TECH STACK
05 / LAB NOTES
06 / CONTACT HANDSHAKE
```

---

## Suggested Status Card Copy

```txt
STATUS
Active

FOCUS
Software + Security

LOCATION
Singapore

MODE
Building / Learning

STACK
React · Python · Docker · AWS

LAB
CTF · AI · DevOps
```

---

## Placeholder Checklist

Before publishing, replace:

- TODO GitHub profile URL
- TODO public email
- TODO resume PDF
- TODO project GitHub links
- TODO demo links
- TODO project screenshots
- TODO exact employment dates if desired
- TODO certificate credential links
- TODO final GPA if consistency matters
- TODO GitHub username in deployment docs

---

## Public Safety Reminder

Before publishing any Lab or CTF content, review it manually.

Do not publish:
- flags
- credentials
- private challenge endpoints
- active exploit payloads
- internal infrastructure
- private API keys
- private runbooks
- sensitive screenshots

When unsure, use:

```txt
Writeup coming soon. Sensitive challenge details are intentionally omitted.
```
