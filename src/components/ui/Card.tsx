import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "interactive";
  glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl bg-surface border border-surface-light/80 p-6 transition-all duration-300",
          glow && "hover:border-primary/40 hover:shadow-orange-glow",
          variant === "interactive" &&
            "hover:-translate-y-1 hover:border-primary/40 hover:shadow-orange-glow cursor-pointer",
          variant === "elevated" && "shadow-cube-shadow",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
