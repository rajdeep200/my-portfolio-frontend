const FOCUS = [
  {
    num: "01",
    title: "AI Assistants & RAG",
    body: "Product Q&A chatbots, support automation, and retrieval-augmented tools built on your own catalog and docs. My current focus area.",
  },
  {
    num: "02",
    title: "Backend Engineering",
    body: "APIs, databases, and event-driven systems designed to hold up under real traffic — not just demo well.",
  },
  {
    num: "03",
    title: "Performance & Reliability",
    body: "Latency optimization, zero-downtime deployments, and the observability to know your system is actually healthy.",
  },
];

export default function Focus() {
  return (
    <section className="section focus" id="focus">
      <div className="section-inner reveal">
        <p className="section-label">03 — What I Do</p>
        <h2 className="section-title">Where I can help</h2>
        <div className="focus-grid">
          {FOCUS.map((f) => (
            <div className="focus-card" key={f.num}>
              <span className="focus-num">{f.num}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
