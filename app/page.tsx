"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      "Haftalık bire bir mentor görüşmesi",
    ],
    audience: "Sayısal, sözel, eşit ağırlık fark etmeksizin YKS hazırlığındaki öğrenciler.",
    outcome:
      "Düzenli takip ile netlerini stabil şekilde yukarı çekmeyi ve motivasyonunu kaybetmemeyi sağlar.",
    testimonial: "“Denemelerdeki dalgalanma tamamen bitti, artık tam olarak ne yapacağımı biliyorum.”",
  },
  {
    id: "lgs",
    title: "LGS Yüksek Başarı Programı",
    badge: "🎯 Yoğun Hazırlık",
    level: "7–8. sınıf öğrencileri",
    subtitle: "Temeli sağlamlaştıran, stres yönetimini öğreten LGS hazırlık programı.",
    bullets: [
      "Eksik konu analizi ve hedefli çalışmalar",
      "Haftalık soru çözüm seansları",
      "Veli ile düzenli iletişim",
    ],
    audience: "LGS’de iyi bir Anadolu / proje okulu hedefleyen 7–8. sınıf öğrencileri.",
    outcome:
      "Öğrencinin konu eksiği kalmamasını ve denemelerde ne yapacağını bilerek sınava girmesini sağlar.",
    testimonial:
      "“Çocuğum hem ders anlamında hem de psikolojik olarak çok daha rahat, ne yapacağını biliyor.”",
  },
  {
    id: "uni",
    title: "Üniversite Vize/Final Desteği",
    badge: "📘 Akademik Destek",
    level: "Lisans & önlisans",
    subtitle: "Geçme odaklı, ders bazlı vize-final çalışma programı.",
    bullets: [
      "Ders başına çalışma planı",
      "Tekrar programı ve soru havuzu",
      "İlerleme takibi ve sınav öncesi hızlandırma",
    ],
    audience:
      "Vize/final döneminde ders yükü fazla olan, “sadece geçmek değil, sağlam öğrenmek istiyorum” diyen öğrenciler.",
    outcome:
      "Sadece sınavı geçmek değil, dönem sonunda ders içeriğini gerçekten anlayarak kapanışı hedefler.",
    testimonial:
      "“Son haftaya kaldığım dersleri bile planlayıp rahatça geçtim, artık dönem sonu kabus olmuyor.”",
  },
  {
    id: "kariyer",
    title: "Kariyer Mentorluğu",
    badge: "🚀 Gelecek Odaklı",
    level: "Lise & üniversite",
    subtitle: "Bölüm seçimi, kariyer planlama ve yol haritası mentorluk programı.",
    bullets: [
      "Bölüm ve meslek analizi",
      "Yurt içi / yurt dışı seçenekleri",
      "Uzun vadeli hedef planlama",
    ],
    audience:
      "“Hangi bölümü okuyacağım, nasıl bir kariyer istiyorum?” sorusuna net cevap arayan öğrenciler.",
    outcome:
      "Öğrencinin güçlü yönlerine uygun, gerçekçi ve heyecan verici bir kariyer rotası oluşturulur.",
    testimonial:
      "“Kafamdaki belirsizlik bitti, artık ne istediğimi ve oraya nasıl gideceğimi biliyorum.”",
  },
];

const SSS = [
  {
    q: "Koçluk sistemi nasıl işliyor?",
    a: "Öğrencinin seviyesine göre analiz yapılır, ardından kişisel plan oluşturulur ve koç haftalık takip yapar.",
  },
  {
    q: "Ücretler nedir?",
    a: "Programa ve sınıf seviyesine göre değişiyor. WhatsApp üzerinden hızlıca net fiyat bilgisi veriyoruz.",
  },
  {
    q: "Üniversite programı gerçekten geçme garantili mi?",
    a: "Programdaki adımları eksiksiz uygulayan öğrenciler için geçme garantisi sunuyoruz.",
  },
];

export default function HomePage() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const whatsappUrl =
    "https://wa.me/905555555555?text=Merhaba%2C%20Kognita%20Akademi%20hakkında%20bilgi%20almak%20istiyorum.";

  // Scroll ile görünme animasyonu
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
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="nav-brand">
            <Image
              src="/kognita-logo-icon.png"
              alt="Kognita"
              width={32}
              height={32}
            />
            <span>Kognita Akademi</span>
          </div>
          <nav className="nav-links">
            <a className="nav-link" href="#neden">
              Neden Kognita?
            </a>
            <a className="nav-link" href="#metod">
              Metod
            </a>
            <a className="nav-link" href="#programlar">
              Programlar
            </a>
            <a className="nav-link" href="#sss">
              SSS
            </a>
            <a className="btn-primary" href={whatsappUrl} target="_blank">
              WhatsApp’tan Yaz
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero container" data-reveal>
          <div className="hero-left">
            <p className="hero-kicker">
              TÜRKİYE DERECELİ ÖĞRENCİLERDEN SINAV KOÇLUĞU
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
                WhatsApp’tan Hemen Yaz
              </a>
              <a href="#programlar" className="btn-secondary">
                Programları Gör
              </a>
            </div>
            <p className="hero-note">
              İlk görüşme ve seviye analizi{" "}
              <strong>tamamen ücretsizdir.</strong>
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-logo-card">
              <div className="hero-logo-glow" />
              <Image
                src="/kognita-logo-icon.png"
                alt="Kognita Akademi"
                width={220}
                height={220}
                className="hero-logo-img"
              />
            </div>
          </div>
        </section>

        {/* NEDEN KOGNITA */}
        <section id="neden" className="section" data-reveal>
          <div className="container">
            <h2 className="section-title">Neden Kognita?</h2>
            <p className="section-subtitle">
              Gençlere hitap eden, ancak kurumsal çizgiden ödün vermeyen modern
              bir sınav koçluğu modelimiz var.
            </p>
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
          </div>
        </section>

        {/* METOD */}
        <section id="metod" className="section" data-reveal>
          <div className="container">
            <h2 className="section-title">Kognita Metodu</h2>
            <p className="section-subtitle">
              Basit ama disiplinli bir 3 adım: analiz, planlama ve takip.
            </p>
            <div className="grid-3">
              <div className="info-card">
                <h3>1. Derin Analiz</h3>
                <p>
                  Ders, deneme ve hedefler üzerinden öğrencinin mevcut durumu
                  fotoğraflanır.
                </p>
              </div>
              <div className="info-card">
                <h3>2. Özel Program Tasarımı</h3>
                <p>
                  Konu önceliklendirme, soru hedefleri ve kaynak seçimleri
                  yapılır.
                </p>
              </div>
              <div className="info-card">
                <h3>3. Haftalık Takip & Geri Bildirim</h3>
                <p>
                  Mentor her hafta planın uygulanışını kontrol eder ve gerekirse
                  revize eder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMLAR (ÜRÜN KARTLARI) */}
        <section id="programlar" className="section" data-reveal>
          <div className="container">
            <h2 className="section-title">Programlarımız</h2>
            <p className="section-subtitle">
              Kognita Akademi, YKS ve LGS’den üniversite vize-final sınavlarına
              kadar farklı seviyelerde kişiye özel programlar sunar.
            </p>
            <div className="grid-2 program-grid">
              {PROGRAMS.map((p) => (
                <article
                  key={p.id}
                  className="program-card"
                  onClick={() => setSelectedProgram(p)}
                >
                  <div className="program-card-header">
                    <span className="program-badge">{p.badge}</span>
                    <h3 className="program-title">{p.title}</h3>
                    <p className="program-level">{p.level}</p>
                    <p className="program-card-sub">{p.subtitle}</p>
                  </div>
                  <ul className="program-bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="program-card-footer">
                    <div className="program-meta">
                      <span>{p.audience}</span>
                    </div>
                    <button
                      type="button"
                      className="program-mini-cta"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProgram(p);
                      }}
                    >
                      Detay
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SSS */}
        <section id="sss" className="section" data-reveal>
          <div className="container">
            <h2 className="section-title">Sık Sorulan Sorular</h2>
            <div>
              {SSS.map((item) => (
                <div key={item.q} className="sss-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
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
              WhatsApp’tan Bilgi Al
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          Kognita Akademi © {new Date().getFullYear()} — Tüm hakları saklıdır.
        </footer>
      </main>

      {/* MODAL – ÜRÜN DETAYI */}
      {selectedProgram && (
        <div className="modal-backdrop" onClick={() => setSelectedProgram(null)}>
          <div
            className="modal-content fade-up modal-program"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <div className="modal-badge">{selectedProgram.badge}</div>
                <div className="modal-title">{selectedProgram.title}</div>
                <div className="modal-level">{selectedProgram.level}</div>
              </div>
              <button
                className="modal-close"
                onClick={() => setSelectedProgram(null)}
                aria-label="Kapat"
              >
                ×
              </button>
            </div>

            <p className="modal-sub">{selectedProgram.subtitle}</p>

            <h4 className="modal-section-title">Program içeriği</h4>
            <ul>
              {selectedProgram.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <h4 className="modal-section-title">Kimler için uygun?</h4>
            <p className="modal-text">{selectedProgram.audience}</p>

            <h4 className="modal-section-title">Bu program ne kazandırır?</h4>
            <p className="modal-text">{selectedProgram.outcome}</p>

            <div className="modal-testimonial">
              <span className="modal-quote-symbol">“</span>
              <p>{selectedProgram.testimonial}</p>
            </div>

            <div style={{ marginTop: 16, textAlign: "right" }}>
              <a
                href={whatsappUrl}
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan Bilgi Al
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
