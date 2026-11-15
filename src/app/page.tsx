/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, MapPin, Sparkles, Mail, Trophy } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-3 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to AI Engineer roles · 15 days notice
                </span>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="text-sm font-medium tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent sm:text-base">
                  {DATA.role}
                </p>
              </BlurFade>
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY * 4}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <Link href={`mailto:${DATA.contact.email}`} className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition">
                    <Mail className="size-4" /> Contact me
                  </Link>
                  <Link href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-1 rounded-xl border px-4 text-sm font-medium hover:bg-muted transition">
                    LinkedIn <ArrowUpRight className="size-3.5" />
                  </Link>
                  <Link href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-1 rounded-xl border px-4 text-sm font-medium hover:bg-muted transition">
                    GitHub <ArrowUpRight className="size-3.5" />
                  </Link>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3.5" />{DATA.location}</span>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {DATA.stats.map((s) => (
                <div key={s.label} className="rounded-xl border bg-card/60 p-3 text-center shadow-sm">
                  <div className="text-xl font-semibold tracking-tight sm:text-2xl">{s.value}</div>
                  <div className="text-[11px] leading-tight text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-strong:text-foreground">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="grid gap-4">
            {DATA.skillGroups.map((g, gi) => (
              <BlurFade key={g.group} delay={BLUR_FADE_DELAY * 13 + gi * 0.05}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {gi === 0 && <Sparkles className="size-3.5 text-fuchsia-500" />}
                    {g.group}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <div key={item} className={`border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-3 flex items-center text-sm font-medium ${gi === 0 ? "border-fuchsia-500/30" : ""}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="achievements">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold">Highlights</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <ul className="grid gap-2">
              {DATA.achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl border bg-card/60 p-3 text-sm">
                  <Trophy className="mt-0.5 size-4 flex-none text-amber-500" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 17 + index * 0.05}>
                <Link href={education.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 justify-between group">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <img src={education.logoUrl} alt={education.school} className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none" />
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>{education.start} - {education.end}</span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
