"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { SectionHeading } from "@/ui/SectionHeading";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import {
  GraduationCap,
  Building2,
  School,
  MapPin,
  Calendar,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const levelIcons = {
  University: <GraduationCap className="w-6 h-6 text-primary" />,
  College: <Building2 className="w-6 h-6 text-amber" />,
  School: <School className="w-6 h-6 text-text-muted" />,
};

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 relative bg-background overflow-hidden w-full max-w-full">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          category="Academics"
          title="Education"
          subtitle="Formal academic trajectory spanning university studies, higher secondary college education, and secondary school."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide for Desktop */}
          <div className="absolute top-6 bottom-6 left-6 sm:left-8 w-[2px] bg-gradient-to-b from-primary via-surface-light to-surface-light/40 hidden md:block" />

          <div className="space-y-8">
            {educationData.map((item, index) => {
              const isCurrent = !!item.isCurrent;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline Node Icon (Desktop) */}
                  <div
                    className={cn(
                      "hidden md:flex absolute left-3 sm:left-5 top-8 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-xl bg-surface border-2 transition-all duration-300 z-10",
                      isCurrent
                        ? "border-primary shadow-orange-glow text-primary"
                        : "border-surface-light text-text-muted"
                    )}
                  >
                    {levelIcons[item.level] || (
                      <GraduationCap className="w-5 h-5" />
                    )}
                  </div>

                  {/* Academic Card */}
                  <Card
                    className={cn(
                      "relative overflow-hidden transition-all duration-300 p-6 sm:p-8",
                      isCurrent
                        ? "bg-surface/95 border-primary/40 shadow-orange-glow"
                        : "bg-surface/80 border-surface-light hover:border-surface-light/90"
                    )}
                  >
                    {/* Glowing highlight bar for current education */}
                    {isCurrent && (
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-amber to-primary shadow-orange-glow" />
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-surface-light/60">
                      <div>
                        {/* Level & Current status pill */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-amber font-semibold">
                            {item.level}
                          </span>
                          <span className="text-surface-light">•</span>
                          {isCurrent ? (
                            <Badge variant="primary" className="gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                              CURRENT EDUCATION
                            </Badge>
                          ) : (
                            <Badge variant="outline">PREVIOUS EDUCATION</Badge>
                          )}
                        </div>

                        {/* Institution Name (Clickable if institutionUrl exists) */}
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-text-white flex items-center gap-2 flex-wrap">
                          {item.institutionUrl ? (
                            <a
                              href={item.institutionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors inline-flex items-center gap-1.5 group"
                            >
                              <span>{item.institution}</span>
                              <ExternalLink className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors shrink-0" />
                            </a>
                          ) : (
                            <span>{item.institution}</span>
                          )}
                        </h3>

                        {/* Department / Qualification */}
                        {item.department && (
                          <p className="text-sm font-mono text-primary mt-1">
                            {item.department}
                          </p>
                        )}
                        {item.qualification && (
                          <p className="text-sm font-mono text-amber mt-1">
                            {item.qualification}
                          </p>
                        )}
                      </div>

                      {/* Status & Semester Badges */}
                      <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                        {item.currentSemester && (
                          <span className="px-2.5 py-1 rounded bg-background text-amber text-xs font-mono border border-surface-light/60">
                            {item.currentSemester}
                          </span>
                        )}
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium",
                            isCurrent
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-background text-text-muted border border-surface-light/60"
                          )}
                        >
                          {isCurrent ? (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {item.status}
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                              {item.status}
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Details Row (Batch, Class, Location, Facebook link) */}
                    <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-text-muted">
                      {item.batch && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber" />
                          <span>Batch: {item.batch}</span>
                        </div>
                      )}
                      {item.classOf && (
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          <span>{item.classOf}</span>
                        </div>
                      )}
                      {item.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-text-dim" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.institutionUrl && (
                        <a
                          href={item.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:text-primary-hover hover:underline"
                        >
                          <span>Official Page</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
