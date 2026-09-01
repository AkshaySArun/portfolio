"use client";

import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const NeuralNetwork: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Generate neural network nodes and connections
  const { nodePositions, lineGeometry } = useMemo(() => {
    const numNodes = 45;
    const positions: THREE.Vector3[] = [];
    const radius = 3.2;

    for (let i = 0; i < numNodes; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions.push(new THREE.Vector3(x, y, z));
    }

    const linePositions: number[] = [];
    const maxDistance = 2.2;

    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < maxDistance) {
          linePositions.push(
            positions[i].x, positions[i].y, positions[i].z,
            positions[j].x, positions[j].y, positions[j].z
          );
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      ariaFloatAttribute(new Float32Array(linePositions), 3)
    );

    return { nodePositions: positions, lineGeometry: geometry };
  }, []);

  function ariaFloatAttribute(array: Float32Array, itemSize: number) {
    return new THREE.BufferAttribute(array, itemSize);
  }

  useFrame((state) => {
    if (groupRef.current) {
      // Rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;

      // Subtle mouse reactive tracking
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;

      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Holographic Sphere Ring */}
      <mesh>
        <sphereGeometry args={[3.8, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Core Glowing Sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#1e40af"
          emissive="#3b82f6"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Network Lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Network Nodes */}
      {nodePositions.map((pos, idx) => (
        <mesh
          key={idx}
          position={pos}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHoveredNode(idx);
          }}
          onPointerOut={() => setHoveredNode(null)}
        >
          <sphereGeometry args={[hoveredNode === idx ? 0.18 : 0.09, 16, 16]} />
          <meshStandardMaterial
            color={hoveredNode === idx ? "#60a5fa" : "#8b5cf6"}
            emissive={hoveredNode === idx ? "#93c5fd" : "#3b82f6"}
            emissiveIntensity={hoveredNode === idx ? 2.5 : 1}
          />
        </mesh>
      ))}
    </group>
  );
};
