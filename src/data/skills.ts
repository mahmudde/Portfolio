import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", iconName: "html", level: 95, category: "Frontend" },
  { name: "CSS", iconName: "css", level: 90, category: "Frontend" },
  { name: "JavaScript", iconName: "javascript", level: 85, category: "Frontend" },
  { name: "TypeScript", iconName: "typescript", level: 78, category: "Frontend" },
  { name: "React.js", iconName: "react", level: 85, category: "Frontend" },
  { name: "Next.js", iconName: "nextjs", level: 82, category: "Frontend" },
  { name: "Tailwind CSS", iconName: "tailwind", level: 90, category: "Frontend" },
  { name: "Bootstrap", iconName: "bootstrap", level: 80, category: "Frontend" },

  // Backend
  { name: "Node.js", iconName: "nodejs", level: 75, category: "Backend" },
  { name: "Express.js", iconName: "express", level: 72, category: "Backend" },
  { name: "REST API", iconName: "api", level: 78, category: "Backend" },

  // Database & ORM
  { name: "MongoDB", iconName: "mongodb", level: 75, category: "Database & ORM" },
  { name: "PostgreSQL", iconName: "postgresql", level: 72, category: "Database & ORM" },
  { name: "Prisma", iconName: "prisma", level: 70, category: "Database & ORM" },

  // Authentication
  { name: "Better Auth", iconName: "betterauth", level: 70, category: "Authentication" },
  { name: "Firebase Authentication", iconName: "firebase", level: 72, category: "Authentication" },
  { name: "JWT", iconName: "jwt", level: 70, category: "Authentication" },

  // Payment Integration
  { name: "Stripe", iconName: "stripe", level: 70, category: "Payment" },
  { name: "SSLCommerz", iconName: "sslcommerz", level: 68, category: "Payment" },

  // Tools & Deployment
  { name: "Git", iconName: "git", level: 80, category: "Tools & Deployment" },
  { name: "GitHub", iconName: "github", level: 85, category: "Tools & Deployment" },
  { name: "VS Code", iconName: "vscode", level: 90, category: "Tools & Deployment" },
  { name: "Vercel", iconName: "vercel", level: 82, category: "Tools & Deployment" },
  { name: "Netlify", iconName: "netlify", level: 80, category: "Tools & Deployment" },
  { name: "Firebase", iconName: "firebase", level: 70, category: "Tools & Deployment" },

  // Design & Productivity
  { name: "Figma", iconName: "figma", level: 75, category: "Design & Productivity" },
  { name: "Canva", iconName: "canva", level: 80, category: "Design & Productivity" },
  { name: "Notion", iconName: "notion", level: 75, category: "Design & Productivity" },

  // AI & Development Tools
  { name: "Cursor", iconName: "cursor", level: 75, category: "AI Tools" },
  { name: "Antigravity", iconName: "antigravity", level: 72, category: "AI Tools" },
  { name: "Claude", iconName: "claude", level: 70, category: "AI Tools" },
];
