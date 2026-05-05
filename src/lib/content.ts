export const capabilities = [
  "System design and distributed architecture",
  "Backend development in Go, Rust, and Node.js",
  "Low-level thinking with C/C++ fundamentals",
  "Cybersecurity mindset and secure design reviews",
  "Cloud-native delivery, CI/CD, and observability",
  "Technical leadership with product execution",
];

export const philosophy = [
  "Technology is ethics made executable.",
  "Simplicity is not less power; it is controlled power.",
  "Architecture is applied philosophy under constraints.",
];

export const posts = [
  {
    slug: "zero-trust-for-startups",
    title: "Zero-Trust for Startups: Security Without Slowing Delivery",
    excerpt:
      "A practical system for introducing authentication boundaries, service-level trust contracts, and auditability from day one.",
    tag: "Cybersecurity",
    readTime: "8 min",
  },
  {
    slug: "event-driven-at-scale",
    title: "Event-Driven Systems That Stay Debuggable",
    excerpt:
      "How to keep asynchronous architectures observable with trace context, idempotent handlers, and replay-safe workflows.",
    tag: "System Design",
    readTime: "10 min",
  },
  {
    slug: "rust-for-critical-paths",
    title: "Using Rust for Critical Paths in Polyglot Backends",
    excerpt:
      "Choosing where Rust creates leverage, and where Go or TypeScript keeps teams productive for fast product iteration.",
    tag: "Backend",
    readTime: "7 min",
  },
];

export const roadmap = [
  {
    phase: "Phase 1 - Engineering Foundations",
    duration: "8 weeks",
    goals: [
      "Master Linux, Git, shell scripting, networking basics, and HTTP internals.",
      "Build strong CS fundamentals: data structures, algorithms, memory, and concurrency.",
      "Write production-quality code in one high-level language and one systems language.",
    ],
  },
  {
    phase: "Phase 2 - Backend and Systems Design",
    duration: "12 weeks",
    goals: [
      "Design APIs with versioning, idempotency, and authentication by default.",
      "Learn relational and NoSQL data modeling, indexing, and performance tuning.",
      "Practice distributed systems: queues, caching, consistency, retries, and failure modes.",
    ],
  },
  {
    phase: "Phase 3 - Security and Reliability",
    duration: "10 weeks",
    goals: [
      "Apply threat modeling, encryption basics, secrets handling, and secure coding patterns.",
      "Implement observability: logs, metrics, traces, and SLO-driven alerting.",
      "Run incident response drills and postmortems with actionable prevention items.",
    ],
  },
  {
    phase: "Phase 4 - Craft, Leadership, and Shipping",
    duration: "Ongoing",
    goals: [
      "Build public projects that demonstrate architecture decisions, not only UI polish.",
      "Write technical essays that teach trade-offs and decision frameworks.",
      "Mentor others and improve systems through clear communication and ownership.",
    ],
  },
];
