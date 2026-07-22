"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Activity,
  Workflow,
  Settings,
  Database,
  ArrowUpRight,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "analytics", label: "Analytics" },
  { id: "automations", label: "Automations" },
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="relative min-h-screen py-24 px-4 bg-slate-950 text-white flex flex-col justify-center items-center">
      {/* Header */}
      <div className="max-w-3xl text-center space-y-4 mb-16 z-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400">
          Product Preview
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Intelligence Dashboard
        </h3>
        <p className="text-slate-400 text-sm md:text-base">
          A high-throughput workspace engineered for real-time decision intelligence.
        </p>
      </div>

      {/* Mock Product Dashboard Window */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[580px]"
      >
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800/80 p-5 flex flex-col justify-between bg-slate-950/40">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 px-2">
              <div className="h-6 w-6 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs">
                X
              </div>
              <span className="font-semibold text-sm tracking-wide">
                Xai Workspace
              </span>
            </div>

            <nav className="space-y-1">
              {[
                { label: "Dashboard", icon: LayoutDashboard, active: true },
                { label: "Live Pipelines", icon: Activity, active: false },
                { label: "Workflows", icon: Workflow, active: false },
                { label: "Data Sources", icon: Database, active: false },
                { label: "Settings", icon: Settings, active: false },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      item.active
                        ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                        : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-800/80 px-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Status</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>
          </div>
        </aside>

        {/* Main Workspace Area */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-6">
          {/* Top Bar Navigation Tabs */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex gap-2 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-lg -z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
              v2.4.0-prod
            </span>
          </div>

          {/* Dynamic Content Switching */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { title: "Processed Events", val: "1.24M", change: "+14%", icon: Activity },
                      { title: "Automations Run", val: "84,920", change: "+28%", icon: Zap },
                      { title: "Accuracy Score", val: "99.4%", change: "+0.2%", icon: TrendingUp },
                    ].map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={i}
                          className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/30 space-y-2"
                        >
                          <div className="flex justify-between items-center text-slate-400 text-xs">
                            <span>{stat.title}</span>
                            <Icon className="w-4 h-4 text-indigo-400" />
                          </div>
                          <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-bold">{stat.val}</span>
                            <span className="text-xs font-mono text-emerald-400">
                              {stat.change}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mock Interactive Activity Log Table */}
                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/30 p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-800/60 pb-2">
                      <span className="font-semibold text-slate-200">Real-time Ingestion Stream</span>
                      <span className="font-mono text-[10px]">Updated 2s ago</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      {[
                        { name: "Order Analytics Stream", status: "Processed", time: "Just now" },
                        { name: "User Behaviour Vector Sync", status: "Processing", time: "3s ago" },
                        { name: "Autonomous Fraud Shield Trigger", status: "Completed", time: "12s ago" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/40 hover:border-slate-700/60 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                            <span className="font-medium text-slate-300">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-4 text-slate-500 font-mono text-[11px]">
                            <span className="text-emerald-400/90">{item.status}</span>
                            <span>{item.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab !== "overview" && (
                <motion.div
                  key="other"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center h-64 text-center space-y-3 border border-dashed border-slate-800 rounded-xl bg-slate-950/20"
                >
                  <Activity className="w-8 h-8 text-indigo-400 animate-pulse" />
                  <p className="text-sm text-slate-300 font-medium">
                    {activeTab.toUpperCase()} Engine Live Stream
                  </p>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Simulating continuous data pipeline transformation...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}