"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { about, personal, stats } from "@/data/portfolio";
import { MapPin, Briefcase, Download, Copy, Check, Zap, Users, Award, Code2 } from "lucide-react";

const STAT_ICONS = [Zap, Users, Briefcase, Award];
const STAT_COLORS = [
  "text-sky-600 dark:text-sky-400 border-sky-500/30 dark:border-sky-400/20 bg-sky-500/10",
  "text-blue-600 dark:text-blue-400 border-blue-500/30 dark:border-blue-500/20 bg-blue-500/10",
  "text-cyan-600 dark:text-cyan-400 border-cyan-500/30 dark:border-cyan-400/20 bg-cyan-500/10",
  "text-indigo-600 dark:text-indigo-400 border-indigo-500/30 dark:border-indigo-400/20 bg-indigo-500/10",
];

const CODE_TABS = [
  {
    id: "ts",
    name: "about.ts",
    code: `const yash: Developer = {
  name: "${personal.name}",
  role: "${personal.title}",
  experience: "~3 years",
  location: "${personal.location}",
  openToWork: true,
  strengths: [
    "High-Performance Web Architecture",
    "API & State Management (Redux Toolkit)",
    "JWT & RBAC Security",
    "Open-Source Contributor @ Renovate"
  ]
};`,
  },
  {
    id: "json",
    name: "stack.json",
    code: `{
  "frontend": ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
  "backend": ["Node.js", "Express.js", "REST APIs", "WebSockets"],
  "database": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "testing": ["Jest", "React Testing Library", "Cypress"],
  "tools": ["Git", "Docker", "Postman", "Webpack"]
}`,
  },
  {
    id: "yaml",
    name: "goals.yml",
    code: `vision:
  focus: "Full-Stack & Frontend Engineering"
  principles:
    - "Clean, testable, type-safe architecture"
    - "Sub-second load times & Core Web Vitals"
    - "Accessible, aesthetic user interfaces"
  learning:
    - "Distributed Systems"
    - "AI & Agentic Workflows"`,
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_TABS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section-py relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading 
          index="01" 
          label="About Me" 
          subtitle="Software engineer driven by building scalable applications, polished UI architectures, and performant frontend systems."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* ── Left: Photo + Quick Stat Grid (5 cols) ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Photo Card */}
            <div className="glass-card rounded-2xl p-3 border border-sky-500/20 dark:border-sky-400/20 relative overflow-hidden group shadow-xl">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#070b16]">
                <Image
                  src="/avatar.jpg"
                  alt={personal.name}
                  fill
                  loading="lazy"
                  className="object-cover object-top grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="font-[var(--font-space-grotesk)] font-bold text-white text-lg leading-tight">
                      {personal.name}
                    </p>
                    <p className="font-mono text-xs text-sky-400 font-semibold">{personal.title}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-sm">
                    <Zap size={14} />
                  </div>
                </div>
              </div>

              {/* Status pill below image */}
              <div className="mt-3 px-2 flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                  Available for full-time
                </span>
                <span className="font-mono text-[11px] text-sky-700 dark:text-sky-400 font-semibold">Indore, INDIA</span>
              </div>
            </div>

            {/* Info pills */}
            <div className="flex flex-wrap gap-2.5">
              <span className="flex items-center gap-2 px-3.5 py-2 glass-card rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/8 shadow-sm">
                <MapPin size={13} className="text-sky-600 dark:text-sky-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-2 px-3.5 py-2 glass-card rounded-xl text-xs font-bold text-sky-700 dark:text-sky-400 border border-sky-500/30 dark:border-sky-400/30 shadow-sm">
                <Briefcase size={13} />
                Open to Full-Time Roles
              </span>
            </div>

            {/* Stats Grid with Animated Counters */}
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map(({ value, suffix, label }, i) => {
                const IconComp = STAT_ICONS[i % STAT_ICONS.length];
                const colorStyle = STAT_COLORS[i % STAT_COLORS.length];
                return (
                  <div
                    key={label}
                    className="glass-card rounded-2xl p-4 border border-slate-300 dark:border-white/8 hover:border-sky-500/30 dark:hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-1 group shadow-sm flex flex-col justify-between"
                  >
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-2.5 ${colorStyle}`}>
                      <IconComp size={15} />
                    </div>
                    <AnimatedCounter
                      end={value}
                      suffix={suffix}
                      duration={2000}
                      className="text-2xl sm:text-3xl font-extrabold font-[var(--font-space-grotesk)] text-slate-950 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors tracking-tight flex items-baseline"
                      suffixClassName="text-sky-600 dark:text-sky-400 text-xl ml-0.5 font-bold"
                    />
                    <p className="text-slate-700 dark:text-slate-300 text-xs mt-1 leading-snug font-semibold">{label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right: Bio + Interactive Code Window (7 cols) ────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-300 dark:border-white/8 space-y-4 shadow-sm">
              <h3 className="font-[var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-slate-950 dark:text-white leading-snug">
                Passionate about performance, modern architecture &amp; developer impact.
              </h3>
              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                {about.bio}
              </p>
            </div>

            {/* Interactive Code Window */}
            <div className="rounded-2xl overflow-hidden border border-slate-700/60 dark:border-sky-400/20 bg-[#070b16] shadow-2xl">
              {/* Window Header with Tabs */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b1022] border-b border-white/8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-sky-400/80" />
                  
                  {/* Tabs */}
                  <div className="flex items-center gap-1.5 ml-3">
                    {CODE_TABS.map((tab, idx) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(idx)}
                        className={`px-3 py-1 rounded-md font-mono text-xs transition-all flex items-center gap-1.5 ${
                          activeTab === idx
                            ? "bg-sky-500/20 text-sky-400 font-semibold border border-sky-400/30"
                            : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                        }`}
                      >
                        <Code2 size={11} />
                        {tab.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-sky-400" />
                      <span className="text-sky-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code display */}
              <div className="p-4 sm:p-5 overflow-x-auto min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="terminal-font text-xs sm:text-[13px] text-slate-200 leading-relaxed font-mono"
                  >
                    <code>{CODE_TABS[activeTab].code}</code>
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-1">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400
                           text-white font-bold text-sm transition-all duration-200
                           hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 shadow-md"
              >
                Let&apos;s Discuss Roles
              </a>
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-card
                           border border-slate-300 dark:border-white/10 hover:border-sky-500/30 dark:hover:border-sky-400/30
                           text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-white font-bold text-sm transition-all duration-200 active:scale-95 shadow-sm"
              >
                <Download size={14} className="text-sky-600 dark:text-sky-400" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
