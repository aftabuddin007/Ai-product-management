"use client";

import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";


const HeroCanvas = dynamic(() => import("../canvas/HeroCanvas"), { ssr: false });

export default function HeroSection() {

//     useFrame((state) => {
//     if (!meshRef.current) return;
    
  
//     const time = state.clock.getElapsedTime();
//     meshRef.current.rotation.x = time * 0.05 + state.pointer.y * 0.2;
//     meshRef.current.rotation.y = time * 0.08 + state.pointer.x * 0.2;
//   });
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 text-white px-4">
      {/* Background 3D Canvas */}
      <HeroCanvas />

      <div className="z-10 max-w-4xl text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-400 border border-indigo-500/20"
        >
          Xai – Intelligence Workspace
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold tracking-tight text-balance bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          From raw data to actionable insight.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-slate-400 text-base md:text-lg"
        >
          Transform unstructured chaos into real-time decision intelligence through dynamic AI automation pipelines.
        </motion.p>
      </div>
    </section>
  );
}