export interface AchievementItem {
  id: string;
  title: string;
  category: "Certification" | "Competition" | "Academic";
  issuer: string;
  detail: string;
  badgeCode: string;
}

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "nptel-graph-theory",
    title: "NPTEL — Advanced Graph Theory",
    category: "Certification",
    issuer: "NPTEL / IIT",
    detail: "Certified in advanced graph algorithms, network flows, graph traversal optimization, and mathematical graph modeling.",
    badgeCode: "NPTEL-AGT"
  },
  {
    id: "vtu-reinforcement-learning",
    title: "VTU Online Certification — Reinforcement Learning",
    category: "Certification",
    issuer: "Visvesvaraya Technological University (VTU)",
    detail: "Completed certification covering Markov Decision Processes, Q-learning policies, reward functions, and AI agent frameworks.",
    badgeCode: "VTU-RL"
  },
  {
    id: "project-presentation-2nd",
    title: "2nd Place — Project Presentation",
    category: "Competition",
    issuer: "National-level Faculty Development Program",
    detail: "Awarded 2nd place for presenting innovative software architecture and practical implementation of technical projects.",
    badgeCode: "AWARD-2ND"
  },
  {
    id: "patch-frenzy-3rd",
    title: "3rd Place — Patch Frenzy (Debugging)",
    category: "Competition",
    issuer: "TechnoVVISTA 2.0",
    detail: "Secured 3rd place in competitive code debugging, algorithm tracing, and syntax error resolution under time pressure.",
    badgeCode: "AWARD-3RD"
  }
];
