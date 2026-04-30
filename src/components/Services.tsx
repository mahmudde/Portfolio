"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Layers, Palette } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "What I can do",
      icon: Code2,
      description: "I can help develop solutions that will help you grow your business:",
      points: [
        "UI/UX Design",
        "Fullstack Web Development",
        "Mobile Responsive Design",
        "Database Design",
        "API Integration",
      ],
    },
    {
      title: "Tools I Use",
      icon: Layers,
      description: "I use the latest tools and technologies to build functional products:",
      points: [
        "Frontend: React, Next.js, Tailwind CSS",
        "Backend: Node.js, Express.js",
        "Database: MongoDB, PostgreSQL",
        "Tools: Git, Vercel, VS Code",
      ],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "I aim to design clean and modern interfaces that users love:",
      points: [
        "User-Centered Design",
        "Modern & Clean UI",
        "Responsive Layouts",
        "Wireframes & Prototypes",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black/5 dark:bg-white/5 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Building Digital Experiences"
          subtitle="I specialize in creating stunning user interfaces and developing high-quality web applications that stand out."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover-glow group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-500 group-hover:text-accent-500 transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-outfit">{service.title}</h3>
                </div>
                
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                      <span className="text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
