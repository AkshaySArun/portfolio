"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useWebGL } from "@/hooks/useWebGL";
import { WebGLFallback } from "@/components/ui/WebGLFallback";

interface SceneProps {
  children: React.ReactNode;
  className?: string;
  cameraPos?: [number, number, number];
}

export const Scene: React.FC<SceneProps> = ({
  children,
  className = "w-full h-full absolute inset-0 pointer-events-none",
  cameraPos = [0, 0, 7.5],
}) => {
  const hasWebGL = useWebGL();

  if (!hasWebGL) {
    return <WebGLFallback />;
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: cameraPos, fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "auto" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
};
