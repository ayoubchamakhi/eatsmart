import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  Database,
  Globe2,
  Camera,
  ShieldCheck,
  Sparkles,
  Layers,
  Award,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Base de Données : Ouverte, Citoyenne & Indépendante | Eats.tn",
  description:
    "Comment est construite la base alimentaire Eatsmart en Tunisie : Open Food Facts, codes 619, contributions en magasin et bonus 10% pour l'Agriculture Biologique.",
};

export default function BaseDeDonneesPage() {
  return (
    <div className="yuka-page-wrap">
      <Header />

      <main className="yuka-container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Méthodologie", href: "/methodologie" },
            { label: "Base de données citoyenne" },
          ]}
        />

        {/* Hero Section */}
        <SubpageHero
          badgeIcon={<Database size={16} />}
          badgeText="Open Data · Bien commun citoyen"
          badgeVariant="sage"
          title="Une base de données collaborative et libre"
          description="Le catalogue Eatsmart appartient au public. Il est alimenté en toute transparence par les contributions des consommateurs tunisiens et connecté au projet mondial Open Food Facts."
          imageSrc="/assets_v2/methodology_database.jpg"
          imageAlt="Base de données collaborative ouverte et scans en magasin"
        />

        {/* 3 Pillars of Data Enrichment */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Layers size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Comment notre catalogue s'enrichit-il chaque jour ?
                </h2>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#6E675C" }}>
                  Une synergie entre technologie de reconnaissance et intelligence collective
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {/* Pillar 1 */}
              <div
                style={{
                  background: "#FAF8F5",
                  borderRadius: 22,
                  padding: "28px 24px",
                  border: "1px solid rgba(61, 58, 52, 0.06)",
                }}
              >
                <div className="yuka-icon-bubble yuka-bubble-sage" style={{ marginBottom: 16 }}>
                  <Globe2 size={24} />
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  1. Open Food Facts
                </h3>
                <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  Connexion permanente avec la plus vaste encyclopédie alimentaire ouverte au monde. Les produits tunisiens (identifiables par le préfixe <strong>GS1 619</strong>) bénéficient d'un enrichissement continu de leurs fiches techniques.
                </p>
              </div>

              {/* Pillar 2 */}
              <div
                style={{
                  background: "#FAF8F5",
                  borderRadius: 22,
                  padding: "28px 24px",
                  border: "1px solid rgba(61, 58, 52, 0.06)",
                }}
              >
                <div className="yuka-icon-bubble yuka-bubble-coral" style={{ marginBottom: 16 }}>
                  <Camera size={24} />
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  2. Contributions en rayon
                </h3>
                <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  Lorsqu'un produit scanné n'est pas encore répertorié dans la base, l'utilisateur peut le photographier directement via l'application (face avant, liste des ingrédients, tableau nutritionnel) en moins de 30 secondes.
                </p>
              </div>

              {/* Pillar 3 */}
              <div
                style={{
                  background: "#FAF8F5",
                  borderRadius: 22,
                  padding: "28px 24px",
                  border: "1px solid rgba(61, 58, 52, 0.06)",
                }}
              >
                <div className="yuka-icon-bubble yuka-bubble-amber" style={{ marginBottom: 16 }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  3. Audit & Modération
                </h3>
                <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  Les photos soumises sont traitées par notre moteur OCR de reconnaissance de texte puis soumises à une relecture humaine afin de garantir la stricte exactitude des ingrédients avant calcul du score définitif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10% Bonus for Organic Agriculture */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card" style={{ border: "1.5px solid rgba(45, 90, 39, 0.2)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Sparkles size={24} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                  <h3 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                    Bonus de 10% : Dimension Biologique & Terroir Local
                  </h3>
                  <span
                    style={{
                      background: "#EBF3E8",
                      color: "#2D5A27",
                      padding: "4px 12px",
                      borderRadius: 9999,
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    +10 points bonus
                  </span>
                </div>
                <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}>
                  Afin de soutenir les pratiques agricoles respectueuses de l'environnement et de la santé humaine, un bonus forfaitaire de <strong>10 points</strong> est accordé à tout aliment certifié par un label officiel d'<strong>Agriculture Biologique</strong> (reconnu en Tunisie ou à l'international). Ce bonus récompense l'absence d'engrais chimiques et de résidus de pesticides de synthèse, et valorise la richesse naturelle des récoltes locales.
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
