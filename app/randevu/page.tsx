"use client";

import Link from "next/link";
import { useState } from "react";

const DAYS = [
    { day: "Pzt", date: "25 Ara" },
    { day: "Sal", date: "26 Ara" },
    { day: "Çar", date: "27 Ara" },
    { day: "Per", date: "28 Ara" },
    { day: "Cum", date: "29 Ara" },
];

const HOURS = [
    "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "19:00", "20:00"
];

export default function RandevuPage() {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedHour, setSelectedHour] = useState<string | null>(null);
    const [formStep, setFormStep] = useState(1); // 1: Time Selection, 2: Info Form, 3: Success

    const whatsappUrl =
        "https://wa.me/905555555555?text=Merhaba%2C%20randevu%20oluşturmak%20istiyorum.";

    const handleBook = () => {
        // In a real app, this would submit to backend.
        setFormStep(3);
    };

    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            📅 AKILLI RANDEVU SİSTEMİ
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Ücretsiz Analiz <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Randevusu Al</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 650 }}>
                            Müsait olduğun gün ve saati seç, uzman koçlarımız seni arayıp
                            seviye analizi ve yol haritası planlamasını yapsın.
                        </p>
                    </div>
                </div>
            </section>

            {/* APPOINTMENT WIDGET */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{
                        maxWidth: 800,
                        margin: "0 auto",
                        background: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 28,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 500,
                    }}>

                        {/* STEPS INDICATOR */}
                        <div style={{
                            display: "flex",
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                            background: "rgba(0,0,0,0.2)",
                        }}>
                            <div style={{ flex: 1, padding: 16, textAlign: "center", color: formStep >= 1 ? "var(--lilac)" : "var(--gray-400)", fontWeight: 600 }}>
                                1. Zaman Seçimi
                            </div>
                            <div style={{ flex: 1, padding: 16, textAlign: "center", color: formStep >= 2 ? "var(--lilac)" : "var(--gray-400)", fontWeight: 600 }}>
                                2. Bilgiler
                            </div>
                            <div style={{ flex: 1, padding: 16, textAlign: "center", color: formStep >= 3 ? "var(--lilac)" : "var(--gray-400)", fontWeight: 600 }}>
                                3. Onay
                            </div>
                        </div>

                        {/* STEP 1: TIME SELECTION */}
                        {formStep === 1 && (
                            <div style={{ padding: 40, flex: 1 }}>
                                <h3 style={{ marginBottom: 24, fontSize: "1.2rem" }}>Bir Tarih Seçin:</h3>
                                <div style={{ display: "flex", gap: 12, marginBottom: 32, overflowX: "auto", paddingBottom: 8 }}>
                                    {DAYS.map((d, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedDay(index)}
                                            style={{
                                                padding: "16px 24px",
                                                borderRadius: 16,
                                                background: selectedDay === index ? "var(--lilac)" : "rgba(255,255,255,0.05)",
                                                border: selectedDay === index ? "1px solid var(--lilac)" : "1px solid rgba(255,255,255,0.1)",
                                                color: selectedDay === index ? "#fff" : "var(--gray-300)",
                                                cursor: "pointer",
                                                transition: "all 0.2s",
                                                minWidth: 100,
                                                textAlign: "center",
                                            }}
                                        >
                                            <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>{d.day}</div>
                                            <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{d.date}</div>
                                        </button>
                                    ))}
                                </div>

                                {selectedDay !== null && (
                                    <div className="fade-in">
                                        <h3 style={{ marginBottom: 24, fontSize: "1.2rem" }}>Bir Saat Seçin:</h3>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: 12 }}>
                                            {HOURS.map((h) => (
                                                <button
                                                    key={h}
                                                    onClick={() => setSelectedHour(h)}
                                                    style={{
                                                        padding: "12px",
                                                        borderRadius: 12,
                                                        background: selectedHour === h ? "var(--soft-yellow)" : "rgba(255,255,255,0.05)",
                                                        border: selectedHour === h ? "1px solid var(--soft-yellow)" : "1px solid rgba(255,255,255,0.1)",
                                                        color: selectedHour === h ? "#000" : "var(--white)",
                                                        cursor: "pointer",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {h}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div style={{ marginTop: 40, textAlign: "right" }}>
                                    <button
                                        disabled={selectedDay === null || selectedHour === null}
                                        onClick={() => setFormStep(2)}
                                        className="btn-primary"
                                        style={{ opacity: (selectedDay === null || selectedHour === null) ? 0.5 : 1 }}
                                    >
                                        Devam Et →
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: INFO FORM */}
                        {formStep === 2 && (
                            <div style={{ padding: 40, flex: 1 }}>
                                <h3 style={{ marginBottom: 24, fontSize: "1.2rem" }}>İletişim Bilgileri:</h3>
                                <div style={{ display: "grid", gap: 20 }}>
                                    <input
                                        type="text"
                                        placeholder="Adınız Soyadınız"
                                        style={{
                                            width: "100%",
                                            padding: "16px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            background: "rgba(255,255,255,0.05)",
                                            color: "var(--white)",
                                        }}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Telefon Numaranız"
                                        style={{
                                            width: "100%",
                                            padding: "16px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            background: "rgba(255,255,255,0.05)",
                                            color: "var(--white)",
                                        }}
                                    />
                                    <select
                                        style={{
                                            width: "100%",
                                            padding: "16px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            background: "#1a1030",
                                            color: "var(--white)",
                                        }}
                                    >
                                        <option>Sınıfınız Seçin</option>
                                        <option>8. Sınıf (LGS)</option>
                                        <option>11. Sınıf (YKS Hazırlık)</option>
                                        <option>12. Sınıf (YKS)</option>
                                        <option>Mezun</option>
                                        <option>Üniversite Lisans</option>
                                    </select>
                                </div>

                                <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between" }}>
                                    <button
                                        onClick={() => setFormStep(1)}
                                        className="btn-secondary"
                                    >
                                        ← Geri
                                    </button>
                                    <button
                                        onClick={handleBook}
                                        className="btn-primary"
                                    >
                                        Randevuyu Onayla ✅
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: SUCCESS */}
                        {formStep === 3 && (
                            <div style={{ padding: 60, flex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ fontSize: "4rem", marginBottom: 20 }}>🎉</div>
                                <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>Randevunuz Alındı!</h2>
                                <p style={{ color: "var(--gray-300)", marginBottom: 32, maxWidth: 400 }}>
                                    Seçtiğiniz tarihte eğitim danışmanımız sizi arayacaktır.
                                    Şimdiden Kognita ailesine hoş geldiniz!
                                </p>
                                <div style={{ padding: "16px 24px", background: "rgba(255,255,255,0.05)", borderRadius: 12, marginBottom: 32 }}>
                                    🗓️ {DAYS[selectedDay!].day} {DAYS[selectedDay!].date} - ⏰ {selectedHour}
                                </div>
                                <Link href="/" className="btn-secondary">
                                    Anasayfaya Dön
                                </Link>
                            </div>
                        )}

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
