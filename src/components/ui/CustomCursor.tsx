"use client";

import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("role") === "button";

      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isHovered ? 2.5 : 1
          })`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-blue-500/40 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isHovered ? 1.5 : 1
          })`,
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />
    </>
  );
};
