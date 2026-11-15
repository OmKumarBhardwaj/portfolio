"use client";

import { animate, motion, useInView, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/** Fades and slides children in when they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  x = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const EYEBROW = "mb-3 font-mono text-sm uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400 md:text-base";

/** Section label. It is the section's h2 unless a big title is given (then the title is the h2). */
export function SectionHeading({ eyebrow, title, className }: { eyebrow: string; title?: ReactNode; className?: string }) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <Reveal>
        {title ? (
          <p className={EYEBROW}>{eyebrow}</p>
        ) : (
          <h2 className={EYEBROW}>{eyebrow}</h2>
        )}
      </Reveal>
      {title && (
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
        </Reveal>
      )}
    </div>
  );
}

/** Apple-style paragraph: each word lights up as you scroll past it. */
export function ScrollLitText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  // 0.45 floor keeps unlit words readable (WCAG 3:1 for large text) while the lit effect still shows.
  const opacity = useTransform(progress, range, [0.45, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] mt-[0.1em]">
      {children}
    </motion.span>
  );
}

/**
 * Number that counts up when it scrolls into view.
 * The static HTML holds the FINAL value (crawlers, link previews, no-JS and slow phones never see "0").
 * Only elements still below the fold at mount are reset to 0 and then animated when they appear.
 */
export function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const armed = useRef(false);
  const [display, setDisplay] = useState(to.toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const visible = r.top < window.innerHeight && r.bottom > 0;
    if (!visible) {
      armed.current = true;
      setDisplay((0).toFixed(decimals));
    }
  }, [reduce, decimals]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    armed.current = false;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, to, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/** Card with a glow that follows the mouse. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-sm transition-colors duration-300 hover:border-violet-500/40",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(400px circle at var(--x) var(--y), rgba(139,92,246,0.15), transparent 60%)" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
