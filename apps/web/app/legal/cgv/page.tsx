import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  ShoppingBag,
  CreditCard,
  Truck,
  RefreshCw,
  Scale,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Conditions Générales de Vente (CGV) | Eats.tn",
  description:
    "Conditions générales de vente et d'utilisation de la plateforme eats.tn, statut auto-entrepreneur, prix en TND et conformité Loi 2000-83 en Tunisie.",
};

export default function CGVPage() {
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
            <span style={{ color: "#1F221B", fontWeight: 700 }}>Conditions Générales de Vente</span>
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
                <ShoppingBag size={16} /> Commerce Électronique Tunisien
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
                Conditions Générales de Vente
              </h1>
              <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.6, margin: 0 }}>
                Régies par la Loi n° 2000-83 du 9 août 2000 relative aux échanges et au commerce électroniques en République Tunisienne.
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
                src="/assets_v2/legal_cgv_shop.jpg"
                alt="Panier d'achats responsables et paiement sécurisé en TND"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px" }}>
          {/* Executive Summary Card */}
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
                <FileCheck size={22} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Synthèse des conditions de vente
                </h2>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#6E675C" }}>
                  Engagements de transparence commerciale avant commande
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
                  Devise officielle
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.1rem" }}>Dinar Tunisien (TND)</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Taxes et frais
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.05rem" }}>Toutes Taxes Comprises (TTC)</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Mode de livraison
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.05rem" }}>Instantanée et dématérialisée</strong>
              </div>

              <div style={{ background: "#FBF9F5", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Droit de rétractation
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.05rem" }}>10 jours ouvrables (Loi 2000-83)</strong>
              </div>
            </div>
          </div>

          {/* Section Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Card 1 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <ShoppingBag size={20} color="#2D5A27" /> 1. Objet du contrat et services proposés
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Les présentes Conditions Générales de Vente régissent l'ensemble des relations contractuelles entre l'éditeur <strong>Eats.tn</strong> (Auto-entrepreneur immatriculé au RNE sous le n° 1995597F) et tout utilisateur souscrivant à nos services d'information nutritionnelle et fonctionnalités numériques avancées (comptes contributeurs, alertes allergènes personnalisées, recherche hors-ligne).
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <CreditCard size={20} color="#2D5A27" /> 2. Prix en Dinar Tunisien (TND) et modalités de paiement
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                L'accès général aux scores et fiches produits est <strong>100% gratuit</strong>. Les options d'abonnement solidaire ou fonctionnalités étendues sont libellées en <strong>Dinars Tunisiens (TND) Toutes Taxes Comprises (TTC)</strong>. Le règlement s'effectue via les moyens de paiement bancaires sécurisés tunisiens (Carte Bancaire nationale CMI/ClicToPay, portefeuille électronique Sobflous ou virement). Aucun coût caché ni frais de transaction supplémentaire n'est facturé à l'acheteur.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Truck size={20} color="#2D5A27" /> 3. Modalités de délivrance immédiate (Livraison numérique)
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                S'agissant de services purement dématérialisés, la mise à disposition des fonctionnalités est <strong>immédiate</strong> dès confirmation du règlement électronique. L'utilisateur reçoit une confirmation par courrier électronique contenant le récapitulatif complet de sa souscription et sa facture horodatée.
              </p>
            </div>

            {/* Card 4 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <RefreshCw size={20} color="#2D5A27" /> 4. Droit de rétractation, annulation et remboursement
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                Conformément à l'<strong>article 30 de la Loi n° 2000-83</strong> relative aux échanges et au commerce électroniques, le consommateur dispose d'un délai légal de <strong>dix (10) jours ouvrables</strong> pour exercer son droit de rétractation à compter de la souscription, sans avoir à motiver sa décision ni payer de pénalités. La demande s'effectue par email à <strong>contact@eats.tn</strong> et le remboursement intégral intervient sous un délai maximum de 10 jours.
              </p>
            </div>

            {/* Card 5 */}
            <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "28px 32px", border: "1px solid rgba(61, 58, 52, 0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <Scale size={20} color="#2D5A27" /> 5. Règlement des litiges et juridiction tunisienne
              </h3>
              <p style={{ color: "#3D3A34", lineHeight: 1.7, margin: 0, fontSize: "0.98rem" }}>
                En cas de réclamation, une solution amiable est systématiquement recherchée en priorité via notre service client (<a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700 }}>contact@eats.tn</a> / <a href="tel:+21655349948" style={{ color: "#2D5A27", fontWeight: 700 }}>+216 55 349 948</a>). À défaut d'accord amiable, les contestations seront soumises à la compétence exclusive des tribunaux du ressort du siège social en Tunisie.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
