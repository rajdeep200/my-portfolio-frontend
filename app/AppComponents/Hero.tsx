import HeroScene from "./HeroScene";

const STATS = [
  { num: "4+", label: "Years in production systems" },
  { num: "99.9%", label: "Uptime shipped at scale" },
  { num: "RAG", label: "& agents in production" },
  { num: "AWS", label: "Certified Developer" },
];

const delay = (s: number) => ({ animationDelay: `${s}s` });

export default function Hero() {
  return (
    <header className="hero" id="top">
      <HeroScene />
      <div className="hero-inner">
        <div className="badge reveal-load" style={delay(0.05)}>
          <span className="dot"></span>
          Open to remote &amp; international projects
        </div>
        <p className="eyebrow reveal-load" style={delay(0.1)}>
          Full-Stack, Backend &amp; AI Engineer
        </p>
        <h1 className="hero-title reveal-load" style={delay(0.15)}>
          Rajdeep Ghosh
        </h1>
        <p className="hero-tag reveal-load" style={delay(0.2)}>
          I build reliable backend systems — and I&apos;m now bringing that same
          engineering discipline to AI &amp; RAG tools for e-commerce.
        </p>
        <div className="hero-cta reveal-load" style={delay(0.25)}>
          <a href="#current" className="btn btn-primary">
            View my work →
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="stats reveal-load" style={delay(0.3)}>
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
