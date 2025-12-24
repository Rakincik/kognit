import type { Metadata } from "next";
import { BLOG_POSTS_DATA } from "../../data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = BLOG_POSTS_DATA[params.slug];
    if (!post) return { title: "Yazı Bulunamadı" };

    return {
        title: `${post.title} | Kognita Akademi Blog`,
        description: post.content.replace(/<[^>]*>?/gm, '').substring(0, 160) + "...",
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS_DATA[params.slug];
    const whatsappUrl = "https://wa.me/905555555555?text=Merhaba%2C%20blog%20yaz%C4%B1n%C4%B1z%C4%B1%20okudum%20ve%20dan%C4%B1%C5%9Fmak%20istiyorum.";

    if (!post) {
        notFound();
    }

    return (
        <main>
            {/* HERO IMAGE & TITLE */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 140, paddingBottom: 60 }}>
                <div className="container">
                    <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                        <span style={{
                            display: "inline-block",
                            background: "rgba(200,162,200,0.2)",
                            color: "var(--lilac)",
                            padding: "6px 16px",
                            borderRadius: 20,
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            marginBottom: 20
                        }}>
                            {post.category}
                        </span>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: 20 }}>
                            {post.title}
                        </h1>
                        <div style={{ color: "var(--gray-300)", fontSize: "1rem" }}>
                            📅 {post.date} &nbsp;•&nbsp; ✍️ Kognita Rehberlik Servisi
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <article
                        className="blog-content glass-card"
                        style={{
                            maxWidth: 800,
                            margin: "0 auto",
                            padding: "40px",
                            background: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(16px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 24,
                        }}
                    >
                        <div style={{ fontSize: "5rem", textAlign: "center", marginBottom: 40 }}>
                            {post.image}
                        </div>

                        {/* Using dangerouslySetInnerHTML carefully as content is from our own data file */}
                        <div
                            style={{
                                color: "var(--gray-300)",
                                lineHeight: 1.8,
                                fontSize: "1.1rem"
                            }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div style={{ marginTop: 60, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 40, textAlign: "center" }}>
                            <h3 style={{ color: "var(--white)", marginBottom: 16 }}>Bu yazı faydalı oldu mu?</h3>
                            <p style={{ marginBottom: 24 }}>Daha fazla kişiye özel taktik ve rehberlik için bizimle iletişime geç.</p>
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
                                🚀 Ücretsiz Analiz Talep Et
                            </a>
                        </div>
                    </article>

                    <div style={{ textAlign: "center", marginTop: 40 }}>
                        <Link href="/blog" className="btn-secondary">
                            ← Tüm Yazılara Dön
                        </Link>
                    </div>
                </div>
            </section>

            {/* CUSTOM CSS FOR BLOG CONTENT */}
            <style jsx global>{`
        .blog-content h2 {
          color: var(--white);
          font-size: 1.8rem;
          margin-top: 40px;
          margin-bottom: 20px;
        }
        .blog-content h3 {
          color: var(--lilac);
          font-size: 1.4rem;
          margin-top: 30px;
          margin-bottom: 16px;
        }
        .blog-content p {
          margin-bottom: 20px;
        }
        .blog-content ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        .blog-content li {
          margin-bottom: 8px;
        }
        .blog-content strong {
          color: var(--white);
        }
        .blog-content blockquote {
          border-left: 4px solid var(--soft-yellow);
          padding-left: 20px;
          margin: 40px 0;
          font-style: italic;
          color: var(--white);
          font-size: 1.2rem;
          background: rgba(253,253,150,0.1);
          padding: 20px;
          border-radius: 8px;
        }
      `}</style>

            <footer>
                <div className="container">
                    Kognita Akademi © {new Date().getFullYear()} — Tüm hakları saklıdır.
                </div>
            </footer>
        </main>
    );
}
