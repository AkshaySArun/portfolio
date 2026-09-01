"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoadingComplete(true), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 10;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-[#050508] flex flex-col items-center justify-center font-mono p-6"
        >
          <div className="w-full max-w-sm flex flex-col gap-6">
            {/* Header Title */}
            <div className="flex flex-col gap-1 text-center">
              <span className="text-lg font-bold tracking-widest text-white">
                AKSHAY S
              </span>
              <span className="text-xs text-blue-400">
                AI ENGINEERING LAB // INITIALIZING...
              </span>
            </div>

            {/* Step Indicators */}
            <div className="flex flex-col gap-2 text-xs text-zinc-500">
              <div className="flex justify-between">
                <span>[3D CORE]</span>
                <span className={progress >= 25 ? "text-emerald-400" : ""}>
                  {progress >= 25 ? "READY" : "LOADING..."}
                </span>
              </div>
              <div className="flex justify-between">
                <span>[NEURAL ASSETS]</span>
                <span className={progress >= 60 ? "text-emerald-400" : ""}>
                  {progress >= 60 ? "READY" : "PENDING"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>[PROJECT UNIVERSE]</span>
                <span className={progress >= 90 ? "text-emerald-400" : ""}>
                  {progress >= 90 ? "LOADED" : "PENDING"}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress Percentage */}
            <div className="text-right text-xs font-mono text-zinc-400">
              {Math.min(progress, 100)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
