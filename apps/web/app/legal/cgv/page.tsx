import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  ShoppingBag,
  CreditCard,
  Truck,
  RefreshCw,
  Scale,
  ShieldCheck,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Conditions Générales de Vente (CGV) | Eats.tn (Eatsmart)",
  description:
    "Conditions générales de vente de la plateforme eats.tn : statut d'Auto-entrepreneur, prix en Dinars Tunisiens (TND) TTC, droit de rétractation Loi 2000-83 et juridiction tunisienne.",
};

export default function CGVPage() {
  return (
    <div className="yuka-page-wrap">
      <Header />

      <main className="yuka-container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Informations Légales" },
            { label: "Conditions Générales de Vente" },
          ]}
        />

        {/* Hero Section */}
        <SubpageHero
          badgeIcon={<ShoppingBag size={16} />}
          badgeText="Commerce Électronique & Loi 2000-83"
          badgeVariant="coral"
          title="Conditions Générales de Vente"
          description="Régies par la Loi n° 2000-83 du 9 août 2000 relative aux échanges et au commerce électroniques en République Tunisienne, garantissant une totale transparence avant commande."
          imageSrc="/assets_v2/legal_cgv_shop.jpg"
          imageAlt="Panier d'achats responsables et paiement sécurisé en Dinars Tunisiens TND"
        />

        {/* Commercial Dashboard Card */}
        <section style={{ marginBottom: 40 }}>
          <div className="yuka-card" style={{ border: "1.5px solid rgba(217, 83, 30, 0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div className="yuka-icon-bubble yuka-bubble-coral">
                <FileCheck2 size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Synthèse des garanties commerciales
                </h2>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#6E675C" }}>
                  Informations clés obligatoires accessibles avant tout engagement ou paiement
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
                  Devise contractuelle
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.15rem" }}>Dinar Tunisien (TND)</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Taxes & Frais
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.15rem" }}>Toutes Taxes Comprises (TTC)</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Délai de rétractation
                </span>
                <strong style={{ color: "#2D5A27", fontSize: "1.15rem" }}>10 jours ouvrables (Loi 2000-83)</strong>
              </div>

              <div style={{ background: "#FAF8F5", padding: "18px 20px", borderRadius: 18, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <span style={{ color: "#6E675C", display: "block", fontSize: "0.78rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 4 }}>
                  Livraison des options
                </span>
                <strong style={{ color: "#1F221B", fontSize: "1.15rem" }}>Instantanée et dématérialisée</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Clauses Chapters */}
        <section style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
          {/* Chapter 1 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  1. Objet et champ d'application
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong>Eats.tn</strong> (exploité sous le statut officiel d'<strong>Auto-entrepreneur</strong> en Tunisie, immatriculé au RNE sous le numéro <strong>1995597F</strong>) et toute personne physique ou morale souscrivant aux services numériques payants optionnels proposés dans l'application mobile Eatsmart.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-coral">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  2. Tarification en Dinars Tunisiens (TND) et modes de paiement
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  L'accès de base au scan et à l'analyse des produits alimentaires est <strong>100% gratuit</strong>. Les options d'abonnement solidaire ("Membre") sont facturées en <strong>Dinars Tunisiens (TND) Toutes Taxes Comprises (TTC)</strong> sans aucun frais caché. Le règlement s'effectue via les moyens de paiement électroniques sécurisés agréés en Tunisie (Carte bancaire nationale, ClicToPay, Sobflous ou virement bancaire).
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-amber">
                <Truck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  3. Délivrance immédiate des fonctionnalités numériques
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Les services souscrits étant dématérialisés, l'activation des fonctionnalités numériques (mode hors-ligne, alertes personnalisées, historique illimité) intervient <strong>immédiatement</strong> dès confirmation du paiement. L'utilisateur reçoit une facture électronique horodatée par email.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-sage">
                <RefreshCw size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  4. Droit de rétractation et remboursement (Loi 2000-83)
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Conformément à l'<strong>article 30 de la Loi tunisienne n° 2000-83</strong> relative aux échanges et au commerce électroniques, le consommateur bénéficie d'un délai légal de <strong>dix (10) jours ouvrables</strong> pour exercer son droit de rétractation à compter de la conclusion du contrat, sans pénalité ni motif. La notification s'effectue par email à <strong>contact@eats.tn</strong> et donne lieu à un remboursement complet sous dix jours.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 5 */}
          <div className="yuka-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <div className="yuka-icon-bubble yuka-bubble-coral">
                <Scale size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
                  5. Règlement des réclamations et juridiction compétente
                </h3>
                <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  Toute contestation fait l'objet d'une tentative de conciliation amiable préalable auprès de notre service client (<a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700 }}>contact@eats.tn</a> / <a href="tel:+21655349948" style={{ color: "#2D5A27", fontWeight: 700 }}>+216 55 349 948</a>). En cas de désaccord persistant, les tribunaux compétents de Tunis et de l'Ariana sont seuls compétents pour trancher le litige.
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
