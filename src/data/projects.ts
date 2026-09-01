export interface CaseStudySection {
  title: string;
  content: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "AI / Web" | "Blockchain" | "Hardware / AI" | "Full-Stack" | "Algorithms";
  year: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  visualType: "city" | "blockchain" | "mirror" | "constellation";
  architectureFlow?: { from: string; to: string }[];
  caseStudy?: {
    problem: string;
    concept: string;
    architecture: string;
    recommendationSystem?: string;
    engineeringDecisions: string[];
    userExperience: string;
    results: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "localpulse",
    title: "LOCALPULSE",
    subtitle: "Smart Local Event Discovery Platform",
    description: "An AI-powered Progressive Web App designed for discovering, filtering, and registering for local events with smart local affinity scoring recommendations and offline PWA capability.",
    category: "AI / Web",
    year: "2026",
    technologies: ["Next.js", "React", "Node.js", "MySQL", "TypeScript", "Tailwind CSS", "Clerk", "Firebase", "PWA"],
    features: [
      "Smart Local Affinity Recommendation System",
      "Real-Time Event Search & Dynamic Category Filtering",
      "Organizer Verification & Analytics Dashboard",
      "Downloadable PDF Tickets & Calendar Integration",
      "Offline PWA Service Worker Support & Local Caching",
      "User Favorites & Recently Viewed History Tracking"
    ],
    githubUrl: "https://github.com/AkshaySArun/LocalPulse-",
    isFeatured: true,
    visualType: "city",
    architectureFlow: [
      { from: "USER REQUEST", to: "NEXT.JS PWA EDGE" },
      { from: "NEXT.JS PWA EDGE", to: "CLERK AUTHENTICATION" },
      { from: "CLERK AUTHENTICATION", to: "LOCAL AFFINITY ENGINE" },
      { from: "LOCAL AFFINITY ENGINE", to: "MYSQL / FIREBASE DATA" },
      { from: "MYSQL / FIREBASE DATA", to: "EVENT DISCOVERY FEED" }
    ],
    caseStudy: {
      problem: "Traditional event discovery platforms overlook local community events and lack responsive offline-first access, high latency recommendations, and verified ticket workflows.",
      concept: "LocalPulse acts as a centralized intelligent discovery engine that dynamically ranks events based on user affinity, location proximity, and category engagement.",
      architecture: "Built with Next.js 14 server components, a decoupled Node.js API layer, Clerk authentication middleware, and MySQL relational schemas for event management.",
      recommendationSystem: "Employs an engineered local affinity scoring algorithm factoring event category preferences, city location vectors, rating bias, user favorites, and recently viewed interaction history.",
      engineeringDecisions: [
        "Implemented Service Worker dynamic caching for seamless PWA offline ticket access.",
        "Engineered server-side affinity score computation to minimize client-side bundle size.",
        "Utilized Clerk JWT tokens with MySQL row-level access control for organizer security."
      ],
      userExperience: "Designed with a high-contrast dark aesthetic, instant client search indexing, fluid category pills, and single-click PDF ticket generation.",
      results: "Sub-100ms discovery response times, full offline ticket validation capability, and structured admin dashboard for event lifecycle management."
    }
  },
  {
    id: "foss-token",
    title: "FOSS TOKEN",
    subtitle: "Solana SPL Cryptocurrency & Open-Source Funding Project",
    description: "A decentralized Solana SPL token project deployed on Solana Mainnet, created to fund Free & Open Source Software initiatives with Orca Whirlpool liquidity integration and on-chain verification.",
    category: "Blockchain",
    year: "2026",
    technologies: ["Solana SPL", "Rust / Anchor", "TypeScript", "Orca DEX", "Web3.js", "Solana CLI"],
    features: [
      "Solana Mainnet Deployed SPL Token ($FOSS)",
      "Fixed Token Supply Architecture",
      "Revoked Mint Authority for Cryptographic Trust",
      "Orca Whirlpool DEX Liquidity Pool Integration",
      "On-Chain Token Metadata & Verification",
      "Transparent Transaction History & Explorer Integration"
    ],
    githubUrl: "https://github.com/AkshaySArun/Foss-Token",
    liveUrl: "https://lingadevaru.in",
    isFeatured: true,
    visualType: "blockchain",
    architectureFlow: [
      { from: "TOKEN CREATION", to: "ON-CHAIN METADATA" },
      { from: "ON-CHAIN METADATA", to: "SPL MINT EXECUTION" },
      { from: "SPL MINT EXECUTION", to: "MINT AUTHORITY REVOCATION" },
      { from: "MINT AUTHORITY REVOCATION", to: "ORCA WHIRLPOOL LIQUIDITY" },
      { from: "ORCA WHIRLPOOL LIQUIDITY", to: "MAINNET TRANSACTIONS" }
    ],
    caseStudy: {
      problem: "Funding open-source developments often suffers from high transaction fees, delayed payouts, and opaque grant distribution.",
      concept: "FOSS Token ($FOSS) leverages Solana's low-latency, micro-cent fee blockchain infrastructure to facilitate instant global developer micro-grants.",
      architecture: "Utilizes standard Solana Program Library (SPL) contracts with custom on-chain Metaplex metadata extension and immutable supply caps.",
      engineeringDecisions: [
        "Permanently revoked mint authority post-deployment to guarantee zero inflation.",
        "Paired token with Orca Whirlpool concentrated liquidity pools for optimal slippage.",
        "Integrated Web3.js transaction monitoring dashboard for real-time liquidity auditing."
      ],
      userExperience: "Instant wallet connection, seamless DEX trading integration, and direct Solscan explorer verification links.",
      results: "Successfully deployed on Solana Mainnet with active liquidity pool integration and verified on-chain immutable metadata."
    }
  },
  {
    id: "spellbound-speculum",
    title: "SPELLBOUND SPECULUM",
    subtitle: "Smart Mirror Hardware & AI Interface",
    description: "An academic smart mirror system combining customized hardware assembly with modular software modules to render dynamic weather, time, system metrics, and contextual notifications.",
    category: "Hardware / AI",
    year: "2025",
    technologies: ["Python", "Raspberry Pi", "JavaScript", "HTML5/CSS3", "REST APIs", "IoT"],
    features: [
      "Real-Time Weather & Atmospheric Metric Displays",
      "Dynamic System Clock & Calendar Synchronization",
      "Interactive Notification HUD Interface",
      "Low-Power Embedded System Architecture",
      "Modular Widget Renderer & Visual Dashboard"
    ],
    isFeatured: true,
    visualType: "mirror",
    architectureFlow: [
      { from: "ENVIRONMENT SENSORS", to: "RASPBERRY PI HOST" },
      { from: "RASPBERRY PI HOST", to: "PYTHON CORE ENGINE" },
      { from: "PYTHON CORE ENGINE", to: "REST API INTEGRATIONS" },
      { from: "REST API INTEGRATIONS", to: "MIRROR DISPLAY HUD" }
    ],
    caseStudy: {
      problem: "Ambient information displays require seamless visual blending without light bleed or intrusive user interaction requirements.",
      concept: "Spellbound Speculum transforms reflective surfaces into ambient futuristic HUD displays powered by lightweight Linux microcontrollers.",
      architecture: "Driven by a Python backend fetching API updates asynchronously, feeding a high-contrast web HUD rendered on a two-way mirrored display.",
      engineeringDecisions: [
        "Optimized GUI rendering for minimal memory footprint on embedded hardware.",
        "Implemented automated screen dimming and sensor-based display sleep states.",
        "Modularized API fetchers to ensure zero HUD freezes during network latency."
      ],
      userExperience: "High-contrast minimalist layout visible clearly through two-way glass without ambient room distraction.",
      results: "Functional hardware-software prototype delivering real-time ambient updates with <15W power consumption."
    }
  },
  {
    id: "geo-build-hub",
    title: "GEO BUILD HUB",
    subtitle: "Geospatial Development & Asset Portal",
    description: "A TypeScript-based web application for spatial mapping, build location management, and geographic data visualization.",
    category: "Full-Stack",
    year: "2025",
    technologies: ["TypeScript", "React", "Geospatial APIs", "Tailwind CSS"],
    features: ["Interactive Mapping Engine", "Location Marker Management", "Spatial Data Querying"],
    githubUrl: "https://github.com/AkshaySArun/geo-build-hub",
    isFeatured: false,
    visualType: "constellation"
  },
  {
    id: "college-assistance",
    title: "COLLEGE ASSISTANCE PORTAL",
    subtitle: "Academic Resources & Student Support Tool",
    description: "A full-stack web application developed to streamline academic resource discovery, notes sharing, and student query assistance.",
    category: "Full-Stack",
    year: "2025",
    technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP"],
    features: ["Resource Categorization", "Student Query Portal", "Administrative Verification"],
    githubUrl: "https://github.com/AkshaySArun/college-assistance",
    isFeatured: false,
    visualType: "constellation"
  },
  {
    id: "ipl-booking",
    title: "IPL TICKET BOOKING PORTAL",
    subtitle: "Match Ticket Reservation System",
    description: "A web platform designed for exploring match schedules, stadium seating layouts, and simulated ticket booking workflows.",
    category: "Full-Stack",
    year: "2026",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: ["Stadium Seat Selection UI", "Match Calendar Filtering", "Simulated Booking Checkout"],
    githubUrl: "https://github.com/AkshaySArun/ipl-ticket-booking-portal",
    isFeatured: false,
    visualType: "constellation"
  }
];
