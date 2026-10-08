import Image from "next/image";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner reveal">
        <p className="section-label">01 — About</p>
        <div className="about-grid">
          <h2 className="section-title">
            Backend-first engineer,
            <br />
            now going deep on AI.
          </h2>
          <div className="about-body">
            <div className="about-avatar">
              <Image
                src="/portrait.jpg"
                alt="Portrait of Rajdeep Ghosh"
                fill
                sizes="120px"
              />
            </div>
            <p>
              I&apos;m Rajdeep, a backend-leaning full-stack engineer based in
              Kolkata, India, with 4+ years building production systems for B2C
              and B2B products — REST APIs, event-driven architecture,
              databases at scale, and secure auth systems serving real users.
            </p>
            <p>
              I&apos;m now specializing in RAG and agentic AI, applying the same
              rigor around reliability, data integrity, and performance to
              AI-powered tools for e-commerce brands — product Q&amp;A
              assistants, support automation, and personalized shopping
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
