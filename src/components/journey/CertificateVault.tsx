"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CERTIFICATES_DATA, Certificate, CertificateCategory, BadgeType } from "@/data/certificates";
import { CertificateViewer } from "./CertificateViewer";
import {
  Trophy,
  ShieldCheck,
  Code2,
  Users,
  Wrench,
  Globe,
  GraduationCap,
  ExternalLink,
  Building,
  FileText,
  CheckCircle2
} from "lucide-react";

export const CertificateVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>("ALL");
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const categories: CertificateCategory[] = [
    "ALL",
    "COURSES",
    "ACHIEVEMENTS",
    "HACKATHONS",
    "WORKSHOPS",
    "CONFERENCES",
    "TECHNICAL PROGRAMMES",
    "COMMUNITY",
  ];

  const filteredCertificates = useMemo(() => {
    if (selectedCategory === "ALL") return CERTIFICATES_DATA;
    return CERTIFICATES_DATA.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const getBadgeIcon = (type: BadgeType) => {
    switch (type) {
      case "AWARD":
        return <Trophy size={20} className="text-amber-400" />;
      case "COURSE":
      case "CERTIFICATION":
        return <ShieldCheck size={20} className="text-blue-400" />;
      case "HACKATHON":
        return <Code2 size={20} className="text-cyan-400" />;
      case "ORGANIZER":
        return <Users size={20} className="text-emerald-400" />;
      case "WORKSHOP":
        return <Wrench size={20} className="text-violet-400" />;
      case "CONFERENCE":
        return <Globe size={20} className="text-indigo-400" />;
      case "TECHNICAL PROGRAMME":
        return <GraduationCap size={20} className="text-amber-300" />;
      default:
        return <FileText size={20} className="text-zinc-400" />;
    }
  };

  const getBadgeStyle = (type: BadgeType) => {
    switch (type) {
      case "AWARD":
        return "bg-amber-950/40 border-amber-800/40 text-amber-300";
      case "COURSE":
      case "CERTIFICATION":
        return "bg-blue-950/40 border-blue-800/40 text-blue-300";
      case "HACKATHON":
        return "bg-cyan-950/40 border-cyan-800/40 text-cyan-300";
      case "ORGANIZER":
        return "bg-emerald-950/40 border-emerald-800/40 text-emerald-300";
      case "WORKSHOP":
        return "bg-violet-950/40 border-violet-800/40 text-violet-300";
      case "CONFERENCE":
        return "bg-indigo-950/40 border-indigo-800/40 text-indigo-300";
      case "TECHNICAL PROGRAMME":
        return "bg-amber-950/30 border-amber-900/40 text-amber-200";
      default:
        return "bg-zinc-900 border-zinc-800 text-zinc-400";
    }
  };

  return (
    <div id="vault" className="mt-20">
      <SectionHeader
        number="04"
        category="CREDENTIAL_ARCHIVE // VERIFIED"
        title="CERTIFICATE VAULT"
        subtitle="Verified milestones from my engineering journey."
      />

      {/* Dynamic Count Pill Banner */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 font-mono text-xs text-blue-300 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
          <span className="font-bold">{CERTIFICATES_DATA.length} VERIFIED CREDENTIAL RECORDS</span>
          <span className="text-zinc-500 hidden md:inline">— Official documents attached</span>
        </div>
        <span className="text-zinc-500 text-[11px]">CREDENTIAL ARCHIVE v3</span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs mb-12 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/25 font-bold"
                : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sequence of Large Premium Animated Cards */}
      <div className="max-w-5xl mx-auto space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.65, 0, 0.35, 1] as const,
              }}
              whileHover={{ y: -4, scale: 1.008 }}
              onClick={() => setActiveCertificate(cert)}
              className="cursor-pointer group"
            >
              <GlassCard className="p-6 md:p-8 border-zinc-800/80 group-hover:border-blue-500/40 transition-all duration-400 relative overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  {/* Left Column: Icon Box / Preview Indicator */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-blue-500/50 flex items-center justify-center shadow-inner transition-colors shrink-0">
                      {getBadgeIcon(cert.badgeType)}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[10px] px-2.5 py-0.5 rounded border uppercase tracking-wider font-bold ${getBadgeStyle(
                            cert.badgeType
                          )}`}
                        >
                          {cert.badgeType}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                          {cert.badgeCode}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-zinc-400 block">{cert.date}</span>
                    </div>
                  </div>

                  {/* Center Column: Certificate Metadata */}
                  <div className="flex-1 space-y-2 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-white text-lg md:text-xl group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      {cert.placement && (
                        <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/80 font-mono text-[10px]">
                          [{cert.placement}]
                        </span>
                      )}
                      {cert.level && (
                        <span className="px-2 py-0.5 rounded bg-yellow-950/80 text-yellow-300 border border-yellow-800/80 font-mono text-[10px]">
                          [{cert.level}]
                        </span>
                      )}
                      {cert.credits && (
                        <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/80 font-mono text-[10px]">
                          [{cert.credits} Credits]
                        </span>
                      )}
                    </div>

                    {cert.subtitle && (
                      <p className="text-xs font-mono text-blue-400">{cert.subtitle}</p>
                    )}

                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                      <Building size={14} className="text-blue-400 shrink-0" />
                      <span className="truncate">{cert.organization}</span>
                    </div>

                    <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                  </div>

                  {/* Right Column: View Action Trigger */}
                  <div className="shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-zinc-800/80 flex items-center justify-end">
                    <button className="w-full md:w-auto px-5 py-2.5 bg-zinc-900/90 group-hover:bg-blue-600 text-zinc-300 group-hover:text-white font-mono text-xs font-bold rounded-lg border border-zinc-800 group-hover:border-blue-500 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                      <span>VIEW CERTIFICATE</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateViewer
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
};
