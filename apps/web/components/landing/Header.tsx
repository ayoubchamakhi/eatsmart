"use client";

import { useState } from "react";

interface HeaderProps {
  isArabic: boolean;
  toggleLanguage: () => void;
  isScrolled: boolean;
  onOpenScanner?: () => void;
}

export function Header({ isArabic, toggleLanguage, isScrolled, onOpenScanner }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`} data-header>
      <div className="wrap header-inner">
        <a className="brand" href="/" aria-label="Eatsmart, accueil">
          <img
            className="brand-logo"
            src="/assets_v2/header_dark_logo.png"
            alt="Eatsmart"
            width={140}
            height={36}
          />
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#independance">{isArabic ? "استقلاليتنا" : "Notre indépendance"}</a>
          <a href="#evaluer">{isArabic ? "فهم التقييم" : "Comprendre la note"}</a>
          <a href="#recommandations">{isArabic ? "البدائل الصحية" : "Alternatives"}</a>
          {onOpenScanner && (
            <button
              type="button"
              onClick={onOpenScanner}
              style={{
                background: "none",
                border: "none",
                color: "var(--sage-deep)",
                fontWeight: 700,
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "var(--r-pill)",
              }}
            >
              {isArabic ? "تجربة المسح" : "Tester le scanner"}
            </button>
          )}
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={isArabic ? "Passer en français" : "Passer en arabe"}
          >
            {isArabic ? "Français" : "عربي"}
          </button>
          <a className="btn btn--sage btn--small" href="#download">
            {isArabic ? "تحميل التطبيق" : "Télécharger l'app"}
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className="mobile-menu"
        id="mobile-menu"
        hidden={!mobileMenuOpen}
      >
        <a href="#independance" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "استقلاليتنا" : "Notre indépendance"}
        </a>
        <a href="#evaluer" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "فهم التقييم" : "Comprendre la note"}
        </a>
        <a href="#recommandations" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "البدائل الصحية" : "Alternatives"}
        </a>
        <a href="#download" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "تحميل التطبيق" : "Télécharger l'app"}
        </a>
      </div>
    </header>
  );
}
