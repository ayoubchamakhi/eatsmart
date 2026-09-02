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
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("eatsmart_lang");
      if (savedLang === "ar" || document.documentElement.lang === "ar") {
        setIsArabic(true);
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
      }
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setLanguage = (nextArabic: boolean) => {
    setIsArabic(nextArabic);
    if (typeof document !== "undefined") {
      document.documentElement.lang = nextArabic ? "ar" : "fr";
      document.documentElement.dir = nextArabic ? "rtl" : "ltr";
      localStorage.setItem("eatsmart_lang", nextArabic ? "ar" : "fr");
    }
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {isArabic ? "الانتقال إلى المحتوى الرئيسي" : "Aller au contenu principal"}
      </a>

      <Header
        isArabic={isArabic}
        onSelectLanguage={setLanguage}
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
