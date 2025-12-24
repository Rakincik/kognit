"use client";

import Image from "next/image";
import Link from "next/link";

const BLOG_POSTS = [
    {
        id: 1,
        slug: "yks-son-3-ay",
        title: "YKS'ye Son 3 Ay Kala Netler Nasıl Artar?",
        category: "YKS Rehberlik",
        date: "24 Aralık 2024",
        excerpt: "Sınava az bir süre kala stratejik çalışarak netlerinizi ciddi oranda artırabilirsiniz. İşte derece öğrencilerinin uyguladığı taktikler...",
        image: "📚", // Emoji placeholder for now
        readTime: "5 dk okuma",
    },
    {
        id: 2,
        slug: "lgs-motivasyon",
        title: "LGS Maratonunda Motivasyonunu Kaybetme",
        category: "LGS Rehberlik",
        date: "20 Aralık 2024",
        excerpt: "8. sınıf öğrencileri için stres yönetimi ve odaklanma teknikleri. Sadece ders çalışmak yetmez, psikolojiyi de yönetmek gerek.",
        image: "🎯",
        readTime: "4 dk okuma",
    },
    {
        id: 3,
        slug: "verimli-ders-calisma",
        title: "Pomodoro Tekniği Gerçekten İşe Yarıyor mu?",
        category: "Çalışma Teknikleri",
        date: "15 Aralık 2024",
        excerpt: "Verimli ders çalışma teknikleri arasında en popüler olan Pomodoro'yu bilimsel açıdan inceledik. Kimler için uygun, kimler için değil?",
        image: "⏱️",
        readTime: "6 dk okuma",
    },
    {
        id: 4,
        slug: "sayisal-mi-ea-mi",
        title: "Sayısal mı Eşit Ağırlık mı? Alan Seçimi Rehberi",
        category: "Kariyer / Tercih",
        date: "10 Aralık 2024",
        excerpt: "Lise 10. sınıfların en büyük ikilemi. Hangi alanı seçmelisin? Geleceğin meslekleri hangi alanda?",
        image: "⚖️",
        readTime: "7 dk okuma",
    },
    {
        id: 5,
        slug: "paragraf-taktikleri",
        title: "TYT Türkçe: Paragraf Sorularını Çerez Niyetine Çözün",
        category: "Ders Taktikleri",
        date: "05 Aralık 2024",
        excerpt: "Paragraf sorularında hızlanmak ve hatasız çözmek için altın kurallar. Kitap okuma alışkanlığı ve soru çözüm teknikleri.",
        image: "📖",
        readTime: "5 dk okuma",
    },
    {
        id: 6,
        slug: "uyku-duzeni",
        title: "Sınav Öğrencisi İçin İdeal Uyku Düzeni",
        category: "Yaşam Tarzı",
        date: "01 Aralık 2024",
        excerpt: "Az uyumak marifet değil! Öğrenilen bilgilerin hafızaya atılması için uyku şart. Peki kaç saat uyumalı?",
        image: "🌙",
        readTime: "4 dk okuma",
    },
];

export default function BlogPage() {
    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            📝 BLOG & REHBERLİK
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Başarıya Giden Yolda <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pusulanız</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 650 }}>
                            Sınav taktikleri, motivasyon yazıları, ders çalışma teknikleri ve kariyer rehberliği.
                        </p>
                    </div>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="section" style={{ paddingTop: 20 }}>
                <div className="container">
                    <div className="grid-3">
                        {BLOG_POSTS.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                style={{ textDecoration: "none" }}
                            >
                                <article
                                    className="glass-card"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        backdropFilter: "blur(16px)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: 24,
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "transform 0.3s ease, border-color 0.3s ease",
                                        cursor: "pointer",
                                        height: "100%",
                                    }}
                                >
                                    <div style={{
                                        height: 200,
                                        background: "linear-gradient(135deg, rgba(200,162,200,0.2), rgba(253,253,150,0.1))",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "4rem",
                                    }}>
                                        {post.image}
                                    </div>

                                    <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: 12,
                                            fontSize: "0.85rem",
                                            color: "var(--lilac)",
                                            fontWeight: 600,
                                        }}>
                                            <span>{post.category}</span>
                                            <span style={{ color: "var(--gray-300)", fontWeight: 400 }}>{post.readTime}</span>
                                        </div>

                                        <h3 style={{
                                            fontSize: "1.25rem",
                                            marginBottom: 12,
                                            color: "var(--white)",
                                            lineHeight: 1.4,
                                        }}>
                                            {post.title}
                                        </h3>

                                        <p style={{
                                            color: "var(--gray-300)",
                                            fontSize: "0.95rem",
                                            lineHeight: 1.6,
                                            marginBottom: 20,
                                            flex: 1,
                                        }}>
                                            {post.excerpt}
                                        </p>

                                        <div style={{
                                            borderTop: "1px solid rgba(255,255,255,0.1)",
                                            paddingTop: 16,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            fontSize: "0.85rem",
                                            color: "var(--gray-400)",
                                        }}>
                                            <span>{post.date}</span>
                                            <span style={{ color: "var(--soft-yellow)", cursor: "pointer" }}>Devamını Oku →</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: 60 }}>
                        <button className="btn-secondary">
                            Daha Fazla Yükle
                        </button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    Kognita Akademi © {new Date().getFullYear()} — Tüm hakları saklıdır.
                </div>
            </footer>
        </main>
    );
}
