"use client";

import React from "react";
import { motion } from "framer-motion";
import { journeyMilestones } from "@/data/journey";
import { SectionHeading } from "@/ui/SectionHeading";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Milestone, Flag, Compass, Sparkles, ChevronRight } from "lucide-react";

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 sm:py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          category="Milestones"
          title="Professional Journey"
          subtitle="The academic evolution, skill accumulation, and prospective milestones shaping my path toward AI and software engineering."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Rule */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-primary via-surface-light to-amber/40 hidden sm:block" />

          <div className="space-y-12">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <Card
                      variant="elevated"
                      className="bg-surface/90 border-surface-light hover:border-primary/40 transition-all p-6"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-amber font-semibold">
                          {item.period}
                        </span>
                        <Badge
                          variant={
                            item.type === "academic"
                              ? "primary"
                              : item.type === "future"
                              ? "amber"
                              : "default"
                          }
                        >
                          {item.type.toUpperCase()}
                        </Badge>
                      </div>

                      <h3 className="font-display font-bold text-lg text-text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-text-muted mb-3">
                        {item.role} • {item.organization}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  {/* Center Node / Icon */}
                  <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-surface border-2 border-primary text-primary shrink-0 z-10 shadow-orange-glow">
                    {item.type === "future" ? (
                      <Flag className="w-4 h-4 text-amber" />
                    ) : item.type === "academic" ? (
                      <Milestone className="w-4 h-4 text-primary" />
                    ) : (
                      <Compass className="w-4 h-4 text-primary" />
                    )}
                  </div>

                  {/* Empty counterpart for balance */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
