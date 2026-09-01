"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Certificate } from "@/data/certificates";
import { X, ExternalLink, Download, FileText, Calendar, Building, Award, CheckCircle2, ShieldCheck } from "lucide-react";

interface CertificateViewerProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateViewer: React.FC<CertificateViewerProps> = ({
  certificate,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Certificate viewer for ${certificate.title}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[92vh] bg-[#08080d] border border-blue-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header Bar */}
          <div className="bg-[#0c0c14] px-6 py-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3 font-mono text-xs text-blue-400">
              <Award size={16} />
              <span className="font-bold uppercase tracking-wider">// VERIFIED CREDENTIAL DOCUMENT</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-zinc-400 uppercase hidden sm:inline">{certificate.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center gap-1.5 font-mono text-xs cursor-pointer"
              aria-label="Close certificate viewer"
            >
              <X size={16} />
              <span className="hidden sm:inline">CLOSE [ESC]</span>
            </button>
          </div>

          {/* Certificate Media Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-[#040407] min-h-[380px]">
            {certificate.assetType === "pdf" ? (
              <div className="w-full h-[65vh] flex flex-col items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden relative">
                <iframe
                  src={`${certificate.asset}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-0"
                  title={certificate.title}
                />
                <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                  <a
                    href={certificate.asset}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-lg shadow-lg flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>OPEN ORIGINAL PDF ↗</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative max-w-full max-h-[68vh] flex items-center justify-center rounded-xl overflow-hidden bg-black border border-zinc-800/80 p-2">
                <img
                  src={certificate.asset}
                  alt={`Certificate for ${certificate.title} — ${certificate.organization}`}
                  className="max-h-[64vh] max-w-full object-contain rounded shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Footer Metadata & Actions */}
          <div className="bg-[#0c0c14] p-5 border-t border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 font-mono text-xs">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-white font-bold text-sm sm:text-base">
                  {certificate.title}
                </h3>
                {certificate.role && (
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                    [{certificate.role}]
                  </span>
                )}
                {certificate.placement && (
                  <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[10px]">
                    [{certificate.placement}]
                  </span>
                )}
                {certificate.level && (
                  <span className="px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-800 text-[10px]">
                    [{certificate.level}]
                  </span>
                )}
                {certificate.credits && (
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[10px]">
                    [{certificate.credits} Credits]
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-zinc-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <Building size={13} className="text-blue-400" />
                  <span>{certificate.organization}</span>
                </span>
                <span className="text-zinc-700">•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-blue-400" />
                  <span>{certificate.date}</span>
                </span>
              </div>
            </div>

            {/* Right side verification & download buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/60 rounded-lg transition-colors font-bold text-xs"
                >
                  <ShieldCheck size={14} />
                  <span>VERIFICATION AVAILABLE</span>
                  <ExternalLink size={12} />
                </a>
              )}

              <a
                href={certificate.asset}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-blue-400 hover:text-blue-300 border border-zinc-800 rounded-lg transition-colors font-bold text-xs"
              >
                <span>OPEN ORIGINAL FILE</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
