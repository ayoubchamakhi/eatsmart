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
  ShieldCheck,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Scale,
  Lock,
} from "lucide-react";

export default function MethodologieHubPage() {
  const [activeNutri, setActiveNutri] = useState<"A" | "B" | "C" | "D" | "E">("A");

  return (
    <div className="yuka-page-wrap position-relative" style={{ overflowX: "hidden" }}>
      <Header />

      {/* Bespoke Mediterranean Clouds & Olive Foliage on Margins */}
      <YukaFlankClouds variant="methodology" />

      <main className="yuka-container position-relative" style={{ zIndex: 1, paddingBottom: 80 }}>
        <Breadcrumb items={[{ label: "Méthodologie d'évaluation" }]} />

        {/* HERO: Fluid Asymmetric Presentation with Highlighted Text */}
        <section style={{ padding: "30px 0 70px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 56,
              alignItems: "center",
            }}
          >
            {/* Left: Fluid Editorial Statement */}
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
                  marginBottom: 24,
                }}
              >
                <ShieldCheck size={16} />
                <span>Algorithme Médical & Indépendant</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5.2vw, 3.6rem)",
                  color: "#1F221B",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  margin: "0 0 24px",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                }}
              >
                Comment la note <br />
                <span className="highlight-green">est-elle calculée ?</span>
              </h1>

              <p
                style={{
                  color: "#5C564B",
                  fontSize: "1.18rem",
                  lineHeight: 1.7,
                  margin: "0 0 36px",
                  maxWidth: 520,
                }}
              >
                Eatsmart décrypte les étiquettes alimentaires pour vous révéler ce que cachent réellement vos produits du quotidien en Tunisie : <span className="highlight-orange">zéro publicité</span>, <span className="highlight-green">zéro compromis</span>.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <a
                  href="#criteres-detail"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#2D5A27",
                    color: "#FFFFFF",
                    padding: "15px 30px",
                    borderRadius: 9999,
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(45, 90, 39, 0.28)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  Comprendre les 3 piliers <ArrowRight size={18} />
                </a>

                <Link
                  href="/terms"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#FFFFFF",
                    color: "#1F221B",
                    padding: "15px 26px",
                    borderRadius: 9999,
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "none",
                    border: "1.5px solid rgba(61, 58, 52, 0.15)",
                  }}
                >
                  Notre charte éthique
                </Link>
              </div>
            </div>

            {/* Right: Tunisian Harvest & Scan Mockup (No Carrots, Real Olive Oil & Mediterranean Soul) */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 420,
              }}
            >
              {/* Organic Disc Glow */}
              <div
                style={{
                  position: "absolute",
                  width: 420,
                  height: 420,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(235, 243, 232, 0.9) 0%, rgba(250, 248, 245, 0) 72%)",
                  zIndex: 0,
                }}
              />

              {/* Scan Preview Card */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  background: "#FFFFFF",
                  borderRadius: 36,
                  padding: "32px 28px",
                  width: "100%",
                  maxWidth: 360,
                  boxShadow: "0 24px 60px rgba(31, 34, 27, 0.08)",
                  border: "1px solid rgba(61, 58, 52, 0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      background: "#F4F8F1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 8,
                    }}
                  >
                    <Image
                      src="/assets_v2/branding/eatsmart_olive_branch.svg"
                      alt="Huile d'olive tunisienne"
                      width={42}
                      height={42}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "#6E675C", textTransform: "uppercase", fontWeight: 700 }}>
                      Terroir Tunisien · Code 619
                    </span>
                    <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#1F221B", fontWeight: 800 }}>
                      Huile d'Olive Extra Vierge
                    </h3>
                  </div>
                </div>

                {/* Score Pill */}
                <div
                  style={{
                    background: "#EDF7ED",
                    border: "1.5px solid #2D5A27",
                    borderRadius: 22,
                    padding: "14px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#2D5A27" }} />
                    <strong style={{ color: "#2D5A27", fontSize: "1.1rem" }}>Excellent</strong>
                  </div>
                  <span style={{ color: "#1E3F20", fontWeight: 900, fontSize: "1.2rem" }}>
                    88 / 100
                  </span>
                </div>

                {/* Real Ingredients Breakdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#FAF8F5",
                      padding: "12px 16px",
                      borderRadius: 16,
                      fontSize: "0.9rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle2 size={18} color="#2D5A27" />
                      <span style={{ color: "#1F221B", fontWeight: 600 }}>0 Additif chimique</span>
                    </div>
                    <span style={{ color: "#2D5A27", fontWeight: 800 }}>30 / 30 pts</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#FAF8F5",
                      padding: "12px 16px",
                      borderRadius: 16,
                      fontSize: "0.9rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle2 size={18} color="#2D5A27" />
                      <span style={{ color: "#1F221B", fontWeight: 600 }}>Riche en antioxydants</span>
                    </div>
                    <span style={{ color: "#2D5A27", fontWeight: 800 }}>Nutri-Score B</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#FAF8F5",
                      padding: "12px 16px",
                      borderRadius: 16,
                      fontSize: "0.9rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Sparkles size={18} color="#3A7D44" />
                      <span style={{ color: "#1F221B", fontWeight: 600 }}>Agriculture Biologique</span>
                    </div>
                    <span style={{ color: "#3A7D44", fontWeight: 800 }}>+10 pts Bio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: FLUID CHAPTER 1 - QUALITÉ NUTRITIONNELLE 60% */}
        <section id="criteres-detail" style={{ padding: "60px 0", borderTop: "1px solid rgba(61, 58, 52, 0.08)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 56,
              alignItems: "center",
            }}
          >
            {/* Left: Giant Display Typography */}
            <div>
              <span className="yuka-giant-num yuka-num-green">60%</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 2.6rem)",
                  color: "#1F221B",
                  fontWeight: 800,
                  margin: "8px 0 18px",
                  fontFamily: "var(--font-display)",
                }}
              >
                La <span className="highlight-green">qualité nutritionnelle</span>
              </h2>

              <p style={{ color: "#5C564B", fontSize: "1.08rem", lineHeight: 1.75, margin: "0 0 24px" }}>
                Ce premier critère évalue l'équilibre général de l'aliment via la méthode scientifique du <strong>Nutri-Score</strong>. Il valorise les composants protecteurs (fibres, protéines, légumes, fruits, huile d'olive) et pénalise les excès en calories, sucres simples, sel et graisses saturées.
              </p>

              <Link
                href="/methodologie/qualite-nutritionnelle"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#2D5A27",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                Explorer le calcul Nutri-Score en détail <ChevronRight size={18} />
              </Link>
            </div>

            {/* Right: Interactive Nutri-Score Spectrum Bar */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 32,
                padding: "36px 32px",
                border: "1px solid rgba(61, 58, 52, 0.08)",
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.03)",
              }}
            >
              <h3 style={{ fontSize: "1.15rem", color: "#1F221B", margin: "0 0 16px", fontWeight: 800 }}>
                La conversion en note de 0 à 100 :
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: 8,
                  marginBottom: 24,
                }}
              >
                {(["A", "B", "C", "D", "E"] as const).map((grade) => {
                  const isCurrent = activeNutri === grade;
                  const gradeStyles = {
                    A: { bg: "#2D5A27", label: "75-100" },
                    B: { bg: "#60992D", label: "50-74" },
                    C: { bg: "#D98C00", label: "35-49" },
                    D: { bg: "#D9531E", label: "20-34" },
                    E: { bg: "#C73E1D", label: "0-19" },
                  }[grade];

                  return (
                    <button
                      key={grade}
                      onClick={() => setActiveNutri(grade)}
                      style={{
                        background: gradeStyles.bg,
                        color: "#FFFFFF",
                        border: isCurrent ? "3px solid #1F221B" : "none",
                        borderRadius: 16,
                        padding: "16px 8px",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                        transform: isCurrent ? "scale(1.08)" : "scale(1)",
                        boxShadow: isCurrent ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem", fontWeight: 900 }}>{grade}</span>
                      <span style={{ fontSize: "0.72rem", opacity: 0.9, fontWeight: 600 }}>
                        {gradeStyles.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div style={{ background: "#FAF8F5", padding: "16px 20px", borderRadius: 18, fontSize: "0.92rem", color: "#5C564B", lineHeight: 1.6 }}>
                {activeNutri === "A" && "Note 75 à 100 : Aliments les plus équilibrés (légumes, dattes fraîches, poissons, légumineuses)."}
                {activeNutri === "B" && "Note 50 à 74 : Bons choix alimentaires du quotidien (pain complet, huile d'olive, yaourt nature)."}
                {activeNutri === "C" && "Note 35 à 49 : Produits à consommer avec modération (fromages traditionnels, semoules riches)."}
                {activeNutri === "D" && "Note 20 à 34 : Aliments trop gras, sucrés ou salés (biscuits industriels, chips)."}
                {activeNutri === "E" && "Note 0 à 19 : Produits ultra-transformés à éviter (sodas, pâtes à tartiner riches en huile de palme)."}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FLUID CHAPTER 2 - LES ADDITIFS 30% */}
        <section style={{ padding: "60px 0", borderTop: "1px solid rgba(61, 58, 52, 0.08)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 56,
              alignItems: "center",
            }}
          >
            {/* Left: 4 Tier Visual Risk Matrix */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 32,
                padding: "36px 32px",
                border: "1px solid rgba(61, 58, 52, 0.08)",
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#F4F9EE", borderRadius: 18, border: "1px solid #2D5A27" }}>
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#2D5A27", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#2D5A27", fontSize: "0.95rem" }}>Pastille verte · Sans risque</strong>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#2E4828" }}>0 pénalité (ex : Acide citrique E330, Pectine E440)</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#FFFDF0", borderRadius: 18, border: "1px solid #D98C00" }}>
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#D98C00", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#8A5A00", fontSize: "0.95rem" }}>Pastille jaune · Risque limité</strong>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#593B00" }}>-6 points par additif (ex : Lécithines E322)</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#FFF4EB", borderRadius: 18, border: "1px solid #D9531E" }}>
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#D9531E", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#A83C11", fontSize: "0.95rem" }}>Pastille orange · Risque modéré</strong>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#662007" }}>-15 points par additif (ex : Caramel au sulfite E150d)</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#FDECE7", borderRadius: 18, border: "1.5px solid #C73E1D" }}>
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#C73E1D", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#992107", fontSize: "0.95rem" }}>Pastille rouge · À risque élevé</strong>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#6A1400" }}>-30 points & note plafonnée à 49/100 MAX</p>
                </div>
              </div>
            </div>

            {/* Right: Narrative Typography */}
            <div>
              <span className="yuka-giant-num yuka-num-orange">30%</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 2.6rem)",
                  color: "#1F221B",
                  fontWeight: 800,
                  margin: "8px 0 18px",
                  fontFamily: "var(--font-display)",
                }}
              >
                L'analyse des <span className="highlight-orange">additifs chimiques</span>
              </h2>

              <p style={{ color: "#5C564B", fontSize: "1.08rem", lineHeight: 1.75, margin: "0 0 24px" }}>
                Chaque conservateur, colorant ou épaississant fait l'objet d'un examen toxicologique rigoureux basé sur les avis officiels de l'<strong>EFSA</strong>, de l'<strong>ANSES</strong> et du <strong>CIRC/OMS</strong>. La règle du plafonnement empêche tout produit contenant un additif rouge de dépasser 49/100.
              </p>

              <Link
                href="/methodologie/analyse-des-additifs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#D9531E",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                Voir les critères scientifiques des additifs <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: FLUID CHAPTER 3 - BIO ET TERROIR 10% */}
        <section style={{ padding: "60px 0", borderTop: "1px solid rgba(61, 58, 52, 0.08)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <span className="yuka-giant-num yuka-num-amber">10%</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 2.6rem)",
                  color: "#1F221B",
                  fontWeight: 800,
                  margin: "8px 0 18px",
                  fontFamily: "var(--font-display)",
                }}
              >
                Le bonus <span className="highlight-amber">Bio & Terroir tunisien</span>
              </h2>

              <p style={{ color: "#5C564B", fontSize: "1.08rem", lineHeight: 1.75, margin: "0 0 24px" }}>
                Un bonus forfaitaire de <strong>10 points</strong> récompense les produits certifiés issus de l'Agriculture Biologique et valorise les filières locales qui préservent nos sols sans pesticides de synthèse.
              </p>

              <Link
                href="/methodologie/base-de-donnees"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#2D5A27",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                Découvrir la base citoyenne ouverte <ChevronRight size={18} />
              </Link>
            </div>

            <div
              style={{
                position: "relative",
                height: 280,
                borderRadius: 32,
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(31, 34, 27, 0.08)",
                border: "1px solid rgba(61, 58, 52, 0.06)",
              }}
            >
              <Image
                src="/assets_v2/methodology_trust.jpg"
                alt="Agriculture biologique et terroir tunisien"
                fill
                style={{ objectFit: "cover" }}
              />
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
