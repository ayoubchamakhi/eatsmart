import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  ShieldAlert,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  Beaker,
  ChevronRight,
  Sparkles,
  FlaskConical,
} from "lucide-react";

export const metadata = {
  title: "Analyse des Additifs : Critères Scientifiques & Risques | Eats.tn",
  description:
    "Comment Eatsmart analyse les additifs alimentaires en Tunisie : avis de l'EFSA, 4 niveaux de risque et indépendance totale.",
};

export default function AnalyseAdditifsPage() {
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
            <span style={{ color: "#1F221B", fontWeight: 700 }}>Analyse des additifs</span>
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
                  backgroundColor: "#FEF3EB",
                  color: "#D9531E",
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                <Beaker size={16} /> Évaluation toxicologique · 30% de la note finale
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
                Analyse des additifs
              </h1>
              <p style={{ color: "#5C564B", fontSize: "1.02rem", lineHeight: 1.6, margin: 0 }}>
                Les additifs représentent 30% du score. Chaque colorant, conservateur, émulsifiant ou exhausteur de goût est confronté aux rapports toxicologiques internationaux les plus rigoureux.
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
                src="/assets_v2/methodology_additives.jpg"
                alt="Laboratoire d'évaluation scientifique des additifs alimentaires"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px" }}>
          {/* The 4 Risk Tiers */}
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
            <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: "0 0 10px", fontWeight: 800 }}>
              Les 4 niveaux de risque scientifiquement référencés
            </h2>
            <p style={{ color: "#6E675C", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 24 }}>
              Nos critères intègrent les données de l'<strong>EFSA</strong> (Autorité Européenne de Sécurité des Aliments), du <strong>CIRC / OMS</strong> (Centre International de Recherche sur le Cancer) et des publications académiques indépendantes à comité de lecture :
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Sans risque */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#F1F7EE", padding: "20px", borderRadius: 16, border: "1px solid rgba(45, 90, 39, 0.15)" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#2D5A27", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: 0 }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <strong style={{ color: "#2D5A27", fontSize: "1.05rem", display: "block", marginBottom: 4 }}>
                    1. Sans risque (Vert) · 0 malus
                  </strong>
                  <p style={{ color: "#2E4828", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                    Additifs d'origine naturelle ou synthétique reconnus sans danger avéré aux doses consommées (ex. acide citrique E330, pectines de fruits E440). Aucun impact pénalisant sur la note finale.
                  </p>
                </div>
              </div>

              {/* Risque limité */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#FCF8E3", padding: "20px", borderRadius: 16, border: "1px solid rgba(217, 140, 0, 0.2)" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#D98C00", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: 0 }}>
                  <Info size={20} />
                </div>
                <div>
                  <strong style={{ color: "#8A5A00", fontSize: "1.05rem", display: "block", marginBottom: 4 }}>
                    2. Risque limité (Jaune) · -6 points
                  </strong>
                  <p style={{ color: "#593B00", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                    Substances pour lesquelles des sensibilités digestives légères ou des réactions allergiques rares ont été rapportées chez des sujets prédisposés. Malus modéré de 6 points par additif.
                  </p>
                </div>
              </div>

              {/* Risque modéré */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#FFF0E6", padding: "20px", borderRadius: 16, border: "1px solid rgba(217, 83, 30, 0.2)" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#D9531E", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: 0 }}>
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <strong style={{ color: "#9E340E", fontSize: "1.05rem", display: "block", marginBottom: 4 }}>
                    3. Risque modéré (Orange) · -15 points
                  </strong>
                  <p style={{ color: "#662007", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                    Additifs suspectés d'altérer la perméabilité de la barrière intestinale, de favoriser les inflammations chroniques ou de perturber le métabolisme (ex. colorant caramel au sulfite E150d, émulsifiants polysorbates).
                  </p>
                </div>
              </div>

              {/* Risque élevé */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#FDECE7", padding: "20px", borderRadius: 16, border: "1px solid rgba(199, 62, 29, 0.25)" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#C73E1D", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", flexShrink: 0 }}>
                  <XCircle size={20} />
                </div>
                <div>
                  <strong style={{ color: "#992107", fontSize: "1.05rem", display: "block", marginBottom: 4 }}>
                    4. Risque élevé (Rouge) · -30 points (Plafond score 49/100)
                  </strong>
                  <p style={{ color: "#6A1400", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                    Substances classées cancérogènes probables, perturbateurs endocriniens avérés ou mutagènes (ex. nitrites de sodium E250 dans la charcuterie industrielle, dioxyde de titane E171, colorants azoïques type E102 tartrazine). La présence d'un additif rouge bloque automatiquement le score total à un maximum de 49/100 ("Médiocre").
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Principle of Precaution & Cocktail Effect */}
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
              <FlaskConical size={22} color="#2D5A27" />
              <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                Principe de précaution et effet cocktail
              </h2>
            </div>
            <p style={{ color: "#3D3A34", lineHeight: 1.7, fontSize: "0.98rem", margin: 0 }}>
              Lorsqu'un aliment cumule plusieurs additifs de niveaux de risque différents, les interactions chimiques peuvent démultiplier leur nocivité pour l'organisme : c'est <strong>l'effet cocktail</strong>. Fidèle à sa mission citoyenne indépendante, Eatsmart applique un principe de précaution strict : en cas de controverse scientifique légitime ou de doute épidémiologique sérieux, l'algorithme privilégie toujours la protection de la santé du consommateur.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
