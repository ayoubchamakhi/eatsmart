import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Lock,
  ShieldCheck,
  EyeOff,
  Smartphone,
  Database,
  Mail,
  ChevronRight,
  UserCheck,
  FileCheck2,
} from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité | Eats.tn - Eatsmart Tunisie",
  description:
    "Engagement d'indépendance, zéro publicité et protection intégrale de vos données personnelles sous l'autorité de l'INPDP en Tunisie.",
};

export default function PrivacyPolicyPage() {
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
            <span style={{ color: "#1F221B", fontWeight: 700 }}>Politique de Confidentialité</span>
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
                <Lock size={16} /> Protection de la vie privée & INPDP
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
                Politique de Confidentialité
              </h1>
              <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.6, margin: 0 }}>
                Vos habitudes alimentaires ne regardent que vous. Eatsmart s'engage à ne jamais revendre vos données et à ne diffuser aucune publicité ciblée.
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
                src="/assets_v2/legal_privacy_shield.jpg"
                alt="Protection des données privées et coffre-fort numérique Eatsmart"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px" }}>
          {/* Key Privacy Commitments Card */}
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
                  Nos 4 engagements fondamentaux
                </h2>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#6E675C" }}>
                  Garanties éthiques conformes à la réglementation tunisienne
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
                  Zéro Publicité
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.05rem" }}>Aucun tracker commercial tiers</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Zéro Revente
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.05rem" }}>Aucun partage avec les industriels</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Cadre Légal INPDP
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.05rem" }}>Loi organique n° 2004-63</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Contrôle Utilisateur
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.05rem" }}>Export et suppression en 1 clic</strong>
              </div>
            </div>
          </div>

          {/* Section Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Card 1 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <EyeOff size={20} color="#2D5A27" /> 1. Nature des données collectées
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Eatsmart applique le principe de <strong>minimisation stricte des données</strong> :<br />
                • <strong>Consultation anonyme :</strong> Vous pouvez scanner et chercher des produits sans créer de compte.<br />
                • <strong>Compte facultatif :</strong> Seuls une adresse email et un mot de passe chiffré sont requis si vous souhaitez synchroniser vos favoris ou vos alertes allergènes.<br />
                • <strong>Photos de produits :</strong> Lorsque vous photographiez un produit absent du catalogue pour contribution citoyenne, seuls l'emballage et les ingrédients sont analysés. Aucune donnée biométrique ou localisation GPS personnelle n'est enregistrée.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Smartphone size={20} color="#2D5A27" /> 2. Finalité exclusive des traitements
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Les données traitées ont pour unique finalité de vous délivrer l'analyse nutritionnelle, de détecter la présence d'additifs ou d'allergènes conformément à vos préférences choisies, et de vous recommander des alternatives alimentaires plus équilibrées. Aucune donnée n'est cédée à des courtiers de données, régies publicitaires ou groupes de la grande distribution.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Database size={20} color="#2D5A27" /> 3. Durée de conservation et sécurité
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Les historiques de scan locaux restent stockés sur votre appareil mobile. Les données de compte sont conservées pendant la durée d'activité du compte utilisateur, et supprimées sans délai à la demande de fermeture. Les transmissions entre l'application et nos serveurs sont protégées par chiffrement HTTPS/TLS de bout en bout.
              </p>
            </div>

            {/* Card 4 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Mail size={20} color="#2D5A27" /> 4. Exercice de vos droits (INPDP)
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Conformément aux dispositions de la <strong>Loi organique n° 2004-63</strong> portant sur la protection des données à caractère personnel en Tunisie, vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de l'intégralité de vos informations personnelles. Vous pouvez exercer ce droit à tout moment en écrivant à : <a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700 }}>contact@eats.tn</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
