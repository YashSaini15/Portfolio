"use client";

import { personal } from "@/data/portfolio";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 py-10 bg-slate-100/90 dark:bg-[#050711]/90">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-600 dark:text-slate-400 text-sm">
        
        {/* Left Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 dark:border-sky-400/30 flex items-center justify-center font-[var(--font-space-grotesk)] font-bold text-sky-700 dark:text-sky-400 text-xs shadow-xs">
            YS
          </div>
          <p className="font-mono text-xs text-slate-600 dark:text-slate-400">
            © {year} <span className="text-slate-900 dark:text-white font-semibold">{personal.name}</span> ·{" "}
            <span className="text-slate-500">Crafted with Next.js &amp; Tailwind</span>
          </p>
        </div>

        {/* Right Actions & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg glass-card border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/35 dark:hover:border-sky-400/35 transition-all hover:-translate-y-0.5 shadow-xs"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg glass-card border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/35 dark:hover:border-sky-400/35 transition-all hover:-translate-y-0.5 shadow-xs"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={personal.socials.email}
              aria-label="Email"
              className="w-9 h-9 rounded-lg glass-card border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/35 dark:hover:border-sky-400/35 transition-all hover:-translate-y-0.5 shadow-xs"
            >
              <Mail size={15} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-slate-200/70 dark:bg-white/5 hover:bg-sky-500/10 border border-slate-300 dark:border-white/10 hover:border-sky-500/30 text-slate-700 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-all hover:-translate-y-0.5"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
