import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  Beaker,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  FlaskConical,
  ShieldAlert,
  Sparkles,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Analyse des Additifs : Critères Scientifiques & Niveaux de Risque | Eats.tn",
  description:
    "Comment Eatsmart évalue les additifs alimentaires en Tunisie : avis de l'EFSA et du CIRC, 4 niveaux de risque (Vert, Jaune, Orange, Rouge) et règle du plafonnement à 49/100.",
};

export default function AnalyseAdditifsPage() {
  return (
    <div className="yuka-page-wrap">
      <Header />

      <main className="yuka-container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Méthodologie", href: "/methodologie" },
            { label: "Analyse des additifs" },
          ]}
        />

        {/* Hero Section */}
        <SubpageHero
          badgeIcon={<Beaker size={16} />}
          badgeText="30% de la note globale Eatsmart"
          badgeVariant="coral"
          title="L'analyse scientifique des additifs alimentaires"
          description="Les additifs (conservateurs, colorants, émulsifiants, exhausteurs de goût) représentent 30% du score. Chaque substance fait l'objet d'un examen minutieux selon l'état actuel de la recherche toxicologique indépendante."
          imageSrc="/assets_v2/methodology_additives.jpg"
          imageAlt="Laboratoire scientifique d'analyse toxicologique des additifs"
        />

        {/* The 4 Yuka Risk Tiers */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div className="yuka-icon-bubble yuka-bubble-coral">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Les 4 niveaux de risque pour la santé
                </h2>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#6E675C" }}>
                  Une classification rigoureuse basée sur les consensus toxicologiques internationaux
                </p>
              </div>
            </div>

            <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: 28 }}>
              Nous croisons les rapports de l'<strong>EFSA</strong> (Autorité européenne de sécurité des aliments), de l'<strong>ANSES</strong>, du <strong>CIRC / OMS</strong> (Centre international de recherche sur le cancer) ainsi que des revues académiques indépendantes à comité de lecture :
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Tier 1: Sans risque */}
              <div
                style={{
                  background: "#F4F9EE",
                  border: "1.5px solid #2D5A27",
                  borderRadius: 22,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#2D5A27",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                    <h3 style={{ fontSize: "1.15rem", color: "#2D5A27", margin: 0, fontWeight: 800 }}>
                      1. Sans risque (Pastille verte)
                    </h3>
                    <span
                      style={{
                        background: "#EBF3E8",
                        color: "#2D5A27",
                        padding: "3px 10px",
                        borderRadius: 9999,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      0 malus (Aucun impact)
                    </span>
                  </div>
                  <p style={{ color: "#2E4828", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                    Additifs inoffensifs aux doses consommées ou d'origine naturelle largement documentés. Exemples : <strong>Acide citrique (E330)</strong>, <strong>Pectine de fruits (E440)</strong>, <strong>Curcumine (E100)</strong>. Ils ne réduisent en rien la note du produit.
                  </p>
                </div>
              </div>

              {/* Tier 2: Risque limité */}
              <div
                style={{
                  background: "#FFFDF0",
                  border: "1.5px solid #D98C00",
                  borderRadius: 22,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#D98C00",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Info size={24} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                    <h3 style={{ fontSize: "1.15rem", color: "#8A5A00", margin: 0, fontWeight: 800 }}>
                      2. Risque limité (Pastille jaune)
                    </h3>
                    <span
                      style={{
                        background: "#FEF8E7",
                        color: "#C47F00",
                        padding: "3px 10px",
                        borderRadius: 9999,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      -6 points par additif
                    </span>
                  </div>
                  <p style={{ color: "#593B00", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                    Substances pour lesquelles des sensibilités digestives mineures ou des réactions allergiques légères ont été constatées chez les personnes prédisposées. Exemples : <strong>Lécithines (E322)</strong>, <strong>Gomme de guar (E412)</strong>.
                  </p>
                </div>
              </div>

              {/* Tier 3: Risque modéré */}
              <div
                style={{
                  background: "#FFF4EB",
                  border: "1.5px solid #D9531E",
                  borderRadius: 22,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#D9531E",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                    <h3 style={{ fontSize: "1.15rem", color: "#A83C11", margin: 0, fontWeight: 800 }}>
                      3. Risque modéré (Pastille orange)
                    </h3>
                    <span
                      style={{
                        background: "#FEF3EB",
                        color: "#D9531E",
                        padding: "3px 10px",
                        borderRadius: 9999,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      -15 points par additif
                    </span>
                  </div>
                  <p style={{ color: "#662007", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                    Additifs suspectés d'altérer la perméabilité de la muqueuse intestinale, de modifier le microbiote ou de causer des inflammations chroniques. Exemples : <strong>Caramel au sulfite d'ammonium (E150d)</strong> très présent dans les sodas, <strong>Polysorbates (E433)</strong>, <strong>Carboxyméthylcellulose (E466)</strong>.
                  </p>
                </div>
              </div>

              {/* Tier 4: Risque élevé */}
              <div
                style={{
                  background: "#FDECE7",
                  border: "1.5px solid #C73E1D",
                  borderRadius: 22,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#C73E1D",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <XCircle size={24} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                    <h3 style={{ fontSize: "1.15rem", color: "#992107", margin: 0, fontWeight: 800 }}>
                      4. À risque élevé (Pastille rouge)
                    </h3>
                    <span
                      style={{
                        background: "#FDECE7",
                        color: "#C73E1D",
                        padding: "3px 10px",
                        borderRadius: 9999,
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        border: "1px solid #C73E1D",
                      }}
                    >
                      -30 points & Score plafonné à 49/100 MAX
                    </span>
                  </div>
                  <p style={{ color: "#6A1400", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                    Substances classées cancérogènes probables, perturbateurs endocriniens avérés ou mutagènes. Exemples : <strong>Nitrite de sodium (E250)</strong> dans la charcuterie industrielle, <strong>Dioxyde de titane (E171)</strong>, <strong>Tartrazine (E102)</strong>. La présence d'un seul additif rouge <strong>bloque automatiquement la note globale du produit à un maximum de 49/100</strong> (notation "Médiocre"), même si le Nutri-Score est vert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cocktail Effect & Precaution Principle Card */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card" style={{ background: "#F5F8F3" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <FlaskConical size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.35rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  Principe de précaution & effet cocktail
                </h3>
                <p style={{ color: "#4A5243", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}>
                  Lorsqu'un produit accumule plusieurs additifs de natures différentes, leurs interactions chimiques peuvent amplifier leur nocivité : c'est <strong>l'effet cocktail</strong>. Fidèle à sa mission citoyenne indépendante, Eatsmart applique un <strong>principe de précaution strict</strong> : dès lors qu'un doute scientifique sérieux et légitime est documenté dans des publications indépendantes, l'algorithme privilégie sans compromis la santé et la sécurité du consommateur tunisien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Banner */}
        <DownloadCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
