"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { PROFILE_DATA } from "@/data/profile";
import { MapPin, GraduationCap, Cpu, Code2, Terminal } from "lucide-react";

export const SystemProfile: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative max-w-7xl mx-auto">
      <SectionHeader
        number="01"
        category="SYSTEM ARCHITECTURE"
        title="SYSTEM PROFILE"
        subtitle="Technical dashboard & core engineering parameters."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: System Specifications Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <GlassCard className="h-full flex flex-col justify-between border-blue-500/20">
            <div>
              {/* Header status bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs text-blue-400">
                  <Terminal size={14} />
                  <span>SYS_SPECS // OPERATIONAL</span>
                </div>
                <span className="text-[10px] font-mono bg-blue-950/60 text-blue-400 px-2 py-0.5 rounded border border-blue-800/40">
                  v2.026
                </span>
              </div>

              {/* Data Table */}
              <div className="space-y-5 font-mono text-sm">
                <div>
                  <span className="text-zinc-500 text-xs block mb-1">CANDIDATE_NAME</span>
                  <span className="text-white font-bold text-lg tracking-wide">{PROFILE_DATA.name}</span>
                </div>

                <div>
                  <span className="text-zinc-500 text-xs block mb-1">PRIMARY_ROLE</span>
                  <span className="text-blue-400 font-semibold">{PROFILE_DATA.role} & {PROFILE_DATA.subRole}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-zinc-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500 text-xs block">LOCATION</span>
                    <span className="text-zinc-200">{PROFILE_DATA.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <GraduationCap size={16} className="text-zinc-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500 text-xs block">ACADEMIC_DEGREES</span>
                    <span className="text-zinc-200">{PROFILE_DATA.education}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-500 text-xs block mb-2">ENGINEERING_FOCUS</span>
                  <div className="flex flex-wrap gap-2">
                    {PROFILE_DATA.focus.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-zinc-900/90 text-zinc-300 px-2.5 py-1 rounded border border-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Philosophy Tag */}
            <div className="mt-8 border-t border-zinc-800/80 pt-4">
              <span className="text-zinc-500 font-mono text-[10px] block mb-2">ENGINEERING_PHILOSOPHY</span>
              <div className="flex items-center justify-between text-xs font-mono text-blue-400 font-bold bg-blue-950/30 p-3 rounded-lg border border-blue-900/40">
                {PROFILE_DATA.philosophy.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span>{step}</span>
                    {idx < PROFILE_DATA.philosophy.length - 1 && (
                      <span className="text-zinc-600">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Side: Professional Summary & Technical Directive */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Executive Summary Card */}
          <GlassCard>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 mb-4">
              <Code2 size={14} />
              <span>PROFESSIONAL_POSITIONING</span>
            </div>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans mb-6">
              {PROFILE_DATA.summary}
            </p>
            <div className="p-4 rounded-lg bg-zinc-950/70 border border-zinc-800/80 font-mono text-xs text-zinc-400 leading-relaxed">
              <span className="text-blue-400 font-bold block mb-1">// CORE COMMITMENT</span>
              Building resilient backend architectures, intuitive frontend interfaces, and exploring practical machine learning applications with strong theoretical data structures & algorithms foundation.
            </div>
          </GlassCard>

          {/* Quick Capability Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <GlassCard className="text-center p-4">
              <span className="font-mono text-2xl font-extrabold text-blue-400 block mb-1">MCA+BCA</span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Dual Tech Degrees</span>
            </GlassCard>

            <GlassCard className="text-center p-4">
              <span className="font-mono text-2xl font-extrabold text-cyan-400 block mb-1">8.2+</span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Academic CGPA</span>
            </GlassCard>

            <GlassCard className="text-center p-4 col-span-2 sm:col-span-1">
              <span className="font-mono text-2xl font-extrabold text-violet-400 block mb-1">FULL-STACK</span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Python + React + MySQL</span>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
