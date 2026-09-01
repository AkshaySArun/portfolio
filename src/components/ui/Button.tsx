"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  children,
  className,
  as = "button",
  href,
  target,
  rel,
  onClick,
  disabled,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-medium tracking-wider uppercase transition-all duration-300 rounded-lg disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 border border-blue-500/50",
    secondary:
      "bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-100 border border-zinc-700/60 hover:border-zinc-500",
    outline:
      "bg-transparent hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 border border-blue-500/40 hover:border-blue-400",
    ghost:
      "bg-transparent hover:bg-zinc-800/50 text-zinc-400 hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs gap-2",
    lg: "px-7 py-3.5 text-sm gap-2.5",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href || as === "a") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
