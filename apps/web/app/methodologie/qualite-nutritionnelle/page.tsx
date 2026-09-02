"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { YukaFlankClouds } from "@/components/subpage/YukaFlankClouds";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Sparkles,
  Info,
  Salad,
  ChevronRight,
} from "lucide-react";

export default function QualiteNutritionnellePage() {
  const [selectedGrade, setSelectedGrade] = useState<"A" | "B" | "C" | "D" | "E">("A");

  const gradeDetails = {
    A: {
      color: "#2D5A27",
      bg: "#EDF7ED",
      border: "#2D5A27",
      title: "Excellente qualité nutritionnelle",
      scoreRange: "75 à 100 / 100",
      description:
        "Aliments bruts ou très peu transformés, d'une grande densité nutritionnelle. Riches en fibres naturelles, vitamines et polyphénols, ils constituent la base d'une alimentation protectrice.",
      examples: [
        "Huile d'olive vierge extra de Tunisie",
        "Légumineuses (Lentilles, Pois chiches)",
        "Dattes Deglet Nour non confites",
        "Légumes frais et salades méditerranéennes",
      ],
    },
    B: {
      color: "#60992D",
      bg: "#F4F9EE",
      border: "#60992D",
      title: "Bonne qualité nutritionnelle",
      scoreRange: "50 à 74 / 100",
      description:
        "Aliments favorables à l'équilibre quotidien avec un apport modéré en énergie et un bon profil protéique.",
      examples: [
        "Pain complet aux céréales locales",
        "Yaourt nature entier sans sucre",
        "Poisson bleu grillé (Sardines)",
        "Flocons d'avoine complets",
      ],
    },
    C: {
      color: "#D98C00",
      bg: "#FFFDF0",
      border: "#D98C00",
      title: "Qualité nutritionnelle moyenne",
      scoreRange: "35 à 49 / 100",
      description:
        "Aliments dont la consommation doit être équilibrée par des portions raisonnables en raison d'une teneur notable en lipides ou glucides simples.",
      examples: [
        "Fromage frais tunisien (Sicilien)",
        "Thon à l'huile végétale",
        "Couscous de blé dur semoule",
        "Jus de fruits sans sucres ajoutés",
      ],
    },
    D: {
      color: "#D9531E",
      bg: "#FFF4EB",
      border: "#D9531E",
      title: "Qualité nutritionnelle médiocre",
      scoreRange: "20 à 34 / 100",
      description:
        "Produits riches en graisses saturées ou en sel. Leur consommation régulière doit être modérée.",
      examples: [
        "Biscuits sucrés industriels",
        "Fromages fondus à tartiner",
        "Chips salées et apéritifs frits",
        "Plats préparés riches en sel",
      ],
    },
    E: {
      color: "#C73E1D",
      bg: "#FDECE7",
      border: "#C73E1D",
      title: "Très mauvaise qualité nutritionnelle",
      scoreRange: "0 à 19 / 100",
      description:
        "Aliments ultra-transformés cumulant forte densité calorique, excès massif de sucres simples et graisses saturées.",
      examples: [
        "Sodas et boissons énergisantes",
        "Pâtes à tartiner au cacao et huile de palme",
        "Bonbons et confiseries colorées",
        "Sauces industrielles très grasses",
      ],
    },
  };

  const active = gradeDetails[selectedGrade];

  return (
    <div className="yuka-page-wrap position-relative" style={{ overflowX: "hidden" }}>
      <Header />

      {/* Background clouds flanking sides */}
      <YukaFlankClouds variant="nutrition" />

      <main className="yuka-container position-relative" style={{ zIndex: 1, paddingBottom: 64 }}>
        <Breadcrumb
          items={[
            { label: "Méthodologie", href: "/methodologie" },
            { label: "Qualité nutritionnelle" },
          ]}
        />

        {/* Hero Section */}
        <section style={{ padding: "20px 0 50px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#EBF3E8",
                  color: "#2D5A27",
                  padding: "7px 18px",
                  borderRadius: 9999,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                <Award size={16} />
                <span>60% de la note globale Eatsmart</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.8vw, 3.2rem)",
                  color: "#1F221B",
                  fontWeight: 800,
                  lineHeight: 1.14,
                  margin: "0 0 20px",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                }}
              >
                La qualité nutritionnelle <br />
                <span style={{ color: "#2D5A27" }}>des aliments</span>
              </h1>

              <p
                style={{
                  color: "#5C564B",
                  fontSize: "1.12rem",
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 540,
                }}
              >
                La composition nutritionnelle représente plus de la moitié du score final. Elle repose sur la formule scientifique du Nutri-Score pour distinguer les nutriments protecteurs de ceux à limiter.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                height: 320,
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(31, 34, 27, 0.08)",
                border: "1px solid rgba(61, 58, 52, 0.06)",
              }}
            >
              <Image
                src="/assets_v2/methodology_nutrition.jpg"
                alt="Récolte saine méditerranéenne et huile d'olive"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* INTERACTIVE NUTRI-SCORE GRADE EXPLORER */}
        <section style={{ marginBottom: 50 }}>
          <div className="yuka-card" style={{ border: "1.5px solid rgba(45, 90, 39, 0.15)" }}>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 32px" }}>
              <h2
                style={{
                  fontSize: "1.7rem",
                  color: "#1F221B",
                  fontWeight: 800,
                  margin: "0 0 10px",
                  fontFamily: "var(--font-display)",
                }}
              >
                Explorez les 5 classes du Nutri-Score
              </h2>
              <p style={{ color: "#5C564B", fontSize: "0.98rem", margin: 0 }}>
                Cliquez sur une lettre pour visualiser sa conversion en points et ses caractéristiques concrètes :
              </p>
            </div>

            {/* Nutri-Score Letter Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 36,
              }}
            >
              {(["A", "B", "C", "D", "E"] as const).map((grade) => {
                const isSelected = selectedGrade === grade;
                const colors = {
                  A: "#2D5A27",
                  B: "#60992D",
                  C: "#D98C00",
                  D: "#D9531E",
                  E: "#C73E1D",
                }[grade];

                return (
                  <button
                    key={grade}
                    onClick={() => setSelectedGrade(grade)}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: isSelected ? `3px solid ${colors}` : "2px solid rgba(61, 58, 52, 0.15)",
                      background: isSelected ? colors : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : colors,
                      transform: isSelected ? "scale(1.15)" : "scale(1)",
                      boxShadow: isSelected ? `0 8px 24px ${colors}40` : "none",
                      transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    {grade}
                  </button>
                );
              })}
            </div>

            {/* Interactive Selected Grade Panel */}
            <div
              style={{
                background: active.bg,
                border: `1.5px solid ${active.border}`,
                borderRadius: 24,
                padding: "32px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: active.color,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Classe Nutri-Score {selectedGrade}
                  </span>
                  <h3 style={{ margin: "4px 0 0", fontSize: "1.45rem", color: active.color, fontWeight: 800 }}>
                    {active.title}
                  </h3>
                </div>
                <div
                  style={{
                    background: "#FFFFFF",
                    padding: "8px 20px",
                    borderRadius: 9999,
                    border: `1px solid ${active.border}`,
                    color: active.color,
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  Score : {active.scoreRange}
                </div>
              </div>

              <p style={{ color: "#3D3A34", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: 24 }}>
                {active.description}
              </p>

              <div>
                <strong style={{ color: "#1F221B", fontSize: "0.95rem", display: "block", marginBottom: 12 }}>
                  Exemples typiques de produits en Tunisie :
                </strong>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {active.examples.map((ex, i) => (
                    <span
                      key={i}
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(61, 58, 52, 0.1)",
                        padding: "6px 14px",
                        borderRadius: 9999,
                        fontSize: "0.88rem",
                        color: "#2C2A26",
                        fontWeight: 600,
                      }}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TWO-COLUMN BALANCE: POSITIVE VS NEGATIVE */}
        <section style={{ marginBottom: 50 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 28,
            }}
          >
            {/* Protective Nutrients Card */}
            <div
              className="yuka-card"
              style={{
                border: "1.5px solid rgba(45, 90, 39, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div className="yuka-icon-bubble yuka-bubble-sage">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", color: "#2D5A27", margin: 0, fontWeight: 800 }}>
                    Composants protecteurs (+)
                  </h3>
                  <span style={{ color: "#6E675C", fontSize: "0.85rem" }}>Améliorent la note jusqu'à +15 points</span>
                </div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", gap: 10, fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <span style={{ color: "#2D5A27", fontWeight: 800, fontSize: "1.2rem" }}>•</span>
                  <div>
                    <strong>Fibres alimentaires :</strong> ralentissent l'absorption des glucides et nourrissent le microbiote intestinal.
                  </div>
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <span style={{ color: "#2D5A27", fontWeight: 800, fontSize: "1.2rem" }}>•</span>
                  <div>
                    <strong>Fruits, légumes & légumineuses :</strong> apportent polyphénols, potassium et micronutriments essentiels.
                  </div>
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <span style={{ color: "#2D5A27", fontWeight: 800, fontSize: "1.2rem" }}>•</span>
                  <div>
                    <strong>Protéines végétales & marines :</strong> préservent la masse musculaire sans surcharger en graisses saturées.
                  </div>
                </li>
              </ul>
            </div>

            {/* Elements to Limit Card */}
            <div
              className="yuka-card"
              style={{
                border: "1.5px solid rgba(199, 62, 29, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div className="yuka-icon-bubble yuka-bubble-red">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", color: "#C73E1D", margin: 0, fontWeight: 800 }}>
                    Éléments à modérer (-)
                  </h3>
                  <span style={{ color: "#6E675C", fontSize: "0.85rem" }}>Pénalisent la note jusqu'à -40 points</span>
                </div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", gap: 10, fontSize: "0.95rem", color: "#6A2210", lineHeight: 1.6 }}>
                  <span style={{ color: "#C73E1D", fontWeight: 800, fontSize: "1.2rem" }}>•</span>
                  <div>
                    <strong>Sucres simples et rapides :</strong> provoquent une réponse insulinique brutale et favorisent la stéatose hépatique.
                  </div>
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: "0.95rem", color: "#6A2210", lineHeight: 1.6 }}>
                  <span style={{ color: "#C73E1D", fontWeight: 800, fontSize: "1.2rem" }}>•</span>
                  <div>
                    <strong>Acides gras saturés :</strong> augmentent le cholestérol LDL athérogène et le risque cardiovasculaire.
                  </div>
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: "0.95rem", color: "#6A2210", lineHeight: 1.6 }}>
                  <span style={{ color: "#C73E1D", fontWeight: 800, fontSize: "1.2rem" }}>•</span>
                  <div>
                    <strong>Sel (Sodium) :</strong> facteur prépondérant d'hypertension artérielle dans le bassin méditerranéen.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pre-footer Download CTA */}
        <DownloadCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
