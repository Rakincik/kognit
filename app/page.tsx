"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  const whatsappUrl =
    "https://wa.me/905555555555?text=Merhaba%2C%20Kognita%20Akademi%20hakkında%20bilgi%20almak%20istiyorum.";

  // Scroll reveal
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero" data-reveal>
        <div className="container">
          <div className="hero-left">
            <p className="hero-kicker">
              🏆 TÜRKİYE DERECELİ EĞİTMENLERDEN SINAV KOÇLUĞU
            </p>
            <h1 className="hero-title">
              Kognita Akademi ile <span>sınav maratonunu yalnız koşma.</span>
            </h1>
            <p className="hero-text">
              YKS, LGS ve üniversite vize-final sınavlarına; derece yapmış
              öğrencilerden bire bir koçluk, kişiye özel çalışma programı ve
              geçme garantili akademik destek sunuyoruz.
            </p>
            <div className="hero-actions">
              <a
                href={whatsappUrl}
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                📲 WhatsApp'tan Hemen Yaz
              </a>
              <Link href="/programlar" className="btn-secondary">
                Programları Gör
              </Link>
            </div>
            <p className="hero-note">
              🎁 İlk görüşme ve seviye analizi{" "}
              <strong>tamamen ücretsizdir.</strong>
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-logo-card">
              <div className="hero-logo-glow" />
              <Image
                src="/kognita-logo-icon.png"
                alt="Kognita Akademi"
                width={200}
                height={200}
                className="hero-logo-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEDEN KOGNITA - TEASER */}
      <section className="section" data-reveal>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Neden Kognita?</h2>
            <p className="section-subtitle">
              Gençlere hitap eden, ancak kurumsal çizgiden ödün vermeyen modern
              bir sınav koçluğu modelimiz var.
            </p>
          </div>
          <div className="grid-3">
            <div className="info-card">
              <h3>🎯 Kişiye Özel Planlama</h3>
              <p>
                Her öğrenci için seviye analizi yaparak kişisel çalışma
                rotası çıkarıyoruz.
              </p>
            </div>
            <div className="info-card">
              <h3>🔥 Derece Öğrencilerinden Koçluk</h3>
              <p>
                Mentorlarımız Türkiye derecesi yapmış, sınav psikolojisini
                yaşamış öğrencilerden oluşur.
              </p>
            </div>
            <div className="info-card">
              <h3>🧠 Bilimsel & Takip Odaklı Metod</h3>
              <p>
                Haftalık hedef takibi, ilerleme grafikleri ve düzenli geri
                bildirimle süreci kontrol altında tutarız.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/hakkimizda" className="btn-secondary">
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMLAR - TEASER */}
      <section className="section" data-reveal>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Programlarımız</h2>
            <p className="section-subtitle">
              YKS, LGS ve Üniversite öğrencileri için özel paketlerimiz.
            </p>
          </div>

          {/* Quick links to programs instead of full details */}
          <div className="grid-2">
            <Link href="/programlar" className="info-card" style={{ textDecoration: "none", cursor: "pointer", textAlign: "center" }}>
              <h3 style={{ justifyContent: "center" }}>🎓 YKS Koçluğu</h3>
              <p>Derece hedefleyenler için.</p>
            </Link>
            <Link href="/programlar" className="info-card" style={{ textDecoration: "none", cursor: "pointer", textAlign: "center" }}>
              <h3 style={{ justifyContent: "center" }}>🎯 LGS Hazırlık</h3>
              <p>Liselere giriş için yoğun program.</p>
            </Link>
            <Link href="/programlar" className="info-card" style={{ textDecoration: "none", cursor: "pointer", textAlign: "center" }}>
              <h3 style={{ justifyContent: "center" }}>📘 Vize / Final</h3>
              <p>Üniversite derslerinde geçme garantisi.</p>
            </Link>
            <Link href="/programlar" className="info-card" style={{ textDecoration: "none", cursor: "pointer", textAlign: "center" }}>
              <h3 style={{ justifyContent: "center" }}>🚀 Kariyer</h3>
              <p>Geleceğini şansa bırakma.</p>
            </Link>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/programlar" className="btn-primary">
              Tüm Programları İncele
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" data-reveal>
        <div className="container">
          <h2 className="cta-title">
            Başarıya giden yol, doğru koçla başlar.
          </h2>
          <p className="cta-text">
            Hedeflerini ve seviyeni birlikte analiz edelim; sana özel bir
            Kognita planı çıkaralım.
          </p>
          <a
            href={whatsappUrl}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            📲 WhatsApp'tan Bilgi Al
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          Kognita Akademi © {new Date().getFullYear()} — Tüm hakları saklıdır.
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişime geç"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
