import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  category?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  category,
  title,
  subtitle,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {category && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-primary/20 text-xs font-mono uppercase tracking-wider text-amber mb-3",
            align === "center" && "mx-auto"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>{category}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-white font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-[2px] w-16 bg-gradient-to-r from-primary to-transparent rounded-full",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
};
