"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, Search } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-primary-500/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-500" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              <div className="p-4 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-500 flex-shrink-0">
                <Search className="w-8 h-8" />
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold font-outfit mb-3">
                  Currently Seeking Opportunities
                </h3>
                <h4 className="text-lg text-primary-500 font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Briefcase className="w-4 h-4" /> Open to Frontend Developer / Junior Web Developer roles
                </h4>
                
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start justify-center md:justify-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                    <span>Actively looking for internships or entry-level positions to apply my skills in real-world scenarios.</span>
                  </li>
                  <li className="flex items-start justify-center md:justify-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                    <span>Built multiple academic and personal projects demonstrating proficiency in React, Next.js, and TypeScript.</span>
                  </li>
                  <li className="flex items-start justify-center md:justify-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                    <span>Comfortable working with modern CSS frameworks like Tailwind CSS and consuming REST APIs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
