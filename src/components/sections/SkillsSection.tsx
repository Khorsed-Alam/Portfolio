"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/ui/SectionHeading";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Code2, Layout, Database, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <Code2 className="w-5 h-5 text-primary" />,
  Frontend: <Layout className="w-5 h-5 text-amber" />,
  Database: <Database className="w-5 h-5 text-primary" />,
  "Tools & Frameworks": <Wrench className="w-5 h-5 text-amber" />,
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-background overflow-hidden w-full max-w-full">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          category="Proficiencies"
          title="Technical Skills"
          subtitle="A comprehensive overview of programming languages, frontend technologies, database management, and development tools."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border",
              activeCategory === "All"
                ? "bg-primary text-white border-primary shadow-orange-glow font-semibold"
                : "bg-surface text-text-muted hover:text-text-white border-surface-light"
            )}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border",
                activeCategory === cat.category
                  ? "bg-primary text-white border-primary shadow-orange-glow font-semibold"
                  : "bg-surface text-text-muted hover:text-text-white border-surface-light"
              )}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <Card className="h-full bg-surface/80 border-surface-light hover:border-primary/30 transition-all p-6">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-light">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-background/80 border border-surface-light">
                      {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-primary" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-text-white">
                        {cat.category}
                      </h3>
                      <p className="text-xs font-mono text-text-muted">
                        {cat.skills.length} core competencies
                      </p>
                    </div>
                  </div>
                  <Badge variant="amber">{cat.category.toUpperCase()}</Badge>
                </div>

                {/* Skill List items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3.5 rounded-lg bg-background/60 border border-surface-light/60 hover:border-primary/40 hover:bg-surface transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-text-white group-hover:text-primary transition-colors text-sm">
                          {skill.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:shadow-orange-glow transition-all" />
                      </div>
                      {skill.description && (
                        <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
