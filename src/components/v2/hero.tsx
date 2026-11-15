"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Download, MapPin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
const ease = [0.22, 1, 0.36, 1] as const;

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % DATA.rotatingRoles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={DATA.rotatingRoles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="whitespace-nowrap bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent"
        >
          {DATA.rotatingRoles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const CHIPS = [
  { label: "LangGraph", cls: "-left-6 top-10 md:-left-14", d: 0 },
  { label: "Amazon Bedrock", cls: "-right-4 top-1/3 md:-right-16", d: 0.6 },
  { label: "Spring Boot", cls: "-left-4 bottom-16 md:-left-16", d: 1.2 },
  { label: "Python", cls: "right-2 -bottom-4 md:right-0", d: 1.8 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Full searchable name above the fold. Split so it wraps as "Om Kumar / Bhardwaj"
  // at every width instead of breaking at arbitrary points.
  const [first, ...rest] = DATA.name.split(" ");
  const surname = rest.pop() ?? "";
  const givenNames = [first, ...rest].join(" ");

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* animated aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute -left-40 -top-40 size-[30rem] rounded-full md:size-[44rem]" />
        <div className="aurora-2 absolute -right-40 top-20 size-[26rem] rounded-full md:size-[40rem]" />
        <div className="aurora-3 absolute bottom-0 left-1/3 hidden size-[36rem] rounded-full md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <motion.div style={{ y, opacity, scale }} className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-600 dark:text-emerald-400"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to AI Engineer roles · 15-day notice
          </motion.div>

          {/* LCP text: painted at opacity 1 on first frame; entrance is transform-only. */}
          <motion.p
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl"
          >
            Hi, I&apos;m
          </motion.p>
          <h1 className="mt-1 text-[3.25rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            <motion.span
              className="block"
              initial={{ y: 28 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
            >
              {givenNames}
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-foreground via-foreground to-violet-500 bg-clip-text pb-[0.08em] text-transparent dark:to-violet-400"
              initial={{ y: 28 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
            >
              {surname}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            {DATA.heroLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-medium text-background transition hover:scale-[1.03]"
            >
              <Mail className="size-4" /> Contact me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`${BP}/Om_Kumar_Bhardwaj_Resume.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium transition hover:bg-muted"
            >
              <Download className="size-4" /> Download resume
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a aria-label="LinkedIn" href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="grid size-12 place-items-center rounded-full border border-border transition hover:bg-muted">
                <Icons.linkedin className="size-5" />
              </a>
              <a aria-label="GitHub" href={DATA.contact.github} target="_blank" rel="noopener noreferrer" className="grid size-12 place-items-center rounded-full border border-border transition hover:bg-muted">
                <Icons.github className="size-5" />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <MapPin className="size-4" /> {DATA.location}
          </motion.p>
        </div>

        <motion.div
          style={{ y: photoY }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-[3px] overflow-hidden rounded-[2.2rem] opacity-90">
            <div className="spin-slow absolute -inset-1/2 bg-[conic-gradient(from_0deg,#8b5cf6,#d946ef,#22d3ee,#8b5cf6)]" />
          </div>
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-violet-600/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-background">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <picture>
              <source srcSet={`${BP}/me.webp`} type="image/webp" />
              <img
                src={`${BP}/me.jpg`}
                alt={DATA.name}
                width={400}
                height={400}
                fetchPriority="high"
                className="aspect-square w-full object-cover"
              />
            </picture>
          </div>
          {CHIPS.map((c) => (
            <motion.span
              key={c.label}
              className={`absolute ${c.cls} rounded-full border border-border bg-background/80 px-3 py-1.5 font-mono text-xs shadow-xl backdrop-blur-md md:text-sm`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 1 + c.d * 0.3 },
                scale: { delay: 1 + c.d * 0.3 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: c.d },
              }}
            >
              {c.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
        <ArrowDown className="size-4" />
      </motion.a>
    </section>
  );
}
