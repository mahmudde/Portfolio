export interface Project {
  slug: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  challenges?: string;
  futurePlans?: string;
}

export interface Skill {
  name: string;
  iconName: string; // Used to pick the right icon
  level: number; // 0 to 100 for progress bar
  category: "Frontend" | "Backend" | "Database & ORM" | "Authentication" | "Payment" | "Tools & Deployment" | "Design & Productivity" | "AI Tools";
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  result: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}
