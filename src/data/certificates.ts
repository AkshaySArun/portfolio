export type CertificateCategory =
  | "ALL"
  | "COURSES"
  | "ACHIEVEMENTS"
  | "HACKATHONS"
  | "WORKSHOPS"
  | "CONFERENCES"
  | "TECHNICAL PROGRAMMES"
  | "COMMUNITY";

export type BadgeType =
  | "COURSE"
  | "AWARD"
  | "CERTIFICATION"
  | "HACKATHON"
  | "ORGANIZER"
  | "WORKSHOP"
  | "CONFERENCE"
  | "TECHNICAL PROGRAMME";

export interface Certificate {
  id: string;
  title: string;
  subtitle?: string;
  category: CertificateCategory;
  badgeType: BadgeType;
  organization: string;
  issuer?: string;
  date: string;
  year: number;
  description: string;
  role?: string;
  placement?: string;
  level?: string;
  credits?: number;
  verificationUrl?: string;
  asset: string;
  assetType: "image" | "pdf";
  badgeCode: string;
}

export const CERTIFICATES_DATA: Certificate[] = [
  // --- COURSES ---
  {
    id: "nptel-graph-theory",
    title: "Advanced Graph Theory",
    subtitle: "NPTEL / IIT Kanpur Course Certification",
    category: "COURSES",
    badgeType: "COURSE",
    organization: "NPTEL / IIT Kanpur",
    issuer: "National Programme on Technology Enhanced Learning",
    date: "Jan–Mar 2025",
    year: 2025,
    description: "Successfully completed the 8-week Advanced Graph Theory course during Jan–Mar 2025 with a consolidated score of 50%, covering graph algorithms, network flows, and mathematical graph optimization.",
    asset: "/certificates/advanced-graph-theory-nptel.pdf",
    assetType: "pdf",
    badgeCode: "NPTEL-AGT"
  },
  {
    id: "vtu-reinforcement-learning",
    title: "Reinforcement Learning",
    subtitle: "VTU Centre for Online Education",
    category: "COURSES",
    badgeType: "COURSE",
    organization: "Visvesvaraya Technological University (VTU)",
    issuer: "VTU — Centre for Online Education",
    date: "July 20, 2026",
    year: 2026,
    level: "Elite Gold",
    credits: 3,
    description: "Completed course in Reinforcement Learning issued by VTU Centre for Online Education, achieving Elite Gold standing with 3 academic credits.",
    asset: "/certificates/reinforcement-learning-vtu.pdf",
    assetType: "pdf",
    badgeCode: "VTU-RL-GOLD"
  },
  {
    id: "r-programming-infosys",
    title: "R Programming Fundamentals",
    subtitle: "Infosys Springboard Certification",
    category: "COURSES",
    badgeType: "COURSE",
    organization: "Infosys",
    issuer: "Infosys Springboard",
    date: "January 4, 2024 (Issued Jan 21, 2024)",
    year: 2024,
    description: "Successfully completed R Programming Fundamentals course covering data frames, statistical computations, and vector operations.",
    verificationUrl: "https://verify.onwingspan.com",
    asset: "/certificates/r-programming-infosys.pdf",
    assetType: "pdf",
    badgeCode: "INFOSYS-R"
  },
  {
    id: "research-methodology-vtu",
    title: "Research Methodologies and IPR",
    subtitle: "VTU Centre for Online Education",
    category: "COURSES",
    badgeType: "COURSE",
    organization: "Visvesvaraya Technological University (VTU)",
    issuer: "VTU — Centre for Online Education",
    date: "May 17, 2025",
    year: 2025,
    level: "Elite Gold",
    credits: 3,
    description: "Successfully completed Research Methodologies and Intellectual Property Rights (IPR) course issued by VTU Centre for Online Education, achieving Elite Gold standing with 3 academic credits.",
    asset: "/certificates/research-methodology-vtu.pdf",
    assetType: "pdf",
    badgeCode: "VTU-RM-IPR"
  },

  // --- ACHIEVEMENTS ---
  {
    id: "project-presentation-2nd",
    title: "2nd Place — Project Presentation",
    subtitle: "Computer Multimedia and Animation FDP",
    category: "ACHIEVEMENTS",
    badgeType: "AWARD",
    organization: "Seshadripuram College, Tumakuru",
    date: "9–10 June 2023",
    year: 2023,
    description: "Awarded 2nd place for presenting innovative software architecture and practical implementation of technical projects during the National Level Faculty Development Programme.",
    placement: "2nd Place",
    asset: "/certificates/project-presentation-2nd.jpg",
    assetType: "image",
    badgeCode: "AWARD-2ND"
  },
  {
    id: "patch-frenzy-3rd",
    title: "3rd Place — Patch Frenzy (Debugging)",
    subtitle: "TechnoVISTA 2.0",
    category: "ACHIEVEMENTS",
    badgeType: "AWARD",
    organization: "Vidya Vikas Institute of Engineering and Technology (VVIET)",
    date: "2025",
    year: 2025,
    description: "Secured 3rd place in competitive code debugging, algorithm tracing, and syntax error resolution under time pressure at TechnoVISTA 2.0.",
    placement: "3rd Place",
    asset: "/certificates/patch-frenzy.jpg",
    assetType: "image",
    badgeCode: "AWARD-3RD"
  },

  // --- HACKATHONS ---
  {
    id: "hydra-hacks-2025",
    title: "Hydra Hacks — APRAMEYA 2025",
    subtitle: "National-Level IT Fest",
    category: "HACKATHONS",
    badgeType: "HACKATHON",
    organization: "Department of MCA, Nitte Meenakshi Institute of Technology (VTU)",
    date: "21–22 November 2025",
    year: 2025,
    description: "Participated in Hydra Hacks during APRAMEYA 2025, a National-Level IT Fest organized by the Department of MCA at Nitte Meenakshi Institute of Technology.",
    asset: "/certificates/hydra-hacks-2025.pdf",
    assetType: "pdf",
    badgeCode: "HACK-NMIT"
  },
  {
    id: "hacktech-fusion-2025",
    title: "Hacktech Fusion 3.0",
    subtitle: "National Hackathon Event",
    category: "HACKATHONS",
    badgeType: "HACKATHON",
    organization: "Department of ISE, Bapuji Institute of Engineering and Technology, Davangere",
    date: "9–10 May 2025",
    year: 2025,
    description: "Participated in Hacktech Fusion 3.0, demonstrating innovation, teamwork and technical problem-solving during the 2-day event.",
    asset: "/certificates/hacktech-fusion-2025.jpg",
    assetType: "image",
    badgeCode: "HACK-BIT"
  },

  // --- TECHNICAL PROGRAMMES ---
  {
    id: "multimedia-animation-fdp",
    title: "Computer Multimedia & Animation FDP",
    subtitle: "Two Days National Level FDP",
    category: "TECHNICAL PROGRAMMES",
    badgeType: "TECHNICAL PROGRAMME",
    organization: "Department of Computer Science, Seshadripuram College, Tumakuru",
    date: "9–10 June 2023",
    year: 2023,
    description: "Participated in the Two-Day National Level Faculty Development Programme on Computer Multimedia and Animation using Block and Script Coding.",
    asset: "/certificates/multimedia-animation-fdp.jpg",
    assetType: "image",
    badgeCode: "FDP-2023"
  },

  // --- COMMUNITY ---
  {
    id: "open-ai-day",
    title: "Open AI Day",
    subtitle: "Public Outreach Programme",
    category: "COMMUNITY",
    badgeType: "ORGANIZER",
    role: "Student Organizer",
    organization: "Department of CS & Samsthita Coding Club, Seshadripuram College, Tumakuru",
    date: "2 December 2023",
    year: 2023,
    description: "Contributed as Student Organizer to the one-day public outreach programme 'Open AI Day' in association with the Department of Computer Science and Samsthita Coding Club.",
    asset: "/certificates/open-ai-day.jpg",
    assetType: "image",
    badgeCode: "AI-ORG-2023"
  },

  // --- WORKSHOPS ---
  {
    id: "code-vita-nodejs",
    title: "CODE VITA — Node.js Development",
    subtitle: "Technical Hands-on Workshop",
    category: "WORKSHOPS",
    badgeType: "WORKSHOP",
    organization: "Department of BCA & Samsthita Coding Club, Seshadripuram College, Tumakuru",
    date: "13 July 2024",
    year: 2024,
    description: "Participated in the CODE VITA technical workshop focused on Node.js Development, organized by the Department of BCA and Samsthita Coding Club.",
    asset: "/certificates/code-vita-nodejs.jpg",
    assetType: "image",
    badgeCode: "WORKSHOP-2024"
  },

  // --- CONFERENCES ---
  {
    id: "aroha-youth-conference",
    title: "Aroha — International Youth Conference",
    subtitle: "Azadi Ka Amrit Mahotsav",
    category: "CONFERENCES",
    badgeType: "CONFERENCE",
    organization: "Vivekananda Study Center & IQAC, Seshadripuram College (with Ramakrishna-Vivekananda Ashrama)",
    date: "16–17 August 2023",
    year: 2023,
    description: "Participated in the Aroha International Youth Conference organized by the Vivekananda Study Center and IQAC in association with Ramakrishna-Vivekananda Ashrama.",
    asset: "/certificates/aroha-youth-conference.jpg",
    assetType: "image",
    badgeCode: "CONF-2023"
  }
];
