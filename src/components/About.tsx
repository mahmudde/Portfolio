"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Monitor, Smartphone, Lightbulb } from "lucide-react";

export default function About() {
  const highlightCards = [
    { title: "Web Application Development", icon: Monitor },
    { title: "Mobile Application Development", icon: Smartphone },
    { title: "Problem Solving", icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" />

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-primary-500/50 to-accent-500/50 hover:from-primary-500 hover:to-accent-500 transition-colors duration-500">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-background flex items-center justify-center">
                <div className="absolute inset-0 bg-foreground/5 flex items-center justify-center text-foreground/40 text-sm">Image Placeholder</div>
                <Image
                  src="/profile.jpg"
                  alt="About Me"
                  fill
                  className="object-cover object-top relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-outfit font-bold mb-4 text-gradient">
                I'm MD. Mahmudur Rahman
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A Physics graduate turned passionate Full Stack Developer. I completed my BSc in Physics, but my love for technology and problem-solving naturally drew me into the world of software development.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My programming journey started with a fascination for how things work on the internet. 
                Today, I enjoy building clean, user-centric interfaces and solving complex logical problems. 
                When I'm not coding, you can find me exploring new tech trends, reading, or designing UI mockups.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {highlightCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl glass-card border-l-4 border-l-primary-500 hover:border-l-accent-500 transition-all hover:scale-[1.02]"
                  >
                    <div className="p-3 rounded-full bg-primary-500/10 text-primary-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-medium text-lg">{card.title}</h4>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
