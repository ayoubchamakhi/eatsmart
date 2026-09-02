import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité | Eatsmart Tunisie",
  description: "Engagement de transparence et protection de la vie privée des utilisateurs d'Eatsmart.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 20px", color: "#3D3A34", lineHeight: 1.7 }}>
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

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <ShieldCheck size={32} color="#2D5A27" />
        <h1 style={{ margin: 0, fontSize: "2rem", color: "#1F221B" }}>Politique de Confidentialité</h1>
      </div>
      <p style={{ color: "#6E675C", fontSize: "0.95rem" }}>
        Dernière mise à jour : 2 septembre 2026
      </p>

      <hr style={{ border: "none", borderTop: "1px solid rgba(61,58,52,0.1)", margin: "24px 0" }} />

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>1. Notre engagement de neutralité</h2>
        <p>
          Eatsmart est une application citoyenne et indépendante. Nous ne vendons, ne louons et ne partageons aucune de vos données personnelles avec des industriels agroalimentaires, des annonceurs ou des tiers commerciaux. L'application ne contient aucune publicité.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>2. Utilisation de la caméra</h2>
        <p>
          L'accès à la caméra de votre appareil est sollicité exclusivement pour permettre la détection et la lecture instantanée des codes-barres en magasin, ainsi que la prise de photo lors de l'ajout d'un produit non répertorié. Aucun flux vidéo n'est enregistré ni transmis en continu à nos serveurs.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>3. Données stockées localement</h2>
        <p>
          Votre historique de scan, vos produits favoris et vos préférences de santé (allergies, surveillance du sucre et du sel) sont stockés localement sur votre téléphone via le stockage sécurisé de votre système d'exploitation. Vous pouvez effacer ces données à tout moment depuis l'onglet Profil de l'application.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>4. Contributions citoyennes</h2>
        <p>
          Lorsque vous soumettez un nouveau produit alimentaire, les informations transmises (code-barres, nom, marque, photos de l'emballage) sont utilisées pour enrichir la base de données alimentaire publique au bénéfice de tous les consommateurs tunisiens.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>5. Contact</h2>
        <p>
          Pour toute question concernant vos données ou cette politique : <strong>contact@eatsmart.tn</strong>.
        </p>
      </section>
    </div>
  );
}
