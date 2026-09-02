import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { YukaFlankClouds } from "@/components/subpage/YukaFlankClouds";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  Server,
  Scale,
  FileCheck2,
} from "lucide-react";

export const metadata = {
  title: "Mentions Légales & Immatriculation RNE | Eats.tn (Eatsmart)",
  description: "Mentions légales officielles et identifiant fiscal RNE 1995597F en République Tunisienne.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="yuka-page-wrap position-relative" style={{ overflowX: "hidden" }}>
      <Header />

      {/* Flanking Mediterranean clouds and olive leaves */}
      <YukaFlankClouds variant="legal" />

      <main className="yuka-container position-relative" style={{ zIndex: 1, paddingBottom: 80 }}>
        <Breadcrumb
          items={[
            { label: "Informations Légales" },
            { label: "Mentions Légales" },
          ]}
        />

        {/* HERO */}
        <section style={{ padding: "30px 0 60px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#EBF3E8",
                  color: "#2D5A27",
                  padding: "7px 18px",
                  borderRadius: 9999,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                <ShieldCheck size={16} />
                <span>Registre National des Entreprises (RNE)</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5.2vw, 3.5rem)",
                  color: "#1F221B",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  margin: "0 0 24px",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                }}
              >
                Mentions légales & <br />
                <span className="highlight-green">immatriculation officielle</span>
              </h1>

              <p
                style={{
                  color: "#5C564B",
                  fontSize: "1.18rem",
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 540,
                }}
              >
                Conformément à la Loi n° 2000-83 du 9 août 2000 sur le commerce électronique en Tunisie, voici l'ensemble des informations réglementaires d'identification de l'éditeur d'Eatsmart.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                height: 320,
                borderRadius: 32,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(31, 34, 27, 0.08)",
                border: "1px solid rgba(61, 58, 52, 0.06)",
              }}
            >
              <Image
                src="/assets_v2/legal_mentions_seal.jpg"
                alt="Sceau officiel et certificat légal RNE"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* OFFICIAL RNE CERTIFICATE BANNER */}
        <section
          style={{
            background: "#FFFFFF",
            borderRadius: 36,
            padding: "48px 40px",
            border: "2px solid rgba(45, 90, 39, 0.25)",
            boxShadow: "0 18px 45px rgba(0, 0, 0, 0.04)",
            marginBottom: 60,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 32, borderBottom: "1px dashed rgba(61, 58, 52, 0.15)", paddingBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#EBF3E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FileCheck2 size={26} color="#2D5A27" />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", color: "#1F221B", margin: 0, fontWeight: 800 }}>
                  Certificat d'Identification Officiel
                </h2>
                <span style={{ fontSize: "0.85rem", color: "#6E675C" }}>République Tunisienne · Registre National des Entreprises</span>
              </div>
            </div>
            <span style={{ background: "#2D5A27", color: "#FFFFFF", padding: "6px 16px", borderRadius: 9999, fontWeight: 800, fontSize: "0.88rem" }}>
              Identifiant Fiscal : 1995597F
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            <div>
              <span style={{ fontSize: "0.78rem", color: "#8A8378", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.04em", display: "block", marginBottom: 4 }}>
                Dénomination & Marque
              </span>
              <strong style={{ fontSize: "1.2rem", color: "#1F221B" }}>Eats.tn (Eatsmart)</strong>
            </div>

            <div>
              <span style={{ fontSize: "0.78rem", color: "#8A8378", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.04em", display: "block", marginBottom: 4 }}>
                Statut Juridique Légal
              </span>
              <strong style={{ fontSize: "1.2rem", color: "#2D5A27" }}>Auto-entrepreneur</strong>
            </div>

            <div>
              <span style={{ fontSize: "0.78rem", color: "#8A8378", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.04em", display: "block", marginBottom: 4 }}>
                Adresse du Siège
              </span>
              <strong style={{ fontSize: "1rem", color: "#1F221B" }}>Rue el Hamra, Raoued, 2083 Ariana</strong>
            </div>

            <div>
              <span style={{ fontSize: "0.78rem", color: "#8A8378", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.04em", display: "block", marginBottom: 4 }}>
                Ligne Directe
              </span>
              <a href="tel:+21655349948" style={{ fontSize: "1.1rem", color: "#2D5A27", fontWeight: 800, textDecoration: "none" }}>
                +216 55 349 948
              </a>
            </div>

            <div>
              <span style={{ fontSize: "0.78rem", color: "#8A8378", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.04em", display: "block", marginBottom: 4 }}>
                Email Officiel
              </span>
              <a href="mailto:contact@eats.tn" style={{ fontSize: "1.1rem", color: "#2D5A27", fontWeight: 800, textDecoration: "none" }}>
                contact@eats.tn
              </a>
            </div>

            <div>
              <span style={{ fontSize: "0.78rem", color: "#8A8378", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.04em", display: "block", marginBottom: 4 }}>
                Tribunal Compétent
              </span>
              <strong style={{ fontSize: "1rem", color: "#1F221B" }}>Tribunal de Première Instance de l'Ariana</strong>
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
