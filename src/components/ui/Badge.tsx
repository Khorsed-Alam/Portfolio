import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "amber" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const variantStyles = {
    default: "bg-surface border-surface-light text-text-muted hover:text-text-white",
    primary: "bg-primary/10 border-primary/30 text-primary font-medium",
    amber: "bg-amber/10 border-amber/30 text-amber font-medium",
    outline: "bg-transparent border-surface-light text-text-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border transition-colors duration-200",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
