"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";
import { Code, Database, Layout, PenTool, Wrench, Lightbulb, Lock, CreditCard } from "lucide-react";

export default function Skills() {
  const categories = [
    "Frontend", 
    "Backend", 
    "Database & ORM", 
    "Authentication", 
    "Payment", 
    "Tools & Deployment", 
    "Design & Productivity", 
    "AI Tools"
  ];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Frontend": return <Layout className="w-5 h-5" />;
      case "Backend": return <Code className="w-5 h-5" />;
      case "Database & ORM": return <Database className="w-5 h-5" />;
      case "Authentication": return <Lock className="w-5 h-5" />;
      case "Payment": return <CreditCard className="w-5 h-5" />;
      case "Tools & Deployment": return <Wrench className="w-5 h-5" />;
      case "Design & Productivity": return <PenTool className="w-5 h-5" />;
      case "AI Tools": return <Lightbulb className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="text-primary-500">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-lg font-bold font-outfit">{category}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-foreground/50">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
