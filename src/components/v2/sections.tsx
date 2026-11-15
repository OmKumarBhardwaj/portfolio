"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight, Check, Cloud, Copy, Lock, Mail, Server, Sparkles, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { CountUp, Reveal, ScrollLitText, SectionHeading, SpotlightCard } from "./motion-bits";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const PILLAR_ICONS = {
  sparkles: Sparkles,
  python: Terminal,
  server: Server,
  cloud: Cloud,
} as const;

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="about" className="section container-x">
      <SectionHeading eyebrow="About me" title="Who I am" className="mb-10" />
      <ScrollLitText
        text={DATA.aboutStatement}
        className="max-w-6xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
      />

      <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DATA.pillars.map((p, i) => {
          const Icon = PILLAR_ICONS[p.icon];
          return (
            <Reveal key={p.title} delay={i * 0.1}>
              <SpotlightCard className="h-full p-7">
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-500 dark:text-violet-300">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {DATA.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <SpotlightCard className="p-7">
              <p className="bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
                <CountUp to={s.value} decimals={"decimals" in s ? s.decimals : 0} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">{s.label}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */
export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section container-x">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div ref={ref} className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border md:left-1/2" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[11px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 md:left-1/2"
        />
        <div className="space-y-12 md:space-y-20">
          {DATA.work.map((w, i) => {
            const left = i % 2 === 0;
            return (
              <div key={w.title + w.start} className="relative grid md:grid-cols-2 md:gap-16">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute left-0 top-7 z-10 grid size-6 place-items-center rounded-full border-4 border-background bg-gradient-to-br from-violet-500 to-cyan-400 md:left-1/2 md:-translate-x-1/2"
                />
                <div className={cn("pl-10 md:pl-0", left ? "md:col-start-1 md:text-right" : "md:col-start-2")}>
                  <Reveal x={left ? -60 : 60} y={0}>
                    <SpotlightCard className="p-7 text-left md:p-8">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-2xl font-semibold">{w.title}</h3>
                        <span className="font-mono text-xs text-muted-foreground">
                          {w.start} – {w.end}
                        </span>
                      </div>
                      <p className="mt-1 text-lg font-medium text-violet-600 dark:text-violet-400">{w.company}</p>
                      <p className="text-sm text-muted-foreground">{w.tag}</p>
                      <ul className="mt-5 space-y-2.5">
                        {w.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-muted-foreground">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet-500" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {w.stack.map((s) => (
                          <span key={s} className="rounded-full border border-border px-3 py-1 font-mono text-xs">
                            {s}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects (sticky stacking cards) ---------------- */
export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = DATA.projects.length;
  return (
    <section id="projects" className="section container-x">
      <SectionHeading
        eyebrow="Projects"
        title={
          <>
            AI agents in <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">production</span>
          </>
        }
      />
      <Reveal>
        <p className="-mt-8 mb-14 max-w-2xl text-lg text-muted-foreground">
          Three agents I lead at 4flow (company code is private, so no repo links), plus open-source work on my GitHub.
        </p>
      </Reveal>
      <div ref={ref} className="relative">
        {DATA.projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} n={n} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  i,
  n,
  progress,
}: {
  p: (typeof DATA.projects)[number];
  i: number;
  n: number;
  progress: MotionValue<number>;
}) {
  const stackScale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.035]);
  const isLast = i === n - 1;
  // Stacking cards only on large screens; on phones the cards are taller than the screen.
  const [stack, setStack] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (min-height: 700px)");
    const on = () => setStack(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return (
    <div
      className={cn(stack ? "sticky" : "relative", !isLast && (stack ? "mb-[12vh]" : "mb-8"))}
      style={stack ? { top: `calc(6rem + ${i * 22}px)` } : undefined}
    >
      <motion.article
        style={stack ? { scale: stackScale } : undefined}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className="origin-top overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/10"
      >
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col p-8 md:p-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-muted-foreground">0{i + 1} / 0{n}</span>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{p.meta}</span>
            </div>
            <h3 className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl">{p.title}</h3>
            <p className={cn("mt-2 bg-gradient-to-r bg-clip-text text-xl font-medium text-transparent", p.color)}>{p.subtitle}</p>
            <p className="mt-6 text-muted-foreground md:text-lg">{p.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-muted px-3 py-1 font-mono text-xs">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 lg:mt-auto lg:pt-8">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
                >
                  <Icons.github className="size-4" /> View source
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="size-4" /> Private company project
                </span>
              )}
            </div>
          </div>
          <div className={cn("relative flex items-center justify-center bg-gradient-to-br p-6 md:p-10", p.color)}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-black/70 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
                <span className="ml-3 font-mono text-xs text-white/50">{p.title.toLowerCase().replace(/\s+/g, "-")}</span>
              </div>
              <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed text-white/90">
                {p.terminal.map((line, li) => (
                  <motion.p
                    key={li}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + li * 0.35, duration: 0.4 }}
                    className={cn("break-words", line.startsWith("✓") && "text-emerald-300")}
                  >
                    {line}
                  </motion.p>
                ))}
                <span className="inline-block h-4 w-2 animate-pulse bg-white/80 align-middle" />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

/* ---------------- Skills ---------------- */
export function Skills() {
  const all = DATA.skillGroups.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Skills" title="My toolkit" />
      </div>

      <div className="relative mb-16 space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee items={all.slice(0, half)} />
        <Marquee items={all.slice(half)} reverse />
      </div>

      <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {DATA.skillGroups.map((g, gi) => (
          <Reveal key={g.group} delay={(gi % 3) * 0.1} className={cn(g.group === "AI & Agents" && "md:col-span-2 lg:col-span-2")}>
            <SpotlightCard className="h-full p-7">
              <h3 className="mb-5 text-lg font-semibold">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, si) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.03, duration: 0.3 }}
                    whileHover={{ y: -3 }}
                    className="cursor-default rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm transition-colors hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-300"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Marquee({ items, reverse }: { items: readonly string[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      {[0, 1].map((k) => (
        <div
          key={k}
          aria-hidden={k === 1}
          className={cn("flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused]", reverse ? "marquee-reverse" : "marquee")}
        >
          {items.map((s) => (
            <span key={s} className="whitespace-nowrap rounded-2xl border border-border bg-card/60 px-6 py-3 text-lg font-medium md:text-xl">
              {s}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------------- Contact ---------------- */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = DATA.contact.email;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const t = document.createElement("textarea");
      t.value = email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section container-x">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-6 py-20 text-center md:px-16 md:py-28">
        <div className="aurora pointer-events-none absolute -left-20 -top-20 size-96 rounded-full bg-violet-600/25 blur-[100px]" />
        <div className="aurora-2 pointer-events-none absolute -bottom-20 -right-20 size-96 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="relative">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-violet-500 dark:text-violet-400">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight md:text-7xl">
              Let&apos;s build your next{" "}
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">AI agent</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Hiring for an AI Engineer or a senior backend role? Send me a message. I reply within a day.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${email}?subject=${encodeURIComponent("Opportunity for Om")}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-medium text-background transition hover:scale-[1.03]"
              >
                <Mail className="size-4" /> {email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium transition hover:bg-muted"
              >
                {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-6 flex justify-center gap-3">
              <a href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition hover:bg-muted">
                <Icons.linkedin className="size-4" /> LinkedIn
              </a>
              <a href={DATA.contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition hover:bg-muted">
                <Icons.github className="size-4" /> GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <footer className="mt-12 flex flex-col items-center justify-between gap-2 pb-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} {DATA.name}</p>
        <p>Built with Next.js, Tailwind CSS and Motion.</p>
      </footer>
    </section>
  );
}
