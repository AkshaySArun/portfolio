"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { MobileNav } from "./MobileNav";
import { Menu, X } from "lucide-react";

export const NAV_ITEMS = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "ENGINEERING", href: "#engineering" },
  { name: "AI LAB", href: "#ailab" },
  { name: "JOURNEY", href: "#journey" },
  { name: "CERTIFICATIONS", href: "#vault" },
  { name: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
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
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050508]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-xl shadow-black/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-3 font-mono text-sm font-bold tracking-wider text-white"
          >
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm group-hover:scale-125 transition-transform duration-300" />
            <span className="tracking-widest">AKSHAY S</span>
            <span className="text-zinc-600 text-xs hidden sm:inline">// LAB</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-xs font-medium tracking-wider">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 relative py-1 ${
                    isActive ? "text-blue-400 font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Status Badge & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <StatusBadge />
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
