import { Icons } from "@/components/icons";
const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Om Kumar Bhardwaj",
  initials: "OB",
  url: "https://omkumarbhardwaj.netlify.app",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  role: "Senior Software Engineer · AI Engineer",
  description:
    "Senior Software Engineer building production AI agents and Java backend systems for supply-chain logistics.",
  summary:
    "I build **AI agents that real teams use every day** and the **Java / Spring Boot backends** behind them. At [4flow](#work) I led three production LLM agents on AWS: **Luca** (text-to-SQL), **Polaris** (email triage) and **Radiance** (supply-chain risk alerts), built with LangGraph, LangChain and Amazon Bedrock AgentCore, and shipped with Langfuse tracing, evaluations and guardrails. Before that, I led a small team at a travel-tech startup and shipped an LLM trip-planning feature. I care about agents that are **observable, safe and boring to operate**. Open to **AI Engineer / GenAI Engineer** roles and senior backend roles with AI work.",
  avatarUrl: `${BP}/me.jpg`,
  stats: [
    { value: "3", label: "production AI agents" },
    { value: "2.5+", label: "years shipping backends" },
    { value: "50K+", label: "Kafka events / day" },
    { value: "10+ hrs", label: "saved per week" },
  ],
  skillGroups: [
    { group: "AI & Agents", items: ["LangGraph", "LangChain", "Amazon Bedrock AgentCore", "RAG", "Tool Calling", "MCP", "Prompt Engineering", "Langfuse", "Guardrails", "Evaluations"] },
    { group: "Backend", items: ["Java 17", "Spring Boot", "Spring Security", "Microservices", "Apache Kafka", "REST APIs", "System Design", "Python", "FastAPI"] },
    { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "OpenSearch / Elasticsearch"] },
    { group: "Cloud & DevOps", items: ["AWS", "Docker", "Terraform", "GitLab CI/CD", "Jenkins", "Keycloak (OAuth2 / OIDC)", "Grafana"] },
  ],
  skills: [
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "omb6464@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/OmKumarBhardwaj",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/techgwen/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:omb6464@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "4flow",
      href: "https://www.4flow.com",
      badges: ["AI Agents", "Backend"],
      location: "Bengaluru, India",
      title: "Senior Software Engineer",
      logoUrl: `${BP}/logos/4flow.svg`,
      start: "Jul 2025",
      end: "Present",
      description:
        "Supply-chain & logistics software. Promoted from Software Engineer to Senior Software Engineer (Aug 2026).\n\n- Led development of **Luca**, a text-to-SQL agent that answers plain-language data questions in under 1 minute instead of 1 day.\n- Automated email triage with **Polaris**, an LLM agent that turns every inbound email into a tagged ticket, saving 10+ hours a week.\n- Built **Radiance** with supply-chain teams: a risk agent that scans 20+ news sources and sends daily alerts.\n- Introduced Langfuse tracing, evaluations and guardrails across all 3 production agents.\n- Built event-driven Kafka microservices (50K+ order events/day) and load & capacity planning that removed 30% of manual planning work.\n- Mentored 2 junior developers; raised team test coverage to 80% with JUnit and Mockito.",
    },
    {
      company: "GetSetYo",
      href: "",
      badges: ["Startup"],
      location: "India",
      title: "Software Engineer",
      logoUrl: `${BP}/logos/getsetyo.svg`,
      start: "May 2024",
      end: "Jun 2025",
      description:
        "Travel-tech startup.\n\n- Led 4 developers to deliver a real-time flight and hotel booking platform, integrating 5+ travel-partner APIs.\n- Launched an LLM-powered itinerary engine that personalised trip plans and lifted engagement by 25%.\n- Rebuilt onboarding with product and UX, raising data accuracy 32% and cutting abandonment 15%.",
    },
    {
      company: "Wipro",
      href: "https://www.wipro.com",
      badges: ["Internship"],
      location: "India",
      title: "Java Developer Intern",
      logoUrl: `${BP}/logos/wipro.svg`,
      start: "May 2023",
      end: "Sep 2023",
      description:
        "Refactored Spring Boot modules and walked the team through the changes, improving development efficiency by 30%.",
    },
    {
      company: "Whizzo Infotech",
      href: "",
      badges: ["Internship"],
      location: "India",
      title: "Software Developer Intern",
      logoUrl: `${BP}/logos/whizzo.svg`,
      start: "Jan 2023",
      end: "Feb 2023",
      description:
        "Built a student attendance system with role-based access control, reducing administrative errors by 20%.",
    },
  ],
  education: [
    {
      school: "Haldia Institute of Technology",
      href: "https://hithaldia.ac.in",
      degree: "B.Tech, Computer Science · CGPA 8.9",
      logoUrl: `${BP}/logos/hit.svg`,
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Luca — Text-to-SQL Agent",
      href: "",
      dates: "4flow · 2025 – Present",
      active: true,
      description:
        "Business users ask questions in plain English; Luca writes safe, validated SQL against the logistics warehouse and explains the answer. Turned a 1-day analyst request into an answer in under a minute.",
      technologies: ["LangGraph", "Amazon Bedrock", "Python", "PostgreSQL", "Langfuse", "Guardrails"],
      links: [],
      image: `${BP}/projects/luca.svg`,
      video: "",
    },
    {
      title: "Polaris — Email Triage Agent",
      href: "",
      dates: "4flow · 2026 – Present",
      active: true,
      description:
        "Reads every inbound operations email, classifies intent, extracts the key fields and opens a tagged ticket automatically. Saves the team 10+ hours of manual triage every week.",
      technologies: ["LLM", "LangGraph", "Amazon Bedrock", "Tool Calling", "Java", "Spring Boot"],
      links: [],
      image: `${BP}/projects/polaris.svg`,
      video: "",
    },
    {
      title: "Radiance — Supply-chain Risk Agent",
      href: "",
      dates: "4flow · 2026 – Present",
      active: true,
      description:
        "Scans 20+ news sources daily, detects events that can disrupt supply chains (strikes, port closures, weather) and sends ranked alerts to planning teams.",
      technologies: ["AI Agents", "LangChain", "Amazon Bedrock", "Python", "Scheduling"],
      links: [],
      image: `${BP}/projects/radiance.svg`,
      video: "",
    },
    {
      title: "Raw Agent — No Framework",
      href: "https://github.com/OmKumarBhardwaj/raw-agent",
      dates: "2026",
      active: true,
      description:
        "An LLM agent written from scratch in Python: tool calling, the agent loop and memory without LangChain — to understand exactly what the frameworks do under the hood.",
      technologies: ["Python", "LLM", "Tool Calling", "Agent Loop"],
      links: [
        { type: "Source", href: "https://github.com/OmKumarBhardwaj/raw-agent", icon: <Icons.github className="size-3" /> },
      ],
      image: `${BP}/projects/raw-agent.svg`,
      video: "",
    },
    {
      title: "CuisineConnect — Food Ordering Backend",
      href: "https://github.com/OmKumarBhardwaj/CuisineConnect",
      dates: "2023",
      active: true,
      description:
        "Food-ordering backend with REST APIs for restaurants and orders, Redis caching and load-tested performance (JMeter).",
      technologies: ["Java", "Spring Boot", "MongoDB", "Redis", "JUnit", "Mockito"],
      links: [
        { type: "Source", href: "https://github.com/OmKumarBhardwaj/CuisineConnect", icon: <Icons.github className="size-3" /> },
      ],
      image: `${BP}/projects/cuisine.svg`,
      video: "",
    },
  ],
  achievements: [
    "Led 3 production AI agents adopted by 3 business teams at 4flow",
    "Promoted to Senior Software Engineer within ~13 months at 4flow",
    "Scored 89 with 6 badges in the Geektrust Backend Challenge (readability, OO modelling, tests, correctness)",
  ],
} as const;
