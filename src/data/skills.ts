export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; iconName?: string }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "TypeScript" },
      { name: "JavaScript" }
    ]
  },
  {
    title: "COMPUTER SCIENCE FUNDAMENTALS",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Software Development Life Cycle (SDLC)" },
      { name: "Database Design & Normalization" }
    ]
  },
  {
    title: "WEB & BACKEND DEVELOPMENT",
    skills: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Flask" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS & Bootstrap" }
    ]
  },
  {
    title: "DATABASE & STORAGE",
    skills: [
      { name: "MySQL" },
      { name: "Firebase" }
    ]
  },
  {
    title: "TOOLS & PLATFORMS",
    skills: [
      { name: "Git & GitHub" },
      { name: "Android Studio" },
      { name: "VS Code" },
      { name: "Vercel" }
    ]
  }
];

export const AI_LAB_DATA = {
  philosophy: ["LEARN", "EXPERIMENT", "BUILD", "IMPROVE"],
  foundation: [
    { title: "Python Ecosystem", description: "Core language mastery, clean code patterns, and object-oriented architectures." },
    { title: "Algorithms & Math", description: "Data structures, graph theory algorithms, and mathematical optimization." },
    { title: "Reinforcement Learning", description: "VTU certified concepts in MDPs, reward policies, and agent learning." },
    { title: "Software Engineering", description: "Modular API design, backend integration with Flask & Node.js, and DB systems." }
  ],
  exploring: [
    { title: "Machine Learning Models", description: "Supervised & unsupervised learning pipelines, scikit-learn models." },
    { title: "AI Applications", description: "Intelligent local recommendation scoring engines & predictive heuristics." },
    { title: "Generative AI", description: "LLM API integrations, prompt engineering, and agentic workflows." },
    { title: "Computer Vision & NLP", description: "Image processing heuristics and natural language text embeddings." }
  ]
};
