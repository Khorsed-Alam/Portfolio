"use client";

import React from "react";
import { motion } from "framer-motion";
import { aiInterestsData } from "@/data/aiInterests";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/ui/SectionHeading";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Brain, Cpu, Network, Lightbulb, Compass, Binary, ChevronRight } from "lucide-react";

const topicIcons: Record<number, React.ReactNode> = {
  0: <Brain className="w-6 h-6 text-primary" />,
  1: <Network className="w-6 h-6 text-amber" />,
  2: <Cpu className="w-6 h-6 text-primary" />,
};

export const AIInterestsSection: React.FC = () => {
  return (
    <section id="ai-interests" className="py-24 sm:py-32 relative bg-background/50 border-y border-surface-light/40 overflow-hidden w-full max-w-full">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          category="Specialization"
          title="AI & Machine Learning Interests"
          subtitle="Areas of continuous study, mathematical exploration, and algorithmic research aligned with my career goal as an AI/ML Engineer."
        />

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-surface border border-primary/20 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-background border border-primary/40 text-primary shrink-0 shadow-orange-glow">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber uppercase tracking-wider">
                  Target Trajectory
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-text-white mt-1">
                  Aspiring {personalData.careerGoal}
                </h3>
                <p className="text-sm text-text-muted mt-1 max-w-2xl">
                  Dedicated to deepening understanding of machine learning algorithms, statistical modeling, and scalable intelligent systems from mathematical roots to code implementation.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-center shrink-0">
              <Badge variant="primary">10th Semester CSE</Badge>
              <Badge variant="amber">Python & Algorithms</Badge>
            </div>
          </div>
        </motion.div>

        {/* Interests Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiInterestsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full flex flex-col justify-between bg-surface border-surface-light hover:border-primary/40 transition-all p-6">
                <div>
                  <div className="p-3 w-fit rounded-xl bg-background border border-surface-light mb-5">
                    {topicIcons[index] || <Brain className="w-6 h-6 text-primary" />}
                  </div>

                  <h4 className="font-display font-bold text-lg text-text-white mb-2">
                    {item.topic}
                  </h4>
                  <p className="text-xs font-mono text-amber mb-4">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <h5 className="text-[11px] font-mono uppercase text-text-dim tracking-wider mb-2.5">
                    Focus Domains:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {item.keyAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 rounded bg-background text-text-muted text-[11px] font-mono border border-surface-light/40"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
