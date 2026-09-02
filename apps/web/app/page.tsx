"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { IndependenceSection } from "@/components/landing/IndependenceSection";
import { EvaluationSection } from "@/components/landing/EvaluationSection";
import { AlternativesSection } from "@/components/landing/AlternativesSection";
import { DownloadCta } from "@/components/landing/DownloadCta";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextArabic = !isArabic;
    setIsArabic(nextArabic);
    document.documentElement.lang = nextArabic ? "ar" : "fr";
    document.documentElement.dir = nextArabic ? "rtl" : "ltr";
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {isArabic ? "الانتقال إلى المحتوى الرئيسي" : "Aller au contenu principal"}
      </a>

      <Header
        isArabic={isArabic}
        toggleLanguage={toggleLanguage}
        isScrolled={isScrolled}
      />

      <main id="main">
        <Hero isArabic={isArabic} />
        <IndependenceSection isArabic={isArabic} />
        <EvaluationSection isArabic={isArabic} />
        <AlternativesSection isArabic={isArabic} />
        <DownloadCta isArabic={isArabic} />
      </main>

      <Footer isArabic={isArabic} />
    </>
  );
}
