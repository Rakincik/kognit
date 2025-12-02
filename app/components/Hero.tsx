"use client";
import Image from "next/image";

export default function Hero() {
  const whatsapp =
    "https://wa.me/905555555555?text=Merhaba%2C%20Kognita%20Akademi%20hakkında%20bilgi%20istiyorum.";

  return (
    <section className="hero container">
      <div className="hero-left">
        <div className="hero-kicker">PREMIUM SINAV KOÇLUĞU PLATFORMU</div>
        <h1 className="hero-title">
          Kognita Akademi ile <br /> <span>başarıya bilimsel yaklaş</span>.
        </h1>

        <p className="hero-text">
          Türkiye dereceli mentorlerden premium sınav koçluğu. Gençlere yönelik
          modern, bilimsel ve kanıta dayalı eğitim desteği.
        </p>

        <a href={whatsapp} className="btn-primary">
          WhatsApp’tan Yaz
        </a>
        <a href="#programlar" className="btn-secondary">
          Programları Gör
        </a>
      </div>

      <div className="hero-right">
        <Image
          src="/kognita-logo-icon.png"
          alt="logo"
          width={280}
          height={280}
          className="hero-logo"
        />
      </div>
    </section>
  );
}
