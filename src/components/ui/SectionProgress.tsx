"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/components/layout/Navbar";

export const SectionProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 pointer-events-auto">
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-zinc-800 to-zinc-800" />

      {NAV_ITEMS.map((item) => {
        const sectionId = item.href.substring(1);
        const isActive = activeSection === sectionId;

        return (
          <a
            key={item.name}
            href={item.href}
            aria-label={`Scroll to ${item.name}`}
            className="group relative flex items-center justify-end"
          >
            {/* Tooltip on hover */}
            <span className="absolute right-6 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
              {item.name}
            </span>

            {/* Dot Indicator */}
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50 ring-2 ring-blue-500/30"
                  : "bg-zinc-800 hover:bg-zinc-600 scale-100"
              }`}
            />
          </a>
        );
      })}

      <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-800 via-zinc-800 to-transparent" />
    </div>
  );
};
