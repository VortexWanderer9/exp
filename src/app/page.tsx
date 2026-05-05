export default function Home() {
  const books = [
    "The Trial",
    "White Nights",
    "Crime and Punishment",
    "Notes from Underground",
  ];

  const domains = [
    "Backend systems",
    "System design",
    "Operating systems",
    "Linux",
    "Cybersecurity",
    "Git and GitHub",
    "Vim",
    "Frontend tooling",
  ];

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-12">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="noise-layer" />

      <main className="scene relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 text-zinc-100">
        <section className="glass-panel p-8 md:p-12">
          <p className="tracking-[0.45em] text-xs uppercase text-zinc-400">
            Anonymous Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Elliot
          </h1>
          <p className="mt-3 text-zinc-300 text-lg md:text-xl">
            20 years old. Learning backend. Building from shadows and structure.
          </p>
          <p className="mt-6 max-w-3xl text-zinc-400 leading-relaxed">
            This space reflects a quiet observer mindset: less performance, more
            pattern recognition. Ideas are treated like systems, and systems are
            treated like stories with weak points, hidden assumptions, and
            strange beauty.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="glass-panel tilt-card p-6 md:p-8">
            <h2 className="text-xl font-medium text-zinc-100">Core Domains</h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              {domains.map((domain) => (
                <li key={domain} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {domain}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-panel tilt-card p-6 md:p-8">
            <h2 className="text-xl font-medium text-zinc-100">
              Reading and Reflection
            </h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              {books.map((book) => (
                <li key={book} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  {book}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              Philosophy and psychological fiction shape how I model conflict,
              ambiguity, and intent.
            </p>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="glass-panel perspective-panel p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Perspective
            </p>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              I zoom out by default, studying behavior in third-person layers:
              signal, motive, and consequence.
            </p>
          </article>
          <article className="glass-panel perspective-panel p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Principle
            </p>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              Trust is earned by consistency. Noise fades. Patterns remain.
            </p>
          </article>
          <article className="glass-panel perspective-panel p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Direction
            </p>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              Current focus: backend architecture, secure design choices, and
              tools that reward depth over spectacle.
            </p>
          </article>
        </section>

        <footer className="glass-panel p-5 text-center text-sm text-zinc-400">
          Built as a silent node on the web. No mask needed to stay anonymous.
        </footer>
      </main>
    </div>
  );
}
