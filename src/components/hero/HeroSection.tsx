"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scene } from "@/components/three/Scene";
import { NeuralNetwork } from "@/components/three/NeuralNetwork";
import { ParticleField } from "@/components/three/ParticleField";
import { Button } from "@/components/ui/Button";
import { PROFILE_DATA } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/links";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ArrowRight, Mail, FileText } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-grid-pattern"
    >
      {/* 3D AI Core Canvas Background/Center */}
      <Scene cameraPos={[0, 0, 7.5]}>
        <NeuralNetwork />
        <ParticleField count={180} />
      </Scene>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Technical Header Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>AKSHAY S // AI ENGINEERING LAB</span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-none drop-shadow-2xl"
        >
          AKSHAY S
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 font-mono text-sm sm:text-base font-semibold tracking-wider"
        >
          <span className="px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-md text-blue-400">
            {PROFILE_DATA.role}
          </span>
          <span className="text-zinc-600">&</span>
          <span className="px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-md text-cyan-400">
            {PROFILE_DATA.subRole}
          </span>
        </motion.div>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-300 text-base sm:text-xl max-w-2xl leading-relaxed font-sans"
        >
          “{PROFILE_DATA.supportingStatement}”
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <Button
            as="a"
            href="#projects"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={16} />}
          >
            EXPLORE MY WORK
          </Button>

          <Button
            as="a"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            icon={<GithubIcon size={16} />}
          >
            VIEW GITHUB
          </Button>
        </motion.div>

        {/* Social / Quick Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-6 mt-6 text-zinc-400 font-mono text-xs"
        >
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon size={14} />
            <span>LINKEDIN</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={SOCIAL_LINKS.email}
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Mail size={14} />
            <span>EMAIL</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={SOCIAL_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <FileText size={14} />
            <span>RESUME</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 font-mono text-[10px] tracking-widest uppercase flex flex-col items-center gap-2 pointer-events-none"
      >
        <span>SCROLL TO ENTER</span>
        <div className="w-1 h-4 border border-zinc-700 rounded-full flex items-start justify-center p-0.5">
          <div className="w-0.5 h-1 bg-blue-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
