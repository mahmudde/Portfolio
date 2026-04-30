"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { Play } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-white/5 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center text-foreground/30 text-sm z-0">
          Project Image Placeholder
        </div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = '0';
          }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="px-6 py-2 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-outfit mb-2">{project.title}</h3>
        <p className="text-foreground/70 text-sm mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:opacity-90 text-white transition-opacity text-sm font-medium"
            >
              <Play className="w-4 h-4" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
