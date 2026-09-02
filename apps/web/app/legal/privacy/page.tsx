import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumb } from "@/components/subpage/Breadcrumb";
import { YukaFlankClouds } from "@/components/subpage/YukaFlankClouds";
import { DownloadCtaBanner } from "@/components/subpage/DownloadCtaBanner";
import {
  Lock,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  EyeOff,
  Database,
  Mail,
  Trash2,
  Download,
} from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité | Eats.tn (Eatsmart)",
  description: "Zéro publicité, zéro revente de données et conformité stricte INPDP Loi 2004-63.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="yuka-page-wrap position-relative" style={{ overflowX: "hidden" }}>
      <Header />

      {/* Flanking Mediterranean clouds and olive foliage */}
      <YukaFlankClouds variant="legal" />

      <main className="yuka-container position-relative" style={{ zIndex: 1, paddingBottom: 80 }}>
        <Breadcrumb
          items={[
            { label: "Informations Légales" },
            { label: "Politique de Confidentialité" },
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
                <Lock size={16} />
                <span>Protection INPDP · Loi 2004-63</span>
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
                Vos données ne sont <br />
                <span className="highlight-green">pas à vendre</span>
              </h1>

              <p
                style={{
                  color: "#5C564B",
                  fontSize: "1.18rem",
                  lineHeight: 1.7,
                  margin: "0 0 32px",
                  maxWidth: 540,
                }}
              >
                Vos habitudes d'achat et vos choix alimentaires relèvent de votre vie privée intime. Eatsmart applique un principe de minimisation radicale : <span className="highlight-orange">aucun tracker publicitaire</span> et <span className="highlight-green">aucune revente à des tiers</span>.
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
                src="/assets_v2/legal_privacy_shield.jpg"
                alt="Coffre-fort numérique et protection des données"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* CONTRAST DASHBOARD: CE QUE NOUS SAVONS VS CE QUE NOUS NE SAURONS JAMAIS */}
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
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.4rem)",
                color: "#1F221B",
                fontWeight: 800,
                margin: "0 0 10px",
                fontFamily: "var(--font-display)",
              }}
            >
              Transparence sur <span className="highlight-green">nos collectes</span>
            </h2>
            <p style={{ color: "#5C564B", fontSize: "1.05rem", margin: 0 }}>
              Nous ne stockons que le strict minimum nécessaire au bon fonctionnement du scan.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {/* Green Side: Ce que nous savons */}
            <div style={{ background: "#F4F8F1", borderRadius: 24, padding: "28px 24px" }}>
              <h3 style={{ fontSize: "1.2rem", color: "#2D5A27", fontWeight: 800, margin: "0 0 18px", display: "flex", alignItems: "center", gap: 10 }}>
                <CheckCircle2 size={22} color="#2D5A27" /> Ce que nous stockons :
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, fontSize: "0.95rem", color: "#2E4828", lineHeight: 1.6 }}>
                <li>• <strong>Votre email :</strong> uniquement si vous créez un compte (non obligatoire).</li>
                <li>• <strong>Vos favoris & alertes :</strong> enregistrés pour personnaliser vos diagnostics d'additifs.</li>
                <li>• <strong>Vos photos en magasin :</strong> si vous choisissez de contribuer à la base citoyenne.</li>
              </ul>
            </div>

            {/* Red Side: Ce que nous ne saurons jamais */}
            <div style={{ background: "#FDF4F2", borderRadius: 24, padding: "28px 24px" }}>
              <h3 style={{ fontSize: "1.2rem", color: "#C73E1D", fontWeight: 800, margin: "0 0 18px", display: "flex", alignItems: "center", gap: 10 }}>
                <XCircle size={22} color="#C73E1D" /> Ce que nous ne saurons JAMAIS :
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, fontSize: "0.95rem", color: "#6A1400", lineHeight: 1.6 }}>
                <li>• <strong>Votre géolocalisation continue :</strong> nous ne traquons jamais vos déplacements.</li>
                <li>• <strong>Vos coordonnées bancaires :</strong> traitées par des passerelles de paiement sécurisées tierces.</li>
                <li>• <strong>Vos données vendues à des distributeurs :</strong> aucun courtier n'a accès à notre base.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ONE-CLICK DATA CONTROL SECTION */}
        <section
          style={{
            background: "#FAF8F5",
            borderRadius: 36,
            padding: "40px 36px",
            border: "1px solid rgba(61, 58, 52, 0.08)",
            marginBottom: 60,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.45rem", color: "#1F221B", fontWeight: 800, margin: "0 0 10px" }}>
                Vous gardez le contrôle intégral
              </h3>
              <p style={{ color: "#5C564B", fontSize: "1rem", lineHeight: 1.65, margin: 0 }}>
                Conformément à la <strong>Loi organique tunisienne n° 2004-63</strong> de l'INPDP, vous pouvez exporter vos données ou demander la suppression définitive de votre compte par simple message à notre délégué à la protection des données.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a
                href="mailto:contact@eats.tn?subject=Suppression%20de%20compte%20Eatsmart"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#FFFFFF",
                  color: "#C73E1D",
                  padding: "12px 20px",
                  borderRadius: 9999,
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  border: "1.5px solid rgba(199, 62, 29, 0.25)",
                }}
              >
                <Trash2 size={16} /> Demander la suppression de mon compte
              </a>

              <a
                href="mailto:contact@eats.tn?subject=Exportation%20de%20mes%20donnees"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#2D5A27",
                  color: "#FFFFFF",
                  padding: "12px 20px",
                  borderRadius: 9999,
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                }}
              >
                <Download size={16} /> Exporter mes données (INPDP)
              </a>
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
