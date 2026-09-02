import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export const metadata = {
  title: "Conditions d'Utilisation | Eatsmart Tunisie",
  description: "Conditions d'utilisation et charte d'indépendance d'Eatsmart.",
};

export default function TermsPage() {
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
        <BookOpen size={32} color="#2D5A27" />
        <h1 style={{ margin: 0, fontSize: "2rem", color: "#1F221B" }}>Conditions d'Utilisation</h1>
      </div>
      <p style={{ color: "#6E675C", fontSize: "0.95rem" }}>
        Dernière mise à jour : 2 septembre 2026
      </p>

      <hr style={{ border: "none", borderTop: "1px solid rgba(61,58,52,0.1)", margin: "24px 0" }} />

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>1. Objet du service</h2>
        <p>
          Eatsmart est un service d'information nutritionnelle destiné à aider les consommateurs en Tunisie à décrypter les étiquettes alimentaires, comprendre les additifs et découvrir des alternatives locales plus équilibrées.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>2. Caractère informatif et non médical</h2>
        <p>
          Les scores (0 à 100), alertes d'allergènes et évaluations d'additifs sont fournis à titre informatif et préventif. Ils ne constituent pas un avis médical ou un diagnostic thérapeutique. En cas de pathologie ou d'allergie sévère, consultez toujours votre médecin ou un professionnel de santé agréé.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>3. Méthodologie et neutralité</h2>
        <p>
          Le calcul des notes est basé sur la formule publique du Nutri-Score officiel (60%), la présence et l'évaluation scientifique des additifs selon les avis de l'EFSA (40%), ainsi que la valorisation du terroir tunisien et des produits certifiés Bio. Aucune marque ne peut payer pour modifier ou améliorer son score.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: "1.3rem", color: "#2D5A27", marginBottom: 8 }}>4. Propriété intellectuelle</h2>
        <p>
          L'application Eatsmart, ses logos, sa marque et son algorithme d'évaluation sont protégés par le droit d'auteur. Les données sur les produits alimentaires sont ouvertes et partagées dans l'intérêt public des citoyens tunisiens.
        </p>
      </section>
    </div>
  );
}
