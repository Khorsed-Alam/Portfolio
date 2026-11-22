"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/data/navigation";
import { personalData } from "@/data/personal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-surface-light/60 py-2.5 sm:py-3 shadow-lg"
          : "bg-transparent py-3.5 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 sm:gap-2.5 text-text-white transition-colors shrink-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface border border-primary/40 flex items-center justify-center font-display font-bold text-xs sm:text-sm text-primary group-hover:border-primary group-hover:shadow-orange-glow transition-all">
              KA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs sm:text-sm tracking-wider text-text-white group-hover:text-primary transition-colors">
                KHORSED ALAM
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-text-muted tracking-tight">
                AI & ML Aspirant
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface/80 border border-surface-light/80 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-sm">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 tracking-wide",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-text-muted hover:text-text-white"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full shadow-orange-glow" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions - strictly matched with desktop navigation breakpoint (hidden below lg) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 pr-2 border-r border-surface-light/60">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-text-muted hover:text-text-white hover:bg-surface border border-transparent hover:border-surface-light transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg text-text-muted hover:text-text-white hover:bg-surface border border-transparent hover:border-surface-light transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Email Khorsed Alam"
                className="p-2 rounded-lg text-text-muted hover:text-text-white hover:bg-surface border border-transparent hover:border-surface-light transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Dark & Light Mood Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Khorsed_Alam_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white hover:shadow-orange-glow text-xs font-mono font-medium transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu toggle & theme toggle - always fully visible on all mobile screens */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <ThemeToggle className="p-1.5" />
            <a
              href="/resume.pdf"
              download="Khorsed_Alam_Resume.pdf"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white text-xs font-mono font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-text-muted hover:text-text-white bg-surface border border-surface-light/80 hover:border-primary/40 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[54px] sm:top-[60px] bg-background/98 backdrop-blur-xl border-b border-surface-light p-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-text-muted hover:text-text-white hover:bg-surface border border-transparent hover:border-surface-light transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-primary text-xs font-mono">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-surface-light/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-text-white bg-surface"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-text-white bg-surface"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-lg text-text-muted hover:text-text-white bg-surface"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href={`mailto:${personalData.email}`}
              className="text-xs font-mono text-primary hover:underline"
            >
              {personalData.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
