"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/links";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050508] border-t border-zinc-900 py-16 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Brand */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-mono font-bold text-lg text-white tracking-wider">
            {PROFILE_DATA.name}
          </span>
          <span className="font-mono text-xs text-zinc-500">
            {PROFILE_DATA.role} & // {PROFILE_DATA.subRole}
          </span>
          <span className="font-mono text-xs text-blue-400/80 mt-1">
            {PROFILE_DATA.philosophy.join(" → ")}
          </span>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-6 text-zinc-400">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors p-2 glass-panel rounded-lg"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors p-2 glass-panel rounded-lg"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={SOCIAL_LINKS.email}
            className="hover:text-blue-400 transition-colors p-2 glass-panel rounded-lg"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Right Scroll to top */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-mono text-zinc-600">
          <span>© {new Date().getFullYear()} {PROFILE_DATA.name}</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
