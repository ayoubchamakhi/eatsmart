import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { YukaFlankClouds } from "@/components/subpage/YukaFlankClouds";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Award,
  Sparkles,
  PieChart,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Charte d'Indépendance & Éthique | Eats.tn (Eatsmart)",
  description: "0 DT perçu des marques, 0 publicité et algorithme 100% public en Tunisie.",
};

export default function IndependenceCharterPage() {
  return (
    <div className="yuka-page-wrap position-relative" style={{ overflowX: "hidden" }}>
      <Header />

      {/* Flanking Mediterranean clouds and olive foliage */}
      <YukaFlankClouds variant="terms" />

      <main className="yuka-container position-relative" style={{ zIndex: 1, paddingBottom: 80 }}>
        <Breadcrumb
          items={[
            { label: "Informations Légales" },
            { label: "Charte d'Indépendance" },
          ]}
        />

        {/* HERO: Open Manifesto Style */}
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
                <Award size={16} />
                <span>Manifeste Citoyen & Éthique</span>
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
                Notre serment <br />
                <span className="highlight-green">d'indépendance absolue</span>
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
                Pour mériter la confiance quotidienne des consommateurs en Tunisie, Eatsmart a fait le choix irrévocable d'une indépendance financière totale : <span className="highlight-orange">0 Dinar des marques</span> et <span className="highlight-green">0 publicité commerciale</span>.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                height: 320,
                borderRadius: 32,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(31, 34, 27, 0.08)",
                border: "1px solid rgba(61, 58, 52, 0.06)",
              }}
            >
              <Image
                src="/assets_v2/legal_terms_independence.jpg"
                alt="Balance de justice et indépendance citoyenne"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* FINANCIAL TRANSPARENCY WHEEL / BREAKDOWN */}
        <section
          style={{
            background: "#FFFFFF",
            borderRadius: 36,
            padding: "48px 40px",
            border: "1px solid rgba(61, 58, 52, 0.08)",
            boxShadow: "0 16px 45px rgba(0, 0, 0, 0.03)",
            marginBottom: 60,
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            <span
              style={{
                color: "#2D5A27",
                fontSize: "0.85rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: 8,
              }}
            >
              Transparence Financière Totale
            </span>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.4rem)",
                color: "#1F221B",
                fontWeight: 800,
                margin: 0,
                fontFamily: "var(--font-display)",
              }}
            >
              D'où proviennent <span className="highlight-green">nos financements ?</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {/* Revenue Stream 1 */}
            <div
              style={{
                background: "#FAF8F5",
                borderRadius: 24,
                padding: "28px 24px",
                border: "1.5px solid rgba(45, 90, 39, 0.2)",
              }}
            >
              <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#2D5A27", display: "block", lineHeight: 1, marginBottom: 8, fontFamily: "var(--font-display)" }}>
                80%
              </span>
              <h3 style={{ fontSize: "1.15rem", color: "#1F221B", fontWeight: 800, margin: "0 0 8px" }}>
                Abonnements Membres
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                Cotisations solidaires des utilisateurs choisissant de soutenir le projet pour débloquer le mode hors-ligne et la recherche avancée.
              </p>
            </div>

            {/* Revenue Stream 2 */}
            <div
              style={{
                background: "#FAF8F5",
                borderRadius: 24,
                padding: "28px 24px",
                border: "1.5px solid rgba(196, 127, 0, 0.2)",
              }}
            >
              <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#C47F00", display: "block", lineHeight: 1, marginBottom: 8, fontFamily: "var(--font-display)" }}>
                20%
              </span>
              <h3 style={{ fontSize: "1.15rem", color: "#1F221B", fontWeight: 800, margin: "0 0 8px" }}>
                Guides & Éditions
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                Vente de guides pédagogiques imprimés et de calendriers saisonniers des récoltes locales en Tunisie.
              </p>
            </div>

            {/* Revenue Stream 3: Zero brands */}
            <div
              style={{
                background: "#FAF8F5",
                borderRadius: 24,
                padding: "28px 24px",
                border: "1.5px solid rgba(199, 62, 29, 0.2)",
              }}
            >
              <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#C73E1D", display: "block", lineHeight: 1, marginBottom: 8, fontFamily: "var(--font-display)" }}>
                0%
              </span>
              <h3 style={{ fontSize: "1.15rem", color: "#C73E1D", fontWeight: 800, margin: "0 0 8px" }}>
                Marques alimentaires
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                Aucune rémunération, aucun partenariat sponsorisé et aucun placement de produit n'est accepté. Jamais.
              </p>
            </div>

            {/* Revenue Stream 4: Zero ads */}
            <div
              style={{
                background: "#FAF8F5",
                borderRadius: 24,
                padding: "28px 24px",
                border: "1.5px solid rgba(199, 62, 29, 0.2)",
              }}
            >
              <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#C73E1D", display: "block", lineHeight: 1, marginBottom: 8, fontFamily: "var(--font-display)" }}>
                0%
              </span>
              <h3 style={{ fontSize: "1.15rem", color: "#C73E1D", fontWeight: 800, margin: "0 0 8px" }}>
                Publicités & Bannières
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                Pas de régies publicitaires (Google Ads, Facebook SDK), pas de bannières intrusives, pas de cookies de ciblage.
              </p>
            </div>
          </div>
        </section>

        {/* SIDE-BY-SIDE CONTRAST: CE QUE NOUS REFUSONS VS NOS ENGAGEMENTS */}
        <section style={{ marginBottom: 60 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 32,
            }}
          >
            {/* Red Column: Ce que font les applis commerciales */}
            <div
              style={{
                background: "#FDF4F2",
                borderRadius: 32,
                padding: "36px 32px",
                border: "1.5px solid rgba(199, 62, 29, 0.2)",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", color: "#C73E1D", fontWeight: 800, margin: "0 0 20px" }}>
                Ce que nous refusons catégoriquement :
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.95rem", color: "#6A1400", lineHeight: 1.6 }}>
                  <XCircle size={20} color="#C73E1D" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Vendre vos données de consommation :</strong> aucune grande surface ne recevra jamais la liste de vos scans.
                  </div>
                </li>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.95rem", color: "#6A1400", lineHeight: 1.6 }}>
                  <XCircle size={20} color="#C73E1D" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Proposer des classements payants :</strong> les industriels ne peuvent pas acheter leur place en tête de rayon.
                  </div>
                </li>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.95rem", color: "#6A1400", lineHeight: 1.6 }}>
                  <XCircle size={20} color="#C73E1D" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Édulcorer les risques sanitaires :</strong> si un additif est dangereux, il est sanctionné sans complaisance.
                  </div>
                </li>
              </ul>
            </div>

            {/* Green Column: Notre serment d'honneur */}
            <div
              style={{
                background: "#F3F8F1",
                borderRadius: 32,
                padding: "36px 32px",
                border: "1.5px solid rgba(45, 90, 39, 0.2)",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", color: "#2D5A27", fontWeight: 800, margin: "0 0 20px" }}>
                Notre serment envers les Tunisiens :
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} color="#2D5A27" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Algorithme 100% public :</strong> chaque citoyen peut vérifier comment sa note a été calculée.
                  </div>
                </li>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} color="#2D5A27" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Recommandations neutres et locales :</strong> valorisation exclusive des alternatives saines du terroir.
                  </div>
                </li>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} color="#2D5A27" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Contrôle citoyen permanent :</strong> corrections et signalements d'erreurs traités en toute franchise.
                  </div>
                </li>
              </ul>
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
