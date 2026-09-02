import Link from "next/link";
import { ArrowLeft, Scale, Building2, FileText, Phone, Mail, MapPin, Server, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Mentions Légales | Eats.tn - Eatsmart Tunisie",
  description: "Mentions légales, identification de l'éditeur, numéro RNE, matricule fiscal et hébergement du site eats.tn.",
};

export default function MentionsLegalesPage() {
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
        <Scale size={34} color="#2D5A27" />
        <h1 style={{ margin: 0, fontSize: "2.2rem", color: "#1F221B", fontWeight: 800 }}>Mentions Légales</h1>
      </div>
      <p style={{ color: "#6E675C", fontSize: "0.95rem", marginBottom: 28 }}>
        Conformément à la Loi n° 2000-83 du 9 août 2000 relative aux échanges et au commerce électroniques et à la réglementation tunisienne en vigueur.
      </p>

      <div
        style={{
          background: "#F4EFEA",
          border: "1px solid rgba(45, 90, 39, 0.15)",
          borderRadius: 12,
          padding: "20px 24px",
          marginBottom: 36,
        }}
      >
        <h2 style={{ fontSize: "1.15rem", color: "#2D5A27", margin: "0 0 12px 0", display: "flex", alignItems: "center", gap: 8 }}>
          <Building2 size={20} /> Synthèse d'identification légale
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, fontSize: "0.92rem" }}>
          <div><strong>Nom commercial :</strong> Eats.tn (Eatsmart Tunisie)</div>
          <div><strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)</div>
          <div><strong>Matricule fiscal / RNE :</strong> 1995597F</div>
          <div><strong>Siège social :</strong> Rue el Hamra, Raoued, 2083 Ariana, Tunisie</div>
          <div><strong>Téléphone :</strong> +216 55 349 948</div>
          <div><strong>Devise des transactions :</strong> Dinar Tunisien (TND)</div>
        </div>
      </div>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: "1.35rem", color: "#1F221B", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <Building2 size={20} color="#2D5A27" /> 1. Éditeur de la plateforme
        </h2>
        <p>
          Le site web <strong>https://eats.tn</strong> et l'application mobile <strong>Eatsmart</strong> sont édités et exploités par :
        </p>
        <ul style={{ paddingLeft: 20, margin: "8px 0" }}>
          <li><strong>Dénomination sociale :</strong> EATSMART TUNISIE SARL</li>
          <li><strong>Forme juridique :</strong> Société à Responsabilité Limitée de droit tunisien</li>
          <li><strong>Nom commercial :</strong> Eats.tn / Eatsmart</li>
          <li><strong>Siège social :</strong> Rue el Hamra, Raoued, 2083 Ariana, Tunisie</li>
          <li><strong>Identifiant Unique au RNE / Matricule Fiscal :</strong> 1995597F</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: "1.35rem", color: "#1F221B", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <Phone size={20} color="#2D5A27" /> 2. Coordonnées et Service Client
        </h2>
        <p>Pour toute information, assistance ou réclamation, vous pouvez contacter nos équipes :</p>
        <ul style={{ paddingLeft: 20, margin: "8px 0" }}>
          <li><strong>Adresse e-mail :</strong> <a href="mailto:contact@eats.tn" style={{ color: "#2D5A27", fontWeight: 700 }}>contact@eats.tn</a></li>
          <li><strong>Téléphone :</strong> <a href="tel:+21655349948" style={{ color: "#2D5A27", fontWeight: 700 }}>+216 55 349 948</a> (du lundi au vendredi de 9h à 18h)</li>
          <li><strong>Adresse postale :</strong> EATSMART TUNISIE SARL, Rue el Hamra, Raoued, 2083 Ariana, Tunisie</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: "1.35rem", color: "#1F221B", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <Server size={20} color="#2D5A27" /> 3. Hébergement
        </h2>
        <p>
          La plateforme eats.tn et les services d'API sont hébergés sur une infrastructure Cloud dédiée et sécurisée :
        </p>
        <ul style={{ paddingLeft: 20, margin: "8px 0" }}>
          <li><strong>Hébergeur :</strong> Cloud VPS Datacenter Haute Disponibilité</li>
          <li><strong>Localisation des données :</strong> Serveurs européens sécurisés conformes aux normes de sécurité internationales (ISO 27001)</li>
          <li><strong>Sauvegardes :</strong> Sauvegardes automatisées chiffrées quotidiennes avec rétention glissante</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: "1.35rem", color: "#1F221B", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <ShieldCheck size={20} color="#2D5A27" /> 4. Protection des données personnelles (INPDP)
        </h2>
        <p>
          Le traitement des données à caractère personnel collectées sur ce site est réalisé conformément à la <strong>Loi organique n° 2004-63 du 27 juillet 2004</strong>, portant sur la protection des données à caractère personnel en Tunisie.
        </p>
        <p>
          Conformément à la législation, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données personnelles. Vous pouvez exercer ces droits à tout moment en écrivant à <strong>dpo@eats.tn</strong> ou par courrier recommandé au siège social.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: "1.35rem", color: "#1F221B", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <FileText size={20} color="#2D5A27" /> 5. Propriété intellectuelle et Droit applicable
        </h2>
        <p>
          L'ensemble du contenu du site eats.tn (textes, logos, algorithmes d'analyse, marques, chartes graphiques) est protégé par le Code de la propriété intellectuelle tunisien. Toute reproduction totale ou partielle sans autorisation expresse de EATSMART TUNISIE SARL est strictement interdite.
        </p>
        <p>
          Le présent site est soumis au <strong>droit tunisien</strong>. Tout litige relatif à sa validité, son interprétation ou son exécution sera soumis à la compétence exclusive des <strong>tribunaux de Tunis</strong>.
        </p>
      </section>
    </div>
  );
}
