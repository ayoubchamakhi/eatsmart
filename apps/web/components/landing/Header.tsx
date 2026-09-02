"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LanguageDropdown } from "./LanguageDropdown";

interface HeaderProps {
  isArabic?: boolean;
  toggleLanguage?: () => void;
  isScrolled?: boolean;
}

export function Header({
  isArabic: propIsArabic,
  toggleLanguage: propToggleLanguage,
  isScrolled: propIsScrolled,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalArabic, setInternalArabic] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("eatsmart_lang");
      if (savedLang === "ar" || document.documentElement.lang === "ar") {
        setInternalArabic(true);
      }
      const handleScroll = () => {
        setInternalScrolled(window.scrollY > 12);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const isArabic = propIsArabic !== undefined ? propIsArabic : internalArabic;
  const isScrolled = propIsScrolled !== undefined ? propIsScrolled : internalScrolled;

  const handleToggle = () => {
    if (propToggleLanguage) {
      propToggleLanguage();
    } else {
      const nextArabic = !internalArabic;
      setInternalArabic(nextArabic);
      if (typeof document !== "undefined") {
        document.documentElement.lang = nextArabic ? "ar" : "fr";
        document.documentElement.dir = nextArabic ? "rtl" : "ltr";
        localStorage.setItem("eatsmart_lang", nextArabic ? "ar" : "fr");
      }
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`} data-header>
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="Eatsmart, accueil">
          <img
            className="brand-logo"
            src="/assets_v2/header_dark_logo.png"
            alt="Eatsmart"
            width={132}
            height={34}
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="/#independance">{isArabic ? "استقلاليتنا" : "Notre indépendance"}</a>
          <a href="/#evaluer">{isArabic ? "فهم التقييم" : "Comprendre la note"}</a>
          <a href="/#recommandations">{isArabic ? "البدائل الصحية" : "Alternatives"}</a>
          <Link href="/methodologie">{isArabic ? "المنهجية" : "Méthodologie"}</Link>
        </nav>

        <div className="header-actions">
          <LanguageDropdown
            isArabic={isArabic}
            onSelectLanguage={(nextAr) => {
              if (nextAr !== isArabic) handleToggle();
            }}
          />
          <a className="btn btn--sage btn--small" href="/#download">
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
        <a href="/#independance" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "استقلاليتنا" : "Notre indépendance"}
        </a>
        <a href="/#evaluer" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "فهم التقييم" : "Comprendre la note"}
        </a>
        <a href="/#recommandations" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "البدائل الصحية" : "Alternatives"}
        </a>
        <Link href="/methodologie" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "المنهجية" : "Méthodologie"}
        </Link>
        <a href="/#download" onClick={() => setMobileMenuOpen(false)}>
          {isArabic ? "تحميل التطبيق" : "Télécharger l'app"}
        </a>
      </div>
    </header>
  );
}
