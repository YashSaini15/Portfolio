"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/portfolio";
import { 
  Search, 
  X, 
  Layout, 
  Server, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  Cloud, 
  Wrench, 
  Cpu, 
  Sparkles,
  Layers
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Frontend": Layout,
  "Backend & APIs": Server,
  "Databases": Database,
  "Auth & Security": ShieldCheck,
  "Testing & Quality": CheckCircle2,
  "Tools & DevOps": Cloud,
  "Tools": Wrench,
  "Methodology": Layers,
  "AI Tools": Cpu,
};

const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.03 } },
};
const chip: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show:   { opacity: 1, scale: 1,    y: 0, transition: { duration: 0.25 } },
};

export default function Skills() {
  const [active, setActive] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Flattened all skills for global search
  const allSkills = useMemo(() => {
    const list: { name: string; category: string }[] = [];
    skillGroups.forEach((g) => {
      g.skills.forEach((s) => {
        list.push({ name: s, category: g.category });
      });
    });
    return list;
  }, []);

  // Filtered skills based on search or active tab
  const displayedSkills = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return allSkills.filter((s) => s.name.toLowerCase().includes(q));
    }
    return skillGroups[active].skills.map((s) => ({
      name: s,
      category: skillGroups[active].category,
    }));
  }, [searchQuery, active, allSkills]);

  return (
    <section id="skills" className="section-py relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          index="01"
          label="Skills & Tech Stack"
          subtitle="Core technologies, frameworks, databases, and development tools I leverage."
        />

        {/* ── Search & Filter Header ─────────────────────────────────── */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech stack (e.g. React, Docker, MongoDB)..."
              className="w-full bg-white dark:bg-[#080d1e] border border-slate-300 dark:border-white/10 focus:border-sky-500 dark:focus:border-sky-400/60
                         rounded-xl pl-11 pr-10 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400
                         outline-none transition-all glass-card shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="font-mono text-xs text-sky-600 dark:text-sky-400 font-semibold text-center mt-2.5">
              Found {displayedSkills.length} matching {displayedSkills.length === 1 ? "technology" : "technologies"}
            </p>
          )}
        </div>

        {/* ── Category Tabs (Hidden when searching) ──────────────────── */}
        {!searchQuery && (
          <div
            className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillGroups.map((group, i) => {
              const Icon = CATEGORY_ICONS[group.category] || Sparkles;
              const isActive = active === i;
              return (
                <button
                  key={group.category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold
                              transition-all duration-200 outline-none
                              ${
                                isActive
                                  ? "text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25 scale-105"
                                  : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white glass-card border border-slate-300 dark:border-white/8 hover:border-sky-500/30 dark:hover:border-sky-400/30 shadow-sm"
                              }`}
                >
                  <Icon size={14} className={isActive ? "text-white" : "text-sky-600 dark:text-sky-400"} />
                  {group.category}
                </button>
              );
            })}
          </div>
        )}

        {/* ── Skill Chips Grid ───────────────────────────────────────── */}
        <div className="glass-card rounded-2xl p-8 border border-slate-200 dark:border-white/8 min-h-[160px] flex items-center justify-center shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={searchQuery ? "search" : active}
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="flex flex-wrap justify-center gap-3 w-full"
              role="tabpanel"
            >
              {displayedSkills.length > 0 ? (
                displayedSkills.map((skill) => (
                  <motion.span
                    key={`${skill.category}-${skill.name}`}
                    variants={chip}
                    className="skill-chip text-sm px-4 py-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                    <span>{skill.name}</span>
                    {searchQuery && (
                      <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 ml-1">
                        ({skill.category})
                      </span>
                    )}
                  </motion.span>
                ))
              ) : (
                <p className="text-slate-600 dark:text-slate-400 text-sm font-mono py-8 font-medium">
                  No matching technologies found for &quot;{searchQuery}&quot;
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── All Categories Showcase Cards ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillGroups.slice(0, 6).map((group, i) => {
            const Icon = CATEGORY_ICONS[group.category] || Sparkles;
            return (
              <button
                key={group.category}
                onClick={() => {
                  setSearchQuery("");
                  setActive(i);
                }}
                className={`text-left glass-card rounded-2xl p-5 border transition-all duration-300
                           hover:-translate-y-1 group shadow-sm ${
                             active === i && !searchQuery
                               ? "border-sky-500/40 dark:border-sky-400/40 bg-sky-500/[0.06]"
                               : "border-slate-300 dark:border-white/8 hover:border-sky-500/30 dark:hover:border-sky-400/30"
                           }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 dark:border-sky-400/20 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                    <Icon size={15} />
                  </div>
                  <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300 font-semibold">
                    {group.skills.length} skills
                  </span>
                </div>
                <p className="font-[var(--font-space-grotesk)] font-bold text-slate-950 dark:text-white text-base mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {group.category}
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed line-clamp-2 font-medium">
                  {group.skills.join(" · ")}
                </p>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
