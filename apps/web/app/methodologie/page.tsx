import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  Award,
  Beaker,
  Database,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PieChart,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Notre Méthode d'Évaluation | Eats.tn (Eatsmart)",
  description:
    "Découvrez la méthode de notation 100% indépendante d'Eatsmart en Tunisie : qualité nutritionnelle (60%), additifs (30%) et dimension Bio & Terroir (10%).",
};

export default function MethodologieHubPage() {
  return (
    <div className="yuka-page-wrap">
      <Header />

      <main className="yuka-container">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: "Méthodologie" }]} />

        {/* Hero Section */}
        <SubpageHero
          badgeIcon={<ShieldCheck size={16} />}
          badgeText="100% Scientifique & Indépendant"
          badgeVariant="sage"
          title="Notre méthode d'évaluation des aliments"
          description="Découvrez en toute transparence comment chaque produit scanné en Tunisie est analysé et noté de 0 à 100 par notre algorithme public, neutre et rigoureux."
          imageSrc="/assets_v2/methodology_trust.jpg"
          imageAlt="Méthode d'analyse indépendante Eatsmart Tunisie"
        />

        {/* The 60/30/10 Score Composition Card */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card" style={{ border: "1.5px solid rgba(45, 90, 39, 0.15)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="yuka-icon-bubble yuka-bubble-sage" style={{ width: 44, height: 44 }}>
                  <PieChart size={22} />
                </div>
                <div>
                  <h2 style={{ fontSize: "1.25rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                    La formule de notation (0 à 100)
                  </h2>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#6E675C" }}>
                    Une pondération objective fondée sur la science médicale
                  </p>
                </div>
              </div>
              <span
                style={{
                  background: "#EBF3E8",
                  color: "#2D5A27",
                  padding: "5px 14px",
                  borderRadius: 9999,
                  fontWeight: 700,
                  fontSize: "0.82rem",
                }}
              >
                Algorithme Public
              </span>
            </div>

            {/* Segmented Progress Bar */}
            <div
              style={{
                height: 18,
                borderRadius: 9999,
                overflow: "hidden",
                display: "flex",
                width: "100%",
                background: "#EAE6DF",
                marginBottom: 20,
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  width: "60%",
                  background: "linear-gradient(90deg, #2D5A27, #3A7D44)",
                  height: "100%",
                  transition: "width 0.4s ease",
                }}
                title="60% Qualité Nutritionnelle"
              />
              <div
                style={{
                  width: "30%",
                  background: "linear-gradient(90deg, #D9531E, #F27A3A)",
                  height: "100%",
                  transition: "width 0.4s ease",
                }}
                title="30% Additifs Alimentaires"
              />
              <div
                style={{
                  width: "10%",
                  background: "linear-gradient(90deg, #44894E, #62A86C)",
                  height: "100%",
                  transition: "width 0.4s ease",
                }}
                title="10% Bio & Terroir"
              />
            </div>

            {/* Pillar Breakdown Legend */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  background: "#FAF8F5",
                  padding: "16px 20px",
                  borderRadius: 18,
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#2D5A27",
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <strong style={{ color: "#1F221B", fontSize: "0.98rem", display: "block" }}>
                    60% Qualité nutritionnelle
                  </strong>
                  <span style={{ color: "#6E675C", fontSize: "0.85rem", lineHeight: 1.5 }}>
                    Basée sur le Nutri-Score officiel adapté aux habitudes tunisiennes.
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  background: "#FAF8F5",
                  padding: "16px 20px",
                  borderRadius: 18,
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#D9531E",
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <strong style={{ color: "#1F221B", fontSize: "0.98rem", display: "block" }}>
                    30% Présence des additifs
                  </strong>
                  <span style={{ color: "#6E675C", fontSize: "0.85rem", lineHeight: 1.5 }}>
                    Classés en 4 niveaux selon l'EFSA, l'ANSES et le CIRC.
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  background: "#FAF8F5",
                  padding: "16px 20px",
                  borderRadius: 18,
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#44894E",
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <strong style={{ color: "#1F221B", fontSize: "0.98rem", display: "block" }}>
                    10% Bio & Terroir
                  </strong>
                  <span style={{ color: "#6E675C", fontSize: "0.85rem", lineHeight: 1.5 }}>
                    Bonus récompensant les labels Bio et les circuits courts locaux.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Large Interactive Pillar Cards */}
        <section style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 48 }}>
          {/* Card 1: Nutrition */}
          <Link
            href="/methodologie/qualite-nutritionnelle"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="yuka-card yuka-card-interactive">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 36,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 220,
                    borderRadius: 22,
                    overflow: "hidden",
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Image
                    src="/assets_v2/methodology_nutrition.jpg"
                    alt="Qualité nutritionnelle et équilibre alimentaire"
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
                      padding: "5px 14px",
                      borderRadius: 9999,
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 12,
                    }}
                  >
                    60% de la note finale
                  </span>
                  <h3
                    style={{
                      fontSize: "1.7rem",
                      color: "#1F221B",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      margin: "0 0 12px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Qualité nutritionnelle
                  </h3>
                  <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.65, margin: "0 0 20px" }}>
                    Basée sur la méthode officielle du Nutri-Score, cette composante évalue l'équilibre entre nutriments à favoriser (fibres, protéines, fruits et légumes) et éléments à limiter (sucres simples, sel, graisses saturées, calories).
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#2D5A27",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    Comprendre le calcul du Nutri-Score <ChevronRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Additifs */}
          <Link
            href="/methodologie/analyse-des-additifs"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="yuka-card yuka-card-interactive">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 36,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 220,
                    borderRadius: 22,
                    overflow: "hidden",
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Image
                    src="/assets_v2/methodology_additives.jpg"
                    alt="Analyse scientifique des additifs alimentaires"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#FEF3EB",
                      color: "#D9531E",
                      padding: "5px 14px",
                      borderRadius: 9999,
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 12,
                    }}
                  >
                    30% de la note finale
                  </span>
                  <h3
                    style={{
                      fontSize: "1.7rem",
                      color: "#1F221B",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      margin: "0 0 12px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Analyse des additifs
                  </h3>
                  <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.65, margin: "0 0 20px" }}>
                    Chaque additif est évalué selon l'état actuel de la recherche toxicologique indépendante. Les additifs sont classés en 4 niveaux de risque (Sans risque, Risque limité, Risque modéré, À risque) avec pénalités proportionnelles.
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#D9531E",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    Découvrir les 4 niveaux de risque <ChevronRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3: Base de données & Bio */}
          <Link
            href="/methodologie/base-de-donnees"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="yuka-card yuka-card-interactive">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 36,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 220,
                    borderRadius: 22,
                    overflow: "hidden",
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Image
                    src="/assets_v2/methodology_database.jpg"
                    alt="Base de données citoyenne ouverte et collaborative"
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
                      padding: "5px 14px",
                      borderRadius: 9999,
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 12,
                    }}
                  >
                    10% de bonus + Open Data
                  </span>
                  <h3
                    style={{
                      fontSize: "1.7rem",
                      color: "#1F221B",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      margin: "0 0 12px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Base de données citoyenne
                  </h3>
                  <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.65, margin: "0 0 20px" }}>
                    La base d'Eatsmart est un bien commun public alimenté par les consommateurs en Tunisie et synchronisé avec Open Food Facts. Un bonus de 10 points récompense les produits certifiés issus de l'Agriculture Biologique.
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#2D5A27",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    Explorer le catalogue collaboratif <ChevronRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Independence & Neutrality Reassurance Card */}
        <section style={{ marginBottom: 40 }}>
          <div
            className="yuka-card"
            style={{
              background: "#F5F2EB",
              border: "1px solid rgba(61, 58, 52, 0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Lock size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.35rem", color: "#1F221B", margin: "0 0 8px", fontWeight: 800 }}>
                  Une formule identique pour toutes les marques, sans exception
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Aucune marque agroalimentaire ni groupe de la grande distribution ne peut verser d'argent pour influencer la formule, masquer un additif ou sponsoriser ses produits dans l'application. La note est 100% calculée par l'algorithme à partir des informations figurant obligatoirement sur l'emballage.
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
