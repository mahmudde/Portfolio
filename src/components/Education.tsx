"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black/5 dark:bg-white/5 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Education" />

        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass-card items-center justify-center text-primary-500 border-2 border-primary-500 bg-background z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <GraduationCap className="w-6 h-6" />
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass-card p-6 rounded-2xl relative group hover:scale-[1.02] transition-transform duration-300">
                    {/* Arrow (Desktop) */}
                    <div
                      className={`hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent ${
                        index % 2 === 0
                          ? "-left-4 border-r-8 border-r-white/10"
                          : "-right-4 border-l-8 border-l-white/10"
                      }`}
                    />

                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-500 mb-4 border border-primary-500/20">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold font-outfit mb-2">{item.degree}</h3>
                    <p className="text-foreground/70 font-medium mb-3">{item.institution}</p>
                    <p className="text-sm text-foreground/60">{item.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
