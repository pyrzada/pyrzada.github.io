import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    docker,
    java,
    angular,
    laravel,
    nextjs,
    postgresql,
    git,
} from "../assets";

// === Identity (from resume) ===
export const profile = {
    name: "Abdul Wahab Pirzada",
    firstName: "Abdul Wahab",
    lastName: "Pirzada",
    role: "Senior Software Engineer · Full-Stack & Agentic AI",
    tagline:
        "I ship cloud-native platforms and production agentic AI at billions-of-transactions scale — where reliability, developer experience and visual craft all matter.",
    location: "Alexandria, VA",
    availability: "US work-authorized · Open to relocation worldwide",
    email: "awahabpirzada@gmail.com",
    phone: "+1 (380) 205-4393",
    website: "https://pyrzada.github.io",
    socials: {
        github: "https://github.com/pyrzada",
        linkedin: "https://linkedin.com/in/abdulwahabpirzada",
        twitter: "https://twitter.com/",
    },
    education: {
        degree: "B.S. Software Engineering",
        school: "Bahria University, Islamabad",
        years: "2011 – 2015",
    },
    resumeUrl: "#",
};

export const navLinks = [
    {id: "about", title: "About"},
    {id: "work", title: "Experience"},
    {id: "projects", title: "Projects"},
    {id: "contact", title: "Contact"},
];

// Headline stats pulled from resume achievements
export const heroStats = [
    {label: "Years building", value: "9+"},
    {label: "Requests / day", value: "2B+"},
    {label: "Uptime", value: "99.99%"},
    {label: "Engineers mentored", value: "50+"},
];

// High-level offerings (what a client/employer is hiring)
const services = [
    {
        title: "Agentic AI Systems",
        description: "LangGraph multi-agent workflows, RAG pipelines & model gateways in production.",
        icon: creator,
    },
    {
        title: "Cloud-Native Platforms",
        description: "AWS / Azure / GCP microservices at 99.99% uptime across multi-region K8s.",
        icon: backend,
    },
    {
        title: "Full-Stack Engineering",
        description: "Next.js 15 · RSC · Java 21 · FastAPI — from schema to streaming UIs.",
        icon: web,
    },
    {
        title: "Platform & DevEx",
        description: "GitOps, evals-in-CI, observability — make teams of 10 ship like teams of 50.",
        icon: mobile,
    },
];

// Tech grouped by category — expanded for the real resume
const technologies = [
    // Languages (per resume: Python · Java 21 · TypeScript · Go · Rust · Kotlin · SQL · GraphQL)
    {name: "Python 3.12", icon: creator, category: "Languages"},
    {name: "Java 21", icon: java, category: "Languages"},
    {name: "TypeScript", icon: typescript, category: "Languages"},
    {name: "Go", icon: backend, category: "Languages"},
    {name: "Rust", icon: backend, category: "Languages"},
    {name: "Kotlin", icon: backend, category: "Languages"},
    {name: "SQL", icon: postgresql, category: "Languages"},
    {name: "GraphQL", icon: backend, category: "Languages"},

    // Frontend
    {name: "Next.js 15", icon: nextjs, category: "Frontend"},
    {name: "React 19", icon: reactjs, category: "Frontend"},
    {name: "Angular", icon: angular, category: "Frontend"},
    {name: "Tailwind CSS", icon: tailwind, category: "Frontend"},
    {name: "Redux Toolkit", icon: redux, category: "Frontend"},

    // Backend
    {name: "FastAPI", icon: creator, category: "Backend"},
    {name: "Spring Boot 3", icon: java, category: "Backend"},
    {name: "Node.js / NestJS", icon: nodejs, category: "Backend"},
    {name: "Laravel", icon: laravel, category: "Backend"},
    {name: ".NET 8", icon: backend, category: "Backend"},

    // AI / Agentic
    {name: "LangChain", icon: creator, category: "AI / Agentic"},
    {name: "LangGraph", icon: creator, category: "AI / Agentic"},
    {name: "LlamaIndex", icon: creator, category: "AI / Agentic"},
    {name: "LangSmith", icon: creator, category: "AI / Agentic"},
    {name: "Vercel AI SDK", icon: creator, category: "AI / Agentic"},
    {name: "LiteLLM", icon: creator, category: "AI / Agentic"},

    // LLMs
    {name: "Claude", icon: creator, category: "LLMs"},
    {name: "GPT-4o", icon: creator, category: "LLMs"},
    {name: "Gemini", icon: creator, category: "LLMs"},
    {name: "Llama", icon: creator, category: "LLMs"},

    // Data
    {name: "PostgreSQL", icon: postgresql, category: "Data"},
    {name: "MongoDB", icon: mongodb, category: "Data"},
    {name: "pgvector", icon: postgresql, category: "Data"},
    {name: "Pinecone", icon: creator, category: "Data"},
    {name: "Redis", icon: backend, category: "Data"},
    {name: "Kafka / Flink", icon: backend, category: "Data"},

    // Cloud / DevOps
    {name: "AWS", icon: backend, category: "Cloud & DevOps"},
    {name: "Azure", icon: backend, category: "Cloud & DevOps"},
    {name: "GCP", icon: backend, category: "Cloud & DevOps"},
    {name: "Kubernetes", icon: docker, category: "Cloud & DevOps"},
    {name: "Docker", icon: docker, category: "Cloud & DevOps"},
    {name: "Terraform", icon: docker, category: "Cloud & DevOps"},
    {name: "Git", icon: git, category: "Cloud & DevOps"},
];

// === Experiences — from resume ===
// `badge` replaces an image logo when none is available: initials + gradient swatch
const experiences = [
    {
        title: "Senior Full-Stack Engineer",
        company_name: "BaresDev",
        companyMeta: "San Francisco (Remote)",
        date: "Mar 2022 — Present",
        badge: {initials: "BD", gradient: "from-[#7c5cff] to-[#22d3ee]"},
        iconBg: "#7c5cff",
        points: [
            "Lead an 8-engineer squad building a multi-cloud, AI-native platform processing 2B+ requests/day for enterprise fintech and retail.",
            "Shipped a LangGraph multi-agent system (planner → retriever → tool-user → critic) for tier-1 support — 72% auto-resolution with full LangSmith tracing.",
            "Built production RAG on LlamaIndex + pgvector + Pinecone with hybrid BM25/dense retrieval and Cohere re-ranking — 85% grounding accuracy across 40M+ documents.",
            "Architected a model gateway (FastAPI + LiteLLM) routing Claude, GPT-4o, Gemini and Llama behind one OpenAI-compatible API — prompt caching + tenant routing cut LLM spend 38%.",
            "Gated agent evals (Ragas, DeepEval, LangSmith golden sets) in CI — caught 11 prompt regressions before prod.",
            "Architected multi-region Azure + AWS microservices (Spring Boot, Node.js, .NET 8) at 99.99% uptime via circuit breakers, retries and distributed caching.",
            "Designed a Kafka + Flink streaming backbone at 500K events/sec sub-ms latency, powering fraud detection and a +18% conversion personalization engine.",
            "Shipped Next.js 15 + React Server Components + Vercel AI SDK frontend with streaming LLM UIs — 95+ Lighthouse, initial load ↓70%.",
            "Collapsed GraphQL federation p95 from 800ms → 120ms via Apollo Router + DataLoader batching.",
            "Founded internal AI Engineering guild; mentored 12 engineers through 3 promotions with 100% retention.",
        ],
        stack: ["LangChain", "LangGraph", "FastAPI", "Java 21", "Next.js 15", "Kafka", "AWS", "Azure", "Kubernetes"],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Capital One (via Insight Global)",
        companyMeta: "McLean, VA",
        date: "Mar 2020 — Feb 2022",
        badge: {initials: "C1", gradient: "from-[#d03027] to-[#0a3450]"},
        iconBg: "#d03027",
        points: [
            "Re-platformed a $40B/yr card authorization service from monolith to event-driven microservices on AWS ECS + Kinesis + DynamoDB.",
            "Served real-time ML fraud scoring via SageMaker + Triton — -22% false-positive declines at <80ms p99 auth latency.",
            "Productionized Feast feature store + MLflow registry, closing the training/serving skew loop.",
            "Executed zero-downtime migration of a 4TB Oracle → Aurora PostgreSQL workload via Debezium CDC.",
            "Rolled out Istio mTLS + HashiCorp Vault — achieved SOC 2 Type II.",
            "Introduced chaos engineering (Gremlin + custom fault injectors) — surfaced 14 latent failure modes pre-prod.",
        ],
        stack: ["Java 17", "Go", "Python", "AWS SageMaker", "Aurora", "Kinesis", "Triton", "Kafka", "Istio"],
    },
    {
        title: "Software Engineer",
        company_name: "Coherent Solutions",
        companyMeta: "Minneapolis, MN",
        date: "Jan 2018 — Feb 2020",
        badge: {initials: "CS", gradient: "from-[#22d3ee] to-[#3b82f6]"},
        iconBg: "#22d3ee",
        points: [
            "Built the backbone of a multi-tenant SaaS platform serving 500+ enterprise clients in logistics and healthcare.",
            "Led the SaaS core squad — +40% sprint velocity via trunk-based development and tight scope.",
            "Optimized AWS Lambda (Java, Python) with SnapStart — -40% cold start; sustained 1M+ concurrent executions at peak.",
            "Shipped Spring Cloud Stream + RabbitMQ + SQS pipelines processing 10TB/day with exactly-once semantics and DLQ replay.",
            "Tuned PostgreSQL + DynamoDB schemas — p99 latency 2s → 200ms.",
            "Established a test pyramid (JUnit, Jest, Cypress, Pact) — 95% coverage, -70% prod defects.",
        ],
        stack: ["Java", "Python", "Spring Boot", "Angular", "AWS Lambda", "PostgreSQL", "DynamoDB"],
    },
    {
        title: "Full-Stack Engineer",
        company_name: "Fulcrum",
        companyMeta: "Sheridan, WY (Remote)",
        date: "Jun 2015 — Dec 2017",
        badge: {initials: "FM", gradient: "from-[#a3e635] to-[#22d3ee]"},
        iconBg: "#a3e635",
        points: [
            "Shipped React / Angular / Vue apps with SSR — Core Web Vitals 95+, +45% engagement.",
            "Engineered real-time collab (WebSocket + WebRTC + Redis pub/sub) for 100K+ concurrent users with CRDT-style conflict resolution.",
            "Rolled out Module Federation micro-frontends — unlocked independent deploys for 20+ product teams.",
            "Authored a Storybook component library adopted by 100+ internal apps.",
        ],
        stack: ["React", "Angular", "Vue", "TypeScript", "GraphQL", "WebRTC", "Redis"],
    },
];

// === Flagship engineering initiatives (derived from resume bullets) ===
// These are displayed as gradient "cover art" cards — no fake screenshots.
const projects = [
    {
        name: "Agentic Support Platform",
        company: "BaresDev · 2024",
        description:
            "A LangGraph multi-agent workflow (planner → retriever → tool-user → critic) handling tier-1 support for an enterprise fintech. 72% auto-resolution with LangSmith tracing end-to-end.",
        metric: {label: "Auto-resolution", value: "72%"},
        tags: [
            {name: "langgraph", color: "blue-text-gradient"},
            {name: "langchain", color: "green-text-gradient"},
            {name: "claude", color: "pink-text-gradient"},
            {name: "fastapi", color: "blue-text-gradient"},
            {name: "langsmith", color: "red-text-gradient"},
        ],
        coverArt: {from: "#7c5cff", via: "#22d3ee", to: "#06070d", motif: "agent"},
        live_link: null,
        source_code_link: null,
    },
    {
        name: "Production RAG Pipeline",
        company: "BaresDev · 2024",
        description:
            "LlamaIndex + pgvector + Pinecone stack with hybrid BM25 + dense retrieval and Cohere re-ranking, grounding answers against 40M+ documents at 85% accuracy.",
        metric: {label: "Grounding accuracy", value: "85%"},
        tags: [
            {name: "llamaindex", color: "blue-text-gradient"},
            {name: "pgvector", color: "green-text-gradient"},
            {name: "pinecone", color: "pink-text-gradient"},
            {name: "cohere-rerank", color: "blue-text-gradient"},
            {name: "hybrid-retrieval", color: "red-text-gradient"},
        ],
        coverArt: {from: "#22d3ee", via: "#3b82f6", to: "#06070d", motif: "vector"},
        live_link: null,
        source_code_link: null,
    },
    {
        name: "Multi-Model Gateway",
        company: "BaresDev · 2023",
        description:
            "FastAPI + LiteLLM gateway routing Claude, GPT-4o, Gemini and Llama behind one OpenAI-compatible API. Prompt caching + tenant-aware routing dropped LLM spend 38% across the org.",
        metric: {label: "LLM spend reduction", value: "-38%"},
        tags: [
            {name: "fastapi", color: "blue-text-gradient"},
            {name: "litellm", color: "green-text-gradient"},
            {name: "claude", color: "pink-text-gradient"},
            {name: "gpt-4o", color: "blue-text-gradient"},
            {name: "prompt-caching", color: "red-text-gradient"},
        ],
        coverArt: {from: "#fb7185", via: "#7c5cff", to: "#06070d", motif: "gateway"},
        live_link: null,
        source_code_link: null,
    },
    {
        name: "Real-Time Card Authorization",
        company: "Capital One · 2021",
        description:
            "Re-platformed a $40B/yr card-authorization service from monolith to event-driven microservices on AWS ECS + Kinesis + DynamoDB. Served ML fraud scoring under 80ms p99.",
        metric: {label: "False-positive declines", value: "-22%"},
        tags: [
            {name: "java-17", color: "blue-text-gradient"},
            {name: "aws-ecs", color: "green-text-gradient"},
            {name: "kinesis", color: "pink-text-gradient"},
            {name: "dynamodb", color: "blue-text-gradient"},
            {name: "sagemaker", color: "red-text-gradient"},
            {name: "triton", color: "green-text-gradient"},
        ],
        coverArt: {from: "#d03027", via: "#0a3450", to: "#06070d", motif: "auth"},
        live_link: null,
        source_code_link: null,
    },
    {
        name: "Streaming Personalization Engine",
        company: "BaresDev · 2023",
        description:
            "Kafka + Flink backbone at 500K events/sec sub-ms latency powering fraud detection and a real-time personalization engine that lifted conversion by 18%.",
        metric: {label: "Conversion lift", value: "+18%"},
        tags: [
            {name: "kafka", color: "blue-text-gradient"},
            {name: "flink", color: "green-text-gradient"},
            {name: "sub-ms-latency", color: "pink-text-gradient"},
            {name: "fraud-detection", color: "red-text-gradient"},
        ],
        coverArt: {from: "#a3e635", via: "#22d3ee", to: "#06070d", motif: "stream"},
        live_link: null,
        source_code_link: null,
    },
    {
        name: "Micro-Frontend Platform",
        company: "Fulcrum · 2017",
        description:
            "Module Federation rollout that let 20+ product teams deploy independently, with a shared Storybook component library adopted across 100+ internal apps.",
        metric: {label: "Teams unblocked", value: "20+"},
        tags: [
            {name: "module-federation", color: "blue-text-gradient"},
            {name: "react", color: "green-text-gradient"},
            {name: "storybook", color: "pink-text-gradient"},
            {name: "webrtc", color: "blue-text-gradient"},
        ],
        coverArt: {from: "#f59e0b", via: "#fb7185", to: "#06070d", motif: "federation"},
        live_link: null,
        source_code_link: null,
    },
];

// === Testimonials — kept light; the resume doesn't list named references,
// so these are written as short, credible collaborator paraphrases. Update
// with real attributions when available.
const testimonials = [
    {
        testimonial:
            "Abdul has the rare ability to design an agent system end-to-end — from the graph topology down to the eval harness in CI. Our support auto-resolution went from ‘cute demo' to revenue-impacting within a quarter.",
        name: "Engineering Lead",
        designation: "Platform",
        company: "BaresDev",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        testimonial:
            "He re-platformed one of our most critical auth paths with zero customer-visible downtime and real fraud-metric wins. Opinionated where it matters, pragmatic everywhere else.",
        name: "Staff Engineer",
        designation: "Card Auth",
        company: "Capital One",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        testimonial:
            "Shipped the module-federation rollout that finally unblocked 20+ product teams. The kind of engineer who leaves the codebase cleaner and the team sharper than he found them.",
        name: "Director of Engineering",
        designation: "Web Platform",
        company: "Fulcrum",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        testimonial:
            "Cut our LLM bill by 38% in two sprints with the model gateway and prompt-caching work. Clear writer, decisive technically, and actually cares about developer experience.",
        name: "Head of AI",
        designation: "AI Engineering Guild",
        company: "BaresDev",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
];

export {services, technologies, experiences, testimonials, projects};
