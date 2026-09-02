"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "./Navbar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { SOCIAL_LINKS } from "@/data/links";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, FileText } from "lucide-react";
import { useDocumentViewer } from "@/components/ui/DocumentViewerContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const { openResume } = useDocumentViewer();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-xl pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden"
        >
          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 font-mono text-lg">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex items-center gap-4 transition-colors ${
                    isActive ? "text-blue-400 font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs text-zinc-600 font-normal">
                    0{idx + 1}
                  </span>
                  <span>{item.name}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Bottom Info & Social Links */}
          <div className="border-t border-zinc-800/80 pt-6 flex flex-col gap-6">
            <StatusBadge />

            <div className="flex items-center justify-between text-zinc-400">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors p-2"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors p-2"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="hover:text-blue-400 transition-colors p-2"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <button
                onClick={() => {
                  onClose();
                  openResume();
                }}
                className="hover:text-blue-400 transition-colors p-2 cursor-pointer"
                aria-label="View Akshay S resume"
              >
                <FileText size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
