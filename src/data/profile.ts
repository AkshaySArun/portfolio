export interface ProfileData {
  name: string;
  role: string;
  subRole: string;
  tagline: string;
  supportingStatement: string;
  location: string;
  education: string;
  focus: string[];
  philosophy: string[];
  summary: string;
  status: string;
}

export const PROFILE_DATA: ProfileData = {
  name: "AKSHAY S",
  role: "AI/ML Engineer",
  subRole: "Full-Stack Developer",
  tagline: "I don't just list technologies. I build intelligent, practical software.",
  supportingStatement: "Combining AI, machine learning and modern software engineering to create scalable, high-impact digital solutions.",
  location: "Tumakuru, Karnataka, India",
  education: "MCA + BCA",
  focus: [
    "Artificial Intelligence / Machine Learning",
    "Python & Modern Software Engineering",
    "Full-Stack Web Architectures",
    "Algorithm Optimization & Data Structures"
  ],
  philosophy: ["LEARN", "EXPERIMENT", "BUILD", "IMPROVE"],
  summary: "Akshay S is an MCA graduate with hands-on experience in Python, Java, data structures and algorithms, object-oriented programming, and full-stack software engineering. He has worked with modern technologies including Next.js, React.js, Node.js, Flask, and MySQL, turning ideas into practical software while exploring intelligent AI/ML applications.",
  status: "AVAILABLE FOR OPPORTUNITIES"
};
