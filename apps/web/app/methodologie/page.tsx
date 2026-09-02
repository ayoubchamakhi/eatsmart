import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Award,
  Beaker,
  Database,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  PieChart,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Notre Méthodologie d'Évaluation | Eats.tn",
  description:
    "Comment Eatsmart évalue les produits alimentaires en Tunisie : qualité nutritionnelle (60%), additifs (30%) et dimension Bio & Terroir (10%).",
};

export default function MethodologieHubPage() {
  return (
    <>
      <Header />

      <main style={{ background: "#FBF9F5", minHeight: "100vh", paddingBottom: 60 }}>
        {/* Breadcrumb Navigation */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "24px 20px 8px" }}>
          <nav
            aria-label="Fil d'Ariane"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: "0.84rem",
              color: "#6E675C",
            }}
          >
            <Link href="/" style={{ color: "#2D5A27", textDecoration: "none", fontWeight: 600 }}>
              Accueil
            </Link>
            <ChevronRight size={14} color="#A8A297" />
            <span style={{ color: "#1F221B", fontWeight: 700 }}>Méthodologie d'analyse</span>
          </nav>
        </div>

        {/* Hero Header */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "16px 20px 32px", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              backgroundColor: "#EBF3E8",
              color: "#2D5A27",
              padding: "6px 16px",
              borderRadius: 999,
              fontSize: "0.85rem",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            <ShieldCheck size={16} /> 100% Scientifique et Indépendant
          </div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              color: "#1F221B",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 0 16px",
              fontFamily: "var(--font-display)",
            }}
          >
            Notre méthodologie d'analyse
          </h1>
          <p
            style={{
              color: "#6E675C",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: 660,
              margin: "0 auto",
            }}
          >
            Découvrez en toute transparence comment chaque produit alimentaire scanné en Tunisie est analysé et noté de 0 à 100 par notre algorithme neutre.
          </p>
        </div>

        {/* Global Formula Breakdown Bar */}
        <div style={{ maxWidth: 940, margin: "0 auto 32px", padding: "0 20px" }}>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "24px 28px",
              border: "1px solid rgba(45, 90, 39, 0.15)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <PieChart size={20} color="#2D5A27" />
                <strong style={{ color: "#1F221B", fontSize: "1.05rem" }}>
                  Composition de la note Eatsmart (0 à 100)
                </strong>
              </div>
              <span style={{ fontSize: "0.85rem", color: "#6E675C", fontWeight: 600 }}>
                Formule universelle et publique
              </span>
            </div>

            {/* Visual Bar */}
            <div
              style={{
                height: 14,
                borderRadius: 999,
                overflow: "hidden",
                display: "flex",
                width: "100%",
                background: "#EBE6DD",
                marginBottom: 16,
              }}
            >
              <div style={{ width: "60%", background: "#2D5A27", height: "100%" }} title="60% Qualité nutritionnelle" />
              <div style={{ width: "30%", background: "#D9531E", height: "100%" }} title="30% Additifs" />
              <div style={{ width: "10%", background: "#3A7D44", height: "100%" }} title="10% Bio & Terroir" />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                fontSize: "0.88rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#2D5A27", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#1F221B", display: "block" }}>60% Qualité nutritionnelle</strong>
                  <span style={{ color: "#6E675C", fontSize: "0.82rem" }}>Formule Nutri-Score officielle</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#D9531E", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#1F221B", display: "block" }}>30% Présence des additifs</strong>
                  <span style={{ color: "#6E675C", fontSize: "0.82rem" }}>Avis toxicologiques EFSA</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#3A7D44", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#1F221B", display: "block" }}>10% Bio & Terroir tunisien</strong>
                  <span style={{ color: "#6E675C", fontSize: "0.82rem" }}>Certifications et circuits locaux</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Interactive Deep-dive Cards */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Card 1: Qualité nutritionnelle */}
          <Link
            href="/methodologie/qualite-nutritionnelle"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 24,
                padding: "28px 32px",
                border: "1px solid rgba(61, 58, 52, 0.08)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.02)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 28,
                alignItems: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "relative", height: 180, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/assets_v2/methodology_nutrition.jpg"
                  alt="Qualité nutritionnelle"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    background: "#EBF3E8",
                    color: "#2D5A27",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginBottom: 10,
                  }}
                >
                  60% de la note
                </span>
                <h2 style={{ fontSize: "1.45rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  Qualité nutritionnelle
                </h2>
                <p style={{ color: "#6E675C", fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 16px" }}>
                  Basée sur le Nutri-Score officiel, cette dimension évalue les macronutriments à favoriser (fibres, protéines, fruits et légumes) contre ceux à limiter (calories, sucres simples, sel, acides gras saturés).
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#2D5A27", fontWeight: 700, fontSize: "0.92rem" }}>
                  Découvrir les critères de calcul <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: Analyse des additifs */}
          <Link
            href="/methodologie/analyse-des-additifs"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 24,
                padding: "28px 32px",
                border: "1px solid rgba(61, 58, 52, 0.08)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.02)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 28,
                alignItems: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "relative", height: 180, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/assets_v2/methodology_additives.jpg"
                  alt="Analyse des additifs"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    background: "#FEECE6",
                    color: "#D9531E",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginBottom: 10,
                  }}
                >
                  30% de la note
                </span>
                <h2 style={{ fontSize: "1.45rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  Analyse des additifs
                </h2>
                <p style={{ color: "#6E675C", fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 16px" }}>
                  Évaluation rigoureuse selon les rapports toxicologiques de l'EFSA et de l'OMS : chaque additif présent est classé en 4 niveaux de risque (sans risque, limité, modéré, élevé) avec malus proportionnel.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#D9531E", fontWeight: 700, fontSize: "0.92rem" }}>
                  Consulter les 4 niveaux de risque <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3: Base de données */}
          <Link
            href="/methodologie/base-de-donnees"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 24,
                padding: "28px 32px",
                border: "1px solid rgba(61, 58, 52, 0.08)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.02)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 28,
                alignItems: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "relative", height: 180, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/assets_v2/methodology_database.jpg"
                  alt="Base de données citoyenne"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    background: "#EBF3E8",
                    color: "#2D5A27",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginBottom: 10,
                  }}
                >
                  10% de la note + Open Data
                </span>
                <h2 style={{ fontSize: "1.45rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  Base de données citoyenne
                </h2>
                <p style={{ color: "#6E675C", fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 16px" }}>
                  Propulsée par Open Food Facts et les ajouts collaboratifs des consommateurs dans les supermarchés tunisiens. Système d'audit photo, détection OCR et bonus pour les produits certifiés Bio.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#2D5A27", fontWeight: 700, fontSize: "0.92rem" }}>
                  Comprendre le modèle collaboratif <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
