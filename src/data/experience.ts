export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Mindset",
    role: "Python & Full Stack Development Intern",
    period: "February 2026 – May 2026",
    location: "Karnataka, India",
    responsibilities: [
      "Engineered responsive web applications utilizing Python backend services and modern frontend frameworks.",
      "Developed full-stack features including REST API endpoints, client-side state handling, and dynamic component rendering.",
      "Designed and integrated MySQL relational database schemas with optimized query indexing for application workflows.",
      "Applied object-oriented programming principles and structured software engineering patterns across development modules.",
      "Participated in active debugging, code reviews, unit testing, and agile Software Development Life Cycle (SDLC) practices.",
      "Collaborated across engineering workflows to solve technical bugs and optimize application performance."
    ],
    technologies: ["Python", "Full-Stack Development", "MySQL", "JavaScript", "REST APIs", "SDLC", "OOP"]
  }
];
