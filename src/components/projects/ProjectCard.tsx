"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";
import { GithubIcon } from "@/components/ui/Icons";
import { Layers, ArrowUpRight, Cpu, Globe, Server } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  const getVisualIcon = () => {
    switch (project.visualType) {
      case "city":
        return <Globe className="text-blue-400" size={24} />;
      case "blockchain":
        return <Server className="text-cyan-400" size={24} />;
      case "mirror":
        return <Cpu className="text-violet-400" size={24} />;
      default:
        return <Layers className="text-zinc-400" size={24} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col justify-between p-7 border-zinc-800/80 group">
        <div>
          {/* Card Top Metadata & Icon */}
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800">
              {getVisualIcon()}
            </div>
            <span className="font-mono text-xs text-blue-400/90 px-2.5 py-1 rounded bg-blue-950/40 border border-blue-900/40 uppercase">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
            <span>{project.title}</span>
            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-xs font-mono text-zinc-400 mb-4">{project.subtitle}</p>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="space-y-1.5 font-mono text-xs text-zinc-400 mb-6">
            {project.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-zinc-900/90 text-zinc-400 rounded border border-zinc-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 bg-zinc-900/90 text-zinc-500 rounded">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Bottom Card CTA Trigger */}
          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="text-xs font-mono text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>EXPLORE CASE STUDY</span>
              <span>→</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Source code"
              >
                <GithubIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
