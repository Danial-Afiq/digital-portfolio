import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "secure-folder-vault",
    title: "Vault App",
    tagline: "Encrypted desktop storage for files and photos with AES-256.",
    category: ["Desktop", "Security", "Software"],
    status: "Completed",
    featured: true,
    year: "2025",
    accent: "emerald",
    summary:
      "A cross-platform Electron app that stores images and files locally, encrypted with AES-256 and protected by integrity checks. Built around a hardened renderer/main boundary, with generated thumbnails and lazy loading so large libraries stay fast.",
    tech: ["Electron", "React", "Node.js", "AES-256", "Context Isolation", "IPC"],
    problem:
      "I wanted a private place to keep sensitive files on my own machine — encrypted at rest, with no cloud dependency and no decrypted data left exposed.",
    role: "Sole developer — architecture, encryption flow, UI, packaging.",
    features: [
      "Local AES-256 encryption with integrity checks on stored content",
      "Secure IPC APIs using context isolation and a preload script",
      "Thumbnail generation, an image viewer, and caching / lazy loading",
      "Packaged with Electron-Vite; automated builds via GitHub Actions (CI)",
    ],
    engineering: [
      "Local-first design — nothing leaves the machine",
      "Context isolation + preload to keep the renderer sandboxed from Node",
      "A deliberate IPC surface between renderer and main process",
      "Caching/lazy loading to keep perceived performance high on big vaults",
    ],
    challenges:
      "Keeping the renderer responsive while encryption and image work run in the main process, and getting packaging to behave across platforms.",
    outcome:
      "A working desktop vault with encryption at rest, a CI build pipeline, and room to formalise key handling further.",
    lessons: [
      "Electron security (context isolation, preload, IPC) is a design decision, not an add-on",
      "Perceived performance is mostly caching and lazy loading",
    ],
    improvements: ["Formalise key management", "Add an audit of the IPC surface"],
    diagram: {
      caption: "How content stays encrypted at rest",
      nodes: [
        { id: "ui", label: "React UI", note: "Renderer" },
        { id: "ipc", label: "Secure IPC", note: "Preload" },
        { id: "main", label: "Main process", note: "Node.js" },
        { id: "crypto", label: "AES-256", note: "Encrypt" },
        { id: "vault", label: "Local vault", note: "Disk" },
      ],
      flow: [
        ["ui", "ipc", "request"],
        ["ipc", "main"],
        ["main", "crypto"],
        ["crypto", "vault", "at rest"],
      ],
    },
    githubUrl: "https://github.com/Danial-Afiq/Electron-VaultApp",
    gallery: [
      { src: "images/projects/secure-folder-vault/VaultLogin.png", alt: "Secure Folder login / unlock screen" },
      { src: "images/projects/secure-folder-vault/VaultImagePage.png", alt: "Encrypted image library with thumbnails" },
      { src: "images/projects/secure-folder-vault/VaultAudioPage.png", alt: "Audio library with an in-app player" },
    ],
  },
  {
    id: "restaurant-web-app",
    title: "Restaurant Web App",
    tagline: "Full-stack ordering & review system with payments and email.",
    category: ["Web", "Software"],
    status: "Completed",
    featured: false,
    year: "2022",
    accent: "amber",
    summary:
      "A restaurant ordering and review platform built with Flask. Customers browse the menu, order, pay, and leave reviews; the app handles accounts, email notifications, spam protection, and payment via Stripe. Built and led as a team of four.",
    tech: ["Python", "Flask", "Jinja", "Bootstrap", "Stripe API", "reCAPTCHA"],
    problem:
      "Build a complete, usable ordering-and-review system for a restaurant — front to back — as a graded team project.",
    role: "Led a team of 4. Graded Distinction.",
    features: [
      "Menu browsing, ordering, and product reviews",
      "Accounts with login/registration and an admin profile area",
      "Stripe-based checkout and built-in email notifications",
      "Google reCAPTCHA to reduce spam/abuse",
    ],
    engineering: [
      "Server-rendered Flask + Jinja architecture",
      "Third-party integrations (Stripe, reCAPTCHA, email) behind clean handlers",
      "Coordinated a 4-person team and split the work across the stack",
    ],
    outcome: "A working, graded full-stack web application delivered by a team I led.",
    lessons: [
      "Most of the work in a full-stack app is the integrations and the edges",
      "Leading a small team is mostly clear interfaces and communication",
    ],
    demoUrl: "https://danserenity.pythonanywhere.com/",
    githubUrl: "https://github.com/danialafiq03/ABCRestaurant",
    gallery: [
      { src: "images/projects/restaurant-web-app/01-home.png", alt: "ABC Restaurant home page" },
      { src: "images/projects/restaurant-web-app/02-login.png", alt: "Login form" },
      { src: "images/projects/restaurant-web-app/03-admin-profile.png", alt: "Admin account profile" },
      { src: "images/projects/restaurant-web-app/04-review-product.png", alt: "Product page with reviews" },
    ],
  },
  {
    id: "secure-p2p-file-transfer",
    title: "Secure P2P Transfer",
    tagline: "Encrypted LAN file transfer hidden inside images via steganography.",
    category: ["Security", "Desktop"],
    status: "Completed",
    featured: true,
    year: "2022",
    accent: "violet",
    summary:
      "A desktop tool for moving files securely across a local network. Files are encrypted and then concealed inside a cover image with steganography before transfer; the receiver decodes and decrypts the original. Access is gated by an uploaded token that acts like a second factor, with event/log monitoring.",
    tech: ["Python", "Tkinter", "MySQL", "PyStego", "Plotly", "Cryptography"],
    problem:
      "A team project to move files between machines on a LAN without exposing their contents — wrapped in a usable GUI.",
    role: "UI designer & programmer in a team of 4. Earned grade A.",
    features: [
      "Encrypt a file, then hide it inside a cover image before sending",
      "Receiver enters sender IP + port, then decodes and decrypts the original",
      "Access-token login that works like a lightweight 2FA",
      "Event and log monitoring for accountability",
    ],
    engineering: [
      "Confidentiality in transit via encryption before steganographic encoding",
      "Defence in depth — encryption plus concealment, not obscurity alone",
      "Authentication through an uploaded access-token file",
      "Logging so transfers can be reviewed afterwards",
    ],
    outcome: "A complete desktop app demonstrating an end-to-end secure transfer workflow on a LAN.",
    lessons: [
      "Layering encryption and steganography is about defence in depth",
      "Security tools still live or die by their UX",
    ],
    diagram: {
      caption: "Encrypt → hide → transfer → recover",
      nodes: [
        { id: "send", label: "Sender", note: "Tkinter" },
        { id: "enc", label: "Encrypt + hide", note: "stego" },
        { id: "lan", label: "Local network", note: "IP : port" },
        { id: "rcv", label: "Receiver", note: "decode" },
        { id: "file", label: "Original file", note: "restored" },
      ],
      flow: [
        ["send", "enc"],
        ["enc", "lan", "cover image"],
        ["lan", "rcv"],
        ["rcv", "file", "decrypt"],
      ],
    },
    githubUrl: undefined, // TODO: add GitHub repo link
    gallery: [
      { src: "images/projects/secure-p2p-file-transfer/01-send-files.png", alt: "Send Files screen with IP, port and cover image" },
      { src: "images/projects/secure-p2p-file-transfer/02-receive-files.png", alt: "Receive Files screen" },
      { src: "images/projects/secure-p2p-file-transfer/03-login-access-token.png", alt: "Login with access-token upload" },
    ],
  },
  {
    id: "web-application-security",
    title: "Web App Security",
    tagline: "Hardened a vulnerable Flask app against OWASP Top 10 issues.",
    category: ["Security", "Web"],
    status: "Completed",
    featured: false,
    year: "2021",
    accent: "emerald",
    summary:
      "A defensive application-security project: finding and patching weaknesses in a deliberately vulnerable restaurant web app — insecure deserialization, template injection, session/cart tampering, and other OWASP Top 10 issues — and adding signature-based validation for cart data.",
    tech: ["Python", "Flask", "OWASP Top 10", "Secure cookies"],
    problem:
      "A deliberately vulnerable app shipped with common web vulnerabilities. The goal was to find them, fix them, and reason about why each fix works.",
    role: "Defensive security — identification and patching.",
    features: [
      "Hardened cart/cookie handling against tampering",
      "Signature-based validation: base64-serialised cart data with an appended signature",
      "Reviewed and patched OWASP Top 10 categories",
    ],
    engineering: [
      "Secure session and cart handling",
      "Input validation and template safety",
      "Avoiding insecure deserialization and server-side template injection",
    ],
    outcome: "A clear before/after of the app's security posture, framed as defensive learning.",
    lessons: ["Most web vulnerabilities come down to trusting input you shouldn't"],
    diagram: {
      caption: "Signed cart data validation",
      nodes: [
        { id: "client", label: "Browser", note: "cart cookie" },
        { id: "flask", label: "Flask app", note: "server" },
        { id: "verify", label: "Verify signature", note: "base64 + sig" },
        { id: "ok", label: "Trusted cart", note: "or reject" },
      ],
      flow: [
        ["client", "flask", "request"],
        ["flask", "verify"],
        ["verify", "ok"],
      ],
    },
    githubUrl: "https://github.com/danialafiq03/ASPJ",
    gallery: [
      { src: "images/projects/web-application-security/01-cart-cookies.png", alt: "Cart with cookie/session values inspected in DevTools" },
      { src: "images/projects/web-application-security/02-ssti-code.png", alt: "Server-side template injection in a 404 handler" },
      { src: "images/projects/web-application-security/03-serialization.png", alt: "Serialization / deserialization cycle diagram" },
    ],
    // Defensive write-up only — no exploit payloads or step-by-step attack guides.
  },
  {
    id: "mobile-632-furniture",
    title: "632 Furniture",
    tagline: "AR furniture-shopping mobile app — Figma prototype.",
    category: ["UI / UX"],
    status: "Prototype",
    featured: false,
    year: "2022",
    accent: "cyan",
    summary:
      "A mobile shopping app concept for a furniture store, with an AR preview feature so customers can see pieces in their space before buying. Designed end-to-end from onboarding and account creation through checkout and post-purchase feedback.",
    tech: ["Figma", "UX Research", "Prototyping", "AR concept", "Interaction Design"],
    role: "UX & interaction design.",
    features: [
      "Onboarding and account creation flow",
      "AR preview of furniture in the user's space",
      "Checkout with a digital receipt and post-purchase feedback prompt",
    ],
    outcome: "A polished mobile prototype covering the full shopping journey.",
    figmaUrl: "https://www.figma.com/proto/AUVmBm2aM2AKXKWYEtAGq5/Untitled?node-id=0-3",
    gallery: [
      { src: "images/projects/mobile-632-furniture/01-welcome.png", alt: "632 Furniture welcome screen" },
      { src: "images/projects/mobile-632-furniture/02-create-account.png", alt: "Create an account screen" },
      { src: "images/projects/mobile-632-furniture/03-purchase-ar-feedback.png", alt: "Purchase confirmation with feedback prompt" },
    ],
  },
  {
    id: "ecoeats",
    title: "EcoEats",
    tagline: "Surplus-food marketplace concept — vendor & customer flows.",
    category: ["UI / UX"],
    status: "Prototype",
    featured: false,
    year: "2024",
    accent: "amber",
    summary:
      "A product/UX concept that helps vendors sell surplus food at a discount while customers discover and reserve it for self-pickup. Designed around real vendor constraints from an interview, with end-to-end flows from listing to QR pickup.",
    tech: ["Figma", "UX Research", "Prototyping", "Interaction Design"],
    problem:
      "Vendors throw away usable surplus at the end of the day; customers would buy it cheaply if it were easy to find and collect.",
    role: "UX research and interaction design within an SMU group project.",
    features: [
      "Vendor flow: add surplus items, set discount timing and rates",
      "Customer flow: discover, reserve, and collect via QR confirmation",
      "Orders dashboard with pending/completed states and a vendor analytics view",
    ],
    engineering: [
      "Interviewed a real food vendor to ground the design",
      "Designed around perishability and peak-hour workflow constraints",
      "Iterated the flows after feedback",
    ],
    outcome: "A clickable prototype and case study covering the problem, the two user groups, and the design decisions.",
    lessons: ["Talking to one real user reshapes the whole design"],
    figmaUrl:
      "https://www.figma.com/proto/4qgz8jLmZ2irUIpDPkRCfv/EcoEats--HI-FI-Prototype---A-Testing-?node-id=49-745&starting-point-node-id=13%3A729",
    gallery: [
      {
        src: "images/projects/ecoeats/01-vendor-home.png",
        alt: "EcoEats vendor dashboard with quick actions and daily impact summary",
      },
      {
        src: "images/projects/ecoeats/02-menu-management.png",
        alt: "Vendor menu management with stock controls and discount creation",
      },
      {
        src: "images/projects/ecoeats/03-create-discount.png",
        alt: "Create Discount flow for selecting surplus food and promotion timing",
      },
      {
        src: "images/projects/ecoeats/04-paused-pending-order.png",
        alt: "Paused surplus-food promotion with pending customer orders",
      },
      {
        src: "images/projects/ecoeats/05-batch-cooking-overview.png",
        alt: "Batch cooking overview grouping active orders by menu item",
      },
    ],
  },
  {
    id: "danschat",
    title: "DansChat",
    tagline: "Realtime web chat room with WebSockets.",
    category: ["Web", "Software"],
    status: "Completed",
    featured: false,
    year: "2022",
    accent: "cyan",
    summary:
      "A realtime chat application with live rooms, an online-users list, and instant message delivery over WebSockets, backed by a Flask server and MS SQL.",
    tech: ["Python", "Flask", "WebSockets", "JavaScript", "MS SQL"],
    role: "Personal project.",
    features: [
      "Realtime messaging over WebSockets",
      "Live online-users list and a shared chat room",
      "Login and persistent backend with MS SQL",
    ],
    outcome: "A working realtime chat demonstrating WebSocket communication front to back.",
    githubUrl: "https://github.com/danialafiq03/ChatApp",
    gallery: [
      { src: "images/projects/danschat/01-chat-room.png", alt: "DansChat chat room with online users" },
    ],
  },
  {
    id: "hotel-abc",
    title: "ABC Hotel",
    tagline: "Hotel booking experience — Figma prototype.",
    category: ["UI / UX"],
    status: "Prototype",
    featured: false,
    year: "2022",
    accent: "amber",
    summary:
      "An interactive Figma prototype for a hotel booking experience: a marketing home page with seasonal offers and a quick-book flow, plus room detail screens with features, pricing, and selection.",
    tech: ["Figma", "UX Research", "Prototyping", "Interaction Design"],
    role: "UX & interaction design.",
    features: [
      "Marketing home page with seasonal offers and a quick-book flow",
      "Room detail screens with features and pricing",
      "End-to-end booking click-through prototype",
    ],
    outcome: "A complete, clickable design prototype of the booking flow.",
    figmaUrl:
      "https://www.figma.com/proto/IhalcDbfxtQfLbkU1K30zo/Untitled?node-id=2-23&scaling=min-zoom&page-id=2%3A22&starting-point-node-id=2%3A23",
    gallery: [
      { src: "images/projects/hotel-abc/01-home.png", alt: "ABC Hotel home page with offers and quick-book" },
      { src: "images/projects/hotel-abc/02-king-room.png", alt: "King room detail and pricing" },
    ],
  },
  {
    id: "dansweb",
    title: "DansWeb",
    tagline: "Web-courses site — early HTML, CSS & JavaScript build.",
    category: ["Web"],
    status: "Archived",
    featured: false,
    year: "2020",
    accent: "violet",
    summary:
      "An early front-end project: a fictional web-development courses site with home, pricing, and reviews pages including a review submission form. From my first steps in HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Solo — front-end.",
    features: ["Multi-page layout (home, pricing, reviews)", "Review submission form", "Responsive styling"],
    outcome: "A foundational project from learning core front-end web development.",
    githubUrl: undefined,
    gallery: [
      { src: "images/projects/dansweb/01-home.png", alt: "DansWeb home page" },
      { src: "images/projects/dansweb/02-pricing.png", alt: "DansWeb pricing page" },
      { src: "images/projects/dansweb/03-reviews.png", alt: "DansWeb reviews page" },
    ],
  },
  {
    id: "discord-bot",
    title: "Discord Bot",
    tagline: "Music player, minigames, and MySQL-backed economy.",
    category: ["Software"],
    status: "Completed",
    year: "2022",
    accent: "emerald",
    featured: false,
    summary:
      "A Discord bot built with discord.js featuring a music player with a queue, minigames like a coinflip economy, and MySQL-backed CRUD for accounts and balances.",
    tech: ["JavaScript", "discord.js", "Node.js", "MySQL"],
    role: "Personal project.",
    features: [
      "Music playback with a queue (connect / play / enqueue)",
      "Coinflip minigame with a persistent balance economy",
      "Account commands backed by MySQL CRUD",
    ],
    outcome: "A working bot exploring automation, real-time interaction, and persistence.",
    githubUrl: "https://github.com/danialafiq03/DiscordBot",
    gallery: [
      { src: "images/projects/discord-bot/01-help-commands.png", alt: "Bot help — list of all commands" },
      { src: "images/projects/discord-bot/02-music-queue.png", alt: "Music queue commands" },
      { src: "images/projects/discord-bot/03-coinflip.png", alt: "Coinflip minigame with balance" },
    ],
  },
  {
    id: "fpl-nagbot",
    title: "FPL NagBot",
    tagline: "Mobile app tracking Fantasy Premier League player availability.",
    category: ["Software"],
    status: "Completed",
    featured: false,
    year: "2026",
    accent: "emerald",
    summary:
      "A React Native (Expo) mobile app that tracks player injuries and availability for Fantasy Premier League users and sends timely notifications so you never field an injured player.",
    tech: ["React Native", "Expo", "JavaScript", "REST APIs"],
    role: "Personal project.",
    features: [
      "Tracks player injury and availability status",
      "Timely push notifications before deadlines",
      "Mobile-first interface built with Expo",
    ],
    outcome: "A practical mobile app solving a real annoyance for FPL players.",
    githubUrl: "https://github.com/ravichandran-gokool/AntiZombieFPL",
  },
  {
    id: "roblox-rpg-prototype",
    title: "Multiplayer RPG Prototype",
    tagline: "Roblox RPG with quests, combat, shop, and progression.",
    category: ["Software"],
    status: "Completed",
    year: "2023",
    accent: "violet",
    featured: false,
    summary:
      "A multiplayer RPG prototype built in Roblox Studio with Lua, featuring quests, combat, a shop, and character progression. Game logic is modular across leveling, inventory, and reward-based gameplay.",
    tech: ["Roblox Studio", "Lua"],
    role: "Solo — gameplay systems and game logic.",
    features: [
      "Quest, combat, and shop systems",
      "Enemy encounters, reward-based quests, and weapon purchasing",
      "Modular logic for leveling, inventory, and progression",
    ],
    outcome: "A playable prototype demonstrating core RPG systems and modular game design.",
    githubUrl: undefined,
    gallery: [
      { src: "images/projects/roblox-rpg-prototype/RPG_1.png", alt: "In-world gameplay with health and currency HUD" },
      { src: "images/projects/roblox-rpg-prototype/RPG_2.png", alt: "Weapon shop with purchasable items" },
      { src: "images/projects/roblox-rpg-prototype/RPG_3.png", alt: "Quests and daily login rewards" },
    ],
  },
  {
    id: "splendor-game",
    title: "Splendor",
    tagline: "Console version of the Splendor board game, with AI opponents.",
    category: ["Software"],
    status: "Completed",
    featured: true,
    year: "2026",
    accent: "emerald",
    summary:
      "A console implementation of the board game Splendor, built as an SMU CS102 team project in Java. Models the full rule set — the token and development-card economy, nobles, turn flow, and win conditions — and ships with AI opponents at Easy/Medium/Hard difficulty.",
    tech: ["Java", "OOP"],
    role: "Team project (SMU CS102).",
    features: [
      "Complete Splendor rules, gem bank, nobles, and 3-tier card decks",
      "Configurable 2–4 players, human or AI",
      "AI bot opponents with Easy / Medium / Hard difficulty",
      "Turn flow, scoring, and win-condition tracking",
    ],
    outcome: "A complete, playable console version of the game with a working AI opponent.",
    githubUrl: "https://github.com/Danial-Afiq/CS102-Splendor",
    gallery: [
      { src: "images/projects/splendor-game/Splendor_Board.png", alt: "Splendor game board: gem bank, nobles, and card tiers" },
      { src: "images/projects/splendor-game/Splendor_Start.png", alt: "Game setup: players, AI bots, and difficulty" },
      { src: "images/projects/splendor-game/GameOver.png", alt: "Final scores and winner" },
      {
        src: "images/projects/splendor-game/Splendor.mp4",
        alt: "Gameplay demo video",
        type: "video",
        poster: "images/projects/splendor-game/Splendor_Board.png",
      },
    ],
  },
  {
    id: "brainhack-til-ai-2026",
    title: "BrainHack TIL-AI",
    tagline: "AI competition work across ASR, CV, NLP/RAG, and game agents.",
    category: ["AI", "Cloud / DevOps", "CTF / Hackathon"],
    status: "Completed",
    featured: false,
    year: "2026",
    accent: "cyan",
    summary:
      "Competition work spanning several AI task categories — speech-to-text, computer vision, NLP/RAG, and an autonomous game agent — using a Dockerised workflow and a cloud development environment.",
    tech: ["Python", "Docker", "Google Cloud", "Whisper", "RAG"],
    role: "Participant.",
    features: [
      "Tested Whisper models for speech-to-text",
      "Worked within a Dockerised competition workflow",
      "Explored ASR, CV, NLP/RAG, and autonomous-agent tasks",
    ],
    engineering: ["Reproducible, containerised builds", "Working under competition time and resource constraints"],
    outcome: "Hands-on exposure across a broad set of AI tasks in a constrained, real competition setting.",
    lessons: ["Containerising early saves you when the environment isn't yours"],
    githubUrl: undefined, // TODO: add GitHub / writeup link
    // High-level only — no private competition material.
  },
  {
    id: "brainhack-cddc-2026",
    title: "BrainHack CDDC 2026",
    tagline: "National cybersecurity CTF — team shortlisted for the Finals.",
    category: ["CTF / Hackathon", "Security"],
    status: "Completed",
    featured: false,
    year: "2026",
    accent: "violet",
    summary:
      "DSTA BrainHack's Cyber Defenders Discovery Camp (CDDC) — Singapore's national cybersecurity Capture-the-Flag. After weeks of online preparatory training and a qualifying round, my team was shortlisted for the physical Finals (10–11 June 2026), solving jeopardy-style challenges across multiple security domains.",
    tech: ["CTF", "Reverse Engineering", "Digital Forensics", "Cryptography", "Steganography", "Linux"],
    role: "Competitor (team).",
    features: [
      "Completed weeks of online preparatory training (code dissection, malware reverse engineering)",
      "Qualified through the online round to the physical Finals at BrainHack 2026",
      "Tackled challenges spanning cryptography, reverse engineering, digital forensics, hardware hacking, and steganography",
      "Competed against 400+ participants from JCs, polytechnics, and universities",
    ],
    outcome:
      "Shortlisted for the CDDC Finals. Flags, solutions, and sensitive challenge material are intentionally omitted; write-ups focus on methodology and defensive learning.",
    githubUrl: undefined, // TODO: add a write-up link if you publish one
    // Defensive framing only — no active flags or private challenge material.
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectById = (id: string) => projects.find((p) => p.id === id);

/** First gallery image, used as the tile/cover. */
export const coverOf = (p: Project) => p.gallery?.[0]?.src;

export type ProjectLinkKind = "github" | "demo" | "figma";

/** External links available for a project, in display order. */
export function projectLinks(p: Project): { kind: ProjectLinkKind; href: string; label: string }[] {
  const links: { kind: ProjectLinkKind; href: string; label: string }[] = [];
  if (p.demoUrl) links.push({ kind: "demo", href: p.demoUrl, label: "Live demo" });
  if (p.figmaUrl) links.push({ kind: "figma", href: p.figmaUrl, label: "Prototype" });
  if (p.githubUrl) links.push({ kind: "github", href: p.githubUrl, label: "GitHub" });
  return links;
}

/** The single most relevant external link for a compact card button. */
export const primaryLink = (p: Project) => projectLinks(p)[0];

export const allCategories = Array.from(
  new Set(projects.flatMap((p) => p.category)),
).sort();

/* ------------------------------------------------------------------ */
/*  Sorting                                                            */
/* ------------------------------------------------------------------ */

/**
 * Curated "most impressive → least" order (the default). Edit this list to
 * re-rank; any project id not listed falls to the end.
 */
export const IMPRESSIVE_ORDER: string[] = [
  "secure-folder-vault",
  "secure-p2p-file-transfer",
  "splendor-game",
  "web-application-security",
  "restaurant-web-app",
  "roblox-rpg-prototype",
  "fpl-nagbot",
  "discord-bot",
  "ecoeats",
  "brainhack-cddc-2026",
  "brainhack-til-ai-2026",
  "danschat",
  "mobile-632-furniture",
  "hotel-abc",
  "dansweb",
];

export type SortKey = "impressive" | "newest" | "oldest" | "type";

const impressiveRank = (p: Project) => {
  const i = IMPRESSIVE_ORDER.indexOf(p.id);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

/** Parse the leading 4-digit year from `project.year` (e.g. "Jan 2026" → 2026). */
const yearOf = (p: Project) => {
  const m = p.year?.match(/\d{4}/);
  return m ? Number(m[0]) : undefined;
};

export function sortProjects(list: Project[], key: SortKey): Project[] {
  const copy = [...list];
  switch (key) {
    case "newest":
      return copy.sort(
        (a, b) => (yearOf(b) ?? -Infinity) - (yearOf(a) ?? -Infinity) || impressiveRank(a) - impressiveRank(b),
      );
    case "oldest":
      return copy.sort(
        (a, b) => (yearOf(a) ?? Infinity) - (yearOf(b) ?? Infinity) || impressiveRank(a) - impressiveRank(b),
      );
    case "type":
      return copy.sort(
        (a, b) => a.category[0].localeCompare(b.category[0]) || impressiveRank(a) - impressiveRank(b),
      );
    case "impressive":
    default:
      return copy.sort((a, b) => impressiveRank(a) - impressiveRank(b));
  }
}
