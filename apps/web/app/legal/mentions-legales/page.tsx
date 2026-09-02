import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  Server,
  FileText,
  Scale,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Mentions Légales | Eats.tn - Eatsmart Tunisie",
  description:
    "Mentions légales, identification officielle de l'éditeur sous statut Auto-entrepreneur, immatriculation RNE 1995597F, siège et hébergement du service Eats.tn.",
};

export default function MentionsLegalesPage() {
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
            <span style={{ color: "#1F221B", fontWeight: 700 }}>Mentions Légales</span>
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
                <ShieldCheck size={16} /> Informations Réglementaires & RNE
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
                Mentions Légales
              </h1>
              <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.6, margin: 0 }}>
                Conformément aux dispositions de la Loi n° 2000-83 relative aux échanges et au commerce électroniques et aux exigences réglementaires de la République Tunisienne.
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
                src="/assets_v2/legal_mentions_seal.jpg"
                alt="Sceau officiel et certificat légal Eats.tn"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px" }}>
          {/* Quick Identification Dashboard */}
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
                <Building2 size={22} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Synthèse d'immatriculation légale
                </h2>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#6E675C" }}>
                  Informations certifiées conformes au Registre National des Entreprises (RNE)
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
                  Nom commercial & Marque
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.1rem" }}>Eats.tn (Eatsmart)</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Forme juridique
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.1rem" }}>Auto-entrepreneur</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Numéro RNE / Matricule fiscal
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.1rem", fontFamily: "monospace" }}>1995597F</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Adresse du siège social
                </span>
                <strong style={{ color: "#1F221B", fontSize: "0.95rem" }}>Rue el Hamra, Raoued, 2083 Ariana, Tunisie</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Ligne téléphonique directe
                </span>
                <a href="tel:+21655349948" style={{ color: "#2D5A27", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none" }}>
                  +216 55 349 948
                </a>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Courrier électronique officiel
                </span>
                <a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none" }}>
                  contact@eats.tn
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Regulatory Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Card 1 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Building2 size={20} color="#2D5A27" /> 1. Éditeur de la plateforme et statut juridique
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Le site web accessible à l'adresse <strong>https://eats.tn</strong> et l'application mobile <strong>Eatsmart</strong> sont édités et exploités par l'entreprise individuelle régie par le statut officiel d'<strong>Auto-entrepreneur</strong> en Tunisie, inscrite au Registre National des Entreprises sous le numéro <strong>1995597F</strong>.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Phone size={20} color="#2D5A27" /> 2. Service utilisateur et réclamations
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Pour toute demande d'assistance, suggestion citoyenne, signalement de mise à jour d'étiquetage ou question relative au fonctionnement de l'application :<br />
                • <strong>Email :</strong> <a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700 }}>contact@eats.tn</a><br />
                • <strong>Téléphone :</strong> <a href="tel:+21655349948" style={{ color: "#2D5A27", fontWeight: 700 }}>+216 55 349 948</a> (du lundi au vendredi, de 9h à 18h)<br />
                • <strong>Courrier :</strong> Rue el Hamra, Raoued, 2083 Ariana, Tunisie
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Server size={20} color="#2D5A27" /> 3. Hébergement et sécurité de l'infrastructure
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                L'ensemble des services, API et bases de données d'Eatsmart sont hébergés sur une infrastructure Cloud haute disponibilité avec sauvegardes chiffrées automatiques, conforme aux standards internationaux de protection physique et logique des données (certifications ISO 27001, SOC 2).
              </p>
            </div>

            {/* Card 4 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <FileText size={20} color="#2D5A27" /> 4. Données personnelles (INPDP) et juridiction
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Conformément à la <strong>Loi organique n° 2004-63</strong> du 27 juillet 2004 portant sur la protection des données à caractère personnel, l'utilisateur dispose d'un droit permanent d'accès, d'opposition et de suppression de ses données sur simple demande à <strong>contact@eats.tn</strong>. Les présentes mentions sont régies par le droit de la République Tunisienne. Tout litige relève de la compétence des tribunaux compétents de Tunis et de l'Ariana.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
