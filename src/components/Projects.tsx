"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Globe, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

const CATEGORIES = ["All Projects", "Full Stack", "Frontend & Analytics"] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");
  const [hovered, setHovered] = useState<number | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All Projects") return true;
    if (activeFilter === "Full Stack") return p.role.toLowerCase().includes("full stack");
    if (activeFilter === "Frontend & Analytics") return p.role.toLowerCase().includes("frontend");
    return true;
  });

  return (
    <section id="projects" className="section-py relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          index="03"
          label="Featured Projects"
          subtitle="Production-grade platforms and high-density analytics dashboards built to scale."
        />

        {/* ── Category Filter Tabs ───────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "glass-card border border-slate-300 dark:border-white/8 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-sky-500/30 dark:hover:border-sky-400/30 shadow-sm"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Project Grid ───────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const domain = project.url ? new URL(project.url).hostname : "production-app";
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onHoverStart={() => setHovered(project.id)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-2xl border border-slate-200 dark:border-white/10 hover:border-sky-500/40 dark:hover:border-sky-400/35
                             transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-xl relative"
                >
                  {/* Top Gradient Accent Bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

                  {/* Browser Window Header Mockup */}
                  <div className="px-6 py-3.5 bg-slate-100/90 dark:bg-[#090e1f] border-b border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500/80 dark:bg-sky-400/80" />
                      
                      <div className="ml-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-[#050711] border border-slate-200 dark:border-white/5 font-mono text-[11px] text-slate-700 dark:text-slate-300 shadow-xs">
                        <Globe size={11} className="text-sky-600 dark:text-sky-400" />
                        <span className="truncate max-w-[160px] sm:max-w-[200px]">{domain}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25 dark:border-sky-400/25 font-mono text-[10px] text-sky-700 dark:text-sky-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse-dot" />
                      Live
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Role & Title */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs text-sky-700 dark:text-sky-400 font-bold px-2.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/30 dark:border-sky-400/25">
                          {project.role}
                        </span>
                      </div>

                      <h3 className="font-[var(--font-space-grotesk)] font-bold text-slate-950 dark:text-white text-xl sm:text-2xl leading-tight mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Key Highlights with Custom Checkmark Badges */}
                      <div className="space-y-2.5 mb-6">
                        <p className="font-mono text-[11px] text-slate-700 dark:text-slate-400 uppercase tracking-wider font-bold">
                          Key Achievements &amp; Impact
                        </p>
                        {project.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200">
                            <CheckCircle2 size={15} className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                            <span className="leading-snug font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-6 pt-3 border-t border-slate-200 dark:border-white/5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#070b16] border border-slate-300 dark:border-white/8
                                       font-mono text-xs text-slate-800 dark:text-slate-200 font-semibold shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Action CTAs */}
                      <div className="flex items-center gap-3 pt-2">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl
                                       bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400
                                       text-white font-bold text-xs sm:text-sm
                                       transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 shadow-md"
                          >
                            <span>Live Preview</span>
                            <ArrowUpRight size={15} />
                          </a>
                        )}

                        {project.codeUrl ? (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code"
                            className="px-4 py-3.5 rounded-xl glass-card border border-slate-300 dark:border-white/10 hover:border-sky-500/40 dark:hover:border-sky-400/35
                                       text-slate-800 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white transition-all text-xs font-semibold flex items-center gap-2 shadow-sm"
                          >
                            <GithubIcon size={16} />
                            <span>Code</span>
                          </a>
                        ) : (
                          <span 
                            title="Enterprise proprietary project" 
                            className="px-3.5 py-3.5 rounded-xl glass border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 font-mono text-xs font-medium flex items-center gap-1.5 shadow-sm"
                          >
                            <Lock size={12} />
                            <span>Enterprise</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Ambient Hover Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300
                                ${hovered === project.id ? "opacity-100" : "opacity-0"}`}
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.1) 0%, transparent 70%)",
                    }}
                  />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
