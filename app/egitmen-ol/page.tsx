"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EgitmenOlPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        university: "",
        department: "",
        examScore: "",
        experience: "",
        motivation: "",
    });

    const whatsappUrl =
        "https://wa.me/905555555555?text=Merhaba%2C%20Kognita%20Akademi'de%20eğitmen%20olmak%20istiyorum.";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic - WhatsApp'a yönlendir
        window.open(whatsappUrl, "_blank");
    };

    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            🎓 KOGNİTA AİLESİNE KATIL
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Bilgini Paylaş, <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Geleceği Şekillendir</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 650 }}>
                            Türkiye derecesi yapmış, deneyimli bir öğrenciysen ve bilgini genç nesillere aktarmak istiyorsan,
                            Kognita Akademi ekibine katıl!
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="section" style={{ paddingTop: 40 }}>
                <div className="container">
                    <div className="grid-3">
                        <div className="info-card">
                            <h3>💰 Esnek Kazanç</h3>
                            <p>Kendi programına göre çalış, saatlik ücretini sen belirle. Öğrenci sayın arttıkça kazancın da artar.</p>
                        </div>
                        <div className="info-card">
                            <h3>📚 Deneyim Kazan</h3>
                            <p>Mentorluk yaparak liderlik ve iletişim becerilerini geliştir. Özgeçmişine değer kat.</p>
                        </div>
                        <div className="info-card">
                            <h3>🌟 Fark Yarat</h3>
                            <p>Hayallere ulaşmak isteyen öğrencilere rehberlik et. Gerçek bir etki bırak.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REQUIREMENTS */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Kimler Başvurabilir?</h2>
                    </div>
                    <div className="grid-2" style={{ maxWidth: 800, margin: "0 auto" }}>
                        <div className="info-card">
                            <h3>✅ YKS/LGS Derecesi</h3>
                            <p>Türkiye sıralamasında ilk 1000'de yer almış veya yüksek puan almış olmak.</p>
                        </div>
                        <div className="info-card">
                            <h3>✅ Üniversite Öğrencisi/Mezun</h3>
                            <p>Aktif üniversite öğrencisi veya mezun olmak.</p>
                        </div>
                        <div className="info-card">
                            <h3>✅ İletişim Becerisi</h3>
                            <p>Öğrencilerle etkili iletişim kurabilmek ve sabırlı olmak.</p>
                        </div>
                        <div className="info-card">
                            <h3>✅ Sorumluluk Bilinci</h3>
                            <p>Düzenli takip ve geri bildirim verebilme yeteneği.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* APPLICATION FORM */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Başvuru Formu</h2>
                        <p className="section-subtitle">
                            Aşağıdaki formu doldur, seni en kısa sürede arayalım.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        style={{
                            maxWidth: 600,
                            margin: "0 auto",
                            background: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(16px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 28,
                            padding: 40,
                        }}
                    >
                        <div style={{ display: "grid", gap: 20 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <div>
                                    <label style={{ display: "block", marginBottom: 8, color: "var(--gray-300)", fontSize: "0.9rem" }}>
                                        Ad Soyad *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(200,162,200,0.3)",
                                            background: "rgba(255,255,255,0.05)",
                                            color: "var(--white)",
                                            fontSize: "1rem",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: 8, color: "var(--gray-300)", fontSize: "0.9rem" }}>
                                        Telefon *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(200,162,200,0.3)",
                                            background: "rgba(255,255,255,0.05)",
                                            color: "var(--white)",
                                            fontSize: "1rem",
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: "block", marginBottom: 8, color: "var(--gray-300)", fontSize: "0.9rem" }}>
                                    E-posta *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        width: "100%",
                                        padding: "14px 18px",
                                        borderRadius: 12,
                                        border: "1px solid rgba(200,162,200,0.3)",
                                        background: "rgba(255,255,255,0.05)",
                                        color: "var(--white)",
                                        fontSize: "1rem",
                                    }}
                                />
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <div>
                                    <label style={{ display: "block", marginBottom: 8, color: "var(--gray-300)", fontSize: "0.9rem" }}>
                                        Üniversite
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.university}
                                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(200,162,200,0.3)",
                                            background: "rgba(255,255,255,0.05)",
                                            color: "var(--white)",
                                            fontSize: "1rem",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: 8, color: "var(--gray-300)", fontSize: "0.9rem" }}>
                                        Bölüm
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.department}
                                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(200,162,200,0.3)",
                                            background: "rgba(255,255,255,0.05)",
                                            color: "var(--white)",
                                            fontSize: "1rem",
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: "block", marginBottom: 8, color: "var(--gray-300)", fontSize: "0.9rem" }}>
                                    Sınav Puanı / Derecesi
                                </label>
                                <input
                                    type="text"
                                    placeholder="Örn: YKS 2023 - Türkiye 487."
                                    value={formData.examScore}
                                    onChange={(e) => setFormData({ ...formData, examScore: e.target.value })}
                                    style={{
                                        width: "100%",
                                        padding: "14px 18px",
                                        borderRadius: 12,
                                        border: "1px solid rgba(200,162,200,0.3)",
                                        background: "rgba(255,255,255,0.05)",
                                        color: "var(--white)",
                                        fontSize: "1rem",
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: "block", marginBottom: 8, color: "var(--gray-300)", fontSize: "0.9rem" }}>
                                    Neden Kognita'da eğitmen olmak istiyorsun?
                                </label>
                                <textarea
                                    rows={4}
                                    value={formData.motivation}
                                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                                    style={{
                                        width: "100%",
                                        padding: "14px 18px",
                                        borderRadius: 12,
                                        border: "1px solid rgba(200,162,200,0.3)",
                                        background: "rgba(255,255,255,0.05)",
                                        color: "var(--white)",
                                        fontSize: "1rem",
                                        resize: "vertical",
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: "100%", padding: "16px 28px", marginTop: 8 }}>
                                🚀 Başvuruyu Gönder
                            </button>
                        </div>
                    </form>
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
