"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glowOnHover = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl p-6 relative overflow-hidden transition-all duration-300",
        glowOnHover && "glass-panel-hover",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
