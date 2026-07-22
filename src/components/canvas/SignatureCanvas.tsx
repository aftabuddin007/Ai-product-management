"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

function InteractiveCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotation & Mouse movement responsiveness
    meshRef.current.rotation.x = time * 0.3 + state.pointer.y * 0.5;
    meshRef.current.rotation.y = time * 0.4 + state.pointer.x * 0.5;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere
        ref={meshRef}
        args={[1.6, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        scale={clicked ? 1.25 : 1}
      >
        <MeshDistortMaterial
          color={hovered ? "#818cf8" : "#4f46e5"}
          attach="material"
          distort={hovered ? 0.6 : 0.35}
          speed={hovered ? 4 : 2}
          roughness={0.2}
          metalness={0.8}
          wireframe={clicked}
        />
      </Sphere>
    </Float>
  );
}

export default function SignatureCanvas() {
  return (
    <div className="w-full h-[450px] relative">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} color="#a855f7" intensity={2} />
        <InteractiveCore />
      </Canvas>
    </div>
  );
}