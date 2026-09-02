import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  ShieldCheck,
  Sparkles,
  Scale,
  Award,
  HeartHandshake,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Charte d'Indépendance & Conditions d'Utilisation | Eats.tn (Eatsmart)",
  description:
    "Découvrez notre charte d'indépendance intégrale : 100% sans publicité, zéro rémunération des marques, algorithme public et alternatives saines pour la Tunisie.",
};

export default function IndependenceCharterPage() {
  return (
    <div className="yuka-page-wrap">
      <Header />

      <main className="yuka-container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Informations Légales" },
            { label: "Charte d'Indépendance" },
          ]}
        />

        {/* Hero Section */}
        <SubpageHero
          badgeIcon={<Award size={16} />}
          badgeText="Éthique Citoyenne & Neutralité Absolue"
          badgeVariant="sage"
          title="Charte d'Indépendance et d'Éthique"
          description="Pour mériter la confiance quotidienne des consommateurs en Tunisie, Eatsmart a fait le choix irrévocable d'une indépendance financière et éditoriale absolue vis-à-vis de l'industrie agroalimentaire."
          imageSrc="/assets_v2/legal_terms_independence.jpg"
          imageAlt="Balance d'équité impartiale et indépendance alimentaire 100% citoyenne"
        />

        {/* 3 Pillars of Independence Dashboard Card */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card" style={{ border: "1.5px solid rgba(45, 90, 39, 0.18)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Les 3 piliers inviolables d'Eatsmart
                </h2>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#6E675C" }}>
                  Pourquoi vous pouvez avoir une confiance aveugle dans nos évaluations
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Pilier 1
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.15rem" }}>0 Dinar des marques</strong>
                <p style={{ color: "#6E675C", fontSize: "0.85rem", margin: "6px 0 0", lineHeight: 1.5 }}>
                  Aucun industriel ne peut payer pour changer sa note ou masquer un additif.
                </p>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Pilier 2
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.15rem" }}>0 Publicité commerciale</strong>
                <p style={{ color: "#6E675C", fontSize: "0.85rem", margin: "6px 0 0", lineHeight: 1.5 }}>
                  Pas de bannières, pas de marques sponsorisées, pas d'influence mercantile.
                </p>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Pilier 3
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.15rem" }}>100% Algorithme public</strong>
                <p style={{ color: "#6E675C", fontSize: "0.85rem", margin: "6px 0 0", lineHeight: 1.5 }}>
                  Formule transparente basée sur le Nutri-Score et les avis toxicologiques EFSA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Chapters */}
        <section style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
          {/* Chapter 1 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  1. Zéro rémunération de la part des industriels
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Aucun fabricant de produits alimentaires, distributeur ou lobby professionnel ne peut verser d'argent à Eatsmart pour faire modifier la note d'un produit, masquer un additif à risque ou figurer parmi les recommandations d'alternatives saines. Toutes les analyses sont automatisées et strictement impartiales.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-coral">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  2. Algorithme public, universel et transparent
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  La méthode de calcul d'Eatsmart est <strong>100% publique et accessible à tous</strong>. Elle repose sur des bases scientifiques officielles (Nutri-Score officiel et rapports toxicologiques de l'EFSA). La formule est appliquée de manière rigoureusement identique à l'ensemble des références du marché, sans exception ni passe-droit.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-amber">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  3. Recommandations d'alternatives objectives et locales
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Lorsqu'un produit obtient une note médiocre, l'application suggère des alternatives de la même catégorie présentant un meilleur profil nutritionnel et moins d'additifs. Aucune marque ne peut payer pour figurer dans ces recommandations : la sélection est purement algorithmique, avec une mise en valeur des productions artisanales et des filières du terroir tunisien.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Scale size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  4. Information citoyenne et non prescription médicale
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Les scores et diagnostics d'Eatsmart constituent un guide pédagogique d'aide à la décision du quotidien lors de vos courses. Ils ne remplacent en aucun cas un suivi médical individualisé ou les recommandations d'un médecin nutritionniste diplômé.
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
