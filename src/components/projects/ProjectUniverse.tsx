"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { PROJECTS_DATA, Project } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";
import { GithubIcon } from "@/components/ui/Icons";
import { FolderGit2 } from "lucide-react";

export const ProjectUniverse: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.isFeatured);
  const archiveProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative">
      <SectionHeader
        number="02"
        category="ENGINEERING ARTIFACTS"
        title="PROJECT UNIVERSE"
        subtitle="Interactive 3D project environments and detailed case studies."
      />

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={setSelectedProject}
          />
        ))}
      </div>

      {/* Experiment Archive Section */}
      <div className="mt-20">
        <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-6">
          <FolderGit2 size={16} className="text-blue-400" />
          <span>EXPERIMENT ARCHIVE & ADDITIONAL CODEBASE REPOSITORIES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {archiveProjects.map((proj) => (
            <GlassCard key={proj.id} className="p-5 border-zinc-800/60">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/40">
                  {proj.category}
                </span>
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <GithubIcon size={16} />
                  </a>
                )}
              </div>

              <h4 className="text-lg font-bold text-white mb-1">{proj.title}</h4>
              <p className="text-xs font-mono text-zinc-400 mb-3">{proj.subtitle}</p>
              <p className="text-zinc-300 text-xs leading-relaxed line-clamp-2 mb-4">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                {proj.technologies.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-zinc-900 text-zinc-400 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Case Study Modal Trigger */}
      <ProjectCaseStudy
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
