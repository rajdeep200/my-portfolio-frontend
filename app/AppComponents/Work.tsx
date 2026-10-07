const PROJECTS = [
  {
    title: "ZOLA — Data Migration & Re-platform",
    status: "Production",
    soon: false,
    body: "Led a 100K+ record migration (MongoDB → PostgreSQL) during a Strapi v3→v4 re-platform. Delivered in 45 days with under 5 minutes of downtime, zero data loss, and zero post-migration bugs — including schema design, idempotent ETL, and a verified rollback plan.",
    tags: ["PostgreSQL", "MongoDB", "ETL", "Zero-downtime"],
  },
  {
    title: "MockQube — AI Mock Interviewer",
    status: "Production",
    soon: false,
    body: "Voice-based, role & level-aware mock interview tool with automated rubric scoring and feedback. ~4.7/5 user satisfaction, ~25% lower LLM runtime cost through caching and batching, accessibility score raised 76 → 96.",
    tags: ["Next.js", "VAPI / LLM", "WebRTC", "Accessibility"],
  },
  {
    title: "DocQuest — Document Q&A / RAG",
    status: "In progress",
    soon: true,
    body: "A retrieval-augmented Q&A chatbot — my current build as I go deeper into RAG and agentic AI for e-commerce use cases.",
    tags: ["FastAPI", "OpenAI", "RAG"],
  },
];

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="section-inner reveal">
        <p className="section-label">04 — Selected Work</p>
        <h2 className="section-title">A few things I&apos;ve shipped</h2>
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <article
              className={`work-card${p.soon ? " work-card-soon" : ""}`}
              key={p.title}
            >
              <div className="work-head">
                <h3>{p.title}</h3>
                <span className={`tag-pill${p.soon ? " tag-pill-soon" : ""}`}>
                  {p.status}
                </span>
              </div>
              <p>{p.body}</p>
              <div className="work-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
