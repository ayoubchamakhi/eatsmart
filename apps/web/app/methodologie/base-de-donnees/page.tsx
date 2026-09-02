import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Database,
  Globe2,
  Users,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Sparkles,
  Smartphone,
  ChevronRight,
  Camera,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Base de Données : 100% Citoyenne, Ouverte et Indépendante | Eats.tn",
  description:
    "Comment est construite la base de données alimentaire Eatsmart en Tunisie : Open Food Facts, contributions citoyennes, codes-barres 619 et totale indépendance.",
};

export default function BaseDeDonneesPage() {
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
            <Link href="/methodologie" style={{ color: "#2D5A27", textDecoration: "none", fontWeight: 600 }}>
              Méthodologie
            </Link>
            <ChevronRight size={14} color="#A8A297" />
            <span style={{ color: "#1F221B", fontWeight: 700 }}>Base de données citoyenne</span>
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
                <Database size={16} /> Open Data · Bien commun citoyen
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
                Base de données citoyenne
              </h1>
              <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.6, margin: 0 }}>
                La base alimentaire Eatsmart est un bien commun public et partagé. Elle s'enrichit au quotidien grâce aux consommateurs qui scannent et photographient les étiquettes en supermarché partout en Tunisie.
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
                src="/assets_v2/methodology_database.jpg"
                alt="Base de données collaborative ouverte et scans de produits alimentaires"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px" }}>
          {/* The 3 Pillars Card */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "32px",
              border: "1px solid rgba(61, 58, 52, 0.08)",
              marginBottom: 24,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
            }}
          >
            <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: "0 0 20px", fontWeight: 800 }}>
              D'où proviennent nos informations nutritionnelles ?
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
              {/* Pillar 1 */}
              <div style={{ background: "#FBF9F5", padding: "24px", borderRadius: 16, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "#EBF3E8", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D5A27", marginBottom: 14 }}>
                  <Globe2 size={22} />
                </div>
                <strong style={{ fontSize: "1.1rem", color: "#1F221B", display: "block", marginBottom: 8 }}>
                  1. Open Food Facts
                </strong>
                <p style={{ color: "#6E675C", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                  Synchronisation continue avec le plus vaste catalogue alimentaire ouvert mondial, enrichi des références tunisiennes portant le préfixe GS1 619.
                </p>
              </div>

              {/* Pillar 2 */}
              <div style={{ background: "#FBF9F5", padding: "24px", borderRadius: 16, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "#EBF3E8", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D5A27", marginBottom: 14 }}>
                  <Camera size={22} />
                </div>
                <strong style={{ fontSize: "1.1rem", color: "#1F221B", display: "block", marginBottom: 8 }}>
                  2. Contributions en magasin
                </strong>
                <p style={{ color: "#6E675C", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                  Lorsqu'un produit scanné n'est pas encore répertorié, l'utilisateur prend en photo la face avant, le tableau nutritionnel et la liste des ingrédients en quelques secondes.
                </p>
              </div>

              {/* Pillar 3 */}
              <div style={{ background: "#FBF9F5", padding: "24px", borderRadius: 16, border: "1px solid rgba(61, 58, 52, 0.06)" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "#EBF3E8", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D5A27", marginBottom: 14 }}>
                  <ShieldCheck size={22} />
                </div>
                <strong style={{ fontSize: "1.1rem", color: "#1F221B", display: "block", marginBottom: 8 }}>
                  3. Audit & Indépendance
                </strong>
                <p style={{ color: "#6E675C", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                  Chaque contribution est vérifiée via OCR intelligent puis validée par notre équipe de modération citoyenne. Aucune marque ne peut modifier unilatéralement sa fiche produit.
                </p>
              </div>
            </div>
          </div>

          {/* 10% Terroir and Bio Bonus */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "32px",
              border: "1px solid rgba(61, 58, 52, 0.08)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Sparkles size={22} color="#2D5A27" />
              <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                Bonus 10% : Certification Bio et Valorisation du Terroir
              </h2>
            </div>
            <p style={{ color: "#3D3A34", lineHeight: 1.7, fontSize: "0.98rem", margin: 0 }}>
              Les 10% restants de la note récompensent les démarches vertueuses : les aliments bénéficiant d'un label d'<strong>Agriculture Biologique</strong> certifié (garantissant l'absence de résidus de pesticides de synthèse) reçoivent un bonus de 10 points. Les produits issus de filières courtes artisanales tunisiennes sont également mis en avant dans nos suggestions d'alternatives saines.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
