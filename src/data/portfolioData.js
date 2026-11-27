export const PROFILE = {
  name: "Jose Rodrigo Saludo",
  handle: "Hyavasti",
  role: "Full-Stack & Android Developer",
  location: "Batangas / Las Piñas, Philippines",
  availability: "Available for IT OJT · Jan 2027",
  bio: "I build production web platforms, native Android apps, and hardware automation systems. Focused on clean architecture, real-time databases, and turning operational problems into reliable software.",
  email: "joserodrigo.saludo@gmail.com",
  socials: [
    { label: "github", url: "https://github.com/Hyavasti" },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/jose-rodrigo-saludo-7a0222270/",
    },
  ],
  highlights: [
    { label: "STI College Las Piñas", sub: "BS Information Technology" },
    { label: "OJT Target", sub: "Mid-January 2027" },
    { label: "Focus", sub: "Full-Stack Web & Kotlin Android" },
  ],
};

export const PROJECTS = [
  {
    id: "mwpc-web",
    shortTitle: "MWPC-Web",
    category: "Full-Stack",
    badge: "Logistics Web Platform",
    title: "MWPC-Web — Maupay Waraynon Padala Center",
    summary:
      "Web-based cargo operations, customer tracking, and admin reconciliation platform built for Maupay Waraynon Padala Center – Bacoor.",
    problem:
      "Manual parcel logging, delayed branch reconciliation, and lack of real-time courier visibility slowed down daily freight operations and customer updates.",
    architecture: [
      "Built responsive customer, staff, and admin portals using HTML5, CSS3, JavaScript, and Bootstrap powered by a Node.js and Express.js backend.",
      "Connected to Supabase PostgreSQL as the primary relational database for shipments, branches, user roles, and transaction records.",
      "Integrated Firebase Realtime Database to render live driver GPS coordinates directly on the tracking map.",
      "Implemented PayMongo API for online payments, jsPDF for printable waybills/manifests, Chart.js for revenue analytics, and tawk.to for live support.",
    ],
    stack: [
      "HTML5 / CSS3",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Supabase",
      "Firebase",
      "PayMongo API",
    ],
    github: "https://github.com/Hyavasti/Maupay-Waraynon-Website",
    pairedProject: {
      id: "mwpctracker",
      label: "Companion Mobile App",
      title: "MWPCTracker (Android Driver APK)",
    },
  },
  {
    id: "mwpctracker",
    shortTitle: "MWPCTracker",
    category: "Android",
    badge: "Android Driver App · APK",
    title: "MWPCTracker — Courier GPS & Delivery App",
    summary:
      "Native Android driver application engineered for Maupay Waraynon Padala Center couriers to stream live GPS telemetry and update parcel statuses in the field.",
    problem:
      "Dispatchers and customers had no live visibility into courier routes or real-time parcel drop-off statuses once delivery vehicles left the branch.",
    architecture: [
      "Developed natively in Kotlin and Jetpack Compose for responsive, low-overhead field usage on Android devices.",
      "Integrated Google Fused Location Provider API to stream continuous courier coordinates to Firebase Realtime Database.",
      "Rendered interactive delivery routes and drop-off markers using OpenStreetMap.",
      "Synced assigned parcel manifests and real-time delivery status updates directly with Supabase PostgreSQL and MWPC-Web.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Google Fused Location API",
      "OpenStreetMap",
      "Firebase Realtime DB",
      "Supabase",
    ],
    github: "https://github.com/Hyavasti/MWPCTracker",
    apkUrl:
      "https://drive.google.com/file/d/1B8Z_V6TyMRWTg0Ou67LUIRWXg4Ljontx/view?usp=sharing",
    pairedProject: {
      id: "mwpc-web",
      label: "Connected Web Platform",
      title: "MWPC-Web (Logistics Dashboard)",
    },
  },
  {
    id: "motopulse",
    shortTitle: "MotoPulse",
    category: "Android",
    badge: "Native Mobile App · APK",
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
    github: "https://github.com/Hyavasti/MotoPulse",
    apkUrl:
      "https://drive.google.com/file/d/1F9gCyebcV-NYsE0uZdO8Z00GTUDr_xp6/view?usp=sharing",
  },
  {
    id: "moki-ai",
    shortTitle: "Moki AI",
    category: "Android",
    badge: "Native Android · Voice AI · APK",
    title: "Moki AI — On-Device Voice Assistant & OS Automation",
    summary:
      "A J.A.R.V.I.S.-inspired native Android voice assistant built with Kotlin and Jetpack Compose featuring hands-free wake-word detection, natural language intent parsing, and automated Messenger dispatch.",
    problem:
      "Standard mobile assistants struggle with custom multi-step personal workflows—such as hands-free messaging specific contacts via third-party apps without unlocking or navigating nested UI screens while riding or multitasking.",
    architecture: [
      "Engineered an always-listening wake-word pipeline and low-latency speech-to-text / text-to-speech loop running natively on Android.",
      "Built a deterministic intent-routing engine paired with LLM fallback to parse conversational commands into structured OS actions.",
      "Implemented Android Accessibility Services and automated UI-tree traversal to resolve priority contacts and dispatch Facebook Messenger messages hands-free.",
      "Designed a minimalist, low-distraction Jetpack Compose HUD with real-time audio state feedback and permission lifecycle management.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Android SDK",
      "Accessibility Service",
      "Speech-to-Text",
      "Gemini API",
    ],
    github: "https://github.com/Hyavasti/Moki-AI",
    apkUrl:
      "https://drive.google.com/file/d/1iZipSFavEap5WL8zyI3610O5iJWif_G6/view?usp=sharing",
  },
  {
    id: "cafe-uno",
    shortTitle: "Cafe Uno POS",
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
    github: "https://github.com/Hyavasti/CafeUno",
  },
  {
    id: "clipdeck",
    shortTitle: "ClipDeck",
    category: "AI & Automation",
    badge: "AI Video Automation Studio",
    title: "ClipDeck",
    summary:
      "Local AI-powered Python and React studio that analyzes long-form videos, detects viral highlights, generates automated subtitles, and schedules social uploads.",
    problem:
      "Manually scrubbing long gaming/creator VODs, identifying engaging moments, captioning clips, and cross-posting to TikTok and Facebook takes hours per batch.",
    architecture: [
      "Local AI pipeline in Python for automated speech-to-text transcription, viral segment detection, and dynamic subtitle generation.",
      "React + Vite web interface backed by Neon serverless PostgreSQL to organize generated clips by source YouTube URL.",
      "Built-in multi-platform upload scheduler queue for TikTok, YouTube Shorts, and Facebook Reels.",
    ],
    stack: [
      "Python",
      "Local AI / Whisper",
      "React",
      "Vite",
      "Neon PostgreSQL",
      "FFmpeg",
    ],
    github: "https://github.com/Hyavasti/ClipDeck",
    liveUrl: "https://clip-deck-mu.vercel.app/",
  },
  {
    id: "mcggtracker-overlay",
    shortTitle: "MCGGTracker Overlay",
    category: "Full-Stack",
    badge: "Live Stream HUD & Match Tracker",
    title: "MCGGTracker — Magic Chess Go Go Stream Overlay",
    summary:
      "Real-time OBS browser-source overlay and match telemetry dashboard built for Mobile Legends: Bang Bang Magic Chess Go Go livestreams.",
    problem:
      "Streamers manually updating commander portraits, synergy states, and live match scores between rounds breaks broadcast pacing and distracts from gameplay.",
    architecture: [
      "Built a responsive React, Vite, and Tailwind CSS broadcast HUD engineered for transparent OBS Studio browser-source rendering.",
      "Backed by Neon serverless PostgreSQL for persistent match records, win-rate tracking, and real-time overlay state updates.",
      "Integrated Supabase Storage to serve optimized commander artwork, synergy badges, and custom visual assets with low latency.",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Neon PostgreSQL",
      "Supabase Storage",
      "OBS Studio",
    ],
    github: "https://github.com/Hyavasti/magic-chess-overlay",
    liveUrl: "https://magic-chess-overlay-gkrw.vercel.app/",
  },
];

export const STACK_GROUPS = [
  {
    category: "Mobile & Frontend",
    items: [
      "Kotlin",
      "Jetpack Compose",
      "Android SDK",
      "Accessibility Service",
      "Speech-to-Text",
      "React",
      "Vite",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Gemini API",
      "PostgreSQL",
      "Supabase (RLS / Auth)",
      "Firebase Realtime DB",
      "Neon",
    ],
  },
  {
    category: "Cloud, Tools & Hardware",
    items: [
      "AWS",
      "Git & GitHub",
      "REST APIs",
      "PayMongo API",
      "OSMDroid / Leaflet",
      "Arduino / C++",
    ],
  },
];

export const EXPERIENCE = [
  {
    period: "Nov 2026",
    role: "Android Developer — Moki AI Voice Assistant",
    org: "On-Device Voice AI & OS Automation",
    projectId: "moki-ai",
    details:
      "Architected and built a custom native Android voice assistant using Kotlin and Jetpack Compose with wake-word activation, conversational intent routing, and automated Accessibility-driven Messenger workflows.",
  },
  {
    period: "Nov 2026",
    role: "Full-Stack Developer — MCGGTracker Stream Overlay",
    org: "Real-Time Broadcast & Match Telemetry Web App",
    projectId: "mcggtracker-overlay",
    details:
      "Built and deployed a live OBS stream overlay and match tracker for Magic Chess Go Go using React, Vite, Tailwind CSS, Neon PostgreSQL, and Supabase Storage.",
  },
  {
    period: "Nov 2026",
    role: "Full-Stack Developer — MWPC-Web Logistics Platform",
    org: "Capstone Project · Maupay Waraynon Padala Center – Bacoor",
    projectId: "mwpc-web",
    details:
      "Engineered the customer, staff, and admin web operations dashboard using Node.js, Express.js, Supabase PostgreSQL, Firebase Realtime DB, and PayMongo API.",
  },
  {
    period: "Nov 2026",
    role: "Android Developer — MWPCTracker Courier GPS App",
    org: "Capstone Project · Maupay Waraynon Padala Center – Bacoor",
    projectId: "mwpctracker",
    details:
      "Built and packaged the native Kotlin & Jetpack Compose courier APK integrating Google Fused Location Provider API, OpenStreetMap, and real-time Firebase telemetry.",
  },
  {
    period: "Nov 2026",
    role: "AI & Full-Stack Developer — ClipDeck Studio",
    org: "AI Video Automation Web App",
    projectId: "clipdeck",
    details:
      "Developed and deployed a Python, FastAPI, and React video clipping pipeline backed by Neon PostgreSQL for automated transcription, highlight extraction, and social scheduling.",
  },
  {
    period: "Nov 2026",
    role: "Native Android Developer — MotoPulse",
    org: "Independent Mobile Engineering",
    projectId: "motopulse",
    details:
      "Shipped a Jetpack Compose motorcycle maintenance, fuel economy, and OSMDroid live convoy tracking application backed by Supabase Row-Level Security.",
  },
  {
    period: "Nov 2026",
    role: "Full-Stack Developer — Cafe Uno POS & Reservation System",
    org: "Commercial Web Application",
    projectId: "cafe-uno",
    details:
      "Delivered a real-time point-of-sale, inventory deduction, and event booking platform featuring cashier session locking and dual buzzer/table fulfillment tracking.",
  },
  {
    period: "Oct 2026",
    role: "CodeFest Programming Competitor",
    org: "STI Tagisan ng Talino (TNT)",
    details:
      "Collaborated in a timed team software engineering competition solving algorithmic and full-stack implementation challenges.",
  },
  {
    period: "Sep — Nov 2026",
    role: "Autonomous Line-Tracing Robotics Builder",
    org: "Hardware & Embedded Systems",
    details:
      "Engineered PID-controlled line-tracing competition robots using Arduino Uno R4 WiFi, motor drivers, and 5-channel reflectance sensor arrays.",
  },
  {
    period: "2023 — Present",
    role: "BS Information Technology (Undergraduate)",
    org: "STI College Las Piñas",
    details:
      "Focusing on full-stack software engineering, database security, cloud architecture, and mobile development. Available for OJT starting mid-January 2027.",
  },
];

export const CERTIFICATES = [
  {
    id: "sap-s4hana",
    title: "SD, MM, PP, FI, CO Modules of S/4HANA using Global Bike",
    issuer: "SAP University Alliances · STI College, Philippines",
    date: "Jan 20 – Jun 7, 2025",
    type: "Enterprise ERP",
    credentialId: null,
    driveId: "1Kks7t5IXTTq-Xf6THIugsv8zcEn7y8Cd",
    skills: ["SAP S/4HANA", "Enterprise ERP", "Business Process Integration"],
  },
  {
    id: "sti-leadership-award",
    title:
      "Leadership Award — National Service Training Program 2 (AY 2023–2024)",
    issuer: "STI College Las Piñas",
    date: "June 22, 2024",
    type: "Leadership & Recognition",
    credentialId: null,
    driveId: "1CVd8dT6euorao31QeEcne8-Z-ymkJU2H",
    skills: [
      "Team Leadership",
      "Community Program Execution",
      "Project Coordination",
    ],
  },
  {
    id: "oracle-java",
    title: "Java Fundamentals — Award of Course Completion",
    issuer: "Oracle Academy",
    date: "June 19, 2024",
    type: "Software Development",
    credentialId: null,
    driveId: "1g_zLLDT4Dil_7FaHj4g21JZbyK209myY",
    skills: ["Java", "Object-Oriented Programming", "Data Structures"],
  },
  {
    id: "sti-active-marketer",
    title:
      "Certificate of Recognition — Most Active Marketer (The Entrepreneurial Mind Expo 2023)",
    issuer: "STI College Las Piñas · Management Department",
    date: "December 9, 2023",
    type: "Product & Business",
    credentialId: null,
    driveId: "1EeByzWKW_HrrMSdqq0RioaiJ4JirE4Q-",
    skills: ["Product Pitching", "Customer Engagement", "Entrepreneurship"],
  },
  {
    id: "blockchain-webinar",
    title: "Bits, Blocks, and Beyond: The Amazing World of Blockchain",
    issuer: "University of Perpetual Help System DALTA (CCS Student Council)",
    date: "October 28, 2023",
    type: "Emerging Tech",
    credentialId: null,
    driveId: "1wEOstsMelAfNHLKViKNmDxxgOoV-_AQF",
    skills: ["Blockchain Fundamentals", "Distributed Ledgers", "Web3"],
  },
  {
    id: "tesda-android",
    title: "SMART Android Mobile Apps Development for Beginners",
    issuer: "TESDA Online Program (NITESD)",
    date: "July 25, 2023",
    type: "Mobile Development",
    credentialId: "wTMykoQNEH",
    driveId: "1YvkiAd1pUnOPRyKU0z-klZ-2UdchhGul",
    skills: ["Android SDK", "Mobile UI", "App Lifecycle"],
  },
  {
    id: "tesda-technopreneurship",
    title: "SMART Technopreneurship 101",
    issuer: "TESDA Online Program (NITESD)",
    date: "July 25, 2023",
    type: "Product & Business",
    credentialId: "biZM2JE6jw",
    driveId: "1prE4mO4TGeZVv0j7ePQZ1m5xhFCqKPwP",
    skills: ["Tech Startup Ideation", "MVP Validation", "Product Strategy"],
  },
];