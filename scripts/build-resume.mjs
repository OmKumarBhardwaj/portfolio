// Builds public/Om_Kumar_Bhardwaj_Resume.pdf (ATS-friendly, single column).
// Content mirrors /root/projects/job-funnel/career-ops/cv.md, with the phone number removed,
// the portfolio link updated, and duplicate 4flow bullets merged.
// Run: node scripts/build-resume.mjs
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

const { chromium } = createRequire("/root/projects/naukri-refresh/package.json")("playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public", "Om_Kumar_Bhardwaj_Resume.pdf");

const skills = [
  ["AI & Agents", "LangGraph, LangChain, Amazon Bedrock, Amazon Bedrock AgentCore, Langfuse (LLM tracing & evaluation), Guardrails, Agentic AI, Tool Calling, Text-to-SQL, RAG, MCP, Prompt Engineering, Crawl4AI (Playwright)"],
  ["Languages", "Java 17, Python, JavaScript, SQL"],
  ["Backend", "Spring Boot, Spring, Spring Data, Spring Security, Hibernate, FastAPI, Microservices, System Design, REST, Asynchronous Messaging, GraphQL (Strapi), Multithreading, Jackson, Lombok"],
  ["Data & Messaging", "PostgreSQL, MySQL, MongoDB, Redis, AWS OpenSearch, Apache Kafka, RQueue, Algolia"],
  ["Cloud & DevOps", "AWS, Docker, Terraform, GitLab CI/CD, Jenkins, Git, GitHub, Linux, Heroku, Keycloak (OAuth2 / OIDC)"],
  ["Observability", "LGTM stack (Loki, Grafana, Tempo, Mimir), New Relic"],
  ["Testing & Build", "Unit & Integration Testing, JUnit, Mockito, JMeter, Postman, Maven, Gradle"],
];

const jobs = [
  {
    co: "4flow", loc: "Bengaluru, India", title: "Senior Software Engineer", dates: "Aug 2026 – Present", note: "Supply chain and logistics software",
    pts: [
      "Earned promotion to Senior Software Engineer in 13 months after shipping 3 production AI agents.",
      "Led development of Luca, an agentic text-to-SQL data agent on Amazon Bedrock (LangGraph, tool calling). It rewrites a plain-language question into a precise query, generates and runs the SQL, and returns a clear, business-readable answer in under 1 minute.",
      "Initiated Langfuse tracing, evaluations and guardrails across all 3 production agents to monitor behaviour, evaluate answers and block unsafe or irrelevant outputs.",
      "Presented the agents to business stakeholders and authored usage guides, driving adoption across 3 teams.",
      "Mentored 2 junior developers through code reviews and pairing, raising team test coverage to 80% with JUnit and Mockito.",
    ],
  },
  {
    co: "4flow", loc: "Bengaluru, India", title: "Software Engineer", dates: "Jul 2025 – Jul 2026",
    pts: [
      "Built Polaris, an LLM email-classifier agent, from requirements gathered with support stakeholders. It creates a ticket from each incoming email and tags it with a category and severity chosen from a fixed set using defined rules, saving 10+ hours a week.",
      "Built Radiance with supply chain teams: a Python risk and disruption agent that collects 20+ news and external sources with Crawl4AI (Playwright) and turns them into structured disruption data and daily alerts.",
      "Collaborated with a cross-functional team of 8 to design event-driven Kafka microservices handling 50K+ order events a day.",
      "Developed load-planning features that decide how transport orders are assigned to loads and how loads map to transports.",
      "Analyzed planner workflows and delivered capacity planning on PostgreSQL, eliminating 30% of manual planning work.",
      "Built real-time tracking of transport orders across their lifecycle.",
      "Secured 6 microservices with Spring Security and Keycloak for single sign-on and role-based access.",
      "Championed GitLab CI/CD pipelines and Terraform infrastructure for Docker deployments, cutting release time to 15 minutes.",
      "Instrumented services with the LGTM observability stack (Loki, Grafana, Tempo, Mimir), improving monitoring and incident diagnosis.",
    ],
  },
  {
    co: "GetSetYo", loc: "", title: "Software Engineer", dates: "May 2024 – Jun 2025", note: "Travel-tech startup",
    pts: [
      "Led a team of 4 developers to deliver a real-time flight and hotel booking platform, integrating 5+ partner travel APIs.",
      "Launched an LLM itinerary engine that personalized trip plans and lifted user engagement by 25%.",
      "Evaluated search vendors and migrated to AWS OpenSearch, trimming search costs by 40%.",
      "Coordinated with product and design teams to rebuild onboarding, raising data accuracy 32% and lowering abandonment 15%.",
      "Optimized APIs with pagination, Redis caching and queued background jobs, reducing response times by 50%.",
      "Implemented dual authentication (Google Sign-In and OTP via Exotel), reducing login time by 35%.",
      "Built an AI-driven automation pipeline with cron-based schedulers to continuously validate and update critical datasets.",
      "Built WhatsApp communication modules for one-to-one and broadcast messaging.",
    ],
  },
  { co: "Wipro", loc: "", title: "Java Developer Intern", dates: "May 2023 – Sep 2023",
    pts: ["Refactored Spring Boot modules and presented the new design to the team, increasing development efficiency by 30%."] },
  { co: "Whizzo Infotech", loc: "", title: "Software Developer Intern", dates: "Jan 2023 – Feb 2023",
    pts: ["Designed a student attendance system with role-based access control, decreasing administrative errors by 20%."] },
  { co: "Crio.Do", loc: "", title: "Project-Based Learning", dates: "Jun 2022 – May 2024",
    pts: ["Delivered 10+ industry-grade Java / Spring Boot projects following the SDLC and Agile practices."] },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const html = `<!doctype html><html><head><meta charset="utf-8"><title>Om Kumar Bhardwaj — Resume</title>
<style>
@page { size: A4; margin: 14mm 15mm; }
* { box-sizing: border-box; }
body { font-family: "Helvetica Neue", Arial, sans-serif; font-size: 9.8pt; line-height: 1.38; color: #1a1a1a; margin: 0; }
h1 { font-size: 21pt; margin: 0; letter-spacing: -0.3px; }
.role { font-size: 11pt; color: #5b21b6; font-weight: 600; margin-top: 2px; }
.contact { margin-top: 5px; font-size: 9.2pt; color: #333; }
.contact a { color: #333; text-decoration: none; }
h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: 1.2px; color: #5b21b6; border-bottom: 1.2px solid #ddd6fe; padding-bottom: 2px; margin: 13px 0 6px; }
p { margin: 0; }
.sk { margin: 2px 0; display: grid; grid-template-columns: 118px 1fr; gap: 6px; }
.job { margin-bottom: 8px; break-inside: avoid-page; }
.jh { display: flex; justify-content: space-between; font-weight: 700; }
.jt { font-style: italic; color: #333; }
.note { color: #666; font-size: 9pt; }
ul { margin: 3px 0 0 16px; padding: 0; } li { margin: 1.5px 0; }
</style></head><body>
<h1>Om Kumar Bhardwaj</h1>
<div class="role">Senior Software Engineer | AI Engineer | Java / Spring Boot | Python</div>
<div class="contact">Bengaluru, India · <a href="mailto:omb6464@gmail.com">omb6464@gmail.com</a> · <a href="https://www.linkedin.com/in/techgwen/">linkedin.com/in/techgwen</a> · <a href="https://github.com/OmKumarBhardwaj">github.com/OmKumarBhardwaj</a> · <a href="https://omkumarbhardwaj.netlify.app">omkumarbhardwaj.netlify.app</a></div>
<h2>Summary</h2>
<p>Promoted from Software Engineer to Senior Software Engineer at 4flow in 13 months. Lead delivery of 3 production AI agents on AWS, mentor 2 junior developers and present to business stakeholders.</p>
<h2>Technical Skills</h2>
${skills.map(([g, s]) => `<p class="sk"><b>${esc(g)}</b><span>${esc(s)}</span></p>`).join("\n")}
<h2>Experience</h2>
${jobs.map((j) => `<div class="job"><div class="jh"><span>${esc(j.co)}${j.loc ? ` — ${esc(j.loc)}` : ""}</span><span>${esc(j.dates)}</span></div>
<div class="jt">${esc(j.title)}${j.note ? ` <span class="note">· ${esc(j.note)}</span>` : ""}</div>
<ul>${j.pts.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("\n")}
<h2>Education</h2>
<div class="jh"><span>Haldia Institute of Technology, West Bengal, India</span><span>Jun 2020 – Jul 2024</span></div>
<div class="jt">Bachelor of Technology in Computer Science and Technology</div>
</body></html>`;

const b = await chromium.launch();
const p = await b.newPage();
await p.setContent(html, { waitUntil: "load" });
await p.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
if (process.argv[2]) {
  await p.setViewportSize({ width: 794, height: 1123 });
  await p.screenshot({ path: process.argv[2], fullPage: true });
}
await b.close();
console.log("wrote", out);
