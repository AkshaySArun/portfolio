"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/data/links";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, FileText, Check, Copy, Download, ExternalLink } from "lucide-react";
import { useDocumentViewer } from "@/components/ui/DocumentViewerContext";

export const ContactTerminal: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { openResume } = useDocumentViewer();

  const copyEmail = () => {
    navigator.clipboard.writeText("akshaysarun30@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto relative">
      <SectionHeader
        number="06"
        category="COMMUNICATION PROTOCOL"
        title="ESTABLISH CONNECTION"
        subtitle="Initiate direct contact or explore professional profiles."
        centered
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GlassCard className="p-0 border-blue-500/30 overflow-hidden shadow-2xl">
          {/* Terminal Window Header Bar */}
          <div className="bg-[#0e0e16] px-6 py-3 border-b border-zinc-800 flex items-center justify-between font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-zinc-500">{"// bash — initialize_connection.sh"}</span>
            </div>

            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STATUS: READY</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-8 md:p-10 font-mono text-xs md:text-sm space-y-6">
            <div className="text-zinc-500">
              <p>&gt; sys.connect --target=&quot;AKSHAY_S&quot;</p>
              <p className="text-emerald-400 mt-1">&gt; Connection established. 200 OK.</p>
            </div>

            <div className="space-y-2">
              <p className="text-blue-400 font-bold">&gt; SELECT COMMUNICATION CHANNEL:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Email Channel */}
                <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-400" />
                    <div>
                      <span className="text-[10px] text-zinc-500 block">[EMAIL]</span>
                      <span className="text-white font-semibold text-xs md:text-sm">
                        akshaysarun30@gmail.com
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* LinkedIn Channel */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon size={18} className="text-blue-400" />
                    <div>
                      <span className="text-[10px] text-zinc-500 block">[LINKEDIN]</span>
                      <span className="text-white font-semibold text-xs md:text-sm">
                        in/akshaysarun
                      </span>
                    </div>
                  </div>
                  <span className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>

                {/* GitHub Channel */}
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={18} className="text-blue-400" />
                    <div>
                      <span className="text-[10px] text-zinc-500 block">[GITHUB]</span>
                      <span className="text-white font-semibold text-xs md:text-sm">
                        @AkshaySArun
                      </span>
                    </div>
                  </div>
                  <span className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>

                {/* Resume PDF Channel (View in DocumentViewer + Direct Download) */}
                <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between hover:border-blue-500/50 transition-colors">
                  <button
                    onClick={() => openResume()}
                    className="flex items-center gap-3 text-left flex-1 cursor-pointer group"
                    aria-label="View Akshay S resume"
                  >
                    <FileText size={18} className="text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-500 block">[RESUME]</span>
                      <span className="text-white group-hover:text-cyan-400 transition-colors font-semibold text-xs md:text-sm flex items-center gap-1.5">
                        <span>VIEW RESUME (PDF)</span>
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </div>
                  </button>
                  <a
                    href={SOCIAL_LINKS.resume}
                    download="Akshay_S_Resume.pdf"
                    className="p-2 text-zinc-400 hover:text-cyan-400 transition-colors cursor-pointer rounded-md bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40"
                    title="Direct Download Resume PDF"
                    aria-label="Download Akshay S resume as PDF"
                  >
                    <Download size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Mail Button Action */}
            <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">
                Location: Tumakuru, Karnataka, India
              </span>
              <Button
                as="a"
                href={SOCIAL_LINKS.email}
                variant="primary"
                size="md"
                icon={<Mail size={16} />}
              >
                SEND DIRECT EMAIL
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};
