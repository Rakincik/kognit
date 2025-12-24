"use client";

import Link from "next/link";
import Image from "next/image";

export default function IletisimPage() {
    const whatsappUrl = "https://wa.me/905555555555?text=Merhaba%2C%20Kognita%20Akademi%20hakkında%20bilgi%20almak%20istiyorum.";

    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            📞 BİZE ULAŞIN
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>İletişim</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 600 }}>
                            Sorularınız mı var? Programa kayıt olmak mı istiyorsunuz?
                            Bize dilediğiniz kanaldan ulaşabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTACT OPTIONS */}
            <section className="section" style={{ paddingTop: 20 }}>
                <div className="container">
                    <div className="grid-3" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="info-card"
                            style={{ textAlign: "center", textDecoration: "none", cursor: "pointer" }}
                        >
                            <div style={{ fontSize: "3rem", marginBottom: 16 }}>📱</div>
                            <h3 style={{ color: "var(--white)" }}>WhatsApp</h3>
                            <p>En hızlı iletişim kanalımız. Anında cevap alın!</p>
                            <div style={{ marginTop: 16, color: "var(--lilac)", fontWeight: 600 }}>
                                +90 555 555 55 55
                            </div>
                        </a>

                        <a
                            href="mailto:info@kognitaakademi.com"
                            className="info-card"
                            style={{ textAlign: "center", textDecoration: "none", cursor: "pointer" }}
                        >
                            <div style={{ fontSize: "3rem", marginBottom: 16 }}>✉️</div>
                            <h3 style={{ color: "var(--white)" }}>E-posta</h3>
                            <p>Detaylı sorularınız için e-posta gönderin.</p>
                            <div style={{ marginTop: 16, color: "var(--lilac)", fontWeight: 600 }}>
                                info@kognitaakademi.com
                            </div>
                        </a>

                        <a
                            href="https://instagram.com/kognitaakademi"
                            target="_blank"
                            rel="noreferrer"
                            className="info-card"
                            style={{ textAlign: "center", textDecoration: "none", cursor: "pointer" }}
                        >
                            <div style={{ fontSize: "3rem", marginBottom: 16 }}>📸</div>
                            <h3 style={{ color: "var(--white)" }}>Instagram</h3>
                            <p>Güncel duyurular ve motivasyon içerikleri.</p>
                            <div style={{ marginTop: 16, color: "var(--lilac)", fontWeight: 600 }}>
                                @kognitaakademi
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Quick */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Sıkça Sorulan Sorular</h2>
                    </div>
                    <div style={{ maxWidth: 700, margin: "0 auto" }}>
                        <div className="sss-item">
                            <h3>İlk görüşme ücretli mi?</h3>
                            <p>Hayır! İlk görüşme ve seviye analizi tamamen ücretsizdir.</p>
                        </div>
                        <div className="sss-item">
                            <h3>Hangi saatler arasında ulaşabilirim?</h3>
                            <p>WhatsApp hattımız 09:00 - 22:00 arası aktiftir. Mesai dışı mesajlarınıza ertesi gün dönüş yapılır.</p>
                        </div>
                        <div className="sss-item">
                            <h3>Online mı yoksa yüz yüze mi eğitim veriyorsunuz?</h3>
                            <p>Tüm koçluk seanslarımız online olarak gerçekleştirilmektedir. Böylece Türkiye'nin her yerinden öğrenci kabul edebiliyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container">
                    <h2 className="cta-title">Hemen İletişime Geç!</h2>
                    <p className="cta-text">WhatsApp üzerinden anında bilgi alabilirsin.</p>
                    <a href={whatsappUrl} className="btn-primary" target="_blank" rel="noreferrer">
                        📲 WhatsApp'tan Yaz
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
