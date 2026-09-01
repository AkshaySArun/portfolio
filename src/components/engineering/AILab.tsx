"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { AI_LAB_DATA } from "@/data/skills";
import { Sparkles, Brain, Compass, ArrowRight } from "lucide-react";

export const AILab: React.FC = () => {
  return (
    <section id="ailab" className="py-24 px-6 max-w-7xl mx-auto relative">
      <SectionHeader
        number="04"
        category="ARTIFICIAL INTELLIGENCE"
        title="AI ENGINEERING LAB"
        subtitle="Current technical foundation & active exploration pathways in AI/ML engineering."
      />

      {/* AI Philosophy Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-violet-950/30 to-zinc-950 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              AI/ML ENGINEERING DIRECTIVE
            </h3>
            <p className="text-xs text-zinc-400">
              Applying algorithm optimization and software engineering rigor to practical AI systems.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-400 bg-black/40 px-4 py-2 rounded-lg border border-blue-900/50">
          {AI_LAB_DATA.philosophy.map((step, idx) => (
            <React.Fragment key={step}>
              <span>{step}</span>
              {idx < AI_LAB_DATA.philosophy.length - 1 && (
                <span className="text-zinc-600">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Split: Foundation vs Exploring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Current Foundation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full border-blue-500/30">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-6">
              <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800 text-blue-400">
                <Brain size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-blue-400 block uppercase">STATUS: ACTIVE</span>
                <h3 className="font-mono text-sm font-bold text-white tracking-widest uppercase">
                  01 — CURRENT FOUNDATION
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {AI_LAB_DATA.foundation.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 font-mono"
                >
                  <span className="text-xs text-blue-400 font-bold block mb-1">
                    {item.title}
                  </span>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Right: Actively Exploring */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="h-full border-violet-500/30">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-6">
              <div className="p-2.5 rounded-lg bg-violet-950/60 border border-violet-800 text-violet-400">
                <Compass size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-violet-400 block uppercase">STATUS: EXPLORING & BUILDING</span>
                <h3 className="font-mono text-sm font-bold text-white tracking-widest uppercase">
                  02 — ACTIVE EXPLORATION
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {AI_LAB_DATA.exploring.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 font-mono"
                >
                  <span className="text-xs text-violet-400 font-bold block mb-1">
                    {item.title}
                  </span>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
