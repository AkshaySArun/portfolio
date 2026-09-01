"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ACHIEVEMENTS_DATA, AchievementItem } from "@/data/achievements";
import { Trophy, ShieldCheck, Star } from "lucide-react";

export const AchievementBadges: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<AchievementItem | null>(null);

  return (
    <div>
      <div className="flex items-center gap-3 font-mono text-xs text-amber-400 uppercase tracking-widest mb-8">
        <Trophy size={16} />
        <span>03 — CERTIFICATIONS & COMPETITION ACHIEVEMENTS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS_DATA.map((ach, idx) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onClick={() => setSelectedBadge(selectedBadge?.id === ach.id ? null : ach)}
            className="cursor-pointer"
          >
            <GlassCard className={`h-full p-6 border-zinc-800 transition-all duration-300 ${
              selectedBadge?.id === ach.id ? "border-amber-500/50 bg-amber-950/20" : ""
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400">
                  {ach.category === "Certification" ? <ShieldCheck size={20} /> : <Trophy size={20} />}
                </div>
                <span className="font-mono text-[10px] text-zinc-500 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  {ach.badgeCode}
                </span>
              </div>

              <h4 className="font-bold text-white text-sm mb-2">{ach.title}</h4>
              <p className="text-xs font-mono text-blue-400 mb-3">{ach.issuer}</p>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-3">
                {ach.detail}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
