const IMPACT_STATS = [
  { num: "210", label: "Merged PRs" },
  { num: "21", label: "Repositories touched" },
  { num: "1,006", label: "Commits shipped" },
  { num: "27.9K", label: "Lines added" },
  { num: "61", label: "PRs reviewed" },
];

const IMPACT_CARDS = [
  {
    title: "Reports & Service Review Redesign",
    body: "Migrated 11 report-viewer chart/table renderers off raw D3/Bootstrap onto a shared design system, then resolved roughly a dozen export and data-correctness defects across UI and API.",
    tags: ["Vue 3", "D3", "Python / Flask"],
  },
  {
    title: "Cross-Service Data Bug",
    body: "Traced a site-name resolution bug across four backend services, replacing a brittle dependency with a direct database lookup — fixing broken reports for multi-site accounts.",
    tags: ["Python", "PostgreSQL", "Root-cause debugging"],
  },
  {
    title: "Bulk File Operations",
    body: "Built bulk download/delete end-to-end — a single presigned-URL endpoint with per-file permission checks, partial-failure handling, and configurable batch limits — replacing one-at-a-time downloads.",
    tags: ["REST API", "S3", "Batch processing"],
  },
  {
    title: "Automated Service Offboarding",
    body: "Replaced a manual deprovisioning process with an automated termination workflow — a new microservice endpoint, orchestration logic, and UI guardrails.",
    tags: ["Go", "Microservices", "Workflow automation"],
  },
];

export default function CurrentEngagement() {
  return (
    <section className="section impact" id="current">
      <div className="section-inner reveal">
        <p className="section-label">02 — Current Engagement</p>
        <h2 className="section-title">Shipping production features for eSentire</h2>
        <p className="impact-intro">
          I&apos;m currently embedded on the Customer Portal team at{" "}
          <strong>eSentire</strong>, an enterprise cybersecurity SaaS platform.
          Over the past 12 months:
        </p>
        <div className="impact-stats">
          {IMPACT_STATS.map((s) => (
            <div className="impact-stat" key={s.label}>
              <span className="impact-num">{s.num}</span>
              <span className="impact-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="impact-grid">
          {IMPACT_CARDS.map((c) => (
            <div className="impact-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="work-tags">
                {c.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
