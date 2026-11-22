import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AIInterestsSection } from "@/components/sections/AIInterestsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. 3D Hero */}
        <HeroSection />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Technical Skills */}
        <SkillsSection />

        {/* 4. Featured Projects */}
        <ProjectsSection />

        {/* 5. Education */}
        <EducationSection />

        {/* 6. AI & Machine Learning Interests */}
        <AIInterestsSection />

        {/* 7. Professional Journey */}
        <JourneySection />

        {/* 8. Contact Form */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
