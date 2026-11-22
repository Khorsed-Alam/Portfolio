"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import { Button } from "@/ui/Button";
import { ArrowDown, Sparkles, Terminal, FileText, Send } from "lucide-react";

// Dynamically import 3D Canvas without SSR
const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
    </div>
  ),
});

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20 sm:pt-24 pb-12 sm:pb-16 transition-colors duration-300"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/95 border border-primary/30 backdrop-blur-md mb-4 sm:mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-orange-700 dark:text-amber tracking-wide">
              {personalData.title}
            </span>
          </motion.div>

          {/* Main Title - Large bold high-contrast typography centered across screen */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-text-white font-display uppercase leading-[1.08] text-center w-full"
          >
            <span className="inline mr-3 sm:mr-5">KHORSED</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-primary to-orange-500 dark:from-text-white dark:via-text-white dark:to-primary">
              ALAM
            </span>
          </motion.h1>

          {/* Academic & University Subheading with high contrast */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-1.5 text-xs sm:text-base font-mono w-full"
          >
            <span className="text-slate-900 dark:text-text-white font-semibold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              {personalData.university}
            </span>
            <span className="text-primary font-bold">•</span>
            <span className="text-slate-700 dark:text-text-muted font-medium">
              {personalData.department}
            </span>
            <span className="text-primary font-bold">•</span>
            <span className="text-orange-600 dark:text-amber font-semibold">
              {personalData.semester}
            </span>
          </motion.div>

          {/* Bio Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-700 dark:text-text-muted w-full max-w-2xl mx-auto leading-relaxed font-sans font-normal"
          >
            &ldquo;{personalData.bio}&rdquo;
          </motion.p>

          {/* Action CTAs - Centered responsive action buttons spanning screen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
          >
            <Button
              href="#projects"
              variant="primary"
              size="md"
              className="py-2.5 px-5 text-xs sm:text-sm shadow-orange-glow"
              icon={<Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              Explore Projects
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="md"
              className="py-2.5 px-5 text-xs sm:text-sm"
              icon={<Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              Get in Touch
            </Button>
            <Button
              href="/resume.pdf"
              variant="outline"
              size="md"
              className="py-2.5 px-5 text-xs sm:text-sm"
              icon={<FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              Resume
            </Button>
          </motion.div>

          {/* Key Facts Pills - Full-width 3-column row spanning symmetrically */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 sm:mt-14 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-xl mx-auto pt-6 border-t border-surface-light/80"
          >
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-surface/90 border border-surface-light shadow-sm text-center">
              <span className="block text-[10px] sm:text-xs font-mono text-slate-500 dark:text-text-muted font-medium truncate">
                Target Role
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-text-white mt-0.5 block truncate">
                AI / ML Eng.
              </span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-surface/90 border border-surface-light shadow-sm text-center">
              <span className="block text-[10px] sm:text-xs font-mono text-slate-500 dark:text-text-muted font-medium truncate">
                Academic Term
              </span>
              <span className="text-xs sm:text-sm font-bold text-orange-600 dark:text-amber mt-0.5 block truncate">
                10th Sem.
              </span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-surface/90 border border-surface-light shadow-sm text-center">
              <span className="block text-[10px] sm:text-xs font-mono text-slate-500 dark:text-text-muted font-medium truncate">
                Location
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-text-white mt-0.5 block truncate">
                Bangladesh
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none text-slate-500 dark:text-text-muted opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-primary animate-bounce" />
      </div>
    </section>
  );
};
