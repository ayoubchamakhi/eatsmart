import Image from "next/image";
import { Star, ShieldCheck, Sparkles } from "lucide-react";

export function DownloadCtaBanner() {
  return (
    <section style={{ margin: "72px 0 32px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #2D5A27 0%, #1E3F20 100%)",
          borderRadius: 32,
          padding: "52px 48px",
          color: "#FFFFFF",
          boxShadow: "0 24px 60px rgba(45, 90, 39, 0.22)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40,
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "-20%",
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(162, 213, 153, 0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255, 255, 255, 0.15)",
              color: "#EBF3E8",
              padding: "6px 14px",
              borderRadius: 9999,
              fontSize: "0.82rem",
              fontWeight: 700,
              marginBottom: 16,
              backdropFilter: "blur(8px)",
            }}
          >
            <Sparkles size={15} /> Application 100% Gratuite & Indépendante
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 14px",
              fontFamily: "var(--font-display)",
            }}
          >
            Faites les bons choix pour votre santé
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.88)",
              margin: "0 0 28px",
              maxWidth: 500,
            }}
          >
            Scannez vos aliments en supermarché en Tunisie, repérez instantanément les additifs à risque et découvrez les meilleures alternatives locales.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <a
              href="/#download"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#FFFFFF",
                color: "#1F221B",
                padding: "10px 20px",
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: "0.92rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
                transition: "transform 0.2s ease",
              }}
            >
              <Image
                src="/assets_v2/play_store_FR.svg"
                alt="Google Play"
                width={110}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </a>

            <a
              href="/#download"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#FFFFFF",
                color: "#1F221B",
                padding: "10px 20px",
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: "0.92rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
                transition: "transform 0.2s ease",
              }}
            >
              <Image
                src="/assets_v2/apps_store_FR.svg"
                alt="App Store"
                width={100}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 24,
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.82)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 3, color: "#FFD166" }}>
              <Star size={15} fill="#FFD166" />
              <Star size={15} fill="#FFD166" />
              <Star size={15} fill="#FFD166" />
              <Star size={15} fill="#FFD166" />
              <Star size={15} fill="#FFD166" />
            </div>
            <span>
              <strong>4.8 / 5</strong> · Plus de 50 000 produits tunisiens analysés
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              width: 280,
              height: 280,
              filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.25))",
            }}
          >
            <Image
              src="/assets_v2/cta_mascot_app.png"
              alt="Mascotte et application mobile Eatsmart"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
