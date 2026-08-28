"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { achievements, ossContribution } from "@/data/portfolio";
import { GithubIcon } from "@/components/ui/Icons";
import { Star, GitPullRequest, ArrowUpRight } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section-py relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          index="04"
          label="Impact & Achievements"
          subtitle="Measurable performance wins, security hardening, and open-source milestones."
        />

        {/* ── Metric Cards Grid ──────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/8 hover:border-sky-500/35 dark:hover:border-sky-400/35
                         transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 dark:border-sky-400/20 flex items-center justify-center text-xl shadow-inner">
                  {a.icon}
                </div>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  #0{idx + 1}
                </span>
              </div>

              <div>
                <AnimatedCounter
                  end={a.value}
                  suffix={a.suffix}
                  duration={2200}
                  className="font-[var(--font-space-grotesk)] text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white
                             group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors tracking-tight"
                />
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-snug font-medium">{a.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Open-Source Spotlight Feature Card ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-3xl p-7 sm:p-8 border border-sky-500/30 dark:border-sky-400/35 relative overflow-hidden shadow-xl"
        >
          {/* Top Gradient Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/25 to-cyan-500/15 border border-sky-500/30 dark:border-sky-400/40
                              flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 shadow-md">
                <GitPullRequest size={26} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 dark:border-sky-400/30 font-mono text-[11px] font-semibold text-sky-700 dark:text-sky-400 flex items-center gap-1">
                    <Star size={11} className="fill-sky-600 dark:fill-sky-400" />
                    18,000+ Stars
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-[11px] font-medium text-slate-700 dark:text-slate-300">
                    Maintainer-Reviewed PR
                  </span>
                </div>

                <h3 className="font-[var(--font-space-grotesk)] font-bold text-slate-900 dark:text-white text-lg sm:text-xl">
                  {ossContribution.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed font-normal">
                  {ossContribution.description}
                </p>
              </div>
            </div>

            <a
              href={ossContribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400
                         text-white font-bold text-xs sm:text-sm transition-all duration-200
                         hover:shadow-lg hover:shadow-blue-500/25 shrink-0 active:scale-95 shadow-md"
            >
              <GithubIcon size={16} />
              <span>Explore Renovate Bot</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
