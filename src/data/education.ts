export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  university: string;
  year: string;
  cgpa: string;
  highlights: string[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "MCA",
    field: "Master of Computer Applications",
    institution: "Vidya Vikas Institute of Engineering and Technology",
    university: "Visvesvaraya Technological University (VTU)",
    year: "Completed 2026",
    cgpa: "8.24",
    highlights: [
      "Specialized in Software Engineering, AI Applications, Advanced Data Structures, and Cloud Computing.",
      "VTU Online Certification in Reinforcement Learning.",
      "Led technical project developments including LocalPulse PWA and full-stack software systems."
    ]
  },
  {
    degree: "BCA",
    field: "Bachelor of Computer Applications",
    institution: "Seshadripuram College",
    university: "Tumakuru University",
    year: "Completed 2024",
    cgpa: "8.22",
    highlights: [
      "Built core foundation in Computer Science, Database Management, Java, C, and Web Development.",
      "Achieved 2nd Place in Project Presentation at National-level Faculty Development Program.",
      "Achieved 3rd Place in 'Patch Frenzy' Debugging Competition at TechnoVVISTA 2.0."
    ]
  }
];
