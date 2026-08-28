"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Download, FileText } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { personal } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About",       href: "#about"       },
  { label: "Skills",      href: "#skills"      },
  { label: "Experience",  href: "#experience"  },
  { label: "Projects",    href: "#projects"    },
  { label: "Achievements",href: "#achievements"},
  { label: "Contact",     href: "#contact"     },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted,  setMounted]  = useState(false);
  const { theme, setTheme }     = useTheme();
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const wasMenuOpen = menuOpen;
    if (wasMenuOpen) {
      setMenuOpen(false);
    }

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Delay navigation slightly if drawer was open so DOM layout recalculation finishes cleanly
      setTimeout(() => {
        const navHeight = 72;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, wasMenuOpen ? 150 : 0);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass shadow-sm shadow-black/5 dark:shadow-black/20 border-b border-slate-200/80 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between gap-4">

        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
          aria-label="Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center
                          font-[var(--font-space-grotesk)] font-bold text-white text-sm
                          shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            YS
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-[var(--font-space-grotesk)] font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              Yash Saini
            </span>
            {personal.availableForWork && (
              <span className="hidden lg:flex items-center gap-1.5 text-xs text-sky-700 dark:text-sky-400 font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse-dot" />
                Available
              </span>
            )}
          </div>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`text-sm transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-sky-600 dark:text-sky-400 font-bold"
                      : "text-slate-800 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white font-medium"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg flex items-center justify-center
                         text-slate-800 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white
                         hover:bg-slate-200/60 dark:hover:bg-white/5 border border-slate-200/60 dark:border-white/10
                         transition-all duration-200"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={17} />
                  </motion.span>
                ) : (
                  <motion.span key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={17} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )}

          {/* Resume */}
          <a
            href={personal.resumeUrl}
            download
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl
                       glass-card border border-sky-500/40 dark:border-sky-400/40 text-sky-800 dark:text-sky-400 hover:bg-sky-500/10
                       text-sm font-bold transition-all duration-200 group hover:-translate-y-0.5 shadow-xs"
          >
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center
                       text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-slate-200 dark:border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="block text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-semibold text-base py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={personal.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                             border border-sky-500/40 dark:border-sky-400/40 text-sky-800 dark:text-sky-400 text-sm font-bold bg-sky-500/10"
                >
                  <FileText size={14} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
