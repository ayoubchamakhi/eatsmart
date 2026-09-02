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
  Beaker,
  ShieldAlert,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  FlaskConical,
  Sparkles,
  Search,
} from "lucide-react";

export default function AnalyseAdditifsPage() {
  const [activeTier, setActiveTier] = useState<"vert" | "jaune" | "orange" | "rouge">("rouge");

  const tiers = {
    vert: {
      color: "#2D5A27",
      bg: "#F4F9EE",
      border: "#2D5A27",
      label: "Sans risque (Pastille verte)",
      penalty: "0 malus (Aucune pénalité)",
      detail:
        "Additifs naturels ou parfaitement tolérés par l'organisme humain, sans toxicité prouvée aux doses d'usage.",
      additives: [
        { code: "E330", name: "Acide citrique", role: "Acidifiant naturel d'agrumes" },
        { code: "E440", name: "Pectine", role: "Gélifiant issu de pépins de pommes" },
        { code: "E300", name: "Acide ascorbique", role: "Vitamine C antioxydante" },
        { code: "E160a", name: "Bêta-carotène", role: "Colorant végétal de carotte" },
      ],
    },
    jaune: {
      color: "#D98C00",
      bg: "#FFFDF0",
      border: "#D98C00",
      label: "Risque limité (Pastille jaune)",
      penalty: "-6 points par additif",
      detail:
        "Substances susceptibles de provoquer des sensibilités digestives légères ou des réactions allergiques chez les sujets sensibles.",
      additives: [
        { code: "E322", name: "Lécithines", role: "Émulsifiant (soja ou tournesol)" },
        { code: "E412", name: "Gomme de guar", role: "Épaississant végétal" },
        { code: "E415", name: "Gomme xanthane", role: "Stabilisant de texture" },
      ],
    },
    orange: {
      color: "#D9531E",
      bg: "#FFF4EB",
      border: "#D9531E",
      label: "Risque modéré (Pastille orange)",
      penalty: "-15 points par additif",
      detail:
        "Additifs chimiques suspectés de perturber la barrière intestinale, d'altérer le microbiote ou de créer des micro-inflammations chroniques.",
      additives: [
        { code: "E150d", name: "Caramel au sulfite d'ammonium", role: "Colorant sodas et colas" },
        { code: "E433", name: "Polysorbate 80", role: "Émulsifiant sauces industrielles" },
        { code: "E466", name: "Carboxyméthylcellulose", role: "Agent de texture ultra-transformé" },
      ],
    },
    rouge: {
      color: "#C73E1D",
      bg: "#FDECE7",
      border: "#C73E1D",
      label: "À risque élevé (Pastille rouge)",
      penalty: "-30 points & Score bloqué à 49/100 MAX",
      detail:
        "Substances classées cancérogènes probables, perturbateurs endocriniens avérés ou mutagènes par le CIRC ou l'EFSA. La présence d'un seul additif rouge verrouille immédiatement le score global à un maximum de 49/100 (Médiocre), même si le produit est très équilibré sur le plan calorique.",
      additives: [
        { code: "E250", name: "Nitrite de sodium", role: "Conservateur charcuterie industrielle (cancérogène probable)" },
        { code: "E171", name: "Dioxyde de titane", role: "Colorant blanc opaque (nanoparticules)" },
        { code: "E102", name: "Tartrazine", role: "Colorant jaune azoïque (hyperactivité)" },
        { code: "E951", name: "Aspartame", role: "Édulcorant de synthèse controversé" },
      ],
    },
  };

  const current = tiers[activeTier];

  return (
    <div className="yuka-page-wrap position-relative" style={{ overflowX: "hidden" }}>
      <Header />

      {/* Flanking decorative clouds */}
      <YukaFlankClouds variant="additives" />

      <main className="yuka-container position-relative" style={{ zIndex: 1, paddingBottom: 64 }}>
        <Breadcrumb
          items={[
            { label: "Méthodologie", href: "/methodologie" },
            { label: "Analyse des additifs" },
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
                  backgroundColor: "#FEF3EB",
                  color: "#D9531E",
                  padding: "7px 18px",
                  borderRadius: 9999,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                <Beaker size={16} />
                <span>30% de la note globale Eatsmart</span>
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
                L'analyse scientifique <br />
                <span style={{ color: "#D9531E" }}>des additifs</span>
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
                Chaque conservateur, antioxydant ou émulsifiant est examiné selon les études toxicologiques de l'EFSA, de l'ANSES et du CIRC. La présence de substances à risque entraîne des pénalités strictes et un plafonnement de la note.
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
                src="/assets_v2/methodology_additives.jpg"
                alt="Laboratoire d'analyse toxicologique des additifs"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* INTERACTIVE RISK TIER MATRIX */}
        <section style={{ marginBottom: 50 }}>
          <div className="yuka-card" style={{ border: "1.5px solid rgba(217, 83, 30, 0.15)" }}>
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 32px" }}>
              <h2
                style={{
                  fontSize: "1.7rem",
                  color: "#1F221B",
                  fontWeight: 800,
                  margin: "0 0 10px",
                  fontFamily: "var(--font-display)",
                }}
              >
                Les 4 niveaux de risque pour la santé
              </h2>
              <p style={{ color: "#5C564B", fontSize: "0.98rem", margin: 0 }}>
                Sélectionnez une pastille pour explorer les pénalités et les substances concernées :
              </p>
            </div>

            {/* 4 Tier Pill Selectors */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 12,
                marginBottom: 32,
              }}
            >
              {(
                [
                  { id: "vert", label: "Sans risque", color: "#2D5A27", bg: "#F4F9EE" },
                  { id: "jaune", label: "Risque limité", color: "#D98C00", bg: "#FFFDF0" },
                  { id: "orange", label: "Risque modéré", color: "#D9531E", bg: "#FFF4EB" },
                  { id: "rouge", label: "À risque élevé", color: "#C73E1D", bg: "#FDECE7" },
                ] as const
              ).map((t) => {
                const isSelected = activeTier === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTier(t.id)}
                    style={{
                      padding: "16px 14px",
                      borderRadius: 18,
                      border: isSelected ? `2.5px solid ${t.color}` : "1.5px solid rgba(61, 58, 52, 0.1)",
                      background: isSelected ? t.bg : "#FFFFFF",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      boxShadow: isSelected ? `0 6px 20px ${t.color}25` : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: t.color,
                        flexShrink: 0,
                      }}
                    />
                    <strong style={{ color: isSelected ? t.color : "#1F221B", fontSize: "0.95rem" }}>
                      {t.label}
                    </strong>
                  </button>
                );
              })}
            </div>

            {/* Active Tier Dynamic Details Card */}
            <div
              style={{
                background: current.bg,
                border: `1.5px solid ${current.border}`,
                borderRadius: 24,
                padding: "32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.4rem", color: current.color, fontWeight: 800 }}>
                  {current.label}
                </h3>
                <span
                  style={{
                    background: "#FFFFFF",
                    padding: "6px 16px",
                    borderRadius: 9999,
                    border: `1px solid ${current.border}`,
                    color: current.color,
                    fontWeight: 800,
                    fontSize: "0.92rem",
                  }}
                >
                  Pénalité : {current.penalty}
                </span>
              </div>

              <p style={{ color: "#3D3A34", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: 24 }}>
                {current.detail}
              </p>

              <div>
                <strong style={{ color: "#1F221B", fontSize: "0.95rem", display: "block", marginBottom: 12 }}>
                  Substances courantes de cette catégorie en Tunisie :
                </strong>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 12,
                  }}
                >
                  {current.additives.map((add, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(61, 58, 52, 0.08)",
                        padding: "12px 16px",
                        borderRadius: 14,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span
                          style={{
                            background: current.bg,
                            color: current.color,
                            fontWeight: 900,
                            fontSize: "0.85rem",
                            padding: "2px 8px",
                            borderRadius: 6,
                          }}
                        >
                          {add.code}
                        </span>
                        <strong style={{ color: "#1F221B", fontSize: "0.92rem" }}>{add.name}</strong>
                      </div>
                      <span style={{ color: "#6E675C", fontSize: "0.82rem" }}>{add.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COCKTAIL EFFECT & PRECAUTION PRINCIPLE */}
        <section style={{ marginBottom: 50 }}>
          <div className="yuka-card" style={{ background: "#F5F8F3", border: "1.5px solid rgba(45, 90, 39, 0.15)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <FlaskConical size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.35rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  L'effet cocktail et le principe de précaution
                </h3>
                <p style={{ color: "#4A5243", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}>
                  Lorsqu'un produit accumule plusieurs additifs chimiques différents, leurs interactions dans l'organisme peuvent démultiplier leur nocivité : c'est <strong>l'effet cocktail</strong>. Fidèle à sa mission d'intérêt général, Eatsmart applique un <strong>principe de précaution strict</strong> : dès lors qu'un risque toxicologique sérieux est documenté par la recherche indépendante, nous privilégions sans hésiter la santé du consommateur tunisien.
                </p>
              </div>
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
