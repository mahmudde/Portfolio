import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sales-management-software",
    title: "Sales Management Software",
    image: "/sales_management.png",
    description: "A multi-tenant SaaS POS and sales management system with role-based access, inventory tracking, sales billing, staff management, Stripe subscriptions, and admin dashboards.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Better Auth", "Stripe", "Cloudinary"],
    liveLink: "https://sales-manegement-softwere-frontend.vercel.app/login",
    githubLink: "https://github.com/mahmudde/sales-manegement-softwere-frontend.git",
    challenges: "Implementing a complex multi-tenant architecture with real-time inventory synchronization across multiple stores.",
    futurePlans: "Introduce AI-based sales forecasting and automated stock replenishment alerts.",
  },
  {
    slug: "e-commerce-checkout",
    title: "E-Commerce Checkout UI",
    image: "/ecommerce_checkout.png",
    description: "A clean, focused checkout UI for an e-commerce platform. Designed to reduce friction and maximize conversions through clear layout, validation, and trust-building elements.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveLink: "https://nexacart-ai-frontend.vercel.app/",
    githubLink: "https://github.com/mahmudde/nexacart-ai-frontend.git",
    challenges: "Handling complex state management for the multi-step checkout process while ensuring smooth transitions.",
    futurePlans: "Integrate a real payment gateway like Stripe and add user authentication.",
  },
  {
    slug: "clinic-dashboard",
    title: "Clinic Management Dashboard",
    image: "/clinic_dashboard.png",
    description: "Clinic management dashboard built for clarity and efficiency. Prioritizes quick access to patient data, appointment stats, and admin tools via clear layout and visual hierarchy.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Chart.js"],
    liveLink: "https://hospital-manegement-system-frontend-theta.vercel.app/",
    githubLink: "https://github.com/mahmudde/hospital-manegement-system-frontend.git",
    challenges: "Designing an intuitive UI for complex data tables and ensuring responsiveness on tablet devices.",
    futurePlans: "Add real-time notifications for upcoming appointments using WebSockets.",
  }
];
