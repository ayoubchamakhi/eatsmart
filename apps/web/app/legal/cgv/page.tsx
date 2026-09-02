import Link from "next/link";
import { ArrowLeft, ShoppingBag, ShieldCheck, CreditCard, Truck, RefreshCw, Scale } from "lucide-react";

export const metadata = {
  title: "Conditions Générales de Vente (CGV) | Eats.tn",
  description: "Conditions générales de vente et d'utilisation de la plateforme eats.tn, droit applicable en Tunisie.",
};

export default function CGVPage() {
  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px", color: "#3D3A34", lineHeight: 1.75 }}>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          color: "#2D5A27",
          textDecoration: "none",
          fontWeight: 700,
          marginBottom: 24,
        }}
      >
        <ArrowLeft size={18} />
        Retour à l'accueil
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
        <ShoppingBag size={34} color="#2D5A27" />
        <h1 style={{ margin: 0, fontSize: "2.2rem", color: "#1F221B", fontWeight: 800 }}>Conditions Générales de Vente (CGV)</h1>
      </div>
      <p style={{ color: "#6E675C", fontSize: "0.95rem", marginBottom: 28 }}>
        Régies par la Loi n° 2000-83 du 9 août 2000 relative aux échanges et au commerce électroniques en République Tunisienne.
      </p>

      <hr style={{ border: "none", borderTop: "1px solid rgba(61,58,52,0.1)", margin: "24px 0" }} />

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <ShoppingBag size={20} /> 1. Objet et Description des services
        </h2>
        <p>
          Les présentes Conditions Générales de Vente régissent l'accès, l'utilisation des services d'analyse nutritionnelle et, le cas échéant, les abonnements et services premium proposés par <strong>EATSMART TUNISIE SARL</strong> (Eats.tn) aux consommateurs.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <CreditCard size={20} /> 2. Tarifs, Devise (TND) et Détails des taxes
        </h2>
        <p>
          Tous les prix indiqués sur le site eats.tn sont exprimés en <strong>Dinars Tunisiens (TND)</strong>, toutes taxes comprises (TTC), incluant la Taxe sur la Valeur Ajoutée (TVA) légale applicable en Tunisie.
        </p>
        <p>
          Aucun frais supplémentaire n'est facturé sans le consentement exprès et préalable du client avant la validation de la commande.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <CreditCard size={20} /> 3. Modalités de paiement
        </h2>
        <p>
          Les règlements s'effectuent en ligne via des plateformes de paiement sécurisées agréées par la Banque Centrale de Tunisie et le GIE Monétique Tunisie (carte bancaire nationale CIB, e-Dinar, Mastercard, Visa). Les transactions sont chiffrées selon le protocole SSL 256 bits.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <Truck size={20} /> 4. Modalités de livraison
        </h2>
        <p>
          Pour les services numériques et accès abonnés : l'accès est immédiat dès confirmation du paiement en ligne. En cas de commande de supports physiques éventuels, la livraison est assurée sur l'ensemble du territoire tunisien dans un délai moyen de 48 à 72 heures ouvrées.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <RefreshCw size={20} /> 5. Droit de rétractation, Annulation et Remboursement
        </h2>
        <p>
          Conformément à l'article 30 de la Loi tunisienne n° 2000-83, le consommateur dispose d'un délai de <strong>10 jours ouvrables</strong> à compter de la date de conclusion du contrat pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
        </p>
        <p>
          Toute demande de remboursement s'effectue par e-mail à <strong>contact@eats.tn</strong> et est traitée sous un délai maximum de 14 jours via le même moyen de paiement utilisé lors de la commande.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <Scale size={20} /> 6. Résolution des litiges et Droit applicable
        </h2>
        <p>
          Les présentes conditions sont soumises à la loi tunisienne. En cas de litige, les parties s'engagent à privilégier une solution amiable. À défaut, le différend sera porté devant les <strong>tribunaux compétents de Tunis</strong>.
        </p>
      </section>
    </div>
  );
}
