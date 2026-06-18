"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter, FaFacebook as Facebook } from "react-icons/fa";
import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";

export default function Hero() {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github": return <Github className="w-5 h-5" />;
      case "linkedin": return <Linkedin className="w-5 h-5" />;
      case "twitter": return <Twitter className="w-5 h-5" />;
      case "facebook": return <Facebook className="w-5 h-5" />;
      case "mail": return <Mail className="w-5 h-5" />;
      default: return <Github className="w-5 h-5" />;
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-7xl font-outfit font-bold tracking-tight">
            Hi, I&apos;m <br className="hidden md:block" />
            MD. Mahmudur Rahman
          </h1>
          <div className="h-8 md:h-10 relative flex items-center w-full">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-4xl font-semibold text-gradient"
            />
          </div>
          <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
            Crafting modern, responsive, and user-friendly websites with passion and precision.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1ljqPh05_M8Sw9yJaXBWascZYQ9aw7X4n/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium flex items-center gap-2 hover:scale-105 transition-transform hover-glow"
            >
              Download Resume <Download className="w-4 h-4" />
            </a>
            <Link
              href="/#projects"
              className="px-6 py-3 rounded-full glass-card font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/80 hover:text-primary-500 hover:scale-110 transition-all hover-glow"
                aria-label={link.name}
              >
                {getIcon(link.iconName)}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Glowing Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-full blur-2xl opacity-20 animate-pulse" />
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-primary-500 to-accent-500 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-background relative flex items-center justify-center">
              {/* Fallback box if image is missing is handled by standard Next Image alt or a div behind it */}
              <div className="absolute inset-0 bg-foreground/5 flex items-center justify-center text-foreground/40 text-sm">Image Placeholder</div>
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover object-top relative z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-10 right-10 md:right-20 w-12 h-12 glass-card rounded-full flex items-center justify-center text-blue-500 font-bold bg-background/80 backdrop-blur-md"
          >
            TS
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 md:left-20 w-12 h-12 glass-card rounded-full flex items-center justify-center text-yellow-400 font-bold bg-background/80 backdrop-blur-md"
          >
            JS
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-0 md:-right-10 w-12 h-12 glass-card rounded-full flex items-center justify-center text-cyan-400 font-bold bg-background/80 backdrop-blur-md"
          >
            Re
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
