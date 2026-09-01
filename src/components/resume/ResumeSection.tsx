"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/data/links";
import { CertificateViewer } from "@/components/journey/CertificateViewer";
import { Certificate } from "@/data/certificates";
import {
  FileText,
  Download,
  ExternalLink,
  UserCheck,
  Briefcase,
  Layers,
  Code2,
  Award,
  ArrowRight,
  Eye
} from "lucide-react";

export const ResumeSection: React.FC = () => {
  const [activeResumeViewer, setActiveResumeViewer] = useState<Certificate | null>(null);

  const resumeDocumentObject: Certificate = {
    id: "akshay-s-resume",
    title: "Akshay S — Official Engineering Resume",
    subtitle: "AI/ML Engineer & Full-Stack Developer",
    category: "COURSES",
    badgeType: "COURSE",
    organization: "Akshay S — Official Curriculum Vitae",
    date: "Latest Version — 2026",
    year: 2026,
    description: "Official engineering resume detailing education (MCA + BCA), Python & full-stack development internship at Mindset, core projects (LocalPulse, FOSS Token, Spellbound Speculum), and verified technical stack.",
    asset: SOCIAL_LINKS.resume,
    assetType: "pdf",
    badgeCode: "RESUME-2026"
  };

  return (
    <section id="resume" className="py-24 px-6 max-w-7xl mx-auto relative">
      <SectionHeader
        number="06"
        category="CURRICULUM_VITAE // DOCUMENT"
        title="ENGINEERING RESUME"
        subtitle="A concise overview of my education, engineering experience, projects, skills and achievements."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: 3D Holographic Floating Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <GlassCard className="p-8 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 relative overflow-hidden group">
            {/* Holographic Header Bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-bold">
                <FileText size={16} />
                <span>OFFICIAL_RESUME_PDF // 2026</span>
              </div>
              <span className="font-mono text-[10px] bg-blue-950 text-blue-400 border border-blue-800 px-2 py-0.5 rounded">
                VERIFIED PDF
              </span>
            </div>

            {/* Document Holographic Preview Box */}
            <div
              onClick={() => setActiveResumeViewer(resumeDocumentObject)}
              className="relative w-full h-72 rounded-xl bg-zinc-950 border border-zinc-800/80 p-6 flex flex-col justify-between cursor-pointer group-hover:border-blue-500/50 transition-all duration-300 mb-6 overflow-hidden"
            >
              <div className="space-y-3 font-mono">
                <div className="w-12 h-1.5 bg-blue-500 rounded-full" />
                <h4 className="text-white font-extrabold text-xl tracking-wide">AKSHAY S</h4>
                <p className="text-xs text-blue-400 font-semibold">
                  AI/ML Engineer & Full-Stack Developer
                </p>
                <div className="space-y-1 text-[11px] text-zinc-500 pt-2 border-t border-zinc-900">
                  <p>• MCA Graduate (VTU) — 8.24 CGPA</p>
                  <p>• Mindset Intern — Python & Full-Stack</p>
                  <p>• Key Stack: Python, Java, Next.js, MySQL</p>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-xs pt-4 border-t border-zinc-900">
                <span className="text-zinc-500 text-[10px]">CLICK TO EXPAND PDF</span>
                <span className="text-blue-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>VIEW PDF</span>
                  <Eye size={14} />
                </span>
              </div>

              {/* Holographic Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* Resume Action Buttons */}
            <div className="space-y-3 font-mono">
              <Button
                onClick={() => setActiveResumeViewer(resumeDocumentObject)}
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<Eye size={16} />}
              >
                VIEW RESUME PDF
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  as="a"
                  href={SOCIAL_LINKS.resume}
                  download="Akshay_S_Resume.pdf"
                  variant="secondary"
                  size="sm"
                  className="justify-center"
                  icon={<Download size={14} />}
                >
                  DOWNLOAD
                </Button>

                <Button
                  as="a"
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="justify-center"
                  icon={<ExternalLink size={14} />}
                >
                  OPEN TAB
                </Button>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Side: Gateway Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-4"
        >
          {/* Summary & Profile Gateway */}
          <GlassCard className="p-5 border-zinc-800/80">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold">
                <UserCheck size={16} />
                <span>PROFILE & PROFESSIONAL SUMMARY</span>
              </div>
              <a
                href="#about"
                className="font-mono text-xs text-zinc-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <span>VIEW ABOUT</span>
                <ArrowRight size={12} />
              </a>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              MCA graduate with hands-on experience in Java, Python, data structures, algorithms, object-oriented programming, and full-stack web applications.
            </p>
          </GlassCard>

          {/* Professional Experience Gateway */}
          <GlassCard className="p-5 border-zinc-800/80">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                <Briefcase size={16} />
                <span>PROFESSIONAL EXPERIENCE</span>
              </div>
              <a
                href="#journey"
                className="font-mono text-xs text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <span>VIEW EXPERIENCE</span>
                <ArrowRight size={12} />
              </a>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              Python & Full Stack Development Intern at <strong className="text-white">Mindset</strong> (Feb–May 2026). Engineered responsive web apps, REST APIs, and MySQL schemas with official completion proof attached.
            </p>
          </GlassCard>

          {/* Projects Gateway */}
          <GlassCard className="p-5 border-zinc-800/80">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold">
                <Layers size={16} />
                <span>KEY FEATURED PROJECTS</span>
              </div>
              <a
                href="#projects"
                className="font-mono text-xs text-zinc-400 hover:text-violet-400 transition-colors flex items-center gap-1"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight size={12} />
              </a>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              Includes <strong className="text-white">LocalPulse</strong> (Smart Local Event Discovery PWA with affinity scoring), <strong className="text-white">FOSS Token</strong> (Solana mainnet SPL cryptocurrency), and <strong className="text-white">Spellbound Speculum</strong> (Smart Mirror).
            </p>
          </GlassCard>

          {/* Technical Stack Gateway */}
          <GlassCard className="p-5 border-zinc-800/80">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                <Code2 size={16} />
                <span>TECHNICAL SKILLS & CORE STACK</span>
              </div>
              <a
                href="#engineering"
                className="font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <span>EXPLORE STACK</span>
                <ArrowRight size={12} />
              </a>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              Languages (Python, Java, C, TS, JS), Computer Science Fundamentals (DSA, OOP, SDLC), Web Frameworks (Next.js, React, Node.js, Flask), and Databases (MySQL).
            </p>
          </GlassCard>

          {/* Certificate Vault Gateway */}
          <GlassCard className="p-5 border-blue-500/20 bg-blue-950/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold">
                <Award size={16} />
                <span>VERIFIED CREDENTIALS & CERTIFICATIONS</span>
              </div>
              <a
                href="#vault"
                className="font-mono text-xs text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-bold"
              >
                <span>OPEN CERTIFICATE VAULT</span>
                <ArrowRight size={12} />
              </a>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              12 verified credential records including NPTEL Advanced Graph Theory, VTU Reinforcement Learning (Elite Gold), Infosys R Programming, Hydra Hacks, and competition awards.
            </p>
          </GlassCard>
        </motion.div>
      </div>

      {/* Shared Document Viewer Modal */}
      <CertificateViewer
        certificate={activeResumeViewer}
        onClose={() => setActiveResumeViewer(null)}
      />
    </section>
  );
};
