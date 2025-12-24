"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Panel link - placeholder
    const panelUrl = "#";

    const isActive = (path: string) => pathname === path ? "nav-link active" : "nav-link";

    return (
        <>
            <header className="navbar">
                <div className="navbar-inner">
                    <Link href="/" className="nav-brand">
                        <Image
                            src="/kognita-logo-icon.png"
                            alt="Kognita"
                            width={42}
                            height={42}
                        />
                        <span>Kognita Akademi</span>
                    </Link>

                    <nav className="nav-links">
                        <Link href="/programlar" className={isActive("/programlar")}>
                            Programlar
                        </Link>
                        <Link href="/egitmenler" className={isActive("/egitmenler")}>
                            Eğitmenler
                        </Link>
                        <Link href="/basari-hikayeleri" className={isActive("/basari-hikayeleri")}>
                            Başarılar
                        </Link>
                        <Link href="/blog" className={isActive("/blog")}>
                            Blog
                        </Link>
                        <Link href="/hakkimizda" className={isActive("/hakkimizda")}>
                            Hakkımızda
                        </Link>
                        <Link href="/iletisim" className={isActive("/iletisim")}>
                            İletişim
                        </Link>
                    </nav>

                    <div className="nav-actions">
                        <Link href="/randevu" className="btn-auth" style={{ background: "var(--soft-yellow)", color: "#000", border: "none", marginRight: 8, fontWeight: 700 }}>
                            Randevu Al
                        </Link>
                        <a href={panelUrl} className="btn-auth btn-login">
                            Giriş
                        </a>
                        <a href={panelUrl} className="btn-auth btn-register">
                            Kayıt
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menü"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>Anasayfa</Link>
                <Link href="/hakkimizda" onClick={() => setMobileMenuOpen(false)}>Hakkımızda</Link>
                <Link href="/programlar" onClick={() => setMobileMenuOpen(false)}>Programlar</Link>
                <Link href="/egitmenler" onClick={() => setMobileMenuOpen(false)}>Eğitmenler</Link>
                <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                <Link href="/basari-hikayeleri" onClick={() => setMobileMenuOpen(false)}>Başarı Hikayeleri</Link>
                <Link href="/randevu" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--soft-yellow)" }}>Randevu Al</Link>
                <Link href="/iletisim" onClick={() => setMobileMenuOpen(false)}>İletişim</Link>
                <Link href="/egitmen-ol" onClick={() => setMobileMenuOpen(false)}>Eğitmen Başvurusu</Link>
                <a href={panelUrl} className="btn-primary" onClick={() => setMobileMenuOpen(false)}>
                    Giriş Yap / Kayıt Ol
                </a>
            </div>
        </>
    );
}
