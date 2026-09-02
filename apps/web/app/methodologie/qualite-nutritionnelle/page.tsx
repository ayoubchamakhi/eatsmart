import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  Salad,
  Apple,
  Scale,
  Gauge,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Qualité Nutritionnelle : Comment est calculée la note ? | Eats.tn",
  description:
    "Découvrez comment Eatsmart évalue la qualité nutritionnelle des aliments en Tunisie : formule du Nutri-Score officiel, équilibre des macronutriments et valorisation du terroir.",
};

export default function QualiteNutritionnellePage() {
  return (
    <div className="yuka-page-wrap">
      <Header />

      <main className="yuka-container">
        {/* Breadcrumbs */}
        <Breadcrumb
          items={[
            { label: "Méthodologie", href: "/methodologie" },
            { label: "Qualité nutritionnelle" },
          ]}
        />

        {/* Hero Section */}
        <SubpageHero
          badgeIcon={<Award size={16} />}
          badgeText="60% de la note globale Eatsmart"
          badgeVariant="sage"
          title="La qualité nutritionnelle des aliments"
          description="La qualité nutritionnelle constitue la part prépondérante de notre évaluation (60 points sur 100). Elle s'appuie sur la méthode validée du Nutri-Score pour encourager les aliments protecteurs pour la santé."
          imageSrc="/assets_v2/methodology_nutrition.jpg"
          imageAlt="Qualité nutritionnelle et équilibre alimentaire"
        />

        {/* Nutri-Score A to E Visual Reference Grid */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Gauge size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  L'échelle officielle Nutri-Score de référence (A à E)
                </h2>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#6E675C" }}>
                  Conversion mathématique continue de la formule scientifique vers notre note de 0 à 100
                </p>
              </div>
            </div>

            <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: 28 }}>
              Le Nutri-Score attribue des points négatifs (de 0 à 40) aux composants dont la consommation excessive est néfaste, et des points positifs (de 0 à 15) aux nutriments protecteurs. Eatsmart convertit ce score en une note intuitive sur 100 :
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                gap: 16,
              }}
            >
              {/* Grade A */}
              <div
                style={{
                  background: "#EDF7ED",
                  border: "1.5px solid #2D5A27",
                  borderRadius: 20,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "#2D5A27",
                    color: "#FFFFFF",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    lineHeight: "44px",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    marginBottom: 10,
                  }}
                >
                  A
                </span>
                <strong style={{ display: "block", color: "#2D5A27", fontSize: "1rem", marginBottom: 4 }}>
                  Excellent
                </strong>
                <span style={{ color: "#4A6E44", fontSize: "0.85rem", fontWeight: 600 }}>
                  Note : 75 à 100
                </span>
              </div>

              {/* Grade B */}
              <div
                style={{
                  background: "#F4F9EE",
                  border: "1.5px solid #60992D",
                  borderRadius: 20,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "#60992D",
                    color: "#FFFFFF",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    lineHeight: "44px",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    marginBottom: 10,
                  }}
                >
                  B
                </span>
                <strong style={{ display: "block", color: "#60992D", fontSize: "1rem", marginBottom: 4 }}>
                  Bon
                </strong>
                <span style={{ color: "#547E28", fontSize: "0.85rem", fontWeight: 600 }}>
                  Note : 50 à 74
                </span>
              </div>

              {/* Grade C */}
              <div
                style={{
                  background: "#FFFDF0",
                  border: "1.5px solid #E5A800",
                  borderRadius: 20,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "#E5A800",
                    color: "#FFFFFF",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    lineHeight: "44px",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    marginBottom: 10,
                  }}
                >
                  C
                </span>
                <strong style={{ display: "block", color: "#B38300", fontSize: "1rem", marginBottom: 4 }}>
                  Médiocre
                </strong>
                <span style={{ color: "#8C6600", fontSize: "0.85rem", fontWeight: 600 }}>
                  Note : 35 à 49
                </span>
              </div>

              {/* Grade D */}
              <div
                style={{
                  background: "#FFF4EB",
                  border: "1.5px solid #D9531E",
                  borderRadius: 20,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "#D9531E",
                    color: "#FFFFFF",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    lineHeight: "44px",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    marginBottom: 10,
                  }}
                >
                  D
                </span>
                <strong style={{ display: "block", color: "#D9531E", fontSize: "1rem", marginBottom: 4 }}>
                  Mauvais
                </strong>
                <span style={{ color: "#A83C11", fontSize: "0.85rem", fontWeight: 600 }}>
                  Note : 20 à 34
                </span>
              </div>

              {/* Grade E */}
              <div
                style={{
                  background: "#FDECE7",
                  border: "1.5px solid #C73E1D",
                  borderRadius: 20,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "#C73E1D",
                    color: "#FFFFFF",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    lineHeight: "44px",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    marginBottom: 10,
                  }}
                >
                  E
                </span>
                <strong style={{ display: "block", color: "#C73E1D", fontSize: "1rem", marginBottom: 4 }}>
                  Très mauvais
                </strong>
                <span style={{ color: "#992911", fontSize: "0.85rem", fontWeight: 600 }}>
                  Note : 0 à 19
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Two-column Positive vs Negative Comparison */}
        <section style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 28,
            }}
          >
            {/* Nutriments Protecteurs */}
            <div
              className="yuka-card"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid rgba(45, 90, 39, 0.18)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div className="yuka-icon-bubble yuka-bubble-sage">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", color: "#2D5A27", margin: 0, fontWeight: 800 }}>
                    Nutriments protecteurs (+)
                  </h3>
                  <span style={{ color: "#6E675C", fontSize: "0.85rem" }}>Composants qui augmentent la note</span>
                </div>
              </div>

              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 20 }}>
                Ces éléments sont bénéfiques pour la prévention des maladies cardiovasculaires, le diabète et le microbiote :
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <span style={{ color: "#2D5A27", fontWeight: 800, fontSize: "1.1rem" }}>•</span>
                  <div>
                    <strong>Fibres alimentaires :</strong> favorisent la satiété, régulent la glycémie et améliorent le transit.
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <span style={{ color: "#2D5A27", fontWeight: 800, fontSize: "1.1rem" }}>•</span>
                  <div>
                    <strong>Protéines végétales & animales :</strong> indispensables au maintien de la masse musculaire.
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <span style={{ color: "#2D5A27", fontWeight: 800, fontSize: "1.1rem" }}>•</span>
                  <div>
                    <strong>Fruits, légumes, légumineuses & fruits à coque :</strong> sources d'antioxydants et polyphénols.
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <span style={{ color: "#2D5A27", fontWeight: 800, fontSize: "1.1rem" }}>•</span>
                  <div>
                    <strong>Huiles riches en acides gras insaturés :</strong> comme l'huile d'olive tunisienne.
                  </div>
                </li>
              </ul>
            </div>

            {/* Éléments à limiter */}
            <div
              className="yuka-card"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid rgba(199, 62, 29, 0.18)",
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
                  <span style={{ color: "#6E675C", fontSize: "0.85rem" }}>Composants qui pénalisent la note</span>
                </div>
              </div>

              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 20 }}>
                Ces éléments sont directement associés aux pathologies chroniques lorsqu'ils sont consommés en excès :
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "#6A2210", lineHeight: 1.6 }}>
                  <span style={{ color: "#C73E1D", fontWeight: 800, fontSize: "1.1rem" }}>•</span>
                  <div>
                    <strong>Sucres simples & ajoutés :</strong> provoquent des pics d'insuline et favorisent la surcharge hépatique.
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "#6A2210", lineHeight: 1.6 }}>
                  <span style={{ color: "#C73E1D", fontWeight: 800, fontSize: "1.1rem" }}>•</span>
                  <div>
                    <strong>Acides gras saturés :</strong> favorisent le cholestérol LDL et l'athérosclérose.
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "#6A2210", lineHeight: 1.6 }}>
                  <span style={{ color: "#C73E1D", fontWeight: 800, fontSize: "1.1rem" }}>•</span>
                  <div>
                    <strong>Sel (Sodium) :</strong> facteur majeur d'hypertension artérielle et de rétention hydrosodée.
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "#6A2210", lineHeight: 1.6 }}>
                  <span style={{ color: "#C73E1D", fontWeight: 800, fontSize: "1.1rem" }}>•</span>
                  <div>
                    <strong>Forte densité calorique (kJ/100g) :</strong> excès énergétique par rapport au volume ingéré.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tunisian Terroir Specificity Card */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card" style={{ background: "#F5F8F3" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Salad size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.35rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  Prise en compte des spécificités du terroir tunisien
                </h3>
                <p style={{ color: "#4A5243", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}>
                  Le modèle d'Eatsmart veille à valoriser équitablement les trésors nutritionnels de la Tunisie : l'<strong>Huile d'Olive Vierge Extra</strong> (reconnue mondialement pour son profil d'acides gras protecteurs), les <strong>Dattes Deglet Nour</strong> (riches en potassium et fibres solubles) et la <strong>Harissa traditionnelle pure piment</strong> (sans amidon ni conservateur chimique) reçoivent une notation valorisante face aux sauces industrielles ultra-transformées.
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
