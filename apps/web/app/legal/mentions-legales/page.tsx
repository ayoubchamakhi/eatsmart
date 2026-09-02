import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  Server,
  FileText,
  Scale,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Mentions Légales & Immatriculation RNE | Eats.tn (Eatsmart)",
  description:
    "Mentions légales officielles de la plateforme eats.tn : statut d'Auto-entrepreneur, identifiant fiscal et RNE 1995597F, coordonnées et hébergement en Tunisie.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="yuka-page-wrap">
      <Header />

      <main className="yuka-container">
        {/* Breadcrumbs */}
        <Breadcrumb
          items={[
            { label: "Informations Légales" },
            { label: "Mentions Légales" },
          ]}
        />

        {/* Hero Section */}
        <SubpageHero
          badgeIcon={<ShieldCheck size={16} />}
          badgeText="Conformité Légale & Registre National"
          badgeVariant="sage"
          title="Mentions Légales"
          description="Conformément aux dispositions de la Loi n° 2000-83 du 9 août 2000 relative aux échanges et au commerce électroniques et à la réglementation tunisienne en vigueur."
          imageSrc="/assets_v2/legal_mentions_seal.jpg"
          imageAlt="Certificat légal et sceau d'immatriculation officielle Eats.tn"
        />

        {/* Executive Identity Dashboard Card */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card" style={{ border: "1.5px solid rgba(45, 90, 39, 0.18)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Building2 size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Synthèse d'immatriculation légale
                </h2>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#6E675C" }}>
                  Données certifiées conformes au Registre National des Entreprises (RNE) de Tunisie
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
                  Nom commercial & Marque
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.15rem" }}>Eats.tn (Eatsmart)</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Forme juridique
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.15rem" }}>Auto-entrepreneur</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  RNE / Identifiant Fiscal
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.15rem", fontFamily: "monospace" }}>1995597F</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Adresse du Siège
                </span>
                <strong style={{ color: "#1F221B", fontSize: "0.98rem" }}>Rue el Hamra, Raoued, 2083 Ariana, Tunisie</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Téléphone direct
                </span>
                <a href="tel:+21655349948" style={{ color: "#2D5A27", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}>
                  +216 55 349 948
                </a>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Courrier électronique
                </span>
                <a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}>
                  contact@eats.tn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Chapter Cards */}
        <section style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
          {/* Chapter 1 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <Building2 size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  1. Éditeur du site et de l'application
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Le site web accessible à l'adresse <strong>https://eats.tn</strong> et l'application mobile <strong>Eatsmart</strong> sont édités et exploités par l'entreprise individuelle sous le statut d'<strong>Auto-entrepreneur</strong> en Tunisie, inscrite au Registre National des Entreprises sous le numéro <strong>1995597F</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-coral">
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  2. Service d'assistance et contact consommateur
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Pour toute demande de renseignement, signalement d'erreur de saisie sur un produit ou proposition de partenariat citoyen :<br />
                  • <strong>Email direct :</strong> <a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700 }}>contact@eats.tn</a><br />
                  • <strong>Assistance téléphonique :</strong> <a href="tel:+21655349948" style={{ color: "#2D5A27", fontWeight: 700 }}>+216 55 349 948</a> (du lundi au vendredi de 9h à 18h)<br />
                  • <strong>Adresse postale :</strong> Rue el Hamra, Raoued, 2083 Ariana, Tunisie
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-amber">
                <Server size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  3. Hébergement des services et sécurité des données
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  La plateforme et les API d'Eats.tn sont hébergées sur une infrastructure Cloud dédiée haute disponibilité soumise aux standards internationaux les plus rigoureux de sécurité physique et logique (ISO/IEC 27001, SOC 2 Type II), avec sauvegardes automatiques quotidiennes et chiffrement SSL/TLS des échanges.
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
                  4. Protection des Données Personnelles (INPDP) & Compétence Juridictionnelle
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Conformément aux dispositions de la <strong>Loi organique n° 2004-63</strong> du 27 juillet 2004 portant sur la protection des données à caractère personnel, vous disposez d'un droit permanent d'accès, de rectification et d'effacement de vos données personnelles sur simple demande par email à <strong>contact@eats.tn</strong>. Les présentes mentions sont soumises à la législation de la République Tunisienne. Tout litige relève de la compétence exclusive des tribunaux du ressort du siège de l'éditeur.
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
