"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="text-blue-500 font-bold">// {number}</span>
        <span className="text-zinc-600">—</span>
        <span>{category}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
