"use client";

const SSS = [
    {
        q: "Koçluk sistemi nasıl işliyor?",
        a: "Öğrencinin seviyesine göre analiz yapılır, ardından kişisel plan oluşturulur ve koç haftalık takip yapar. Her hafta düzenli görüşmelerle ilerleme kontrol edilir.",
    },
    {
        q: "Ücretler nedir?",
        a: "Programa, sınıf seviyesine ve paketin içeriğine göre değişiyor. En doğru bilgiyi almak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.",
    },
    {
        q: "Üniversite programı gerçekten geçme garantili mi?",
        a: "Evet, programdaki adımları eksiksiz uygulayan ve verilen görevleri yerine getiren öğrenciler için geçme garantisi sunuyoruz.",
    },
    {
        q: "Eğitmenleriniz kimler?",
        a: "Tüm mentorlarımız Türkiye derecesi yapmış, deneyimli ve sınav psikolojisini iyi bilen üniversite öğrencileri veya mezunlarından oluşuyor.",
    },
    {
        q: "Ücretsiz deneme dersi var mı?",
        a: "Evet! İlk görüşme, tanışma ve seviye analizi tamamen ücretsizdir. Memnun kalırsanız devam edersiniz.",
    },
    {
        q: "Hangi şehirdesiniz? Yüzyüze eğitim var mı?",
        a: "Merkezimiz İstanbul'da ancak tüm koçluk hizmetlerimiz Online (Zoom/Google Meet) üzerinden yürütülmektedir. Bu sayede Türkiye'nin her yerinden öğrenci kabul ediyoruz.",
    },
    {
        q: "Sadece YKS mi? LGS öğrencisi alıyor musunuz?",
        a: "Evet, LGS (7. ve 8. sınıf) öğrencileri için de özel koçluk programlarımız mevcuttur.",
    },
];

export default function SSSPage() {
    const whatsappUrl = "https://wa.me/905555555555?text=Merhaba%2C%20sorular%C4%B1m%20var%20yard%C4%B1mc%C4%B1%20olabilir%20misiniz%3F";

    return (
        <main>
            {/* HERO */}
            <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: "center" }}>
                        <p className="hero-kicker" style={{ display: "inline-flex", marginBottom: 20 }}>
                            ❓ MERAK EDİLENLER
                        </p>
                        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Sıkça Sorulan <span style={{ background: "linear-gradient(135deg, var(--lilac), var(--soft-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sorular</span>
                        </h1>
                        <p className="section-subtitle" style={{ maxWidth: 650 }}>
                            Aklınıza takılan soruların cevaplarını burada derledik. Bulamadıysanız WhatsApp'tan yazabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        {SSS.map((item, index) => (
                            <div key={index} className="sss-item" style={{ marginBottom: 20 }}>
                                <h3>{item.q}</h3>
                                <p>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <h2 className="cta-title">Başka sorunuz mu var?</h2>
                    <p className="cta-text">
                        Ekibimiz tüm sorularını yanıtlamak için hazır.
                    </p>
                    <a
                        href={whatsappUrl}
                        className="btn-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        📲 WhatsApp'tan Sor
                    </a>
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
