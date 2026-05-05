import Link from "next/link";
import { capabilities, philosophy, posts } from "@/lib/content";

export default function Home() {
  return (
    <main className="page-wrap">
      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Creative Engineering Portfolio</p>
          <h1>Building secure systems with cinematic user experience.</h1>
          <p>
            I design production-grade backends, resilient architectures, and
            interactive products where every pixel and process has intent.
          </p>
          <div className="cta-row">
            <Link href="/roadmap" className="btn btn-primary">
              View Learning Roadmap
            </Link>
            <Link href="/blog" className="btn btn-ghost">
              Read Blog
            </Link>
          </div>
        </div>
        <div className="hero-orbital" aria-hidden>
          <div className="ring ring-one" />
          <div className="ring ring-two" />
          <div className="core" />
        </div>
      </section>

      <section className="split-grid">
        <article className="card lift">
          <h2>Expertise Lens</h2>
          <ul className="list">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="card lift">
          <h2>Philosophy in Practice</h2>
          <ul className="list">
            {philosophy.map((quote) => (
              <li key={quote}>{quote}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <div className="section-head">
          <h2>Featured Writing</h2>
          <Link href="/blog" className="text-link">
            Explore all posts
          </Link>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              <p className="post-meta">
                {post.tag} · {post.readTime}
              </p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
