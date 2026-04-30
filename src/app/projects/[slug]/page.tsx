import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, Play, CheckCircle2 } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-24 relative min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary-500 transition-colors mb-8 font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="glass-card rounded-3xl p-6 md:p-10">
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center mb-10">
            <div className="absolute inset-0 flex items-center justify-center text-foreground/30 text-sm z-0">
              Project Banner Placeholder
            </div>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover relative z-10"
            />
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-outfit font-bold mb-6">{project.title}</h1>
              
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4 font-outfit text-primary-500">Overview</h3>
                <p className="text-foreground/80 leading-relaxed mb-8">{project.description}</p>

                {project.challenges && (
                  <>
                    <h3 className="text-xl font-bold mb-4 font-outfit text-primary-500">Challenges & Solutions</h3>
                    <p className="text-foreground/80 leading-relaxed mb-8">{project.challenges}</p>
                  </>
                )}

                {project.futurePlans && (
                  <>
                    <h3 className="text-xl font-bold mb-4 font-outfit text-primary-500">Future Improvements</h3>
                    <p className="text-foreground/80 leading-relaxed mb-8">{project.futurePlans}</p>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold font-outfit mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-500 border border-primary-500/20 text-sm font-medium flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold font-outfit mb-4">Project Links</h3>
                <div className="flex flex-col gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/20"
                    >
                      <Play className="w-4 h-4" /> View Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl glass-card font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" /> View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
