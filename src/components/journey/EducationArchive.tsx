"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { EDUCATION_DATA } from "@/data/education";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export const EducationArchive: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 font-mono text-xs text-violet-400 uppercase tracking-widest mb-8">
        <GraduationCap size={16} />
        <span>02 — ACADEMIC ARCHIVE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-7 border-violet-500/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-white">
                    {edu.degree}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-violet-950/50 border border-violet-800 text-violet-300 font-mono text-xs rounded-md">
                    <Award size={14} />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-zinc-200 mb-1">{edu.field}</h4>
                <p className="text-xs font-mono text-blue-400 mb-1">{edu.institution}</p>
                <p className="text-xs font-mono text-zinc-500 mb-6">{edu.university} • {edu.year}</p>

                <div className="space-y-2 font-sans text-xs text-zinc-300">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-violet-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
