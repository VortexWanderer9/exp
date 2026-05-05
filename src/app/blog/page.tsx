import type { Metadata } from "next";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Elliot Architect",
  description:
    "Essays on system design, backend engineering, cybersecurity, and technical leadership.",
};

export default function BlogPage() {
  return (
    <main className="page-wrap">
      <section className="card">
        <p className="eyebrow">Technical Essays</p>
        <h1 className="page-title">Blog</h1>
        <p className="page-subtitle">
          Long-form writing focused on architecture decisions, secure defaults,
          and engineering trade-offs in real systems.
        </p>
      </section>

      <section className="post-stack">
        {posts.map((post) => (
          <article key={post.slug} className="card post-item lift">
            <p className="post-meta">
              {post.tag} · {post.readTime}
            </p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
