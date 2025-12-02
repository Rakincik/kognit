export default function CTASection() {
  const whatsapp =
    "https://wa.me/905555555555?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";

  return (
    <section className="container" style={{ textAlign: "center" }}>
      <h2 className="hero-title" style={{ fontSize: 36 }}>
        Başarı doğru mentorla başlar.
      </h2>
      <a href={whatsapp} className="btn-primary" style={{ marginTop: 24 }}>
        WhatsApp’tan İletişime Geç
      </a>
    </section>
  );
}
