"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Sparkles } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Ingest Data",
    description:
      "Connect raw data streams, unstructured logs, and real-time events through high-throughput pipelines.",
    icon: Database,
    badge: "Input Stream",
    accent: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    number: "02",
    title: "Analyze with AI",
    description:
      "Process high-dimensional embeddings using custom neural transformers to discover non-linear patterns.",
    icon: Cpu,
    badge: "Neural Processing",
    accent: "from-indigo-500/20 to-purple-500/20",
    border: "group-hover:border-indigo-500/50",
  },
  {
    number: "03",
    title: "Generate Insight",
    description:
      "Synthesize structured decision intelligence and trigger autonomous workflows across your stack.",
    icon: Sparkles,
    badge: "Actionable Output",
    accent: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-pink-500/50",
  },
];

export default function InsightFlow() {
  return (
    <section className="relative min-h-screen py-28 px-4 bg-slate-950 text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl text-center space-y-4 mb-20 z-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400">
          Architecture / Pipeline
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          The Intelligence Pipeline
        </h3>
        <p className="text-slate-400 text-sm md:text-base">
          A continuous loop that turns static database entries into deterministic automated actions.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
        {stages.map((stage, idx) => {
          const IconComponent = stage.icon;
          return (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 ${stage.border}`}
            >
              {/* Card Gradient Overlay */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stage.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 space-y-6 p-10">
                {/* Header inside Card */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-indigo-400 transition-colors">
                    {stage.number}
                  </span>
                </div>

                {/* Badge */}
                <div>
                  <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/50 rounded-md border border-slate-700/50">
                    {stage.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-slate-100">
                    {stage.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}