"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { EXPERIENCE_DATA } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 font-mono text-xs text-blue-400 uppercase tracking-widest mb-8">
        <Briefcase size={16} />
        <span>01 — PROFESSIONAL EXPERIENCE</span>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 pl-8 space-y-12">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#050508] shadow-lg shadow-blue-500/50" />

            <GlassCard className="p-6 md:p-8 border-blue-500/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <span className="text-sm font-mono text-blue-400 font-semibold">{exp.company}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                    <Calendar size={14} className="text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                      <MapPin size={14} className="text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-6 text-sm text-zinc-300 font-sans leading-relaxed">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-2 font-mono text-xs">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
