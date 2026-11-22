"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { navItems } from "@/data/navigation";
import { Github, Linkedin, Mail, ArrowUp, MapPin, University, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-surface/90 border-t border-surface-light/60 pt-16 pb-12 overflow-hidden">
      {/* Glow subtle line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col">
              <h3 className="font-display font-bold text-lg text-text-white tracking-wider">
                {personalData.name}
              </h3>
              <p className="text-xs font-mono text-amber">
                {personalData.title}
              </p>
            </div>

            <p className="text-sm text-text-muted max-w-md leading-relaxed">
              {personalData.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-1.5">
                <University className="w-3.5 h-3.5 text-primary" />
                <span>{personalData.university}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber" />
                <span>{personalData.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-white mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-white mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              Connect
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-text-muted hover:text-text-white transition-colors"
              >
                <Github className="w-4 h-4 text-primary" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-text-muted hover:text-text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2.5 text-text-muted hover:text-text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>{personalData.email}</span>
              </a>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-surface/60 border border-surface-light text-xs text-text-muted">
              <div className="flex items-center gap-1.5 text-amber font-mono text-[11px] mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Open for Opportunities</span>
              </div>
              <span>Ready for AI/ML and software engineering internships & roles.</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface-light/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dim">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with Next.js, Three.js & Tailwind</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface border border-surface-light hover:border-primary/50 text-text-muted hover:text-text-white transition-all flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
