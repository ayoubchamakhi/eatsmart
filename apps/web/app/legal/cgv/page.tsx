import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { YukaFlankClouds } from "@/components/subpage/YukaFlankClouds";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  ShoppingBag,
  CreditCard,
  Truck,
  RefreshCw,
  Scale,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Conditions Générales de Vente (CGV) | Eats.tn (Eatsmart)",
  description: "Conditions Générales de Vente transparentes en Dinars Tunisiens (TND TTC) régies par la Loi n° 2000-83.",
};

export default function CGVPage() {
  return (
    <div className="yuka-page-wrap position-relative" style={{ overflowX: "hidden" }}>
      <Header />

      {/* Flanking Mediterranean clouds and olive foliage */}
      <YukaFlankClouds variant="legal" />

      <main className="yuka-container position-relative" style={{ zIndex: 1, paddingBottom: 80 }}>
        <Breadcrumb
          items={[
            { label: "Informations Légales" },
            { label: "Conditions Générales de Vente" },
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
                  backgroundColor: "#FEF3EB",
                  color: "#D9531E",
                  padding: "7px 18px",
                  borderRadius: 9999,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                <ShoppingBag size={16} />
                <span>Commerce Électronique Tunisien · Loi 2000-83</span>
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
                Conditions générales <br />
                <span className="highlight-orange">de vente transparentes</span>
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
                L'utilisation de base d'Eatsmart est <span className="highlight-green">100% gratuite</span>. Les fonctionnalités solidaires facultatives sont soumises à la Loi tunisienne n° 2000-83 avec des prix en Dinars Tunisiens (TND) nets de tout frais caché.
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
                src="/assets_v2/legal_cgv_shop.jpg"
                alt="Panier d'achat responsable et prix en Dinars Tunisiens"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* THREE CORE COMMERCIAL PILLARS */}
        <section
          style={{
            background: "#FFFFFF",
            borderRadius: 36,
            padding: "48px 40px",
            border: "1px solid rgba(61, 58, 52, 0.08)",
            boxShadow: "0 16px 45px rgba(0, 0, 0, 0.03)",
            marginBottom: 60,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 32,
            }}
          >
            <div>
              <span style={{ fontSize: "2.6rem", fontWeight: 900, color: "#2D5A27", display: "block", lineHeight: 1, marginBottom: 8, fontFamily: "var(--font-display)" }}>
                TND
              </span>
              <h3 style={{ fontSize: "1.2rem", color: "#1F221B", fontWeight: 800, margin: "0 0 10px" }}>
                Dinar Tunisien TTC
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                Tous les tarifs sont indiqués en Dinars Tunisiens Toutes Taxes Comprises. Aucun frais de conversion de devise ni supplément bancaire opaque.
              </p>
            </div>

            <div>
              <span style={{ fontSize: "2.6rem", fontWeight: 900, color: "#D9531E", display: "block", lineHeight: 1, marginBottom: 8, fontFamily: "var(--font-display)" }}>
                10 Jours
              </span>
              <h3 style={{ fontSize: "1.2rem", color: "#1F221B", fontWeight: 800, margin: "0 0 10px" }}>
                Rétractation intégrale
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                Conformément à l'article 30 de la Loi 2000-83, vous disposez de 10 jours ouvrables pour annuler sans motif votre souscription avec remboursement complet.
              </p>
            </div>

            <div>
              <span style={{ fontSize: "2.6rem", fontWeight: 900, color: "#2D5A27", display: "block", lineHeight: 1, marginBottom: 8, fontFamily: "var(--font-display)" }}>
                Direct
              </span>
              <h3 style={{ fontSize: "1.2rem", color: "#1F221B", fontWeight: 800, margin: "0 0 10px" }}>
                Livraison numérique immédiate
              </h3>
              <p style={{ color: "#5C564B", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                Les fonctionnalités dématérialisées de l'application mobile sont activées sur votre compte à la seconde même de la confirmation du paiement sécurisé.
              </p>
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
