"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKILLS_DATA } from "@/data/skills";
import { Cpu, Terminal, Code, Database, Wrench } from "lucide-react";

export const TechConstellation: React.FC = () => {

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Terminal className="text-blue-400" size={18} />;
      case 1:
        return <Cpu className="text-cyan-400" size={18} />;
      case 2:
        return <Code className="text-violet-400" size={18} />;
      case 3:
        return <Database className="text-emerald-400" size={18} />;
      default:
        return <Wrench className="text-amber-400" size={18} />;
    }
  };

  return (
    <section id="engineering" className="py-24 px-6 max-w-7xl mx-auto relative">
      <SectionHeader
        number="03"
        category="TECHNICAL CAPABILITIES"
        title="ENGINEERING STACK"
        subtitle="Verified core programming languages, software engineering fundamentals, database systems & developer tools."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <GlassCard className="h-full border-zinc-800/80">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-6">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-200 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
