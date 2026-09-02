import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  Lock,
  ShieldCheck,
  EyeOff,
  Smartphone,
  Database,
  Mail,
  UserCheck,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité | Eats.tn (Eatsmart)",
  description:
    "Engagement d'indépendance, zéro publicité et protection intégrale de vos données personnelles sous l'autorité de l'INPDP en Tunisie.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="yuka-page-wrap">
      <Header />

      <main className="yuka-container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Informations Légales" },
            { label: "Politique de Confidentialité" },
          ]}
        />

        {/* Hero Section */}
        <SubpageHero
          badgeIcon={<Lock size={16} />}
          badgeText="Protection de la vie privée & INPDP"
          badgeVariant="sage"
          title="Politique de Confidentialité"
          description="Vos données et vos habitudes d'achat ne regardent que vous. Eatsmart s'engage à ne jamais commercialiser vos informations personnelles et à ne diffuser aucune publicité ciblée."
          imageSrc="/assets_v2/legal_privacy_shield.jpg"
          imageAlt="Bouclier de protection des données personnelles et coffre-fort numérique"
        />

        {/* The 4 Ethical Commitments Card */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card" style={{ border: "1.5px solid rgba(45, 90, 39, 0.18)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Nos 4 engagements de confidentialité fondamentaux
                </h2>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#6E675C" }}>
                  Garanties éthiques strictes conformes au cadre légal de la République Tunisienne
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Zéro Publicité
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.05rem" }}>Aucun tracker commercial tiers</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Zéro Revente
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.05rem" }}>Aucun partage avec les industriels</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Autorité INPDP
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.05rem" }}>Loi organique n° 2004-63</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Contrôle Utilisateur
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.05rem" }}>Suppression et export en 1 clic</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Privacy Chapters */}
        <section style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
          {/* Chapter 1 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <EyeOff size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  1. Principe de minimisation des données
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Eatsmart n'exige aucune inscription obligatoire : vous pouvez scanner librement des aliments en restant totalement anonyme. En cas de création de compte facultative (pour sauvegarder vos favoris et vos alertes personnalisées), seules votre adresse email et un mot de passe chiffré sont stockés. Aucune coordonnée bancaire, géolocalisation continue ou donnée biométrique n'est enregistrée.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-coral">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  2. Finalité exclusive de l'analyse alimentaire
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Les données traitées servent exclusivement à vous fournir le diagnostic nutritionnel du produit scanné, à vous alerter sur la présence d'additifs indésirables et à vous recommander des alternatives saines. Vos données ne sont jamais cédées, louées ou partagées avec des régies publicitaires, distributeurs ou courtiers en données.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-amber">
                <Database size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  3. Durée de conservation et sécurité renforcée
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  L'historique de scan reste conservé sur votre téléphone mobile et peut être effacé par vos soins à tout instant. Les échanges entre l'application et nos serveurs sont protégés par chiffrement HTTPS/TLS 1.3 de bout en bout. Les comptes inactifs depuis plus de 24 mois sont automatiquement purgés.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  4. Exercice de vos droits auprès de l'INPDP
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Conformément à la <strong>Loi organique n° 2004-63</strong> portant sur la protection des données à caractère personnel en Tunisie, vous disposez des droits d'accès, d'opposition, de portabilité et de suppression intégrale de vos informations. Vous pouvez exercer ces droits à tout moment par simple message électronique adressé à notre DPO à : <a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700 }}>contact@eats.tn</a>.
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
