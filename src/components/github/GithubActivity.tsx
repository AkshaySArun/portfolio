"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { fetchGithubRepos, GithubRepo } from "@/lib/github";
import { SOCIAL_LINKS } from "@/data/links";
import { GithubIcon } from "@/components/ui/Icons";
import { Star, GitFork, ExternalLink } from "lucide-react";

export const GithubActivity: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    async function loadGithubData() {
      try {
        const repoData = await fetchGithubRepos(SOCIAL_LINKS.githubUsername);
        setRepos(repoData);
      } catch (err) {
        console.error("Failed to load GitHub data", err);
      }
    }

    loadGithubData();
  }, []);

  return (
    <section id="github" className="py-24 px-6 max-w-7xl mx-auto relative">
      <SectionHeader
        number="05"
        category="LIVE OPEN SOURCE"
        title="LIVE ENGINEERING ACTIVITY"
        subtitle="Real-time repository statistics and GitHub code activity."
      />

      {/* GitHub Overview Bar */}
      <GlassCard className="mb-10 p-6 md:p-8 border-blue-500/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
              <GithubIcon size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                <span>@{SOCIAL_LINKS.githubUsername}</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-xs text-zinc-400 font-mono">Verified Public GitHub Account</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-center">
            <div>
              <span className="text-2xl font-extrabold text-blue-400 block">
                {repos.length > 0 ? repos.length : 11}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase">Public Repos</span>
            </div>
            <div className="w-px h-8 bg-zinc-800 hidden sm:block" />
            <div>
              <span className="text-2xl font-extrabold text-cyan-400 block">TypeScript</span>
              <span className="text-[10px] text-zinc-500 uppercase">Top Language</span>
            </div>
            <div className="w-px h-8 bg-zinc-800 hidden sm:block" />
            <div>
              <span className="text-2xl font-extrabold text-violet-400 block">Python/Java</span>
              <span className="text-[10px] text-zinc-500 uppercase">Core Stack</span>
            </div>
          </div>

          <Button
            as="a"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={<ExternalLink size={14} />}
          >
            VIEW GITHUB PROFILE
          </Button>
        </div>
      </GlassCard>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.slice(0, 6).map((repo) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-5 border-zinc-800/80">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm font-bold text-white truncate max-w-[200px]">
                    {repo.name}
                  </span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="text-xs text-zinc-400 font-sans line-clamp-2 mb-4">
                  {repo.description || "Public software repository on GitHub."}
                </p>
              </div>

              <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500 pt-3 border-t border-zinc-800/80">
                <span className="text-blue-400">{repo.language || "TypeScript"}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
