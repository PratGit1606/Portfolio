"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const POINTS = (() => {
  const pts = [];
  for (let i = 0; i < 800; i++) {
    pts.push(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6
    );
  }
  return new Float32Array(pts);
})();

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      className="absolute inset-0"
    >
      <Points positions={POINTS}>
        <PointMaterial
          transparent
          size={0.03}
          color="#F5C518"
          opacity={0.25}
          depthWrite={false}
        />
      </Points>
    </Canvas>
  );
}
