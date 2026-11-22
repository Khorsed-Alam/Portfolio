"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-9 h-9 rounded-lg bg-surface border border-surface-light flex items-center justify-center opacity-50",
          className
        )}
      >
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative p-2 rounded-lg bg-surface border border-surface-light hover:border-primary/50 text-text-muted hover:text-text-white transition-all duration-300 flex items-center gap-2 group shadow-sm active:scale-95",
        className
      )}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber transition-transform duration-500 rotate-0 group-hover:rotate-90 group-hover:text-primary" />
        ) : (
          <Moon className="w-4 h-4 text-primary transition-transform duration-500 rotate-0 group-hover:-rotate-45" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono">
          {isDark ? "Light Mood" : "Dark Mood"}
        </span>
      )}
    </button>
  );
};
