import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { YukaFlankClouds } from "@/components/subpage/YukaFlankClouds";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  Database,
  Globe2,
  Camera,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Code,
} from "lucide-react";

export const metadata = {
  title: "Base de Données Citoyenne & Libre | Eats.tn (Eatsmart)",
  description: "Catalogue ouvert synchronisé avec Open Food Facts, codes 619 tunisiens et contributions citoyennes.",
};

export default function BaseDeDonneesPage() {
  return (
    <div className="yuka-page-wrap position-relative" style={{ overflowX: "hidden" }}>
      <Header />

      {/* Flanking Mediterranean clouds and olive leaves */}
      <YukaFlankClouds variant="database" />

      <main className="yuka-container position-relative" style={{ zIndex: 1, paddingBottom: 80 }}>
        <Breadcrumb
          items={[
            { label: "Méthodologie", href: "/methodologie" },
            { label: "Base de données citoyenne" },
          ]}
        />

        {/* HERO */}
        <section style={{ padding: "30px 0 60px" }}>
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
                  backgroundColor: "#EBF3E8",
                  color: "#2D5A27",
                  padding: "7px 18px",
                  borderRadius: 9999,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                <Database size={16} />
                <span>Open Data & Intelligence Collective</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5.2vw, 3.5rem)",
                  color: "#1F221B",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  margin: "0 0 24px",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                }}
              >
                Une base de données <br />
                <span className="highlight-green">libre et citoyenne</span>
              </h1>

              <p
                style={{
                  color: "#5C564B",
                  fontSize: "1.18rem",
                  lineHeight: 1.7,
                  margin: "0 0 32px",
                  maxWidth: 540,
                }}
              >
                Eatsmart ne vend aucune donnée et n'appartient à aucun groupe industriel. Notre catalogue est un bien commun public, alimenté au quotidien par les consommateurs en Tunisie et synchronisé avec Open Food Facts.
              </p>

              {/* Live Community Counter Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 16,
                  background: "#FFFFFF",
                  padding: "12px 24px",
                  borderRadius: 9999,
                  border: "1.5px solid rgba(45, 90, 39, 0.2)",
                  boxShadow: "0 8px 24px rgba(45, 90, 39, 0.08)",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#2D5A27",
                    boxShadow: "0 0 0 4px rgba(45, 90, 39, 0.2)",
                  }}
                />
                <span style={{ color: "#1F221B", fontWeight: 700, fontSize: "0.95rem" }}>
                  <strong>52 480</strong> produits tunisiens (GS1 619) répertoriés
                </span>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                height: 340,
                borderRadius: 32,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(31, 34, 27, 0.09)",
                border: "1px solid rgba(61, 58, 52, 0.06)",
              }}
            >
              <Image
                src="/assets_v2/methodology_database.jpg"
                alt="Scan citoyen en supermarché tunisien"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* 4-STEP ILLUSTRATED HORIZONTAL JOURNEY (Not generic cards!) */}
        <section style={{ padding: "60px 0", borderTop: "1px solid rgba(61, 58, 52, 0.08)" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.6rem)",
                color: "#1F221B",
                fontWeight: 800,
                margin: "0 0 14px",
                fontFamily: "var(--font-display)",
              }}
            >
              Comment notre base <span className="highlight-green">s'enrichit-elle ?</span>
            </h2>
            <p style={{ color: "#5C564B", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
              Un processus transparent et sécurisé en 4 étapes pour chaque nouveau produit scanné en magasin.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 28,
              position: "relative",
            }}
          >
            {/* Step 1 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#2D5A27",
                  fontFamily: "var(--font-display)",
                  lineHeight: 1,
                  marginBottom: 12,
                  opacity: 0.85,
                }}
              >
                01
              </span>
              <h3 style={{ fontSize: "1.2rem", color: "#1F221B", fontWeight: 800, margin: "0 0 10px" }}>
                Le scan du code-barres
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                L'utilisateur scanne le code-barres (préfixe national <strong>619</strong> pour les produits fabriqués en Tunisie). Si le produit existe déjà, la note apparaît en une fraction de seconde.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#D9531E",
                  fontFamily: "var(--font-display)",
                  lineHeight: 1,
                  marginBottom: 12,
                  opacity: 0.85,
                }}
              >
                02
              </span>
              <h3 style={{ fontSize: "1.2rem", color: "#1F221B", fontWeight: 800, margin: "0 0 10px" }}>
                La contribution photo
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                Si le produit est inconnu, l'application vous invite à prendre 3 photos rapides : face avant du produit, liste complète des ingrédients et tableau des valeurs nutritionnelles.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#C47F00",
                  fontFamily: "var(--font-display)",
                  lineHeight: 1,
                  marginBottom: 12,
                  opacity: 0.85,
                }}
              >
                03
              </span>
              <h3 style={{ fontSize: "1.2rem", color: "#1F221B", fontWeight: 800, margin: "0 0 10px" }}>
                Extraction OCR & IA
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                Nos algorithmes de reconnaissance optique de caractères (OCR) analysent l'image pour extraire la composition en français et en arabe, identifier les numéros E et calculer les nutriments.
              </p>
            </div>

            {/* Step 4 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#2D5A27",
                  fontFamily: "var(--font-display)",
                  lineHeight: 1,
                  marginBottom: 12,
                  opacity: 0.85,
                }}
              >
                04
              </span>
              <h3 style={{ fontSize: "1.2rem", color: "#1F221B", fontWeight: 800, margin: "0 0 10px" }}>
                Modération & Open Data
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                Une vérification humaine valide la fiche produit. La donnée devient immédiatement disponible pour tous les Tunisiens et est reversée au pot commun d'Open Food Facts.
              </p>
            </div>
          </div>
        </section>

        {/* OPEN DATA MANIFESTO SECTION */}
        <section
          style={{
            background: "#F5F8F3",
            borderRadius: 36,
            padding: "48px 40px",
            border: "1.5px solid rgba(45, 90, 39, 0.15)",
            marginBottom: 60,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 36,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#FFFFFF",
                  color: "#2D5A27",
                  padding: "6px 16px",
                  borderRadius: 9999,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                <Code size={15} /> Licence Libre Copyleft
              </div>

              <h2
                style={{
                  fontSize: "1.75rem",
                  color: "#1F221B",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  margin: "0 0 14px",
                  fontFamily: "var(--font-display)",
                }}
              >
                Les données alimentaires <br />
                <span className="highlight-green">appartiennent à tous</span>
              </h2>

              <p style={{ color: "#4A5243", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                Eatsmart soutient l'ouverture intégrale des données publiques. Nous ne privatisons aucune information collectée : chercheurs, journalistes, associations de consommateurs et développeurs peuvent accéder librement aux fiches produits tunisiennes.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 20, display: "flex", alignItems: "center", gap: 14 }}>
                <CheckCircle2 size={22} color="#2D5A27" />
                <span style={{ color: "#1F221B", fontWeight: 700, fontSize: "0.95rem" }}>
                  Synchronisation bidirectionnelle avec Open Food Facts
                </span>
              </div>

              <div style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 20, display: "flex", alignItems: "center", gap: 14 }}>
                <CheckCircle2 size={22} color="#2D5A27" />
                <span style={{ color: "#1F221B", fontWeight: 700, fontSize: "0.95rem" }}>
                  Zéro monétisation des données de nos utilisateurs
                </span>
              </div>

              <div style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 20, display: "flex", alignItems: "center", gap: 14 }}>
                <CheckCircle2 size={22} color="#2D5A27" />
                <span style={{ color: "#1F221B", fontWeight: 700, fontSize: "0.95rem" }}>
                  Audits citoyens et corrections collaboratives en 1 clic
                </span>
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
