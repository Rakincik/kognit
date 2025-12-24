"use client";

import Image from "next/image";
import Link from "next/link";

export default function HakkimizdaPage() {
    const whatsappUrl = "https://wa.me/905555555555?text=Merhaba%2C%20Kognita%20Akademi%20hakkında%20bilgi%20almak%20istiyorum.";

    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            🏫 BİZ KİMİZ?
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Kognita <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Akademi</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 700 }}>
                            Türkiye derecesi yapmış öğrencilerden oluşan genç bir ekip olarak,
                            sınav hazırlığını yalnız başına yürütmeye çalışan öğrencilere destek oluyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className="section" style={{ paddingTop: 20 }}>
                <div className="container">
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 60,
                        alignItems: "center",
                        maxWidth: 1000,
                        margin: "0 auto",
                    }}>
                        <div>
                            <h2 style={{ fontSize: "1.8rem", color: "var(--white)", marginBottom: 20 }}>
                                Hikayemiz
                            </h2>
                            <p style={{ color: "var(--gray-300)", lineHeight: 1.8, marginBottom: 16 }}>
                                Kognita Akademi, 2023 yılında Türkiye derecesi yapmış bir grup üniversite öğrencisi tarafından kuruldu.
                                Kendi sınav deneyimlerimizden yola çıkarak, "keşke böyle bir destek olsaydı" dediğimiz
                                tüm eksiklikleri gidermek için yola çıktık.
                            </p>
                            <p style={{ color: "var(--gray-300)", lineHeight: 1.8, marginBottom: 16 }}>
                                Amacımız sadece ders anlatmak değil; öğrencinin motivasyonunu yüksek tutmak,
                                stres yönetiminde yardımcı olmak ve en önemlisi <strong style={{ color: "var(--lilac)" }}>kişiye özel bir yol haritası</strong> çizmek.
                            </p>
                            <p style={{ color: "var(--gray-300)", lineHeight: 1.8 }}>
                                Bugün yüzlerce öğrenciye hizmet veren Kognita, YKS, LGS ve üniversite sınavlarında
                                öğrencilerin yanında olmaya devam ediyor.
                            </p>
                        </div>
                        <div style={{
                            background: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(16px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 28,
                            padding: 40,
                            textAlign: "center",
                        }}>
                            <Image
                                src="/kognita-logo-icon.png"
                                alt="Kognita"
                                width={180}
                                height={180}
                                style={{ margin: "0 auto 24px", filter: "drop-shadow(0 10px 30px rgba(200,162,200,0.3))" }}
                            />
                            <p style={{ color: "var(--lilac)", fontSize: "1.1rem", fontWeight: 600 }}>
                                "Bilgi paylaştıkça çoğalır."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Değerlerimiz</h2>
                    </div>
                    <div className="grid-3">
                        <div className="info-card">
                            <h3>🎯 Kişiselleştirme</h3>
                            <p>Her öğrenci farklıdır. Herkes için aynı programı uygulamak yerine, kişiye özel stratejiler geliştiriyoruz.</p>
                        </div>
                        <div className="info-card">
                            <h3>🤝 Şeffaflık</h3>
                            <p>Veli ve öğrenci ile sürekli iletişim halinde kalarak süreci birlikte yönetiyoruz.</p>
                        </div>
                        <div className="info-card">
                            <h3>📈 Sürekli Gelişim</h3>
                            <p>Sadece öğrenciler değil, biz de sürekli öğreniyoruz. Metodlarımızı düzenli olarak güncelliyoruz.</p>
                        </div>
                        <div className="info-card">
                            <h3>💪 Motivasyon</h3>
                            <p>Sınav maratonu zorlu bir süreç. Öğrencinin moralini yüksek tutmak bizim önceliğimiz.</p>
                        </div>
                        <div className="info-card">
                            <h3>🧠 Bilimsel Yaklaşım</h3>
                            <p>Çalışma tekniklerini bilimsel verilere dayandırıyoruz. Aralıklı tekrar, aktif hatırlama gibi metodlar kullanıyoruz.</p>
                        </div>
                        <div className="info-card">
                            <h3>🌟 Sonuç Odaklılık</h3>
                            <p>Hedef net: Öğrencinin istediği okula/bölüme yerleşmesi. Tüm planlarımız bu hedefe yönelik.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 24,
                        textAlign: "center",
                    }}>
                        <div className="info-card" style={{ padding: 32 }}>
                            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--lilac)", marginBottom: 8 }}>500+</div>
                            <p style={{ color: "var(--gray-300)" }}>Mutlu Öğrenci</p>
                        </div>
                        <div className="info-card" style={{ padding: 32 }}>
                            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--soft-yellow)", marginBottom: 8 }}>50+</div>
                            <p style={{ color: "var(--gray-300)" }}>Uzman Eğitmen</p>
                        </div>
                        <div className="info-card" style={{ padding: 32 }}>
                            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--lilac)", marginBottom: 8 }}>%95</div>
                            <p style={{ color: "var(--gray-300)" }}>Memnuniyet Oranı</p>
                        </div>
                        <div className="info-card" style={{ padding: 32 }}>
                            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--soft-yellow)", marginBottom: 8 }}>3+</div>
                            <p style={{ color: "var(--gray-300)" }}>Yıllık Tecrübe</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container">
                    <h2 className="cta-title">Bizimle Tanışmak İster misin?</h2>
                    <p className="cta-text">Sana en uygun programı birlikte belirleyelim.</p>
                    <a href={whatsappUrl} className="btn-primary" target="_blank" rel="noreferrer">
                        📲 WhatsApp'tan Bilgi Al
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
