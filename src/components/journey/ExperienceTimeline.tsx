"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { EXPERIENCE_DATA, ExperienceItem } from "@/data/experience";
import { CertificateViewer } from "./CertificateViewer";
import { Certificate } from "@/data/certificates";
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const openInternshipCertificate = (exp: ExperienceItem) => {
    if (!exp.certificate) return;

    const certObj: Certificate = {
      id: exp.id,
      title: `${exp.role} Certificate`,
      subtitle: `${exp.company} — Official Internship Credential`,
      category: "TECHNICAL PROGRAMMES",
      badgeType: "CERTIFICATION",
      organization: `${exp.company} (Vidya Vikas Institute of Engineering & Technology, Mysore)`,
      date: exp.period,
      year: 2026,
      description: `Official internship completion certificate for Akshay S (MCA Department, VVIET Mysore), confirming successful engineering work in Python and Full Stack Development from ${exp.period}.`,
      role: exp.role,
      asset: exp.certificate.asset,
      assetType: exp.certificate.assetType,
      badgeCode: exp.certificate.badgeCode
    };

    setActiveCertificate(certObj);
  };

  return (
    <div className="mb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3 font-mono text-xs text-blue-400 uppercase tracking-widest">
          <Briefcase size={16} />
          <span>01 — PROFESSIONAL EXPERIENCE & INTERNSHIP</span>
        </div>

        <a
          href="#credentials"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-blue-400 transition-colors bg-zinc-900/80 hover:bg-blue-950/40 border border-zinc-800 hover:border-blue-500/50 px-3 py-1.5 rounded-lg w-fit"
        >
          <span>EXPLORE CREDENTIALS</span>
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 pl-8 space-y-12">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            key={exp.id || idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#050508] shadow-lg shadow-blue-500/50" />

            <GlassCard className="p-6 md:p-8 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
              {/* Header Title & Status Badge */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded uppercase font-bold flex items-center gap-1">
                      <ShieldCheck size={12} />
                      <span>INTERNSHIP COMPLETED</span>
                    </span>
                    <span className="font-mono text-[10px] text-blue-400 bg-blue-950/40 border border-blue-900/40 px-2 py-0.5 rounded">
                      2026
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-blue-400 font-bold">{exp.company}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800">
                    <Calendar size={14} className="text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800">
                      <MapPin size={14} className="text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Engineering Direction Workflow Visualization */}
              {exp.workflow && (
                <div className="mb-6 p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/80">
                  <span className="text-[10px] font-mono text-blue-400 font-bold block mb-2 uppercase tracking-wider">
                    // INTERNSHIP TECHNICAL ARCHITECTURE WORKFLOW
                  </span>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-300">
                    {exp.workflow.map((step, sIdx) => (
                      <React.Fragment key={step}>
                        <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded text-blue-300 font-semibold">
                          {step}
                        </span>
                        {sIdx < exp.workflow!.length - 1 && (
                          <ArrowRight size={12} className="text-zinc-600 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-6 text-sm text-zinc-300 font-sans leading-relaxed">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used & Certificate Action Button */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {exp.certificate && (
                  <button
                    onClick={() => openInternshipCertificate(exp)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-lg shadow-lg shadow-blue-600/25 transition-colors cursor-pointer shrink-0"
                  >
                    <span>VIEW INTERNSHIP CERTIFICATE</span>
                    <ExternalLink size={14} />
                  </button>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Shared Certificate Viewer Modal */}
      <CertificateViewer
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
};
