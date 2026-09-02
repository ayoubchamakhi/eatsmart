import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  ShieldCheck,
  Sparkles,
  Scale,
  Award,
  ChevronRight,
  CheckCircle2,
  HeartHandshake,
  BadgeAlert,
} from "lucide-react";

export const metadata = {
  title: "Charte d'Indépendance et Éthique | Eats.tn - Eatsmart Tunisie",
  description:
    "Découvrez notre charte d'indépendance intégrale : 100% sans publicité, 0 rémunération de marques et évaluation scientifique neutre pour la Tunisie.",
};

export default function IndependenceCharterPage() {
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
            <span style={{ color: "#6E675C" }}>Informations Légales</span>
            <ChevronRight size={14} color="#A8A297" />
            <span style={{ color: "#1F221B", fontWeight: 700 }}>Charte d'Indépendance</span>
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
                <Award size={16} /> Éthique Citoyenne & Neutralité
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
                Charte d'Indépendance
              </h1>
              <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.6, margin: 0 }}>
                Pour garantir une information sincère et digne de confiance aux consommateurs tunisiens, Eatsmart a fait le choix irrévocable d'une indépendance totale vis-à-vis de l'industrie agroalimentaire.
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
                src="/assets_v2/legal_terms_independence.jpg"
                alt="Balance de justice impartiale et éthique alimentaire 100% indépendante"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px" }}>
          {/* Independence Manifesto Card */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "30px",
              border: "1px solid rgba(45, 90, 39, 0.16)",
              marginBottom: 24,
              boxShadow: "0 4px 18px rgba(45, 90, 39, 0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "#EBF3E8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2D5A27",
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Les 3 piliers inviolables d'Eatsmart
                </h2>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#6E675C" }}>
                  Pourquoi vous pouvez avoir une confiance absolue dans nos notes
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 16,
              }}
            >
              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Pilier 1
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.05rem" }}>0 Dinar perçu des marques</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Pilier 2
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.05rem" }}>0 Publicité commerciale</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Pilier 3
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.05rem" }}>100% Algorithme public</strong>
              </div>
            </div>
          </div>

          {/* Detailed Pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Card 1 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <ShieldCheck size={20} color="#2D5A27" /> 1. Zéro rémunération de la part des industriels
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Aucun fabricant agroalimentaire, aucun distributeur et aucune régie commerciale ne peut verser d'argent à Eatsmart pour modifier une note, masquer un additif à risque ou sponsoriser une recommandation de produit. Toutes les notations sont calculées automatiquement et de manière strictement impartiale.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Sparkles size={20} color="#2D5A27" /> 2. Algorithme public, transparent et universel
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                La méthode de calcul d'Eatsmart est <strong>100% publique</strong>. Elle repose sur des fondations scientifiques reconnues : le standard officiel Nutri-Score (60%), l'évaluation toxicologique des additifs par l'EFSA et l'OMS (30%), et la valorisation du terroir bio tunisien (10%). Cette formule est rigoureusement identique pour chaque produit, sans aucune dérogation.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <HeartHandshake size={20} color="#2D5A27" /> 3. Recommandations d'alternatives saines et locales
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Lorsqu'un produit scanné obtient une note médiocre, l'application suggère des alternatives de la même catégorie présentant une meilleure qualité nutritionnelle et moins d'additifs. Aucune marque ne peut payer pour figurer dans cette liste : la sélection est purement algorithmique, avec un encouragement fort pour les productions artisanales et locales tunisiennes.
              </p>
            </div>

            {/* Card 4 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Scale size={20} color="#2D5A27" /> 4. Information citoyenne et non diagnostic médical
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Les évaluations délivrées par Eatsmart constituent un outil pédagogique et citoyen d'aide à la décision du quotidien lors de vos courses. Elles ne constituent en aucun cas une prescription médicale ou un avis clinique individualisé. Pour toute pathologie spécifique, demandez conseil à votre médecin ou nutritionniste diplômé.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
