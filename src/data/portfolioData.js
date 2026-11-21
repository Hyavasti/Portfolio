export const PROFILE = {
  name: "Jose Rodrigo Saludo",
  handle: "Hyavasti",
  role: "Full-Stack & Android Developer",
  location: "Batangas / Las Piñas, Philippines",
  availability: "Available for IT OJT · Jan 2027",
  bio: "I build production web platforms, native Android apps, and hardware automation systems. Focused on clean architecture, real-time databases, and turning operational problems into reliable software.",
  email: "your.email@gmail.com", // Replace with your active email
  socials: [
    { label: "github", url: "https://github.com/Hyavasti" },
    { label: "linkedin", url: "https://linkedin.com/in/your-profile" },
  ],
  highlights: [
    { label: "STI College Las Piñas", sub: "BS Information Technology" },
    { label: "OJT Target", sub: "Mid-January 2027" },
    { label: "Focus", sub: "Full-Stack Web & Kotlin Android" },
  ],
};

export const PROJECTS = [
  {
    id: "mwpc",
    category: "Full-Stack + Android",
    badge: "Production Logistics System",
    title: "Maupay Waraynon Padala Center (MWPC)",
    summary:
      "End-to-end cargo operations web platform and native Android driver tracking app built for real-time shipment visibility and digital payments.",
    problem:
      "Manual parcel logging and lack of live courier visibility delayed customer updates and branch reconciliation.",
    architecture: [
      "Web dashboard built with Node.js, Express.js, HTML5/CSS3, and Bootstrap with jsPDF manifest generation and Chart.js analytics.",
      "Native Kotlin & Jetpack Compose Android driver app utilizing Google Fused Location Provider API and OpenStreetMap.",
      "Dual-database sync: Firebase Realtime Database for live GPS telemetry and Supabase PostgreSQL for relational shipment records.",
      "Integrated PayMongo API for digital payment processing and tawk.to for live customer support.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Node.js", "Express", "Supabase", "Firebase", "PayMongo"],
    github: "https://github.com/Hyavasti",
  },
  {
    id: "motopulse",
    category: "Android",
    badge: "Native Mobile App",
    title: "MotoPulse",
    summary:
      "Native Android companion app for riders to track maintenance intervals, fuel economy, multi-bike garages, and live group convoy locations.",
    problem:
      "Riders struggle to track periodic PMS intervals across multiple motorcycles and coordinate real-time group rides without battery-draining chat apps.",
    architecture: [
      "Built natively in Kotlin with Jetpack Compose following modern unidirectional data flow.",
      "Supabase backend with Row-Level Security (RLS) protecting user garage logs and telemetry.",
      "OSMDroid integration for offline-capable map rendering and live convoy waypoint sharing.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Supabase", "PostgreSQL", "OSMDroid"],
    github: "https://github.com/Hyavasti",
  },
  {
    id: "cafe-uno",
    category: "Full-Stack",
    badge: "Retail & Event POS",
    title: "Cafe Uno POS & Reservation System",
    summary:
      "Web-based point-of-sale, inventory tracker, and event booking platform engineered for uninterrupted daily cafe operations.",
    problem:
      "Peak-hour order bottlenecks and uncoordinated table/event bookings caused order mix-ups and cashier discrepancies.",
    architecture: [
      "Cashier online/offline status locking to prevent unauthorized register edits and race conditions.",
      "Dual fulfillment tracking supporting drink buzzer numbers and food table letter-cards.",
      "Automated daily order history logs and Supabase-backed inventory deduction.",
    ],
    stack: ["React", "Vite", "JavaScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Hyavasti",
  },
  {
    id: "clipdeck",
    category: "Automation",
    badge: "Local Media Pipeline",
    title: "ClipDeck",
    summary:
      "Local Python and React automation studio that extracts short-form highlights from long-form video, generates subtitles, and schedules social uploads.",
    problem:
      "Manually scrubbing long gaming/creator VODs, captioning clips, and cross-posting to TikTok and Facebook takes hours per batch.",
    architecture: [
      "Python backend processing video slicing, audio transcription, and automated subtitle burn-in.",
      "React + Vite frontend backed by Neon serverless PostgreSQL to organize clips by source URL.",
      "Built-in upload scheduler queue for TikTok, YouTube Shorts, and Facebook Reels.",
    ],
    stack: ["Python", "React", "Vite", "Neon PostgreSQL", "FFmpeg"],
    github: "https://github.com/Hyavasti",
  },
];

export const STACK_GROUPS = [
  {
    category: "Mobile & Frontend",
    items: ["Kotlin", "Jetpack Compose", "React", "Vite", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express.js", "Python", "PostgreSQL", "Supabase (RLS / Auth)", "Firebase Realtime DB", "Neon"],
  },
  {
    category: "Cloud, Tools & Hardware",
    items: ["AWS", "Git & GitHub", "REST APIs", "PayMongo API", "OSMDroid / Leaflet", "Arduino / C++"],
  },
];

export const EXPERIENCE = [
  {
    period: "2023 — Present",
    role: "BS Information Technology (Undergraduate)",
    org: "STI College Las Piñas",
    details: "Focusing on full-stack software engineering, database security, cloud architecture, and mobile development. Available for OJT starting mid-January 2027.",
  },
  {
    period: "2026",
    role: "CodeFest Programming Competitor",
    org: "STI Tagisan ng Talino (TNT)",
    details: "Collaborated in a timed team software engineering competition solving algorithmic and full-stack implementation challenges.",
  },
  {
    period: "2026",
    role: "Autonomous Line-Tracing Robotics Builder",
    org: "Hardware & Embedded Systems",
    details: "Engineered PID-controlled line-tracing competition robots using Arduino Uno R4 WiFi, motor drivers, and 5-channel reflectance sensor arrays.",
  },
];