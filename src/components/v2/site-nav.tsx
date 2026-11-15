"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", id === "top" ? window.location.pathname : `#${id}`);
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = !mounted || resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label="Toggle light / dark mode"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:text-foreground hover:bg-muted"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export function SiteNav() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: progress }} className="h-[2px] origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />
      <nav
        className={cn(
          "mx-auto mt-3 flex w-[min(100%-1.5rem,72rem)] items-center justify-between rounded-full border px-4 py-2 transition-all duration-500 md:px-6",
          scrolled ? "border-border bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl" : "border-transparent bg-transparent"
        )}
      >
        <button onClick={() => go("top")} className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-white">OB</span>
          <span className="hidden sm:inline">Om Kumar Bhardwaj</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active === l.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-muted" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`${BP}/Om_Kumar_Bhardwaj_Resume.pdf`}
            download
            className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 sm:inline-flex"
          >
            <Download className="size-4" /> Resume
          </a>
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-2 w-[calc(100%-1.5rem)] rounded-3xl border border-border bg-background/90 p-2 backdrop-blur-xl md:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={cn("w-full rounded-2xl px-4 py-3 text-left", active === l.id ? "bg-muted" : "text-muted-foreground")}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
