import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asChild?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed select-none tracking-wide text-sm";

    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-hover shadow-orange-glow hover:shadow-orange-glow-lg border border-primary/30 active:scale-[0.98]",
      secondary:
        "bg-surface text-text-white hover:bg-surface-light border border-surface-light/80 hover:border-primary/40 shadow-sm active:scale-[0.98]",
      outline:
        "bg-transparent text-text-white border border-surface-light/80 hover:border-primary hover:text-primary active:scale-[0.98]",
      ghost:
        "bg-transparent text-text-muted hover:text-text-white hover:bg-surface/50 active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3 text-base gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
