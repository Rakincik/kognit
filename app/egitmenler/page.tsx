"use client";

import { useState } from "react";

const INSTRUCTORS = [
    {
        id: 1,
        name: "Emir K.",
        university: "Boğaziçi Üniversitesi",
        department: "Bilgisayar Mühendisliği",
        rank: "Türkiye 48.si",
        subjects: ["Matematik", "Geometri", "Fizik"],
        exam: "YKS",
        image: "👨‍💻",
    },
    {
        id: 2,
        name: "Ceren S.",
        university: "Koç Üniversitesi",
        department: "Psikoloji",
        rank: "Türkiye 150.si",
        subjects: ["Türkçe", "Edebiyat", "Rehberlik"],
        exam: "YKS (EA)",
        image: "👩‍🏫",
    },
    {
        id: 3,
        name: "Burak Y.",
        university: "ODTÜ",
        department: "Makine Mühendisliği",
        rank: "Türkiye 600.sü",
        subjects: ["Fizik", "Kimya", "Matematik"],
        exam: "YKS",
        image: "🚀",
    },
    {
        id: 4,
        name: "Ayşe M.",
        university: "Galatasaray Üniversitesi",
        department: "Hukuk",
        rank: "Türkiye 90.sı",
        subjects: ["Tarih", "Coğrafya", "Felsefe"],
        exam: "YKS (EA)",
        image: "⚖️",
    },
    {
        id: 5,
        name: "Mehmet T.",
        university: "İstanbul Teknik Üniversitesi",
        department: "Endüstri Mühendisliği",
        rank: "Türkiye 800.sü",
        subjects: ["LGS Matematik", "LGS Fen"],
        exam: "LGS",
        image: "📈",
    },
    {
        id: 6,
        name: "Zeynep K.",
        university: "Cerrahpaşa Tıp",
        department: "Tıp Fakültesi",
        rank: "Türkiye 210.su",
        subjects: ["Biyoloji", "Kimya"],
        exam: "YKS",
        image: "🩺",
    },
];

export default function EgitmenlerPage() {
    const [filterExam, setFilterExam] = useState<"Tümü" | "YKS" | "LGS">("Tümü");
    const [filterSubject, setFilterSubject] = useState<string>("Tümü");

    const filteredInstructors = INSTRUCTORS.filter((inst) => {
        const examMatch = filterExam === "Tümü" || inst.exam.includes(filterExam);
        const subjectMatch = filterSubject === "Tümü" || inst.subjects.includes(filterSubject);
        return examMatch && subjectMatch;
    });

    const allSubjects = Array.from(new Set(INSTRUCTORS.flatMap((i) => i.subjects)));

    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            🎓 MENTOR KADROSU
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Türkiye'nin En İyi <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Derece Öğrencileri</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 650 }}>
                            Sınav yolculuğunda sana rehberlik edecek doğru mentoru bul.
                        </p>
                    </div>
                </div>
            </section>

            {/* FILTER BAR */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{
                        background: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 16,
                        padding: 20,
                        display: "flex",
                        gap: 20,
                        flexWrap: "wrap",
                        alignItems: "center",
                        marginBottom: 40,
                    }}>
                        <span style={{ color: "var(--gray-300)", fontWeight: 600 }}>🔍 Filtrele:</span>

                        <button
                            onClick={() => setFilterExam("Tümü")}
                            className={filterExam === "Tümü" ? "filter-btn active" : "filter-btn"}
                            style={filterStyle(filterExam === "Tümü")}
                        >
                            Tümü
                        </button>
                        <button
                            onClick={() => setFilterExam("YKS")}
                            className={filterExam === "YKS" ? "filter-btn active" : "filter-btn"}
                            style={filterStyle(filterExam === "YKS")}
                        >
                            YKS (TYT/AYT)
                        </button>
                        <button
                            onClick={() => setFilterExam("LGS")}
                            className={filterExam === "LGS" ? "filter-btn active" : "filter-btn"}
                            style={filterStyle(filterExam === "LGS")}
                        >
                            LGS
                        </button>

                        <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)", margin: "0 10px" }} />

                        <select
                            value={filterSubject}
                            onChange={(e) => setFilterSubject(e.target.value)}
                            style={{
                                padding: "8px 16px",
                                borderRadius: 8,
                                background: "rgba(0,0,0,0.3)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                color: "var(--white)",
                                fontSize: "0.9rem",
                            }}
                        >
                            <option value="Tümü">Tüm Dersler</option>
                            {allSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    {/* INSTRUCTORS GRID */}
                    <div className="grid-3">
                        {filteredInstructors.map((inst) => (
                            <div
                                key={inst.id}
                                className="glass-card"
                                style={{
                                    background: "rgba(255,255,255,0.06)",
                                    backdropFilter: "blur(16px)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: 24,
                                    padding: 24,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <div style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, var(--lilac), var(--deep-purple))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "2.5rem",
                                    marginBottom: 16,
                                    border: "3px solid rgba(255,255,255,0.2)",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                                }}>
                                    {inst.image}
                                </div>

                                <h3 style={{ color: "var(--white)", fontSize: "1.25rem", marginBottom: 4 }}>
                                    {inst.name}
                                </h3>
                                <p style={{ color: "var(--lilac)", fontWeight: 700, fontSize: "0.9rem", marginBottom: 8 }}>
                                    {inst.rank}
                                </p>
                                <p style={{ color: "var(--gray-300)", fontSize: "0.9rem", marginBottom: 16 }}>
                                    {inst.university}<br />
                                    <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>{inst.department}</span>
                                </p>

                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, marginBottom: 20 }}>
                                    {inst.subjects.map(s => (
                                        <span key={s} style={{
                                            fontSize: "0.75rem",
                                            padding: "4px 8px",
                                            borderRadius: 6,
                                            background: "rgba(253,253,150,0.1)",
                                            color: "var(--soft-yellow)",
                                            border: "1px solid rgba(253,253,150,0.2)"
                                        }}>
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                <button style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: 10,
                                    background: "rgba(255,255,255,0.1)",
                                    color: "var(--white)",
                                    border: "none",
                                    cursor: "pointer",
                                    fontWeight: 600,
                                    transition: "background 0.2s",
                                }}
                                    className="hover-bg-lilac"
                                >
                                    Profili İncele
                                </button>
                            </div>
                        ))}
                    </div>

                    {filteredInstructors.length === 0 && (
                        <div style={{ textAlign: "center", padding: 40, color: "var(--gray-400)" }}>
                            Aradığınız kriterlere uygun eğitmen bulunamadı.
                        </div>
                    )}

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

function filterStyle(isActive: boolean) {
    return {
        padding: "8px 16px",
        borderRadius: 8,
        background: isActive ? "var(--lilac)" : "transparent",
        color: isActive ? "#fff" : "var(--gray-300)",
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        transition: "all 0.2s",
    };
}
