"use client";

import Image from "next/image";
import Link from "next/link";

const SUCCESS_STORIES = [
    {
        id: 1,
        name: "Elif K.",
        exam: "YKS 2024",
        result: "Türkiye 487.",
        university: "Bilkent Üniversitesi - Bilgisayar Mühendisliği",
        quote: "Kognita ile tanışmasaydım bu başarıyı elde edemezdim. Haftalık takip ve mentor desteği motivasyonumu hep yüksek tuttu.",
        avatar: "🎓",
        color: "var(--lilac)",
    },
    {
        id: 2,
        name: "Ahmet Y.",
        exam: "LGS 2024",
        result: "495 Net",
        university: "Galatasaray Lisesi",
        quote: "8. sınıfın en stresli döneminde Kognita koçlarım sayesinde hem moralimi yüksek tuttum hem de hedefime ulaştım.",
        avatar: "🏆",
        color: "var(--soft-yellow)",
    },
    {
        id: 3,
        name: "Zeynep M.",
        exam: "YKS 2023",
        result: "Türkiye 1.254",
        university: "ODTÜ - Elektrik Elektronik Mühendisliği",
        quote: "Deneme analizleri ve kişiye özel program sayesinde sürekli ilerledim. Artık ODTÜ'de hayalimi yaşıyorum!",
        avatar: "⭐",
        color: "var(--lilac)",
    },
    {
        id: 4,
        name: "Can B.",
        exam: "Üniversite Vize/Final",
        result: "3.78 GPA",
        university: "Koç Üniversitesi - İşletme",
        quote: "Final döneminde panik halindeyken Kognita'yı keşfettim. Tüm derslerimi yüksek notlarla geçtim.",
        avatar: "📚",
        color: "var(--soft-yellow)",
    },
    {
        id: 5,
        name: "Sude T.",
        exam: "YKS 2024",
        result: "Türkiye 892",
        university: "Boğaziçi Üniversitesi - Ekonomi",
        quote: "Eşit ağırlık puan türünde ilk 1000'e girmek zor değilmiş, doğru strateji ve takiple her şey mümkün!",
        avatar: "🌟",
        color: "var(--lilac)",
    },
    {
        id: 6,
        name: "Mert A.",
        exam: "LGS 2023",
        result: "490 Net",
        university: "İstanbul Erkek Lisesi",
        quote: "Koçumla haftalık görüşmeler yapıyorduk. Eksiklerimi hemen fark edip düzelttik. Sonuç ortada!",
        avatar: "🎯",
        color: "var(--soft-yellow)",
    },
];

export default function BasariHikayeleriPage() {
    const whatsappUrl = "https://wa.me/905555555555?text=Merhaba%2C%20Kognita%20Akademi%20hakkında%20bilgi%20almak%20istiyorum.";

    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            🏆 BAŞARI HİKAYELERİ
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Öğrencilerimizin <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Başarıları</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 650 }}>
                            Kognita Akademi ile hedeflerine ulaşan öğrencilerimizin gerçek hikayeleri.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <section className="section" style={{ paddingTop: 0, paddingBottom: 40 }}>
                <div className="container">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 48,
                        flexWrap: "wrap",
                        background: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 20,
                        padding: "28px 40px",
                        maxWidth: 800,
                        margin: "0 auto",
                    }}>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--lilac)" }}>150+</div>
                            <p style={{ color: "var(--gray-300)", fontSize: "0.9rem" }}>İlk 1000 Derecesi</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--soft-yellow)" }}>300+</div>
                            <p style={{ color: "var(--gray-300)", fontSize: "0.9rem" }}>Hedef Üniversite</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--lilac)" }}>%98</div>
                            <p style={{ color: "var(--gray-300)", fontSize: "0.9rem" }}>Başarı Oranı</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUCCESS STORIES GRID */}
            <section className="section" style={{ paddingTop: 20 }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: 28 }}>
                        {SUCCESS_STORIES.map((story) => (
                            <article
                                key={story.id}
                                style={{
                                    background: "rgba(255,255,255,0.06)",
                                    backdropFilter: "blur(16px)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: 24,
                                    padding: 28,
                                    transition: "all 0.3s ease",
                                }}
                                className="glass-card"
                            >
                                <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                                    <div style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: "50%",
                                        background: `${story.color}20`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.8rem",
                                        border: `2px solid ${story.color}40`,
                                    }}>
                                        {story.avatar}
                                    </div>
                                    <div>
                                        <h3 style={{ color: "var(--white)", fontSize: "1.1rem", marginBottom: 4 }}>{story.name}</h3>
                                        <p style={{ color: story.color, fontSize: "0.9rem", fontWeight: 600 }}>{story.exam} — {story.result}</p>
                                        <p style={{ color: "var(--gray-300)", fontSize: "0.85rem" }}>{story.university}</p>
                                    </div>
                                </div>
                                <blockquote style={{
                                    color: "var(--gray-300)",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.7,
                                    fontStyle: "italic",
                                    borderLeft: `3px solid ${story.color}`,
                                    paddingLeft: 16,
                                    margin: 0,
                                }}>
                                    "{story.quote}"
                                </blockquote>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container">
                    <h2 className="cta-title">Sen de bu başarı hikayelerinden biri olmak ister misin?</h2>
                    <p className="cta-text">Hemen bizimle iletişime geç, sana özel planını oluşturalım.</p>
                    <a href={whatsappUrl} className="btn-primary" target="_blank" rel="noreferrer">
                        📲 WhatsApp'tan Hemen Yaz
                    </a>
                </div>
            </section>

            <footer>
                <div className="container">
                    Kognita Akademi © {new Date().getFullYear()} — Tüm hakları saklıdır.
                </div>
            </footer>

            {/* FLOATING WHATSAPP */}
            <a href={whatsappUrl} className="floating-whatsapp" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
        </main>
    );
}
