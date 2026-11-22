"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/ui/SectionHeading";
import { Card } from "@/ui/Card";
import {
  GraduationCap,
  MapPin,
  Target,
  BrainCircuit,
  Code2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-background">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          category="Biography"
          title="About Me"
          subtitle="A passionate Computer Science student dedicated to software engineering and emerging artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Photo / Visual Representation Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/30 to-amber/20 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-surface border border-surface-light p-6 overflow-hidden">
                {/* Visual Portrait Image with Cinematic 3D aesthetic */}
                <div className="relative aspect-[4/5] rounded-xl bg-surface border border-surface-light/80 overflow-hidden group/img shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt={personalData.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                    priority
                  />

                  {/* Cinematic gradient fade from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-95 group-hover/img:opacity-85 transition-opacity duration-300" />

                  {/* Corner Sci-Fi / Cinematic Reticles */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/70 z-20" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/70 z-20" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/70 z-20 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/70 z-20 pointer-events-none" />

                  {/* Name and Designation Overlay at bottom of portrait */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface/90 border border-primary/30 text-[10px] font-mono text-amber mb-1.5 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                      <span>{personalData.title}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-text-white drop-shadow-md">
                      {personalData.name}
                    </h3>
                    <p className="text-xs font-mono text-text-muted mt-0.5 drop-shadow">
                      {personalData.university}
                    </p>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Internships
                  </span>
                  <span className="text-amber">10th Semester</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Information & Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-text-white">
                Engineering Solutions with a Focus on Machine Learning
              </h3>
              <p className="text-base text-text-muted leading-relaxed font-sans">
                {personalData.bio}
              </p>
              <p className="text-sm text-text-muted leading-relaxed font-sans">
                Currently progressing through the 10th semester of Computer Science and Engineering at United International University, I combine a rigorous foundation in algorithms and multi-language development (C, C++, Java, Python) with hands-on systems and frontend technologies.
              </p>
            </div>

            {/* Structured Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Card className="p-4 bg-surface/70 border-surface-light">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-muted uppercase">University & Department</h4>
                    <p className="text-sm font-semibold text-text-white mt-0.5">
                      {personalData.university}
                    </p>
                    <p className="text-xs text-amber font-mono mt-0.5">
                      {personalData.department} ({personalData.semester})
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-surface/70 border-surface-light">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-amber/10 border border-amber/20 text-amber">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-muted uppercase">Career Goal</h4>
                    <p className="text-sm font-semibold text-text-white mt-0.5">
                      {personalData.careerGoal}
                    </p>
                    <p className="text-xs text-text-muted font-mono mt-0.5">
                      Intelligent Systems & Data Science
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-surface/70 border-surface-light">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-muted uppercase">Location</h4>
                    <p className="text-sm font-semibold text-text-white mt-0.5">
                      {personalData.location}
                    </p>
                    <p className="text-xs text-text-muted font-mono mt-0.5">
                      Open to on-site & remote roles
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-surface/70 border-surface-light">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-amber/10 border border-amber/20 text-amber">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-muted uppercase">Experience Status</h4>
                    <p className="text-sm font-semibold text-text-white mt-0.5">
                      Academic & Project Focused
                    </p>
                    <p className="text-xs text-emerald-400 font-mono mt-0.5">
                      No industry roles yet • Eager to learn
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Core Commitments List */}
            <div className="pt-2">
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                Core Strengths & Commitments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Strong foundation in algorithms & logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Multi-paradigm language proficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Active explorer of AI & Machine Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Collaborative mindset & fast learner</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
