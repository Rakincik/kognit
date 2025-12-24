import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kognita Akademi | Türkiye Dereceli Eğitmenlerden Sınav Koçluğu",
  description:
    "YKS, LGS ve üniversite sınavlarına derece yapmış öğrencilerden bire bir koçluk, kişiye özel çalışma programı ve geçme garantili akademik destek.",
  keywords: "YKS koçluk, LGS hazırlık, üniversite vize final, sınav koçluğu, eğitim danışmanlığı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Font optimized via next/font */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="animated-bg">
          <div className="star-field">
            <div className="stars-small"></div>
            <div className="stars-medium"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
          </div>
        </div>
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <Navbar />

        {children}
      </body>
    </html>
  );
}
