"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
}

// Deterministic pseudo-random generator (pure function, no Math.random side effects)
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const ParticleField: React.FC<ParticleFieldProps> = ({ count = 200 }) => {
  const mesh = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color("#3b82f6");
    const color2 = new THREE.Color("#8b5cf6");

    for (let i = 0; i < count; i++) {
      // Use deterministic pseudo-random values derived from particle index
      pos[i * 3] = (pseudoRandom(i * 4 + 1) - 0.5) * 20;
      pos[i * 3 + 1] = (pseudoRandom(i * 4 + 2) - 0.5) * 20;
      pos[i * 3 + 2] = (pseudoRandom(i * 4 + 3) - 0.5) * 20;

      const mixedColor = pseudoRandom(i * 4 + 4) > 0.5 ? color1 : color2;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.03;
      mesh.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
