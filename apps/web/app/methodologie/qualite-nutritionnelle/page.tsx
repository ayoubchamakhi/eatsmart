import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Award,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Apple,
  Scale,
  HeartHandshake,
  ChevronRight,
  Gauge,
  Salad,
} from "lucide-react";

export const metadata = {
  title: "Qualité Nutritionnelle : Comment est calculée la note ? | Eats.tn",
  description:
    "Découvrez comment Eatsmart évalue la qualité nutritionnelle des aliments en Tunisie : Nutri-Score officiel, équilibre des macronutriments et calcul du score.",
};

export default function QualiteNutritionnellePage() {
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
            <Link href="/methodologie" style={{ color: "#2D5A27", textDecoration: "none", fontWeight: 600 }}>
              Méthodologie
            </Link>
            <ChevronRight size={14} color="#A8A297" />
            <span style={{ color: "#1F221B", fontWeight: 700 }}>Qualité nutritionnelle</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "16px 20px 32px" }}>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              padding: "36px 36px",
              border: "1px solid rgba(61, 58, 52, 0.08)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  backgroundColor: "#EBF3E8",
                  color: "#2D5A27",
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                <Award size={16} /> Méthode scientifique · 60% de la note finale
              </div>
              <h1
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
                  color: "#1F221B",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                  fontFamily: "var(--font-display)",
                }}
              >
                Qualité nutritionnelle
              </h1>
              <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.6, margin: 0 }}>
                La qualité nutritionnelle représente 60% de la note Eatsmart. Elle s'appuie sur la méthode officielle du Nutri-Score validée par la communauté scientifique médicale, adaptée aux habitudes du consommateur tunisien.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: 240,
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Image
                src="/assets_v2/methodology_nutrition.jpg"
                alt="Équilibre nutritionnel et aliments sains méditerranéens"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px" }}>
          {/* Nutri-score Scale Visual Card */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "28px 32px",
              border: "1px solid rgba(45, 90, 39, 0.16)",
              marginBottom: 24,
              boxShadow: "0 4px 18px rgba(45, 90, 39, 0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Gauge size={22} color="#2D5A27" />
              <h2 style={{ fontSize: "1.25rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                L'échelle Nutri-Score de référence (A à E)
              </h2>
            </div>
            <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 20 }}>
              Le Nutri-Score calcule un score numérique par tranche de 100g ou 100ml. Ce score est ensuite converti sur l'échelle 0 à 100 d'Eatsmart pour une lisibilité immédiate :
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12 }}>
              <div style={{ background: "#E8F5E9", border: "1px solid #81C784", borderRadius: 14, padding: "14px", textAlign: "center" }}>
                <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 900, color: "#1B5E20" }}>A</span>
                <strong style={{ fontSize: "0.85rem", color: "#2E7D32" }}>Excellent</strong>
                <span style={{ display: "block", fontSize: "0.78rem", color: "#6E675C", marginTop: 4 }}>Score 80-100</span>
              </div>

              <div style={{ background: "#F1F8E9", border: "1px solid #AED581", borderRadius: 14, padding: "14px", textAlign: "center" }}>
                <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 900, color: "#33691E" }}>B</span>
                <strong style={{ fontSize: "0.85rem", color: "#558B2F" }}>Bon</strong>
                <span style={{ display: "block", fontSize: "0.78rem", color: "#6E675C", marginTop: 4 }}>Score 60-79</span>
              </div>

              <div style={{ background: "#FFFDE7", border: "1px solid #FFF176", borderRadius: 14, padding: "14px", textAlign: "center" }}>
                <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 900, color: "#F57F17" }}>C</span>
                <strong style={{ fontSize: "0.85rem", color: "#F9A825" }}>Moyen</strong>
                <span style={{ display: "block", fontSize: "0.78rem", color: "#6E675C", marginTop: 4 }}>Score 40-59</span>
              </div>

              <div style={{ background: "#FFF3E0", border: "1px solid #FFB74D", borderRadius: 14, padding: "14px", textAlign: "center" }}>
                <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 900, color: "#E65100" }}>D</span>
                <strong style={{ fontSize: "0.85rem", color: "#EF6C00" }}>Médiocre</strong>
                <span style={{ display: "block", fontSize: "0.78rem", color: "#6E675C", marginTop: 4 }}>Score 20-39</span>
              </div>

              <div style={{ background: "#FFEBEE", border: "1px solid #E57373", borderRadius: 14, padding: "14px", textAlign: "center" }}>
                <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 900, color: "#B71C1C" }}>E</span>
                <strong style={{ fontSize: "0.85rem", color: "#C62828" }}>Mauvais</strong>
                <span style={{ display: "block", fontSize: "0.78rem", color: "#6E675C", marginTop: 4 }}>Score 0-19</span>
              </div>
            </div>
          </div>

          {/* Positifs vs Négatifs Balance Card */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "32px",
              border: "1px solid rgba(61, 58, 52, 0.08)",
              marginBottom: 24,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
            }}
          >
            <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: "0 0 14px", fontWeight: 800 }}>
              L'Équilibre entre nutriments protecteurs et composants à limiter
            </h2>
            <p style={{ color: "#3D3A34", lineHeight: 1.7, fontSize: "0.98rem", marginBottom: 24 }}>
              Pour chaque produit scanné, l'algorithme met en balance les éléments bénéfiques indispensables à la vitalité et les excès favorisant le diabète, l'obésité et l'hypertension artérielle :
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {/* Positive Nutrients */}
              <div style={{ background: "#F1F7EE", borderRadius: 16, padding: "24px", border: "1px solid rgba(45, 90, 39, 0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#2D5A27", fontWeight: 800, marginBottom: 14, fontSize: "1.05rem" }}>
                  <CheckCircle2 size={20} /> Nutriments protecteurs (+)
                </div>
                <ul style={{ paddingLeft: 18, margin: 0, color: "#2E4828", fontSize: "0.92rem", lineHeight: 1.8 }}>
                  <li><strong>Fibres solubles & insolubles :</strong> régulation du transit et de la satiété</li>
                  <li><strong>Protéines de haute qualité :</strong> maintien de la masse musculaire</li>
                  <li><strong>Fruits, légumes & légumineuses :</strong> richesse en vitamines et minéraux (tomates, fèves, piments)</li>
                  <li><strong>Acides gras mono-insaturés :</strong> protection cardiovasculaire (huile d'olive)</li>
                </ul>
              </div>

              {/* Negative Nutrients */}
              <div style={{ background: "#FFF3EE", borderRadius: 16, padding: "24px", border: "1px solid rgba(199, 62, 29, 0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#C73E1D", fontWeight: 800, marginBottom: 14, fontSize: "1.05rem" }}>
                  <AlertTriangle size={20} /> Composants à modérer (-)
                </div>
                <ul style={{ paddingLeft: 18, margin: 0, color: "#6A2210", fontSize: "0.92rem", lineHeight: 1.8 }}>
                  <li><strong>Sucres ajoutés & rapides :</strong> pics insuliniques et risque de stéatose</li>
                  <li><strong>Acides gras saturés :</strong> risque d'athérosclérose vasculaire</li>
                  <li><strong>Sodium / Sel excessif :</strong> facteur aggravant d'hypertension artérielle</li>
                  <li><strong>Forte densité calorique :</strong> apports énergétiques disproportionnés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tunisian Terroir Focus */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "32px",
              border: "1px solid rgba(61, 58, 52, 0.08)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Salad size={22} color="#2D5A27" />
              <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                Valorisation du patrimoine alimentaire tunisien
              </h2>
            </div>
            <p style={{ color: "#3D3A34", lineHeight: 1.7, fontSize: "0.98rem", margin: 0 }}>
              Eatsmart veille à ce que les spécialités du terroir tunisien soient jugées avec justesse : l'<strong>Huile d'Olive Vierge Extra de Tunisie</strong> (bénéficiant d'une teneur exceptionnelle en polyphénols antioxydants), la <strong>Harissa artisanale pure piment</strong> (sans conservateurs industriels) et les <strong>Dattes Deglet Nour</strong> sont reconnues pour leurs vertus protectrices naturelles, tout en alertant le consommateur face aux versions ultra-transformées chargées en sirop de glucose ou en conservateurs chimiques.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
