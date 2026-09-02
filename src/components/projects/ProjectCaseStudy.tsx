"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import { X, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectCaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0f] border border-zinc-800 rounded-2xl overflow-y-auto p-6 md:p-10 shadow-2xl custom-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header metadata */}
          <div className="flex items-center gap-3 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span>{"// CASE STUDY"}</span>
            <span className="text-zinc-600">•</span>
            <span>{project.category}</span>
            <span className="text-zinc-600">•</span>
            <span>{project.year}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-zinc-400 text-lg mb-6">{project.subtitle}</p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.githubUrl && (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={<GithubIcon size={14} />}
              >
                VIEW SOURCE (GITHUB)
              </Button>
            )}

            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={<ExternalLink size={14} />}
              >
                LIVE DEMO
              </Button>
            )}
          </div>

          {/* Architecture Visual Flow if present */}
          {project.architectureFlow && (
            <div className="mb-10 p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
              <span className="text-xs font-mono text-blue-400 font-bold block mb-4">
                {"// SYSTEM ARCHITECTURE VISUAL FLOW"}
              </span>
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                {project.architectureFlow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
                      {step.from}
                    </div>
                    <ArrowRight size={14} className="text-blue-500 shrink-0 hidden sm:block" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Case Study Details Grid */}
          {project.caseStudy && (
            <div className="space-y-8 text-zinc-300 font-sans leading-relaxed">
              {/* Problem & Concept */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                  <h3 className="text-sm font-mono text-blue-400 font-bold uppercase mb-2">
                    01 — THE PROBLEM
                  </h3>
                  <p className="text-sm text-zinc-300">{project.caseStudy.problem}</p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                  <h3 className="text-sm font-mono text-cyan-400 font-bold uppercase mb-2">
                    02 — CONCEPT & VISION
                  </h3>
                  <p className="text-sm text-zinc-300">{project.caseStudy.concept}</p>
                </div>
              </div>

              {/* Architecture & Engineering Decisions */}
              <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                <h3 className="text-sm font-mono text-violet-400 font-bold uppercase mb-3">
                  03 — ARCHITECTURE & TECHNICAL DECISIONS
                </h3>
                <p className="text-sm text-zinc-300 mb-4">{project.caseStudy.architecture}</p>
                {project.caseStudy.engineeringDecisions && (
                  <ul className="space-y-2 font-mono text-xs text-zinc-400">
                    {project.caseStudy.engineeringDecisions.map((dec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                        <span>{dec}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Recommendation logic note if localpulse */}
              {project.caseStudy.recommendationSystem && (
                <div className="p-6 rounded-xl bg-blue-950/20 border border-blue-900/50">
                  <h3 className="text-sm font-mono text-blue-400 font-bold uppercase mb-2">
                    04 — RECOMMENDATION LOGIC & AFFINITY SCORING
                  </h3>
                  <p className="text-sm text-zinc-300">
                    {project.caseStudy.recommendationSystem}
                  </p>
                </div>
              )}

              {/* UX & Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                  <h3 className="text-sm font-mono text-emerald-400 font-bold uppercase mb-2">
                    05 — USER EXPERIENCE
                  </h3>
                  <p className="text-sm text-zinc-300">{project.caseStudy.userExperience}</p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                  <h3 className="text-sm font-mono text-yellow-400 font-bold uppercase mb-2">
                    06 — RESULTS & CURRENT STATE
                  </h3>
                  <p className="text-sm text-zinc-300">{project.caseStudy.results}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tech Tag Cloud */}
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <span className="text-xs font-mono text-zinc-500 uppercase block mb-3">
              TECHNOLOGY STACK USED
            </span>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-900 text-blue-300 border border-zinc-800 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
