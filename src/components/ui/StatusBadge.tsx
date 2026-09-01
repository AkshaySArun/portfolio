"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";

export const StatusBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono tracking-wider">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>{PROFILE_DATA.status}</span>
    </div>
  );
};
