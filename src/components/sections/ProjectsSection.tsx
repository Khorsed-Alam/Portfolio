"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/ui/SectionHeading";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { Github, ExternalLink, FolderGit2, Sprout, SearchCheck, ShoppingBag } from "lucide-react";

const projectIcons: Record<string, React.ReactNode> = {
  "leaf-agro": <Sprout className="w-6 h-6 text-primary" />,
  "lost-and-found": <SearchCheck className="w-6 h-6 text-amber" />,
  "tonmoy-varity-store": <ShoppingBag className="w-6 h-6 text-primary" />,
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-background/50 border-y border-surface-light/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          category="Portfolio"
          title="Featured Projects"
          subtitle="Concrete software development and system architecture projects created during my academic career."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                variant="interactive"
                className="h-full flex flex-col justify-between bg-surface border-surface-light group relative overflow-hidden p-6"
              >
                {/* Top Subtle Border Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary transition-all duration-500" />

                <div>
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-background border border-surface-light group-hover:border-primary/40 group-hover:shadow-orange-glow transition-all">
                      {projectIcons[project.id] || <FolderGit2 className="w-6 h-6 text-primary" />}
                    </div>
                    <Badge variant="primary">{project.category}</Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display font-bold text-xl text-text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-amber mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Factual Description (Strictly adhering to prompt) */}
                  <p className="text-sm text-text-muted leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-surface-light/60">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-background text-text-muted text-[11px] font-mono border border-surface-light/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href={project.githubUrl || personalData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-background border border-surface-light/80 hover:border-primary/50 text-text-white text-xs font-mono group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-muted mb-4 font-mono">
            Explore more repositories and source code on GitHub:
          </p>
          <Button
            href={personalData.github}
            variant="outline"
            size="md"
            icon={<Github className="w-4 h-4" />}
          >
            github.com/Khorsed-Alam
          </Button>
        </div>
      </div>
    </section>
  );
};
