"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CERTIFICATES_DATA,
  Certificate,
  CertificateCategory,
  BadgeType,
} from "@/data/certificates";
import { CertificateViewer } from "./CertificateViewer";
import {
  Trophy,
  ShieldCheck,
  Code2,
  Users,
  Wrench,
  Globe,
  GraduationCap,
  FileText,
  Building,
  Calendar,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  X,
  Activity,
  Award,
  Eye,
} from "lucide-react";

// ─── Semantic Constellation Graph Layout (Coordinates & Visual Connections) ──
interface NodePosition {
  x: number; // percentage [10 .. 90]
  y: number; // percentage [10 .. 90]
  zDepth: number; // translateZ in px
  delay: number; // floating animation delay offset
  categoryCluster: string;
}

const NODE_POSITIONS: Record<string, NodePosition> = {
  // Cluster 1: Theoretical CS & Algorithms (Top Left)
  "nptel-graph-theory": { x: 26, y: 22, zDepth: 20, delay: 0.2, categoryCluster: "theory" },
  "r-programming-infosys": { x: 14, y: 38, zDepth: -10, delay: 1.1, categoryCluster: "theory" },

  // Cluster 2: AI & Advanced Research (Top Center & Right)
  "vtu-reinforcement-learning": { x: 50, y: 16, zDepth: 30, delay: 0.8, categoryCluster: "ai" },
  "research-methodology-vtu": { x: 44, y: 36, zDepth: 10, delay: 1.5, categoryCluster: "ai" },
  "code-vita-nodejs": { x: 72, y: 24, zDepth: -15, delay: 0.5, categoryCluster: "dev" },

  // Cluster 3: Competitive Engineering, Hackathons & Awards (Bottom Left & Center)
  "patch-frenzy-3rd": { x: 20, y: 62, zDepth: 15, delay: 1.8, categoryCluster: "awards" },
  "project-presentation-2nd": { x: 38, y: 56, zDepth: 25, delay: 0.4, categoryCluster: "awards" },
  "hydra-hacks-2025": { x: 28, y: 80, zDepth: 5, delay: 1.2, categoryCluster: "hackathons" },
  "hacktech-fusion-2025": { x: 12, y: 84, zDepth: -20, delay: 2.1, categoryCluster: "hackathons" },

  // Cluster 4: Community, Outreach & Conferences (Right & Bottom Right)
  "open-ai-day": { x: 84, y: 44, zDepth: 20, delay: 0.9, categoryCluster: "community" },
  "multimedia-animation-fdp": { x: 64, y: 66, zDepth: 0, delay: 1.6, categoryCluster: "programmes" },
  "aroha-youth-conference": { x: 82, y: 76, zDepth: -10, delay: 2.4, categoryCluster: "conferences" },
};

// Logical knowledge edges connecting related credentials
const NETWORK_EDGES: [string, string][] = [
  ["nptel-graph-theory", "vtu-reinforcement-learning"],
  ["vtu-reinforcement-learning", "research-methodology-vtu"],
  ["nptel-graph-theory", "research-methodology-vtu"],
  ["nptel-graph-theory", "r-programming-infosys"],
  ["r-programming-infosys", "patch-frenzy-3rd"],
  ["patch-frenzy-3rd", "project-presentation-2nd"],
  ["project-presentation-2nd", "hydra-hacks-2025"],
  ["hydra-hacks-2025", "hacktech-fusion-2025"],
  ["research-methodology-vtu", "code-vita-nodejs"],
  ["code-vita-nodejs", "open-ai-day"],
  ["open-ai-day", "multimedia-animation-fdp"],
  ["open-ai-day", "aroha-youth-conference"],
  ["multimedia-animation-fdp", "aroha-youth-conference"],
  ["project-presentation-2nd", "multimedia-animation-fdp"],
];

// Helper: Badge Icon
const getBadgeIcon = (type: BadgeType, size = 16) => {
  switch (type) {
    case "AWARD":
      return <Trophy size={size} className="text-amber-400" />;
    case "COURSE":
    case "CERTIFICATION":
      return <ShieldCheck size={size} className="text-blue-400" />;
    case "HACKATHON":
      return <Code2 size={size} className="text-cyan-400" />;
    case "ORGANIZER":
      return <Users size={size} className="text-emerald-400" />;
    case "WORKSHOP":
      return <Wrench size={size} className="text-violet-400" />;
    case "CONFERENCE":
      return <Globe size={size} className="text-indigo-400" />;
    case "TECHNICAL PROGRAMME":
      return <GraduationCap size={size} className="text-amber-300" />;
    default:
      return <FileText size={size} className="text-zinc-400" />;
  }
};

// Helper: Color palette per category
const getCategoryColor = (type: BadgeType) => {
  switch (type) {
    case "AWARD":
      return {
        accent: "amber",
        bg: "bg-amber-500",
        text: "text-amber-300",
        border: "border-amber-500/50",
        glow: "rgba(245, 158, 11, 0.4)",
        ring: "ring-amber-500/30",
        badge: "bg-amber-950/70 border-amber-800/80 text-amber-300",
      };
    case "COURSE":
    case "CERTIFICATION":
      return {
        accent: "blue",
        bg: "bg-blue-500",
        text: "text-blue-300",
        border: "border-blue-500/50",
        glow: "rgba(59, 130, 246, 0.45)",
        ring: "ring-blue-500/30",
        badge: "bg-blue-950/70 border-blue-800/80 text-blue-300",
      };
    case "HACKATHON":
      return {
        accent: "cyan",
        bg: "bg-cyan-500",
        text: "text-cyan-300",
        border: "border-cyan-500/50",
        glow: "rgba(6, 182, 212, 0.45)",
        ring: "ring-cyan-500/30",
        badge: "bg-cyan-950/70 border-cyan-800/80 text-cyan-300",
      };
    case "ORGANIZER":
      return {
        accent: "emerald",
        bg: "bg-emerald-500",
        text: "text-emerald-300",
        border: "border-emerald-500/50",
        glow: "rgba(16, 185, 129, 0.45)",
        ring: "ring-emerald-500/30",
        badge: "bg-emerald-950/70 border-emerald-800/80 text-emerald-300",
      };
    case "WORKSHOP":
      return {
        accent: "violet",
        bg: "bg-violet-500",
        text: "text-violet-300",
        border: "border-violet-500/50",
        glow: "rgba(139, 92, 246, 0.45)",
        ring: "ring-violet-500/30",
        badge: "bg-violet-950/70 border-violet-800/80 text-violet-300",
      };
    case "CONFERENCE":
      return {
        accent: "indigo",
        bg: "bg-indigo-500",
        text: "text-indigo-300",
        border: "border-indigo-500/50",
        glow: "rgba(99, 102, 241, 0.45)",
        ring: "ring-indigo-500/30",
        badge: "bg-indigo-950/70 border-indigo-800/80 text-indigo-300",
      };
    case "TECHNICAL PROGRAMME":
      return {
        accent: "amber",
        bg: "bg-amber-400",
        text: "text-amber-200",
        border: "border-amber-500/40",
        glow: "rgba(251, 191, 36, 0.35)",
        ring: "ring-amber-400/30",
        badge: "bg-amber-950/60 border-amber-900/60 text-amber-200",
      };
    default:
      return {
        accent: "zinc",
        bg: "bg-zinc-400",
        text: "text-zinc-300",
        border: "border-zinc-700",
        glow: "rgba(161, 161, 170, 0.3)",
        ring: "ring-zinc-700/30",
        badge: "bg-zinc-900 border-zinc-800 text-zinc-300",
      };
  }
};

export const CertificateVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>("ALL");
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [focusedCertificate, setFocusedCertificate] = useState<Certificate | null>(null);
  const [activeViewerCert, setActiveViewerCert] = useState<Certificate | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const constellationRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

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

  const years = ["ALL", "2023", "2024", "2025", "2026"];

  // Filter matching check
  const isNodeMatching = useCallback(
    (cert: Certificate) => {
      const matchCat = selectedCategory === "ALL" || cert.category === selectedCategory;
      const matchYear = selectedYear === "ALL" || String(cert.year) === selectedYear;
      return matchCat && matchYear;
    },
    [selectedCategory, selectedYear]
  );

  // Active matching count
  const matchingCount = useMemo(() => {
    return CERTIFICATES_DATA.filter(isNodeMatching).length;
  }, [isNodeMatching]);

  // Subtle Mouse Parallax Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !constellationRef.current) return;
    const rect = constellationRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredNodeId(null);
  };

  // Keyboard navigation & Esc key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (focusedCertificate && !activeViewerCert) {
          setFocusedCertificate(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedCertificate, activeViewerCert]);

  // Active hovered or focused cert
  const activeDetailCert = focusedCertificate || (hoveredNodeId ? CERTIFICATES_DATA.find((c) => c.id === hoveredNodeId) : null);

  return (
    <div id="credentials" className="mt-28 relative scroll-mt-24">
      {/* Anchor alias for backwards compatibility */}
      <span id="vault" className="sr-only" />

      {/* ── SECTION HEADER ── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 font-mono text-xs text-blue-400 uppercase tracking-widest mb-4">
          <Award size={16} />
          <span>03 — VERIFIED CREDENTIALS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
              ENGINEERING CREDENTIALS
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Certifications, achievements, and technical milestones collected throughout my engineering journey.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 font-mono text-xs text-blue-400 bg-blue-950/40 border border-blue-900/60 px-3 py-1.5 rounded-lg">
            <CheckCircle2 size={14} />
            <span>{matchingCount} VERIFIED CREDENTIALS</span>
          </div>
        </div>
      </div>

      {/* ── TECHNICAL ARCHIVE HUD STATUS BAR ── */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#08080f]/80 border border-zinc-800/80 backdrop-blur-md font-mono text-xs">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-zinc-400">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-emerald-400" />
              <span className="text-zinc-200 font-bold">CREDENTIAL_NETWORK</span>
              <span className="text-zinc-600">{"// 2022—2026"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">STATUS:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 size={12} />
                VERIFIED
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">NODES:</span>
              <span className="text-blue-400 font-bold">{matchingCount}</span>
            </div>
            <div className="flex items-center gap-2 hidden sm:flex">
              <span className="text-zinc-500">ARCHIVE:</span>
              <span className="text-zinc-300 font-bold">ACTIVE</span>
            </div>
          </div>

          <div className="text-[11px] text-zinc-500 flex items-center gap-2">
            <Sparkles size={12} className="text-blue-400" />
            <span>SELECT ANY NODE TO INSPECT</span>
          </div>
        </div>
      </div>

      {/* ── MINIMAL FILTER TABS (Categories & Years) ── */}
      <div className="mb-8 space-y-3">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer relative text-[11px] sm:text-xs font-semibold ${
                  isSelected
                    ? "text-blue-400 bg-blue-950/60 border border-blue-500/50 shadow-sm shadow-blue-500/20"
                    : "text-zinc-400 hover:text-zinc-200 bg-zinc-950/40 border border-zinc-800/60 hover:border-zinc-700"
                }`}
              >
                {cat}
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Year Filter Pills */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
          <span className="text-zinc-600 font-bold uppercase tracking-wider text-[10px]">TIMELINE:</span>
          {years.map((yr) => {
            const isSelected = selectedYear === yr;
            return (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2.5 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "text-zinc-100 bg-zinc-800 font-bold border border-zinc-700"
                    : "text-zinc-500 hover:text-zinc-300 bg-transparent hover:bg-zinc-900"
                }`}
              >
                {yr}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── MAIN INTERACTIVE CONSTELLATION FIELD ── */}
      <div className="relative w-full">
        <div
          ref={constellationRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] rounded-3xl bg-[#040407]/90 border border-zinc-800/80 overflow-hidden select-none shadow-2xl backdrop-blur-xl"
          style={{ perspective: "1200px" }}
          onClick={() => {
            // Unfocus when clicking empty constellation canvas
            if (focusedCertificate) setFocusedCertificate(null);
          }}
        >
          {/* Constellation Canvas Grid Atmosphere */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Deep Ambient Glow Accents */}
          <div
            className="absolute pointer-events-none rounded-full blur-3xl opacity-20 transition-transform duration-700"
            style={{
              width: 500,
              height: 500,
              top: "20%",
              left: "25%",
              background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            }}
          />
          <div
            className="absolute pointer-events-none rounded-full blur-3xl opacity-15 transition-transform duration-700"
            style={{
              width: 400,
              height: 400,
              bottom: "10%",
              right: "20%",
              background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
              transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
            }}
          />

          {/* ── SVG Connection Network Lines ── */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="edgeGradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
                <stop offset="100%" stopColor="rgba(139,92,246,0.25)" />
              </linearGradient>
              <linearGradient id="edgeGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(96,165,250,0.85)" />
                <stop offset="100%" stopColor="rgba(167,139,250,0.85)" />
              </linearGradient>
            </defs>

            {NETWORK_EDGES.map(([fromId, toId]) => {
              const posFrom = NODE_POSITIONS[fromId];
              const posTo = NODE_POSITIONS[toId];
              if (!posFrom || !posTo) return null;

              const certFrom = CERTIFICATES_DATA.find((c) => c.id === fromId);
              const certTo = CERTIFICATES_DATA.find((c) => c.id === toId);
              if (!certFrom || !certTo) return null;

              const matchFrom = isNodeMatching(certFrom);
              const matchTo = isNodeMatching(certTo);
              const bothMatch = matchFrom && matchTo;

              const isHighlighted =
                hoveredNodeId === fromId ||
                hoveredNodeId === toId ||
                focusedCertificate?.id === fromId ||
                focusedCertificate?.id === toId;

              const opacity = !bothMatch
                ? 0.04
                : isHighlighted
                ? 0.8
                : 0.22;

              const strokeWidth = isHighlighted ? 1.8 : 1;

              return (
                <line
                  key={`${fromId}-${toId}`}
                  x1={`${posFrom.x}%`}
                  y1={`${posFrom.y}%`}
                  x2={`${posTo.x}%`}
                  y2={`${posTo.y}%`}
                  stroke={isHighlighted ? "url(#edgeGradActive)" : "url(#edgeGradDefault)"}
                  strokeWidth={strokeWidth}
                  strokeDasharray={isHighlighted ? "none" : "3,3"}
                  opacity={opacity}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          {/* ── Credential Constellation Nodes ── */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {CERTIFICATES_DATA.map((cert) => {
              const pos = NODE_POSITIONS[cert.id] || { x: 50, y: 50, zDepth: 0, delay: 0 };
              const isMatch = isNodeMatching(cert);
              const isHovered = hoveredNodeId === cert.id;
              const isFocused = focusedCertificate?.id === cert.id;
              const colors = getCategoryColor(cert.badgeType);

              const parallaxX = shouldReduceMotion ? 0 : mousePos.x * (isFocused ? 14 : isHovered ? 10 : 6);
              const parallaxY = shouldReduceMotion ? 0 : mousePos.y * (isFocused ? 14 : isHovered ? 10 : 6);

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: !isMatch ? 0.15 : isFocused ? 1 : focusedCertificate ? 0.35 : 1,
                    scale: !isMatch ? 0.75 : isFocused ? 1.15 : isHovered ? 1.1 : 1,
                    x: parallaxX,
                    y: parallaxY,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: "translate(-50%, -50%)",
                    transformStyle: "preserve-3d",
                  }}
                  className="pointer-events-auto"
                >
                  {/* Subtle Idle Undulating Float */}
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [-5, 5, -5],
                            x: [-3, 3, -3],
                          }
                    }
                    transition={{
                      duration: 4.5 + (pos.delay % 2),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: pos.delay,
                    }}
                    className="relative group"
                  >
                    {/* Node Interactive Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFocusedCertificate(isFocused ? null : cert);
                      }}
                      onMouseEnter={() => setHoveredNodeId(cert.id)}
                      onFocus={() => setHoveredNodeId(cert.id)}
                      onBlur={() => setHoveredNodeId(null)}
                      aria-label={`View credential: ${cert.title}`}
                      className={`relative flex items-center justify-center rounded-full p-2.5 transition-all duration-300 cursor-pointer focus:outline-none ${
                        isFocused
                          ? `bg-zinc-950 border-2 ${colors.border} shadow-lg shadow-blue-500/40 ring-4 ${colors.ring} scale-110`
                          : isHovered
                          ? `bg-zinc-900 border ${colors.border} shadow-md shadow-blue-500/25 ring-2 ${colors.ring}`
                          : "bg-zinc-950/90 border border-zinc-800 hover:border-zinc-600"
                      }`}
                    >
                      {/* Pulse Glow Ring on Active / Focused */}
                      {(isFocused || isHovered) && (
                        <span
                          className="absolute inset-0 rounded-full animate-ping pointer-events-none opacity-40"
                          style={{ backgroundColor: colors.glow }}
                        />
                      )}

                      {/* Node Center Dot & Icon */}
                      <div className="relative z-10 flex items-center justify-center">
                        {getBadgeIcon(cert.badgeType, 16)}
                      </div>
                    </button>

                    {/* Node Compact Metadata HUD Label */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center pointer-events-none transition-all duration-300 whitespace-nowrap ${
                        isFocused
                          ? "opacity-100 scale-100 z-30"
                          : isHovered
                          ? "opacity-100 scale-100 z-20"
                          : "opacity-75 scale-95 z-10"
                      }`}
                    >
                      <span className="font-mono text-[11px] font-extrabold text-white tracking-tight drop-shadow-md bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800/80 backdrop-blur-sm">
                        {cert.title}
                      </span>
                      <span className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase mt-0.5">
                        {cert.organization.split(",")[0].split("(")[0].trim()} · {cert.year}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* ── FLOATING HUD DATA READOUT PANEL (Active / Focused Node) ── */}
          <AnimatePresence>
            {activeDetailCert && (
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 max-w-sm sm:max-w-md w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] bg-[#07070e]/95 border border-blue-500/40 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl overflow-hidden font-sans"
              >
                {/* Header: Badge & Close Button */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                      {"// VERIFIED CREDENTIAL RECORD"}
                    </span>
                  </div>

                  {focusedCertificate && (
                    <button
                      onClick={() => setFocusedCertificate(null)}
                      className="text-zinc-400 hover:text-white p-1 rounded-md bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
                      aria-label="Close detail panel"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Content: Title & Organization & Floating Preview Thumbnail */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded border uppercase font-bold ${
                            getCategoryColor(activeDetailCert.badgeType).badge
                          }`}
                        >
                          {activeDetailCert.badgeType}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                          {activeDetailCert.badgeCode}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                        {activeDetailCert.title}
                      </h4>

                      {activeDetailCert.subtitle && (
                        <p className="font-mono text-xs text-blue-300 font-semibold">
                          {activeDetailCert.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Subtle Floating Document Layer Preview Thumbnail */}
                    <div
                      onClick={() => setActiveViewerCert(activeDetailCert)}
                      className="shrink-0 w-16 h-20 rounded-lg bg-zinc-950 border border-blue-500/40 p-1 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-all shadow-md group relative overflow-hidden"
                      title="Click to view full certificate document"
                    >
                      <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors" />
                      {activeDetailCert.assetType === "image" ? (
                        <Image
                          src={activeDetailCert.asset}
                          alt="Thumbnail preview"
                          fill
                          className="object-cover rounded opacity-85 group-hover:opacity-100 transition-opacity"
                          sizes="64px"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-1 text-blue-400">
                          <FileText size={18} />
                          <span className="text-[8px] font-mono font-bold uppercase">PDF</span>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity">
                        <Eye size={14} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-zinc-400 pt-0.5">
                    <div className="flex items-center gap-1.5">
                      <Building size={12} className="text-blue-400 shrink-0" />
                      <span className="truncate">{activeDetailCert.organization}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-blue-400 shrink-0" />
                      <span>{activeDetailCert.date}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                    {activeDetailCert.description}
                  </p>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeDetailCert.placement && (
                      <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/80 font-mono text-[10px]">
                        [{activeDetailCert.placement}]
                      </span>
                    )}
                    {activeDetailCert.level && (
                      <span className="px-2 py-0.5 rounded bg-yellow-950/80 text-yellow-300 border border-yellow-800/80 font-mono text-[10px]">
                        [{activeDetailCert.level}]
                      </span>
                    )}
                    {activeDetailCert.credits && (
                      <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/80 font-mono text-[10px]">
                        [{activeDetailCert.credits} Credits]
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action: Launch Document Lightbox */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-3">
                  <button
                    onClick={() => setActiveViewerCert(activeDetailCert)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>VIEW VERIFIED DOCUMENT</span>
                    <ExternalLink size={13} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Shared Fullscreen Certificate Viewer Modal ── */}
      <CertificateViewer
        certificate={activeViewerCert}
        onClose={() => setActiveViewerCert(null)}
      />
    </div>
  );
};
