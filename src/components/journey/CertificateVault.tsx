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
  LayoutGrid,
  GitCommit,
  Calendar,
  Building,
  FileText,
  CheckCircle2
} from "lucide-react";

export const CertificateVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>("ALL");
  const [viewMode, setViewMode] = useState<"GRID" | "TIMELINE">("GRID");
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

  const timelineYears = useMemo(() => {
    const years = Array.from(new Set(filteredCertificates.map((c) => c.year))).sort((a, b) => b - a);
    return years.map((yr) => ({
      year: yr,
      items: filteredCertificates.filter((c) => c.year === yr),
    }));
  }, [filteredCertificates]);

  const getBadgeIcon = (type: BadgeType) => {
    switch (type) {
      case "AWARD":
        return <Trophy size={18} className="text-amber-400" />;
      case "COURSE":
      case "CERTIFICATION":
        return <ShieldCheck size={18} className="text-blue-400" />;
      case "HACKATHON":
        return <Code2 size={18} className="text-cyan-400" />;
      case "ORGANIZER":
        return <Users size={18} className="text-emerald-400" />;
      case "WORKSHOP":
        return <Wrench size={18} className="text-violet-400" />;
      case "CONFERENCE":
        return <Globe size={18} className="text-indigo-400" />;
      case "TECHNICAL PROGRAMME":
        return <GraduationCap size={18} className="text-amber-300" />;
      default:
        return <FileText size={18} className="text-zinc-400" />;
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <SectionHeader
          number="04"
          category="VERIFIED_CREDENTIALS // ARCHIVE"
          title="CERTIFICATE VAULT"
          subtitle="Certifications, hackathons, technical workshops, conferences and academic achievements collected throughout my engineering journey."
        />
      </div>

      {/* Dynamic Count Pill Banner */}
      <div className="mb-8 flex items-center justify-between p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 font-mono text-xs text-blue-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-400" />
          <span className="font-bold">{CERTIFICATES_DATA.length} VERIFIED CREDENTIAL RECORDS</span>
          <span className="text-zinc-500 hidden sm:inline">— Direct document proof attached to every record</span>
        </div>
        <span className="text-zinc-500 text-[11px] hidden md:inline">SYSTEM ID: AKSHAY_S_VAULT_v2</span>
      </div>

      {/* Filter Tabs & View Mode Switcher */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/25 font-bold"
                  : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800 font-mono text-xs shrink-0 self-end md:self-auto">
          <button
            onClick={() => setViewMode("GRID")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              viewMode === "GRID"
                ? "bg-zinc-800 text-white font-bold"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <LayoutGrid size={14} />
            <span>GRID</span>
          </button>
          <button
            onClick={() => setViewMode("TIMELINE")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              viewMode === "TIMELINE"
                ? "bg-zinc-800 text-white font-bold"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <GitCommit size={14} />
            <span>TIMELINE</span>
          </button>
        </div>
      </div>

      {/* Grid View Mode */}
      {viewMode === "GRID" && (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveCertificate(cert)}
                className="cursor-pointer group"
              >
                <GlassCard className="h-full flex flex-col justify-between p-6 border-zinc-800/80 group-hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden">
                  <div>
                    {/* Top Type Indicator & Badge Code */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                          {getBadgeIcon(cert.badgeType)}
                        </div>
                        <span
                          className={`font-mono text-[11px] px-2.5 py-0.5 rounded border uppercase tracking-wider ${getBadgeStyle(
                            cert.badgeType
                          )}`}
                        >
                          {cert.badgeType}
                        </span>
                      </div>

                      <span className="font-mono text-[10px] text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">
                        {cert.badgeCode}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-bold text-white text-base md:text-lg mb-1 group-hover:text-blue-400 transition-colors flex items-center justify-between gap-2">
                      <span>{cert.title}</span>
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 shrink-0"
                      />
                    </h3>
                    {cert.subtitle && (
                      <p className="text-xs font-mono text-zinc-400 mb-3">{cert.subtitle}</p>
                    )}

                    <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-3 mb-6">
                      {cert.description}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div>
                    <div className="space-y-1.5 font-mono text-xs text-zinc-400 border-t border-zinc-800/80 pt-4 mb-4">
                      <div className="flex items-center gap-2 truncate">
                        <Building size={13} className="text-blue-400 shrink-0" />
                        <span className="truncate">{cert.organization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={13} className="text-blue-400 shrink-0" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Action trigger */}
                    <button className="w-full py-2 bg-zinc-900/90 group-hover:bg-blue-600 text-zinc-300 group-hover:text-white font-mono text-xs font-semibold rounded-lg border border-zinc-800 group-hover:border-blue-500 transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                      <span>VIEW CERTIFICATE</span>
                      <span>↗</span>
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Timeline View Mode */}
      {viewMode === "TIMELINE" && (
        <div className="space-y-12 pl-4 sm:pl-8 border-l border-zinc-800">
          {timelineYears.map(({ year, items }) => (
            <div key={year} className="relative">
              {/* Timeline Year Marker */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-0 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-[#050508] shadow-lg shadow-blue-500/50" />
                <span className="font-mono text-xl font-bold text-blue-400 bg-[#050508] px-2 py-0.5 rounded border border-blue-900/50">
                  {year}
                </span>
              </div>

              <div className="pt-8 space-y-6">
                {items.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveCertificate(cert)}
                    className="cursor-pointer group"
                  >
                    <GlassCard className="p-6 border-zinc-800/80 group-hover:border-blue-500/40 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                            {getBadgeIcon(cert.badgeType)}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                              {cert.title}
                            </h4>
                            <span className="text-xs font-mono text-zinc-400">{cert.organization}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 font-mono text-xs">
                          <span
                            className={`px-2.5 py-0.5 rounded border uppercase text-[10px] ${getBadgeStyle(
                              cert.badgeType
                            )}`}
                          >
                            {cert.badgeType}
                          </span>
                          <span className="text-zinc-400">{cert.date}</span>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      <div className="flex justify-end">
                        <span className="font-mono text-xs text-blue-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>VIEW CERTIFICATE</span>
                          <span>→</span>
                        </span>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certificate Viewer Modal */}
      <CertificateViewer
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
};
