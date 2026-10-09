import {
  siTypescript,
  siJavascript,
  siPython,
  siNodedotjs,
  siExpress,
  siNestjs,
  siFastapi,
  siPostgresql,
  siMysql,
  siMongodb,
  siRedis,
  siDocker,
  siGithubactions,
  siReact,
  siNextdotjs,
  siTailwindcss,
  type SimpleIcon,
} from "simple-icons";

type Tech = { name: string; icon?: SimpleIcon };

// Entries without an `icon` render as plain text on purpose: simple-icons has no
// clean logo for AWS, Azure or OpenAI, and "REST / OpenAPI", "RAG pipelines" and
// "Agentic workflows" are concepts rather than brands.
const GROUPS: { title: string; note?: string; items: Tech[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "Python", icon: siPython },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express", icon: siExpress },
      { name: "NestJS", icon: siNestjs },
      { name: "FastAPI", icon: siFastapi },
      { name: "REST / OpenAPI" },
    ],
  },
  {
    title: "Data",
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: siMysql },
      { name: "MongoDB", icon: siMongodb },
      { name: "Redis", icon: siRedis },
      { name: "pgvector" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Docker", icon: siDocker },
      { name: "GitHub Actions", icon: siGithubactions },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Tailwind", icon: siTailwindcss },
    ],
  },
  {
    title: "AI / RAG",
    items: [
      { name: "OpenAI API" },
      { name: "Embeddings" },
      { name: "Vector search" },
      { name: "RAG & Advanced RAG" },
      { name: "Tool calling" },
      { name: "MCP" },
      { name: "AI agents" },
      { name: "LLM evaluation" },
      { name: "Guardrails & observability" },
    ],
  },
];

export default function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="section-inner reveal">
        <p className="section-label">05 — Tech Stack</p>
        <h2 className="section-title">Tools I reach for</h2>
        <div className="stack-grid">
          {GROUPS.map((g) => (
            <div className="stack-group" key={g.title}>
              <h4>
                {g.title}
                {g.note && (
                  <>
                    {" "}
                    <span className="muted-label">{g.note}</span>
                  </>
                )}
              </h4>
              <div className="stack-tags">
                {g.items.map((t) =>
                  t.icon ? (
                    <span className="tag-icon" key={t.name}>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={t.icon.path} />
                      </svg>
                      {t.name}
                    </span>
                  ) : (
                    <span key={t.name}>{t.name}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
