"use client";

import { useState } from "react";
import Link from "next/link";

type Program = {
    id: string;
    title: string;
    badge: string;
    level: string;
    subtitle: string;
    bullets: string[];
    audience: string;
    outcome: string;
    testimonial: string;
    color: string;
    icon: string;
};

const PROGRAMS: Program[] = [
    {
        id: "yks",
        title: "YKS Derece Koçluğu",
        badge: "⭐ Premium Paket",
        level: "11–12. sınıf & mezun",
        subtitle: "Derece hedefleyen öğrenciler için yoğun koçluk programı.",
        bullets: [
            "Haftalık deneme analizi ve soru hedefleri",
            "Kişiye özel konu önceliklendirme",
            "7/24 WhatsApp Soru Hattı",
            "Üniversite ve bölüm tanıtım seminerleri",
            "Stres ve sınav kaygısı yönetimi",
        ],
        audience: "Sayısal, sözel, eşit ağırlık fark etmeksizin YKS hazırlığındaki öğrenciler.",
        outcome:
            "Düzenli takip ile netlerini stabil şekilde yukarı çekmeyi ve motivasyonunu kaybetmemeyi sağlar.",
        testimonial: "Denemelerdeki dalgalanma tamamen bitti, artık tam olarak ne yapacağımı biliyorum.",
        color: "var(--lilac)",
        icon: "🎓",
    },
    {
        id: "lgs",
        title: "LGS Başarı Koçluğu",
        badge: "🎯 Yoğun Hazırlık",
        level: "7–8. sınıf öğrencileri",
        subtitle: "Temeli sağlamlaştıran, stres yönetimini öğreten LGS hazırlık programı.",
        bullets: [
            "Eksik konu analizi ve hedefli çalışmalar",
            "Haftalık soru çözüm seansları",
            "Veli ile düzenli bilgilendirme",
            "Okul notlarını yükseltme desteği",
        ],
        audience: "LGS'de iyi bir Anadolu / proje okulu hedefleyen 7–8. sınıf öğrencileri.",
        outcome:
            "Öğrencinin konu eksiği kalmamasını ve denemelerde ne yapacağını bilerek sınava girmesini sağlar.",
        testimonial:
            "Çocuğum hem ders anlamında hem de psikolojik olarak çok daha rahat, ne yapacağını biliyor.",
        color: "var(--soft-yellow)",
        icon: "🚀",
    },
    {
        id: "uni",
        title: "Üniversite Destek",
        badge: "📘 Vize/Final",
        level: "Lisans & önlisans",
        subtitle: "Geçme odaklı, ders bazlı vize-final çalışma programı.",
        bullets: [
            "Ders başına özel çalışma planı",
            "Çıkmış soru analizleri",
            "İlerleme takibi ve sınav kampı",
            "Proje ve ödev danışmanlığı",
        ],
        audience:
            "Ders yükü fazla olan, 'sadece geçmek değil, sağlam öğrenmek istiyorum' diyen öğrenciler.",
        outcome:
            "Sadece sınavı geçmek değil, dönem sonunda ders içeriğini gerçekten anlayarak kapanışı hedefler.",
        testimonial:
            "Son haftaya kaldığım dersleri bile planlayıp rahatça geçtim, artık dönem sonu kabus olmuyor.",
        color: "#4ADE80",
        icon: "📚",
    },
    {
        id: "kariyer",
        title: "Kariyer Mentorluğu",
        badge: "💡 Gelecek Planı",
        level: "Lise & üniversite",
        subtitle: "Bölüm seçimi, kariyer planlama ve yol haritası mentorluk programı.",
        bullets: [
            "Bölüm ve meslek analizi",
            "Yurt içi / yurt dışı seçenekleri",
            "Uzun vadeli hedef planlama",
            "CV ve mülakat hazırlığı",
        ],
        audience:
            "'Hangi bölümü okuyacağım, nasıl bir kariyer istiyorum?' sorusuna net cevap arayan öğrenciler.",
        outcome:
            "Öğrencinin güçlü yönlerine uygun, gerçekçi ve heyecan verici bir kariyer rotası oluşturulur.",
        testimonial:
            "Kafamdaki belirsizlik bitti, artık ne istediğimi ve oraya nasıl gideceğimi biliyorum.",
        color: "#60A5FA",
        icon: "🌍",
    },
];

export default function ProgramlarPage() {
    const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
    const whatsappUrl = "https://wa.me/905555555555?text=Merhaba%2C%20Kognita%20Akademi%20programlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

    // Navbar ile Hero arası boşluk (paddingTop) ayarlandı
    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 140, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            🚀 SANA ÖZEL ÇÖZÜMLER
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                            Hayallerine Giden <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>En Kısa Yol</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 700 }}>
                            İster sınav senesi olsun, ister üniversite vize dönemi.
                            Seni anlayan, senin yollarından geçmiş dereceli mentorlarla çalış.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="program-grid">
                        {PROGRAMS.map((p) => (
                            <article
                                key={p.id}
                                className="program-card-redesigned"
                                onClick={() => setSelectedProgram(p)}
                            >
                                <div className="card-bg-glow" style={{ background: p.color }} />

                                <div className="card-content">
                                    <div className="card-top">
                                        <span className="card-icon">{p.icon}</span>
                                        <span className="card-badge" style={{ borderColor: p.color, color: p.color }}>{p.badge}</span>
                                    </div>

                                    <h3 className="card-title">{p.title}</h3>
                                    <p className="card-level">{p.level}</p>

                                    <div className="card-divider" />

                                    <p className="card-desc">{p.subtitle}</p>

                                    <ul className="card-features">
                                        {p.bullets.slice(0, 2).map((b, i) => (
                                            <li key={i}>✓ {b}</li>
                                        ))}
                                    </ul>

                                    <button className="card-btn">İncele</button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW PREMIUM MODAL */}
            {selectedProgram && (
                <div className="modal-backdrop" onClick={() => setSelectedProgram(null)}>
                    <div
                        className="modal-content-premium"
                        onClick={(e) => e.stopPropagation()}
                        style={{ borderColor: selectedProgram.color }}
                    >
                        {/* Header: Gradient Banner */}
                        <div className="modal-premium-header" style={{ background: `linear-gradient(135deg, ${selectedProgram.color}22, ${selectedProgram.color}44)` }}>
                            <div className="modal-icon-large">{selectedProgram.icon}</div>
                            <div>
                                <span className="modal-badge-pill" style={{ background: selectedProgram.color, color: "#000" }}>{selectedProgram.badge}</span>
                                <h2 className="modal-title-large">{selectedProgram.title}</h2>
                                <p style={{ opacity: 0.9 }}>{selectedProgram.subtitle}</p>
                            </div>
                            <button
                                className="modal-close-btn"
                                onClick={() => setSelectedProgram(null)}
                                aria-label="Kapat"
                            >
                                ×
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="modal-grid-layout">
                                {/* Left Column: Details */}
                                <div className="modal-left">
                                    <h4 className="section-heading" style={{ color: selectedProgram.color }}>📋 Program İçeriği</h4>
                                    <ul className="feature-list">
                                        {selectedProgram.bullets.map((b) => (
                                            <li key={b}>
                                                <span className="check-icon" style={{ color: selectedProgram.color }}>✔</span> {b}
                                            </li>
                                        ))}
                                    </ul>

                                    <h4 className="section-heading" style={{ color: selectedProgram.color, marginTop: 24 }}>🎯 Hedef Kitle</h4>
                                    <p className="body-text">{selectedProgram.audience}</p>
                                </div>

                                {/* Right Column: Outcome & CTA */}
                                <div className="modal-right">
                                    <div className="outcome-box" style={{ background: `linear-gradient(180deg, ${selectedProgram.color}11, transparent)`, borderColor: `${selectedProgram.color}33` }}>
                                        <h4 className="section-heading-sm">🚀 Kazanımlar</h4>
                                        <p className="body-text-sm">{selectedProgram.outcome}</p>
                                    </div>

                                    <div className="testimonial-box-clean">
                                        <p>"{selectedProgram.testimonial}"</p>
                                    </div>

                                    <a href={whatsappUrl} className="btn-whatsapp-large" target="_blank" rel="noreferrer">
                                        <span style={{ fontSize: "1.2rem", marginRight: 8 }}>📲</span>
                                        Hemen Başvuru Yap
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS */}
            <style jsx global>{`
        /* Previous Card CSS included implicitly or repeated here for safety? 
           Ideally, we keep previous card CSS. Since I am replacing the file, I must include ALL CSS.
        */
        .program-card-redesigned {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
        }

        .program-card-redesigned:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .card-bg-glow {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
          transition: opacity 0.4s;
        }
        .program-card-redesigned:hover .card-bg-glow { opacity: 0.4; }

        .card-content {
          position: relative;
          padding: 32px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .card-top { display: flex; justify-content: space-between; margin-bottom: 20px; align-items: center; }
        .card-icon { font-size: 2.5rem; }
        .card-badge { font-size: 0.75rem; padding: 6px 12px; border-radius: 20px; border: 1px solid; font-weight: 600; text-transform: uppercase; }
        .card-title { font-size: 1.5rem; color: var(--white); margin-bottom: 4px; font-weight: 700; }
        .card-level { color: var(--gray-400); font-size: 0.9rem; }
        .card-divider { height: 1px; background: rgba(255,255,255,0.1); margin: 20px 0; }
        .card-desc { color: var(--gray-300); line-height: 1.6; margin-bottom: 20px; flex-grow: 1; }
        .card-features { list-style: none; padding: 0; margin: 0 0 24px 0; }
        .card-features li { color: var(--gray-300); font-size: 0.9rem; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
        .card-btn { width: 100%; padding: 14px; border-radius: 12px; background: rgba(255,255,255,0.05); color: var(--white); border: 1px solid rgba(255,255,255,0.1); font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .program-card-redesigned:hover .card-btn { background: var(--white); color: var(--black); }

        /* MODAL CSS */
        .modal-backdrop {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
          z-index: 999; display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .modal-content-premium {
          background: #120a20;
          width: 100%; max-width: 900px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          box-shadow: 0 50px 100px rgba(0,0,0,0.5);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-premium-header {
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .modal-icon-large { font-size: 3.5rem; }
        .modal-badge-pill { font-size: 0.8rem; padding: 4px 12px; border-radius: 12px; font-weight: 700; display: inline-block; marginBottom: 8px; text-transform: uppercase; }
        .modal-title-large { font-size: 2rem; color: white; margin: 8px 0 4px 0; font-weight: 800; }
        
        .modal-close-btn {
          position: absolute; top: 20px; right: 20px;
          background: rgba(0,0,0,0.2); border: none; color: white;
          width: 36px; height: 36px; border-radius: 50%;
          font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .modal-close-btn:hover { background: rgba(255,255,255,0.1); }

        .modal-body { padding: 40px; }
        .modal-grid-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; }

        .section-heading { font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px; }
        .section-heading-sm { font-size: 1rem; font-weight: 700; margin-bottom: 8px; color: var(--white); }

        .feature-list { list-style: none; padding: 0; }
        .feature-list li { margin-bottom: 12px; font-size: 1.05rem; color: var(--gray-300); display: flex; align-items: flex-start; gap: 10px; }
        .check-icon { font-weight: bold; }

        .body-text { color: var(--gray-300); line-height: 1.6; font-size: 1rem; }
        .body-text-sm { color: var(--gray-300); line-height: 1.5; font-size: 0.95rem; }

        .outcome-box {
          border: 1px solid; border-radius: 16px; padding: 20px; margin-bottom: 20px;
        }

        .testimonial-box-clean {
          font-style: italic; color: var(--gray-400); font-size: 0.95rem;
          padding: 16px; border-left: 3px solid rgba(255,255,255,0.1);
          margin-bottom: 30px;
        }

        .btn-whatsapp-large {
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white; font-weight: 700; padding: 18px;
          border-radius: 16px; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);
        }
        .btn-whatsapp-large:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(37, 211, 102, 0.3);
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }

        @media (max-width: 768px) {
          .modal-grid-layout { grid-template-columns: 1fr; gap: 24px; }
          .modal-premium-header { padding: 24px; flex-direction: column; text-align: center; }
          .modal-body { padding: 24px; }
          .section-heading { text-align: center; }
          .feature-list li { justify-content: center; }
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
