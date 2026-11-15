// All site content lives here. Edit this file to change any text on the site.

export const DATA = {
  name: "Om Kumar Bhardwaj",
  firstName: "Om",
  initials: "OB",
  url: "https://omkumarbhardwaj.netlify.app",
  location: "Bengaluru, India",
  role: "AI Engineer · Senior Software Engineer",
  description:
    "AI Engineer and Senior Software Engineer. I build production LLM agents and the Python and Java backends behind them.",
  rotatingRoles: [
    "AI Engineer",
    "Agentic AI Developer",
    "Python Backend Engineer",
    "Java / Spring Boot Engineer",
  ],
  heroLine:
    "I design and ship production AI agents, and the Python and Java backend systems that make them fast, safe and reliable.",

  // About: high level only. Big scroll-lit sentence + 4 pillars.
  aboutStatement:
    "I'm an AI Engineer who takes LLM agents from idea to production, backed by years of building Python and Java backend systems that real teams depend on every day.",
  pillars: [
    {
      title: "AI Agents & LLMs",
      text: "Agentic workflows with LangGraph, LangChain and Amazon Bedrock, with tracing, evaluations and guardrails built in from day one.",
      icon: "sparkles",
    },
    {
      title: "Python Backends",
      text: "APIs, data pipelines and crawlers in Python that feed, serve and monitor AI systems.",
      icon: "python",
    },
    {
      title: "Java Backend Systems",
      text: "Spring Boot microservices, Kafka event streams and PostgreSQL, designed for scale and clean operations.",
      icon: "server",
    },
    {
      title: "Cloud & Delivery",
      text: "AWS, Docker, Terraform and CI/CD. From prototype to production, with monitoring that tells you what broke.",
      icon: "cloud",
    },
  ],

  stats: [
    { value: 3, suffix: "", label: "Production AI agents shipped" },
    { value: 2.5, suffix: "+", label: "Years building backends", decimals: 1 },
    { value: 50, suffix: "K+", label: "Kafka events handled a day" },
    { value: 10, suffix: "+ hrs", label: "Manual work saved every week" },
  ],

  // Skills: taken from career-ops/cv.md, plus RAG, MCP, FastAPI and JavaScript.
  skillGroups: [
    {
      group: "AI & Agents",
      items: ["LangGraph", "LangChain", "Amazon Bedrock", "Bedrock AgentCore", "Agentic AI", "Tool Calling", "Text-to-SQL", "RAG", "MCP", "Prompt Engineering", "Langfuse", "LLM Evaluation", "Guardrails", "Crawl4AI"],
    },
    { group: "Languages", items: ["Java 17", "Python", "JavaScript", "SQL"] },
    {
      group: "Backend",
      items: ["Spring Boot", "Spring", "Spring Data", "Spring Security", "Hibernate", "FastAPI", "Microservices", "System Design", "REST APIs", "GraphQL", "Async Messaging", "Multithreading", "Jackson", "Lombok"],
    },
    {
      group: "Data & Messaging",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS OpenSearch", "Apache Kafka", "RQueue", "Algolia"],
    },
    {
      group: "Cloud & DevOps",
      items: ["AWS", "Docker", "Terraform", "GitLab CI/CD", "Jenkins", "Git", "GitHub", "Linux", "Heroku", "Keycloak (OAuth2 / OIDC)"],
    },
    { group: "Observability", items: ["Grafana", "Loki", "Tempo", "Mimir", "New Relic"] },
    {
      group: "Testing & Build",
      items: ["JUnit", "Mockito", "Integration Testing", "JMeter", "Postman", "Maven", "Gradle"],
    },
  ],

  contact: {
    email: "omb6464@gmail.com",
    linkedin: "https://www.linkedin.com/in/techgwen/",
    github: "https://github.com/OmKumarBhardwaj",
  },

  work: [
    {
      company: "4flow",
      title: "Senior Software Engineer",
      start: "Aug 2026",
      end: "Present",
      tag: "Supply-chain & logistics software",
      points: [
        "Promoted to Senior Software Engineer in 13 months after shipping 3 production AI agents.",
        "Lead Luca, an agentic text-to-SQL agent on Amazon Bedrock that answers data questions in under a minute.",
        "Introduced Langfuse tracing, evaluations and guardrails across all 3 agents.",
        "Presented the agents to business stakeholders and drove adoption across 3 teams.",
        "Mentor 2 junior developers; raised team test coverage to 80% with JUnit and Mockito.",
      ],
      stack: ["LangGraph", "Amazon Bedrock", "Langfuse", "Python", "Java"],
    },
    {
      company: "4flow",
      title: "Software Engineer",
      start: "Jul 2025",
      end: "Jul 2026",
      tag: "Supply-chain & logistics software",
      points: [
        "Built Polaris, an LLM agent that turns support emails into tagged tickets, saving 10+ hours a week.",
        "Built Radiance, a Python risk agent that scans 20+ news sources with Crawl4AI and sends daily alerts.",
        "Designed event-driven Kafka microservices handling 50K+ order events a day, in a team of 8.",
        "Delivered load and capacity planning on PostgreSQL, removing 30% of manual planning work.",
        "Secured 6 microservices with Spring Security and Keycloak; CI/CD and Terraform cut releases to 15 minutes.",
      ],
      stack: ["Spring Boot", "Kafka", "PostgreSQL", "Keycloak", "Terraform"],
    },
    {
      company: "GetSetYo",
      title: "Software Engineer",
      start: "May 2024",
      end: "Jun 2025",
      tag: "Travel-tech startup",
      points: [
        "Led 4 developers to deliver a real-time flight and hotel booking platform with 5+ partner APIs.",
        "Launched an LLM itinerary engine that lifted user engagement by 25%.",
        "Migrated search to AWS OpenSearch, cutting search costs by 40%.",
        "Cut API response times by 50% with pagination, Redis caching and background jobs.",
      ],
      stack: ["Java", "Spring Boot", "Redis", "OpenSearch", "LLM"],
    },
    {
      company: "Wipro",
      title: "Java Developer Intern",
      start: "May 2023",
      end: "Sep 2023",
      tag: "Internship",
      points: ["Refactored Spring Boot modules and presented the new design, raising development efficiency by 30%."],
      stack: ["Java", "Spring Boot"],
    },
    {
      company: "Whizzo Infotech",
      title: "Software Developer Intern",
      start: "Jan 2023",
      end: "Feb 2023",
      tag: "Internship",
      points: ["Designed a student attendance system with role-based access control, cutting admin errors by 20%."],
      stack: ["Java", "RBAC"],
    },
  ],

  projects: [
    {
      title: "Luca",
      subtitle: "Text-to-SQL AI Agent",
      meta: "4flow · 2025 – Present",
      description:
        "Business users ask questions in plain English. Luca rewrites the question, writes safe, validated SQL, runs it and returns a clear business answer. A one-day analyst request became an answer in under a minute.",
      tech: ["LangGraph", "Amazon Bedrock", "Tool Calling", "PostgreSQL", "Langfuse", "Guardrails"],
      link: "",
      color: "from-violet-500 to-indigo-600",
      terminal: [
        "> \"Which lanes were late last month?\"",
        "plan: rewrite → generate SQL → validate",
        "SELECT lane, COUNT(*) FROM shipments ...",
        "✓ answer in < 1 min · traced in Langfuse",
      ],
    },
    {
      title: "Polaris",
      subtitle: "Email Triage Agent",
      meta: "4flow · 2026 – Present",
      description:
        "Reads every inbound support email, creates a ticket and tags it with category and severity using fixed classification rules. Saves the team 10+ hours of manual triage every week.",
      tech: ["LLM", "LangGraph", "Amazon Bedrock", "Classification", "Java", "Spring Boot"],
      link: "",
      color: "from-sky-500 to-cyan-500",
      terminal: [
        "inbox: 1 new email",
        "classify → category: DELAY",
        "classify → severity: HIGH",
        "✓ ticket created and tagged",
      ],
    },
    {
      title: "Radiance",
      subtitle: "Supply-chain Risk Agent",
      meta: "4flow · 2026 – Present",
      description:
        "Crawls 20+ news and external sources with Crawl4AI, turns them into structured disruption data and sends daily ranked alerts to supply-chain planning teams.",
      tech: ["AI Agents", "Python", "Crawl4AI", "LangChain", "Amazon Bedrock"],
      link: "",
      color: "from-amber-500 to-rose-500",
      terminal: [
        "crawl: 20+ sources",
        "extract → port strike, Rotterdam",
        "risk level: HIGH",
        "✓ daily alert sent to planners",
      ],
    },
    {
      title: "Raw Agent",
      subtitle: "An LLM agent with no framework",
      meta: "Open source · 2026",
      description:
        "An agent written from scratch in Python: the tool-calling loop, memory and tools, without LangChain. Built to understand exactly what the frameworks do under the hood.",
      tech: ["Python", "LLM", "Tool Calling", "Agent Loop"],
      link: "https://github.com/OmKumarBhardwaj/raw-agent",
      color: "from-emerald-500 to-teal-600",
      terminal: [
        "while not done:",
        "  msg = llm(history, tools)",
        "  if msg.tool_call: run(tool)",
        "✓ done in 3 steps",
      ],
    },
    {
      title: "CuisineConnect",
      subtitle: "Food-ordering Backend",
      meta: "Open source · 2023",
      description:
        "REST APIs for restaurants and orders with Redis caching, tested with JUnit and Mockito and load-tested with JMeter.",
      tech: ["Java", "Spring Boot", "MongoDB", "Redis", "JMeter"],
      link: "https://github.com/OmKumarBhardwaj/CuisineConnect",
      color: "from-fuchsia-500 to-pink-600",
      terminal: [
        "GET /restaurants?lat=12.9&lng=77.6",
        "cache: HIT (redis)",
        "200 OK",
        "✓ load-tested with JMeter",
      ],
    },
  ],
} as const;
