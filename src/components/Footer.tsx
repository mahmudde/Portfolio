"use client";

import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter, FaFacebook as Facebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="border-t border-white/10 bg-background py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-outfit font-bold mb-4 text-gradient">MD. Mahmudur Rahman</h3>
            <Link href="/" className="text-2xl font-outfit font-bold tracking-tighter">
              <span className="text-gradient">Portfolio</span>{"</>"}
            </Link>
            <p className="text-foreground/60 text-sm">Crafting digital experiences with passion.</p>
          </div>

          <div className="flex items-center gap-4">
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
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} MD. Mahmudur Rahman. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/#about" className="hover:text-primary-500 transition-colors">About</Link>
            <Link href="/#projects" className="hover:text-primary-500 transition-colors">Projects</Link>
            <Link href="/#contact" className="hover:text-primary-500 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
