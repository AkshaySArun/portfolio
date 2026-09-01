"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  id,
  className,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.85,
        delay: delay,
        ease: [0.65, 0, 0.35, 1] as const,
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: "-60px" }}
      variants={variants}
      className={cn("relative transition-colors duration-1000", className)}
    >
      {children}
    </motion.section>
  );
};
