"use client";

import React from "react";

export const WebGLFallback: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-zinc-950 to-zinc-950 flex items-center justify-center pointer-events-none">
      <div className="w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};
