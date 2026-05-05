import type { Metadata } from "next";
import { roadmap } from "@/lib/content";

export const metadata: Metadata = {
  title: "Roadmap | Elliot Architect",
  description:
    "A structured roadmap to become a high-impact engineer in backend, systems design, and cybersecurity.",
};

export default function RoadmapPage() {
  return (
    <main className="page-wrap">
      <section className="card">
        <p className="eyebrow">Learning System</p>
        <h1 className="page-title">Engineering Roadmap</h1>
        <p className="page-subtitle">
          A practical path to move from fundamentals to production architecture
          and leadership-level engineering execution.
        </p>
      </section>

      <section className="timeline">
        {roadmap.map((step) => (
          <article key={step.phase} className="card timeline-item lift">
            <div className="timeline-head">
              <h2>{step.phase}</h2>
              <span>{step.duration}</span>
            </div>
            <ul className="list">
              {step.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
